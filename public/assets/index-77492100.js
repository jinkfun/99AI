import{d as _e,m as Pe,k as ze,b as y,Q as Re,n as Ue,r as v,o as d,c as f,a as e,f as n,w as s,A as b,t as C,u as t,R as nt,C as me,z as g,_ as x,S as p,v as m,U as te,V as at,L as De,W as qe,X as lt,I as ot,Y as it,l as rt,p as ct,Z as dt,e as ut,F as $,s as ee,M as fe,q as X,j as ft,$ as bt,a0 as ye,a1 as mt,a2 as Ie,K as vt,i as Ae,a3 as gt,a4 as ht}from"./index-6bc7e56b.js";import{f as Q,a as Ce}from"./mjDraw-91093986.js";import{N as ke}from"./InputNumber-173f8f8e.js";import{N as xt}from"./Switch-fc7f619c.js";import{N as be}from"./Select-82230032.js";const wt="/assets/niji-55cc65e6.png",pt="/assets/mj-8c02cbcc.png",yt="/assets/market-f1234219.png",It="/assets/fail-7089de31.png",Oe="/assets/draw-bccd19c4.svg",je="/assets/zoom-426d4db7.svg",At={class:"relative overflow-hidden rounded-md border p-4 transition-all hover:shadow dark:border-neutral-700"},Ct={class:"flex items-center justify-between"},kt={style:{width:"240px"}},Ot={class:"my-4 h-[280px]"},jt={key:0,class:"flex h-full w-full items-center justify-center overflow-hidden rounded-md"},_t={key:1,class:"flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-md"},Pt=["src"],zt=e("span",{class:"mt-3 text-base"},"绘制失败",-1),Rt=e("span",{class:"mt-1"},"已退还余额至您的账户！",-1),Ut={key:2,class:"my-4 h-[280px] relative"},Dt={class:"-mx-4 -mb-4 bg-[#fafafc] px-4 py-2 dark:bg-[#262629]"},qt={key:0,class:"w-full"},Gt={class:"mb-2 flex items-center justify-between"},St=e("span",null,"放大：",-1),Bt={class:"text-base text-neutral-400"},Kt=e("div",{style:{width:"240px"}},[e("p",null,"参数释义：放大某张图片如 U1 放大第一张图片，以此类推")],-1),Ht={class:"flex-1"},Mt={class:"flex items-center justify-around"},Nt=e("p",null,"重新生成一次",-1),Qt={key:1,class:"w-full"},Ft={class:"mb-2 flex items-center justify-between"},Tt=e("span",null,"变换：",-1),Lt={class:"text-base text-neutral-400"},Et=e("div",{style:{width:"240px"}},[e("p",null,"参数释义：以某张图片为基准重新生成 如 V1 则变换第一张图片，以此类推")],-1),Jt={class:"flex-1"},Vt={class:"flex items-center justify-around"},Zt={key:2,class:"w-full mb-2 flex items-center justify-between"},Yt={key:0},Xt={key:0},Wt={key:1},$t={key:1,class:"flex w-full"},es={class:"mb-2 flex flex-1 items-center justify-between"},ts=e("span",null,"调整：",-1),ss={class:"text-base text-neutral-400"},ns=e("div",{style:{width:"275px"}},[e("p",null,"参数释义：Vary 以当前图片为基础调整图片")],-1),as={class:"flex-1"},ls={class:"flex items-center pl-2"},os=["src"],is=e("p",null,"以当前图片为基础大幅增强",-1),rs=["src"],cs=e("p",null,"以当前图片为基础细微调整",-1),ds={key:2},us={key:3,class:"w-full mb-2 flex items-center justify-between"},fs={key:4,class:"w-full mb-2 flex items-center justify-between"},bs={key:5,class:"w-full mb-2 flex items-center justify-between"},ms={key:6},vs={class:"mb-2 flex flex-1 items-center justify-between"},gs=e("span",null,"缩放：",-1),hs={class:"text-base text-neutral-400"},xs=e("div",{style:{width:"270px"}},[e("p",null,"参数释义：Zoom 对当前图片进行无限缩放")],-1),ws={class:"flex-1"},ps={class:"flex items-center pl-2"},ys=["src"],Is=e("p",null,"缩放2倍",-1),As=["src"],Cs=e("p",null,"缩放1.5倍",-1),ks={class:"w-full flex"},Os={class:"text-[#64748b]"},js=_e({__name:"cardItem",props:{drawItemInfo:null},emits:["usePrompt","queryData"],setup(r,{emit:O}){const F=r,se=Pe(),w=ze(),ne=y(()=>se.theme),ae=y(()=>ne.value==="dark"?"#fff":"#000"),W=Re(),j=Ue(),le="/api/midjourney/download",T=v(!1),_=y(()=>{const{status:u}=F.drawItemInfo;if(u===1)return"";if(u===2)return"info";if(u===3)return"primary";if(u===4||u===5)return"error"}),oe=y(()=>{const{status:u}=F.drawItemInfo;if(u===1)return"等待中";if(u===2)return"绘制中";if(u===3)return"成功";if(u===4)return"失败";if(u===5)return"超时"});function L(){O("usePrompt")}async function ie(u){const l=W.info({title:"下载图片",content:"是否确认下载当前图片",positiveText:"下载",negativeText:"取消",onPositiveClick:async()=>(l.loading=!0,new Promise(async c=>{const{fileInfo:k}=u,{filename:H,cosUrl:M}=k,P=await qe.post(le,{url:M},{responseType:"blob"}),R=new Blob([P.data],{type:P.headers["content-type"]}),J=window.URL.createObjectURL(R),z=document.createElement("a");z.href=J,z.download=H,z.click(),c(!0)}))})}async function E(u){W.warning({title:"删除记录",content:"是否确认删除当前绘制记录？",positiveText:"删除",negativeText:"取消",onPositiveClick:async()=>{const{id:l}=u,c=await lt({id:l});if(!c.success)return j.error(c.message);j.success("删除绘制记录成功！"),O("queryData")}})}async function U(u,l){const{id:c}=u;await Q({drawId:c,action:2,orderId:l}),j.success("提交放大绘制任务成功、请等待绘制结束！"),w.token&&await I(),O("queryData")}async function G(u,l){const{id:c}=u;await Q({drawId:c,action:5,orderId:l}),j.success("提交重新生成绘制任务成功、请等待绘制结束！"),w.token&&await I(),O("queryData")}async function A(u,l){const{id:c}=u;await Q({drawId:c,action:3,orderId:l}),j.success("提交图片变换绘制任务成功、请等待绘制结束！"),w.token&&await I(),O("queryData")}async function I(){T.value=!0;try{await w.getUserInfo(),T.value=!1}catch{T.value=!1}}const S=y(()=>{const{progress:u,status:l}=F.drawItemInfo;if(l===1)return"正在排队中...";if(l===2&&!u)return"正在绘制中...";if(l===2&&u===100)return"正在存储图片中..."});async function B(u,l){const{id:c}=u;await Q({drawId:c,action:7,orderId:l}),j.success("提交图片调整绘制任务成功、请等待绘制结束！"),w.token&&await I(),O("queryData")}async function K(u,l){const{id:c}=u;await Q({drawId:c,action:6,orderId:l}),j.success("提交图片调整绘制任务成功、请等待绘制结束！"),w.token&&await I(),O("queryData")}return(u,l)=>(d(),f("div",At,[e("div",Ct,[e("span",null,[n(t(nt),{size:"small",type:t(_)},{default:s(()=>[b(C(t(oe)),1)]),_:1},8,["type"])]),n(t(te),null,{default:s(()=>[r.drawItemInfo.isGroup?(d(),me(t(p),{key:0,placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(g),{size:"tiny",ghost:"",onClick:L},{icon:s(()=>[n(t(x),{icon:"ri:brush-line",class:"text-base"})]),default:s(()=>[b(" 使用 ")]),_:1})]),default:s(()=>[e("div",kt,[e("p",null,C(r.drawItemInfo.fullPrompt),1)])]),_:1})):m("",!0),n(t(g),{size:"tiny",ghost:"",onClick:l[0]||(l[0]=c=>ie(r.drawItemInfo))},{icon:s(()=>[n(t(x),{icon:"mingcute:file-download-line",class:"text-base"})]),default:s(()=>[b(" 下载 ")]),_:1}),n(t(g),{size:"tiny",ghost:"",onClick:l[1]||(l[1]=c=>E(r.drawItemInfo))},{icon:s(()=>[n(t(x),{icon:"ri:delete-bin-line",class:"text-base"})]),default:s(()=>[b(" 删除 ")]),_:1})]),_:1})]),e("div",Ot,[r.drawItemInfo.status===3?(d(),f("div",jt,[n(t(at),{style:{"object-fit":"contain"},src:r.drawItemInfo.fileInfo.thumbImg,"preview-src":r.drawItemInfo.fileInfo.cosUrl,"object-fit":"contain"},null,8,["src","preview-src"])])):m("",!0),[4,5,6].includes(r.drawItemInfo.status)?(d(),f("div",_t,[e("img",{class:"w-[75px]",src:t(It)},null,8,Pt),zt,Rt])):m("",!0),[1,2].includes(r.drawItemInfo.status)?(d(),f("div",Ut,[n(De,{"text-color":t(ae),progress:r.drawItemInfo.progress,tips:t(S)},null,8,["text-color","progress","tips"])])):m("",!0)]),e("div",Dt,[r.drawItemInfo.isGroup?(d(),f("div",qt,[e("div",Gt,[St,e("span",Bt,[n(t(p),{placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[Kt]),_:1})]),e("div",Ht,[e("div",Mt,[n(t(g),{size:"tiny",onClick:l[2]||(l[2]=c=>U(r.drawItemInfo,1))},{default:s(()=>[b(" U1 ")]),_:1}),n(t(g),{size:"tiny",onClick:l[3]||(l[3]=c=>U(r.drawItemInfo,2))},{default:s(()=>[b(" U2 ")]),_:1}),n(t(g),{size:"tiny",onClick:l[4]||(l[4]=c=>U(r.drawItemInfo,3))},{default:s(()=>[b(" U3 ")]),_:1}),n(t(g),{size:"tiny",onClick:l[5]||(l[5]=c=>U(r.drawItemInfo,4))},{default:s(()=>[b(" U4 ")]),_:1}),n(t(p),{placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(g),{size:"tiny",onClick:l[6]||(l[6]=c=>G(r.drawItemInfo,5))},{default:s(()=>[n(t(x),{icon:"solar:refresh-outline",class:"text-base"})]),_:1})]),default:s(()=>[Nt]),_:1})])])])])):m("",!0),r.drawItemInfo.isGroup?(d(),f("div",Qt,[e("div",Ft,[Tt,e("span",Lt,[n(t(p),{placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[Et]),_:1})]),e("div",Jt,[e("div",Vt,[n(t(g),{size:"tiny",onClick:l[7]||(l[7]=c=>A(r.drawItemInfo,1))},{default:s(()=>[b(" V1 ")]),_:1}),n(t(g),{size:"tiny",onClick:l[8]||(l[8]=c=>A(r.drawItemInfo,2))},{default:s(()=>[b(" V2 ")]),_:1}),n(t(g),{size:"tiny",onClick:l[9]||(l[9]=c=>A(r.drawItemInfo,3))},{default:s(()=>[b(" V3 ")]),_:1}),n(t(g),{size:"tiny",onClick:l[10]||(l[10]=c=>A(r.drawItemInfo,4))},{default:s(()=>[b(" V4 ")]),_:1}),n(t(g),{size:"tiny",style:{opacity:"0"}},{default:s(()=>[b(" V5 ")]),_:1})])])])])):m("",!0),!r.drawItemInfo.isGroup&&r.drawItemInfo.orderId?(d(),f("div",Zt,[r.drawItemInfo.orderId!==5&&!r.drawItemInfo.extend?(d(),f("div",Yt,[r.drawItemInfo.action===2?(d(),f("span",Xt," 操作："+C(`选中套图第${r.drawItemInfo.orderId||"x"}张图片进行放大`),1)):m("",!0),r.drawItemInfo.action===3?(d(),f("span",Wt," 操作："+C(`选中套图第${r.drawItemInfo.orderId||"x"}张图片进行变换`),1)):m("",!0)])):m("",!0),r.drawItemInfo.orderId!==5&&r.drawItemInfo.extend?(d(),f("div",$t,[e("div",es,[ts,e("span",ss,[n(t(p),{placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[ns]),_:1})]),e("div",as,[e("div",ls,[n(t(te),null,{default:s(()=>[n(t(p),{placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(g),{size:"tiny",onClick:l[11]||(l[11]=c=>B(r.drawItemInfo,1))},{icon:s(()=>[e("img",{src:t(Oe),class:"w-4",alt:""},null,8,os)]),default:s(()=>[b(" V(Strong) ")]),_:1})]),default:s(()=>[is]),_:1}),n(t(p),{placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(g),{size:"tiny",onClick:l[12]||(l[12]=c=>B(r.drawItemInfo,2))},{icon:s(()=>[e("img",{src:t(Oe),class:"w-4",alt:""},null,8,rs)]),default:s(()=>[b(" V(Subtle) ")]),_:1})]),default:s(()=>[cs]),_:1})]),_:1})])])])])):m("",!0),r.drawItemInfo.orderId===5?(d(),f("span",ds," 操作：正在对图片重新生成一次 ")):m("",!0)])):m("",!0),!r.drawItemInfo.isGroup&&!r.drawItemInfo.orderId&&r.drawItemInfo.status===2?(d(),f("div",us," 操作：正在火速绘制中... ")):m("",!0),!r.drawItemInfo.isGroup&&!r.drawItemInfo.orderId&&[4,5,6].includes(r.drawItemInfo.status)?(d(),f("div",fs," 执行： 换个提示词重新试试吧！ ")):m("",!0),!r.drawItemInfo.isGroup&&!r.drawItemInfo.extend?(d(),f("div",bs," 上级： "+C(r.drawItemInfo.message_id||"正在加载中..."),1)):m("",!0),!r.drawItemInfo.isGroup&&r.drawItemInfo.orderId!==5&&r.drawItemInfo.extend?(d(),f("div",ms,[e("div",vs,[gs,e("span",hs,[n(t(p),{placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[xs]),_:1})]),e("div",ws,[e("div",ps,[n(t(te),null,{default:s(()=>[n(t(p),{placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(g),{size:"tiny",onClick:l[13]||(l[13]=c=>K(r.drawItemInfo,1))},{icon:s(()=>[e("img",{src:t(je),class:"w-4",alt:""},null,8,ys)]),default:s(()=>[b(" Zoom 2 ")]),_:1})]),default:s(()=>[Is]),_:1}),n(t(p),{placement:"top",trigger:"hover"},{trigger:s(()=>[n(t(g),{size:"tiny",onClick:l[14]||(l[14]=c=>K(r.drawItemInfo,2))},{icon:s(()=>[e("img",{src:t(je),class:"w-4",alt:""},null,8,As)]),default:s(()=>[b(" Zoom 1.5 ")]),_:1})]),default:s(()=>[Cs]),_:1})]),_:1})])])])])):m("",!0),e("div",ks,[e("span",Os,"时间："+C(r.drawItemInfo.createdAt),1)])])]))}}),_s={class:"grow flex h-screen flex-col lg:pt-0"},Ps={class:"flex grow flex-col sm:flex-row h-full"},zs={class:"p-4 sm:pt-6 bg-[#f8f8f8] p-4 dark:bg-[#18181c] overflow-y-auto w-full sm:w-[20rem] shrink-0 border-r-2 border-[#ffffff17]"},Rs={class:"mt-4 text-sm flex items-center"},Us=e("div",{class:"text-sm mr-1"}," 图片尺寸 ",-1),Ds={"data-tool-target":"tooltip-default"},qs={class:"flex mt-2 py-1 pb-2 space-x-1 overflow-x-auto justify-between scrollbar-none"},Gs=["onClick"],Ss={class:"flex items-center justify-center w-6 h-6"},Bs={class:"mt-2 text-center text-xs leading-none text-current"},Ks={class:"mt-4 text-sm flex items-center"},Hs=e("div",{class:"mr-1"}," 模型选择 ",-1),Ms={"data-tool-target":"tooltip-default"},Ns=e("div",{style:{width:"240px"}},[e("p",null,"MJ: 偏真实通用模型"),e("p",null,"NIJI: 偏动漫风格、适用于二次元模型")],-1),Qs={class:"mt-2 flex justify-between"},Fs=["onClick"],Ts={class:"relative w-full h-full dark:bg-black rounded",type:"button"},Ls={class:"absolute w-full h-full flex justify-center items-center"},Es={class:"text-2xl text-white font-bold absolute left-5 top-1"},Js=["src"],Vs={class:"mt-4"},Zs={class:"mt-2 flex justify-between items-center space-x-2 text-xs"},Ys=e("span",{class:"w-[65px] block text-sm"},"版本",-1),Xs={class:"flex-1"},Ws={key:0,class:"mt-2 flex justify-between items-center space-x-2 text-xs"},$s=e("span",{class:"w-[65px] block text-sm"},"风格",-1),en={class:"flex-1"},tn={class:"block text-sm mt-2 flex items-center"},sn=e("div",{style:{width:"240px"}},[e("p",null,"合理使用参数绘制更为理想的结果！")],-1),nn={class:"mt-3 flex justify-between items-center space-x-2 text-xs"},an=e("span",{class:"w-[65px] block text-sm"},"品质",-1),ln={class:"flex-1"},on={class:"mt-3 flex justify-between items-center space-x-2 text-xs"},rn=e("span",{class:"w-[65px] block text-sm"},"混乱",-1),cn={class:"flex-1"},dn=e("div",{style:{width:"270px"}},[e("p",null,"取值范围：0-100、 --chaos 或 --c"),e("p",null,"混乱级别，可以理解为让AI天马行空的空间"),e("p",null,"值越小越可靠、默认0最为精准")],-1),un={key:1,class:"mt-3 flex justify-between items-center space-x-2 text-xs"},fn=e("span",{class:"w-[65px] block text-sm"},"风格化",-1),bn={class:"flex-1"},mn=e("div",{style:{width:"270px"}},[e("p",null,"风格化：--stylize 或 --s，范围 1-1000"),e("p",null,"参数释义：数值越高，画面表现也会更具丰富性和艺术性")],-1),vn=e("div",{class:"block text-sm mt-2 flex items-center"}," 设定 ",-1),gn={class:"mt-3 flex justify-between items-center space-x-2 text-xs"},hn=e("span",{class:"w-[65px] block text-sm"},"携带参数",-1),xn={class:"flex-1"},wn=e("div",{style:{width:"240px"}},[e("p",null,"是否自动携带参数"),e("p",null,"打开：携带上述我们配置的参数"),e("p",null,"关闭：使用指令中的我们自定义的参数")],-1),pn={class:"mt-5"},yn=e("div",{class:"block text-base"}," 以图生图 ",-1),In={class:"ant-spin-nested-loading css-4fssqp mt-5"},An={class:"ant-spin-container"},Cn={class:"mt-2 flex justify-center items-center dark:bg-black p-5 rounded-md"},kn={key:0,for:"upload-file"},On=e("div",{class:"upload-container"},[e("img",{class:"mx-auto py-2 w-11",src:"data:image/png;base64,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"}),e("p",{class:"mt-3"},"点击或拖拽一个图片到这里作为输入"),e("p",{class:"text-center dark:text-[#ffffff73]"},"支持PNG和JPG格式")],-1),jn={key:1,class:"w-full h-full relative"},_n=["src"],Pn={class:"mt-5"},zn={class:"block flex justify-between"},Rn={class:"text-base py-1"},Un={class:"text-[#3076fd]"},Dn={class:"flex items-center"},qn=ft('<div class="mt-3 space-y-1 items-center text-[#3076fd]"><div class="flex justify-between"><span class="w-[120px] block text-sm">绘画单次消耗：</span><span class="text-sm pr-2"> 4积分 </span></div><div class="flex justify-between"><span class="w-[120px] block text-sm">图生图单次消耗：</span><span class="text-sm pr-2"> 4积分 </span></div><div class="flex justify-between"><span class="w-[120px] block text-sm">放大单次消耗：</span><span class="text-sm pr-2"> 1积分 </span></div></div>',1),Gn={class:"m-auto max-w-screen-4xl"},Sn={class:"space-y-6 p-4"},Bn=e("h3",{class:"text-lg sm:text-2xl font-bold leading-6"}," Midjourney ",-1),Kn={class:"flex justify-between items-end"},Hn=e("b",null,"你想生成什么图像?",-1),Mn={class:"mt-4"},Nn={key:0,class:"mt-4"},Qn={class:"mb-3 flex justify-between items-end"},Fn=e("b",null,"不需要的元素",-1),Tn={class:"flex items-center space-x-3 whitespace-nowrap pb-[15px]"},Ln={class:"mt-3"},En={class:"space-y-2 p-4"},Jn={key:0},Vn={class:"mt-6 mb-4 flex flex-col"},Zn={class:"text-xl font-bold flex items-end"},Yn=e("b",null,"工作中的内容",-1),Xn={key:0,class:"text-xs font-family ml-2"},Wn={key:0,class:"h-[10vh] flex flex-col justify-center items-center text-gray-500 relative"},$n=["src"],ea={class:"mt-4"},ta={key:1,class:"h-[10vh] flex flex-col justify-center items-center text-gray-500 relative"},sa={class:"w-56 h-14 relative"},na={class:"mb-3"},aa={class:"min-h-[500px] mt-5"},la={class:"mt-6 mb-10 flex flex-col"},oa={class:"text-xl font-bold"},ia={class:"text-base text-[gray]"},ra=e("span",{class:"mt-2 text-xs font-bold text-[#444]"},"点击下面的编号按钮以获取升级版（U: 放大图片更细节）或变化版（V: 在此基础上变体）",-1),ca={key:0,class:"w-full py-28"},da=e("img",{class:"mx-auto",src:"data:image/png;base64,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",alt:""},null,-1),ua=[da],fa={key:1},ba={class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-4"},wa=_e({__name:"index",setup(r){const O=v(null),F=ot(),se=it(),w=ze(),ne=y(()=>w.isLogin),ae=y(()=>w.userBalance),W=y(()=>ae.value.sumDrawMjCount||0),j=Pe(),le=y(()=>j.theme),T=y(()=>le.value==="dark"?"#fff":"#000"),_=Ue(),oe=Re(),{isMobile:L}=rt(),ie=v("/api/upload/file");let E=!1,U=null;const G=v("9:16"),A=v("MJ"),I=v("5.2"),S=v(0),B=v("1"),K=v(100),u=v(0),l=v(""),c=v(""),k=v([]),H=v(0),M=v(!1),P=v(!1),R=v(!1),J=v([]),z=v(12),re=v(!0),ce=v(0),D=v(1),Ge=y(()=>!l.value||P.value||R.value||V.value),q=v("");let N;ct(ne,async(a,o)=>{a&&!o&&await Z()});const Se=y(()=>ce.value>z.value),Be=[{aspect:"1:1",width:"100%",height:"100%"},{aspect:"4:3",width:"100%",height:"75%"},{aspect:"3:4",width:"75%",height:"100%"},{aspect:"16:9",width:"100%",height:"57%"},{aspect:"9:16",width:"57%",height:"100%"}],Ke=[{label:"默认风格",value:0},{label:"表现力风格",value:"expressive"},{label:"可爱风格",value:"cute"},{label:"景观风格",value:"scenic"}],He=[{label:"普通",value:".25"},{label:"一般",value:".5"},{label:"高清",value:"1"},{label:"超高清",value:"2"}],Me=y(()=>A.value==="MJ"?[{label:"5.2",value:"5.2"},{label:"5.1",value:"5.1"},{label:"5",value:"5"},{label:"4",value:"4"}]:A.value==="NIJI"?[{label:"5",value:"5"},{label:"4",value:"4"}]:[]),Ne=[{name:"MJ",img:pt,val:"mj"},{name:"NIJI",img:wt,val:"niji"}],ve=y(()=>a=>G.value===a),Qe=y(()=>a=>A.value===a);function Fe(a){var i;const o=(i=a==null?void 0:a.target)==null?void 0:i.files[0];ge(o)}function Te(a){a.preventDefault();const o=a.dataTransfer.files[0];ge(o)}async function ge(a){N=a;const o=new FileReader;o.onload=i=>{var h;q.value=(h=i.target)==null?void 0:h.result},o.readAsDataURL(a)}async function Le(){const a=await bt();J.value=a.data.filter(o=>o.status)}async function Ee(){const a=await ye({page:1,size:z.value}),{rows:o,countQueue:i,count:h}=a.data;k.value=o||[],ce.value=h,H.value=i||0}async function Je(){const a=se.query.mjId;if(!a)return;const o=await mt({id:a});o.success&&(l.value=o.data,D.value=0,re.value=!0)}async function he(){if(!l.value)return _.warning("请输入描述词！");R.value=!0;try{const a=Number(w.globalConfig.mjUseBaiduFy)===1?Ce:Ie,o=Number(w.globalConfig.mjUseBaiduFy)===1?{text:l.value}:{prompt:l.value},i=await a(o);if(!i.success)return _.error("翻译失败了！");l.value=i.data,R.value=!1}catch{R.value=!1}}const V=v(!1);async function xe(){if(!c.value)return _.warning("请输入描述词！");V.value=!0;try{const a=Number(w.globalConfig.mjUseBaiduFy)===1?Ce:Ie,o=Number(w.globalConfig.mjUseBaiduFy)===1?{text:c.value}:{prompt:c.value},i=await a(o);if(!i.success)return _.error("翻译失败了！");c.value=i.data,V.value=!1}catch{V.value=!1}}async function Ve(){if(!l.value)return _.warning("请输入描述词！");P.value=!0;try{const a=await ht({prompt:l.value});if(!a.success)return _.error("联想失败了");l.value=a.data,P.value=!1}catch{P.value=!1}}function we(a){return/[\u4E00-\u9FA5]/g.test(a)}function Ze(a){const o=/--\w+\s\S+/g;return a.replace(o,"")}function Ye(){if(!D.value)return"";let a="";return c.value&&(a+=` --no ${c.value}`),A.value==="MJ"&&I.value&&(a+=` --v ${I.value}`,a+=` --s ${K.value}`),A.value==="NIJI"&&I.value&&(a+=` --niji ${I.value}`,S.value&&(a+=` --style ${S.value}`)),a+=` --ar ${G.value}`,a+=` --c ${u.value}`,a+=` --q ${B.value}`,a}async function Xe(){var i;const a=new FormData;N&&a.append("file",N);const o=await qe.post(ie.value,a,{headers:{"Content-Type":"multipart/form-data"}});return(i=o==null?void 0:o.data)==null?void 0:i.data}function We(a){const{prompt:o,aspect:i,isCarryParams:h}=a;l.value=o,i&&(G.value=i),D.value=h?1:0}function $e(){const a=we(l.value),o=we(c.value);if(a||o){const i=oe.warning({title:"温馨提示",content:"您的提示词中包含中文、绘画AI可能无法识别您的中文、我们建议您翻译后进行绘画得到更准确的结果、请问需要翻译后提交么？",positiveText:"翻译提示词",negativeText:"不需要",onPositiveClick:async()=>{i.loading=!0;const h=[];a&&h.push(he()),o&&h.push(xe()),await Promise.all(h),de()},onNegativeClick:()=>{de()}})}else de()}async function de(){let a="";(q.value||N)&&(a=await Xe());const o=Ye();D.value&&(l.value=Ze(l.value)),await Q({prompt:l.value,imgUrl:a,extraParam:o}),N&&(N=null),q.value="",re.value&&(D.value=1,re.value=!1),_.success("提交绘制任务成功、请等待绘制结束！"),w.token&&await pe(),!E&&Z()}async function Z(){E=!0;const a=await ye({page:1,size:z.value}),{rows:o,countQueue:i,count:h}=a.data;k.value=o||[],ce.value=h,H.value=i||0,k.value.filter(st=>[1,2].includes(st.status)).length?U=setTimeout(()=>Z(),3e3):E=!1}dt(()=>{clearTimeout(U)});const ue=y(()=>k.value.filter(a=>[1,2].includes(a.status)));function et(){F.push("/market")}function tt(a){A.value=a,a==="MJ"&&(I.value="5.1"),a==="NIJI"&&(I.value="5")}async function pe(){M.value=!0;try{await w.getUserInfo(),M.value=!1}catch{M.value=!1}}return ut(()=>{Z(),Je(),Le();const a=document.getElementById("footer");new IntersectionObserver((i,h)=>{i.forEach(Y=>{Y.isIntersecting&&Se.value&&(z.value=z.value+12,Ee())})}).observe(a)}),(a,o)=>(d(),f("div",_s,[e("div",Ps,[e("div",zs,[e("div",Rs,[Us,e("div",Ds,[n(t(p),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[b(" 参数释义：生成图片尺寸比例 ")]),_:1})])]),e("div",qs,[(d(),f($,null,ee(Be,(i,h)=>e("button",{key:h,class:"flex-1 p-[2px] rounded-md",onClick:Y=>G.value=i.aspect},[e("div",{class:X(["border-2 border-gray-300 box-borde rounded-md dark:bg-black flex flex-col items-center",[t(ve)(i.aspect)?"aspect-active":"",t(L)?"py-3":"py-2"]])},[e("div",Ss,[e("div",{class:X(["border-gray-300 rounded border-2",[t(ve)(i.aspect)?"aspect-active":""]]),style:vt({width:i.width,height:i.height})},null,6)]),e("div",Bs,C(i.aspect),1)],2)],8,Gs)),64))]),e("div",Ks,[Hs,e("div",Ms,[n(t(p),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base"})]),default:s(()=>[Ns]),_:1})])]),e("ul",Qs,[(d(),f($,null,ee(Ne,(i,h)=>e("li",{key:h,class:X(["flex border-[3px] border-transparent justify-center items-center rounded-md m-1 m-bg-gradient",[t(Qe)(i.name)?"model-active":""]]),onClick:Y=>tt(i.name)},[e("button",Ts,[e("div",Ls,[e("div",Es,C(i.name),1)]),e("img",{src:i.img,class:"rounded aspect-[3/1] w-full object-cover"},null,8,Js)])],10,Fs)),64))]),e("div",Vs,[e("div",Zs,[Ys,e("span",Xs,[n(t(be),{value:I.value,"onUpdate:value":o[0]||(o[0]=i=>I.value=i),size:"small",options:t(Me)},null,8,["value","options"])])]),A.value==="NIJI"?(d(),f("div",Ws,[$s,e("span",en,[n(t(be),{value:S.value,"onUpdate:value":o[1]||(o[1]=i=>S.value=i),size:"small",options:Ke},null,8,["value"])])])):m("",!0),e("div",tn,[b(" 参数 "),n(t(p),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[sn]),_:1})]),e("div",nn,[an,e("span",ln,[n(t(be),{value:B.value,"onUpdate:value":o[2]||(o[2]=i=>B.value=i),size:"small",options:He},null,8,["value"])])]),e("div",on,[rn,e("span",cn,[n(t(ke),{value:u.value,"onUpdate:value":o[3]||(o[3]=i=>u.value=i),min:0,max:100,size:"small"},null,8,["value"])]),n(t(p),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[dn]),_:1})]),A.value==="MJ"?(d(),f("div",un,[fn,e("span",bn,[n(t(ke),{value:K.value,"onUpdate:value":o[4]||(o[4]=i=>K.value=i),min:0,max:1e3,size:"small"},null,8,["value"])]),n(t(p),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[mn]),_:1})])):m("",!0),vn,e("div",gn,[hn,e("span",xn,[n(t(xt),{value:D.value,"onUpdate:value":o[5]||(o[5]=i=>D.value=i),size:"small","checked-value":1,"unchecked-value":0},null,8,["value"])]),n(t(p),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[wn]),_:1})])]),e("div",pn,[yn,e("div",In,[e("div",An,[e("div",Cn,[q.value?m("",!0):(d(),f("label",kn,[e("div",{class:"upload cursor-pointer",onDragover:o[7]||(o[7]=fe(()=>{},["prevent"])),onDragenter:o[8]||(o[8]=fe(()=>{},["prevent"])),onDragleave:o[9]||(o[9]=fe(()=>{},["prevent"])),onDrop:Te},[e("input",{id:"upload-file",type:"file",accept:".png, .jpg, .jpeg",style:{display:"none"},onChange:o[6]||(o[6]=i=>Fe(i))},null,32),On],32)])),q.value?(d(),f("div",jn,[e("img",{src:q.value,alt:""},null,8,_n),e("img",{class:"absolute bottom-1 right-1 cursor-pointer",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAD0klEQVRIiY2WS2xWRRTHf/+ZryimPqLhocEAMbrQqBvYK4G2ArJxw0YxqLSo3bgQceFKo4mJywoYUBFZAilNRKVEN8ZoF2xYoiUhaSISExsVtJxj5n5z+917ez/xTk7uPM+Z8/qf0cnxWQxhru6/ToOOHja02dAGQ+sN3WNIjn4zdNHQjKNpQxcMzTsUPDzzKceaHP+5x7wnbJmhJw2NGtqWxzUGVXL0t6EvDQ5kodebgjqh6OZPgLMK2A+MAreSp0sy6l+eWwY8DYw4HALecZgjC0kyOrGrWG7hfokJwXZ5f+ZV4d01L0ZCAwavAA847AVmy9WQpGVaFbCJgG0PGEFG8a9QrFB9zYk9PolGAn4g4PeV6yF2N90S8X0R357HXVKlX2dUoz5rwwF/M+DLi3GWuCngr7ZstiC/0WTapECxx6p7un3bG/EtpUa3RWw0YgOxbh6P2LGIvR7lc6V2LZe5EvD9Af844jfqZvXkmpcDfnvqPBLwoRYGCwH/IeAfBGwsYL9U/ZYv82ssbm3vR+y7gFmLSZO1Hu9EfEiwXI0wFgwI3hBcEkwK/hIclVidItLgCrAbmAKGgLeAgaURWcwNJR9taEZXhdYE/EjW+OuAvxDw+Sj/M8r3RHwq4psi/mnE1/YLmohvTBqtb9GmQrZC6DOhF4VOCz1nqAM6hTSC6wiE1S2plnl4ytR1CRnubtvUSMyVguOCXYITeW5HNuWd8mrS95otXpfBJEil5AQWTY0qqBCBDm1j5fTvf1klCEoovKbHti4qt6tCe4ROCG1NUCN0UoSdgsOFxsonfKn5DeaTRj8BjzbBs7LpKvB8jq4twOdZk51gU6BnQcdAK7p3F/gSTrMpj2b+A2LmAovR9UTEP4n4XREfjPjhiA9H/KuI74745X7QFfGZhAwpbK/Xw7FIxoWIvRexEwF7KmDHA9YDyQKE/WjAdwR8KuNaj48W+f2TUiOZ7gJwFnxb6ZFutBCAx+jC/j7g3krIl75bKXRQaK3Qg0KdSskh++0bOed1cfz7dGyro0lDsVE5zbrUaSnzVVpI5b15Pp99xtCpsh6dC/hEE6EzKHZuht4RT4kfW+Y/Sq5J/YKJ4JrBu8BDguF6RfU+SdiPQnnwHPA28AeNCpsibCzgZ3ItySjdv9i1UxFI0xF7KWKXy7ITGgxmA747YB+mMtEU8j+qbSoThwK+K+Vnda0wXTJVqXB+vbwm+MJgLJeAzk0eKQuCacFBwZlcUmrGXXxulVDl3RfNNYfTwLcpxAWbDTYC68DvyP6aF7pk6EfQWdB50O+tvkP8C8uzPO7HeTXiAAAAAElFTkSuQmCC",onClick:o[10]||(o[10]=i=>q.value=null)})])):m("",!0)])])])]),e("div",Pn,[e("div",zn,[e("span",Rn,[b("钱包余额("),e("b",Un,C(t(W)||0),1),b(" 积分)")]),e("span",Dn,[n(t(g),{text:"",size:"tiny",type:"primary",loading:M.value,onClick:pe},{default:s(()=>[b("刷新")]),_:1},8,["loading"]),n(t(p),{placement:"right-end",trigger:"hover"},{trigger:s(()=>[n(t(x),{icon:"ri:error-warning-line",class:"text-base ml-2"})]),default:s(()=>[b(" 绘画账户信息 ")]),_:1})])]),qn])]),e("div",{class:X(["h-full flex-1",[t(L)?"":"overflow-y-auto overflow-hidden"]])},[e("div",Gn,[e("div",Sn,[Bn,e("div",null,[e("div",Kn,[Hn,n(t(te),null,{default:s(()=>[n(t(g),{type:"primary",loading:R.value,onClick:he},{icon:s(()=>[n(t(x),{icon:"ri:translate",class:"text-base"})]),default:s(()=>[b(" 翻译 ")]),_:1},8,["loading"]),n(t(g),{type:"primary",loading:P.value,onClick:Ve},{icon:s(()=>[n(t(x),{icon:"material-symbols:mindfulness-outline-rounded",class:"text-base"})]),default:s(()=>[b(" 联想 ")]),_:1},8,["loading"])]),_:1})]),e("div",Mn,[n(t(Ae),{value:l.value,"onUpdate:value":o[11]||(o[11]=i=>l.value=i),type:"textarea",disabled:P.value||R.value,autosize:{minRows:4,maxRows:6},placeholder:"例如: A cute little cat (Midjourney对中文描述词有一定限制、我们建议您点击右侧翻译将您的描述词转为英文再进行提交、联想则是会将您的描述词交由GPT让其发挥想象空间为您在此基础创建更为详细的描述！)"},null,8,["value","disabled"]),Number(t(w).globalConfig.mjHideNotBlock)!==1?(d(),f("div",Nn,[e("div",Qn,[Fn,n(t(g),{type:"primary",loading:V.value,onClick:xe},{icon:s(()=>[n(t(x),{icon:"ri:translate",class:"text-base"})]),default:s(()=>[b(" 翻译 ")]),_:1},8,["loading"])]),n(t(Ae),{value:c.value,"onUpdate:value":o[12]||(o[12]=i=>c.value=i),type:"textarea",rows:1,placeholder:"例：生成房间图片、但是不要床、你可以填bed！"},null,8,["value"])])):m("",!0)]),J.value.length?(d(),f("div",{key:0,class:X(["w-full dark:bg-transparent",t(L)?"py-3":"py-6"])},[n(t(gt),{"x-scrollable":""},{default:s(()=>[e("div",Tn,[(d(!0),f($,null,ee(J.value,(i,h)=>(d(),me(t(g),{size:"small",key:h,onClick:Y=>We(i)},{default:s(()=>[b(C(i.title),1)]),_:2},1032,["onClick"]))),128))])]),_:1})],2)):m("",!0),e("div",Ln,[n(t(g),{type:"primary",loading:!1,disabled:t(Ge),onClick:$e},{icon:s(()=>[n(t(x),{icon:"ri:ai-generate",class:"text-base"})]),default:s(()=>[b(" 提交绘画任务 ")]),_:1},8,["disabled"])])])]),e("div",En,[Number(t(w).globalConfig.mjHideWorkIn)!==1?(d(),f("div",Jn,[e("div",Vn,[e("span",Zn,[Yn,H.value?(d(),f("span",Xn,"当前系统进行中任务["+C(H.value)+"]",1)):m("",!0)])]),t(ue).length?m("",!0):(d(),f("div",Wn,[e("img",{class:"w-18",src:t(yt)},null,8,$n),e("span",ea,[n(t(g),{text:"",size:"small",onClick:et},{default:s(()=>[b("点击前往市场看看别人的作品吧！")]),_:1})])])),t(ue).length?(d(),f("div",ta,[e("div",sa,[n(De,{"text-color":t(T)},null,8,["text-color"])]),e("p",na," 当前"+C(t(ue).length)+"个任务正在进行中、请耐心等候绘制完成、您可以前往其他页面稍后回来查看结果！ ",1)])):m("",!0)])):m("",!0),e("div",aa,[e("div",la,[e("span",oa,[b("我的绘图 "),e("span",ia,"["+C(k.value.length)+"]",1)]),ra]),!k.value||!k.value.length?(d(),f("div",ca,ua)):m("",!0),k.value&&k.value.length?(d(),f("div",fa,[e("div",ba,[(d(!0),f($,null,ee(k.value,i=>(d(),me(js,{key:i.id,onQueryData:Z,drawItemInfo:i},null,8,["drawItemInfo"]))),128))])])):m("",!0)]),e("div",{id:"footer",ref_key:"containerRef",ref:O},null,512)])])],2)])]))}});export{wa as default};
