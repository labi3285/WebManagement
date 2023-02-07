import{d as J,m as K,p as Q,r as o,q as p,f as z,x as O,j as a,o as G,c as Y,a as h,A,i as P,R as H,y as l,z as d,_ as V,l as ce,T as re}from"./index.9a22ce4e.js";const de={class:"view"},ue={class:"head-info"},pe=J({__name:"items",setup(W,{expose:T}){K();const m=Q(),_=o({});p(()=>m.getUserInfo.team),p(()=>m.getUserInfo.role),p(()=>m.getUserInfo.lob),p(()=>m.getUserInfo.id),T({setup:async(r,s)=>{_.value=r,s==="Module"?v.checkListId=r.checkListId_Module:s==="Enclosure"?v.checkListId=r.checkListId_Enclosure:s==="ORT"&&(v.checkListId=r.checkListId_ORT),v.type=s,s=="Module"?L.value=[{title:"SN",key:"sn",width:60},{title:"Main Process",key:"mainProcess",width:300},{title:"Sub Process",key:"subProcess",width:300},{title:"IF CTQ",key:"ifCtq",width:100,valueFormator:n=>n?"Y":"N"},{title:"Measurement Equipment",key:"measurementEquipment",width:200},{title:"Characteristic (Check item)",key:"checkItem",width:400},{title:"LSL",key:"LSL",width:200},{title:"USL",key:"USL",width:200},{title:"LCL (optional)",key:"LCL",width:200},{title:"UCL (optional)",key:"UCL",width:200},{title:"Sample Unit",key:"sampleUnit",width:200},{title:"Sample Size",key:"sampleSize",width:200},{title:"Audit Sample Size",key:"auditSampleSize",width:200},{title:"Frenquency/Basis",key:"frenquencyBasis",width:400},{title:"Control Type",key:"controlType",width:400},{title:"Control Method",key:"controlMethod",width:400},{title:"Control Criteria",key:"controlCriteria",width:400},{title:"Response plan",key:"responsePlan",width:400},{title:"SOP-NO.",key:"sopNo",width:400},{title:"DIS Score",key:"disScore",width:100},{title:"Skip",key:"skip",width:100,valueFormator:n=>n?"TRUE":"FALSE"}]:s=="Enclosure"?L.value=[{title:"SN",key:"sn",width:60},{title:"Main Process",key:"mainProcess",width:300},{title:"Sub Process",key:"subProcess",width:300},{title:"Check Items",key:"checkItems",width:400},{title:"Sampling Size",key:"samplingSize",width:400},{title:"DIS Score",key:"disScore",width:100},{title:"Skip",key:"skip",width:100,valueFormator:n=>n?"TRUE":"FALSE"}]:s=="ORT"&&(L.value=[{title:"SN",key:"sn",width:60},{title:"Project",key:"project",width:200},{title:"Test Item",key:"testItem",width:400},{title:"Test Condition/Parameter",key:"testConditionParameter",width:400},{title:"Equipment",key:"equipment",width:400},{title:"Fixture (Y/N)",key:"fixtureYN",width:200},{title:"Sample Orientation",key:"sampleOrientation",width:200},{title:"Recovery Time",key:"recoveryTime",width:200},{title:"Sample Size",key:"sampleSize",width:200},{title:"Sampling Freq.",key:"samplingFreq",width:200},{title:"Duration",key:"duration",width:200},{title:"Read Point",key:"readPoint",width:200},{title:"Pass/Fail Criteria",key:"passFailCriteria",width:400},{title:"OCAP",key:"OCAP",width:400},{title:"Result",key:"result",width:200}]),w()}});const C=[{value:1,label:"Module"},{value:2,label:"Enclosure"},{value:3,label:"ORT"},{value:10,label:"Glue"},{value:11,label:"Destructive"}],L=o([]),D={actions:[]};o({});const R=o(1),b=o(15),v=z({}),u=o({total:0,list:[]}),k=o(!0),w=async()=>{k.value=!0;try{const r=await O("/get_check_list_items_page",{pageNum:R.value,pageSize:b.value,...v});u.value=r}finally{k.value=!1}},g=(r,s)=>{},M=async(r,s)=>{};return(r,s)=>{const n=a("AAPageList"),f=a("n-card");return G(),Y("div",de,[h("div",ue,[h("p",null,A(_.value.lob)+" / "+A(_.value.site)+" / "+A(_.value.productLine)+" / "+A(_.value.project)+" / "+A(_.value.part)+" / "+A(P(H)(v.type,C)),1)]),l(f,null,{default:d(()=>[l(n,{isLoading:k.value,pageNum:R.value,"onUpdate:pageNum":s[0]||(s[0]=y=>R.value=y),pageSize:b.value,"onUpdate:pageSize":s[1]||(s[1]=y=>b.value=y),columns:L.value,actions:D,dataSource:u.value,onAction:g,onChange:M,onReload:w},null,8,["isLoading","pageNum","pageSize","columns","dataSource"])]),_:1})])}}});const me=V(pe,[["__scopeId","data-v-4425b04f"]]),_e={class:"page"},ve=J({__name:"index",setup(W){const T=K();ce();const m=Q(),_=[{value:"Module",label:"Module"},{value:"Enclosure",label:"Enclosure"},{value:"ORT",label:"ORT"}];p(()=>m.getUserInfo.team);const C=p(()=>m.getUserInfo.role);p(()=>m.getUserInfo.lob);const L=[{title:"Site Project Tree",key:"name",align:"left",width:500},{title:"Check List",key:"checkListTotal",width:200,valueFormator:(e,i)=>{if(i.part){const c=[];return i.checkListId_Module&&c.push("Module"),i.checkListId_Enclosure&&c.push("Enclosure"),i.checkListId_ORT&&c.push("ORT"),c.join(" | ")}else return`${i.checkListUploaded} / ${i.checkListTotal}`}}],D=e=>e.id,R={width:"260px",actions:[{title:"Preview Module",type:"default",key:"previewModule",isShow:e=>e.part!=null&&e.checkListId_Module!=null},{title:"Preview Enclosure",type:"default",key:"previewEnclosure",isShow:e=>e.part!=null&&e.checkListId_Enclosure!=null},{title:"Preview ORT",type:"default",key:"previewORT",isShow:e=>e.part!=null&&e.checkListId_ORT!=null},{title:"Upload",type:"info",key:"update",isShow:e=>C.value==="super_admin"||C.value==="admin"||C.value==="lob_dri"}],more:[]};o({});const b=o(1),v=o(15),u=z({}),k=o([]),w=o(!0),g=async()=>{w.value=!0;try{const e=await O("/get_lines_tree",{pageNum:b.value,pageSize:v.value,...u});k.value=e}finally{w.value=!1}},M=(e,i)=>{e==="previewModule"?U(i,"Module"):e==="previewEnclosure"?U(i,"Enclosure"):e==="previewORT"?U(i,"ORT"):e==="update"?ee(i):e==="delete"&&ie(i)},r=o(null),s=()=>{r.value.show()},n=e=>{function i(S){var j=S.lastIndexOf("/"),N=S.lastIndexOf("\\"),I=Math.max(j,N);return I<0?S:S.substring(I+1)}const c=document.createElement("a");c.download=i(e),c.style.display="none",c.href="https://usw2-mqasmartaudit-prod.apple.com/download_file?filePath="+e,document.body.appendChild(c),c.click(),document.body.removeChild(c)},f=o(null),y=o(!1),t=z({}),F=p(()=>t.lob&&t.site&&t.productLine&&t.project&&t.part&&t.type!=null?`${t.lob}_${t.site}_${t.productLine}_${t.project}_${t.part}_${H(t.type,_)}.json`:null),X=p(()=>t.auditType==="1"?[{value:"Module",label:"Module"},{value:"ORT",label:"ORT"}]:t.auditType==="2"?[{value:"Enclosure",label:"Enclosure"}]:t.auditType==="3"?[{value:"Module",label:"Module"},{value:"Enclosure",label:"Enclosure"},{value:"ORT",label:"ORT"}]:[]),Z=async()=>{t.lob=u.lob,t.site=u.site,t.productLine=u.productLine,t.project=u.project,t.part=u.part,f.value.show()},ee=e=>{t.auditType=e.auditType,t.lob=e.lob,t.site=e.site,t.productLine=e.productLine,t.project=e.project,t.part=e.part,t.type=void 0,f.value.show()},te=async()=>{y.value=!0;try{await O("/upload_check_list",t),T.success("Uploaded"),f.value.close(),g()}finally{y.value=!1}},ie=async e=>{T.loading("Deleting"),await O("/delete_check_list",{id:e.id}),T.success("Deleted"),f.value.close(),g()},$=o(),q=o(),U=async(e,i)=>{$.value.show(),await re(),q.value.setup(e,i)};return(e,i)=>{const c=a("AAListButtonAdd"),S=a("AAListButtonDownload"),j=a("AAListHandlers"),N=a("AAPageList"),I=a("n-card"),B=a("AADialog"),le=a("AAFormSiteProject"),x=a("n-grid-item"),oe=a("AAFormSelect"),se=a("AAFormSelectJson"),ae=a("n-grid"),ne=a("AAFormDialog");return G(),Y("div",_e,[l(I,null,{default:d(()=>[l(j,null,{default:d(()=>[l(c,{title:"Upload",onClick:Z}),l(S,{title:"Check List Templates",onClick:s})]),_:1}),l(N,{isPaged:!1,isLoading:w.value,columns:L,actions:R,dataSource:k.value,childrenKey:"sub",rowKey:D,onReady:g,onAction:M,onReload:g},null,8,["isLoading","dataSource"])]),_:1}),l(B,{ref_key:"templatesDialogRef",ref:r,title:"Check List Templates",width:"320px"},{default:d(()=>[h("div",{class:"download-link",onClick:i[0]||(i[0]=E=>n("files/Check_List_Template_Module.json"))},"Module Check List Template"),h("div",{class:"download-link",onClick:i[1]||(i[1]=E=>n("files/Check_List_Template_Enclosure.json"))},"Enclosure Check List Template"),h("div",{class:"download-link",onClick:i[2]||(i[2]=E=>n("files/Check_List_Template_ORT.json"))},"ORT Check List Template"),h("div",{class:"download-link",onClick:i[3]||(i[3]=E=>n("files/Check_List_Template_Glue.json"))},"Glue Check List Template"),h("div",{class:"download-link",onClick:i[4]||(i[4]=E=>n("files/Check_List_Template_Destructive.json"))},"Destructive Check List Template")]),_:1},512),l(ne,{ref_key:"editDialogRef",ref:f,title:"Upload Check List",width:"400px",isLoading:y.value,form:t,onConfirm:te},{default:d(()=>[l(ae,{cols:"1"},{default:d(()=>[l(x,null,{default:d(()=>[l(le,{isRequired:!0,selectParent:!1,label:"Site Project",form:t,team:"MQA",siteProjects:k.value},null,8,["form","siteProjects"])]),_:1}),l(x,null,{default:d(()=>[l(oe,{isRequired:!0,label:"Audit Type",form:t,formKey:"type",options:P(X)},null,8,["form","options"])]),_:1}),l(x,null,{default:d(()=>[l(se,{disabled:!t.part||!t.type,isRequired:!0,label:"JSON Spec File",form:t,formKey:"rawJson",validateName:P(F),tips:"The JSON file must match the line selected"+(P(F)?", and with name '"+P(F)+"'":"")},null,8,["disabled","form","validateName","tips"])]),_:1})]),_:1})]),_:1},8,["isLoading","form"]),l(B,{ref_key:"previewDialogRef",ref:$,title:"Check List"},{default:d(()=>[l(me,{ref_key:"previewRef",ref:q},null,512)]),_:1},512)])}}});const fe=V(ve,[["__scopeId","data-v-e7fe4c6c"]]);export{fe as default};
