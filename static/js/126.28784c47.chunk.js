"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[126],{1126:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C});var i=n(4519),r=n(2674),s=n(5381),o=n(47),a=n(7480),l=n(3908),h=n(5655),d=n(3426),m=n(3451),g=n(4487),u=n(8229),c=n(3461),f=n(2556);const p=(0,h.ZP)(s.h)`
  width: ${t=>t.width||"100%"};
  height: ${t=>t.height||"fit-content"};
  margin-top: ${t=>t.marginTop||null};
  margin-bottom: ${t=>t.marginBottom||null};
  margin-left: ${t=>t.marginLeft||null};
  margin-right: ${t=>t.marginRight||null};
`,x=h.ZP.p`
  color: ${t=>t.color||"#5E5C65"};
  font-family: "Noto Sans KR";
  font-size: ${t=>t.fontSize||"19px"};
  font-weight: ${t=>t.fontWeight||"200"};
  margin-bottom: 36px;
`,w=h.ZP.label`
  font-size: ${({theme:t})=>t.fontSize.xxs};
  font-weight: 700;
  color: ${({theme:t})=>t.colors.gray600};
  margin-left: ${t=>t.marginLeft||null};
`,j=h.ZP.p`
  font-weight: 700;
  margin: 0;
  margin-right: ${t=>t.marginRight||null};
`,$=h.ZP.button`
  width: 15rem;
  height: 4.688rem;
  background-color: ${({theme:t})=>t.colors.gray100};
  color: #434343;
  font-size: 28px;
  font-weight: 700;
  margin-left: ${t=>t.marginLeft||null};
`,Z=()=>{const[t,e]=(0,i.useState)(!1),[n,s]=(0,i.useState)(""),[o,a]=(0,i.useState)(!1),[h,Z]=(0,i.useState)(!1),[b,k]=(0,i.useState)(null),{response:P,error:y,loading:C,fetchData:R}=(0,d.Z)(b,!1),S=(0,r.s0)(),[I]=(0,l.Z)(["smsAuthId"]);(0,i.useEffect)((()=>{null!==b&&R()}),[b]),(0,i.useEffect)((()=>{null!==P?b?.url.startsWith("/user/find/id")&&(e(!0),s(P.result)):b?.url.startsWith("/user/find/id")&&a(!0)}),[P,y]);const B=t=>{k({method:"post",url:"/user/find/id",headers:{smsAuthId:I.smsAuthId},data:{phone:t}})},v=()=>{1==o?(a(!1),window.location.reload()):1==h&&Z(!1)};return(0,f.jsxs)(f.Fragment,{children:[h&&(0,f.jsx)(c.Z,{onClick:v,setIsOpen:Z,hasButton:!0,children:"\uc778\uc99d\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),o&&(0,f.jsx)(c.Z,{onClick:v,setIsOpen:a,hasButton:!0,children:"\uc544\uc774\ub514\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,f.jsxs)(p,{dir:"col",children:[(0,f.jsx)(m.Z,{type:"findid",marginTop:"0px",marginBottom:"0px"}),t?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x,{children:"\ub2e4\uc74c \uc815\ubcf4\ub85c \uac00\uc785\ub41c \uc544\uc774\ub514\uac00 \ucd1d 1\uac1c \uc788\uc2b5\ub2c8\ub2e4."}),(0,f.jsxs)(p,{row:"between",width:"30rem",marginTop:"50px",children:[(0,f.jsx)(w,{marginLeft:"20px",children:"\uc544\uc774\ub514"}),(0,f.jsx)(j,{marginRight:"20px",children:n})]}),(0,f.jsxs)(p,{marginTop:"50px",children:[(0,f.jsx)(u.Z,{type:"smallBrown",message:"\ub85c\uadf8\uc778",onClick:()=>{S("/member/login")}}),(0,f.jsx)($,{marginLeft:"15px",onClick:()=>{S("/member/find?type=pw")},children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x,{children:"\ud68c\uc6d0 \uac00\uc785 \uc2dc \ub4f1\ub85d\ud558\uc2e0 \ud734\ub300\uc804\ud654 \ubc88\ud638\ub85c \uc778\uc99d\uc744 \uc9c4\ud589\ud574 \uc8fc\uc138\uc694."}),(0,f.jsx)(g.Z,{onVerificationResult:(t,e)=>{null!==t?B(e):Z(!0)}})]})]})]})};var b=n(693);const k=(0,h.ZP)(s.h)`
  width: ${t=>t.width||"100%"};
  height: ${t=>t.height||"fit-content"};

  margin-top: ${t=>t.marginTop||null};
  margin-bottom: ${t=>t.marginBottom||null};
  margin-left: ${t=>t.marginLeft||null};
  margin-right: ${t=>t.marginRight||null};
`,P=h.ZP.p`
  color: ${t=>t.color||"#5E5C65"};
  font-family: "Noto Sans KR";
  font-size: ${t=>t.fontSize||"19px"};
  font-weight: ${t=>t.fontWeight||"200"};
`,y=()=>{const t=(0,i.useRef)(""),[e,n]=(0,i.useState)(!1),[s,o]=(0,i.useState)(!1),[a,h]=(0,i.useState)(null),{response:u,error:p,loading:x,fetchData:w}=(0,d.Z)(a,!1),j=(0,r.s0)(),[$,Z]=(0,l.Z)(["smsAuthId","passwordChangeAuthId"]);(0,i.useEffect)((()=>{null!==a&&w()}),[a]),(0,i.useEffect)((()=>{null!==u?a?.url.startsWith("/user/find/pw")&&(Z("passwordChangeAuthId",u.passwordChangeAuthId),j("/member/change-pw")):a?.url.startsWith("/user/find/pw")&&o(!0)}),[u,p]);const y=e=>{const n=t.current.value;/^[a-z0-9]{7,30}$/.test(n)?h({method:"post",url:"/user/find/pw",headers:{smsAuthId:$.smsAuthId},data:{username:n,phone:e}}):o(!0)},C=()=>{1==s?(o(!1),window.location.reload()):1==e&&n(!1)};return(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(c.Z,{onClick:C,setIsOpen:n,hasButton:!0,children:"\uc778\uc99d\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),s&&(0,f.jsx)(c.Z,{onClick:C,setIsOpen:o,hasButton:!0,children:"\uc544\uc774\ub514\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,f.jsxs)(k,{dir:"col",children:[(0,f.jsx)(m.Z,{type:"findpw",marginTop:"0px",marginBottom:"0px"}),(0,f.jsx)(P,{children:"\ud68c\uc6d0 \uac00\uc785 \uc2dc \ub4f1\ub85d\ud558\uc2e0 \ud734\ub300\uc804\ud654 \ubc88\ud638\ub85c \uc778\uc99d\uc744 \uc9c4\ud589\ud574 \uc8fc\uc138\uc694."}),(0,f.jsx)(k,{dir:"col",marginBottom:"15px",children:(0,f.jsx)(b.Z,{hasLabel:!0,name:"id",inputRef:t})}),(0,f.jsx)(g.Z,{onVerificationResult:(t,e)=>{null!==t?y(e):(n(!0),handleReload())}})]})]})},C=()=>{const t=(0,r.TH)(),e=new URLSearchParams(t.search).get("type");return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(o.vs,{row:"center",col:"center",children:[(0,f.jsx)(a.Z,{type:"big"}),(0,f.jsx)(o.VR,{children:(0,f.jsxs)(s.h,{as:"main",width:"100%",margin:"15.5rem 0 3.5rem",children:["id"===e&&(0,f.jsx)(Z,{}),"pw"===e&&(0,f.jsx)(y,{})]})})]})})}},47:(t,e,n)=>{n.d(e,{J7:()=>h,VR:()=>d,ZQ:()=>a,lt:()=>o,or:()=>m,vs:()=>l,xu:()=>g});var i=n(5655),r=n(5381);const s=i.F4`
  from { opacity: 0;}
  to {opacity: 1;}
`,o=i.F4`
  50% {
      opacity: 0;
  }
`,a=(i.ZP.div`
  display: none;
`,i.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42.25rem;
  background-image: linear-gradient(#dbe1ed, #ffffff00);
  z-index: -1;
`),l=(0,i.ZP)(r.h)`
  animation: ${s} 0.5s ease-in-out;
`,h=(0,i.ZP)(r.h)`
  width: ${t=>t.width||"75rem"};
  height: 100vh;
`,d=(0,i.ZP)(r.h)`
  width: 36.75rem; // 기존 40.75rem
  height: ${t=>t.height||"fit-content"};
`,m=i.ZP.main`
  width: 100%;
  margin-top: ${({type:t})=>"big"===t?"10rem":"admin"!==t?"7.5rem":"6.5rem"};
`,g=(0,i.ZP)(r.h)`
  width: 100%;
  max-width: 100%;
  height: 43.25rem;
  padding: 10px;
  background-color: ${({bgColor:t,theme:e})=>t||e.colors.content};
`;(0,i.ZP)(r.h)`
  flex-basis: ${t=>t.width||auto};
  align-self: ${t=>t.align||auto};
`}}]);
//# sourceMappingURL=126.28784c47.chunk.js.map