"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[699],{6862:(e,t,i)=>{i.d(t,{Z:()=>l});i(4519);var n=i(5655),r=i(1386),o=i.n(r),h=i(2556);const s=n.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,a=n.ZP.p`
  color: ${e=>e.color||"#828282"};
  font-family: "Gugi";
  font-size: ${e=>e.fontSize||"30px"};
  font-weight: ${e=>e.fontWeight||"500"};
  margin: 53px 0px 0 64px;
`,d=({type:e})=>(0,h.jsx)(s,{children:(0,h.jsx)(a,{children:(()=>{switch(e){case"notice":return"\uacf5\uc9c0\uc0ac\ud56d";case"inquiry":return"\ubb38\uc758\uc0ac\ud56d";case"create":return"\ubb38\uc758 \ub4f1\ub85d"}})()})});d.propTypes={type:o().string};const l=d},3700:(e,t,i)=>{i.d(t,{Z:()=>P});var n=i(4519),r=i(1386),o=i.n(r),h=i(5655),s=i(9892),a=i(12),d=i(5381),l=i(2556);const c=({appendFilesToFormData:e,width:t,height:i,mode:r=0})=>{const[o,h]=(0,n.useState)([]),[s,d]=(0,n.useState)([]),c=(0,n.useRef)(null),g=e=>{d((t=>t?.filter((t=>t.name!==e)))),h((t=>t?.filter((t=>t.name!==e))))},P=o?.map(((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(w,{src:e.url,alt:e.name}),(0,l.jsx)($,{mode:r,onClick:()=>g(e.name),children:(0,l.jsx)(j,{icon:a.EOp})})]},t))),k=s?.map(((e,t)=>(0,l.jsxs)(x,{col:"center",children:[(0,l.jsx)(f,{children:e.name}),(0,l.jsx)($,{onClick:()=>g(e.name),children:(0,l.jsx)(j,{icon:a.EOp})})]},t)));return(0,l.jsxs)(m,{mode:r,col:0!==r&&"center",children:[0===r&&0!==o.length&&(0,l.jsx)(p,{children:P}),0!==r&&0!==o.length&&(0,l.jsx)(p,{children:k}),o.length<3&&(0,l.jsx)(Z,{width:t,height:i,mode:r,onClick:()=>c.current&&c.current.click(),children:0===r?(0,l.jsx)(b,{icon:a.r8p}):(0,l.jsx)(u,{children:"\ucca8\ubd80\ud30c\uc77c"})}),(0,l.jsx)(v,{ref:c,name:"images",onChange:t=>{t.preventDefault(),t.persist();const i=Array.from(t.target.files),n=[];for(let e=0;e<i.length;e++){if(i[e].size>5242880)return void alert("\ud30c\uc77c\ub2f9 5MB\ub97c \ucd08\uacfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");if(s.some((t=>t.name===i[e].name)))return void alert("\uac19\uc740 \uc774\ub984\uc758 \ud30c\uc77c\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.");const t=URL.createObjectURL(i[e]);n.push(t)}d((t=>(e([...t,...i]),[...t,...i])));const r=n?.map(((e,t)=>({name:i[t].name,url:e})));h((e=>e.concat(r))),t.target.value=""},accept:"image/jpg, image/jpeg, image/png, image/bmp, image/webp"})]})};c.propTypes={appendFilesToFormData:o().func,width:o().string,height:o().string,mode:o().number};const g=(0,h.ZP)(d.h)`
  & > * + * {
    margin-left: 5px;
  }
`,m=(0,h.ZP)(g)`
  width: ${({mode:e})=>0!==e&&"100%"};
  margin-left: ${({mode:e})=>0!==e&&"5px"};
  overflow-x: ${({mode:e})=>0!==e&&"auto"};
`,p=(0,h.ZP)(g)``,x=(0,h.ZP)(d.h)`
  width: fit-content;
  height: 2.25rem;
  padding: 0 1.5rem 0 1rem;
  background-color: #eee;
  border-radius: 30px;
`,f=h.ZP.span`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,u=h.ZP.span`
  font-size: ${({theme:e})=>e.fontSize.xxxs};
`,w=h.ZP.img`
  width: 6.25rem;
  height: 5.625rem;
  object-fit: cover;
`,$=h.ZP.button`
  position: relative;
  top: ${({mode:e})=>0!==e?"0":"-96px"};
  right: ${({mode:e})=>0===e?"-73%":"-12px"};
  background-color: #000;
  opacity: 0.7;
  border-radius: ${({mode:e})=>0!==e&&"50%"};
`,j=(0,h.ZP)(s.G)`
  color: #fff;
`,Z=h.ZP.button`
  width: ${({width:e})=>e||"6.25rem"};
  height: ${({height:e})=>e||"5.625rem"};
  background-color: ${({mode:e})=>0===e?"#585858":"#EBE8E1"};
  color: ${({mode:e})=>0!==e&&"#3F3F3F"};
  font-size: ${({mode:e,theme:t})=>0!==e&&t.fontSize.xxxs};

  min-width: ${({mode:e})=>0!==e&&"5.5rem"};
  margin-left: ${({mode:e})=>0!==e&&"auto"};
`,b=(0,h.ZP)(s.G)`
  font-size: ${({theme:e})=>e.fontSize.xxl};
  color: #fff;
`,v=h.ZP.input.attrs((()=>({type:"file"})))`
  display: none;
  -webkit-appearance: none;
  appearance: none;
`,P=c},7634:(e,t,i)=>{i.d(t,{Z:()=>l});i(4519);var n=i(1386),r=i.n(n),o=i(5655);const h=o.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,s=o.ZP.p`
  font-size: ${({fontSize:e})=>e||"16px"};
  font-weight: ${({fontWeight:e})=>e};
  color: ${({color:e,theme:t})=>e||t.colors.error};
  margin: ${({margin:e})=>e||"0 3px"};
`;var a=i(2556);const d=({message:e,fontSize:t,fontWeight:i,color:n,margin:r})=>(0,a.jsx)(h,{children:(0,a.jsx)(s,{fontSize:t,fontWeight:i,color:n,margin:r,children:e})});d.propTypes={message:r().string,fontSize:r().string,fontWeight:r().string,color:r().string,margin:r().string};const l=d},3461:(e,t,i)=>{i.d(t,{Z:()=>y});var n=i(4519),r=i(1386),o=i.n(r),h=i(5655),s=i(5381);const a=h.ZP.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`,d=h.ZP.div`
  width: ${e=>e.width||"32rem"};
  height: ${e=>e.height||"fit-content"};
  border-radius: ${e=>e.borderRadius||null};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`,l=(0,h.ZP)(s.h)`
  width: 100%;
  height: ${e=>e.height||"2rem"};
  background-color: ${({theme:e})=>e.colors.gray200};
  padding-right: 10px;
`,c=(0,h.ZP)(s.h)`
  width: 100%;
  height: ${e=>e.height||"17rem"};
  background-color: #fefefe;
`,g=h.ZP.p`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
  font-size: ${({theme:e})=>e.fontSize.m};
  font-weight: 700;
  margin: 0;
  padding-bottom: 50px;
  padding-right: ${e=>e.paddingRight||null};
`,m=(0,h.ZP)(s.h)`
  width: ${e=>e.width||"30rem"};
  height: ${e=>e.height||"fit-content"};
`,p=h.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,x=(0,h.ZP)(s.h)`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,f=h.ZP.input`
  width: ${e=>e.width||"20.688rem"};
  height: ${e=>e.height||"3.313rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`,u=(0,h.ZP)(s.h)`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,w=h.ZP.textarea`
  width: ${e=>e.width||"20.688rem"};
  height: ${e=>e.height||"10.375rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`,$=(0,h.ZP)(s.h)`
  width: ${e=>e.width||"26.853rem"};
  height: ${e=>e.height||"fit-content"};
  padding-top: 20px;
`,j=h.ZP.button`
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
`,Z=h.ZP.button`
  width: 1.125rem;
  height: 1.125rem;
  background-color: ${({theme:e})=>e.colors.error};
  border-radius: 50%;

  &:hover {
    background-color: #cf5757;
  }
`;var b=i(8229),v=i(8735),P=i(2556);const k=({onClick:e,setIsOpen:t,hasButton:i,isBan:r,isWithdrawal:o=!1,handleWithdrawal:h,children:s})=>{const[k,y]=(0,n.useState)(1),[z,C]=(0,n.useState)(""),S=e=>{const t=e.target;let i=t.value;if("number"===t.type){if(i=parseInt(t.value),isNaN(parseInt(i)))return;if(v.EM.test(i))return;i<parseInt(t.min)?i=parseInt(t.min):i>parseInt(t.max)&&(i=parseInt(t.max)),y(i)}else if("textarea"===t.type){if(i.length>t.maxLength||!v.Ao.test(i))return;C(i)}};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(a,{onClick:()=>t(!1)}),(0,P.jsxs)(d,{children:[(0,P.jsx)(l,{row:"end",col:"center",children:(0,P.jsx)(Z,{onClick:()=>t(!1)})}),(0,P.jsxs)(c,{dir:"col",row:"center",col:"center",height:r&&"25.438rem",children:[i&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{children:s}),o?(0,P.jsxs)(m,{row:"evenly",children:[(0,P.jsx)(b.Z,{type:"modal",message:"\ud655\uc778",onClick:h},"withdrawal"),(0,P.jsx)(b.Z,{type:"modal",message:"\ucde8\uc18c",onClick:()=>t(!1)},"exit")]}):(0,P.jsx)(b.Z,{type:"modal",message:"\ud655\uc778",onClick:e},"confirm")]}),r&&(0,P.jsxs)(p,{col:"center",children:[(0,P.jsxs)(x,{children:[(0,P.jsx)(g,{paddingRight:"15px",children:"\ubc34 \uc77c\uc218"}),(0,P.jsx)(f,{type:"number",min:1,max:200,step:1,value:k,onChange:S})]}),(0,P.jsxs)(u,{children:[(0,P.jsx)(g,{paddingRight:"15px",children:"\ubc34 \uc0ac\uc720"}),(0,P.jsx)(w,{maxLength:100,value:z,onChange:S})]}),(0,P.jsx)($,{row:"center",children:(0,P.jsx)(j,{onClick:()=>e(k,z),width:"11rem",children:"\uc0ac\uc6a9\uc790 \ube44\ud65c\uc131\ud654"})})]})]})]})]})};k.propTypes={onClick:o().func,setIsOpen:o().func,isBan:o().bool,hasButton:o().bool,isWithdrawal:o().bool,handleWithdrawal:o().func,children:o().node};const y=k},5699:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var n=i(4519),r=i(5655),o=i(47),h=i(7480),s=i(2674),a=i(3908),d=i(5381),l=i(3426),c=i(6862),g=i(3700),m=i(8229),p=i(7634),x=i(3461),f=i(2556);const u=(0,r.ZP)(d.h)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"fit-content"};
  margin-top: ${e=>e.marginTop||null};
  margin-bottom: ${e=>e.marginBottom||null};
  margin-left: ${e=>e.marginLeft||null};
  margin-right: ${e=>e.marginRight||null};
  border-top: ${e=>e.borderTop||null};
  border-bottom: ${e=>e.borderBottom||null};
`,w=r.ZP.div`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"fit-content"};
  margin-left: ${e=>e.marginLeft||null};
  margin-right: ${e=>e.marginRight||null};
`,$=r.ZP.input`
  width: 57rem;
  height: 4.688rem;
  border: 2px solid #e5e5e5;
  background-color: transparent;
  font-size: 23px;
`,j=r.ZP.textarea`
  width: 67.375rem;
  height: 19.625rem;
  border: 2px solid #e5e5e5;
  background-color: transparent;
  font-size: 23px;
`,Z=r.ZP.select`
  border: 2px solid #e5e5e5;
  background-color: transparent;
  color: #767676;
  font-size: 14px;
`,b=r.ZP.option`
  background-color: transparent;
`,v=()=>{const e=(0,n.useRef)(""),t=(0,n.useRef)(""),i=(0,n.useRef)(""),[r,o]=(0,n.useState)([]),[h,d]=(0,n.useState)(!1),[v,P]=(0,n.useState)(null),{response:k,error:y,loading:z,fetchData:C}=(0,l.Z)(v,!1),S=(0,s.s0)(),[F]=(0,a.Z)(["sessionId"]);(0,n.useEffect)((()=>{null!==v&&C()}),[v]),(0,n.useEffect)((()=>{null!==k?v?.url.startsWith("/inquiry/new")&&S("/inquiry/list"):v?.url.startsWith("/inquiry/new")&&d(!0)}),[k,y]);return(0,f.jsxs)(f.Fragment,{children:[h&&(0,f.jsx)(x.Z,{setIsOpen:d,onClick:()=>{1==h&&d(!1)},hasButton:!0,children:"\uc81c\ubaa9, \ubb38\uc758 \uc720\ud615 \ub610\ub294 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."}),(0,f.jsxs)(w,{width:"75rem",marginLeft:"auto",marginRight:"auto",children:[(0,f.jsx)(c.Z,{type:"create"}),(0,f.jsx)(u,{dir:"col",row:"center",borderTop:"5px solid #C2C2C2",borderBottom:"5px solid #C2C2C2",marginTop:"10px",children:(0,f.jsxs)(w,{marginLeft:"auto",marginRight:"auto",width:"67.375rem",children:[(0,f.jsxs)(u,{dir:"col",height:"410px",row:"between",marginTop:"10px",marginBottom:"10px",children:[(0,f.jsxs)(u,{row:"between",children:[(0,f.jsx)($,{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",ref:e}),(0,f.jsxs)(Z,{ref:i,children:[(0,f.jsx)(b,{value:-1,children:"\ubb38\uc758 \uc720\ud615"}),(0,f.jsx)(b,{value:0,children:"\ubc84\uadf8 \uc81c\ubcf4 / \ubb38\uc81c \ud574\uacb0"}),(0,f.jsx)(b,{value:1,children:"\uacc4\uc815 \uad00\ub828 \ubb38\uc81c"}),(0,f.jsx)(b,{value:2,children:"\uc11c\ube44\uc2a4 \uc774\uc6a9 \uad00\ub828 \ubb38\uc758"}),(0,f.jsx)(b,{value:99,children:"\uae30\ud0c0 \ubb38\uc758"})]})]}),(0,f.jsx)(j,{placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",ref:t})]}),(0,f.jsxs)(u,{marginTop:"10px",children:[(0,f.jsx)(g.Z,{appendFilesToFormData:e=>{o(e||[])}}),(0,f.jsxs)(u,{dir:"col",height:"90px",row:"between",marginLeft:"15px",children:[(0,f.jsx)(p.Z,{message:"\u2022 \uc774\ubbf8\uc9c0 \ud30c\uc77c\ub9cc \ucca8\ubd80 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),(0,f.jsx)(p.Z,{message:"\u2022 \ucca8\ubd80 \ud30c\uc77c\uc740 \ucd5c\ub300 3\uac1c\uae4c\uc9c0 \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4."}),(0,f.jsx)(p.Z,{message:"\u2022 \ud30c\uc77c\ub2f9 \ucd5c\ub300 10MB\uc758 \uc6a9\ub7c9 \uc81c\ud55c\uc774 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,f.jsx)(u,{row:"end",marginBottom:"10px",children:(0,f.jsxs)(u,{row:"between",width:"210px",children:[(0,f.jsx)(m.Z,{type:"smallDark",message:"\uc800\uc7a5",onClick:()=>{const n=e.current.value,o=t.current.value,h=i.current.value;if(n.length<1||n.length>100||-1==h)d(!0);else if(o.length<1||o.length>2e3)d(!0);else{const e=new FormData;e.append("title",n),e.append("content",o),r.forEach((t=>{e.append("files",t)})),e.append("type",h),P({method:"post",url:"/inquiry/new",headers:{"Content-Type":"multipart/form-data",sessionId:F.sessionId},data:e})}}}),(0,f.jsx)(m.Z,{type:"smallGray",message:"\ubaa9\ub85d",onClick:()=>{S("/inquiry/list")}})]})})]})})]})]})},P=(0,r.ZP)(o.or)`
  background-color: ${({theme:e})=>e.colors.content};
  height: 100vh;
`,k=()=>(0,f.jsxs)(o.vs,{row:"center",col:"center",children:[(0,f.jsx)(h.Z,{type:"detail"}),(0,f.jsx)(o.J7,{dir:"col",width:"100%",children:(0,f.jsx)(P,{children:(0,f.jsx)(v,{})})})]})},47:(e,t,i)=>{i.d(t,{J7:()=>d,VR:()=>l,ZQ:()=>s,lt:()=>h,or:()=>c,vs:()=>a,xu:()=>g});var n=i(5655),r=i(5381);const o=n.F4`
  from { opacity: 0;}
  to {opacity: 1;}
`,h=n.F4`
  50% {
      opacity: 0;
  }
`,s=(n.ZP.div`
  display: none;
`,n.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42.25rem;
  background-image: linear-gradient(#dbe1ed, #ffffff00);
  z-index: -1;
`),a=(0,n.ZP)(r.h)`
  animation: ${o} 0.5s ease-in-out;
`,d=(0,n.ZP)(r.h)`
  width: ${e=>e.width||"75rem"};
  height: 100vh;
`,l=(0,n.ZP)(r.h)`
  width: 36.75rem; // 기존 40.75rem
  height: ${e=>e.height||"fit-content"};
`,c=n.ZP.main`
  width: 100%;
  margin-top: ${({type:e})=>"big"===e?"10rem":"admin"!==e?"7.5rem":"6.5rem"};
`,g=(0,n.ZP)(r.h)`
  width: 100%;
  max-width: 100%;
  height: 43.25rem;
  padding: 10px;
  background-color: ${({bgColor:e,theme:t})=>e||t.colors.content};
`;(0,n.ZP)(r.h)`
  flex-basis: ${e=>e.width||auto};
  align-self: ${e=>e.align||auto};
`},8735:(e,t,i)=>{i.d(t,{Ao:()=>r,C_:()=>o,EM:()=>h,o0:()=>n});const n=/^[a-zA-Z0-9\uac00-\ud7a3]{1,15}$/,r=/^[a-zA-Z0-9\uac00-\ud7a3 -~]{1,100}/,o=/^[a-zA-Z\uac00-\ud7a30-9 -~].+$/,h=/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/}}]);
//# sourceMappingURL=699.a401b550.chunk.js.map