"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[107],{3373:(e,s,t)=>{t.d(s,{Z:()=>b});var r=t(4519),n=t(3908),i=t(2322),d=t(1386),a=t.n(d),c=t(5655),l=t(2120),o=t(5913),h=t(4972),x=t(7688),u=t(5381),p=t(5023),g=t(6628),f=t(6638),j=t(3426),m=t(2556);const Z=({type:e,onSideOpen:s})=>{const t=(0,i.Zl)(g.fZ),d=(0,i.sJ)(f.T0),[a]=(0,n.Z)(["sessionId"]),[c,u]=(0,r.useState)([]),[Z,b]=(0,r.useState)(1),[P,v]=(0,r.useState)(30),[$,k]=(0,r.useState)(""),[E,T]=(0,r.useState)(!1),[I,z]=(0,r.useState)({method:"get",url:`/user/search?page=${Z}`,headers:{sessionId:a.sessionId}}),{response:C,loading:O,error:B,fetchData:F}=(0,j.Z)(I,!1);return(0,r.useEffect)((()=>{null!==I&&F()}),[I]),(0,r.useEffect)((()=>{null!==d&&z({...d,url:`/user/search?page=${Z}`})}),[d]),(0,r.useEffect)((()=>{null!==C?(v(0===C.result.lastPage?1:C.result.lastPage),u(C.result.list),c?.forEach((e=>{t((s=>({...s,[e.id]:e.isBanned})))}))):(v(1),u([]))}),[C]),(0,r.useEffect)((()=>{if(0===c?.length)return;let e;e=""!==$?`?page=${Z}&nickname=${$}`:`?page=${Z}`,E&&(e+="&isBanned=1"),z({...I,url:`/user/search${e}`})}),[Z,$,E]),(0,m.jsx)(m.Fragment,{children:"home"!==e?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(p.xu,{children:[(0,m.jsxs)(y,{row:"between",children:[(0,m.jsx)(l.Z,{title:"user"}),(0,m.jsxs)(S,{children:[(0,m.jsx)("input",{type:"checkbox",checked:E,onChange:e=>T(e.target.checked)}),"\ubc34 \uc0ac\uc6a9\uc790"]}),(0,m.jsx)(w,{marginTop:"14px",marginRight:"10px",children:(0,m.jsx)(h.Z,{searchType:"\ub2c9\ub124\uc784",setSearchKeyword:k})})]}),(0,m.jsx)(o.Z,{isHome:!1,title:"user",data:c,onSideOpen:s}),(0,m.jsx)(x.Z,{currPage:Z,setCurrPage:b,lastPageIdx:P})]})}):(0,m.jsxs)(p.xu,{type:e,children:[(0,m.jsx)(l.Z,{type:e,title:"user"}),(0,m.jsx)(o.Z,{isHome:!0,title:"user",data:c,onSideOpen:s})]})})};Z.propTypes={type:a().string,onSideOpen:a().func};const y=(0,c.ZP)(u.h)`
  padding-bottom: 14px;
`,w=c.ZP.div`
  margin-top: ${({marginTop:e})=>e};
  margin-right: ${({marginRight:e})=>e};
`,S=c.ZP.label`
  margin-left: 1.125rem;
  padding-top: 2.25rem;
`,b=Z},4972:(e,s,t)=>{t.d(s,{Z:()=>Z});var r=t(4519),n=t(5655),i=t(1386),d=t.n(i),a=t(9892),c=t(5381),l=t(12),o=t(8735),h=t(2556);const x=({searchType:e,setSearchKeyword:s})=>{const t=(0,r.useRef)(),n=e=>{e.preventDefault(),o.C_.test(t.current.value)&&(s(t.current.value),t.current.value=e.target.value)};return(0,h.jsxs)(u,{col:"center",field:e,children:[(0,h.jsx)(g,{type:"text",readOnly:!0,value:e}),(0,h.jsx)(f,{type:"text",field:e,placeholder:"\uac80\uc0c9\uc5b4 \uc785\ub825",onKeyDown:e=>{"Enter"===e.key&&n(e)},ref:t}),(0,h.jsx)(j,{onClick:e=>n(e),children:(0,h.jsx)(m,{icon:l.Y$T})})]})};x.propTypes={searchType:d().string,setSearchKeyword:d().func};const u=(0,n.ZP)(c.h)`
  border: 2px solid ${({theme:e})=>e.colors.gray200};
  border-radius: 10px;
  width: 18.5rem;
  height: ${e=>e.height||"3.2rem"};
`,p=n.ZP.input`
  border: 0;
  background-color: transparent;
  font-size: ${({theme:e})=>e.fontSize.xxxs};
`,g=(0,n.ZP)(p)`
  width: ${({value:e})=>"\ub2c9\ub124\uc784"===e?"5.25rem":"4.2rem"};
  padding: 0 16px;
  border-right: 2px solid ${({theme:e})=>e.colors.gray200};

  &:hover {
    cursor: default;
  }
`,f=(0,n.ZP)(p)`
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
`,m=(0,n.ZP)(a.G)`
  font-size: 19px;
`,Z=x},8107:(e,s,t)=>{t.r(s),t.d(s,{default:()=>T});var r=t(4519),n=t(3908),i=t(2322),d=t(8582),a=t(6638),c=t(3373),l=t(1386),o=t.n(l),h=t(5655),x=t(5381),u=t(5971),p=t(2556);const g=({data:e,fetchUser:s})=>{const[t,n]=(0,r.useState)(!e?.isBanned);return(0,r.useEffect)((()=>{s()}),[t]),(0,p.jsxs)(f,{children:[(0,p.jsx)(j,{children:(0,p.jsx)(m,{children:"\uc0ac\uc6a9\uc790 \uc815\ubcf4"})}),(0,p.jsx)(Z,{children:(0,p.jsxs)(y,{children:[(0,p.jsxs)(w,{children:[(0,p.jsx)(S,{children:"\ub2c9\ub124\uc784"}),(0,p.jsx)(b,{children:e?.nickname})]}),(0,p.jsxs)(w,{children:[(0,p.jsx)(S,{children:"\uacbd\ud5d8\uce58"}),(0,p.jsx)(b,{children:e?.exp})]}),(0,p.jsxs)(w,{children:[(0,p.jsx)(S,{children:"\ub808\ubca8"}),(0,p.jsx)(b,{children:e?.level})]}),(0,p.jsxs)(w,{children:[(0,p.jsx)(S,{children:"\uc2b9\ub960"}),(0,p.jsx)(b,{children:e?.winRate})]}),(0,p.jsxs)(w,{children:[(0,p.jsx)(S,{children:"\uacc4\uc815 \ud65c\uc131\ud654 \uc5ec\ubd80"}),(0,p.jsx)(b,{children:(0,p.jsx)(u.Z,{isActive:!e?.isBanned,setIsActive:n})})]}),e?.isBanned&&(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(w,{children:[(0,p.jsx)(S,{children:"- \ube44\ud65c\uc131\ud654 \uc0ac\uc720"}),(0,p.jsx)(b,{children:e?.bannedReason})]})})]})})]})};g.propTypes={data:o().object,fetchUser:o().func};const f=h.ZP.div`
  margin: 16px 14px;
`,j=h.ZP.div`
  padding: 20px 0 10px;
`,m=h.ZP.span`
  font-family: "Open Sans";
  font-size: ${({theme:e})=>e.fontSize.l};
  font-weight: 700;
`,Z=h.ZP.table`
  width: 100%;
  max-width: 100%;
  margin: 1rem 0;
`,y=h.ZP.tbody``,w=(0,h.ZP)(x.h).attrs({as:"tr",col:"center"})`
  padding: 0 10px;
  border-top: 1px solid #c2c2c2;

  &:last-child {
    border-bottom: 1px solid #c2c2c2;
  }
`,S=(0,h.ZP)(x.h).attrs({as:"td",col:"center"})`
  width: 9.5rem;
  height: 4.5rem;
  flex-shrink: 0;
  border-right: 1px solid #c2c2c2;
  font-size: ${({theme:e})=>e.fontSize.xxs};
  font-weight: 700;
`,b=(0,h.ZP)(x.h).attrs({as:"td"})`
  height: 100%;
  padding-left: 15px;
  flex-grow: 1;
  font-size: ${({theme:e})=>e.fontSize.xxs};
`,P=g;var v=t(7480),$=t(5023),k=t(47),E=t(3426);const T=()=>{const[e,s]=(0,i.FV)(d.N),[t,l]=(0,i.FV)(a.QC),[o]=(0,n.Z)(["sessionId"]),[h,u]=(0,r.useState)(null),[g,f]=(0,r.useState)(null),{response:j,error:m,loading:Z,fetchData:y}=(0,E.Z)(g,!1);(0,r.useEffect)((()=>{null===t?s(0):(s(1),f({method:"get",url:`/user/${t}`,headers:{sessionId:o.sessionId}}))}),[]),(0,r.useEffect)((()=>{null!==g&&y()}),[g]),(0,r.useEffect)((()=>{null!==j&&u(j.result)}),[j]),(0,r.useEffect)((()=>{null!==h&&s(1)}),[h]);return(0,p.jsx)(k.vs,{row:"center",col:"center",children:(0,p.jsxs)(k.J7,{width:"82rem",dir:"col",children:[(0,p.jsx)(v.Z,{type:"admin-detail"}),(0,p.jsx)(k.or,{type:"admin",row:"between",children:(0,p.jsxs)(x.h,{row:"between",children:[(0,p.jsx)(c.Z,{onSideOpen:e=>{f({method:"get",url:`/user/${e}`,headers:{sessionId:o.sessionId}})}}),1===e&&(0,p.jsx)($.xu,{children:(0,p.jsx)(P,{data:h,fetchUser:y})})]})})]})})}},8582:(e,s,t)=>{t.d(s,{N:()=>r});const r=(0,t(2322).cn)({key:"isActiveSideContentTypeState",default:0})}}]);
//# sourceMappingURL=107.fa681de8.chunk.js.map