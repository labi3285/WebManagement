import{d as J,m as q,p as K,r as o,q as m,f as F,x as D,j as a,o as O,c as M,a as N,A as L,i as I,R as se,y as s,z as p,_ as H,l as ne,T as ae}from"./index.1b29a92a.js";const ie={class:"view"},le={class:"head-info"},ce=J({__name:"items",setup(Q,{expose:h}){q();const _=K(),r=o({});m(()=>_.getUserInfo.team),m(()=>_.getUserInfo.role),m(()=>_.getUserInfo.lob),m(()=>_.getUserInfo.id),h({setup:async(u,i)=>{r.value=u,i==="Enclosure"&&(l.checkListId=u.checkListId_Enclosure),l.type=i,i=="Enclosure"&&(w.value=[{title:"SN",key:"sn",width:60},{title:"Main Process",key:"mainProcess",width:300},{title:"Sub Process",key:"subProcess",width:300},{title:"Area",key:"area",width:300},{title:"Check Items",key:"checkItems",width:400},{title:"Sampling Size",key:"samplingSize",width:400},{title:"Looking For",key:"lookingFor",width:800},{title:"DIS Score",key:"disScore",width:100},{title:"Skip",key:"skip",width:100,valueFormator:d=>d?"TRUE":"FALSE"}]),v()}});const C=[{value:0,label:"Enclosure"}],w=o([]),E={actions:[]};o({});const k=o(1),A=o(15),l=F({}),g=o({total:0,list:[]}),f=o(!0),v=async()=>{f.value=!0;try{const u=await D("/sip/get_check_list_items_page",{pageNum:k.value,pageSize:A.value,...l});g.value=u}finally{f.value=!1}},x=(u,i)=>{},P=async(u,i)=>{};return(u,i)=>{const d=a("AAPageList"),S=a("n-card");return O(),M("div",ie,[N("div",le,[N("p",null,L(r.value.lob)+" / "+L(r.value.site)+" / "+L(r.value.productLine)+" / "+L(r.value.project)+" / "+L(r.value.part)+" / "+L(I(se)(l.type,C)),1)]),s(S,null,{default:p(()=>[s(d,{isLoading:f.value,pageNum:k.value,"onUpdate:pageNum":i[0]||(i[0]=e=>k.value=e),pageSize:A.value,"onUpdate:pageSize":i[1]||(i[1]=e=>A.value=e),columns:w.value,actions:E,dataSource:g.value,onAction:x,onChange:P,onReload:v},null,8,["isLoading","pageNum","pageSize","columns","dataSource"])]),_:1})])}}});const re=H(ce,[["__scopeId","data-v-65cb0a3f"]]),ue={class:"page"},de=J({__name:"index",setup(Q){const h=q();ne();const _=K();m(()=>_.getUserInfo.team);const r=m(()=>_.getUserInfo.role);m(()=>_.getUserInfo.lob);const C=[{title:"Site Project Tree",key:"name",align:"left",width:500},{title:"Check List",key:"checkListTotal",width:200,valueFormator:(t,n)=>{if(n.part){const c=[];return n.checkListId_Enclosure&&c.push("Enclosure"),c.join(" | ")}else return`${n.checkListUploaded} / ${n.checkListTotal}`}}],w=t=>t.id,E={width:"260px",actions:[{title:"Preview Enclosure",type:"default",key:"previewEnclosure",isShow:t=>t.part!=null&&t.checkListId_Enclosure!=null},{title:"Upload",type:"info",key:"update",isShow:t=>r.value==="super_admin"||r.value==="admin"||r.value==="lob_dri"}],more:[]};o({});const k=o(1),A=o(15),l=F({}),g=o([]),f=o(!0),v=async()=>{f.value=!0;try{const t=await D("/sip/get_lines_tree",{pageNum:k.value,pageSize:A.value,...l});g.value=t}finally{f.value=!1}},x=(t,n)=>{t==="previewEnclosure"?Y(n,"Enclosure"):t==="update"?G(n):t==="delete"&&X(n)},P=o(null),u=()=>{P.value.show()},i=t=>{function n(y){var R=y.lastIndexOf("/"),U=y.lastIndexOf("\\"),b=Math.max(R,U);return b<0?y:y.substring(b+1)}const c=document.createElement("a");c.download=n(t),c.style.display="none",c.href="https://usw2-mqasmartaudit-prod.apple.com/download_file?filePath="+t,document.body.appendChild(c),c.click(),document.body.removeChild(c)},d=o(null),S=o(!1),e=F({}),j=m(()=>e.lob&&e.site&&e.productLine&&e.project&&e.part?`${e.lob}_${e.site}_${e.productLine}_${e.project}_${e.part}.json`:null),V=async()=>{e.lob=l.lob,e.site=l.site,e.productLine=l.productLine,e.project=l.project,e.part=l.part,e.type="Enclosure",d.value.show()},G=t=>{e.auditType=t.auditType,e.lob=t.lob,e.site=t.site,e.productLine=t.productLine,e.project=t.project,e.part=t.part,e.type="Enclosure",d.value.show()},W=async()=>{S.value=!0;try{await D("/sip/upload_check_list",e),h.success("Uploaded"),d.value.close(),v()}finally{S.value=!1}},X=async t=>{h.loading("Deleting"),await D("/sip/delete_check_list",{id:t.id}),h.success("Deleted"),d.value.close(),v()},T=o(),z=o(),Y=async(t,n)=>{T.value.show(),await ae(),z.value.setup(t,n)};return(t,n)=>{const c=a("AAListButtonAdd"),y=a("AAListButtonDownload"),R=a("AAListHandlers"),U=a("AAPageList"),b=a("n-card"),$=a("AADialog"),Z=a("AAFormSiteProject"),B=a("n-grid-item"),ee=a("AAFormSelectJson"),te=a("n-grid"),oe=a("AAFormDialog");return O(),M("div",ue,[s(b,null,{default:p(()=>[s(R,null,{default:p(()=>[s(c,{title:"Upload",onClick:V}),s(y,{title:"Check List Templates",onClick:u})]),_:1}),s(U,{isPaged:!1,isLoading:f.value,columns:C,actions:E,dataSource:g.value,childrenKey:"sub",rowKey:w,onReady:v,onAction:x,onReload:v},null,8,["isLoading","dataSource"])]),_:1}),s($,{ref_key:"templatesDialogRef",ref:P,title:"Check List Templates",width:"320px"},{default:p(()=>[N("div",{class:"download-link",onClick:n[0]||(n[0]=pe=>i("team_SIP/files/Check_List_Template_Enclosure.json"))},"Enclosure Check List Template")]),_:1},512),s(oe,{ref_key:"editDialogRef",ref:d,title:"Upload Check List",width:"400px",isLoading:S.value,form:e,onConfirm:W},{default:p(()=>[s(te,{cols:"1"},{default:p(()=>[s(B,null,{default:p(()=>[s(Z,{isRequired:!0,selectParent:!1,label:"Site Project",form:e,team:"SIP",siteProjects:g.value},null,8,["form","siteProjects"])]),_:1}),s(B,null,{default:p(()=>[s(ee,{disabled:!e.part,isRequired:!0,label:"JSON Spec File",form:e,formKey:"rawJson",validateName:I(j),tips:"The JSON file must match the line selected"+(I(j)?", and with name '"+I(j)+"'":"")},null,8,["disabled","form","validateName","tips"])]),_:1})]),_:1})]),_:1},8,["isLoading","form"]),s($,{ref_key:"previewDialogRef",ref:T,title:"Check List"},{default:p(()=>[s(re,{ref_key:"previewRef",ref:z},null,512)]),_:1},512)])}}});const me=H(de,[["__scopeId","data-v-a07ee8a4"]]);export{me as default};
