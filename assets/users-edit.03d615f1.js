import{d as ie,m as re,p as ue,r as u,q,f as P,j as n,o as y,c as de,y as o,z as l,i as c,k as w,B as S,x as _,U as T,_ as ce}from"./index.87770df0.js";const me={class:"page"},fe=ie({__name:"users-edit",setup(_e){const p=re(),h=ue(),U=[{value:"mqa",label:"MQA"},{value:"accessory",label:"Accessory"},{value:"display",label:"Display"}],g=[{value:"admin",label:"Admin"},{value:"lob_dri",label:"LOB DRI"},{value:"lob_auditor",label:"LOB Auditor"}],A=u([]);async function F(){const e=s.team||d.team,a=await _("/get_level_lines",{team:e});A.value=a.map(i=>i.lob)}const t=q(()=>h.getUserInfo.role),k=q(()=>h.getUserInfo.lob),z=e=>{if(k.value){for(const a of k.value)if(a===e)return!0}return!1},Q=q(()=>h.getUserInfo.id),M=[{title:"Account",key:"account",width:200},{title:"Team",key:"team",width:200,isShow:()=>t.value==="super_admin"},{title:"Role",key:"role",width:100,tagOptions:{valueLabels:g,valueTypes:[{value:"admin",type:"error"},{value:"lob_dri",type:"warning"},{value:"lob_auditor",type:"info"}]}},{title:"LOB",key:"lob",width:200,valueFormator:e=>e?e.join(","):""},{title:"Enable",key:"status",width:80,switch:{isNumber:!0,isDisabled:e=>t.value!=="super_admin"&&t.value!=="admin"&&(t.value==="lob_dri"&&e.role==="lob_dri"||t.value!=="lob_dri"||e.id===Q.value)}},{title:"Create Time",key:"createTime",width:200}],j={actions:[{title:"Change Role",type:"warning",key:"role",isShow:e=>t.value==="super_admin"||t.value==="admin"}],more:[{title:"Reset Password",type:"error",key:"reset_password",confirm:{targetKey:"account"},isShow:e=>t.value==="super_admin"||t.value==="admin"||t.value==="lob_dri"&&e.role!=="super_admin"&&e.role!=="admin"&&e.role!="lob_dri"&&z(e.lob)}]},H=u({}),b=u(1),B=u(15),d=P({team:"mqa"}),x=u({total:0,list:[]}),L=u(!0),V=()=>{d.team="mqa",d.account=null,b.value=1},m=async()=>{L.value=!0;try{const e=await _("/get_users_page",{pageNum:b.value,pageSize:B.value,...d});x.value=e}finally{L.value=!1}},$=(e,a)=>{e==="role"?Z(a):e==="reset_password"?X(a):e==="delete"&&Y(a)},G=async(e,a)=>{if(e==="status"){const i=a[e];try{await _("/update_user_status",{id:a.id,status:i})}catch{a[e]=i===1?0:1}}},v=u(null),C=u(!1),s=P({}),J=async e=>{e?T(s,e):t.value==="lob_dri"?(s.role="lob_auditor",s.lob=k.value):T(s,null),s.team=d.team,v.value.show()},W=async()=>{C.value=!0;try{await _("/add_user",s),p.success("Add Success"),v.value.close(),m()}finally{C.value=!1}},X=async e=>{p.loading("Reseting"),await _("/reset_user_password",{id:e.id}),p.success("Password Resetted"),v.value.close(),m()},Y=async e=>{p.loading("Deleting"),await _("/delete_user",{id:e.id}),p.success("Deleted"),v.value.close(),m()};u([]);const D=u(!1),E=u(null),f=P({});async function Z(e){T(f,{id:e.id,role:e.role,lob:e.lob}),E.value.show()}async function ee(){D.value=!0;try{await _("/change_user_role",f),p.success("Edit Success"),E.value.close(),m()}finally{D.value=!1}}return(e,a)=>{const i=n("AAFormSelect"),r=n("n-grid-item"),I=n("AAFormInputText"),oe=n("AAFormQueryButtons"),K=n("n-grid"),te=n("AAForm"),le=n("AAListButtonAdd"),ae=n("AAListHandlers"),se=n("AAPageList"),ne=n("n-card"),N=n("AAFormSelectMultiple"),O=n("AAFormDialog");return y(),de("div",me,[o(ne,null,{default:l(()=>[o(te,{labelPlacement:"left",isLoading:L.value,form:d,rules:H.value},{default:l(()=>[o(K,{cols:"1 400:2 800:3 1000:4"},{default:l(()=>[c(t)==="super_admin"?(y(),w(r,{key:0},{default:l(()=>[o(i,{label:"Team",form:d,formKey:"team",options:U},null,8,["form"])]),_:1})):S("",!0),o(r,null,{default:l(()=>[o(I,{label:"Account",form:d,formKey:"account"},null,8,["form"])]),_:1}),o(r,null,{default:l(()=>[o(i,{label:"Role",form:d,formKey:"role",options:g,onShow:F},null,8,["form"])]),_:1}),o(r,null,{default:l(()=>[o(i,{label:"LOB",form:d,formKey:"lob",options:A.value},null,8,["form","options"])]),_:1}),o(r,null,{default:l(()=>[o(oe,{onQuery:m,onReset:V})]),_:1})]),_:1})]),_:1},8,["isLoading","form","rules"]),o(ae,null,{default:l(()=>[o(le,{title:c(t)==="lob_dri"?"Add Auditor":"Add User",onClick:a[0]||(a[0]=R=>J(null))},null,8,["title"])]),_:1}),o(se,{isLoading:L.value,pageNum:b.value,"onUpdate:pageNum":a[1]||(a[1]=R=>b.value=R),pageSize:B.value,"onUpdate:pageSize":a[2]||(a[2]=R=>B.value=R),columns:M,actions:j,dataSource:x.value,onReady:m,onAction:$,onChange:G,onReload:m},null,8,["isLoading","pageNum","pageSize","dataSource"])]),_:1}),o(O,{ref_key:"editDialogRef",ref:v,what:c(t)==="lob_dri"?"Auditor":"User",isLoading:C.value,form:s,onConfirm:W},{default:l(()=>[o(K,{cols:"1"},{default:l(()=>[c(t)==="super_admin"?(y(),w(r,{key:0},{default:l(()=>[o(i,{isRequired:!0,label:"Team",form:s,formKey:"team",options:U},null,8,["form"])]),_:1})):S("",!0),o(r,null,{default:l(()=>[o(I,{isRequired:!0,label:"Account",form:s,formKey:"account"},null,8,["form"])]),_:1}),o(r,null,{default:l(()=>[o(i,{disabled:c(t)!=="super_admin"&&c(t)!=="admin",isRequired:!0,label:"Role",form:s,formKey:"role",options:g},null,8,["disabled","form"])]),_:1}),s.role!=="admin"?(y(),w(r,{key:1},{default:l(()=>[o(N,{disabled:c(t)!=="super_admin"&&c(t)!=="admin",isRequired:!0,label:"LOB",form:s,formKey:"lob",onShow:F,options:A.value},null,8,["disabled","form","options"])]),_:1})):S("",!0)]),_:1})]),_:1},8,["what","isLoading","form"]),o(O,{ref_key:"editRoleDialogRef",ref:E,title:"Change Role",isLoading:D.value,form:f,onConfirm:ee},{default:l(()=>[o(K,{cols:"1"},{default:l(()=>[o(r,null,{default:l(()=>[o(i,{isRequired:!0,label:"Role",form:f,formKey:"role",options:g},null,8,["form"])]),_:1}),f.role!=="super_admin"&&f.role!=="admin"?(y(),w(r,{key:0},{default:l(()=>[o(N,{isRequired:!0,label:"LOB",form:f,formKey:"lob",options:A.value,onShow:F},null,8,["form","options"])]),_:1})):S("",!0)]),_:1})]),_:1},8,["isLoading","form"])])}}});const ve=ce(fe,[["__scopeId","data-v-1f63dc2a"]]);export{ve as default};
