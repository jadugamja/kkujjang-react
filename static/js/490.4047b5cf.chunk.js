"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[490],{2344:(e,r,t)=>{t.d(r,{z:()=>f,s:()=>h});var n=t(4519),o=t(1386),s=t.n(o),i=t(5655),a=t(9892);var d=t(12),l=t(3640),c=t(2556);const p=i.ZP.button`
  width: 50px;
  height: 42px;
  background-color: ${({type:e})=>x(e).bgColor||"initial"};
  border-radius: 15px 15px 0 0;

  &:hover {
    background-color: ${({type:e})=>x(e).hoverBgColor};
  }
`,u=(0,i.ZP)(a.G)`
  color: ${({type:e})=>x(e).color||"initial"};
  font-size: ${({type:e})=>x(e).fontSize||"20px"};
`,h=i.ZP.button`
  padding: ${({layout:e})=>"side"===e?"5px 9px":"5px 14px"};
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 11px;
`,x=e=>{switch(e){case"help":return{bgColor:"#ccc",hoverBgColor:"#E0E0E0"};case"setting":return{bgColor:"#bbbbb9",hoverBgColor:"#ddd"};case"exit":return{bgColor:"#FF6C6C",hoverBgColor:"#e55f5f",color:"#fff",fontSize:"19px"}}},g=e=>{switch(e){case"help":return d.FDd;case"setting":return d.gr5;case"exit":return d.EOp}},f=({type:e,location:r})=>{const[t,o]=(0,n.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p,{type:e,onClick:()=>o(!0),children:(0,c.jsx)(u,{type:e,icon:g(e)})}),t?(0,c.jsx)(l.Z,{type:e,isOpen:t,setIsOpen:o,height:"14rem",children:(e=>"help"===e?"\n\ub05d\ub9d0\uc787\uae30\n\n\ub05d\ub9d0\uc787\uae30\ub294 \uc774\uc804 \ud55c\uad6d\uc5b4 \ub2e8\uc5b4\uc758 \ub05d \ud55c \uc790\ub9ac\ub85c \uc2dc\uc791\ud558\ub294 \ub450 \uae00\uc790 \uc774\uc0c1\uc758 \ud55c\uad6d\uc5b4 \ub2e8\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \ucc28\ub840\ub97c \ub118\uae30\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4.\n\n\uc608\uc2dc) \uac15\uc544\uc9c0 \u2192 \uc9c0\ud53c\uc9c0\uae30 \u2192 \uae30\ud68c\n\n\ud55c\uae00 \ub9de\ucda4\ubc95 3\uc7a5 5\uc808 \ub450\uc74c \ubc95\uce59\uc5d0 \ub530\ub77c \uc74c\uc808\uc744 \ubc14\uafb8\uc5b4 \uc774\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\n\uc608\uc2dc) \uac15\uac15\uc220\ub798 \u2192 \ub0b4\ub825 \u2192 \uc5ed\ud559":"exit"===e?"playing"===r?"\uac8c\uc784\uc744 \uadf8\ub9cc\ub450\uc2dc\uaca0\uc2b5\ub2c8\uae4c?":"\ubc29\uc744 \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?":void 0)(e)}):null]})};f.propTypes={type:s().string,location:s().string}},9673:(e,r,t)=>{t.d(r,{Z:()=>u});var n=t(5655),o=t(1386),s=t.n(o),i=t(5381),a=t(2556);const d=({nickname:e,message:r,createdAt:t})=>(0,a.jsxs)(l,{children:[(0,a.jsx)(c,{row:"start",col:"center",children:(0,a.jsx)("span",{children:e})}),(0,a.jsx)(p,{col:"center",children:(0,a.jsx)("span",{children:r})}),t&&(0,a.jsx)(p,{marginLeft:"auto",children:(0,a.jsx)("span",{children:t})})]}),l=(0,n.ZP)(i.Z)`
  height: 20px;
`,c=(0,n.ZP)(i.Z)`
  width: 130px;
  height: inherit;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,p=(0,n.ZP)(i.Z)`
  height: inherit;
  margin-left: ${({marginLeft:e})=>e};
`;d.propTypes={nickname:s().string,message:s().string,createdAt:s().string};const u=d},3686:(e,r,t)=>{t.d(r,{Z:()=>x});var n=t(4519),o=t(5655),s=t(1843),i=t(1386),a=t.n(i),d=t(5381);var l=t(3640),c=t(2556);const p=({nickname:e=""})=>{const[r,t]=(0,n.useState)(!1);return(0,c.jsxs)(u,{children:[r&&(0,c.jsx)(l.Z,{type:"error",isOpen:r,setIsOpen:t,height:"14rem",children:"\ud648\uc73c\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,c.jsx)(s.rU,{onClick:()=>t(!0),children:(0,c.jsx)(h,{src:"data:image/png;base64,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"})}),(0,c.jsx)("span",{children:e})]})},u=(0,o.ZP)(d.h).attrs({as:"header",row:"between",col:"center"})`
  position: fixed;
  top: 0;
  width: inherit;
  height: 7rem;
  background-color: transparent;
  z-index: 10;
`,h=o.ZP.img`
  width: 4rem;

  &:hover {
    cursor: pointer;
  }
`;p.propTypes={nickname:a().string};const x=p},5023:(e,r,t)=>{t.d(r,{$3:()=>p,DI:()=>h,Dr:()=>x,Fg:()=>g,YU:()=>i,_U:()=>a,ef:()=>u,im:()=>c,or:()=>l,xu:()=>d});var n=t(1843),o=t(5655),s=t(5381);const i=(0,o.ZP)(s.h)`
  width: 16.5rem;
  height: 100%;
`,a=(0,o.ZP)(s.h)`
  max-width: 100%;
  flex-grow: 1;
`,d=o.ZP.div`
  width: ${({type:e})=>"home"===e?"28rem":"40.5rem"};
  height: ${({type:e})=>"home"===e?"43.6rem":"49.6rem"};
  padding: 10px 22px;
  background-color: #fff;
  border-radius: ${({type:e})=>"home"===e?"25px":"10px"};
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25);
  overflow-y: ${({overflowY:e})=>e};
`,l=o.ZP.main`
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
`,c=(0,o.ZP)(s.h)`
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
`,p=(0,o.ZP)(s.h)`
  & > * + * {
    margin-top: ${({spacingY:e})=>e&&e};
    margin-left: ${({spacingX:e})=>e&&e};
  }
`,u=(0,o.ZP)(s.h)`
  width: 100%;
  height: 100%;
  border: 1px solid #7d7d7d;
`,h=(0,o.ZP)(s.h)`
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
`,g=(0,o.ZP)(n.rU)`
  width: ${({width:e})=>e};
`},7590:(e,r,t)=>{t.d(r,{L:()=>P,O:()=>T});var n=t(4519),o=t(2322),s=t(3908),i=t(2674),a=t(1386),d=t.n(a),l=t(5655),c=t(9892),p=t(12),u=t(5381),h=t(3640),x=t(3606),g=t(6628),f=t(5002),m=t(2556);const b={CREATE:"create",ENTER:"enter",LIST:"list",RANKING:"ranking",PLAYING:"playing",READY:"ready",WAIT:"wait"},y={[b.CREATE]:"#B0D3F3",[b.ENTER]:"#E6EEB4",[b.LIST]:"#779DC5",[b.RANKING]:"#f3f3f3",[b.PLAYING]:"#889E7D",[b.WAIT]:"#cdeba1",[b.READY]:"#676767"},w={[b.READY]:"#fff"},j={[b.CREATE]:{type:"room",message:""},[b.ENTER]:{type:"alert",message:"\uc785\uc7a5 \uac00\ub2a5\ud55c \ubc29\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",height:"14.5rem"}},Z=(0,l.ZP)(u.h)`
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
`,C=(0,l.ZP)(c.G)`
  font-size: ${({fontSize:e})=>e||"18px"};
`,I=l.ZP.span`
  font-size: ${({theme:e})=>e.fontSize.s};
  font-weight: 700;
`,P=({children:e,bgColor:r,color:t,onClick:n})=>(0,m.jsx)(Z,{row:"center",col:"center",bgColor:r,color:t,onClick:n,children:(0,m.jsx)(I,{children:e})});P.propTypes={children:d().string,bgColor:d().string,color:d().string,onClick:d().func};const T=({children:e,type:r,rooms:t,onClick:a})=>{const d=(0,o.Zl)(x.NX),l=(0,o.Zl)(g.E),[c,u]=(0,n.useState)(!1),[,P]=(0,s.Z)(["userId"]),T=(0,i.s0)(),$=(0,n.useCallback)((()=>{u(!0)}),[]),k=(0,n.useCallback)((()=>{const e=t?.filter((e=>"playing"!==e.state&&!1===e.isSecure&&e.currentUserCount<e.maxUserCount));if(0===e.length)u(!0);else{const r=e[Math.floor(Math.random()*e.length)];(0,f.Ls)({roomId:r.id,password:""},(()=>{(0,f.tA)((e=>{d(e),P("userId",e.userList[e.userList.length-1].userId,{path:"/"}),l((r=>({userId:e.userList[e.userList.length-1].userId,...r}))),T(`/game/${e.roomNumber.toString()}`)}))}),(e=>{})),(0,f.s5)((e=>{console.log(e)}))}}),[t]),A={[b.CREATE]:$,[b.ENTER]:k};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Z,{as:"button",row:"center",col:"center",type:r,bgColor:y[r],color:w[r],onClick:A[r]||a,hasOnClick:!!A[r]||a,children:["ranking"===r&&(0,m.jsx)(C,{icon:p.kWN}),(0,m.jsx)(I,{children:e})]}),c?(0,m.jsx)(h.Z,{type:j[r].type,isOpen:c,setIsOpen:u,height:j[r]?.height,children:j[r].message}):null]})};T.propTypes={children:d().string,type:d().oneOf(Object.values(b)),rooms:d().array,onClick:d().func,isModalOpen:d().bool,setIsModalOpen:d().func}},9490:(e,r,t)=>{t.r(r),t.d(r,{default:()=>Se});var n=t(4519),o=t(2674),s=t(2322),i=t(6628),a=t(47),d=t(3686),l=t(5023),c=t(2344),p=t(1386),u=t.n(p),h=t(5002),x=t(3606),g=t(7590),f=t(3640),m=t(2556);const b=({isHost:e,roomId:r,setIsPlaying:t})=>{const[o,a]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[p,u]=(0,n.useState)(!1),[b,y]=(0,n.useState)(!1),w=(0,s.Zl)(x.WV),[j,Z]=(0,s.FV)(i.ls);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(l.$3,{spacingX:"5px",children:[(0,m.jsx)(g.L,{bgColor:"#f3f3f3",children:"\ub300\uae30\uc2e4"}),e?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g.L,{bgColor:"#cdeba1",onClick:()=>{j.length<2?(a("alert"),c("2\uba85 \uc774\uc0c1\uc758 \ud50c\ub808\uc774\uc5b4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),u(!0)):(0,h.Jf)()},children:"\uc2dc\uc791"}),(0,m.jsx)(g.L,{bgColor:"#FFC67F",onClick:()=>{w(r),a("room"),u(!0)},children:"\ubc29 \uc124\uc815"})]}):(0,m.jsx)(g.O,{type:b?"ready":"wait",onClick:()=>{(0,h.Gr)(!b,(e=>{const{index:r,state:t}=e;y(t),Z((e=>e?.map(((e,n)=>n===r?{...e,isReady:t}:e))))}))},children:b?"\ub300\uae30":"\uc900\ube44"})]}),p?(0,m.jsx)(f.Z,{type:o,isOpen:p,setIsOpen:u,roomId:r,height:"alert"===o&&"14rem",children:d}):null]})};b.propTypes={isHost:u().bool,isReady:u().bool,setIsReady:u().func,roomId:u().string,setIsPlaying:u().func};const y=b;var w=t(5655),j=t(5381);const Z=(0,w.ZP)(j.h)`
  & > * + * {
    margin-left: 5px;
  }
`,C=()=>(0,m.jsx)(Z,{children:(0,m.jsx)(g.O,{type:"playing",children:"\uac8c\uc784\uc911"})});var I=t(1085),P=t(9421),T=t(2870),$=t(8987),k=t(3908),A=t(9892),v=t(12);const E=(0,w.ZP)(j.h)`
  height: 11.5rem;
  background-image: ${({type:e})=>"host"===e?"linear-gradient(0deg, #fbdb94, transparent)":"ready"===e?"linear-gradient(0deg, rgb(157 171 136), rgba(239, 255, 215, 0.37))":"linear-gradient(0deg, rgb(217 217 217), transparent)"};
  border: 2px solid rgb(107 107 107 / 26%);
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }
`,S=(0,w.ZP)(j.h)`
  position: ${({position:e})=>e};
  margin: ${({margin:e})=>e||"10px 14px"};
  padding: ${({padding:e})=>e};
  border: ${({border:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
`,F=w.ZP.span`
  font-size: 19px;
  font-weight: 800;
  color: ${({type:e})=>"host"===e?"#E15030":"ready"===e?"#708355":"inherit"};
`,R=()=>{const e=(0,s.sJ)(i.ls),[r]=(0,k.Z)(["userId"]),[t,o]=(0,n.useState)(null),[a,d]=(0,n.useState)("profile"),[l,c]=(0,n.useState)(!1);return(0,m.jsxs)(P.Z,{items:"4",gap:"10px",margin:"10px 4px 6px",children:[e?.map(((e,t)=>(0,m.jsxs)(E,{type:e.isHost?"host":e.isReady?"ready":"wait",row:"between",onClick:()=>(e=>{d("profile"),o(e),c(!0)})(e.userId),children:[r&&r.userId===e.userId&&(0,m.jsx)(S,{position:"absolute",margin:"8px 5px",padding:"4px",border:"1px solid #522",borderRadius:"50%",children:(0,m.jsx)(A.G,{icon:v.Tab,style:{fontSize:"12px",color:"#522"}})}),(0,m.jsx)(T.Z,{avatarUrl:$,nickname:e.nickname,level:e.level}),(0,m.jsx)(S,{dir:"col",row:"start",children:(0,m.jsx)(F,{type:e.isHost?"host":e.isReady?"ready":"wait",children:e.isHost?"\ubc29\uc7a5":e.isReady?"\uc900\ube44":"\ub300\uae30"})})]},e.userId))),l&&(0,m.jsx)(f.Z,{type:a,setType:d,isOpen:l,setIsOpen:c,userId:t})]})};var D=t(2695);const z=(0,s.cn)({key:"randomWordState",default:""}),O=(0,s.cn)({key:"initialCharacterState",default:""}),W=(0,s.cn)({key:"currentRoundState",default:0}),U=(0,s.cn)({key:"turnCountState",default:0}),L=(0,s.cn)({key:"isMyTurnState",default:!1}),V=(0,s.cn)({key:"thisTurnLeftTimeState",default:0}),M=(0,s.cn)({key:"thisRoundLeftTimeState",default:0}),X=((0,s.nZ)({key:"myTurnPlayerIndexState",get:e=>{let{get:r}=e;return r(i.XI).findIndex((e=>!0===e.myTurn))}}),(0,s.cn)({key:"isWordFailState",default:!1})),G=(0,s.cn)({key:"currentPointsState",default:0}),B=(0,s.cn)({key:"balloonMessageState",default:null});var N=t(9673),Y=t(8414);const H=({isPlaying:e,size:r="default"})=>{const[t,o]=(0,n.useState)(""),i=(0,s.Zl)(B),[a,d]=(0,n.useState)([]),l=(0,n.useRef)(null),c=(0,n.useRef)();(0,n.useRef)(null);(0,n.useEffect)((()=>{(0,h.QM)((async r=>{l.current.scrollHeight-l.current.scrollTop!==l.current.clientHeight||(l.current.scrollTop=l.current.scrollHeight);const{userId:t,message:n}=r,o=await u(t);d((e=>[...e,{nickname:o,message:n}])),e&&i({userId:t,message:n})}))}),[]),(0,n.useEffect)((()=>{l.current&&(l.current.scrollTop=l.current.scrollHeight)}),[a]);const p=e=>{e.preventDefault(),t&&((0,h.bG)(t),o(""),c.current.focus())},u=async e=>(await(0,Y.Yt)(e)).nickname;return(0,m.jsxs)(J,{dir:"col",size:r,children:[(0,m.jsxs)(K,{size:r,children:[(0,m.jsx)(q,{icon:v.Mzg}),"\ucc44\ud305"]}),(0,m.jsx)(Q,{dir:"col",ref:l,children:a?.map(((e,r)=>(0,m.jsx)(N.Z,{nickname:e.nickname,message:e.message},r)))}),(0,m.jsxs)(_,{row:"between",children:[(0,m.jsx)(ee,{type:"text",value:t,onChange:e=>o(e.target.value),onKeyDown:e=>{"Enter"===e.key&&p(e)},ref:c}),(0,m.jsx)(re,{col:"center",row:"center",onClick:p,children:"\uc804\uc1a1"})]})]})};H.propTypes={isPlaying:u().bool,size:u().string};const J=(0,w.ZP)(j.Z)`
  width: ${({size:e})=>"big"===e?"100%":"57rem"};
  height: 12.25rem;
  background-color: #eee;
  padding: 6px 4px;
`,K=w.ZP.div`
  width: ${({size:e})=>"big"===e?"calc(100% - 8px)":"auto"};
  height: 20px;
  margin: 0 5px;
  padding-left: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
  background-color: #dddddd;
  opacity: 0.8;
  color: #000000cc;
  font-size: ${({theme:e})=>e.fontSize.xxxxs};
  font-weight: 700;
`,q=(0,w.ZP)(A.G)`
  margin-right: 4px;
`,Q=(0,w.ZP)(j.Z)`
  flex-basis: 65%;
  flex-grow: 1;
  margin: 2px 12px;
  overflow-y: auto;
`,_=(0,w.ZP)(j.Z)`
  position: relative;
  height: 36px;
  border: 1px solid #888;
  border-radius: 10px;
  margin: 0 10px;
`,ee=w.ZP.input`
  width: 100%;
  border: 0;
  border-radius: 10px 0 0 10px;
  padding: 0 10px;
  font-size: 16px;
`,re=(0,w.ZP)(j.Z).attrs({as:"button"})`
  width: 4.625rem;
  font-size: 15px;
  font-weight: 700;
  color: #5590e0;
  border-radius: 0 10px 10px 0;
`,te=H,ne=({roomInfo:e})=>(0,m.jsxs)(l.ef,{dir:"col",children:[(0,m.jsxs)(l.DI,{dir:"col",type:"wait",children:[(0,m.jsx)(I.Z,{type:"room",info:e}),(0,m.jsx)(R,{})]}),(0,m.jsxs)(l.im,{children:[(0,m.jsx)(D.Z,{}),(0,m.jsx)(te,{isPlaying:"playing"===e?.state})]})]});ne.propTypes={roomInfo:u().object};const oe=ne;var se=t(3552);const ie=({type:e,totalTime:r})=>{const[t,o]=(0,n.useState)(r/10),[i,a]=(0,s.FV)(V),[d,l]=(0,s.FV)(M),[c,p]=(0,n.useState)(0),u=(0,n.useRef)(0);(0,n.useEffect)((()=>{(0,h.rU)((e=>{const{personalTimeLimit:r,personalTimeLeft:t,roundTimeLeft:n}=e;t<0?a(0):n<0&&l(0),o(r),a(t),l(n)}))}),[]),(0,n.useEffect)((()=>{const n="turn"===e?i:d;p(n>0?n/("turn"===e?t:r)*100:0),u.current=Math.round(n/100)/10}),[t,i,d]);const x=(e,r)=>{switch(e){case"turn":return"outer"===r?"#70712d":"#E6E846";case"round":return"outer"===r?"#223c6c":"#3573E4"}},g=n.useMemo((()=>x(e,"outer")),[e]),f=n.useMemo((()=>x(e,"inner")),[e]);return(0,m.jsx)(ae,{bgColor:g,children:(0,m.jsx)(de,{width:c,bgColor:f,row:"end",col:"center",children:(0,m.jsx)(le,{children:`${u.current}\ucd08`})})})};ie.propTypes={type:u().oneOf(["turn","round"]),totalTime:u().number};const ae=w.ZP.div`
  width: 100%;
  height: 1.5rem;
  background-color: ${({bgColor:e})=>e};
`,de=(0,w.ZP)(j.h)`
  width: ${({width:e})=>e}%;
  height: 100%;
  padding: 5px;
  background-color: ${({bgColor:e})=>e};
  border: 1px solid #00000080;
`,le=w.ZP.span`
  font-weight: 900;
  color: #fff;
  text-shadow: 1px 0px 3px #7e7e7e;
`,ce=ie,pe=({roundCount:e,roundTime:r})=>{const t=(0,s.sJ)(z),o=(0,s.sJ)(O),a=(0,s.sJ)(L),d=(0,s.sJ)(X),l=(0,s.sJ)(V),[c,p]=(0,s.FV)(W),[u,x]=(0,n.useState)(""),[g,f]=(0,s.FV)(i.XI),[b,y]=(0,s.FV)(i.fg),w=(0,s.Zl)(i.gs);(0,n.useEffect)((()=>{w((e=>e?.map((e=>b.myTurn?b:e))))}),[b]);return(0,m.jsxs)(ue,{dir:"col",col:"center",children:[(0,m.jsx)(he,{row:"center",col:"center",children:t?.split("").map(((e,r)=>(0,m.jsx)(xe,{type:r===c&&"this",children:e},r)))}),(0,m.jsxs)(ge,{dir:"col",row:"center",col:"center",children:[(0,m.jsx)(fe,{row:"center",col:"center",children:d?(0,m.jsx)(be,{children:o}):(0,m.jsx)(me,{children:o})}),(0,m.jsx)(ce,{type:"turn",totalTime:r}),(0,m.jsx)(ce,{type:"round",totalTime:r})]}),a&&(0,m.jsx)(ye,{children:(0,m.jsx)(se.v2,{type:"text",placeholder:"\ub2f9\uc2e0\uc758 \ucc28\ub840! \uc544\ub798 \ucc44\ud305\ucc3d\uc5d0\uc11c \ub2e8\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694!",bgColor:"#fff",fontSize:"18px",value:u,onChange:e=>x(e.target.value),onKeyDown:async e=>{"Enter"===e.key&&(x(""),!u.startsWith(t?.split("")[c])&&l<=0||(0,h.bG)(u))}})})]})};pe.propTypes={roundCount:u().number,roundTime:u().number};const ue=(0,w.ZP)(j.h)`
  height: fit-content;
  min-height: 12.5rem;
`,he=(0,w.ZP)(j.h)`
  margin: 10px 0 6px;

  & > * + * {
    margin-left: 4px;
  }
`,xe=w.ZP.span`
  font-size: ${({type:e})=>"this"===e?"22px":"19px"};
  font-weight: 700;
  color: ${({type:e})=>"this"===e?"#DFD943":"#fff"};
`,ge=(0,w.ZP)(j.h)`
  width: 40.25rem;
  background-color: #f3c264;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  padding: 5px;
`,fe=(0,w.ZP)(j.h)`
  width: 100%;
  height: 3.75rem;
  background-color: #413014;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`,me=w.ZP.span`
  margin-left: 12px;
  font-family: "Pretendard Variable";
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 12px;
  color: #fff;
`,be=w.ZP.span`
  font-family: "Pretendard Variable";
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 12px;
  color: ${({theme:e})=>e.colors.error};
  text-decoration: line-through;
  animation: ${a.lt} 0.5s step-end;
`,ye=(0,w.ZP)(j.h)`
  position: absolute;
  top: 40%;
  width: 40.25rem;
  padding: 4px;
  background-color: #000000cc;
  z-index: 9;
`,we=pe,je=()=>{const[e,r]=(0,n.useState)(null),[t,o]=(0,s.FV)(G),[a,d]=(0,s.FV)(i.fg),[c,p]=(0,s.FV)(i.XI);return(0,n.useEffect)((()=>{if(0!==t){t>0?r("score"):t<0&&r("penalty");const e=setTimeout((()=>{o(0)}),1500);if(a.myTurn){const e={...a,score:a.score+t};d(e);const r=c?.map((r=>r.id===a.id?e:r));p(r)}return()=>clearTimeout(e)}}),[t]),(0,m.jsx)(l.im,{position:"absolute",top:"score"===e&&"-12px",right:"score"===e&&"-10px",bottom:"penalty"===e&&"13px",left:"penalty"===e&&"15px",type:e,children:(0,m.jsx)(Ce,{type:e,children:0!==t&&("score"===e?`+${t}`:`${t}`)})})},Ze=({children:e})=>(0,m.jsx)(l.im,{row:"center",col:"center",maxWidth:"100%",height:"34px",margin:"5px 0 0",children:(0,m.jsx)(Ie,{children:e})});Ze.propTypes={children:u().string};const Ce=w.ZP.span`
  font-size: 40px;
  font-weight: 700;
  color: ${({type:e})=>"score"===e?"#1F4DE9":"#FF6666"};
  text-shadow: ${({type:e})=>"score"===e?"-1px 0 #4670FC, 0 1px #4670FC, 1px 0 #4670FC, 0 -1px #4670FC":"-1px 0 #923838, 0 1px #923838, 1px 0 #923838, 0 -1px #923838"};
`,Ie=w.ZP.span`
  font-family: "Pretendard Variable";
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0;
`,Pe=({defeatedPlayerIndex:e})=>{const r=(0,s.sJ)(i.XI),t=(0,s.sJ)(B),[o,a]=(0,n.useState)(!1),[d,l]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{if(null!==e){const t=r.map(((r,t)=>t===e));a(t);const n=setTimeout((()=>{a(t.fill(!1))}),1e3);return()=>clearTimeout(n)}}),[e]),(0,n.useEffect)((()=>{if(null!==t){l(!0);const e=setTimeout((()=>{l(!1)}),3e3);return()=>clearTimeout(e)}}),[t]),(0,m.jsx)(P.Z,{items:"8",gap:"10px",flow:"col",row:"between",col:"center",margin:"5px 10px",children:r?.map(((e,r)=>(0,m.jsxs)(Te,{dir:"col",col:"center",myTurn:e.myTurn,defeated:o[r],children:[d&&t.userId===e.id&&(0,m.jsx)(ke,{children:(0,m.jsx)("span",{children:t.message})}),(0,m.jsx)(T.Z,{type:"play",avatarUrl:$,nickname:e.nickname,level:e.level}),e.myTurn&&(0,m.jsx)(je,{}),(0,m.jsx)(Ze,{children:String(e?.score).padStart(5,"0")})]},e.id)))})};Pe.propTypes={defeatedPlayerIndex:u().number};const Te=(0,w.ZP)(j.h)`
  position: relative;
  width: 8.3rem;
  height: 12rem;
  padding: 12px 10px;
  background-color: ${({myTurn:e,defeated:r})=>r?"#f0f0f0":e?"#DDFFDD":"#f0f0f0"};
  border: ${({myTurn:e,defeated:r})=>r?"3px solid #FF6C6C":e&&"2px solid #57F857"};
  border-radius: 7px;
  transform: ${({myTurn:e})=>e&&"translateY(-15px)"};
`,$e=w.F4`
  0% { opacity: 1; }
  100% { opacity: 0; }
`,ke=w.ZP.div`
  position: absolute;
  top: -29px;
  width: 133px;
  height: 34px;
  background-color: #fff;
  border: 1px solid #a3a3a3;
  border-radius: 9px;
  padding: 3px 5px;
  animation: ${$e} 3s linear;

  &::before,
  &::after {
    position: absolute;
    content: "";
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  &::before {
    top: 32px;
    left: 42%;
    border-top: 11px solid #a3a3a3;
  }

  &::after {
    top: 31px;
    left: 42%;
    border-top: 10px solid #fff;
  }
`,Ae=Pe,ve=({roomInfo:e,setIsPlaying:r})=>{const[t,o]=(0,s.FV)(i.fg),[a,d]=(0,s.FV)(i.XI),[c,p]=(0,s.FV)(z),u=(0,s.Zl)(O),x=(0,s.Zl)(L),g=(0,s.Zl)(W),b=(0,s.Zl)(U),y=(0,s.Zl)(X),w=(0,s.Zl)(G),[j,Z]=(0,n.useState)(!1),[C,P]=(0,n.useState)(!1),[T,$]=(0,n.useState)(null),[A,v]=(0,n.useState)([]),[E,S]=(0,n.useState)("error"),[F,R]=(0,n.useState)(null),[D,V]=(0,n.useState)(!1),[M]=(0,k.Z)(["userId"]),B=(0,n.useRef)(!1);(0,n.useEffect)((()=>{e?.roomOwnerUserId!==M.userId||B.current||(0,h.ey)(),(0,h.Hk)((e=>{if(0===e.currentRound){const r=e.usersSequence.map(((r,t)=>({id:r.userId,score:r.score,myTurn:t===e.currentTurnUserIndex,...r})));d(r),c||p(e.roundWord)}u(e.wordStartsWith),g(e.currentRound),x(e.currentTurnUserId===M.userId),e.currentRound+1===e.maxRound&&(B.current=!0),C||P(!1),e.currentTurnUserId===M.userId&&(0,h.mi)()})),(0,h.$S)((e=>{b(e.turnElapsed),null!==T&&$(null)}),(e=>{S("error"),R(e),V(!0)})),(0,h.mj)((e=>{y(!0),u(e);const r=setTimeout((()=>{u((e=>e[0])),y(!1)}),1e3);v([r])})),(0,h.ef)((e=>{const{word:r,userIndex:t,scoreDelta:n}=e,s=r[r.length-1],i=r.split("").slice(1);i.forEach(((e,r)=>{const t=setTimeout((()=>{u((r=>r+e))}),500*(r+1));A.push(t)})),w(n),o((e=>({...e,score:e.score+n}))),d((e=>{const r=[...e];let o={...r[t]};return o.score+=n,r[t]=o,r}));const a=setTimeout((()=>{u(s)}),750*i?.length);A.push(a),v(A),N()})),(0,h.op)((()=>{})),(0,h.Io)((e=>{const{defeatedUserIndex:r,scoreDelta:t}=e,n=a[r],o=a.findIndex((e=>e.myTurn));n&&r===o&&(P(!0),$(r),w(t),d((e=>{const n=[...e];let o={...n[r]};return o.score=Math.max(0,o.score+t),n[r]=o,n})),B.current||(0,h.ey)())})),(0,h.nL)((e=>{B.current=!0,S("result"),R(e),V(!0)}))}),[a]),(0,n.useEffect)((()=>{a&&0!==a?.length&&!j&&(async()=>(await Promise.all(a.map((async e=>{const r=await(0,Y.Yt)(e.id);return r||console.error(`Cannot get user info by userId: ${e.id}`),{...e,...r}})))).filter(Boolean))().then((e=>{d(e),Z(!0)}))}),[a,j]),(0,n.useEffect)((()=>()=>{A?.forEach((e=>clearTimeout(e)))}),[A]);const N=()=>{const e=a.findIndex((e=>e.myTurn)),r=(e+1)%a.length;d((t=>t.map(((t,n)=>n===e?{...t,myTurn:!1}:n===r?{...t,myTurn:!0}:t)))),x(a[r].id===M.userId),C||(0,h.mi)()};return(0,m.jsxs)(l.ef,{dir:"col",children:[D&&(0,m.jsx)(f.Z,{type:E,isOpen:D,setIsOpen:V,setIsPlaying:r,children:F}),(0,m.jsxs)(l.DI,{dir:"col",type:"play",children:[(0,m.jsx)(I.Z,{type:"room",info:e}),(0,m.jsx)(we,{roundCount:e?.maxRound,roundTime:e?.roundTimeLimit}),(0,m.jsx)(Ae,{defeatedPlayerIndex:T})]}),(0,m.jsx)(l.im,{children:(0,m.jsx)(te,{size:"big"})})]})};ve.propTypes={roomInfo:u().object,setIsPlaying:u().func};const Ee=ve,Se=()=>{const e=(0,s.sJ)(i.E),[r,t]=(0,s.FV)(x.NX),[p,u]=(0,s.FV)(i.ls),[g,b]=(0,s.FV)(i.XI),w=(0,s.Zl)(W),j=(0,s.Zl)(z),[Z,I]=((0,s.Zl)(O),(0,n.useState)(!1)),[P,T]=(0,n.useState)(null),[$,k]=(0,n.useState)(null),[A,v]=(0,n.useState)(!1),[E,S]=(0,n.useState)(!1);let F=null;const{roomId:R}=(0,o.UO)();(0,n.useEffect)((()=>{u(r?.userList),I("playing"===r?.state),(0,h.F_)((e=>{t(e)})),(0,h.s5)((e=>{D(e)})),(0,h.QA)((e=>{const{index:r,state:t}=e;u((e=>e?.map(((e,n)=>n===r?{...e,isReady:t}:e))))})),(0,h.I_)((e=>{const{userList:r,currentUserCount:n}=e;t((e=>({...e,currentUserCount:n}))),S(!1),u((e=>e.filter((e=>r.some((({userId:r})=>r===e.userId)))))),null!==F&&(u((e=>{const r=e.map(((e,r)=>({...e,isHost:r===F})));return r})),F=null)})),(0,h.PB)((e=>{F=e})),(0,h.DX)((e=>{w(e.currentRound),j(e.roundWord),I(!0)}),(e=>{T("alert"),k(e),v(!0)}))}),[]),(0,n.useEffect)((()=>{Z||(S(!1),(0,h.hK)((e=>{t(e),u(e.userList)}),(e=>{T("alert"),k(e),v(!0)})))}),[Z]),(0,n.useEffect)((()=>{if(p&&0!==p?.length&&!E){const e=async()=>{const e=await Promise.all(p.map((async(e,t)=>{const n=await(0,Y.Yt)(e.userId),o=r.roomOwnerUserId===e.userId;return{...e,isHost:o,...n}})));u(e),S(!0)};e()}}),[p]);const D=async e=>{const r=await(0,Y.Yt)(e);return u((t=>t.some((r=>r.userId===e))?t:[...t,{userId:e,isHost:!1,isReady:!1,...r}]))};return(0,m.jsxs)(a.vs,{row:"center",col:"center",children:[A&&(0,m.jsx)(f.Z,{type:P,isOpen:A,setIsOpen:v,setIsDataFetched:S,height:"14.5rem",children:$}),(0,m.jsxs)(a.J7,{dir:"col",children:[(0,m.jsx)(d.Z,{}),(0,m.jsx)(a.or,{children:(0,m.jsx)(a.xu,{bgColor:Z&&"#000",children:(0,m.jsxs)(l._U,{dir:"col",children:[(0,m.jsxs)(l.im,{row:"between",col:"end",children:[Z?(0,m.jsx)(C,{}):(0,m.jsx)(y,{isHost:p?.find((r=>r.userId===e?.userId))?.isHost,roomId:r?.id,setIsPlaying:I}),(0,m.jsxs)("div",{children:[(0,m.jsx)(c.z,{type:"help"}),(0,m.jsx)(c.z,{type:"setting"}),(0,m.jsx)(c.z,{type:"exit",location:Z?"playing":"waiting"})]})]}),Z?(0,m.jsx)(Ee,{roomInfo:r,setIsPlaying:I}):(0,m.jsx)(oe,{roomInfo:r})]})})})]})]})}},47:(e,r,t)=>{t.d(r,{J7:()=>l,VR:()=>c,ZQ:()=>a,lt:()=>i,or:()=>p,vs:()=>d,xu:()=>u});var n=t(5655),o=t(5381);const s=n.F4`
  from { opacity: 0;}
  to {opacity: 1;}
`,i=n.F4`
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
`),d=(0,n.ZP)(o.h)`
  animation: ${s} 0.5s ease-in-out;
`,l=(0,n.ZP)(o.h)`
  width: ${e=>e.width||"75rem"};
  height: 100vh;
`,c=(0,n.ZP)(o.h)`
  width: 36.75rem; // 기존 40.75rem
  height: ${e=>e.height||"fit-content"};
`,p=n.ZP.main`
  width: 100%;
  margin-top: ${({type:e})=>"big"===e?"10rem":"admin"!==e?"7.5rem":"6.5rem"};
`,u=(0,n.ZP)(o.h)`
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
  grid-template-columns: ${({cols:e,items:r,size:t})=>e?o(e):r?s(r,t):"1fr"};
  grid-template-rows: ${({rows:e})=>i(e)};
  grid-gap: ${({gap:e})=>a(e)};
  grid-auto-flow: ${({flow:e})=>d(e)};
  margin: ${({margin:e})=>e||"0"};
  padding: ${({padding:e})=>e||"0"};
  justify-content: ${({row:e})=>l(e)};
  align-items: ${({col:e})=>c(e)};
`,o=e=>e,s=(e,r="1fr")=>`repeat(${e}, ${r})`,i=e=>e||"auto",a=e=>e||"0",d=e=>"col"===e?"column":"row",l=e=>{switch(e){case"center":return"center";case"start":default:return"flex-start";case"end":return"flex-end";case"between":return"space-between";case"around":return"space-around";case"evenly":return"space-evenly"}},c=e=>{switch(e){case"center":return"center";case"start":return"flex-start";case"end":return"flex-end";case"baseline":return"baseline";default:return"stretch"}},p=n}}]);
//# sourceMappingURL=490.4047b5cf.chunk.js.map