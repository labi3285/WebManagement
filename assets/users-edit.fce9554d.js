import{d as ce,m as me,p as _e,r as u,q as y,f as K,j as r,o as g,c as fe,y as l,z as s,i as c,k as D,B as F,x as m,U as M,_ as ve}from"./index.9dc4264c.js";const pe={class:"page"},be=ce({__name:"users-edit",setup(Ae){const v=me(),L=_e(),P=[{value:"MQA",label:"MQA"},{value:"Accessory",label:"Accessory"},{value:"Display",label:"Display"},{value:"SIP",label:"SIP"},{value:"MDE",label:"MDE"}],Q=[{value:"admin",label:"Admin"},{value:"lob_dri",label:"LOB DRI"},{value:"lob_auditor",label:"LOB Auditor"}],R=u([]);async function H(){if(o.value==="super_admin"){const e=n.team||"MQA",t=await m("/get_level_lines",{team:e});R.value=t.map(a=>a.lob)}else if(o.value==="admin"){const e=S.value,t=await m("/get_level_lines",{team:e});R.value=t.map(a=>a.lob)}else R.value=p.value||[]}const S=y(()=>L.getUserInfo.team),o=y(()=>L.getUserInfo.role),p=y(()=>L.getUserInfo.lob),T=e=>{if(p.value){for(const t of p.value)for(const a of e)if(t===a)return!0}return!1},V=y(()=>L.getUserInfo.id),$=[{title:"Account",key:"account",width:200},{title:"Team",key:"team",width:200,isShow:()=>o.value==="super_admin"},{title:"Role",key:"role",width:100,tagOptions:{valueLabels:Q,valueTypes:[{value:"admin",type:"error"},{value:"lob_dri",type:"warning"},{value:"lob_auditor",type:"info"}]}},{title:"LOB",key:"lob",width:400,valueFormator:e=>e?e.join(","):""},{title:"Enabled",key:"status",width:80,switch:{isNumber:!0,isDisabled:e=>o.value==="admin"&&e.role==="admin"||o.value==="lob_dri"&&(e.role==="lob_dri"||e.role==="admin")||e.id===V.value}},{title:"Create Time",key:"createTime",width:200}],G={width:"230px",actions:[{title:"Change Role",type:"warning",key:"role",isShow:e=>o.value==="super_admin"||o.value==="admin"&&e.role!=="super_admin"&&e.role!=="admin"||o.value==="lob_dri"&&e.role==="lob_auditor"&&T(e.lob)}],more:[{title:"Reset Password",type:"error",key:"reset_password",confirm:{targetKey:"account"},isShow:e=>o.value==="super_admin"||o.value==="admin"&&e.role!=="super_admin"&&e.role!=="admin"||o.value==="lob_dri"&&e.role==="lob_auditor"&&T(e.lob)}]},J=u({}),h=u(1),k=u(15),n=K({});o.value==="super_admin"?n.team="MQA":n.team=S.value;const U=u({total:0,list:[]}),w=u(!0),W=()=>{o.value==="super_admin"?n.team="MQA":n.team=S.value,n.account=null,n.role=null,n.lob=null,h.value=1},_=async()=>{w.value=!0;try{const e=await m("/get_users_page",{pageNum:h.value,pageSize:k.value,...n});U.value=e}finally{w.value=!1}},X=(e,t)=>{e==="role"?te(t):e==="reset_password"?le(t):e==="delete"&&oe(t)},Y=async(e,t)=>{if(e==="status"){const a=t[e];try{await m("/update_user_status",{id:t.id,status:a})}catch{t[e]=a===1?0:1}}},b=u(null),C=u(!1),A=u([]),i=K({});async function x(){if(o.value==="super_admin"){const e=i.team||"MQA",t=await m("/get_level_lines",{team:e});A.value=t.map(a=>a.lob)}else if(o.value==="admin"){const e=S.value,t=await m("/get_level_lines",{team:e});A.value=t.map(a=>a.lob)}else A.value=p.value||[]}const N=y(()=>{if(o.value==="super_admin")return[{value:"admin",label:"Admin"},{value:"lob_dri",label:"LOB DRI"},{value:"lob_auditor",label:"LOB Auditor"}];if(o.value==="admin")return[{value:"lob_dri",label:"LOB DRI"},{value:"lob_auditor",label:"LOB Auditor"}];if(o.value==="lob_dri")return[{value:"lob_auditor",label:"LOB Auditor"}]}),Z=async e=>{e?M(i,e):o.value==="lob_dri"?(i.role="lob_auditor",i.lob=p.value):M(i,null),i.team=n.team,b.value.show()},ee=async()=>{C.value=!0;try{await m("/add_user",i),v.success("Add Success"),b.value.close(),_()}finally{C.value=!1}},le=async e=>{v.loading("Reseting"),await m("/reset_user_password",{id:e.id}),v.success("Password Resetted"),b.value.close(),_()},oe=async e=>{v.loading("Deleting"),await m("/delete_user",{id:e.id}),v.success("Deleted"),b.value.close(),_()};u([]);const E=u(!1),I=u(null),f=K({});async function te(e){M(f,{id:e.id,role:e.role,lob:e.lob}),I.value.show()}async function ae(){E.value=!0;try{await m("/change_user_role",f),v.success("Edit Success"),I.value.close(),_()}finally{E.value=!1}}return(e,t)=>{const a=r("AAFormSelect"),d=r("n-grid-item"),q=r("AAFormInputText"),se=r("AAFormQueryButtons"),O=r("n-grid"),ne=r("AAForm"),ie=r("AAListButtonAdd"),ue=r("AAListHandlers"),re=r("AAPageList"),de=r("n-card"),z=r("AAFormSelectMultiple"),j=r("AAFormDialog");return g(),fe("div",pe,[l(de,null,{default:s(()=>[l(ne,{labelPlacement:"left",isLoading:w.value,form:n,rules:J.value},{default:s(()=>[l(O,{cols:"1 400:2 800:3 1000:4"},{default:s(()=>[c(o)==="super_admin"?(g(),D(d,{key:0},{default:s(()=>[l(a,{label:"Team",form:n,formKey:"team",options:P},null,8,["form"])]),_:1})):F("",!0),l(d,null,{default:s(()=>[l(q,{label:"Account",form:n,formKey:"account"},null,8,["form"])]),_:1}),l(d,null,{default:s(()=>[l(a,{label:"Role",form:n,formKey:"role",options:Q},null,8,["form"])]),_:1}),l(d,null,{default:s(()=>[l(a,{label:"LOB",form:n,formKey:"lob",options:R.value,onShow:H},null,8,["form","options"])]),_:1}),l(d,null,{default:s(()=>[l(se,{onQuery:_,onReset:W})]),_:1})]),_:1})]),_:1},8,["isLoading","form","rules"]),l(ue,null,{default:s(()=>[l(ie,{title:c(o)==="lob_dri"?"Add Auditor":"Add User",onClick:t[0]||(t[0]=B=>Z(null))},null,8,["title"])]),_:1}),l(re,{isLoading:w.value,pageNum:h.value,"onUpdate:pageNum":t[1]||(t[1]=B=>h.value=B),pageSize:k.value,"onUpdate:pageSize":t[2]||(t[2]=B=>k.value=B),columns:$,actions:G,dataSource:U.value,onReady:_,onAction:X,onChange:Y,onReload:_},null,8,["isLoading","pageNum","pageSize","dataSource"])]),_:1}),l(j,{ref_key:"editDialogRef",ref:b,what:c(o)==="lob_dri"?"Auditor":"User",isLoading:C.value,form:i,onConfirm:ee},{default:s(()=>[l(O,{cols:"1"},{default:s(()=>[c(o)==="super_admin"?(g(),D(d,{key:0},{default:s(()=>[l(a,{isRequired:!0,label:"Team",form:i,formKey:"team",options:P},null,8,["form"])]),_:1})):F("",!0),l(d,null,{default:s(()=>[l(q,{isRequired:!0,label:"Account",form:i,formKey:"account"},null,8,["form"])]),_:1}),l(d,null,{default:s(()=>[l(a,{disabled:c(o)!=="super_admin"&&c(o)!=="admin",isRequired:!0,label:"Role",form:i,formKey:"role",options:c(N)},null,8,["disabled","form","options"])]),_:1}),i.role!=="admin"?(g(),D(d,{key:1},{default:s(()=>[l(z,{disabled:c(o)!=="super_admin"&&c(o)!=="admin",isRequired:!0,label:"LOB",form:i,formKey:"lob",onShow:x,options:A.value},null,8,["disabled","form","options"])]),_:1})):F("",!0)]),_:1})]),_:1},8,["what","isLoading","form"]),l(j,{ref_key:"editRoleDialogRef",ref:I,title:"Change Role",isLoading:E.value,form:f,onConfirm:ae},{default:s(()=>[l(O,{cols:"1"},{default:s(()=>[l(d,null,{default:s(()=>[l(a,{isRequired:!0,label:"Role",form:f,formKey:"role",options:c(N)},null,8,["form","options"])]),_:1}),f.role!=="super_admin"&&f.role!=="admin"?(g(),D(d,{key:0},{default:s(()=>[l(z,{isRequired:!0,label:"LOB",form:f,formKey:"lob",options:A.value,onShow:x},null,8,["form","options"])]),_:1})):F("",!0)]),_:1})]),_:1},8,["isLoading","form"])])}}});const ge=ve(be,[["__scopeId","data-v-5849b39d"]]);export{ge as default};
