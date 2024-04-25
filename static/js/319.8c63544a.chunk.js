"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[319],{2870:(e,t,r)=>{r.d(t,{U:()=>h,Z:()=>g});var s=r(1386),n=r.n(s),i=r(5655),a=r(5381),o=r(2556);const c=({type:e="wait",avatarUrl:t,nickname:r,level:s})=>(0,o.jsxs)(l,{type:e,dir:"col",row:"center",col:"center",children:[(0,o.jsx)(d,{type:e,src:t}),(0,o.jsxs)(p,{col:"center",children:[(0,o.jsx)(h,{children:s}),(0,o.jsx)(x,{children:r})]})]});c.propTypes={type:n().string,avatarUrl:n().string,nickname:n().string,level:n().number};const l=(0,i.ZP)(a.h)`
  width: ${({type:e})=>"play"!==e&&"9rem"};
  height: ${({type:e})=>"play"===e?"9.75rem":"11.2rem"};
`,d=(0,i.ZP)(a.h).attrs({as:"img"})`
  width: ${({type:e})=>"play"===e?"6.75rem":"7.25rem"};
  height: ${({type:e})=>"play"===e&&"auto"};
`,p=(0,i.ZP)(a.h)`
  width: ${e=>e.width||"7.5rem"};
  margin-top: 7px;
  font-size: ${e=>e.size||"16px"};
`,h=(0,i.ZP)(a.h).attrs({row:"center",col:"center"})`
  width: ${e=>e.width||"23px"};
  height: ${e=>e.height||"26px"};
  margin: 0px 6px 0 2px;
  border: 1px solid ${({theme:e})=>e.colors.gray600};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
`,x=i.ZP.span`
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
`,g=c},3984:(e,t,r)=>{r.d(t,{Z:()=>y});var s=r(4519),n=r(3908),i=r(2322),a=r(1386),o=r.n(a),c=r(5655),l=r(6638),d=r(2120),p=r(5913),h=r(8417),x=r(7688),g=r(5381),u=r(5023),m=r(3426),j=r(2556);const f=({type:e,onThreadOpen:t})=>{const r=(0,i.sJ)(l.T0),[a]=(0,n.Z)(["sessionId"]),[o,c]=(0,s.useState)([]),[g,f]=(0,s.useState)(null),[y,Z]=(0,s.useState)(1),[b,S]=(0,s.useState)(30),[P,v]=(0,i.FV)(l.O6),[O,$]=(0,s.useState)({method:"get",url:`/inquiry/search?page=${y}`,headers:{sessionId:a.sessionId}}),{response:k,loading:C,error:E,fetchData:T}=(0,m.Z)(O,!1),I=["type","needAnswer"]?.map((e=>{let t;return"type"===e?t=[0,1,2,5,99]:"needAnswer"===e&&(t=[!0,!1]),{key:e,values:t}}));return(0,s.useEffect)((()=>{null!==O&&T()}),[O]),(0,s.useEffect)((()=>{null!==r&&$({...r,url:`/inquiry/search?page=${y}`})}),[r]),(0,s.useEffect)((()=>{null!==k?(S(0===k.result.lastPage?1:k.result.lastPage),c(k.result.list?.map((({updatedAt:e,createdAt:t,id:r,type:s,title:n,needAnswer:i})=>({id:r,type:s,title:n,needAnswer:i}))))):(S(1),c([]))}),[k]),(0,s.useEffect)((()=>{if(null!==g){const e=Object.entries(g).map((([e,t])=>`${e}=${t}`)).join("&");$({...O,url:`/inquiry/search?page=${y}&${e}`})}else $({...O,url:`/inquiry/search?page=${y}`})}),[y,g]),(0,j.jsx)(j.Fragment,{children:"home"!==e?(0,j.jsxs)(u.xu,{children:[(0,j.jsxs)(A,{row:"between",col:"center",children:[(0,j.jsx)(d.Z,{title:"inquiry"}),(0,j.jsx)(w,{marginTop:"1.313rem",marginRight:"0.75rem",children:(0,j.jsx)(h.Z,{filterOptions:I,selectedFilterOptions:g,setSelectedFilterOptions:f})})]}),(0,j.jsx)(p.Z,{isHome:!1,title:"inquiry",data:o,onSideOpen:t,isAnswerCompleted:P}),(0,j.jsx)(x.Z,{currPage:y,setCurrPage:Z,lastPageIdx:b})]}):(0,j.jsxs)(u.xu,{type:e,children:[(0,j.jsx)(d.Z,{type:e,title:"inquiry"}),(0,j.jsx)(p.Z,{isHome:!0,title:"inquiry",data:o,isAnswerCompleted:P,onSideOpen:t})]})})};f.propTypes={type:o().string,onThreadOpen:o().func,isAnswerCompleted:o().object,setIsAnswerCompleted:o().func};const A=(0,c.ZP)(g.h)`
  padding-bottom: 14px;
`,w=c.ZP.div`
  margin-top: ${({marginTop:e})=>e};
  margin-right: ${({marginRight:e})=>e};
`,y=f},3439:(e,t,r)=>{r.d(t,{Z:()=>P});var s=r(4519),n=r(3908),i=r(2322),a=r(1386),o=r.n(a),c=r(5655),l=r(2120),d=r(5913),p=r(8229),h=r(4972),x=r(7688),g=r(5023),u=r(5381),m=r(3426),j=r(6638),f=r(8735),A=r(2556);const w=({type:e,onDetailOpen:t,onCreateOpen:r})=>{const a=(0,i.sJ)(j.T0),[o]=(0,n.Z)(["sessionId"]),[c,p]=(0,s.useState)([]),[u,w]=(0,s.useState)(1),[P,v]=(0,s.useState)(1),[O,$]=(0,s.useState)(""),[k,C]=(0,s.useState)({method:"get",url:`/notice/list?page=${u}`,headers:{sessionId:o.sessionId}}),{response:E,loading:T,error:I,fetchData:R}=(0,m.Z)(k,!1);return(0,s.useEffect)((()=>{null!==k&&R()}),[k]),(0,s.useEffect)((()=>{null!==a&&C(a)}),[a]),(0,s.useEffect)((()=>{null!==E?k.url.includes("/search?q=")?(v(1),p(E.list?.map((({content:e,created_at:t,views:r,...s})=>({...s,created_at:t.split("T")[0],views:r}))))):(v(0===E.lastPage?1:E.lastPage),p(E.list?.map((({content:e,created_at:t,views:r,...s})=>({...s,created_at:t.split("T")[0],views:r}))))):(v(1),p([]))}),[E]),(0,s.useEffect)((()=>{""!==O&&f.C_.test(O)&&C({...k,url:`/notice/search?q=${O}&page=${u}`})}),[u,O]),(0,A.jsx)(A.Fragment,{children:T?(0,A.jsx)("p",{children:"Loading..."}):I?(0,A.jsx)("p",{children:I}):"home"!==e?(0,A.jsxs)(g.xu,{children:[(0,A.jsxs)(y,{row:"between",col:"center",children:[(0,A.jsx)(l.Z,{title:"notice"}),(0,A.jsx)(Z,{marginTop:"14px",children:(0,A.jsx)(h.Z,{searchType:"\uc81c\ubaa9",setSearchKeyword:$})})]}),(0,A.jsx)(d.Z,{isHome:!1,title:"notice",data:c,onSideOpen:t}),(0,A.jsx)(x.Z,{currPage:u,setCurrPage:w,lastPageIdx:P}),(0,A.jsx)(b,{row:"end",children:(0,A.jsx)(S,{onClick:r})})]}):(0,A.jsxs)(g.xu,{type:e,children:[(0,A.jsx)(l.Z,{type:e,title:"notice"}),(0,A.jsx)(d.Z,{isHome:!0,title:"notice",data:c,onSideOpen:t})]})})};w.propTypes={type:o().string,onDetailOpen:o().func,onCreateOpen:o().func};const y=(0,c.ZP)(u.h)`
  padding-bottom: 14px;
`,Z=c.ZP.div`
  margin-top: ${({marginTop:e})=>e};
  margin-right: ${({marginRight:e})=>e};
`,b=(0,c.ZP)(u.h)`
  margin-top: 10px;
`,S=(0,c.ZP)(p.Z).attrs({type:"smallDark",message:"\ub4f1\ub85d"})``,P=w},3473:(e,t,r)=>{r.d(t,{Z:()=>A});var s=r(4519),n=r(3908),i=r(1386),a=r.n(i),o=r(5655),c=r(2120),l=r(5913),d=r(8417),p=r(7688),h=r(5381),x=r(5023),g=r(3426),u=r(2556);const m=({type:e,onSideOpen:t})=>{const[r]=(0,n.Z)(["sessionId"]),[i,a]=(0,s.useState)([]),[o,h]=(0,s.useState)({createdAt:"latest",types:{isOffensive:1,isPoorManner:1,isCheating:1},isHandled:0}),[m,A]=(0,s.useState)(1),[w,y]=(0,s.useState)(1),[Z,b]=(0,s.useState)({method:"get",url:`/report/search?page=${m}`,headers:{sessionId:r.sessionId}}),{response:S,loading:P,error:v,fetchData:O}=(0,g.Z)(Z,!1),$=["createdAt","types"]?.map((e=>"createdAt"===e?{key:e,values:["oldest","latest"]}:"types"===e?{key:e,values:["isOffensive","isCheating","isPoorManner"]}:void 0));return(0,s.useEffect)((()=>{null!==Z&&O()}),[Z]),(0,s.useEffect)((()=>{null!==S?(y(0===S.result.lastPage?1:S.result.lastPage),a(S.result.list?.map((({id:e,reporterNickname:t,isCheating:r,isOffensive:s,isPoorManner:n,note:i,reporteeNickname:a,createdAt:o,isHandled:c})=>({id:e,reporteeNickname:a,types:{isCheating:r,isOffensive:s,isPoorManner:n,note:i},reporterNickname:t,createdAt:o,isHandled:c}))))):(y(1),a([]))}),[S]),(0,s.useEffect)((()=>{if(0===i?.length)return;let e=[...i];Object.entries(o).forEach((([t,r])=>{"createdAt"===t?e.sort(((e,s)=>"oldest"===r?new Date(e[t])-new Date(s[t]):new Date(s[t])-new Date(e[t]))):"types"===t&&(e=e.filter((e=>Object.entries(r).every((([t,r])=>null===r||e[t]===r)))))})),a(e);const t=Object.entries(o).map((([e,t])=>"types"===e?Object.entries(t)?.map((([e,t])=>`${e}=${t?1:0}`))?.join("&"):"createdAt"===e?`order=${t}`:`${e}=${t}`)).join("&");b({...Z,url:`/report/search?page=${m}&${t}`})}),[m,o]),(0,u.jsx)(u.Fragment,{children:"home"!==e?(0,u.jsxs)(x.xu,{children:[(0,u.jsxs)(j,{row:"between",col:"center",children:[(0,u.jsx)(c.Z,{title:"report"}),(0,u.jsx)(f,{marginTop:"1.313rem",marginRight:"0.75rem",children:(0,u.jsx)(d.Z,{filterOptions:$,setSelectedFilterOptions:h})})]}),(0,u.jsx)(l.Z,{isHome:!1,title:"report",data:i,onSideOpen:t}),(0,u.jsx)(p.Z,{currPage:m,setCurrPage:A,lastPageIdx:w})]}):(0,u.jsxs)(x.xu,{type:e,children:[(0,u.jsx)(c.Z,{type:e,title:"report"}),(0,u.jsx)(l.Z,{isHome:!0,title:"report",data:i,onSideOpen:t})]})})};m.propTypes={type:a().string,onSideOpen:a().func};const j=(0,o.ZP)(h.h)`
  padding-bottom: 14px;
`,f=o.ZP.div`
  margin-top: ${({marginTop:e})=>e};
  margin-right: ${({marginRight:e})=>e};
`,A=m},3373:(e,t,r)=>{r.d(t,{Z:()=>b});var s=r(4519),n=r(3908),i=r(2322),a=r(1386),o=r.n(a),c=r(5655),l=r(2120),d=r(5913),p=r(4972),h=r(7688),x=r(5381),g=r(5023),u=r(6628),m=r(6638),j=r(3426),f=r(2556);const A=({type:e,onSideOpen:t})=>{const r=(0,i.Zl)(u.fZ),a=(0,i.sJ)(m.T0),[o]=(0,n.Z)(["sessionId"]),[c,x]=(0,s.useState)([]),[A,b]=(0,s.useState)(1),[S,P]=(0,s.useState)(30),[v,O]=(0,s.useState)(""),[$,k]=(0,s.useState)(!1),[C,E]=(0,s.useState)({method:"get",url:`/user/search?page=${A}`,headers:{sessionId:o.sessionId}}),{response:T,loading:I,error:R,fetchData:F}=(0,j.Z)(C,!1);return(0,s.useEffect)((()=>{null!==C&&F()}),[C]),(0,s.useEffect)((()=>{null!==a&&E({...a,url:`/user/search?page=${A}`})}),[a]),(0,s.useEffect)((()=>{null!==T?(P(0===T.result.lastPage?1:T.result.lastPage),x(T.result.list),c?.forEach((e=>{r((t=>({...t,[e.id]:e.isBanned})))}))):(P(1),x([]))}),[T]),(0,s.useEffect)((()=>{if(0===c?.length)return;let e;e=""!==v?`?page=${A}&nickname=${v}`:`?page=${A}`,$&&(e+="&isBanned=1"),E({...C,url:`/user/search${e}`})}),[A,v,$]),(0,f.jsx)(f.Fragment,{children:"home"!==e?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(g.xu,{children:[(0,f.jsxs)(w,{row:"between",children:[(0,f.jsx)(l.Z,{title:"user"}),(0,f.jsxs)(Z,{children:[(0,f.jsx)("input",{type:"checkbox",checked:$,onChange:e=>k(e.target.checked)}),"\ubc34 \uc0ac\uc6a9\uc790"]}),(0,f.jsx)(y,{marginTop:"14px",marginRight:"10px",children:(0,f.jsx)(p.Z,{searchType:"\ub2c9\ub124\uc784",setSearchKeyword:O})})]}),(0,f.jsx)(d.Z,{isHome:!1,title:"user",data:c,onSideOpen:t}),(0,f.jsx)(h.Z,{currPage:A,setCurrPage:b,lastPageIdx:S})]})}):(0,f.jsxs)(g.xu,{type:e,children:[(0,f.jsx)(l.Z,{type:e,title:"user"}),(0,f.jsx)(d.Z,{isHome:!0,title:"user",data:c,onSideOpen:t})]})})};A.propTypes={type:o().string,onSideOpen:o().func};const w=(0,c.ZP)(x.h)`
  padding-bottom: 14px;
`,y=c.ZP.div`
  margin-top: ${({marginTop:e})=>e};
  margin-right: ${({marginRight:e})=>e};
`,Z=c.ZP.label`
  margin-left: 1.125rem;
  padding-top: 2.25rem;
`,b=A},8417:(e,t,r)=>{r.d(t,{Z:()=>A});var s=r(4519),n=r(5655),i=r(1386),a=r.n(i),o=r(5381);const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgB7ZPBDYMwDEV/1A7iETpKN2k3aHvskQ3YBLhxgw1gA9gAfkiQkCAQhROCJz0lShQrlm3gdKjJ/kMFYbT0Z9eBJ+12qmPgbgOmVkEYNS1xCJTj/EUfWCejMTzxKUKz9PDmCKh/LjBt4PJPcxwOtXEvMBM0olONYPouiC/mxXhjB0ILWlkThE/ThSc9eZU2SxdIGWIAAAAASUVORK5CYII=";var l=r(2556);const d={type:"\ubb38\uc758 \uc720\ud615",types:"\uc2e0\uace0 \uc720\ud615",needAnswer:"\ub2f5\ubcc0 \uc5ec\ubd80",createdAt:"\uc815\ub82c"},p=({filterOptions:e,selectedFilterOptions:t,setSelectedFilterOptions:r})=>{const[n,i]=(0,s.useState)(e?.reduce(((e,t)=>({...e,[t]:!1})),{})),[a,o]=(0,s.useState)(e?.filter((({key:e})=>"types"===e))?.reduce(((e,t)=>({...e,[t.key]:t.values.reduce(((e,t)=>({...e,[t]:!1})),{})})),{}));return(0,l.jsx)(g,{children:e?.map((({key:e,values:s},d)=>(0,l.jsxs)(u,{col:"center",children:[(0,l.jsx)("span",{children:h(e)}),(0,l.jsx)(m,{src:c,onClick:()=>i((t=>({...t,[e]:!t[e]}))),onMouseOver:e=>e.target.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7ZPfDYIwEMbvgAEcgRHcRDewgQEcAdlAFiAdgRFgA0eoGzBA//hVxQcj1TTxgejvpeXr3ZfLHUf0c/B0KYqiYuacIkDeqLWupZRj5oWyLLc4DhSJc47SNB1w7a6GxpgeQo+HnCJAhQoeJ1oE/EpET/c41qFEtGdo21Y+69lM/JHeVcLsByk/MkRwba3dUYAkSRpaJBx6FELk+D+rR/BtIxpshJrLyUKG6JPwvtO33whoZwoMLWiIwUhUuIHR6l6hgtbRn69yAX49Q5AwFGjCAAAAAElFTkSuQmCC"),onMouseOut:e=>e.target.setAttribute("src",c)}),n[e]&&(0,l.jsx)(j,{marginLeft:1===d?"30px":"",dir:"col",col:"center",children:s?.map(((s,n)=>(0,l.jsx)(f,{value:s,onClick:()=>((e,s)=>{if("types"!==e){const n={...t,[e]:s};r(n),i((t=>({...t,[e]:!t[e]})))}})(e,s),children:"types"===e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:"checkbox",checked:a[e][s],onChange:()=>((e,t)=>{o((s=>{const n={...s,[e]:{...s[e],[t]:!s[e][t]}};return r((t=>({...t,[e]:n[e]}))),n}))})(e,s)}),x(e,s)]}):x(e,s)},n)))})]},e)))})},h=e=>d[e]||"",x=(e,t)=>{switch(e){case"type":switch(t){case 0:return(0,l.jsx)("span",{children:"\ubc84\uadf8\ubb38\uc758"});case 1:return(0,l.jsx)("span",{children:"\uacc4\uc815\ubb38\uc758"});case 2:return(0,l.jsx)("span",{children:"\uc11c\ube44\uc2a4\ubb38\uc758"});case 5:return(0,l.jsx)("span",{children:"\ub2e8\uc5b4\ucd94\uac00\ubb38\uc758"});case 99:return(0,l.jsx)("span",{children:"\uae30\ud0c0\ubb38\uc758"})}case"needAnswer":switch(t){case!0:return(0,l.jsx)("span",{children:"NO"});case!1:return(0,l.jsx)("span",{children:"YES"});default:return""}case"types":switch(t){case"isOffensive":return(0,l.jsx)("span",{children:"\uacf5\uaca9\uc801\uc778 \uc5b8\uc5b4 \uc0ac\uc6a9"});case"isPoorManner":return(0,l.jsx)("span",{children:"\ube44\ub9e4\ub108 \ud589\uc704"});case"isCheating":return(0,l.jsx)("span",{children:"\uc0ac\uae30 \ud589\uc704"});default:return""}case"createdAt":switch(t){case"oldest":return(0,l.jsx)("span",{children:"\uacfc\uac70\uc21c"});case"latest":return(0,l.jsx)("span",{children:"\ucd5c\uc2e0\uc21c"})}}};p.propTypes={filterOptions:a().array,selectedFilterOptions:a().object,setSelectedFilterOptions:a().func};const g=(0,n.ZP)(o.h)`
  & > * + * {
    margin-left: 1.75rem;
  }
`,u=(0,n.ZP)(o.h)``,m=n.ZP.img`
  width: 19px;
  margin-left: 6px;

  &:hover {
    cursor: pointer;
  }
`,j=(0,n.ZP)(o.h).attrs({as:"ul"})`
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
`,f=n.ZP.li`
  width: 100%;
  min-width: 60px;
  padding: 3px 10px;

  &:hover {
    background-color: #ebeae6;
    font-weight: 700;
    cursor: pointer;
  }
`,A=p},4972:(e,t,r)=>{r.d(t,{Z:()=>A});var s=r(4519),n=r(5655),i=r(1386),a=r.n(i),o=r(9892),c=r(5381),l=r(12),d=r(8735),p=r(2556);const h=({searchType:e,setSearchKeyword:t})=>{const r=(0,s.useRef)(),n=e=>{e.preventDefault(),d.C_.test(r.current.value)&&(t(r.current.value),r.current.value=e.target.value)};return(0,p.jsxs)(x,{col:"center",field:e,children:[(0,p.jsx)(u,{type:"text",readOnly:!0,value:e}),(0,p.jsx)(m,{type:"text",field:e,placeholder:"\uac80\uc0c9\uc5b4 \uc785\ub825",onKeyDown:e=>{"Enter"===e.key&&n(e)},ref:r}),(0,p.jsx)(j,{onClick:e=>n(e),children:(0,p.jsx)(f,{icon:l.Y$T})})]})};h.propTypes={searchType:a().string,setSearchKeyword:a().func};const x=(0,n.ZP)(c.h)`
  border: 2px solid ${({theme:e})=>e.colors.gray200};
  border-radius: 10px;
  width: 18.5rem;
  height: ${e=>e.height||"3.2rem"};
`,g=n.ZP.input`
  border: 0;
  background-color: transparent;
  font-size: ${({theme:e})=>e.fontSize.xxxs};
`,u=(0,n.ZP)(g)`
  width: ${({value:e})=>"\ub2c9\ub124\uc784"===e?"5.25rem":"4.2rem"};
  padding: 0 16px;
  border-right: 2px solid ${({theme:e})=>e.colors.gray200};

  &:hover {
    cursor: default;
  }
`,m=(0,n.ZP)(g)`
  flex: 1;
  margin: 0 10px;
  width: ${({field:e})=>"\ub2c9\ub124\uc784"===e?"9.25rem":"70%"};

  &::placeholder {
    color: #a7a7a7;
  }
`,j=n.ZP.button`
  background-color: transparent;
  width: 22px;
  margin-right: 15px;
  padding: 0;
`,f=(0,n.ZP)(o.G)`
  font-size: 19px;
`,A=h},4450:(e,t,r)=>{r.d(t,{Z:()=>p});var s=r(5655),n=r(1386),i=r.n(n),a=r(5381),o=r(2556);const c=({message:e})=>("KKUJJANG \u24d2 All rights reserved.",(0,o.jsx)(l,{row:"center",col:"center",children:(0,o.jsx)(d,{children:"KKUJJANG \u24d2 All rights reserved."})}));c.propTypes={message:i().string};const l=(0,s.ZP)(a.h)``,d=(0,s.ZP)(a.h).attrs({as:"footer",row:"center",col:"center"})`
  width: 100%;
  height: 1.5rem;
  position: fixed;
  bottom: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.gray500};
`,p=c},6266:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var s=r(4519),n=r(2674),i=r(2322),a=r(3908),o=r(6628),c=r(47),l=r(4450),d=r(3426),p=r(5381),h=r(7480),x=r(5655),g=r(1386),u=r.n(g),m=r(9892),j=r(12),f=r(2556);const A=({children:e})=>(0,f.jsxs)(p.h,{col:"center",height:"4rem",padding:"15px 0 4px 0",children:[(0,f.jsx)(w,{fontSize:"24px",fontWeight:"800",color:"#413014",margin:"0 10px 0 33px",children:e}),(0,f.jsx)(m.G,{icon:j._tD})]});A.propTypes={children:u().string};const w=x.ZP.h2`
  margin: ${({margin:e})=>e};
  font-family: "Pretendard Variable";
  font-size: ${({fontSize:e})=>e};
  font-weight: ${({fontWeight:e})=>e};
  color: ${({color:e})=>e};
`,y=A;var Z=r(1843),b=r(5023),S=r(2870),P=r(1857);const v=({type:e})=>{const[t,r]=(0,i.FV)(o.E),[n,,c]=(0,a.Z)(["sessionId"]),{response:l,loading:h,error:x,fetchData:g}=(0,d.Z)({method:"get",url:"/user/signout",headers:{sessionId:n.sessionId}},!1);return(0,s.useEffect)((()=>{null!==l&&(r(null),c("sessionId",{path:"/"}),n?.userRole&&c("userRole",{path:"/"}))}),[l]),(0,f.jsx)(b.im,{dir:"col",width:"19.75rem",height:"14rem",margin:"0 72px 0 0",children:"guest"===e?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(O,{to:"/member/login",flex:"1",children:(0,f.jsx)(p.Z,{as:"button",row:"center",col:"center",flex:"1",padding:"15px 0 0",bgColor:"rgba(0,0,0, 0.7)",shadow:" 0 4px 10px 0 rgba(0, 0, 0, 0.25)",borderRadius:"30px 30px 0 0",children:(0,f.jsx)(b.Dr,{font:"Pretendard Variable",fontSize:"54px",fontWeight:"800",color:"#fff",children:"\ub85c\uadf8\uc778"})})}),(0,f.jsx)("a",{href:P.dW,children:(0,f.jsxs)(p.Z,{as:"button",row:"center",col:"center",width:"100%",height:"4rem",bgColor:"#FFDE00",shadow:" 0 4px 10px 0 rgba(0, 0, 0, 0.25)",borderRadius:"0 0 30px 30px",children:[(0,f.jsx)(m.G,{icon:j.Mzg,size:"lg"}),(0,f.jsx)(b.Dr,{fontSize:"1.375rem",margin:"0 5px",children:"\uce74\uce74\uc624\ub85c \ub85c\uadf8\uc778\ud558\uae30"})]})})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(O,{to:"/game",flex:"1",children:(0,f.jsx)(p.Z,{as:"button",row:"center",col:"center",flex:"1",padding:"15px 0 0",bgColor:"rgb(255 252 129)",shadow:" 0 4px 10px 0 rgba(0, 0, 0, 0.25)",borderRadius:"30px 30px 0 0",children:(0,f.jsx)(b.Dr,{font:"Pretendard Variable",fontSize:"54px",fontWeight:"800",children:"\uac8c\uc784 \uc2dc\uc791"})})}),(0,f.jsxs)(p.Z,{row:"between",col:"center",height:"4rem",children:[(0,f.jsxs)(p.Z,{col:"center",flex:"1",height:"100%",padding:"0 18px",bgColor:"#E6E6E6",shadow:" 0 4px 10px 0 rgba(0, 0, 0, 0.25)",borderRadius:"0 0  0 30px",children:[(0,f.jsx)(S.U,{children:t?.level}),(0,f.jsx)(b.Dr,{font:"Noto Sans KR",fontSize:"1.2rem",fontWeight:"700",children:t?.nickname})]}),(0,f.jsx)(p.Z,{as:"button",row:"center",col:"center",width:"5rem",height:"100%",bgColor:"#FBFBFB",shadow:" 3px 4px 10px 0 rgba(0, 0, 0, 0.25)",borderRadius:"0 0 30px 0",onClick:()=>g(),children:(0,f.jsx)(m.G,{icon:j.SJh,size:"xl"})})]})]})})};v.propTypes={type:u().string.isRequired};const O=(0,x.ZP)(Z.rU)`
  display: flex;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  flex: ${({flex:e})=>e};
`,$=v,k=r.p+"static/media/bubble.c641675da81a4067edf0.png",C=x.ZP.img`
  margin-left: 25%;
`,E=()=>(0,f.jsx)(p.Z,{col:"center",position:"absolute",left:"0",zIndex:"-1",width:"100%",height:"26rem",bgColor:"rgba(244, 244, 244, 0.4)",borderTop:"1px solid rgba(24, 24,24 , 0.5)",borderBottom:"1px solid rgba(24, 24,24 , 0.5)",children:(0,f.jsx)(C,{src:k})}),T=()=>{const e=null!=(0,i.sJ)(o.E),[t,r]=(0,s.useState)([]),{response:a,loading:l,error:x}=(0,d.Z)({method:"get",url:"/notice/list?page=1"}),g=(0,n.s0)();return(0,s.useEffect)((()=>{r(null!==a?a.list:[])}),[a]),(0,f.jsx)(c.vs,{row:"center",col:"center",children:(0,f.jsxs)(c.J7,{dir:"col",children:[(0,f.jsx)(h.Z,{type:e?"clearTab":"guest"}),(0,f.jsxs)(p.Z,{as:"main",dir:"col",height:"100%",margin:"7.5rem 0 0",padding:"10px",children:[(0,f.jsxs)(p.Z,{height:"25rem",padding:"10px",margin:"30px 0 5px",row:"end",col:"center",children:[(0,f.jsx)(E,{}),(0,f.jsx)($,{type:e?"member":"guest"})]}),(0,f.jsx)(p.Z,{dir:"col",width:"100%",height:"fit-content",margin:"80px 0 0 0",padding:"0 0 15px 0",flex:"0 1 0%",border:"1px solid #e5e5e5",children:l?(0,f.jsx)(b.Dr,{children:"Loading..."}):x?(0,f.jsx)(b.Dr,{children:x}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b.Fg,{to:"/notice/list",width:"fit-content",children:(0,f.jsx)(y,{children:"\uacf5\uc9c0\uc0ac\ud56d"})}),t?.slice(0,3)?.map((e=>(0,f.jsxs)(p.Z,{row:"between",col:"center",width:"70%",height:"fit-content",margin:"8px 32px",id:e.id,onClick:()=>g(`/notice/${e.id}`),clicky:!0,children:[(0,f.jsx)(b.Dr,{font:"Noto Sans KR",fontSize:"18px",children:e.title}),(0,f.jsx)(b.Dr,{font:"Noto Sans KR",fontSize:"17px",color:"#8F692B",children:e.created_at?.split("T")[0]})]},e.id)))]})})]})]})})};var I=r(3439),R=r(3984),F=r(3473),D=r(3373),B=r(6638);const U=(0,x.ZP)(p.h)``,J=()=>{const e=(0,i.Zl)(B.QC),t=(0,i.Zl)(B.SL),[r,a]=(0,i.FV)(B.O6),o=(0,n.s0)();(0,s.useEffect)((()=>{t(null)}),[]);const l=(t,r)=>{switch(e(r),t){case"notice":o("/admin/notice");break;case"inquiry":o("/admin/inquiry");break;case"report":o("/admin/report");break;case"user":o("/admin/user")}};return(0,f.jsx)(c.vs,{row:"center",col:"center",children:(0,f.jsxs)(c.J7,{width:"114rem",dir:"col",children:[(0,f.jsx)(h.Z,{type:"admin"}),(0,f.jsx)(b.or,{width:"100%",margin:"8.8rem 0 0",children:(0,f.jsxs)(U,{row:"between",children:[(0,f.jsx)(I.Z,{type:"home",onDetailOpen:e=>l("notice",e)}),(0,f.jsx)(R.Z,{type:"home",isAnswerCompleted:r,setIsAnswerCompleted:a,onThreadOpen:e=>l("inquiry",e)}),(0,f.jsx)(F.Z,{type:"home",onSideOpen:e=>l("report",e)}),(0,f.jsx)(D.Z,{type:"home",onSideOpen:e=>l("user",e)})]})})]})})};var K=r(8414);const z=()=>{const e=(0,n.TH)(),[t]=(0,a.Z)(["sessionId","userRole"]),[r,d]=(0,i.FV)(o.E);(0,s.useEffect)((()=>{t.sessionId?(d((e=>({...e,role:t.userRole}))),r||p()):d(null)}),[t?.sessionId]);const p=async()=>{const e=await(0,K.wJ)();e&&d({...e,role:t.userRole})};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.ZQ,{}),(0,f.jsx)(l.Z,{}),(0,f.jsx)(n.j3,{}),"/"===e.pathname&&(0,f.jsx)(f.Fragment,{children:"admin"!==r?.role?(0,f.jsx)(T,{}):(0,f.jsx)(J,{})})]})}},8414:(e,t,r)=>{r.d(t,{$u:()=>c,Yt:()=>l,wJ:()=>o});var s=r(9191),n=r(7239),i=r(1857);const a=new n.Z,o=async()=>{const e=await s.Z.get("".concat(i._n,"/user/me"),{headers:{sessionId:a.get("sessionId")}});return"OK"===e.statusText?e.data.result:null},c=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\ud14c\uc2a4\ud2b8";return"OK"===(await s.Z.put("".concat(i._n,"/user"),{avatarAccessoryIndex:e,nickname:t},{headers:{sessionId:a.get("sessionId")}})).statusText},l=async e=>{const t=await s.Z.get("".concat(i._n,"/user/").concat(e),{headers:{sessionId:a.get("sessionId")}});return"OK"===t.statusText?t.data.result:null}}}]);
//# sourceMappingURL=319.8c63544a.chunk.js.map