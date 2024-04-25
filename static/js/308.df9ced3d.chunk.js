"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[308],{5023:(e,t,r)=>{r.d(t,{$3:()=>l,DI:()=>p,Dr:()=>m,Fg:()=>x,YU:()=>d,_U:()=>s,ef:()=>g,im:()=>c,or:()=>a,xu:()=>h});var i=r(1843),n=r(5655),o=r(5381);const d=(0,n.ZP)(o.h)`
  width: 16.5rem;
  height: 100%;
`,s=(0,n.ZP)(o.h)`
  max-width: 100%;
  flex-grow: 1;
`,h=n.ZP.div`
  width: ${({type:e})=>"home"===e?"28rem":"40.5rem"};
  height: ${({type:e})=>"home"===e?"43.6rem":"49.6rem"};
  padding: 10px 22px;
  background-color: #fff;
  border-radius: ${({type:e})=>"home"===e?"25px":"10px"};
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25);
  overflow-y: ${({overflowY:e})=>e};
`,a=n.ZP.main`
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
`,c=(0,n.ZP)(o.h)`
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
`,l=(0,n.ZP)(o.h)`
  & > * + * {
    margin-top: ${({spacingY:e})=>e&&e};
    margin-left: ${({spacingX:e})=>e&&e};
  }
`,g=(0,n.ZP)(o.h)`
  width: 100%;
  height: 100%;
  border: 1px solid #7d7d7d;
`,p=(0,n.ZP)(o.h)`
  height: 100%;
  max-height: 26.65rem;
  padding: 3px 5px;
  background-color: ${({type:e})=>"play"===e?"#889E7D":"#f3f3f3"};
`,m=n.ZP.span`
  margin: ${({margin:e})=>e||"0"};
  font-family: ${({font:e})=>e||"Gugi"};
  font-size: ${({fontSize:e})=>e||"21px"};
  font-weight: ${({fontWeight:e})=>e||"normal"};
  color: ${({color:e})=>e||"inherit"};
`,x=(0,n.ZP)(i.rU)`
  width: ${({width:e})=>e};
`},5971:(e,t,r)=>{r.d(t,{Z:()=>f});var i=r(4519),n=r(3908),o=r(2322),d=r(1386),s=r.n(d),h=r(5655),a=r(3426),c=r(6638),l=r(5381),g=r(3461),p=r(2556);const m=({isActive:e,setIsActive:t})=>{const r=(0,o.sJ)(c.QC),d=(0,o.Zl)(c.T0),[s,h]=(0,i.useState)(!1),[l,m]=(0,i.useState)(null),{response:f,error:$,loading:w,fetchData:b}=(0,a.Z)(l,!1),[j]=(0,n.Z)(["sessionId"]);(0,i.useEffect)((()=>{null!==l&&b()}),[l]),(0,i.useEffect)((()=>{null!==f&&(t(!e),d({method:"get",url:"/user/search",headers:{sessionId:j.sessionId}}),h(!1))}),[f]);return(0,p.jsxs)(p.Fragment,{children:[s&&(0,p.jsx)(g.Z,{isBan:e,hasButton:!e,onClick:(t,i)=>{m(e?{method:"put",url:"/ban",headers:{sessionId:j.sessionId},data:{userId:r,bannedDays:t,bannedReason:i}}:{method:"put",url:"/ban",headers:{sessionId:j.sessionId},data:{userId:r,bannedDays:0,bannedReason:"reactivate account"}})},setIsOpen:h,children:!e&&"\uacc4\uc815\uc744 \ud65c\uc131\ud654\uc2dc\ud0a4\uaca0\uc2b5\ub2c8\uae4c?"}),(0,p.jsx)(x,{col:"center",row:e?"end":"start",active:e,onClick:()=>h(!0),children:(0,p.jsx)(u,{})})]})};m.propTypes={isActive:s().bool,setIsActive:s().func};const x=(0,h.ZP)(l.h)`
  width: 64px;
  height: 36px;
  background-color: ${({active:e})=>e?"#fff":"#D9D9D9"};
  border: 3px solid ${({active:e})=>e?"#34E250":"#787878"};
  border-radius: 40px;

  &:hover {
    cursor: pointer;
  }

  & > div {
    background-color: ${({active:e})=>e?"#34E250":"#787878"};
    margin-left: ${({active:e})=>!e&&"3px"};
    margin-right: ${({active:e})=>e&&"3px"};
  }
`,u=h.ZP.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`,f=m},5913:(e,t,r)=>{r.d(t,{Z:()=>Z});var i=r(4519),n=r(2322),o=r(1386),d=r.n(o),s=r(5655),h=r(5971),a=r(6638),c=r(2556);const l=({isHome:e,title:t,data:r=[],onSideOpen:o})=>{const[d,s]=(0,n.FV)(a.SL),l=(0,n.Zl)(a.QC),[w,Z]=(0,i.useState)([]),P=e=>{switch(e){case"notice":return"\uacf5\uc9c0\uc0ac\ud56d";case"inquiry":return"\ubb38\uc758";case"report":return"\uc2e0\uace0";case"user":return"\uc0ac\uc6a9\uc790 \uad00\ub9ac"}},y=e=>{if("inquiry"===t)switch(e){case 0:return"\ubc84\uadf8\ubb38\uc758";case 1:return"\uacc4\uc815\ubb38\uc758";case 2:return"\uc11c\ube44\uc2a4\ubb38\uc758";case 5:return"\ub2e8\uc5b4\ucd94\uac00\ubb38\uc758";case 99:return"\uae30\ud0c0\ubb38\uc758";default:return"\uae30\ud0c0"}};return(0,i.useEffect)((()=>{r.length>0&&Z((r=>r&&0!==r.length?Object.keys(r[0])?.filter((e=>"id"!==e))?.map(((r,i)=>{switch(r){case"type":return(0,c.jsx)(u,{width:"6.5rem",children:`${P(t)} \uc720\ud615`},i);case"reporteeNickname":return(0,c.jsx)(x,{children:"\ud53c\uc2e0\uace0\uc790"},i);case"types":return(0,c.jsx)(u,{width:e?"9.5rem":"10.5rem",children:`${P(t)} \uc0ac\uc720`},i);case"reporterNickname":return(0,c.jsx)(x,{children:"\uc2e0\uace0\uc790"},i);case"title":return(0,c.jsx)(u,{children:"notice"!==t?`${P(t)} \uc81c\ubaa9`:"\uc81c\ubaa9"},i);case"createdAt":return(0,c.jsx)(x,{width:"7rem",children:"report"===t?"\uc2e0\uace0\uc77c":"\uc791\uc131\uc77c"},i);case"created_at":return(0,c.jsx)(x,{width:"7rem",children:"\uc791\uc131\uc77c"},i);case"isHandled":return(0,c.jsx)(x,{width:"3.3rem",children:"\ucc98\ub9ac \uc5ec\ubd80"},i);case"author":return(0,c.jsx)(x,{children:"\uc791\uc131\uc790"},i);case"views":return(0,c.jsx)(x,{width:"5.5rem",children:"\uc870\ud68c\uc218"},i);case"nickname":return(0,c.jsx)(x,{width:"user"===t&&"6rem",children:"\ub2c9\ub124\uc784"},i);case"username":return(0,c.jsx)(x,{width:"user"===t&&"4.5rem",children:"\uc544\uc774\ub514"},i);case"needAnswer":return(0,c.jsx)(x,{width:"5.5rem",children:"\ub2f5\ubcc0 \uc5ec\ubd80"},i);case"isBanned":return(0,c.jsx)(x,{width:"3.2rem",children:"\ud65c\uc131\ud654 \uc5ec\ubd80"},i);default:return(0,c.jsx)(x,{children:"Field"},i)}})):[])(r))}),[r]),(0,c.jsx)(g,{title:t,children:(0,c.jsxs)(p,{title:t,isHome:e,children:[(0,c.jsx)("thead",{children:(0,c.jsx)(m,{fontSize:e?"18px":"20px",children:w})}),(0,c.jsx)(f,{children:0===r.length?(0,c.jsx)("tr",{children:(0,c.jsx)("td",{children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}):r?.map((r=>(0,c.jsx)($,{fontSize:"18px",onClick:()=>{l(r.id),o(r.id),s(r.id)},isSelected:r.id===d,children:Object.entries(r)?.filter((([e])=>"id"!==e))?.map((([r,n])=>"type"===r?(0,c.jsx)(i.Fragment,{children:"report"===t?(0,c.jsx)(b,{children:n},r):(0,c.jsx)(j,{fontSize:"15px",children:y(n)},r)},r):"types"===r?(0,c.jsx)(b,{children:[...Object.entries(n).filter((([e,t])=>!0===t)).map((([e,t])=>("isOffensive"===e?"\uacf5\uaca9\uc801\uc778 \uc5b8\uc5b4 \uc0ac\uc6a9":"isCheating"===e&&"\uc0ac\uae30 \ud589\uc704")||"isPoorManner"===e&&"\ube44\ub9e4\ub108 \ud589\uc704")),n.note&&`\uae30\ud0c0: ${n.note}`].join(", ")},r):"title"===r?(0,c.jsx)(b,{children:n},r):"createdAt"===r?(0,c.jsx)(j,{children:"report"===t?n.substr(2,8):n.substr(0,10)},r):"created_at"===r?(0,c.jsx)(j,{children:n.substr(0,10)},r):"isHandled"===r?(0,c.jsx)(j,{children:n?"YES":"NO"},r):"username"===r||"nickname"===r?(0,c.jsx)(b,{children:n},r):"isBanned"===r?(0,c.jsx)(j,{paddingLeft:e?"1rem":"2rem",children:(0,c.jsx)(h.Z,{isActive:!n})},r):"needAnswer"===r?(0,c.jsx)(j,{style:{color:n?"#FF6C6C":"#32250F",fontWeight:"700"},children:n?"NO":"YES"},r):(0,c.jsx)(j,{children:n},r)))},r.id)))})]})})};l.propTypes={isHome:d().bool,title:d().string,data:d().array,onSideOpen:d().func,isAnswerCompleted:d().object};const g=s.ZP.div`
  height: 36.7rem;
  width: 100%;
  max-width: 100%;
`,p=s.ZP.table`
  table-layout: fixed;
  width: 100%;
`,m=s.ZP.tr`
  width: 100%;
  height: 3.2rem;
  display: table-row;
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray600};
  font-size: ${({fontSize:e})=>e||"18px"};
`,x=s.ZP.th`
  width: ${({width:e})=>e};
`,u=(0,s.ZP)(x)`
  width: ${({width:e})=>e};
  text-align: left;
  padding-left: 16px;
`,f=s.ZP.tbody`
  font-size: ${({theme:e})=>e.fontSize.xxxs};
`,$=s.ZP.tr`
  height: 3.36rem;
  line-height: 0.75rem;
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray300};
  font-size: ${({fontSize:e})=>e||"16px"};
  background-color: ${({isSelected:e})=>e?"rgba(107, 107, 107, 0.1)":"transparent"};
  font-weight: ${({isSelected:e})=>e?"700":"normal"};

  &:hover {
    cursor: pointer;
    background-color: rgba(107, 107, 107, 0.1);
    font-weight: 700;
  }
`,w=s.ZP.td`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,b=(0,s.ZP)(w)`
  padding-left: 16px;
`,j=(0,s.ZP)(w)`
  padding-left: ${({paddingLeft:e})=>e};
  text-align: center;
  font-size: ${({fontSize:e})=>e};
`,Z=l},2120:(e,t,r)=>{r.d(t,{Z:()=>m});var i=r(1386),n=r.n(i),o=r(5655),d=r(9892),s=r(5381),h=r(12),a=r(2556);const c=({type:e,title:t})=>(0,a.jsx)("a",{href:`/admin/${t}`,children:(0,a.jsxs)(l,{col:"center",children:[(0,a.jsx)(g,{type:e,children:(e=>{switch(e){case"notice":return"\uacf5\uc9c0";case"inquiry":return"\ubb38\uc758";case"report":return"\uc2e0\uace0";case"user":return"\uc0ac\uc6a9\uc790 \uad00\ub9ac"}})(t)}),"home"===e&&(0,a.jsx)(p,{icon:h._tD})]})});c.propTypes={type:n().string,title:n().string};const l=(0,o.ZP)(s.h)`
  height: 4rem;
  padding: 15px 0 4px 0;
  color: #828282;
`,g=o.ZP.h2`
  font-family: "Pretendard Variable";
  font-size: ${({theme:e})=>e.fontSize.xl};
  font-weight: 700;
  width: ${({type:e})=>"home"!==e&&"6.25rem"};
  margin-left: ${({type:e})=>"12px"};
  margin-right: 12px;
  white-space: ${({type:e})=>"home"!==e&&"pre-wrap"};
  color: ${({type:e})=>"home"!==e&&"#000"};
`,p=(0,o.ZP)(d.G)`
  font-size: ${({theme:e})=>e.fontSize.xxs};
`,m=c},7688:(e,t,r)=>{r.d(t,{Z:()=>w});var i=r(1386),n=r.n(i),o=r(5655),d=r(9892),s=r(12),h=r(5381),a=r(2556);const c=({currPage:e=1,setCurrPage:t,lastPageIdx:r=1})=>{const i=10,n=Math.floor((e-1)/i),o=Math.floor((r-1)/i),d=n*i+1,h=n===o&&r%i!==0?r%i:i,c=Array.from({length:h},((e,t)=>d+t));return(0,a.jsxs)(l,{row:"center",col:"center",children:[(0,a.jsx)(p,{icon:s._Wx,onClick:()=>t(1)}),(0,a.jsx)(m,{icon:s.EyR,onClick:()=>t(Math.max(1,d-i))}),(0,a.jsx)(f,{children:c?.map((r=>(0,a.jsx)($,{onClick:()=>t(r),active:e===r,children:r},r)))}),(0,a.jsx)(x,{icon:s.yOZ,onClick:()=>t(Math.min(r,d+i))}),(0,a.jsx)(u,{icon:s.ccb,onClick:()=>t(r)})]})};c.propTypes={currPage:n().number,setCurrPage:n().func,lastPageIdx:n().number};const l=(0,o.ZP)(h.Z)`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`,g=(0,o.ZP)(d.G)`
  margin: 8px;
  font-size: 1rem;
  color: #687587;
  cursor: pointer;
`,p=(0,o.ZP)(g)``,m=(0,o.ZP)(g)``,x=(0,o.ZP)(g)``,u=(0,o.ZP)(g)``,f=(0,o.ZP)(h.Z)``,$=o.ZP.button`
  background-color: transparent;
  font-family: "Pretendard Variable";
  width: 32px;
  height: 32px;
  font-size: 16px;
  margin: 0 2px;
  font-weight: ${({active:e})=>e?"700":"500"};
  color: ${({active:e})=>e?"#2C333C":"#B0B5BE"};
  text-decoration: ${({active:e})=>e?"underline":"none"};

  &:hover {
    background-color: #ffffff90;
    border-radius: 50%;
  }
`,w=c},3461:(e,t,r)=>{r.d(t,{Z:()=>v});var i=r(4519),n=r(1386),o=r.n(n),d=r(5655),s=r(5381);const h=d.ZP.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`,a=d.ZP.div`
  width: ${e=>e.width||"32rem"};
  height: ${e=>e.height||"fit-content"};
  border-radius: ${e=>e.borderRadius||null};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`,c=(0,d.ZP)(s.h)`
  width: 100%;
  height: ${e=>e.height||"2rem"};
  background-color: ${({theme:e})=>e.colors.gray200};
  padding-right: 10px;
`,l=(0,d.ZP)(s.h)`
  width: 100%;
  height: ${e=>e.height||"17rem"};
  background-color: #fefefe;
`,g=d.ZP.p`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
  font-size: ${({theme:e})=>e.fontSize.m};
  font-weight: 700;
  margin: 0;
  padding-bottom: 50px;
  padding-right: ${e=>e.paddingRight||null};
`,p=(0,d.ZP)(s.h)`
  width: ${e=>e.width||"30rem"};
  height: ${e=>e.height||"fit-content"};
`,m=d.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,x=(0,d.ZP)(s.h)`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,u=d.ZP.input`
  width: ${e=>e.width||"20.688rem"};
  height: ${e=>e.height||"3.313rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`,f=(0,d.ZP)(s.h)`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,$=d.ZP.textarea`
  width: ${e=>e.width||"20.688rem"};
  height: ${e=>e.height||"10.375rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`,w=(0,d.ZP)(s.h)`
  width: ${e=>e.width||"26.853rem"};
  height: ${e=>e.height||"fit-content"};
  padding-top: 20px;
`,b=d.ZP.button`
  width: ${e=>e.width||"7rem"};
  height: ${e=>e.height||"3.625rem"};
  background-color: ${({theme:e})=>e.colors.gray100};
  border: 1px solid ${({theme:e})=>e.colors.gray500};
  color: ${({theme:e})=>e.colors.gray600};
  font-size: ${({theme:e})=>e.fontSize.s};
  font-weight: 700;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray400};
  }
`,j=d.ZP.button`
  width: 1.125rem;
  height: 1.125rem;
  background-color: ${({theme:e})=>e.colors.error};
  border-radius: 50%;

  &:hover {
    background-color: #cf5757;
  }
`;var Z=r(8229),P=r(8735),y=r(2556);const k=({onClick:e,setIsOpen:t,hasButton:r,isBan:n,isWithdrawal:o=!1,handleWithdrawal:d,children:s})=>{const[k,v]=(0,i.useState)(1),[C,z]=(0,i.useState)(""),S=e=>{const t=e.target;let r=t.value;if("number"===t.type){if(r=parseInt(t.value),isNaN(parseInt(r)))return;if(P.EM.test(r))return;r<parseInt(t.min)?r=parseInt(t.min):r>parseInt(t.max)&&(r=parseInt(t.max)),v(r)}else if("textarea"===t.type){if(r.length>t.maxLength||!P.Ao.test(r))return;z(r)}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{onClick:()=>t(!1)}),(0,y.jsxs)(a,{children:[(0,y.jsx)(c,{row:"end",col:"center",children:(0,y.jsx)(j,{onClick:()=>t(!1)})}),(0,y.jsxs)(l,{dir:"col",row:"center",col:"center",height:n&&"25.438rem",children:[r&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{children:s}),o?(0,y.jsxs)(p,{row:"evenly",children:[(0,y.jsx)(Z.Z,{type:"modal",message:"\ud655\uc778",onClick:d},"withdrawal"),(0,y.jsx)(Z.Z,{type:"modal",message:"\ucde8\uc18c",onClick:()=>t(!1)},"exit")]}):(0,y.jsx)(Z.Z,{type:"modal",message:"\ud655\uc778",onClick:e},"confirm")]}),n&&(0,y.jsxs)(m,{col:"center",children:[(0,y.jsxs)(x,{children:[(0,y.jsx)(g,{paddingRight:"15px",children:"\ubc34 \uc77c\uc218"}),(0,y.jsx)(u,{type:"number",min:1,max:200,step:1,value:k,onChange:S})]}),(0,y.jsxs)(f,{children:[(0,y.jsx)(g,{paddingRight:"15px",children:"\ubc34 \uc0ac\uc720"}),(0,y.jsx)($,{maxLength:100,value:C,onChange:S})]}),(0,y.jsx)(w,{row:"center",children:(0,y.jsx)(b,{onClick:()=>e(k,C),width:"11rem",children:"\uc0ac\uc6a9\uc790 \ube44\ud65c\uc131\ud654"})})]})]})]})]})};k.propTypes={onClick:o().func,setIsOpen:o().func,isBan:o().bool,hasButton:o().bool,isWithdrawal:o().bool,handleWithdrawal:o().func,children:o().node};const v=k},47:(e,t,r)=>{r.d(t,{J7:()=>a,VR:()=>c,ZQ:()=>s,lt:()=>d,or:()=>l,vs:()=>h,xu:()=>g});var i=r(5655),n=r(5381);const o=i.F4`
  from { opacity: 0;}
  to {opacity: 1;}
`,d=i.F4`
  50% {
      opacity: 0;
  }
`,s=(i.ZP.div`
  display: none;
`,i.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42.25rem;
  background-image: linear-gradient(#dbe1ed, #ffffff00);
  z-index: -1;
`),h=(0,i.ZP)(n.h)`
  animation: ${o} 0.5s ease-in-out;
`,a=(0,i.ZP)(n.h)`
  width: ${e=>e.width||"75rem"};
  height: 100vh;
`,c=(0,i.ZP)(n.h)`
  width: 36.75rem; // 기존 40.75rem
  height: ${e=>e.height||"fit-content"};
`,l=i.ZP.main`
  width: 100%;
  margin-top: ${({type:e})=>"big"===e?"10rem":"admin"!==e?"7.5rem":"6.5rem"};
`,g=(0,i.ZP)(n.h)`
  width: 100%;
  max-width: 100%;
  height: 43.25rem;
  padding: 10px;
  background-color: ${({bgColor:e,theme:t})=>e||t.colors.content};
`;(0,i.ZP)(n.h)`
  flex-basis: ${e=>e.width||auto};
  align-self: ${e=>e.align||auto};
`},6638:(e,t,r)=>{r.d(t,{O6:()=>n,QC:()=>o,SL:()=>s,T0:()=>d});var i=r(2322);const n=(0,i.cn)({key:"isAnswerCompletedState",default:{}}),o=(0,i.cn)({key:"itemIdState",default:null}),d=(0,i.cn)({key:"remoteApiConfigState",default:null}),s=(0,i.cn)({key:"selectedBoardItemIdState",default:null})},8735:(e,t,r)=>{r.d(t,{Ao:()=>n,C_:()=>o,EM:()=>d,o0:()=>i});const i=/^[a-zA-Z0-9\uac00-\ud7a3]{1,15}$/,n=/^[a-zA-Z0-9\uac00-\ud7a3 -~]{1,100}/,o=/^[a-zA-Z\uac00-\ud7a30-9 -~].+$/,d=/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/}}]);
//# sourceMappingURL=308.df9ced3d.chunk.js.map