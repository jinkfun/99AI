
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as G}from"./index-a0d19af7.js";import{Y as A,d as H,r as p,Q as J,x as K,o as d,c as v,e as t,f as l,R as P,S as x,b as n,k as c,w as W,I as h,t as k,P as Z,E as I,h as s,X as E,q as Y}from"./index-364622c9.js";import{P as ee,k as te,l as le,m as ae}from"./index-d342e869.js";import{u as oe}from"./utcformatTime-e76e5157.js";const z={queryAllOrder:m=>A.get("order/queryAll",{params:m}),deleteOrder:m=>A.post("order/delete",m),deleteNotPay:()=>A.post("order/deleteNotPay")},re=H({__name:"index",setup(m){const g=p(!1),b=p(!1),O=p([]),S=p(),C=p(0),T=p(0),o=J({userId:"",platform:"",status:"",page:1,size:15}),V=p([]);async function i(){g.value=!0;try{const r=await z.queryAllOrder(o);g.value=!1;const{rows:a,count:_,total_price:f}=r.data;C.value=_,V.value=a,T.value=f}catch{g.value=!1}}async function M(r){const a=await Z.queryAllUser({size:30,username:r});O.value=a.data.rows}function N(r){r==null||r.resetFields(),i()}async function q(r){const{orderId:a}=r;await z.deleteOrder({orderId:a}),I.success("删除订单完成!"),i()}async function L(){b.value=!0;try{await z.deleteNotPay(),I.success("删除未支付订单完成!"),await i(),b.value=!1}catch{I.error("删除未支付订单失败!"),b.value=!1}}return K(()=>{i()}),(r,a)=>{const _=s("el-option"),f=s("el-select"),w=s("el-form-item"),y=s("el-button"),U=s("el-popconfirm"),R=s("el-form"),F=s("el-statistic"),D=G,u=s("el-table-column"),j=s("el-tag"),B=s("el-table"),$=s("el-pagination"),Q=s("el-row"),X=E("loading");return d(),v("div",null,[t(D,{class:"flex justify-between items-center"},{default:l(()=>[t(R,{ref_key:"formRef",ref:S,inline:!0,model:o},{default:l(()=>[t(w,{label:"用户名称",prop:"userId"},{default:l(()=>[t(f,{modelValue:o.userId,"onUpdate:modelValue":a[0]||(a[0]=e=>o.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":M},{default:l(()=>[(d(!0),v(P,null,x(n(O),e=>(d(),h(_,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(w,{label:"支付平台",prop:"platform"},{default:l(()=>[t(f,{modelValue:o.platform,"onUpdate:modelValue":a[1]||(a[1]=e=>o.platform=e),clearable:"",placeholder:"请选择支付平台","remote-show-suffix":""},{default:l(()=>[(d(!0),v(P,null,x(n(ee),e=>(d(),h(_,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(w,{label:"支付状态",prop:"status"},{default:l(()=>[t(f,{modelValue:o.status,"onUpdate:modelValue":a[2]||(a[2]=e=>o.status=e),clearable:"",placeholder:"请选择支付状态","remote-show-suffix":""},{default:l(()=>[(d(!0),v(P,null,x(n(te),e=>(d(),h(_,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(w,null,{default:l(()=>[t(y,{type:"primary",onClick:i},{default:l(()=>[c(" 查询 ")]),_:1}),t(y,{onClick:a[3]||(a[3]=e=>N(n(S)))},{default:l(()=>[c(" 重置 ")]),_:1}),t(U,{title:"确认删除所有未支付订单么?",onConfirm:L},{reference:l(()=>[t(y,{type:"danger"},{default:l(()=>[c("删除所有未支付订单")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),t(F,{title:"累计已支付订单金额",value:n(T)},null,8,["value"])]),_:1}),t(D,{style:{width:"100%"}},{default:l(()=>[W((d(),h(B,{border:"",data:n(V),style:{width:"100%"},size:"large","tooltip-options":{}},{default:l(()=>[t(u,{fixed:"",prop:"orderId",label:"订单ID",width:"315"}),t(u,{prop:"userInfo.username",label:"用户名称",width:"180"}),t(u,{prop:"userInfo.email",label:"用户邮箱",width:"200"}),t(u,{prop:"goodsInfo.name",label:"套餐名称",width:"140"}),t(u,{prop:"price",label:"商品单价",width:"110"}),t(u,{prop:"count",label:"购买数量",width:"90",align:"center"}),t(u,{prop:"total",label:"订单总价",width:"90",align:"center"}),t(u,{prop:"total",label:"支付平台",width:"90",align:"center"},{default:l(e=>[c(k(n(le)[e.row.payPlatform]),1)]),_:1}),t(u,{prop:"status",label:"支付状态",width:"90",align:"center"},{default:l(e=>[t(j,{type:e.row.status===1?"success":"warning"},{default:l(()=>[c(k(n(ae)[e.row.status]),1)]),_:2},1032,["type"])]),_:1}),t(u,{prop:"createdAt",label:"订单时间",width:"200",fixed:"right"},{default:l(e=>[c(k(n(oe)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),t(u,{fixed:"right",label:"操作"},{default:l(e=>[t(U,{title:"确认删除此订单么、删除订单不可恢复?",width:"400","icon-color":"red",onConfirm:ne=>q(e.row)},{reference:l(()=>[t(y,{link:"",type:"danger",size:"small",loading:n(b)},{default:l(()=>[c(" 删除订单 ")]),_:1},8,["loading"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[X,n(g)]]),t(Q,{class:"flex justify-end mt-5"},{default:l(()=>[t($,{"current-page":o.page,"onUpdate:currentPage":a[4]||(a[4]=e=>o.page=e),"page-size":o.size,"onUpdate:pageSize":a[5]||(a[5]=e=>o.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:n(C),onSizeChange:i,onCurrentChange:i},null,8,["current-page","page-size","total"])]),_:1})]),_:1})])}}});typeof Y=="function"&&Y(re);export{re as default};
