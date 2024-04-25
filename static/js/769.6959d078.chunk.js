"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[769],{2344:(e,r,t)=>{t.d(r,{z:()=>m,s:()=>g});var n=t(4519),o=t(1386),i=t.n(o),s=t(5655),a=t(9892);var l=t(12),d=t(3640),c=t(2556);const p=s.ZP.button`
  width: 50px;
  height: 42px;
  background-color: ${({type:e})=>x(e).bgColor||"initial"};
  border-radius: 15px 15px 0 0;

  &:hover {
    background-color: ${({type:e})=>x(e).hoverBgColor};
  }
`,h=(0,s.ZP)(a.G)`
  color: ${({type:e})=>x(e).color||"initial"};
  font-size: ${({type:e})=>x(e).fontSize||"20px"};
`,g=s.ZP.button`
  padding: ${({layout:e})=>"side"===e?"5px 9px":"5px 14px"};
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 11px;
`,x=e=>{switch(e){case"help":return{bgColor:"#ccc",hoverBgColor:"#E0E0E0"};case"setting":return{bgColor:"#bbbbb9",hoverBgColor:"#ddd"};case"exit":return{bgColor:"#FF6C6C",hoverBgColor:"#e55f5f",color:"#fff",fontSize:"19px"}}},u=e=>{switch(e){case"help":return l.FDd;case"setting":return l.gr5;case"exit":return l.EOp}},m=({type:e,location:r})=>{const[t,o]=(0,n.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p,{type:e,onClick:()=>o(!0),children:(0,c.jsx)(h,{type:e,icon:u(e)})}),t?(0,c.jsx)(d.Z,{type:e,isOpen:t,setIsOpen:o,height:"14rem",children:(e=>"help"===e?"\n\ub05d\ub9d0\uc787\uae30\n\n\ub05d\ub9d0\uc787\uae30\ub294 \uc774\uc804 \ud55c\uad6d\uc5b4 \ub2e8\uc5b4\uc758 \ub05d \ud55c \uc790\ub9ac\ub85c \uc2dc\uc791\ud558\ub294 \ub450 \uae00\uc790 \uc774\uc0c1\uc758 \ud55c\uad6d\uc5b4 \ub2e8\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \ucc28\ub840\ub97c \ub118\uae30\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4.\n\n\uc608\uc2dc) \uac15\uc544\uc9c0 \u2192 \uc9c0\ud53c\uc9c0\uae30 \u2192 \uae30\ud68c\n\n\ud55c\uae00 \ub9de\ucda4\ubc95 3\uc7a5 5\uc808 \ub450\uc74c \ubc95\uce59\uc5d0 \ub530\ub77c \uc74c\uc808\uc744 \ubc14\uafb8\uc5b4 \uc774\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\n\uc608\uc2dc) \uac15\uac15\uc220\ub798 \u2192 \ub0b4\ub825 \u2192 \uc5ed\ud559":"exit"===e?"playing"===r?"\uac8c\uc784\uc744 \uadf8\ub9cc\ub450\uc2dc\uaca0\uc2b5\ub2c8\uae4c?":"\ubc29\uc744 \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?":void 0)(e)}):null]})};m.propTypes={type:i().string,location:i().string}},3686:(e,r,t)=>{t.d(r,{Z:()=>x});var n=t(4519),o=t(5655),i=t(1843),s=t(1386),a=t.n(s),l=t(5381);var d=t(3640),c=t(2556);const p=({nickname:e=""})=>{const[r,t]=(0,n.useState)(!1);return(0,c.jsxs)(h,{children:[r&&(0,c.jsx)(d.Z,{type:"error",isOpen:r,setIsOpen:t,height:"14rem",children:"\ud648\uc73c\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,c.jsx)(i.rU,{onClick:()=>t(!0),children:(0,c.jsx)(g,{src:"data:image/png;base64,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"})}),(0,c.jsx)("span",{children:e})]})},h=(0,o.ZP)(l.h).attrs({as:"header",row:"between",col:"center"})`
  position: fixed;
  top: 0;
  width: inherit;
  height: 7rem;
  background-color: transparent;
  z-index: 10;
`,g=o.ZP.img`
  width: 4rem;

  &:hover {
    cursor: pointer;
  }
`;p.propTypes={nickname:a().string};const x=p},5023:(e,r,t)=>{t.d(r,{$3:()=>p,DI:()=>g,Dr:()=>x,Fg:()=>u,YU:()=>s,_U:()=>a,ef:()=>h,im:()=>c,or:()=>d,xu:()=>l});var n=t(1843),o=t(5655),i=t(5381);const s=(0,o.ZP)(i.h)`
  width: 16.5rem;
  height: 100%;
`,a=(0,o.ZP)(i.h)`
  max-width: 100%;
  flex-grow: 1;
`,l=o.ZP.div`
  width: ${({type:e})=>"home"===e?"28rem":"40.5rem"};
  height: ${({type:e})=>"home"===e?"43.6rem":"49.6rem"};
  padding: 10px 22px;
  background-color: #fff;
  border-radius: ${({type:e})=>"home"===e?"25px":"10px"};
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25);
  overflow-y: ${({overflowY:e})=>e};
`,d=o.ZP.main`
  position: ${({position:e})=>e};
  top: ${({top:e})=>e};
  bottom: ${({bottom:e})=>e};
  left: ${({left:e})=>e};
  right: ${({right:e})=>e};
  max-width: ${({maxWidth:e})=>e};
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  margin: ${({margin:e})=>e};
  padding: ${({padding:e})=>e};
  background-color: ${({bgColor:e})=>e};
  border-top: ${({borderTop:e})=>e};
  border-right: ${({borderRight:e})=>e};
  border-bottom: ${({borderBottom:e})=>e};
  border-left: ${({borderLeft:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
  z-index: ${({zIndex:e})=>e};
`,c=(0,o.ZP)(i.h)`
  position: ${({position:e})=>e};
  top: ${({top:e})=>e};
  bottom: ${({bottom:e})=>e};
  left: ${({left:e})=>e};
  right: ${({right:e})=>e};
  max-width: ${({maxWidth:e})=>e};
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  margin: ${({margin:e})=>e};
  padding: ${({padding:e})=>e};
  background-color: ${({bgColor:e})=>e};
  border-top: ${({borderTop:e})=>e};
  border-right: ${({borderRight:e})=>e};
  border-bottom: ${({borderBottom:e})=>e};
  border-left: ${({borderLeft:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
  z-index: ${({zIndex:e})=>e};
`,p=(0,o.ZP)(i.h)`
  & > * + * {
    margin-top: ${({spacingY:e})=>e&&e};
    margin-left: ${({spacingX:e})=>e&&e};
  }
`,h=(0,o.ZP)(i.h)`
  width: 100%;
  height: 100%;
  border: 1px solid #7d7d7d;
`,g=(0,o.ZP)(i.h)`
  height: 100%;
  max-height: 26.65rem;
  padding: 3px 5px;
  background-color: ${({type:e})=>"play"===e?"#889E7D":"#f3f3f3"};
`,x=o.ZP.span`
  margin: ${({margin:e})=>e||"0"};
  font-family: ${({font:e})=>e||"Gugi"};
  font-size: ${({fontSize:e})=>e||"21px"};
  font-weight: ${({fontWeight:e})=>e||"normal"};
  color: ${({color:e})=>e||"inherit"};
`,u=(0,o.ZP)(n.rU)`
  width: ${({width:e})=>e};
`},7590:(e,r,t)=>{t.d(r,{L:()=>P,O:()=>$});var n=t(4519),o=t(2322),i=t(3908),s=t(2674),a=t(1386),l=t.n(a),d=t(5655),c=t(9892),p=t(12),h=t(5381),g=t(3640),x=t(3606),u=t(6628),m=t(5002),f=t(2556);const b={CREATE:"create",ENTER:"enter",LIST:"list",RANKING:"ranking",PLAYING:"playing",READY:"ready",WAIT:"wait"},w={[b.CREATE]:"#B0D3F3",[b.ENTER]:"#E6EEB4",[b.LIST]:"#779DC5",[b.RANKING]:"#f3f3f3",[b.PLAYING]:"#889E7D",[b.WAIT]:"#cdeba1",[b.READY]:"#676767"},y={[b.READY]:"#fff"},j={[b.CREATE]:{type:"room",message:""},[b.ENTER]:{type:"alert",message:"\uc785\uc7a5 \uac00\ub2a5\ud55c \ubc29\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",height:"14.5rem"}},Z=(0,d.ZP)(h.h)`
  position: relative;
  top: ${({bgColor:e})=>"#779DC5"===e||"#f3f3f3"===e||"#889E7D"===e?"1px":"0"};
  z-index: 9;
  width: 8.75rem;
  height: 3rem;
  background-color: ${({bgColor:e})=>e};
  border: 1px solid
    ${({bgColor:e})=>"#779DC5"===e?"#7D7D7D":"#f3f3f3"===e?"#ccc":"transparent"};
  color: ${({color:e})=>e||"initial"};
  border-bottom: 0;
  border-radius: 12px 12px 0 0;
  flex-shrink: 0;

  & > * + * {
    margin-left: 7px;
  }

  &:hover {
    cursor: ${({onClick:e})=>e?"pointer":"default"};
    transform: ${({onClick:e})=>e&&"translateY(-2px)"};
  }
`,A=(0,d.ZP)(c.G)`
  font-size: ${({fontSize:e})=>e||"18px"};
`,C=d.ZP.span`
  font-size: ${({theme:e})=>e.fontSize.s};
  font-weight: 700;
`,P=({children:e,bgColor:r,color:t,onClick:n})=>(0,f.jsx)(Z,{row:"center",col:"center",bgColor:r,color:t,onClick:n,children:(0,f.jsx)(C,{children:e})});P.propTypes={children:l().string,bgColor:l().string,color:l().string,onClick:l().func};const $=({children:e,type:r,rooms:t,onClick:a})=>{const l=(0,o.Zl)(x.NX),d=(0,o.Zl)(u.E),[c,h]=(0,n.useState)(!1),[,P]=(0,i.Z)(["userId"]),$=(0,s.s0)(),v=(0,n.useCallback)((()=>{h(!0)}),[]),k=(0,n.useCallback)((()=>{const e=t?.filter((e=>"playing"!==e.state&&!1===e.isSecure&&e.currentUserCount<e.maxUserCount));if(0===e.length)h(!0);else{const r=e[Math.floor(Math.random()*e.length)];(0,m.Ls)({roomId:r.id,password:""},(()=>{(0,m.tA)((e=>{l(e),P("userId",e.userList[e.userList.length-1].userId,{path:"/"}),d((r=>({userId:e.userList[e.userList.length-1].userId,...r}))),$(`/game/${e.roomNumber.toString()}`)}))}),(e=>{})),(0,m.s5)((e=>{console.log(e)}))}}),[t]),E={[b.CREATE]:v,[b.ENTER]:k};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(Z,{as:"button",row:"center",col:"center",type:r,bgColor:w[r],color:y[r],onClick:E[r]||a,hasOnClick:!!E[r]||a,children:["ranking"===r&&(0,f.jsx)(A,{icon:p.kWN}),(0,f.jsx)(C,{children:e})]}),c?(0,f.jsx)(g.Z,{type:j[r].type,isOpen:c,setIsOpen:h,height:j[r]?.height,children:j[r].message}):null]})};$.propTypes={children:l().string,type:l().oneOf(Object.values(b)),rooms:l().array,onClick:l().func,isModalOpen:l().bool,setIsModalOpen:l().func}},4450:(e,r,t)=>{t.d(r,{Z:()=>p});var n=t(5655),o=t(1386),i=t.n(o),s=t(5381),a=t(2556);const l=({message:e})=>("KKUJJANG \u24d2 All rights reserved.",(0,a.jsx)(d,{row:"center",col:"center",children:(0,a.jsx)(c,{children:"KKUJJANG \u24d2 All rights reserved."})}));l.propTypes={message:i().string};const d=(0,n.ZP)(s.h)``,c=(0,n.ZP)(s.h).attrs({as:"footer",row:"center",col:"center"})`
  width: 100%;
  height: 1.5rem;
  position: fixed;
  bottom: 0;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.gray500};
`,p=l},5769:(e,r,t)=>{t.r(r),t.d(r,{default:()=>re});var n=t(4519),o=t(2322),i=t(2674),s=t(6628),a=(t(2571),t(1857),t(3606)),l=t(3686),d=t(47),c=t(5655),p=t(5381),h=t(9421),g=t(2344),x=t(1085),u=t(3426),m=t(2556);const f=c.ZP.div`
  width: 100%;
  height: 27.25rem;
  padding: 3px 5px;
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  border-bottom: 0;
`,b=c.ZP.div`
  height: 100%;
  padding: 5px 10px;
`,w=c.ZP.table`
  width: 100%;
  max-width: 100%;
`,y=c.ZP.tbody`
  & > * + * {
    margin-top: 10px;
  }
`,j=c.ZP.tr`
  max-height: 24px;

  & > * + * {
    margin-left: 3px;
  }
`,Z=c.ZP.th`
  width: ${({width:e})=>e||"auto"};
  background-color: #ddd;
  border: 3px solid #f3f3f3;
  font-size: 13px;
`,A=c.ZP.td`
  background-color: ${({bgColor:e})=>e||"transparent"};
  border: 3px solid #f3f3f3;
  padding-left: ${({textAlign:e})=>"left"===e&&"10px"};
  text-align: ${({textAlign:e})=>e||"center"};
  font-size: 12px;
  font-weight: 430;
`,C=()=>{const[e,r]=(0,n.useState)([]),[t,o]=(0,n.useState)(31),[i,s]=(0,n.useState)(1),[a,l]=(0,n.useState)(30),{response:d,loading:c,error:C,fetchData:P}=(0,u.Z)({method:"get",url:"/ranking"});(0,n.useEffect)((()=>{if(null!==d){const e=15,t=(i-1)*e,n=t+e,o=d.result?.slice(t,n);l(Math.ceil(d.result?.length/e)),r(o)}}),[d]);const $=e=>1===e?"#FFD700":2===e?"#C0C0C0":3===e?"#DE7A32":"transparent";return(0,m.jsxs)(f,{children:[(0,m.jsx)(x.Z,{type:"rank"}),(0,m.jsxs)(b,{children:[(0,m.jsxs)(w,{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)(j,{children:[(0,m.jsx)(Z,{width:"28px",children:"#"}),(0,m.jsx)(Z,{width:"58px",children:"\ub808\ubca8"}),(0,m.jsx)(Z,{children:"\ub2c9\ub124\uc784"})]})}),(0,m.jsx)(y,{children:e?.map((({rank:e,level:r,nickname:t},n)=>(0,m.jsxs)(j,{children:[(0,m.jsx)(A,{bgColor:$(e),children:e}),(0,m.jsx)(A,{children:r}),(0,m.jsx)(A,{textAlign:"left",children:t})]},n)))})]}),(0,m.jsxs)(h.Z,{flow:"col",cols:"1fr 1.5fr 1fr",margin:"7px 24px",children:[(0,m.jsx)(p.h,{row:"center",children:i>1&&(0,m.jsx)(g.s,{layout:"side",onClick:()=>s(i-1),children:"\uc774\uc804"})}),(0,m.jsx)(p.h,{row:"center",children:(0,m.jsx)(g.s,{layout:"center",onClick:()=>s(Math.ceil(t/15)),children:"\ub0b4 \uc21c\uc704"})}),(0,m.jsx)(p.h,{row:"center",children:i<a&&(0,m.jsx)(g.s,{layout:"side",onClick:()=>s(i+1),children:"\ub2e4\uc74c"})})]})]})]})};var P=t(2695),$=t(1386),v=t.n($),k=t(3908),E=t(9892),I=t(3640),O=t(12),D=t(5002);const S=({roomInfo:{id:e,roomNumber:r,title:t,isSecure:l,maxRound:d,roundTimeLimit:c,currentUserCount:h,maxUserCount:g,state:x}})=>{const u=(0,o.Zl)(a.NX),f=(0,o.Zl)(s.E),[b,w]=(0,n.useState)(""),[y,j]=(0,n.useState)(""),[Z,A]=(0,n.useState)(!1),[,C]=(0,k.Z)(["userId"]),P=(0,i.s0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(T,{isPlaying:"playing"===x,onClick:()=>{return r=e,"playing"===x?(w("alert"),j("\uac8c\uc784\uc774 \uc9c4\ud589 \uc911\uc778 \ubc29\uc785\ub2c8\ub2e4."),void A(!0)):h===g?(w("alert"),j("\ubc29\uc774 \ucc3c\uc2b5\ub2c8\ub2e4."),void A(!0)):"playing"!==x&&!0===l?(w("password"),void A(!0)):void(0,D.Ls)({roomId:r,password:""},(()=>{(0,D.tA)((e=>{u(e),C("userId",e.userList[e.userList.length-1].userId,{path:"/"}),f((r=>({userId:e.userList[e.userList.length-1].userId,...r}))),P(`/game/${e.roomNumber.toString()}`)}))}),(e=>{w("error"),j(e),A(!0)}));var r},children:[(0,m.jsx)(R,{isPlaying:"playing"===x,children:"playing"===x?"PLAYING":"WAITING"}),(0,m.jsxs)(z,{row:"between",children:[(0,m.jsx)(N,{row:"center",col:"center",children:(0,m.jsx)(B,{children:r})}),(0,m.jsxs)(W,{dir:"col",row:"center",children:[(0,m.jsx)(G,{children:t}),(0,m.jsxs)(U,{children:[(0,m.jsx)(L,{children:`\ub77c\uc6b4\ub4dc ${d}`}),(0,m.jsx)(L,{children:c/1e3+"\ucd08"})]})]}),(0,m.jsxs)(F,{dir:"col",row:"evenly",col:"center",children:[(0,m.jsx)(M,{children:`${h}/${g}`}),(0,m.jsx)(p.Z,{row:"center",col:"center",children:(0,m.jsx)(X,{icon:!0===l?O.byT:O._1N})})]})]})]},e),Z?(0,m.jsx)(I.Z,{type:b,isOpen:Z,setIsOpen:A,roomId:e,children:y}):null]})};S.propTypes={roomInfo:v().shape({id:v().string,roomNumber:v().number,title:v().string,isSecure:v().bool,maxRound:v().number,roundTimeLimit:v().number,currentUserCount:v().number,maxUserCount:v().number,state:v().oneOf(["preparing","playing"]).isRequired}).isRequired};const T=c.ZP.div`
  width: calc(50% - 1rem);
  height: 7rem;
  background-color: ${({isPlaying:e})=>e?"#737373":"#EBEBEB"};
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin: 8px 4px;
  padding: 15px 18px 15px 10px;

  &:hover {
    cursor: pointer;
  }
`,R=c.ZP.span`
  position: absolute;
  margin-top: ${({isPlaying:e})=>e?"8px":"9.5px"};
  transform: rotate(338deg);
  font-family: "DNFBitBitv2";
  font-size: 41px;
  font-weight: 900;
  z-index: 1;
  opacity: ${({isPlaying:e})=>e?"0.15":"0.1"};
`,z=(0,c.ZP)(p.Z)`
  height: 100%;
`,N=(0,c.ZP)(p.Z)`
  width: 5rem;
`,W=(0,c.ZP)(p.Z)`
  flex-grow: 1;

  & > * + * {
    margin-top: 8px;
  }
`,U=(0,c.ZP)(p.Z)`
  & > * + * {
    margin-left: 15px;
  }
`,F=(0,c.ZP)(p.Z)`
  width: 4.2rem;
`,B=c.ZP.span`
  font-family: "AlfaSlabOne";
  font-size: ${({theme:e})=>e.fontSize.xl};
  font-weight: 800;
  padding-bottom: 4px;
`,G=c.ZP.span`
  font-family: "Hanna";
  font-size: 23px;
  font-weight: 500;
`,L=c.ZP.span`
  font-family: "Hanna";
  font-size: 18px;
  font-weight: 400;
`,M=c.ZP.span`
  font-family: "ZenDots";
  font-size: 27px;
  font-weight: 600;
`,X=(0,c.ZP)(E.G)`
  font-size: 28px;
`,Y=S,J=({rooms:e})=>{const[r,t]=(0,n.useState)(!1),[o,i]=(0,n.useState)(!1);return(0,m.jsxs)(K,{dir:"col",children:[(0,m.jsx)(x.Z,{type:"list",row:"between",showWaitingRoom:r,setShowWaitingRoom:t,showOpenRoom:o,setShowOpenRoom:i}),(0,m.jsx)(q,{row:"between",children:e?.filter((e=>(!r||"playing"!==e.state)&&(!o||!0!==e.isSecure))).map((e=>(0,m.jsx)(Y,{roomInfo:e},e.id)))})]})};J.propTypes={rooms:v().array};const K=(0,c.ZP)(p.Z)`
  width: 57.6rem;
  height: 100%;
  padding: 3px 5px;
  background-color: #748f9b80;
  border: 1px solid #7d7d7d;
`,q=(0,c.ZP)(p.Z)`
  max-height: 32rem;
  margin: 12px 0;
  padding: 0 24px;
  flex-wrap: wrap;
  overflow: auto;
`,V=J;var H=t(7590),Q=t(4450),_=t(5023),ee=t(8414);const re=()=>{const[e,r]=(0,n.useState)([]),t=(0,o.Zl)(a.NX),[s,c]=(0,n.useState)(null),[p,h]=(0,n.useState)(null),[x,u]=(0,n.useState)(!1),f=(0,i.TH)().pathname;let b=!1;(0,n.useEffect)((()=>{b||"/game"!==f||((0,D.Z)((e=>{r([...e].reverse())})),(0,D.dY)((e=>{r((r=>[e,...r])),t(null)})),(0,D.af)((({roomId:e})=>{r((r=>r.filter((r=>r.id!==e))))})),(0,D.Vq)((e=>{const{roomId:t,currentPlayerCount:n}=e;r((e=>e.map((e=>e.id===t?{...e,currentPlayerCount:n}:e))))})),(0,D.dH)((e=>{r((r=>r.map((r=>r.id===e.id?{...r,...e}:r))))})),(0,D.qQ)((e=>{c("error"),h(e),u(!0)}))),b=!0}),[]);(0,n.useCallback)((async()=>{null===(await(0,ee.wJ)()).avatarUrl&&(c(null),u(!1))}),[]);return(0,m.jsxs)(d.vs,{row:"center",col:"center",children:[x&&(0,m.jsx)(I.Z,{type:s,isOpen:x,setIsOpen:u,height:"14rem",children:"error"===s&&p}),(0,m.jsxs)(d.J7,{dir:"col",row:"center",children:[(0,m.jsx)(l.Z,{}),(0,m.jsx)(_.or,{width:"100%",children:(0,m.jsxs)(d.xu,{children:[(0,m.jsxs)(_.YU,{dir:"col",children:[(0,m.jsx)(H.O,{type:"ranking",children:"\ub7ad\ud0b9"}),(0,m.jsx)(C,{}),(0,m.jsx)(P.Z,{})]}),(0,m.jsxs)(_._U,{dir:"col",children:[(0,m.jsxs)(_.$3,{row:"between",col:"end",children:[(0,m.jsxs)(_.$3,{spacingX:"5px",children:[(0,m.jsx)(H.O,{type:"list",children:"\ubc29 \ubaa9\ub85d"}),(0,m.jsx)(H.O,{type:"create",children:"\ubc29 \ub9cc\ub4e4\uae30"}),(0,m.jsx)(H.O,{type:"enter",rooms:e,children:"\ubc14\ub85c \uc785\uc7a5"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(g.z,{type:"help"}),(0,m.jsx)(g.z,{type:"setting"})]})]}),(0,m.jsx)(V,{rooms:e,roomId:null})]})]})}),(0,m.jsx)(Q.Z,{})]})]})}},47:(e,r,t)=>{t.d(r,{J7:()=>d,VR:()=>c,ZQ:()=>a,lt:()=>s,or:()=>p,vs:()=>l,xu:()=>h});var n=t(5655),o=t(5381);const i=n.F4`
  from { opacity: 0;}
  to {opacity: 1;}
`,s=n.F4`
  50% {
      opacity: 0;
  }
`,a=(n.ZP.div`
  display: none;
`,n.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42.25rem;
  background-image: linear-gradient(#dbe1ed, #ffffff00);
  z-index: -1;
`),l=(0,n.ZP)(o.h)`
  animation: ${i} 0.5s ease-in-out;
`,d=(0,n.ZP)(o.h)`
  width: ${e=>e.width||"75rem"};
  height: 100vh;
`,c=(0,n.ZP)(o.h)`
  width: 36.75rem; // 기존 40.75rem
  height: ${e=>e.height||"fit-content"};
`,p=n.ZP.main`
  width: 100%;
  margin-top: ${({type:e})=>"big"===e?"10rem":"admin"!==e?"7.5rem":"6.5rem"};
`,h=(0,n.ZP)(o.h)`
  width: 100%;
  max-width: 100%;
  height: 43.25rem;
  padding: 10px;
  background-color: ${({bgColor:e,theme:r})=>e||r.colors.content};
`;(0,n.ZP)(o.h)`
  flex-basis: ${e=>e.width||auto};
  align-self: ${e=>e.align||auto};
`},9421:(e,r,t)=>{t.d(r,{Z:()=>p});const n=t(5655).ZP.div`
  display: grid;
  grid-template-columns: ${({cols:e,items:r,size:t})=>e?o(e):r?i(r,t):"1fr"};
  grid-template-rows: ${({rows:e})=>s(e)};
  grid-gap: ${({gap:e})=>a(e)};
  grid-auto-flow: ${({flow:e})=>l(e)};
  margin: ${({margin:e})=>e||"0"};
  padding: ${({padding:e})=>e||"0"};
  justify-content: ${({row:e})=>d(e)};
  align-items: ${({col:e})=>c(e)};
`,o=e=>e,i=(e,r="1fr")=>`repeat(${e}, ${r})`,s=e=>e||"auto",a=e=>e||"0",l=e=>"col"===e?"column":"row",d=e=>{switch(e){case"center":return"center";case"start":default:return"flex-start";case"end":return"flex-end";case"between":return"space-between";case"around":return"space-around";case"evenly":return"space-evenly"}},c=e=>{switch(e){case"center":return"center";case"start":return"flex-start";case"end":return"flex-end";case"baseline":return"baseline";default:return"stretch"}},p=n}}]);
//# sourceMappingURL=769.6959d078.chunk.js.map