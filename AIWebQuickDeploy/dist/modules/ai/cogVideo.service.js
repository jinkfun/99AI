"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CogVideoService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const chatLog_service_1 = require("../chatLog/chatLog.service");
const globalConfig_service_1 = require("../globalConfig/globalConfig.service");
const upload_service_1 = require("../upload/upload.service");
let CogVideoService = class CogVideoService {
    constructor(chatLogService, globalConfigService, uploadService) {
        this.chatLogService = chatLogService;
        this.globalConfigService = globalConfigService;
        this.uploadService = uploadService;
    }
    async cogVideo(inputs) {
        var _a, _b, _c;
        const { apiKey, proxyUrl, fileInfo, prompt, timeout, assistantLogId } = inputs;
        let result = {
            text: '',
            fileInfo: '',
            taskId: '',
            taskData: '',
            status: 2,
        };
        let response = null;
        let url = '';
        let payloadJson = {};
        const headers = { Authorization: `Bearer ${apiKey}` };
        url = `${proxyUrl}/cogvideox/v4/videos/generations`;
        payloadJson = {
            model: 'cogvideox',
            prompt: prompt,
        };
        if (fileInfo) {
            payloadJson['image_url'] = fileInfo;
        }
        common_1.Logger.log(`正在准备发送请求到 ${url}，payload: ${JSON.stringify(payloadJson)}, headers: ${JSON.stringify(headers)}`, 'CogService');
        try {
            response = await axios_1.default.post(url, payloadJson, { headers });
            common_1.Logger.debug(`任务提交结果，状态码: ${response.status}, 状态消息: ${response.statusText}, 数据: ${JSON.stringify(response.data)}`);
        }
        catch (error) {
            common_1.Logger.error(`任务提交失败: ${error.message}`, 'CogService');
            throw new Error('任务提交失败');
        }
        if ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.id) {
            result.taskId = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.id;
            common_1.Logger.log(`任务提交成功, 任务ID: ${(_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.id}`, 'CogService');
        }
        else {
            throw new Error('未能获取结果数据, 即将重试');
        }
        try {
            await this.pollCogVideoResult({
                proxyUrl,
                apiKey,
                taskId: response.data.id,
                timeout,
                prompt,
                onSuccess: async (data) => {
                    try {
                        await this.chatLogService.updateChatLog(assistantLogId, {
                            videoUrl: data === null || data === void 0 ? void 0 : data.videoUrl,
                            audioUrl: data === null || data === void 0 ? void 0 : data.audioUrl,
                            fileInfo: data === null || data === void 0 ? void 0 : data.fileInfo,
                            answer: (data === null || data === void 0 ? void 0 : data.answer) || prompt,
                            progress: '100%',
                            status: 3,
                            taskId: data === null || data === void 0 ? void 0 : data.taskId,
                            taskData: data === null || data === void 0 ? void 0 : data.taskData,
                        });
                        common_1.Logger.log('视频任务已完成', 'CogService');
                    }
                    catch (error) {
                        common_1.Logger.error(`更新日志失败: ${error.message}`, 'CogService');
                    }
                },
                onGenerating: async (data) => {
                    try {
                        await this.chatLogService.updateChatLog(assistantLogId, {
                            videoUrl: data === null || data === void 0 ? void 0 : data.videoUrl,
                            audioUrl: data === null || data === void 0 ? void 0 : data.audioUrl,
                            fileInfo: data === null || data === void 0 ? void 0 : data.fileInfo,
                            answer: (data === null || data === void 0 ? void 0 : data.answer) || '视频生成中...',
                            progress: data === null || data === void 0 ? void 0 : data.progress,
                            status: data.status,
                        });
                        common_1.Logger.log('视频生成中...', 'CogService');
                    }
                    catch (error) {
                        common_1.Logger.error(`更新日志失败: ${error.message}`, 'CogService');
                    }
                },
                onFailure: async (data) => {
                    try {
                        await this.chatLogService.updateChatLog(assistantLogId, {
                            answer: '视频生成失败',
                            status: data.status,
                        });
                        common_1.Logger.log('生成失败', 'Lum aService');
                    }
                    catch (error) {
                        common_1.Logger.error(`更新日志失败: ${error.message}`, 'CogService');
                    }
                },
            });
        }
        catch (error) {
            common_1.Logger.error('查询生成结果时发生错误:', error.message, 'CogService');
            throw new Error('查询生成结果时发生错误');
        }
        return result;
    }
    async pollCogVideoResult(inputs) {
        const { proxyUrl, apiKey, taskId, timeout, onSuccess, onFailure, onGenerating, prompt, action, } = inputs;
        let result = {
            videoUrl: '',
            audioUrl: '',
            fileInfo: '',
            drawId: '',
            taskData: '',
            status: 2,
            progress: 0,
            answer: '',
        };
        const headers = { Authorization: `Bearer ${apiKey}` };
        const url = `${proxyUrl}/cogvideox/v4/async-result/${taskId}`;
        const startTime = Date.now();
        const totalDuration = 300000;
        const POLL_INTERVAL = 5000;
        let retryCount = 0;
        try {
            while (Date.now() - startTime < timeout) {
                await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
                try {
                    const res = await axios_1.default.get(url, { headers });
                    const interval = setInterval(() => {
                        const elapsed = Date.now() - startTime;
                        let percentage = Math.floor((elapsed / totalDuration) * 100);
                        if (percentage >= 99)
                            percentage = 99;
                        result.answer = `视频生成中 （${percentage}%）`;
                    }, 1000);
                    const responses = res.data;
                    common_1.Logger.debug(`轮询结果: ${JSON.stringify(responses)}`, 'CogService');
                    if (responses.task_status === 'SUCCESS') {
                        result.taskId = responses.request_id;
                        result.taskData = JSON.stringify(responses);
                        common_1.Logger.log('视频生成成功', 'CogService');
                        result.fileInfo = responses.video_result[0].url;
                        common_1.Logger.log(result.fileInfo, 'CogService');
                        try {
                            const localStorageStatus = await this.globalConfigService.getConfigs([
                                'localStorageStatus',
                            ]);
                            if (Number(localStorageStatus)) {
                                const now = new Date();
                                const year = now.getFullYear();
                                const month = String(now.getMonth() + 1).padStart(2, '0');
                                const day = String(now.getDate()).padStart(2, '0');
                                const currentDate = `${year}${month}/${day}`;
                                result.fileInfo = await this.uploadService.uploadFileFromUrl({
                                    url: responses.video_result[0].url,
                                    dir: `video/cog/${currentDate}`,
                                });
                            }
                        }
                        catch (error) {
                            common_1.Logger.error(`上传文件失败: ${error.message}`, 'CogService');
                        }
                        result.answer = `提示词: "${prompt}"`;
                        onSuccess(result);
                        clearInterval(interval);
                        return;
                    }
                    else {
                        onGenerating(result);
                    }
                    if (result.progress) {
                    }
                }
                catch (error) {
                    retryCount++;
                    common_1.Logger.error(`轮询失败，重试次数: ${retryCount}`, 'CogService');
                }
            }
            common_1.Logger.error('轮询超时，请稍后再试！', 'CogService');
            result.status = 4;
            onFailure(result);
            throw new Error('查询超时，请稍后再试！');
        }
        catch (error) {
            common_1.Logger.error(`轮询过程中发生错误: ${error}`, 'CogService');
            result.status = 5;
            onFailure(result);
        }
    }
};
CogVideoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chatLog_service_1.ChatLogService,
        globalConfig_service_1.GlobalConfigService,
        upload_service_1.UploadService])
], CogVideoService);
exports.CogVideoService = CogVideoService;
