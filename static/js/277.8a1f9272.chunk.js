"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[277],{3451:(e,t,n)=>{n.d(t,{Z:()=>l});n(4519);var r=n(5655),o=n(1386),i=n.n(o),s=n(2556);const a=r.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,h=r.ZP.p`
  color: ${e=>e.color||"#828282"};
  font-family: "Gugi";
  font-size: ${e=>e.fontSize||"32px"};
  font-weight: ${e=>e.fontWeight||"500"};
  margin: ${e=>e.margin||"30px 0 20px"};
`,c=({type:e,marginTop:t,marginBottom:n})=>(0,s.jsx)(a,{children:(0,s.jsx)(h,{marginTop:t,marginBottom:n,children:(()=>{switch(e){case"signup":return"\ud68c\uc6d0\uac00\uc785";case"login":return"\ub85c\uadf8\uc778";case"findid":return"\uc544\uc774\ub514 \ucc3e\uae30";case"findpw":return"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30";case"changepw":return"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd";case"withdrawal":return"\ud68c\uc6d0 \ud0c8\ud1f4"}})()})});c.propTypes={type:i().string,marginTop:i().string,marginBottom:i().string};const l=c},693:(e,t,n)=>{n.d(t,{Z:()=>h});n(4519);var r=n(1386),o=n.n(r),i=n(6693),s=n(2556);const a=e=>{const{hasLabel:t,isLoginForm:n,isDataForm:r,name:o,inputRef:a,disabled:h,onBlur:c}=e,l=n&&"id"===o?"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694":r&&"id"===o?"7~30\uc790\uc758 \uc601\ubb38 \uc18c\ubb38\uc790, \uc22b\uc790\ub9cc \uc785\ub825 \uac00\ub2a5":"\uc544\uc774\ub514 \uc785\ub825",d=n&&"password"===o?"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694":r&&"password"===o?"7~30\uc790\uc758 \uc601\ubb38 \ub300/\uc18c\ubb38\uc790, \uc22b\uc790 \ud544\uc218, \ud2b9\uc218\ubb38\uc790 \uc0ac\uc6a9 \uac00\ub2a5":"\ube44\ubc00\ubc88\ud638 \uc785\ub825";return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(i._,{children:"id"===o?"\uc544\uc774\ub514":"password"===o?"\ube44\ubc00\ubc88\ud638":"confirmPassword"===o?"\ube44\ubc00\ubc88\ud638 \ud655\uc778":null}),(0,s.jsx)(i.I,{ref:a,type:"id"===o?"text":"password"===o||"confirmPassword"===o?"password":null,name:o,placeholder:"id"===o?l:"password"===o?d:"confirmPassword"===o?"\ube44\ubc00\ubc88\ud638 \ud655\uc778":null,onChange:e=>{const t=e.target.value;a.current.value=t},disabled:h,onBlur:c,minLength:7,maxLength:30})]})};a.propTypes={hasLabel:o().bool,isLoginForm:o().bool,isDataForm:o().bool,disabled:o().bool,name:o().string,inputRef:o().object,onBlur:o().func};const h=a},6693:(e,t,n)=>{n.d(t,{I:()=>i,_:()=>o});var r=n(5655);n(5381);const o=r.ZP.label`
  font-size: 19px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.gray600};
`,i=r.ZP.input.attrs((e=>({type:e.type})))`
  ${({type:e,theme:t})=>("text"===e||"password"===e||"email"===e)&&`\n    width: 100%;\n    height: 3.8rem;\n    margin-top: 8px;\n    padding: 10px 18px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    color: ${t.colors.text.sub};\n    font-size: 19px;\n    font-weight: 400;\n  `}
`},4487:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(4519),o=n(3908),i=n(1386),s=n.n(i),a=n(5655),h=n(2556);const c=({initialTime:e,onTimeOut:t})=>{const[n,o]=(0,r.useState)(e),i=Math.floor(n/60),s=n%60;return(0,r.useEffect)((()=>{if(null===e)return;const r=setInterval((()=>{o((e=>e-1))}),1e3);return 0===n?(clearInterval(r),void(t&&t())):()=>clearInterval(r)}),[n,t]),(0,h.jsx)(l,{children:`${i}:${s<10?"0"+s:s}`})};c.propTypes={initialTime:s().number,onTimeOut:s().func};const l=a.ZP.span`
  position: relative;
  right: 61px;
  color: red;
  font-size: 19px;
  font-weight: 500;
`,d=c;var g=n(5381);const p=a.ZP.input.attrs((e=>({type:e.type})))`
  ${({type:e,theme:t})=>("text"===e||"password"===e||"email"===e)&&`\n    width: 100%;\n    height: 3.8rem;\n    padding: 10px 20px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    color: ${t.colors.text.sub};\n    font-size: ${t.fontSize.s};\n    font-weight: 500;\n\n    &::placeholder {\n      color: ${t.colors.gray400};\n    }\n  `}
`,u=a.ZP.label`
  width: ${({width:e})=>e||null};
  font-size: 19px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.gray600};
`,f=(0,a.ZP)(g.h)`
  margin-top: ${({marginTop:e})=>e||null};
  margin-bottom: ${({marginBottom:e})=>e||null};
`,m=a.ZP.img`
  width: ${e=>e.width||"24px"};
  height: ${e=>e.height||"24px"};
  margin-right: ${e=>e.marginTop||"3px"};
`,x=a.ZP.button`
  width: ${({type:e})=>"verification"===e?"6rem":"8.3rem"};
  height: 3.8rem;
  font-size: ${({theme:e})=>e.fontSize.xxs};
  font-weight: 700;
  background-color: transparent;
  color: #393939;
  border: 2px solid ${({theme:e})=>e.colors.gray500};

  &:hover {
    background-color: #ffffff32;
  }
`,w=(0,a.ZP)(g.h)`
  width: ${e=>e.width||"8.3rem"};
  height: 3.8rem;
  font-size: ${({theme:e})=>e.fontSize.xxs};
  font-weight: 700;
  background-color: #9f9f9f;
  color: #ffffff;
`,$=(0,a.ZP)(g.h)`
  flex-basis: 71%;
  font-size: ${({theme:e})=>e.fontSize.xs};
`,j=(0,a.ZP)(p)`
  width: ${({width:e})=>"verification"===e?"13rem":"110px"};
`,b=a.ZP.span`
  color: ${({theme:e})=>e.colors.text.main};
  font-size: ${({theme:e})=>e.fontSize.xl};
  font-weight: 700;
`,v=(0,a.ZP)(p)`
  width: 13rem;
  font-size: ${({theme:e})=>e.fontSize.xxs};
`;var A=n(7634),Z=n(3461);var y=n(3426);const k=({onVerificationResult:e})=>{const t=Array(3).fill()?.map((()=>r.createRef())),n=(0,r.useRef)(),[i,s]=(0,r.useState)(!0),[a,c]=(0,r.useState)(""),[l,g]=(0,r.useState)(!1),[p,k]=(0,r.useState)(null),[P,z]=(0,r.useState)(!1),[I,S]=(0,r.useState)(!1),[C,B]=(0,r.useState)(""),[T,R]=(0,r.useState)(!1),[F,E]=(0,r.useState)(null),{response:W,error:L,loading:D,fetchData:N}=(0,y.Z)(F,!1),[O,V]=(0,o.Z)(["smsAuthId"]);(0,r.useEffect)((()=>{null!==F&&N()}),[F]),(0,r.useEffect)((()=>{const n=t.map((e=>e.current.value)).join("-");null!==W&&null!==W&&(F?.url.startsWith("/user/auth-code?receiverNumber=")?(s(!0),g(!0),c("\uc778\uc99d\ubc88\ud638\uac00 \ubc1c\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),k(180),V("smsAuthId",W.smsAuthId,{expires:new Date(Date.now()+18e4)})):(R(!0),e(W,n),c("")))}),[W]);const Q=e=>{const r=t.findIndex((t=>t.current===e.target));if(e.target.value=e.target.value.replace(/\s|\D/g,""),0===r&&3===e.target.value.length||1===r&&4===e.target.value.length){const e=t[r+1].current;e&&e.focus()}2===r&&e.target.value.length>4&&(e.target.value=e.target.value.slice(0,4)),n.current===e.target&&e.target.value.length>6&&(e.target.value=e.target.value.slice(0,6))};return(0,h.jsxs)(f,{dir:"col",children:[(0,h.jsx)(f,{row:"between",marginBottom:"24px",children:(0,h.jsxs)(u,{width:"100%",children:["\uc804\ud654\ubc88\ud638",(0,h.jsxs)(f,{row:"between",col:"center",marginTop:"5px",children:[(0,h.jsxs)($,{row:"between",col:"center",onChange:Q,children:[(0,h.jsx)(j,{type:"text",placeholder:"010",ref:t[0]}),(0,h.jsx)(b,{children:"-"}),(0,h.jsx)(j,{type:"text",placeholder:"1234",ref:t[1]}),(0,h.jsx)(b,{children:"-"}),(0,h.jsx)(j,{type:"text",placeholder:"5678",ref:t[2]})]}),T?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(w,{row:"center",children:(0,h.jsxs)(f,{col:"center",children:[(0,h.jsx)(m,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgB7ZLRCYAwDERvBEfoCI7kJo7iCI7gCB2hIzjCGTFfhYpoAhby4P7SPsIFCIIuIDlIFskED1SQeZFhTSUokgRL/iuQwfFJcZ82kOFNH84uAv3g3GRvicw6aIloXXItotcVVaJiLrgRJXigotVNEASvOQDIyhqCfy8r2QAAAABJRU5ErkJggg=="}),"\uc778\uc99d \uc644\ub8cc"]})})}):(0,h.jsx)(x,{onClick:e=>(e=>{const n=t.map((e=>e.current.value)).join("-");if(!/^010-\d{4}-\d{4}$/.test(n))return s(!1),void c("010\uc73c\ub85c \uc2dc\uc791\ud558\ub294 \ucd1d 11\uc790\uc758 \uc22b\uc790\ub97c \uc785\ub825\ud558\uc138\uc694.");E({method:"get",url:`/user/auth-code?receiverNumber=${n}`,headers:{"Content-Type":"application/json"}}),e.target.disabled=!0})(e),children:"\uc778\uc99d \uc694\uccad"})]}),i?l&&(0,h.jsx)(A.Z,{message:a,fontWeight:"400",color:"#686868"}):(0,h.jsx)(A.Z,{message:a,fontWeight:"400"})]})}),(0,h.jsx)(h.Fragment,{children:!T&&l&&(0,h.jsx)(f,{marginBottom:"20px",children:(0,h.jsxs)(u,{children:["\uc778\uc99d",(0,h.jsxs)(f,{row:"start",col:"center",marginTop:"5px",onChange:Q,children:[(0,h.jsx)(v,{type:"text",width:"verification",ref:n,placeholder:"\uc778\uc99d\ubc88\ud638"}),(0,h.jsx)(d,{initialTime:p,onTimeOut:()=>{z(!0)}}),(0,h.jsx)(x,{type:"verification",onClick:e=>(()=>{const e=t.map((e=>e.current.value)).join("-"),r=n.current.value;return/^\d{6}$/.test(r)?(E({method:"post",url:"/user/auth-code/check",headers:{smsAuthId:O.smsAuthId},data:{authNumber:r,phoneNumber:e}}),P?(S(!0),void B("\uc778\uc99d \ubc88\ud638\uac00 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")):void 0):(S(!0),void B("\uc778\uc99d \ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))})(),children:"\ud655\uc778"})]})]})})}),I&&(0,h.jsx)(Z.Z,{setIsOpen:S,hasButton:!0,children:C})]})};k.propTypes={onVerificationResult:s().func,onPhoneNumber:s().func};const P=k},7634:(e,t,n)=>{n.d(t,{Z:()=>l});n(4519);var r=n(1386),o=n.n(r),i=n(5655);const s=i.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,a=i.ZP.p`
  font-size: ${({fontSize:e})=>e||"16px"};
  font-weight: ${({fontWeight:e})=>e};
  color: ${({color:e,theme:t})=>e||t.colors.error};
  margin: ${({margin:e})=>e||"0 3px"};
`;var h=n(2556);const c=({message:e,fontSize:t,fontWeight:n,color:r,margin:o})=>(0,h.jsx)(s,{children:(0,h.jsx)(a,{fontSize:t,fontWeight:n,color:r,margin:o,children:e})});c.propTypes={message:o().string,fontSize:o().string,fontWeight:o().string,color:o().string,margin:o().string};const l=c},3461:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(4519),o=n(1386),i=n.n(o),s=n(5655),a=n(5381);const h=s.ZP.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`,c=s.ZP.div`
  width: ${e=>e.width||"32rem"};
  height: ${e=>e.height||"fit-content"};
  border-radius: ${e=>e.borderRadius||null};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`,l=(0,s.ZP)(a.h)`
  width: 100%;
  height: ${e=>e.height||"2rem"};
  background-color: ${({theme:e})=>e.colors.gray200};
  padding-right: 10px;
`,d=(0,s.ZP)(a.h)`
  width: 100%;
  height: ${e=>e.height||"17rem"};
  background-color: #fefefe;
`,g=s.ZP.p`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
  font-size: ${({theme:e})=>e.fontSize.m};
  font-weight: 700;
  margin: 0;
  padding-bottom: 50px;
  padding-right: ${e=>e.paddingRight||null};
`,p=(0,s.ZP)(a.h)`
  width: ${e=>e.width||"30rem"};
  height: ${e=>e.height||"fit-content"};
`,u=s.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,f=(0,s.ZP)(a.h)`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,m=s.ZP.input`
  width: ${e=>e.width||"20.688rem"};
  height: ${e=>e.height||"3.313rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`,x=(0,s.ZP)(a.h)`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,w=s.ZP.textarea`
  width: ${e=>e.width||"20.688rem"};
  height: ${e=>e.height||"10.375rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`,$=(0,s.ZP)(a.h)`
  width: ${e=>e.width||"26.853rem"};
  height: ${e=>e.height||"fit-content"};
  padding-top: 20px;
`,j=s.ZP.button`
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
`,b=s.ZP.button`
  width: 1.125rem;
  height: 1.125rem;
  background-color: ${({theme:e})=>e.colors.error};
  border-radius: 50%;

  &:hover {
    background-color: #cf5757;
  }
`;var v=n(8229),A=n(8735),Z=n(2556);const y=({onClick:e,setIsOpen:t,hasButton:n,isBan:o,isWithdrawal:i=!1,handleWithdrawal:s,children:a})=>{const[y,k]=(0,r.useState)(1),[P,z]=(0,r.useState)(""),I=e=>{const t=e.target;let n=t.value;if("number"===t.type){if(n=parseInt(t.value),isNaN(parseInt(n)))return;if(A.EM.test(n))return;n<parseInt(t.min)?n=parseInt(t.min):n>parseInt(t.max)&&(n=parseInt(t.max)),k(n)}else if("textarea"===t.type){if(n.length>t.maxLength||!A.Ao.test(n))return;z(n)}};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h,{onClick:()=>t(!1)}),(0,Z.jsxs)(c,{children:[(0,Z.jsx)(l,{row:"end",col:"center",children:(0,Z.jsx)(b,{onClick:()=>t(!1)})}),(0,Z.jsxs)(d,{dir:"col",row:"center",col:"center",height:o&&"25.438rem",children:[n&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(g,{children:a}),i?(0,Z.jsxs)(p,{row:"evenly",children:[(0,Z.jsx)(v.Z,{type:"modal",message:"\ud655\uc778",onClick:s},"withdrawal"),(0,Z.jsx)(v.Z,{type:"modal",message:"\ucde8\uc18c",onClick:()=>t(!1)},"exit")]}):(0,Z.jsx)(v.Z,{type:"modal",message:"\ud655\uc778",onClick:e},"confirm")]}),o&&(0,Z.jsxs)(u,{col:"center",children:[(0,Z.jsxs)(f,{children:[(0,Z.jsx)(g,{paddingRight:"15px",children:"\ubc34 \uc77c\uc218"}),(0,Z.jsx)(m,{type:"number",min:1,max:200,step:1,value:y,onChange:I})]}),(0,Z.jsxs)(x,{children:[(0,Z.jsx)(g,{paddingRight:"15px",children:"\ubc34 \uc0ac\uc720"}),(0,Z.jsx)(w,{maxLength:100,value:P,onChange:I})]}),(0,Z.jsx)($,{row:"center",children:(0,Z.jsx)(j,{onClick:()=>e(y,P),width:"11rem",children:"\uc0ac\uc6a9\uc790 \ube44\ud65c\uc131\ud654"})})]})]})]})]})};y.propTypes={onClick:i().func,setIsOpen:i().func,isBan:i().bool,hasButton:i().bool,isWithdrawal:i().bool,handleWithdrawal:i().func,children:i().node};const k=y},8735:(e,t,n)=>{n.d(t,{Ao:()=>o,C_:()=>i,EM:()=>s,o0:()=>r});const r=/^[a-zA-Z0-9\uac00-\ud7a3]{1,15}$/,o=/^[a-zA-Z0-9\uac00-\ud7a3 -~]{1,100}/,i=/^[a-zA-Z\uac00-\ud7a30-9 -~].+$/,s=/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/}}]);
//# sourceMappingURL=277.8a1f9272.chunk.js.map