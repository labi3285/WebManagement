import{d as Te,m as Pe,l as ke,p as Ce,q as R,r as t,f as X,j as i,o as b,c as Re,y as s,z as u,i as d,k as A,B as h,R as Ee,x as S,_ as De}from"./index.b6fcd264.js";const Ke={class:"page"},xe=Te({__name:"site-project-list-edit",setup(Be){const E=Pe();ke();const L=Ce(),O=[{value:"1",label:"Module"},{value:"2",label:"Enclosure"},{value:"3",label:"AudioHome"}],Y=[{value:"lob",label:"LOB"},{value:"site",label:"Site"},{value:"productLine",label:"Product Line"},{value:"project",label:"Project"},{value:"part",label:"Part/Color"}];R(()=>L.getUserInfo.team);const n=R(()=>L.getUserInfo.role),D=R(()=>L.getUserInfo.lob),Z=e=>{if(D.value){for(const r of D.value)if(r===e)return!0}return!1},w=async()=>{const e=await S("/refresh_user",{});L.setToken(e.token),L.setUserInfo(e.user)},ee=[{title:"Site Project Tree",key:"name",align:"left",width:500},{title:"Audit Type",key:"auditType",width:200,valueFormator:e=>Ee(e,O)}],le=e=>e.id,te={actions:[{title:"Add Sub",type:"info",key:"add_sub",isShow:e=>!e.part&&(n.value==="super_admin"||n.value==="admin"||n.value==="lob_dri")}],more:[{title:"Delete",type:"error",key:"delete",confirm:{type:"delete",targetName:e=>e.part?e.part:e.project?e.project:e.productLine?e.productLine:e.site?e.site:e.lob?e.lob:null,additionalText:" Delete line will delete sub lines together, and this action cannot be undone!"},isShow:e=>n.value==="super_admin"||n.value==="admin"||n.value==="lob_dri"&&e.role!=="supper_admin"&&e.role!=="admin"&&e.role!="lob_dri"&&Z(e.lob)}]};t({});const ae=t(1),oe=t(15),a=X({}),T=async e=>await S("/get_level_lines",e),c=t([]),K=t(!1),m=t(!1),ne=async()=>{if(!m.value){K.value=!0;try{c.value=(await T({})).map(e=>({auditType:e.auditType,value:e.lob,label:e.lob})),m.value=!0}finally{K.value=!1}}},U=()=>{(n.value==="super_admin"||n.value==="admin")&&(c.value=[],m.value=!1,a.lob=null),z.value=[],H.value=!1,a.site=null,M.value=[],V.value=!1,a.productLine=null,Q.value=[],$.value=!1,a.project=null},se=()=>{z.value=[],H.value=!1,a.site=null,M.value=[],V.value=!1,a.productLine=null,Q.value=[],$.value=!1,a.project=null},z=t([]);t(!1);const H=t(!1),M=t([]);t(!1);const V=t(!1),Q=t([]);t(!1);const $=t(!1),G=t([]),x=t(!0),P=async()=>{x.value=!0;try{const e=await S("/get_lines_tree",{pageNum:ae.value,pageSize:oe.value,...a});G.value=e}finally{x.value=!1}},ue=(e,r)=>{e==="add_sub"?be(r):e==="delete"&&me(r)},_=t(null),B=t(!1),l=X({}),J=()=>{c.value=[],m.value=!1,l.lob=null,k.value=[],C.value=!1,l.site=null,y.value=[],g.value=!1,l.productLine=null,p.value=[],f.value=!1,l.project=null},F=()=>{if(l.lob){for(const e of c.value)if(e.value===l.lob){l.auditType=e.auditType;break}}else l.auditType=null},ie=()=>{k.value=[],C.value=!1,l.site=null,y.value=[],g.value=!1,l.productLine=null,p.value=[],f.value=!1,l.project=null,F()},k=t([]),I=t(!1),C=t(!1),re=async()=>{if(!C.value){I.value=!0;try{k.value=(await T({lob:l.lob})).map(e=>({auditType:e.auditType,value:e.site,label:e.site})),C.value=!0}finally{I.value=!1}}},de=()=>{y.value=[],g.value=!1,l.productLine=null,p.value=[],f.value=!1,l.project=null},y=t([]),q=t(!1),g=t(!1),ce=async()=>{if(!g.value){q.value=!0;try{y.value=(await T({lob:l.lob,site:l.site})).map(e=>({auditType:e.auditType,value:e.productLine,label:e.productLine})),g.value=!0}finally{q.value=!1}}},pe=()=>{p.value=[],f.value=!1,l.project=null},p=t([]),N=t(!1),f=t(!1),fe=async()=>{if(!f.value){N.value=!0;try{p.value=(await T({lob:l.lob,site:l.site,productLine:l.productLine})).map(e=>({auditType:e.auditType,value:e.project,label:e.project})),f.value=!0}finally{N.value=!1}}},W=R(()=>{for(const e of Y)if(e.value===o.value)return e.label;return o.value}),o=t(""),ve=async e=>{o.value=e,l.auditType=null,e==="lob"?(l.lob=null,l.site=null,l.productLine=null,l.project=null):e==="site"?(l.lob=a.lob,l.site=null,l.productLine=null,l.project=null):e==="productLine"?(l.lob=a.lob,l.site=a.site,l.productLine=null,l.project=null):e==="project"?(l.lob=a.lob,l.site=a.site,l.productLine=a.productLine,l.project=null):(l.lob=a.lob,l.site=a.site,l.productLine=a.productLine,l.project=a.project),l.part=null,F(),_.value.show()},be=e=>{l.auditType=e.auditType,e.project?(o.value="part",l.lob=e.lob,l.site=e.site,l.productLine=e.productLine,l.project=e.project):e.productLine?(o.value="project",l.lob=e.lob,l.site=e.site,l.productLine=e.productLine,l.project=null):e.site?(o.value="productLine",l.lob=e.lob,l.site=e.site,l.productLine=null,l.project=null):e.lob&&(o.value="site",l.lob=e.lob,l.site=null,l.productLine=null,l.project=null),l.part=null,F(),_.value.show()},Le=async()=>{B.value=!0;try{await S("/add_line",l),E.success("Add Success"),_.value.close(),P(),U(),J(),o.value==="lob"&&n.value==="lob_dri"&&w()}finally{B.value=!1}},me=async e=>{E.loading("Deleting"),await S("/delete_line",{id:e.id}),E.success("Deleted"),_.value.close(),P(),U(),J()};if(n.value!=="super_admin"&&n.value!=="admin"){const e=D.value||"";c.value=[{value:e,label:e}],m.value=!0,a.lob=e,se()}return(e,r)=>{const _e=i("AAListButtonAdd"),ye=i("AAListHandlers"),ge=i("AAPageList"),je=i("n-card"),j=i("AAFormSelect"),v=i("n-grid-item"),Ae=i("AAFormInputText"),he=i("n-grid"),Se=i("AAFormDialog");return b(),Re("div",Ke,[s(je,null,{default:u(()=>[s(ye,null,{default:u(()=>[d(n)==="super_admin"||d(n)==="admin"||d(n)==="lob_dri"?(b(),A(_e,{key:0,title:"Add LOB",onClick:r[0]||(r[0]=Fe=>ve("lob"))})):h("",!0)]),_:1}),s(ge,{isPaged:!1,isLoading:x.value,columns:ee,actions:te,dataSource:G.value,childrenKey:"sub",rowKey:le,onReady:P,onAction:ue,onReload:P},null,8,["isLoading","dataSource"])]),_:1}),s(Se,{ref_key:"editDialogRef",ref:_,what:d(W),isLoading:B.value,form:l,onConfirm:Le},{default:u(()=>[s(he,{cols:"1"},{default:u(()=>[o.value!=="lob"?(b(),A(v,{key:0},{default:u(()=>[s(j,{disabled:d(n)!=="super_admin"&&d(n)!=="admin",isRequired:!0,label:"LOB",form:l,formKey:"lob",options:c.value,loading:K.value,onChange:ie,onShow:ne},null,8,["disabled","form","options","loading"])]),_:1})):h("",!0),o.value==="productLine"||o.value==="project"||o.value==="part"?(b(),A(v,{key:1},{default:u(()=>[s(j,{disabled:!l.lob,isRequired:!0,label:"Site",form:l,formKey:"site",options:k.value,loading:I.value,onChange:de,onShow:re},null,8,["disabled","form","options","loading"])]),_:1})):h("",!0),o.value==="project"||o.value==="part"?(b(),A(v,{key:2},{default:u(()=>[s(j,{disabled:!l.site,isRequired:!0,label:"Product Line",form:l,formKey:"productLine",options:y.value,loading:q.value,onChange:pe,onShow:ce},null,8,["disabled","form","options","loading"])]),_:1})):h("",!0),o.value==="part"?(b(),A(v,{key:3},{default:u(()=>[s(j,{disabled:!l.productLine,isRequired:!0,label:"Project",form:l,formKey:"project",options:p.value,loading:N.value,onShow:fe},null,8,["disabled","form","options","loading"])]),_:1})):h("",!0),s(v,null,{default:u(()=>[s(Ae,{isRequired:!0,label:d(W)+" Name",form:l,formKey:o.value},null,8,["label","form","formKey"])]),_:1}),s(v,null,{default:u(()=>[s(j,{disabled:o.value!=="lob",isRequired:!0,label:"Audit Type",form:l,formKey:"auditType",options:O},null,8,["disabled","form"])]),_:1})]),_:1})]),_:1},8,["what","isLoading","form"])])}}});const qe=De(xe,[["__scopeId","data-v-4b0cdff9"]]);export{qe as default};
