import{d as Be,m as Ue,l as Qe,p as ze,q,r as a,f as ne,R as ie,j as c,o as Ie,c as Je,y as o,z as s,i as A,x as N,_ as $e}from"./index.de841f12.js";const Me={class:"page"},Ve=Be({__name:"index",setup(We){const x=Ue();Qe();const B=ze(),U=[{value:1,label:"Module"},{value:2,label:"Enclosure"},{value:3,label:"ORT"}],ee=q(()=>B.getUserInfo.team),r=q(()=>B.getUserInfo.role),te=q(()=>B.getUserInfo.lob),ue=e=>{if(te.value){for(const i of te.value)if(i===e)return!0}return!1},re=[{title:"Audit Type",key:"type",width:150,valueFormator:e=>ie(e,U)},{title:"LOB",key:"lob",width:100},{title:"Vendor",key:"site",width:100},{title:"Stage",key:"stage",width:70},{title:"Year",key:"year",width:70},{title:"Quarter",key:"quarter",width:80,valueFormator:e=>"Q"+e},{title:"Month",key:"month",width:70},{title:"Week",key:"week",width:70},{title:"Audit Date",key:"createTime",width:200},{title:"Audit Times(by stage by month)",key:"auditTimes",width:150},{title:"Auditor",key:"auditor",width:100},{title:"Factory",key:"site",width:100},{title:"Project",key:"project",width:200,valueFormator:(e,i)=>i.project+i.part},{title:"Process",key:"process",width:100},{title:"Line",key:"line",width:100},{title:"Station",key:"station",width:100},{title:"Product Category",key:"productCategory",width:200},{title:"By Audit Category",key:"byAuditCategory",width:200},{title:"Issue category",key:"issueCategory",width:200},{title:"Sub category",key:"subCategory",width:200},{title:"Issue brief",key:"issueBrief",width:200},{title:"Key words",key:"keywords",width:200},{title:"Program related",key:"programRelated",width:200},{title:"Severity",key:"severity",width:80},{title:"Findings",key:"findings",width:200},{title:"Containment action",key:"containmentAction",width:200},{title:"Failure Analysis/Root cause",key:"failureAnalysisRootCause",width:200},{title:"Corrective action",key:"correctiveAction",width:200}],de={actions:[],more:[{title:"Delete",type:"error",key:"delete",confirm:{type:"delete",targetKey:"type"},isShow:e=>r.value==="super_admin"||r.value==="admin"||r.value==="lob_dri"&&e.role!=="admin"&&e.role!="lob_dri"&&ue(e.lob)}]},ce=a({}),P=a(1),Q=a(15),l=ne({});r.value==="super_admin"?l.team="mqa":l.team=ee.value;const d=async e=>await N("/get_level_lines",e),_=a([]),C=a(!1),T=a(!1),le=async()=>{if(!T.value){C.value=!0;try{_.value=(await d({})).map(e=>({processType:e.processType,value:e.lob,label:e.lob})),T.value=!0}finally{C.value=!1}}},z=()=>{(r.value==="super_admin"||r.value==="admin")&&(_.value=[],T.value=!1,l.lob=null),R.value=[],F.value=!1,l.site=null,h.value=[],w.value=!1,l.productLine=null,m.value=[],g.value=!1,l.project=null,p.value=[],v.value=!1,l.part=null},pe=()=>{R.value=[],F.value=!1,l.site=null,h.value=[],w.value=!1,l.productLine=null,m.value=[],g.value=!1,l.project=null,p.value=[],v.value=!1,l.part=null},R=a([]),I=a(!1),F=a(!1),ve=async()=>{if(!F.value){I.value=!0;try{R.value=(await d({lob:l.lob})).map(e=>({processType:e.processType,value:e.site,label:e.site})),F.value=!0}finally{I.value=!1}}},fe=()=>{h.value=[],w.value=!1,l.productLine=null,m.value=[],g.value=!1,l.project=null,p.value=[],v.value=!1,l.part=null},h=a([]),J=a(!1),w=a(!1),ye=async()=>{if(!w.value){J.value=!0;try{h.value=(await d({lob:l.lob,site:l.site})).map(e=>({processType:e.processType,value:e.productLine,label:e.productLine})),w.value=!0}finally{J.value=!1}}},me=()=>{m.value=[],g.value=!1,l.project=null,p.value=[],v.value=!1,l.part=null},m=a([]),$=a(!1),g=a(!1),ge=async()=>{if(!g.value){$.value=!0;try{m.value=(await d({lob:l.lob,site:l.site,productLine:l.productLine})).map(e=>({processType:e.processType,value:e.project,label:e.project})),g.value=!0}finally{$.value=!1}}},be=()=>{p.value=[],v.value=!1,l.part=null},p=a([]),M=a(!1),v=a(!1),Le=async()=>{if(!v.value){M.value=!0;try{p.value=(await d({lob:l.lob,site:l.site,productLine:l.productLine,project:l.project})).map(e=>({processType:e.processType,value:e.part,label:e.part})),v.value=!0}finally{M.value=!1}}},ae=a({total:0,list:[]}),O=a(!0),_e=()=>{z(),r.value==="super_admin"?l.team="mqa":l.team=ee.value,P.value=1},k=async()=>{O.value=!0;try{const e=await N("/get_mil_items_page",{pageNum:P.value,pageSize:Q.value,...l});ae.value=e}finally{O.value=!1}},he=(e,i)=>{e==="preview"||(e==="update"?Re(i):e==="delete"&&Oe(i))},K=a(null),V=a(!1),t=ne({}),W=q(()=>t.lob&&t.site&&t.productLine&&t.project&&t.part&&t.type!=null?`${t.lob}_${t.site}_${t.productLine}_${t.project}_${t.part}_${ie(t.type,U)}.json`:null),oe=()=>{_.value=[],T.value=!1,t.lob=null,E.value=[],D.value=!1,t.site=null,j.value=[],S.value=!1,t.productLine=null,b.value=[],L.value=!1,t.project=null,f.value=[],y.value=!1,t.part=null},we=()=>{E.value=[],D.value=!1,t.site=null,j.value=[],S.value=!1,t.productLine=null,b.value=[],L.value=!1,t.project=null,f.value=[],y.value=!1,t.part=null,t.type=null},E=a([]),Y=a(!1),D=a(!1),ke=async()=>{if(!D.value){Y.value=!0;try{E.value=(await d({lob:t.lob})).map(e=>({processType:e.processType,value:e.site,label:e.site})),D.value=!0}finally{Y.value=!1}}},je=()=>{j.value=[],S.value=!1,t.productLine=null,b.value=[],L.value=!1,t.project=null,f.value=[],y.value=!1,t.part=null},j=a([]),G=a(!1),S=a(!1),Se=async()=>{if(!S.value){G.value=!0;try{j.value=(await d({lob:t.lob,site:t.site})).map(e=>({processType:e.processType,value:e.productLine,label:e.productLine})),S.value=!0}finally{G.value=!1}}},Ae=()=>{b.value=[],L.value=!1,t.project=null,f.value=[],y.value=!1,t.part=null},b=a([]),H=a(!1),L=a(!1),Pe=async()=>{if(!L.value){H.value=!0;try{b.value=(await d({lob:t.lob,site:t.site,productLine:t.productLine})).map(e=>({processType:e.processType,value:e.project,label:e.project})),L.value=!0}finally{H.value=!1}}},Ce=()=>{f.value=[],y.value=!1,t.part=null},f=a([]),X=a(!1),y=a(!1),Te=async()=>{if(!y.value){X.value=!0;try{f.value=(await d({lob:t.lob,site:t.site,productLine:t.productLine,project:t.project})).map(e=>({processType:e.processType,value:e.part,label:e.part})),y.value=!0}finally{X.value=!1}}},Re=e=>{t.lob=e.lob,t.site=e.site,t.productLine=e.productLine,t.project=e.project,t.part=e.part,t.type=e.type,K.value.show()},Fe=async()=>{V.value=!0;try{await N("/upload_check_list",t),x.success("Uploaded"),K.value.close(),k(),z(),oe()}finally{V.value=!1}},Oe=async e=>{x.loading("Deleting"),await N("/delete_mil_item",{id:e.id}),x.success("Deleted"),K.value.close(),k(),z(),oe()};return(e,i)=>{const u=c("AAFormSelect"),n=c("n-grid-item"),Ke=c("AAFormQueryButtons"),se=c("n-grid"),Ee=c("AAForm"),De=c("AAPageList"),qe=c("n-card"),Ne=c("AAFormSelectJson"),xe=c("AAFormDialog");return Ie(),Je("div",Me,[o(qe,null,{default:s(()=>[o(Ee,{labelPlacement:"left",isLoading:O.value,form:l,rules:ce.value},{default:s(()=>[o(se,{cols:"1 400:2 800:3 1000:4"},{default:s(()=>[o(n,null,{default:s(()=>[o(u,{label:"LOB",form:l,formKey:"lob",options:_.value,loading:C.value,onChange:pe,onShow:le},null,8,["form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(u,{disabled:!l.lob,label:"Site",form:l,formKey:"site",options:R.value,loading:I.value,onChange:fe,onShow:ve},null,8,["disabled","form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(u,{disabled:!l.site,label:"Product Line",form:l,formKey:"productLine",options:h.value,loading:J.value,onChange:me,onShow:ye},null,8,["disabled","form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(u,{disabled:!l.productLine,label:"Project",form:l,formKey:"project",options:m.value,loading:$.value,onChange:be,onShow:ge},null,8,["disabled","form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(u,{disabled:!l.project,label:"Part",form:l,formKey:"part",options:p.value,loading:M.value,onShow:Le},null,8,["disabled","form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(Ke,{onQuery:k,onReset:_e})]),_:1})]),_:1})]),_:1},8,["isLoading","form","rules"]),o(De,{isLoading:O.value,pageNum:P.value,"onUpdate:pageNum":i[0]||(i[0]=Z=>P.value=Z),pageSize:Q.value,"onUpdate:pageSize":i[1]||(i[1]=Z=>Q.value=Z),columns:re,actions:de,dataSource:ae.value,onReady:k,onAction:he,onReload:k},null,8,["isLoading","pageNum","pageSize","dataSource"])]),_:1}),o(xe,{ref_key:"editDialogRef",ref:K,title:"Update Check List",width:"320px",isLoading:V.value,form:t,onConfirm:Fe},{default:s(()=>[o(se,{cols:"1"},{default:s(()=>[o(n,null,{default:s(()=>[o(u,{disabled:A(r)!=="super_admin"&&A(r)!=="admin",isRequired:!0,label:"LOB",form:t,formKey:"lob",options:_.value,loading:C.value,onChange:we,onShow:le},null,8,["disabled","form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(u,{disabled:!t.lob,isRequired:!0,label:"Site",form:t,formKey:"site",options:E.value,loading:Y.value,onChange:je,onShow:ke},null,8,["disabled","form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(u,{disabled:!t.site,isRequired:!0,label:"Product Line",form:t,formKey:"productLine",options:j.value,loading:G.value,onChange:Ae,onShow:Se},null,8,["disabled","form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(u,{disabled:!t.productLine,isRequired:!0,label:"Project",form:t,formKey:"project",options:b.value,loading:H.value,onChange:Ce,onShow:Pe},null,8,["disabled","form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(u,{disabled:!t.project,isRequired:!0,label:"Part",form:t,formKey:"part",options:f.value,loading:X.value,onShow:Te},null,8,["disabled","form","options","loading"])]),_:1}),o(n,null,{default:s(()=>[o(u,{isRequired:!0,label:"Type",form:t,formKey:"type",options:U},null,8,["form"])]),_:1}),o(n,null,{default:s(()=>[o(Ne,{disabled:!t.part,isRequired:!0,label:"JSON Spec File",form:t,formKey:"rawJson",validateName:A(W),tips:"The JSON file must match the line selected"+(A(W)?", and with name '"+A(W):"'")},null,8,["disabled","form","validateName","tips"])]),_:1})]),_:1})]),_:1},8,["isLoading","form"])])}}});const Ge=$e(Ve,[["__scopeId","data-v-83436d09"]]);export{Ge as default};
