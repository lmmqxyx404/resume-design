var t=Object.defineProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(e,o,l)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,i=(t,i)=>{for(var s in i||(i={}))o.call(i,s)&&a(t,s,i[s]);if(e)for(var s of e(i))l.call(i,s)&&a(t,s,i[s]);return t};import{b as s,k as n,d as r,f as p,g as m,e as c,h as d,p as x,s as u,o as f,t as S,l as g,j as h}from"./element-plus.4153d5d3.js";import{_ as E,a as v,u as T,b as C,c as F,d as I,p as L,g as b,i as _,T as N}from"./index.9455398f.js";import{d as y,e as z,o as B,c as O,l as W,X as R,a as A,t as k,Y as j,Z as w,$ as P,q as D,x as J,u as U,a2 as V,m as M,F as G,p as Y,f as K,K as X,L as H,aX as $,_ as q,U as Z,n as Q,y as tt,z as et}from"./@vue.1091902c.js";import{h as ot}from"./moment.17f8281e.js";import{d as lt}from"./vuedraggable.10ff3c97.js";import{h as at}from"./html2canvas.c4a43e03.js";import{J as it}from"./jspdf.6fa4f0a9.js";import{d as st,s as nt}from"./pinia.81a72ff6.js";import{u as rt,b as pt}from"./vue-router.18ac63e9.js";import{d as mt}from"./c-scrollbar.fa594b62.js";import{_ as ct}from"./logo.9e1f78c9.js";import{F as dt}from"./file-saver.57d3682f.js";import{V as xt}from"./vue-codemirror.01b160ac.js";import{F as ut,G as ft,H as St}from"./@codemirror.01a039cd.js";import{l as gt}from"./lodash.85068fef.js";import"./dayjs.b9a89834.js";import"./@element-plus.dc4747fe.js";import"./lodash-es.b0ae9094.js";import"./@vueuse.7b0e6305.js";import"./async-validator.ed4c92a2.js";import"./@popperjs.36402333.js";import"./@ctrl.82a509e0.js";import"./vue-uuid.5db441ec.js";import"./colorpicker-v3.08ea740a.js";import"./vue.b4cbd91f.js";import"./sortablejs.54f2c4a0.js";import"./codemirror.14d39394.js";import"./@lezer.c02d00a2.js";import"./crelt.67277586.js";import"./style-mod.a2e40363.js";import"./w3c-keyname.86620924.js";var ht=E(y({props:{title:{default:"模块选择"},showCollapse:{type:Boolean}},emits:["unflodOrCollapse"],setup(t,{emit:e}){const o=z("收起"),l=z(!0),a=z(null),i=()=>{l.value?(o.value="展开",l.value=!1,a.value.style.transform="rotate(180deg)"):(o.value="收起",l.value=!0,a.value.style.transform="rotate(0deg)"),e("unflodOrCollapse",l.value)};return(e,n)=>{const r=v,p=s;return B(),O("div",{class:J(["title",{"collapse-center":!l.value}])},[W(A("h1",null,k(t.title),513),[[R,l.value]]),t.showCollapse?(B(),j(p,{key:0,class:"box-item",effect:"dark",content:o.value},{default:w((()=>[A("div",{class:"unfold-collapse-box",onClick:i,ref_key:"switchRef",ref:a},[P(r,{iconName:"icon-shouqi",color:"#00c091",size:"24px"})],512)])),_:1},8,["content"])):D("",!0)],2)}}}),[["__scopeId","data-v-209274e6"]]);const Et={class:"model-list-box"},vt={class:"model-ul"},Tt=["onClick"],Ct={class:"left"},Ft={class:"right"};var It=E(y({props:{leftShowStatus:null},setup(t){const{resumeJsonStore:e}=T(),o=C(),l=()=>{},a=()=>{};return(i,r)=>{const p=v,m=s,c=n;return B(),O("div",Et,[A("div",vt,[P(U(lt),{list:U(e).LIST,itemKey:"id","ghost-class":"ghost","chosen-class":"chosenClass",animation:"300",onStart:l,onEnd:a},{item:w((({element:l,index:a})=>[A("div",{class:J(["model-list-item",{active:U(o).id===l.id},{"collapse-center":!t.leftShowStatus}]),onClick:t=>(t=>{let l=F(`${e.NAME}-${t.model}`),a={model:t.model,optionsName:l,title:t.title,id:t.id};o.setResumeModel(a)})(l)},[A("div",Ct,[A("div",{class:J(["icon-box",{"collapse-size":!t.leftShowStatus}])},[P(m,{class:"box-item",placement:"right",effect:"dark",content:l.title,disabled:t.leftShowStatus},{default:w((()=>[P(p,{iconName:l.iconfont,className:"icon",color:t.leftShowStatus?"#c4c4c4":"#00c091",size:"16px"},null,8,["iconName","color"])])),_:2},1032,["content","disabled"])],2),W(A("p",null,k(l.title),513),[[R,t.leftShowStatus]])]),W(A("div",Ft,[P(c,{modelValue:l.show,"onUpdate:modelValue":t=>l.show=t,size:"small","active-color":"#00C091"},null,8,["modelValue","onUpdate:modelValue"])],512),[[R,t.leftShowStatus]])],10,Tt)])),_:1},8,["list"])])])}}}),[["__scopeId","data-v-c6fe2cfc"]]);var Lt=E(y({setup(t){const{resumeJsonStore:e}=T(),o=I(),l=L(e.GLOBAL_STYLE.modelMarginTop),a=z(l),i=t=>{e.GLOBAL_STYLE.modelMarginTop=t+"px",e.LIST.forEach((t=>{t.style.mTop=e.GLOBAL_STYLE.modelMarginTop}))},s=L(e.GLOBAL_STYLE.modelMarginBottom),n=z(s),x=t=>{e.GLOBAL_STYLE.modelMarginBottom=t+"px",e.LIST.forEach((t=>{t.style.mBottom=e.GLOBAL_STYLE.modelMarginBottom}))};return(t,l)=>{const s=p,u=m,f=c,S=V("color-picker"),g=r,h=d;return B(),j(h,{"label-width":"100px","label-position":"left"},{default:w((()=>[P(f,{label:"标题字体大小:"},{default:w((()=>[P(u,{modelValue:U(e).GLOBAL_STYLE.titleFontSize,"onUpdate:modelValue":l[0]||(l[0]=t=>U(e).GLOBAL_STYLE.titleFontSize=t),class:"m-2",placeholder:"Select"},{default:w((()=>[(B(!0),O(G,null,M(U(o),((t,e)=>(B(),j(s,{key:e,label:t,value:t},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),P(f,{label:"主题颜色:"},{default:w((()=>[P(S,{rgba:U(e).GLOBAL_STYLE.titleColor,"onUpdate:rgba":l[1]||(l[1]=t=>U(e).GLOBAL_STYLE.titleColor=t)},null,8,["rgba"])])),_:1}),P(f,{label:"模块上外边距:"},{default:w((()=>[P(g,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=t=>a.value=t),min:-100,max:100,onChange:i},null,8,["modelValue"])])),_:1}),P(f,{label:"模块下外边距:"},{default:w((()=>[P(g,{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=t=>n.value=t),min:-100,max:100,onChange:x},null,8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-92a10e72"]]);let bt={TITLE:"我的简历",LIST:[{model:"RESUME_TITLE",title:"我的简历"},{model:"BASE_INFO",title:"基本资料",name:"小猪课堂",age:25,address:"四川成都",avatar:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",workService:3,phoneNumber:"028-1234321",email:"12322233@qq.com",abstract:"我是一个没有感情的工作机器",degree:"本科"},{model:"JOB_INTENTION",title:"求职意向",intendedPositions:"前端开发工程师",intendedCity:"成都",expectSalary:"8000-10000",jobStatus:"随时入职",jobSearchType:"求职类型"},{model:"EDU_BACKGROUND",title:"教育背景",LIST:[{date:["2015-5","2019-6"],schoolName:"野鸡大学",specialized:"通信工程",degree:"本科",majorCourse:"主修计算机技术、Java、c++等等"}]},{model:"SKILL_SPECIALTIES",title:"技能特长",LIST:[{skillName:"JavaScript",proficiency:"了解",introduce:"熟练掌握该项技术"}]},{model:"CAMPUS_EXPERIENCE",title:"校园经历",LIST:[{date:["2021-9","2022-10"],campusBriefly:"经历简要，如社团名称",campusDuty:"主要职责",campusContent:"经历描述"}]},{model:"INTERNSHIP_EXPERIENCE",title:"实习经验",LIST:[{date:["2021-9","2022-10"],companyName:"业绩公司",posts:"前端开发工程师",jobContent:[{content:"主要工作内容是打杂"}]}]},{model:"WORK_EXPERIENCE",title:"工作经验",LIST:[{date:["2021-9","2022-10"],companyName:"业绩公司",posts:"前端开发工程师",jobContent:[{content:"主要工作内容是打杂"}]}]},{model:"PROJECT_EXPERIENCE",title:"项目经验",LIST:[{date:["2021-9","2022-10"],projectName:"项目名称",posts:"前端开发工程师",projectContent:[{content:"该项目是一个打杂项目"}]}]},{model:"AWARDS",title:"荣誉奖项",LIST:[{date:"2021-9",awardsName:"奖项名称",awardsGrade:"获奖等级"}]},{model:"HOBBIES",title:"兴趣爱好",content:"我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂"},{model:"SELF_EVALUATION",title:"自我评价",content:"我是一个没有责任感的人"},{model:"WORKS_DISPLAY",title:"作品展示",LIST:[{worksName:"作品名称",worksLink:"https://www.baidu.com",worksIntroduce:"这是一个千万级作品"}]}]},_t={template1:{RESUME_TITLE:{textColor:"#fff",textFontSize:"16px",textFontWeight:600,backgroundColor:"#000",mBottom:"35px",mTop:"15px"},BASE_INFO:{titleColor:"#121c26",titleFontSize:"30px",textFontSize:"14px",titleFontWeight:500,textFontWeight:500,textColor:"#7c7b7b",mBottom:"50px",mTop:"0px"},JOB_INTENTION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},EDU_BACKGROUND:{textColor:"#666",textFontSize:"14px",textFontWeight:600,mBottom:"35px",mTop:"0px"},SKILL_SPECIALTIES:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},CAMPUS_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},INTERNSHIP_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},WORK_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},PROJECT_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},AWARDS:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},SELF_EVALUATION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},WORKS_DISPLAY:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},GLOBAL_STYLE:{themeColor:"#000",titleColor:"#000",titleFontSize:"20px",modelMarginTop:"0px",modelMarginBottom:"45px"}},template2:{RESUME_TITLE:{textColor:"#fff",textFontSize:"16px",textFontWeight:600,backgroundColor:"#000",mBottom:"35px",mTop:"15px"},BASE_INFO:{titleColor:"#121c26",titleFontSize:"30px",textFontSize:"14px",titleFontWeight:500,textFontWeight:500,textColor:"#fff",mBottom:"50px",mTop:"0px"},JOB_INTENTION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},EDU_BACKGROUND:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,titleColor:"#666666",titleFontSize:"14px",titleFontWeight:600,mBottom:"35px",mTop:"0px"},SKILL_SPECIALTIES:{textColor:"#fff",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},CAMPUS_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},INTERNSHIP_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},WORK_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},PROJECT_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},AWARDS:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,titleColor:"#666666",titleFontSize:"14px",titleFontWeight:600,mBottom:"35px",mTop:"0px"},SELF_EVALUATION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},WORKS_DISPLAY:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},GLOBAL_STYLE:{themeColor:"#000",titleColor:"#000",titleFontSize:"20px",modelMarginTop:"0px",modelMarginBottom:"45px"}},template3:{RESUME_TITLE:{textColor:"#fff",textFontSize:"16px",textFontWeight:600,backgroundColor:"#000",mBottom:"35px",mTop:"15px"},BASE_INFO:{titleColor:"#fff",titleFontSize:"30px",textFontSize:"14px",titleFontWeight:400,textFontWeight:500,textColor:"#757575",mBottom:"40px",mTop:"0px"},JOB_INTENTION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"30px",mTop:"0px"},EDU_BACKGROUND:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,titleColor:"#666666",titleFontSize:"14px",titleFontWeight:600,mBottom:"30px",mTop:"0px"},SKILL_SPECIALTIES:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"30px",mTop:"0px"},CAMPUS_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"30px",mTop:"0px"},INTERNSHIP_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"30px",mTop:"0px"},WORK_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"30px",mTop:"0px"},PROJECT_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"30px",mTop:"0px"},AWARDS:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,titleColor:"#666666",titleFontSize:"14px",titleFontWeight:600,mBottom:"30px",mTop:"0px"},SELF_EVALUATION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"30px",mTop:"0px"},WORKS_DISPLAY:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"30px",mTop:"0px"},GLOBAL_STYLE:{themeColor:"#000",titleColor:"#079cfa",titleFontSize:"20px",modelMarginTop:"0px",modelMarginBottom:"45px"}}};const Nt=t=>{let{resumeJsonStore:e}=T(),o=JSON.parse(JSON.stringify(t));return o.LIST.map(((t,l)=>{t.style||(t.style=_t[e.NAME][t.model]),o.LIST[l]=t})),o.GLOBAL_STYLE=_t[e.NAME].GLOBAL_STYLE,o},yt=st("uuidStore",{state:()=>({refreshUuid:b()}),actions:{setUuid(){this.refreshUuid=b()}}}),zt={class:"code-mirror-box"},Bt={class:"dialog-footer"},Ot=Y("关闭"),Wt=y({props:{tipDialogVisible:{type:Boolean,default:!1}},emits:["closeTipDialog"],setup(t,{emit:e}){const o=z(JSON.stringify(bt,null,4)),l=[ut(),ft()],a=()=>{e("closeTipDialog")};return(e,i)=>{const s=x,n=u;return B(),j(n,{"model-value":t.tipDialogVisible,width:"40%",title:"示例JSON","show-close":!1,"close-on-click-modal":!1,"append-to-body":"","custom-class":"import-json"},{footer:w((()=>[A("span",Bt,[P(s,{type:"primary",onClick:a},{default:w((()=>[Ot])),_:1})])])),default:w((()=>[A("div",zt,[P(U(xt),{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=t=>o.value=t),ref:"codemirrorRef",placeholder:"请将你的简历JSON写在此处～～",style:{height:"400px"},autofocus:!0,"indent-with-tab":!0,tabSize:2,extensions:l,disabled:!0},null,8,["modelValue"])])])),_:1},8,["model-value"])}}});const Rt={class:"header"},At={class:"header-left"},kt=A("h1",{class:"title"},"请在编辑器内输入简历JSON数据，格式如下：",-1),jt=Y(" 注意：示例中的所有字段都需要保留，若无值为空即可，不可删除字段！ "),wt={class:"header-right"},Pt={class:"code-mirror-box"},Dt={class:"dialog-footer"},Jt=Y("取消"),Ut=Y("确定"),Vt=y({props:{dialogVisible:{type:Boolean,default:!1}},emits:["cancle"],setup(t,{emit:e}){const o=z(JSON.stringify(bt,null,4)),l=[ut(),St,ft()],a=()=>{e("cancle")},n=z(!1),r=()=>{n.value=!0},p=()=>{n.value=!1},m=()=>{o.value=JSON.stringify(bt,null,4),f({message:"重置成功！",type:"success",center:!0})},c=yt(),d=rt(),S=T(),g=C(),h=()=>{if(!o.value)return void f({message:"数据不能为空！",type:"error",center:!0});if(!_(o.value))return void f({message:"JSON格式不正确！",type:"error",center:!0});let t=JSON.parse(o.value);const{id:l,name:a}=d.query;t.ID=l,t.NAME=a;for(let e=0;e<t.LIST.length;e++)for(let o=0;o<N.LIST.length;o++)N.LIST[o].model===t.LIST[e].model&&(t.LIST[e]=i(i({},N.LIST[o]),t.LIST[e]));const s=Nt(t);S.changeResumeJsonData(s),c.setUuid(),g.$reset(),e("cancle")};return(e,i)=>{const c=v,d=s,f=x,S=u;return B(),O(G,null,[P(S,{"model-value":t.dialogVisible,width:"60%","show-close":!1,"close-on-click-modal":!1,"append-to-body":"","custom-class":"import-json"},{title:w((()=>[A("div",Rt,[A("div",At,[kt,A("span",null,[P(c,{iconName:"icon-xianshi_jinggao",color:"red",size:"14px"}),jt])]),A("div",wt,[P(d,{class:"box-item",effect:"dark",content:"JSON示例",placement:"bottom"},{default:w((()=>[A("div",{class:"icon-box",onClick:r},[P(c,{iconName:"icon-daimashili",color:"#fff",size:"17px"})])])),_:1}),P(d,{class:"box-item",effect:"dark",content:"重置",placement:"bottom"},{default:w((()=>[A("div",{class:"icon-box",onClick:m},[P(c,{iconName:"icon-zhongzhi",color:"#fff",size:"17px"})])])),_:1})])])])),footer:w((()=>[A("span",Dt,[P(f,{onClick:a},{default:w((()=>[Jt])),_:1}),P(f,{type:"primary",onClick:h},{default:w((()=>[Ut])),_:1})])])),default:w((()=>[A("div",Pt,[P(U(xt),{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=t=>o.value=t),placeholder:"请将你的简历JSON写在此处～～",style:{height:"400px"},autofocus:!0,"indent-with-tab":!0,tabSize:2,extensions:l},null,8,["modelValue"])])])),_:1},8,["model-value"]),P(Wt,{tipDialogVisible:n.value,onCloseTipDialog:p},null,8,["tipDialogVisible"])],64)}}});const Mt={class:"nav-box"},Gt={class:"nav-center"},Yt={class:"draft-tips"},Kt={class:"nav-right"},Xt=y({emits:["generateReport","reset","saveDataToLocal"],setup(t,{emit:e}){let{resumeJsonStore:o}=nt(T());const l=pt(),a=()=>{l.push({path:"/"})},i=z(null),n=z(!1),r=()=>{n.value=!0,i.value.focus()},p=()=>{n.value=!1};let m=z("");const c=()=>{let t=o.value.ID,e={},l=localStorage.getItem("resumeDraft");l?(e=JSON.parse(l),e[t]=o.value):e[t]=o.value,localStorage.setItem("resumeDraft",JSON.stringify(e));const a=ot(new Date).format("YYYY.MM.DD HH:mm:ss");m.value=`已自动保存草稿  ${a}`},d=()=>{c(),f({message:"保存草稿成功!",type:"success",center:!0})},x=gt.exports.debounce((()=>{c()}),1e3);K(o.value,(()=>{x()}),{deep:!0});const u=()=>{const t=JSON.stringify(o.value),e=new Blob([t],{type:""});dt.saveAs(e,o.value.TITLE+".json")},E=()=>{e("generateReport")},C=()=>{S.confirm("此操作会重置简历至初始状态，是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{e("reset")})).catch((()=>{}))},F=z(!1),I=()=>{F.value=!0},L=()=>{F.value=!1};return(t,e)=>{const l=V("Edit"),c=g,x=h,f=v,S=s;return B(),O(G,null,[A("nav",Mt,[A("div",{class:"nav-left"},[A("img",{src:ct,alt:"logo",srcset:"",onClick:a}),A("span",{onClick:a},"化简")]),A("div",Gt,[A("span",Yt,k(U(m)),1),W(A("p",null,[Y(k(U(o).TITLE)+" ",1),P(c,{size:20,color:"#409eff",onClick:r},{default:w((()=>[P(l)])),_:1})],512),[[R,!n.value]]),W(P(x,{ref_key:"titleIpf",ref:i,modelValue:U(o).TITLE,"onUpdate:modelValue":e[0]||(e[0]=t=>U(o).TITLE=t),autofocus:"",placeholder:"请输入标题",onBlur:p},null,8,["modelValue"]),[[R,n.value]])]),A("div",Kt,[P(S,{class:"box-item",effect:"dark",content:"保存草稿",placement:"bottom"},{default:w((()=>[A("div",{class:"icon-box",onClick:d},[P(f,{iconName:"icon-caogaoxiang1",color:"#fff",size:"17px"})])])),_:1}),P(S,{class:"box-item",effect:"dark",content:"导出为PDF",placement:"bottom"},{default:w((()=>[A("div",{class:"icon-box",onClick:E},[P(f,{iconName:"icon-pdf",color:"#fff",size:"17px"})])])),_:1}),P(S,{class:"box-item",effect:"dark",content:"导出为JSON数据",placement:"bottom"},{default:w((()=>[A("div",{class:"icon-box",onClick:u},[P(f,{iconName:"icon-xiazai",color:"#fff",size:"17px"})])])),_:1}),P(S,{class:"box-item",effect:"dark",content:"导入JSON数据",placement:"bottom"},{default:w((()=>[A("div",{class:"icon-box",onClick:I},[P(f,{iconName:"icon-yunduanshangchuan",color:"#fff",size:"19px"})])])),_:1}),P(S,{class:"box-item",effect:"dark",content:"重置所有设置",placement:"bottom"},{default:w((()=>[A("div",{class:"icon-box",onClick:C},[P(f,{iconName:"icon-zhongzhi",color:"#fff",size:"17px"})])])),_:1})])]),P(Vt,{dialogVisible:F.value,onCancle:L},null,8,["dialogVisible"])],64)}}});const Ht={class:"design-box"},$t={class:"bottom"},qt=(t=>(tt("data-v-16074992"),t=t(),et(),t))((()=>A("p",{class:"tips"},"如果分割线遮挡内容，请通过调整模块上下边距以显示内容！",-1))),Zt={class:"page"};var Qt=E(y({setup(t){const{title:e}=nt(C()),o=T(),l=yt();let{resumeJsonStore:a}=nt(T());const i=()=>{N.ID=r,N.NAME=p;let t=Nt(N);o.changeResumeJsonData(t)},s=localStorage.getItem("resumeDraft"),n=rt(),{id:r,name:p}=n.query;a.value.ID=r,a.value.NAME=p;const m=z(p);if(s){let t=JSON.parse(s)[r];t?o.changeResumeJsonData(t):i()}else i();if(2==Number(r)){let t=[];a.value.LIST.forEach((e=>{"RESUME_TITLE"==e.model&&(e.show=!1),t.push(e)})),a.value.LIST=t}X((async()=>{I(),b()})),H((()=>{null==E||E.disconnect()})),$((()=>{u=[]}));const c=C(),d=()=>{c.$reset()},x=z(null);let u=[];const S=async()=>{i(),d();let t=localStorage.getItem("resumeDraft");if(t){let e=JSON.parse(t);Object.keys(e).length>1?e[r]&&(delete e[r],localStorage.setItem("resumeDraft",JSON.stringify(e))):localStorage.removeItem("resumeDraft")}f({message:"重置成功!",type:"success",center:!0}),l.setUuid(),await Z(),I()},g=async()=>{let t=F.value;F.value=0,c.$reset(),await Z(),((t,e,o,l)=>{let a=t.offsetWidth,i=t.offsetHeight,s=t.offsetTop,n=t.offsetLeft,r=document.createElement("canvas"),p=0,m=document.documentElement.clientWidth||document.body.clientWidth,c=window.innerWidth;c>m&&(p=(c-m)/2),r.width=2*a,r.height=2*i;let d=r.getContext("2d");d.scale(2,2),d.translate(-n-p,-s),at(t,{scale:2,useCORS:!0,logging:!1}).then((t=>{let a=t.width,i=t.height,s=a/592.28*841.89,n=i,r=0,p=595.28,m=595.28/a*i,c=t.toDataURL("image/jpeg",1),d=new it("","pt","a4");if(n<s)d.addImage(c,"JPEG",0,0,p,m);else for(;n>0;)d.addImage(c,"JPEG",0,r,p,m),n-=s,r-=841.89,n>0&&d.addPage();if(o){let t=d.output("datauristring");l(t)}else d.save(e),l()}))})(x.value,a.value.TITLE,!1,(()=>{F.value=t}))},h=z(null);let E=null,v=0,F=z(0);const I=()=>{E=new ResizeObserver((async t=>{for(let e of t)v=e.target.offsetHeight,F.value=Math.ceil(v/1160),x.value.style.height=1160*F.value+"px",h.value.style.height=x.value.style.height})),E.observe(h.value)},L=t=>{h.value.style.height=t+"px"},b=()=>{window.addEventListener("click",_)},_=t=>{y(h.value,t.target)&&d()},y=(t,e)=>!(!t||t===document)&&(t===e||y(t.parentNode,e));H((()=>{window.removeEventListener("click",_)}));const W=z(null),R=z(!0),J=t=>{t?(setTimeout((()=>{R.value=t}),100),W.value.style.width="300px"):(setTimeout((()=>{R.value=t}),100),W.value.style.width="70px")};return(t,o)=>(B(),O("div",Ht,[P(Xt,{onGenerateReport:g,onReset:S}),A("div",$t,[A("div",{class:"left",ref_key:"leftRef",ref:W},[P(U(mt.exports.CScrollbar),{trigger:"hover",hThumbStyle:{"background-color":"rgba(0,0,0,0.4)"}},{default:w((()=>[P(ht,{onUnflodOrCollapse:J,showCollapse:""}),(B(),j(It,{leftShowStatus:R.value,key:U(l).refreshUuid},null,8,["leftShowStatus"]))])),_:1},8,["hThumbStyle"])],512),(B(),O("div",{class:"center",key:U(l).refreshUuid},[A("div",{class:"design",ref_key:"html2Pdf",ref:x},[A("div",{class:"design-content",ref_key:"htmlContentPdf",ref:h},[(B(),j(q(m.value),{onContentHeightChange:L}))],512),U(F)>0?(B(!0),O(G,{key:0},M(U(F),((t,e)=>(B(),O("div",{class:"lines",ref_for:!0,ref:t=>((t,e)=>{t&&(F.value===e+1&&(t.style.top=1160*F.value+"px"),u.push(t))})(t,e),style:Q({top:1128+1132*e+"px"})},[qt,A("p",Zt,k(e+1)+"/"+k(U(F)),1)],4)))),256)):D("",!0)],512)])),(B(),O("div",{class:"config",key:U(l).refreshUuid},[P(ht,{title:U(e)},null,8,["title"]),U(c).model?(B(),j(q(U(c).optionsName),{key:U(c).id})):(B(),j(Lt,{key:1}))]))])]))}}),[["__scopeId","data-v-16074992"]]);export{Qt as default};