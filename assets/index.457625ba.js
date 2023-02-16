import{d as B,m as J,p as q,r as o,q as f,f as F,x as D,j as i,o as K,c as O,a as N,A as h,i as I,R as oe,y as n,z as u,_ as M,l as se,T as ne}from"./index.ac1a7759.js";const ae={class:"view"},ie={class:"head-info"},le=B({__name:"items",setup(H,{expose:k}){J();const d=q(),p=o({});f(()=>d.getUserInfo.team),f(()=>d.getUserInfo.role),f(()=>d.getUserInfo.lob),f(()=>d.getUserInfo.id),k({setup:async(r,s)=>{p.value=r,s==="Enclosure"&&(_.checkListId=r.checkListId_Enclosure),_.type=s,s=="Enclosure"&&(S.value=[{title:"SN",key:"sn",width:60},{title:"Main Process",key:"mainProcess",width:300},{title:"Sub Process",key:"subProcess",width:300},{title:"Area",key:"area",width:300},{title:"Check Items",key:"checkItems",width:400},{title:"Sampling Size",key:"samplingSize",width:400},{title:"Looking For",key:"lookingFor",width:800},{title:"DIS Score",key:"disScore",width:100},{title:"Skip",key:"skip",width:100,valueFormator:v=>v?"TRUE":"FALSE"}]),w()}});const C=[{value:0,label:"Enclosure"}],S=o([]),E={actions:[]};o({});const A=o(1),c=o(15),_=F({}),y=o({total:0,list:[]}),m=o(!0),w=async()=>{m.value=!0;try{const r=await D("/sip/get_check_list_items_page",{pageNum:A.value,pageSize:c.value,..._});y.value=r}finally{m.value=!1}},P=(r,s)=>{},x=async(r,s)=>{};return(r,s)=>{const v=i("AAPageList"),e=i("n-card");return K(),O("div",ae,[N("div",ie,[N("p",null,h(p.value.lob)+" / "+h(p.value.site)+" / "+h(p.value.productLine)+" / "+h(p.value.project)+" / "+h(p.value.part)+" / "+h(I(oe)(_.type,C)),1)]),n(e,null,{default:u(()=>[n(v,{isLoading:m.value,pageNum:A.value,"onUpdate:pageNum":s[0]||(s[0]=g=>A.value=g),pageSize:c.value,"onUpdate:pageSize":s[1]||(s[1]=g=>c.value=g),columns:S.value,actions:E,dataSource:y.value,onAction:P,onChange:x,onReload:w},null,8,["isLoading","pageNum","pageSize","columns","dataSource"])]),_:1})])}}});const ce=M(le,[["__scopeId","data-v-65cb0a3f"]]),re={class:"page"},ue=B({__name:"index",setup(H){const k=J();se();const d=q();f(()=>d.getUserInfo.team),f(()=>d.getUserInfo.role),f(()=>d.getUserInfo.lob);const p=[{title:"Site Project Tree",key:"name",align:"left",width:500},{title:"Check List",key:"checkListTotal",width:200,valueFormator:(t,a)=>{if(a.part){const l=[];return a.checkListId_Enclosure&&l.push("Enclosure"),l.join(" | ")}else return`${a.checkListUploaded} / ${a.checkListTotal}`}}],C=t=>t.id,S={width:"260px",actions:[{title:"Preview Enclosure",type:"default",key:"previewEnclosure",isShow:t=>t.part!=null&&t.checkListId_Enclosure!=null},{title:"Upload",type:"info",key:"update"}],more:[]};o({});const E=o(1),A=o(15),c=F({}),_=o([]),y=o(!0),m=async()=>{y.value=!0;try{const t=await D("/sip/get_lines_tree",{pageNum:E.value,pageSize:A.value,...c});_.value=t}finally{y.value=!1}},w=(t,a)=>{t==="previewEnclosure"?X(a,"Enclosure"):t==="update"?V(a):t==="delete"&&W(a)},P=o(null),x=()=>{P.value.show()},r=t=>{function a(L){var j=L.lastIndexOf("/"),U=L.lastIndexOf("\\"),b=Math.max(j,U);return b<0?L:L.substring(b+1)}const l=document.createElement("a");l.download=a(t),l.style.display="none",l.href="https://usw2-mqasmartaudit-prod.apple.com/download_file?filePath="+t,document.body.appendChild(l),l.click(),document.body.removeChild(l)},s=o(null),v=o(!1),e=F({}),g=f(()=>e.lob&&e.site&&e.productLine&&e.project&&e.part?`${e.lob}_${e.site}_${e.productLine}_${e.project}_${e.part}.json`:null),Q=async()=>{e.lob=c.lob,e.site=c.site,e.productLine=c.productLine,e.project=c.project,e.part=c.part,e.type="Enclosure",s.value.show()},V=t=>{e.auditType=t.auditType,e.lob=t.lob,e.site=t.site,e.productLine=t.productLine,e.project=t.project,e.part=t.part,e.type="Enclosure",s.value.show()},G=async()=>{v.value=!0;try{await D("/sip/upload_check_list",e),k.success("Uploaded"),s.value.close(),m()}finally{v.value=!1}},W=async t=>{k.loading("Deleting"),await D("/sip/delete_check_list",{id:t.id}),k.success("Deleted"),s.value.close(),m()},R=o(),T=o(),X=async(t,a)=>{R.value.show(),await ne(),T.value.setup(t,a)};return(t,a)=>{const l=i("AAListButtonAdd"),L=i("AAListButtonDownload"),j=i("AAListHandlers"),U=i("AAPageList"),b=i("n-card"),z=i("AADialog"),Y=i("AAFormSiteProject"),$=i("n-grid-item"),Z=i("AAFormSelectJson"),ee=i("n-grid"),te=i("AAFormDialog");return K(),O("div",re,[n(b,null,{default:u(()=>[n(j,null,{default:u(()=>[n(l,{title:"Upload",onClick:Q}),n(L,{title:"Check List Templates",onClick:x})]),_:1}),n(U,{isPaged:!1,isLoading:y.value,columns:p,actions:S,dataSource:_.value,childrenKey:"sub",rowKey:C,onReady:m,onAction:w,onReload:m},null,8,["isLoading","dataSource"])]),_:1}),n(z,{ref_key:"templatesDialogRef",ref:P,title:"Check List Templates",width:"320px"},{default:u(()=>[N("div",{class:"download-link",onClick:a[0]||(a[0]=de=>r("team_SIP/files/Check_List_Template_Enclosure.json"))},"Enclosure Check List Template")]),_:1},512),n(te,{ref_key:"editDialogRef",ref:s,title:"Upload Check List",width:"400px",isLoading:v.value,form:e,onConfirm:G},{default:u(()=>[n(ee,{cols:"1"},{default:u(()=>[n($,null,{default:u(()=>[n(Y,{isRequired:!0,selectParent:!1,label:"Site Project",form:e,team:"SIP",siteProjects:_.value},null,8,["form","siteProjects"])]),_:1}),n($,null,{default:u(()=>[n(Z,{disabled:!e.part,isRequired:!0,label:"JSON Spec File",form:e,formKey:"rawJson",validateName:I(g),tips:"The JSON file must match the line selected"+(I(g)?", and with name '"+I(g)+"'":"")},null,8,["disabled","form","validateName","tips"])]),_:1})]),_:1})]),_:1},8,["isLoading","form"]),n(z,{ref_key:"previewDialogRef",ref:R,title:"Check List"},{default:u(()=>[n(ce,{ref_key:"previewRef",ref:T},null,512)]),_:1},512)])}}});const _e=M(ue,[["__scopeId","data-v-82e79628"]]);export{_e as default};
