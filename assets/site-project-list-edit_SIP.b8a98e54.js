import{d as Se,m as he,l as Pe,p as ke,q as E,r as t,f as J,j as u,o as p,c as Ce,y as s,z as i,i as c,k as j,B as A,x as S,_ as Re}from"./index.9dc4264c.js";const Ee={class:"page"},De=Se({__name:"site-project-list-edit_SIP",setup(Ie){const D=he();Pe();const f=ke(),W=[{value:"lob",label:"LOB"},{value:"site",label:"Site"},{value:"productLine",label:"Product Line"},{value:"project",label:"Project"},{value:"part",label:"Part/Color"}];E(()=>f.getUserInfo.team);const a=E(()=>f.getUserInfo.role),I=E(()=>f.getUserInfo.lob),X=e=>{if(I.value){for(const r of I.value)if(r===e)return!0}return!1},Y=async()=>{const e=await S("/refresh_user",{});f.setToken(e.token),f.setUserInfo(e.user)},Z=[{title:"Site Project Tree",key:"name",align:"left",width:500}],w=e=>e.id,ee={actions:[{title:"Add Sub",type:"info",key:"add_sub",isShow:e=>!e.part&&(a.value==="super_admin"||a.value==="admin"||a.value==="lob_dri")}],more:[{title:"Delete",type:"error",key:"delete",confirm:{type:"delete",targetName:e=>e.part?e.part:e.project?e.project:e.productLine?e.productLine:e.site?e.site:e.lob?e.lob:null,additionalText:"Delete line will delete sub lines together, and this action cannot be undone!"},isShow:e=>a.value==="super_admin"||a.value==="admin"||a.value==="lob_dri"&&e.role!=="supper_admin"&&e.role!=="admin"&&e.role!="lob_dri"&&X(e.lob)}]};t({});const le=t(1),te=t(15),o=J({}),h=async e=>await S("/sip/get_level_lines",e),b=t([]),x=t(!1),L=t(!1),oe=async()=>{if(!L.value){x.value=!0;try{b.value=(await h({})).map(e=>({value:e.lob,label:e.lob})),L.value=!0}finally{x.value=!1}}},T=()=>{(a.value==="super_admin"||a.value==="admin")&&(b.value=[],L.value=!1,o.lob=null),q.value=[],U.value=!1,o.site=null,z.value=[],H.value=!1,o.productLine=null,V.value=[],M.value=!1,o.project=null},ae=()=>{q.value=[],U.value=!1,o.site=null,z.value=[],H.value=!1,o.productLine=null,V.value=[],M.value=!1,o.project=null},q=t([]);t(!1);const U=t(!1),z=t([]);t(!1);const H=t(!1),V=t([]);t(!1);const M=t(!1),Q=t([]),B=t(!0),P=async()=>{B.value=!0;try{const e=await S("/sip/get_lines_tree",{pageNum:le.value,pageSize:te.value,...o});Q.value=e}finally{B.value=!1}},ne=(e,r)=>{e==="add_sub"?pe(r):e==="delete"&&be(r)},m=t(null),K=t(!1),l=J({}),$=()=>{b.value=[],L.value=!1,l.lob=null,k.value=[],C.value=!1,l.site=null,_.value=[],g.value=!1,l.productLine=null,d.value=[],v.value=!1,l.project=null},se=()=>{k.value=[],C.value=!1,l.site=null,_.value=[],g.value=!1,l.productLine=null,d.value=[],v.value=!1,l.project=null},k=t([]),F=t(!1),C=t(!1),ue=async()=>{if(!C.value){F.value=!0;try{k.value=(await h({lob:l.lob})).map(e=>({value:e.site,label:e.site})),C.value=!0}finally{F.value=!1}}},ie=()=>{_.value=[],g.value=!1,l.productLine=null,d.value=[],v.value=!1,l.project=null},_=t([]),N=t(!1),g=t(!1),re=async()=>{if(!g.value){N.value=!0;try{_.value=(await h({lob:l.lob,site:l.site})).map(e=>({value:e.productLine,label:e.productLine})),g.value=!0}finally{N.value=!1}}},ce=()=>{d.value=[],v.value=!1,l.project=null},d=t([]),O=t(!1),v=t(!1),de=async()=>{if(!v.value){O.value=!0;try{d.value=(await h({lob:l.lob,site:l.site,productLine:l.productLine})).map(e=>({value:e.project,label:e.project})),v.value=!0}finally{O.value=!1}}},G=E(()=>{for(const e of W)if(e.value===n.value)return e.label;return n.value}),n=t(""),ve=async e=>{n.value=e,e==="lob"?(l.lob=null,l.site=null,l.productLine=null,l.project=null):e==="site"?(l.lob=o.lob,l.site=null,l.productLine=null,l.project=null):e==="productLine"?(l.lob=o.lob,l.site=o.site,l.productLine=null,l.project=null):e==="project"?(l.lob=o.lob,l.site=o.site,l.productLine=o.productLine,l.project=null):(l.lob=o.lob,l.site=o.site,l.productLine=o.productLine,l.project=o.project),l.part=null,m.value.show()},pe=e=>{e.project?(n.value="part",l.lob=e.lob,l.site=e.site,l.productLine=e.productLine,l.project=e.project):e.productLine?(n.value="project",l.lob=e.lob,l.site=e.site,l.productLine=e.productLine,l.project=null):e.site?(n.value="productLine",l.lob=e.lob,l.site=e.site,l.productLine=null,l.project=null):e.lob&&(n.value="site",l.lob=e.lob,l.site=null,l.productLine=null,l.project=null),l.part=null,m.value.show()},fe=async()=>{K.value=!0;try{await S("/sip/add_line",l),D.success("Add Success"),m.value.close(),P(),T(),$(),n.value==="lob"&&a.value==="lob_dri"&&Y()}finally{K.value=!1}},be=async e=>{D.loading("Deleting"),await S("/sip/delete_line",{id:e.id}),D.success("Deleted"),m.value.close(),P(),T(),$()};if(a.value!=="super_admin"&&a.value!=="admin"){const e=I.value||"";b.value=[{value:e,label:e}],L.value=!0,o.lob=e,ae()}return(e,r)=>{const Le=u("AAListButtonAdd"),me=u("AAListHandlers"),_e=u("AAPageList"),ge=u("n-card"),R=u("AAFormSelect"),y=u("n-grid-item"),ye=u("AAFormInputText"),je=u("n-grid"),Ae=u("AAFormDialog");return p(),Ce("div",Ee,[s(ge,null,{default:i(()=>[s(me,null,{default:i(()=>[c(a)==="super_admin"||c(a)==="admin"||c(a)==="lob_dri"?(p(),j(Le,{key:0,title:"Add LOB",onClick:r[0]||(r[0]=xe=>ve("lob"))})):A("",!0)]),_:1}),s(_e,{isPaged:!1,isLoading:B.value,columns:Z,actions:ee,dataSource:Q.value,childrenKey:"sub",rowKey:w,onReady:P,onAction:ne,onReload:P},null,8,["isLoading","dataSource"])]),_:1}),s(Ae,{ref_key:"editDialogRef",ref:m,what:c(G),isLoading:K.value,form:l,onConfirm:fe},{default:i(()=>[s(je,{cols:"1"},{default:i(()=>[n.value!=="lob"?(p(),j(y,{key:0},{default:i(()=>[s(R,{disabled:c(a)!=="super_admin"&&c(a)!=="admin",isRequired:!0,label:"LOB",form:l,formKey:"lob",options:b.value,loading:x.value,onChange:se,onShow:oe},null,8,["disabled","form","options","loading"])]),_:1})):A("",!0),n.value==="productLine"||n.value==="project"||n.value==="part"?(p(),j(y,{key:1},{default:i(()=>[s(R,{disabled:!l.lob,isRequired:!0,label:"Site",form:l,formKey:"site",options:k.value,loading:F.value,onChange:ie,onShow:ue},null,8,["disabled","form","options","loading"])]),_:1})):A("",!0),n.value==="project"||n.value==="part"?(p(),j(y,{key:2},{default:i(()=>[s(R,{disabled:!l.site,isRequired:!0,label:"Product Line",form:l,formKey:"productLine",options:_.value,loading:N.value,onChange:ce,onShow:re},null,8,["disabled","form","options","loading"])]),_:1})):A("",!0),n.value==="part"?(p(),j(y,{key:3},{default:i(()=>[s(R,{disabled:!l.productLine,isRequired:!0,label:"Project",form:l,formKey:"project",options:d.value,loading:O.value,onShow:de},null,8,["disabled","form","options","loading"])]),_:1})):A("",!0),s(y,null,{default:i(()=>[s(ye,{isRequired:!0,label:c(G)+" Name",form:l,formKey:n.value},null,8,["label","form","formKey"])]),_:1})]),_:1})]),_:1},8,["what","isLoading","form"])])}}});const Ke=Re(De,[["__scopeId","data-v-f375e34d"]]);export{Ke as default};
