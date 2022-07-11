import{d as t,o as e,c as o,a as l,y as a,a4 as i,F as s,t as n,A as p,u as r,_ as m,X as x,e as u,W as c,j as d,Q as f,ak as S,f as g,p as h,Y as T,x as E,Z as v,z as I,i as C,n as F,q as _,B as L,C as N}from"./@vue.ab2bd211.js";import{_ as O,P as b}from"./PreviewImage.f0c1234d.js";import{_ as W,u as z,a as y,b as R,g as B,c as j,p as D,T as P}from"./index.2f2ac35e.js";import{l as k}from"./lodash.93c2ed1b.js";import{h as A}from"./html2canvas.c4a43e03.js";import{J as M}from"./jspdf.b50bc20f.js";import{s as J}from"./pinia.0b880cce.js";import{u as w,b as U}from"./vue-router.3b57c2ee.js";import{s as V}from"./vue3-pdfjs.b181813a.js";import"./element-plus.15479d2d.js";import"./lodash-es.032e1c7e.js";import"./@vueuse.5c387452.js";import"./@element-plus.eb2556f1.js";import"./@popperjs.36402333.js";import"./@ctrl.82a509e0.js";import"./dayjs.e18624ac.js";import"./async-validator.ed4c92a2.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./@floating-ui.1ef3caef.js";import"./vue-uuid.5db441ec.js";import"./colorpicker-v3.34ec7d92.js";import"./moment.17f8281e.js";import"./pdfjs-dist.32fff6d2.js";import"./dommatrix.d0ef59e8.js";import"./web-streams-polyfill.63286518.js";const G={class:"title"};var X=W(t({props:{title:{default:"模块选择"}},setup:t=>(i,s)=>(e(),o("div",G,[l("h1",null,a(t.title),1)]))}),[["__scopeId","data-v-44087e3d"]]);const K={class:"model-list-box"},H={class:"model-ul"},Y=["onClick"],$={class:"up-down-box"};var Z=W(t({setup(t){const{resumeJsonStore:a}=z(),u=y();return(t,c)=>{const d=i("el-checkbox"),f=i("upload"),S=i("el-icon"),g=i("CirclePlus");return e(),o("div",K,[l("ul",H,[(e(!0),o(s,null,n(r(a).LIST,((t,i)=>(e(),o("li",{key:t.id,class:p([{active:r(u).id===t.id}])},[m(d,{modelValue:t.show,"onUpdate:modelValue":e=>t.show=e,label:t.title},null,8,["modelValue","onUpdate:modelValue","label"]),l("div",{class:"center",onClick:e=>(t=>{let e=R(`${a.NAME}-${t.model}`),o={model:t.model,optionsName:e,title:t.title,id:t.id};u.setResumeModel(o)})(t)},null,8,Y),l("div",$,[m(S,{color:"#409eff",size:20,class:p(["up",{"not-allow":0===i}]),onClick:t=>(t=>{if(0===t)return;let e=a.LIST[t];a.LIST[t]=a.LIST[t-1],a.LIST[t-1]=e})(i)},{default:x((()=>[m(f)])),_:2},1032,["class","onClick"]),m(S,{color:"#409eff",size:20,class:p(["down",{"not-allow":i===r(a).LIST.length-1}]),onClick:t=>(t=>{if(t===a.LIST.length-1)return;let e=a.LIST[t];a.LIST[t]=a.LIST[t+1],a.LIST[t+1]=e})(i)},{default:x((()=>[m(f)])),_:2},1032,["class","onClick"]),m(S,{color:"#409eff",size:20,class:"add",onClick:t=>(t=>{let e=JSON.parse(JSON.stringify(a.LIST[t]));e.id=B(),a.LIST.splice(t,0,e)})(i)},{default:x((()=>[m(g)])),_:2},1032,["onClick"])])],2)))),128))])])}}}),[["__scopeId","data-v-03d2beaf"]]);var q=W(t({setup(t){const{resumeJsonStore:l}=z(),a=j(),p=D(l.MODEL_MARGIN_TOP),d=u(p),f=t=>{l.MODEL_MARGIN_TOP=t+"px",l.LIST.forEach((t=>{t.style.mTop=l.MODEL_MARGIN_TOP}))},S=D(l.MODEL_MARGIN_BOTTOM),g=u(S),h=t=>{l.MODEL_MARGIN_BOTTOM=t+"px",l.LIST.forEach((t=>{t.style.mBottom=l.MODEL_MARGIN_BOTTOM}))};return(t,p)=>{const u=i("el-option"),S=i("el-select"),T=i("el-form-item"),E=i("color-picker"),v=i("el-input-number"),I=i("el-form");return e(),c(I,{"label-width":"100px","label-position":"left"},{default:x((()=>[m(T,{label:"标题字体大小:"},{default:x((()=>[m(S,{modelValue:r(l).TITLE_FONT_SIZE,"onUpdate:modelValue":p[0]||(p[0]=t=>r(l).TITLE_FONT_SIZE=t),class:"m-2",placeholder:"Select"},{default:x((()=>[(e(!0),o(s,null,n(r(a),((t,o)=>(e(),c(u,{key:o,label:t,value:t},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(T,{label:"标题字体颜色:"},{default:x((()=>[m(E,{rgba:r(l).TITLE_COLOR,"onUpdate:rgba":p[1]||(p[1]=t=>r(l).TITLE_COLOR=t)},null,8,["rgba"])])),_:1}),m(T,{label:"模块上外边距:"},{default:x((()=>[m(v,{modelValue:d.value,"onUpdate:modelValue":p[2]||(p[2]=t=>d.value=t),min:-100,max:100,onChange:f},null,8,["modelValue"])])),_:1}),m(T,{label:"模块下外边距:"},{default:x((()=>[m(v,{modelValue:g.value,"onUpdate:modelValue":p[3]||(p[3]=t=>g.value=t),min:-100,max:100,onChange:h},null,8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-b243ada4"]]);let Q={template1:{RESUME_TITLE:{textColor:"#fff",textFontSize:"16px",textFontWeight:600,backgroundColor:"#000",mBottom:"35px",mTop:"15px"},BASE_INFO:{titleColor:"#121c26",titleFontSize:"30px",textFontSize:"14px",titleFontWeight:500,textFontWeight:500,textColor:"#7c7b7b",mBottom:"50px",mTop:"0px"},JOB_INTENTION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},EDU_BACKGROUND:{textColor:"#666",textFontSize:"14px",textFontWeight:600,mBottom:"35px",mTop:"0px"},SKILL_SPECIALTIES:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},CAMPUS_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},INTERNSHIP_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},WORK_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},PROJECT_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},AWARDS:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},SELF_EVALUATION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},WORKS_DISPLAY:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"}},template2:{RESUME_TITLE:{textColor:"#fff",textFontSize:"16px",textFontWeight:600,backgroundColor:"#000",mBottom:"35px",mTop:"15px"},BASE_INFO:{titleColor:"#121c26",titleFontSize:"30px",textFontSize:"14px",titleFontWeight:500,textFontWeight:500,textColor:"#fff",mBottom:"50px",mTop:"0px"},JOB_INTENTION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},EDU_BACKGROUND:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,titleColor:"#666666",titleFontSize:"14px",titleFontWeight:600,mBottom:"35px",mTop:"0px"},SKILL_SPECIALTIES:{textColor:"#fff",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},CAMPUS_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},INTERNSHIP_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},WORK_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},PROJECT_EXPERIENCE:{titleColor:"#666",titleFontSize:"14px",titleFontWeight:600,textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},AWARDS:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,titleColor:"#666666",titleFontSize:"14px",titleFontWeight:600,mBottom:"35px",mTop:"0px"},SELF_EVALUATION:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"},WORKS_DISPLAY:{textColor:"#757575",textFontSize:"14px",textFontWeight:500,mBottom:"35px",mTop:"0px"}}};const tt=t=>(L("data-v-7c00797c"),t=t(),N(),t),et={class:"design-box"},ot={class:"nav-box"},lt={class:"nav-center"},at={class:"draft-tips"},it={class:"nav-right"},st=E("全局样式设置"),nt=E("保存草稿"),pt=E("导出PDF"),rt=E("重置"),mt={class:"bottom"},xt={class:"left"},ut={class:"center"},ct=tt((()=>l("p",{class:"tips"},"如果分割线遮挡内容，请通过调整模块上下边距以显示内容！",-1))),dt={class:"page"},ft={class:"config"};var St=W(t({setup(t){const{title:p}=J(y()),L=z();let{resumeJsonStore:N}=J(z());const W=C().appContext.config.globalProperties.$moment,R=t=>{let e=JSON.parse(JSON.stringify(t));return e.LIST.map(((t,o)=>{t.style||(t.style=Q[N.value.NAME][t.model]),e.LIST[o]=t})),e},B=localStorage.getItem("resumeDraft"),j=w(),{id:D,name:G}=j.query;N.value.ID=D,N.value.NAME=G;const K=u(G);if(B){let t=JSON.parse(B)[D];if(t)t=R(t),L.changeResumeJsonData(t);else{P.ID=D,P.NAME=G;let t=R(P);L.changeResumeJsonData(t)}}else{P.ID=D,P.NAME=G;let t=R(P);L.changeResumeJsonData(t)}if(2==Number(D)){let t=[];N.value.LIST.forEach((e=>{"RESUME_TITLE"==e.model&&(e.show=!1),t.push(e)})),N.value.LIST=t}const H=U(),Y=()=>{H.push({path:"/"})},$=u(null),tt=u(!1),St=()=>{tt.value=!0,$.value.focus()},gt=()=>{tt.value=!1};d((async()=>{Dt()})),f((()=>{null==Rt||Rt.disconnect()})),S((()=>{_t=[]}));let ht=u("");const Tt=()=>{let t=N.value.ID,e={},o=localStorage.getItem("resumeDraft");o?(e=JSON.parse(o),e[t]=N.value):e[t]=N.value,localStorage.setItem("resumeDraft",JSON.stringify(e));const l=W(new Date).format("YYYY.MM.DD HH:mm:ss");ht.value=`已自动保存草稿  ${l}`},Et=k.exports.debounce((()=>{Tt()}),1e3);g(N.value,(()=>{Et()}),{deep:!0});const vt=y(),It=()=>{vt.$reset()},Ct=()=>{Tt()},Ft=u(null);let _t=[];const Lt=()=>{let t=R(P);L.changeResumeJsonData(t);let e=localStorage.getItem("resumeDraft");if(e){let t=JSON.parse(e);Object.keys(t).length>1?t[D]&&(delete t[D],localStorage.setItem("resumeDraft",JSON.stringify(t))):localStorage.removeItem("resumeDraft")}location.reload()},Nt=async()=>{let t=jt.value;jt.value=0,vt.$reset(),await F(),((t,e,o,l)=>{let a=t.offsetWidth,i=t.offsetHeight,s=t.offsetTop,n=t.offsetLeft,p=document.createElement("canvas"),r=0,m=document.documentElement.clientWidth||document.body.clientWidth,x=window.innerWidth;x>m&&(r=(x-m)/2),p.width=2*a,p.height=2*i;let u=p.getContext("2d");u.scale(2,2),u.translate(-n-r,-s),A(t,{scale:2,useCORS:!0,logging:!1}).then((t=>{let a=t.width,i=t.height,s=a/592.28*841.89,n=i,p=0,r=595.28,m=595.28/a*i,x=t.toDataURL("image/jpeg",1),u=new M("","pt","a4");if(n<s)u.addImage(x,"JPEG",0,0,r,m);else for(;n>0;)u.addImage(x,"JPEG",0,p,r,m),n-=s,p-=841.89,n>0&&u.addPage();if(o){let t=u.output("datauristring");l(t)}else u.save(e),l()}))})(Ft.value,"个人简历",!1,(()=>{jt.value=t}))},Ot=u(""),bt=u(0),Wt=u(!1),zt=()=>{Wt.value=!1},yt=u(null);let Rt=null,Bt=0,jt=u(0);const Dt=()=>{Rt=new ResizeObserver((async t=>{for(let e of t)Bt=e.target.offsetHeight,jt.value=Math.ceil(Bt/1160),Ft.value.style.height=1160*jt.value+"px",yt.value.style.height=Ft.value.style.height})),Rt.observe(yt.value)},Pt=t=>{yt.value.style.height=t+"px"};return(t,u)=>{const d=i("Edit"),f=i("el-icon"),S=i("el-input"),g=i("el-button"),C=i("el-popconfirm");return e(),o(s,null,[l("div",et,[l("nav",ot,[l("div",{class:"nav-left"},[l("img",{src:O,alt:"logo",srcset:"",onClick:Y}),l("span",{onClick:Y},"化简")]),l("div",lt,[l("span",at,a(r(ht)),1),h(l("p",null,[E(a(r(N).TITLE)+" ",1),m(f,{size:20,color:"#409eff",onClick:St},{default:x((()=>[m(d)])),_:1})],512),[[T,!tt.value]]),h(m(S,{ref_key:"titleIpf",ref:$,modelValue:r(N).TITLE,"onUpdate:modelValue":u[0]||(u[0]=t=>r(N).TITLE=t),autofocus:"",placeholder:"请输入标题",onBlur:gt},null,8,["modelValue"]),[[T,tt.value]])]),l("div",it,[m(g,{type:"primary",onClick:It},{default:x((()=>[st])),_:1}),m(g,{type:"primary",onClick:Ct},{default:x((()=>[nt])),_:1}),m(g,{type:"primary",onClick:Nt},{default:x((()=>[pt])),_:1}),m(C,{title:"重置会删除所有已编辑内容，是否继续?",onConfirm:Lt,confirmButtonText:"确定",cancelButtonText:"取消"},{reference:x((()=>[m(g,{type:"primary"},{default:x((()=>[rt])),_:1})])),_:1})])]),l("div",mt,[l("div",xt,[m(X),m(Z)]),l("div",ut,[l("div",{class:"design",ref_key:"html2Pdf",ref:Ft},[l("div",{class:"design-content",ref_key:"htmlContentPdf",ref:yt},[(e(),c(v(K.value),{onContentHeightChange:Pt}))],512),r(jt)>0?(e(!0),o(s,{key:0},n(r(jt),((t,i)=>(e(),o("div",{class:"lines",ref_for:!0,ref:t=>((t,e)=>{t&&(jt.value===e+1&&(t.style.top=1160*jt.value+"px"),_t.push(t))})(t,i),style:_({top:1128+1132*i+"px"})},[ct,l("p",dt,a(i+1)+"/"+a(r(jt)),1)],4)))),256)):I("",!0)],512)]),l("div",ft,[m(X,{title:r(p)},null,8,["title"]),r(vt).model?(e(),c(v(r(vt).optionsName),{key:r(vt).id})):(e(),c(q,{key:1}))])])]),h(m(b,{onClose:zt},{default:x((()=>[(e(!0),o(s,null,n(bt.value,(t=>(e(),c(r(V),{key:t,src:Ot.value,page:t,scale:.5},null,8,["src","page","scale"])))),128))])),_:1},512),[[T,Wt.value]])],64)}}}),[["__scopeId","data-v-7c00797c"]]);export{St as default};