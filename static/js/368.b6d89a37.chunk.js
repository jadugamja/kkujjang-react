"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[368],{9673:(e,t,r)=>{r.d(t,{Z:()=>p});var s=r(5655),n=r(1386),i=r.n(n),c=r(5381),a=r(2556);const o=({nickname:e,message:t,createdAt:r})=>(0,a.jsxs)(d,{children:[(0,a.jsx)(l,{row:"start",col:"center",children:(0,a.jsx)("span",{children:e})}),(0,a.jsx)(h,{col:"center",children:(0,a.jsx)("span",{children:t})}),r&&(0,a.jsx)(h,{marginLeft:"auto",children:(0,a.jsx)("span",{children:r})})]}),d=(0,s.ZP)(c.Z)`
  height: 20px;
`,l=(0,s.ZP)(c.Z)`
  width: 130px;
  height: inherit;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,h=(0,s.ZP)(c.Z)`
  height: inherit;
  margin-left: ${({marginLeft:e})=>e};
`;o.propTypes={nickname:i().string,message:i().string,createdAt:i().string};const p=o},3473:(e,t,r)=>{r.d(t,{Z:()=>f});var s=r(4519),n=r(3908),i=r(1386),c=r.n(i),a=r(5655),o=r(2120),d=r(5913),l=r(8417),h=r(7688),p=r(5381),x=r(5023),g=r(3426),u=r(2556);const A=({type:e,onSideOpen:t})=>{const[r]=(0,n.Z)(["sessionId"]),[i,c]=(0,s.useState)([]),[a,p]=(0,s.useState)({createdAt:"latest",types:{isOffensive:1,isPoorManner:1,isCheating:1},isHandled:0}),[A,f]=(0,s.useState)(1),[w,y]=(0,s.useState)(1),[Z,b]=(0,s.useState)({method:"get",url:`/report/search?page=${A}`,headers:{sessionId:r.sessionId}}),{response:k,loading:S,error:I,fetchData:P}=(0,g.Z)(Z,!1),v=["createdAt","types"]?.map((e=>"createdAt"===e?{key:e,values:["oldest","latest"]}:"types"===e?{key:e,values:["isOffensive","isCheating","isPoorManner"]}:void 0));return(0,s.useEffect)((()=>{null!==Z&&P()}),[Z]),(0,s.useEffect)((()=>{null!==k?(y(0===k.result.lastPage?1:k.result.lastPage),c(k.result.list?.map((({id:e,reporterNickname:t,isCheating:r,isOffensive:s,isPoorManner:n,note:i,reporteeNickname:c,createdAt:a,isHandled:o})=>({id:e,reporteeNickname:c,types:{isCheating:r,isOffensive:s,isPoorManner:n,note:i},reporterNickname:t,createdAt:a,isHandled:o}))))):(y(1),c([]))}),[k]),(0,s.useEffect)((()=>{if(0===i?.length)return;let e=[...i];Object.entries(a).forEach((([t,r])=>{"createdAt"===t?e.sort(((e,s)=>"oldest"===r?new Date(e[t])-new Date(s[t]):new Date(s[t])-new Date(e[t]))):"types"===t&&(e=e.filter((e=>Object.entries(r).every((([t,r])=>null===r||e[t]===r)))))})),c(e);const t=Object.entries(a).map((([e,t])=>"types"===e?Object.entries(t)?.map((([e,t])=>`${e}=${t?1:0}`))?.join("&"):"createdAt"===e?`order=${t}`:`${e}=${t}`)).join("&");b({...Z,url:`/report/search?page=${A}&${t}`})}),[A,a]),(0,u.jsx)(u.Fragment,{children:"home"!==e?(0,u.jsxs)(x.xu,{children:[(0,u.jsxs)(j,{row:"between",col:"center",children:[(0,u.jsx)(o.Z,{title:"report"}),(0,u.jsx)(m,{marginTop:"1.313rem",marginRight:"0.75rem",children:(0,u.jsx)(l.Z,{filterOptions:v,setSelectedFilterOptions:p})})]}),(0,u.jsx)(d.Z,{isHome:!1,title:"report",data:i,onSideOpen:t}),(0,u.jsx)(h.Z,{currPage:A,setCurrPage:f,lastPageIdx:w})]}):(0,u.jsxs)(x.xu,{type:e,children:[(0,u.jsx)(o.Z,{type:e,title:"report"}),(0,u.jsx)(d.Z,{isHome:!0,title:"report",data:i,onSideOpen:t})]})})};A.propTypes={type:c().string,onSideOpen:c().func};const j=(0,a.ZP)(p.h)`
  padding-bottom: 14px;
`,m=a.ZP.div`
  margin-top: ${({marginTop:e})=>e};
  margin-right: ${({marginRight:e})=>e};
`,f=A},8417:(e,t,r)=>{r.d(t,{Z:()=>f});var s=r(4519),n=r(5655),i=r(1386),c=r.n(i),a=r(5381);const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgB7ZPBDYMwDEV/1A7iETpKN2k3aHvskQ3YBLhxgw1gA9gAfkiQkCAQhROCJz0lShQrlm3gdKjJ/kMFYbT0Z9eBJ+12qmPgbgOmVkEYNS1xCJTj/EUfWCejMTzxKUKz9PDmCKh/LjBt4PJPcxwOtXEvMBM0olONYPouiC/mxXhjB0ILWlkThE/ThSc9eZU2SxdIGWIAAAAASUVORK5CYII=";var d=r(2556);const l={type:"\ubb38\uc758 \uc720\ud615",types:"\uc2e0\uace0 \uc720\ud615",needAnswer:"\ub2f5\ubcc0 \uc5ec\ubd80",createdAt:"\uc815\ub82c"},h=({filterOptions:e,selectedFilterOptions:t,setSelectedFilterOptions:r})=>{const[n,i]=(0,s.useState)(e?.reduce(((e,t)=>({...e,[t]:!1})),{})),[c,a]=(0,s.useState)(e?.filter((({key:e})=>"types"===e))?.reduce(((e,t)=>({...e,[t.key]:t.values.reduce(((e,t)=>({...e,[t]:!1})),{})})),{}));return(0,d.jsx)(g,{children:e?.map((({key:e,values:s},l)=>(0,d.jsxs)(u,{col:"center",children:[(0,d.jsx)("span",{children:p(e)}),(0,d.jsx)(A,{src:o,onClick:()=>i((t=>({...t,[e]:!t[e]}))),onMouseOver:e=>e.target.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7ZPfDYIwEMbvgAEcgRHcRDewgQEcAdlAFiAdgRFgA0eoGzBA//hVxQcj1TTxgejvpeXr3ZfLHUf0c/B0KYqiYuacIkDeqLWupZRj5oWyLLc4DhSJc47SNB1w7a6GxpgeQo+HnCJAhQoeJ1oE/EpET/c41qFEtGdo21Y+69lM/JHeVcLsByk/MkRwba3dUYAkSRpaJBx6FELk+D+rR/BtIxpshJrLyUKG6JPwvtO33whoZwoMLWiIwUhUuIHR6l6hgtbRn69yAX49Q5AwFGjCAAAAAElFTkSuQmCC"),onMouseOut:e=>e.target.setAttribute("src",o)}),n[e]&&(0,d.jsx)(j,{marginLeft:1===l?"30px":"",dir:"col",col:"center",children:s?.map(((s,n)=>(0,d.jsx)(m,{value:s,onClick:()=>((e,s)=>{if("types"!==e){const n={...t,[e]:s};r(n),i((t=>({...t,[e]:!t[e]})))}})(e,s),children:"types"===e?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("input",{type:"checkbox",checked:c[e][s],onChange:()=>((e,t)=>{a((s=>{const n={...s,[e]:{...s[e],[t]:!s[e][t]}};return r((t=>({...t,[e]:n[e]}))),n}))})(e,s)}),x(e,s)]}):x(e,s)},n)))})]},e)))})},p=e=>l[e]||"",x=(e,t)=>{switch(e){case"type":switch(t){case 0:return(0,d.jsx)("span",{children:"\ubc84\uadf8\ubb38\uc758"});case 1:return(0,d.jsx)("span",{children:"\uacc4\uc815\ubb38\uc758"});case 2:return(0,d.jsx)("span",{children:"\uc11c\ube44\uc2a4\ubb38\uc758"});case 5:return(0,d.jsx)("span",{children:"\ub2e8\uc5b4\ucd94\uac00\ubb38\uc758"});case 99:return(0,d.jsx)("span",{children:"\uae30\ud0c0\ubb38\uc758"})}case"needAnswer":switch(t){case!0:return(0,d.jsx)("span",{children:"NO"});case!1:return(0,d.jsx)("span",{children:"YES"});default:return""}case"types":switch(t){case"isOffensive":return(0,d.jsx)("span",{children:"\uacf5\uaca9\uc801\uc778 \uc5b8\uc5b4 \uc0ac\uc6a9"});case"isPoorManner":return(0,d.jsx)("span",{children:"\ube44\ub9e4\ub108 \ud589\uc704"});case"isCheating":return(0,d.jsx)("span",{children:"\uc0ac\uae30 \ud589\uc704"});default:return""}case"createdAt":switch(t){case"oldest":return(0,d.jsx)("span",{children:"\uacfc\uac70\uc21c"});case"latest":return(0,d.jsx)("span",{children:"\ucd5c\uc2e0\uc21c"})}}};h.propTypes={filterOptions:c().array,selectedFilterOptions:c().object,setSelectedFilterOptions:c().func};const g=(0,n.ZP)(a.h)`
  & > * + * {
    margin-left: 1.75rem;
  }
`,u=(0,n.ZP)(a.h)``,A=n.ZP.img`
  width: 19px;
  margin-left: 6px;

  &:hover {
    cursor: pointer;
  }
`,j=(0,n.ZP)(a.h).attrs({as:"ul"})`
  position: absolute;
  top: 165px;
  width: max-content;
  align-self: baseline;
  margin-top: 10px;
  margin-left: ${e=>e.marginLeft||""};
  background-color: ${({theme:e})=>e.colors.content};
  border: 2px solid #a2a2a2;
  border-radius: 1px;
  box-shadow: 0 1px 4px #00000019;
  text-align: center;
`,m=n.ZP.li`
  width: 100%;
  min-width: 60px;
  padding: 3px 10px;

  &:hover {
    background-color: #ebeae6;
    font-weight: 700;
    cursor: pointer;
  }
`,f=h},1368:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var s=r(4519),n=r(3908),i=r(2322),c=r(3426),a=r(8582),o=r(6638),d=r(5381),l=r(5023),h=r(47),p=r(7480),x=r(3473),g=r(1386),u=r.n(g),A=r(5655),j=r(9892),m=r(12),f=r(9673),w=r(3159),y=r(2556);const Z=({type:e,data:t})=>{const[r,n]=(0,s.useState)(!1);return t?(0,y.jsxs)(b,{dir:"col",children:["report"===e&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(k,{col:"center",children:[(0,y.jsx)($,{row:"center",col:"center",children:(0,y.jsx)(B,{icon:m.ik8})}),(0,y.jsxs)(C,{children:[(0,y.jsx)("span",{children:t?.reporteeNickname}),(0,y.jsx)("span",{children:`(${t?.reporteeId})`})]})]}),(0,y.jsxs)(I,{dir:"col",children:[(0,y.jsxs)(P,{children:[(0,y.jsx)(v,{children:"\uc2e0\uace0\uc790"}),(0,y.jsx)(O,{children:`${t?.reporterNickname} (${t?.reporterId})`})]}),(0,y.jsxs)(P,{children:[(0,y.jsx)(v,{children:"\uc2e0\uace0 \uc2dc\uac01"}),(0,y.jsx)(O,{children:(0,w.r)(t?.createdAt)})]}),(0,y.jsxs)(P,{children:[(0,y.jsx)(v,{children:"\uc2e0\uace0 \uc0ac\uc720"}),(0,y.jsx)(O,{children:[...Object.entries(t?.types)?.filter((([e,t])=>!0===t))?.map((([e,t])=>("isOffensive"===e?"\uacf5\uaca9\uc801\uc778 \uc5b8\uc5b4 \uc0ac\uc6a9":"isCheating"===e&&"\uc0ac\uae30 \ud589\uc704")||"isPoorManner"===e&&"\ube44\ub9e4\ub108 \ud589\uc704")),t?.types.note&&`\uae30\ud0c0: ${t?.types.note}`].join(", ")})]}),(0,y.jsxs)(P,{children:[(0,y.jsx)(v,{children:"\uac8c\uc784\ubc29 ID"}),(0,y.jsx)(O,{children:t?.roomId})]})]},t?.id)]}),"room"===e&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{children:(0,y.jsxs)(P,{children:[(0,y.jsx)(v,{row:"center",col:"center",width:"100px",children:"\uac8c\uc784\ubc29 ID"}),(0,y.jsx)(O,{col:"center",children:t?.roomId})]})}),(0,y.jsxs)(I,{type:e,dir:"col",children:[(0,y.jsxs)(P,{type:e,children:[(0,y.jsx)(v,{row:"start",col:"center",width:"90px",margin:"0 0 0 12px",children:"\uac1c\uc124 \uc2dc\uac01"}),(0,y.jsx)(O,{col:"center",children:(0,w.r)(t?.createdAt)})]}),(0,y.jsxs)(P,{type:e,children:[(0,y.jsx)(v,{row:"start",col:"center",width:"90px",margin:"0 0 0 12px",children:"\uc885\ub8cc \uc2dc\uac01"}),(0,y.jsx)(O,{col:"center",children:t?.expiredAt?(0,w.r)(t?.expiredAt):""})]}),(0,y.jsxs)(P,{type:e,onClick:()=>n(!r),clickable:!0,children:[(0,y.jsx)(v,{row:"start",col:"center",width:"90px",margin:"0 0 0 12px",children:"\ub85c\uadf8"}),(0,y.jsx)(O,{row:"end",col:"center",margin:"0 10px 0",children:(0,y.jsx)(j.G,{icon:m.gc2})})]}),r&&(0,y.jsx)(P,{type:e,dir:"col",row:"between",position:"relative",bgColor:"#fff",border:"1px solid #000",children:t?.logs?.map(((e,t)=>(0,y.jsxs)(d.Z,{row:"between",children:[(0,y.jsx)("span",{children:e.type}),Object.entries(e).filter((([e])=>"type"!==e)).map((([e,t])=>"createdAt"!==e?(0,y.jsx)("span",{children:t},e):(0,y.jsx)("span",{children:(0,w.r)(t)},e)))]},t)))})]})]}),"chat"===e&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{type:e,row:"center",col:"center",children:(0,y.jsx)(C,{type:e,children:"\ucc44\ud305 \ub0b4\uc5ed"})}),(0,y.jsx)(I,{type:e,children:(0,y.jsx)(E,{dir:"col",children:Array.isArray(t)?t?.map(((e,t)=>(0,y.jsx)(f.Z,{nickname:e?.nickname,message:e?.message,createdAt:(0,w.r)(e?.createdAt)},t))):(0,y.jsx)(f.Z,{message:t})})})]})]}):(0,y.jsx)("div",{children:"Loading..."})};Z.propTypes={type:u().string,data:u().oneOfType([u().object,u().array])};const b=(0,A.ZP)(d.Z)`
  width: 100%;
  height: 100%;
`,k=(0,A.ZP)(d.Z)`
  height: 5.625rem;
  border-bottom: 1px solid #ccc;
  font-size: ${({theme:e})=>e.fontSize.xxs};
  font-weight: 600;
`,S=(0,A.ZP)(k)`
  height: ${({type:e})=>"chat"!==e?"6rem":"1.75rem"};
  background-color: #d5e0f0;
  border-bottom: 0;
  font-size: ${({theme:e})=>e.fontSize.xxxs};
`,I=(0,A.ZP)(d.Z)`
  flex-grow: ${({type:e})=>"room"!==e&&1};
  padding: ${({type:e})=>"chat"===e&&"10px 0"};
`,P=(0,A.ZP)(d.Z)`
  position: ${({position:e})=>e};
  flex: 1;
  flex-basis: ${({type:e})=>"room"===e&&"3.375rem"};
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border: ${({border:e})=>e};
  background-color: ${({bgColor:e})=>e};

  &:last-child {
    border-bottom: ${({type:e})=>"room"!==e&&0};
  }

  ${({clickable:e})=>e&&"&:hover { cursor: pointer;}"}
`,v=(0,A.ZP)(d.Z)`
  width: ${({width:e})=>e||"80px"};
  margin: ${({margin:e})=>e};
  flex-shrink: 0;
  font-weight: 500;
`,O=(0,A.ZP)(d.Z)`
  flex-grow: 1;
  word-break: break-all;
  margin: ${({margin:e})=>e};
`,$=(0,A.ZP)(d.Z)`
  width: 3.75rem;
  height: 3.75rem;
`,C=(0,A.ZP)(d.Z)`
  font-size: ${({type:e})=>"chat"===e&&"16px"};
`,E=(0,A.ZP)(d.Z)`
  flex-basis: 65%;
  flex-grow: 1;
  margin: 2px 12px;
  max-height: 26.25rem;
`,B=(0,A.ZP)(j.G)`
  font-size: ${({theme:e})=>e.fontSize.xl};
  color: ${({theme:e})=>e.colors.error};
`,T=Z;var M=r(8414);const R=({data:e})=>{const[t]=(0,n.Z)(["sessionId"]),[r,i]=(0,s.useState)(null),[a,o]=(0,s.useState)(null),d={method:"get",url:`/room/${e?.roomId}`,headers:{sessionId:t.sessionId}},l={method:"get",url:`/chat?roomId=${e?.roomId}`,headers:{sessionId:t.sessionId}},{response:h,loading:p,error:x,fetchData:g}=(0,c.Z)(d,!1),{response:u,loading:A,error:j,fetchData:m}=(0,c.Z)(l,!1);(0,s.useEffect)((()=>{e?.roomId&&(g(),m())}),[e]),(0,s.useEffect)((()=>{null!==h&&i(h)}),[h]),(0,s.useEffect)((()=>{if(null!==u){(async()=>{const e=await Promise.all(u.reverse().map((async e=>{const{userId:t,message:r,createdAt:s}=e;return{nickname:await f(t),message:r,createdAt:s}})));o(e)})()}}),[u]);const f=async e=>(await(0,M.Yt)(e)).nickname;return(0,y.jsxs)(N,{dir:"col",children:[(0,y.jsxs)(D,{row:"between",children:[(0,y.jsx)(U,{width:"17.68rem",height:"21rem",children:(0,y.jsx)(T,{type:"report",data:e})}),(0,y.jsx)(U,{width:"17.68rem",height:"21rem",children:(0,y.jsx)(T,{type:"room",data:r})})]}),(0,y.jsx)(U,{children:(0,y.jsx)(T,{type:"chat",data:j||a})})]})};R.propTypes={data:u().object};const N=(0,A.ZP)(d.Z)`
  & > * + * {
    margin-top: 14px;
  }
`,D=(0,A.ZP)(d.Z)`
  width: 100%;
`,U=A.ZP.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: ${({width:e})=>e||"100%"};
  height: ${({height:e})=>e||"fit=content"};
`,Y=R,F=()=>{const[e,t]=(0,i.FV)(a.N),[r,g]=(0,i.FV)(o.QC),[u]=(0,n.Z)(["sessionId"]),[A,j]=(0,s.useState)(null),[m,f]=(0,s.useState)(null),{response:w,loading:Z,error:b,fetchData:k}=(0,c.Z)(m,!1);(0,s.useEffect)((()=>{null===r?t(0):f({method:"get",url:`/report/${r}`,headers:{sessionId:u.sessionId}})}),[]),(0,s.useEffect)((()=>{null!==m&&k()}),[m]),(0,s.useEffect)((()=>{if(null!==w){const{isOffensive:e,isCheating:t,isPoorManner:r,note:s,...n}=w.result;j({...n,types:{isOffensive:e,isCheating:t,isPoorManner:r,note:s}})}}),[w]),(0,s.useEffect)((()=>{null!==A&&t(1)}),[A]);return(0,y.jsx)(h.vs,{row:"center",col:"center",children:(0,y.jsxs)(h.J7,{width:"82rem",dir:"col",children:[(0,y.jsx)(p.Z,{type:"admin-detail"}),(0,y.jsx)(h.or,{type:"admin",row:"between",children:(0,y.jsxs)(d.h,{row:"between",children:[(0,y.jsx)(x.Z,{onSideOpen:e=>{g(e),f({method:"get",url:`/report/${e}`,headers:{sessionId:u.sessionId}})}}),1===e&&(0,y.jsx)(l.xu,{children:(0,y.jsx)(Y,{data:A})})]})})]})})}},8582:(e,t,r)=>{r.d(t,{N:()=>s});const s=(0,r(2322).cn)({key:"isActiveSideContentTypeState",default:0})},3159:(e,t,r)=>{r.d(t,{r:()=>s});const s=e=>{const t=new Date(e),r=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),i=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return"".concat(r,"-").concat(s,"-").concat(n," ").concat(i,":").concat(c,":").concat(a)}},8414:(e,t,r)=>{r.d(t,{$u:()=>o,Yt:()=>d,wJ:()=>a});var s=r(9191),n=r(7239),i=r(1857);const c=new n.Z,a=async()=>{const e=await s.Z.get("".concat(i._n,"/user/me"),{headers:{sessionId:c.get("sessionId")}});return"OK"===e.statusText?e.data.result:null},o=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\ud14c\uc2a4\ud2b8";return"OK"===(await s.Z.put("".concat(i._n,"/user"),{avatarAccessoryIndex:e,nickname:t},{headers:{sessionId:c.get("sessionId")}})).statusText},d=async e=>{const t=await s.Z.get("".concat(i._n,"/user/").concat(e),{headers:{sessionId:c.get("sessionId")}});return"OK"===t.statusText?t.data.result:null}}}]);
//# sourceMappingURL=368.b6d89a37.chunk.js.map