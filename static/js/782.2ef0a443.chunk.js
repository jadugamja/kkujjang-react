"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[782],{7709:(e,t,i)=>{i.d(t,{Z:()=>w});i(4519);var n=i(5655),r=i(5381),o=i(1386),s=i.n(o),a=i(3159),h=i(3653),d=i(2999),l=i(2556);const c=(0,n.ZP)(r.h)`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
  margin-top: ${e=>e.marginTop||null};
  margin-bottom: ${e=>e.marginBottom||null};
  border-top: ${e=>e.borderTop||null};
  border-bottom: ${e=>e.borderBottom||null};
`,g=n.ZP.img`
  width: ${e=>e.width||"24px"};
  height: ${e=>e.height||"24px"};
  margin-right: ${e=>e.marginRight||null};
`,p=n.ZP.p`
  color: ${e=>e.color||"#32250F"};
  font-size: ${e=>e.fontSize||"25px"};
`,m=(0,n.ZP)(p)`
  width: ${e=>e.width||"fit-content"};
  margin: ${e=>e.margin||"0"};
  margin-left: ${e=>e.marginLeft||null};
  margin-right: ${e=>e.marginRight||null};
  font-weight: ${e=>e.fontWeight||null};
`,x=n.ZP.p`
  color: ${e=>e.isTrue?"#6080FF":"#4B3F2C"};
  margin: 0;
`,u=n.ZP.td`
  width: ${e=>e.width||"200px"};
  text-align: ${e=>e.align||null};
`,f=({boardType:e,data:t,onClick:i})=>{return(0,l.jsx)(l.Fragment,{children:"notice"===e?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c,{row:"between",col:"center",width:"100%",height:"40px",marginBottom:"10px",onClick:i,children:[(0,l.jsx)(m,{fontSize:"20px",children:t.title}),(0,l.jsxs)(c,{row:"between",width:"13.5rem",children:[(0,l.jsxs)(c,{col:"center",children:[(0,l.jsx)(g,{width:"20px",height:"20px",src:h,marginRight:"10px"}),(0,l.jsx)(m,{color:"#A7A7A7",fontSize:"18px",children:(0,a.r)((e=>e.createdAt||e.created_at)(t))})]}),(0,l.jsxs)(c,{col:"center",children:[(0,l.jsx)(g,{width:"20px",height:"20px",src:d,marginRight:"10px"}),(0,l.jsx)(m,{color:"#A7A7A7",fontSize:"18px",children:t.views})]})]})]})}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(c,{width:"100%",row:"between",col:"center",borderTop:"1px solid #C2C2C2",onClick:i,children:["header"===e&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)(u,{children:(0,l.jsx)(m,{margin:"7px",marginLeft:"15px",fontWeight:"700",fontSize:"22px",children:"\ubb38\uc758 \uc720\ud615"})}),(0,l.jsx)(u,{width:"700px",children:(0,l.jsx)(m,{margin:"7px",marginLeft:"15px",fontWeight:"700",fontSize:"22px",children:"\ubb38\uc758 \uc81c\ubaa9"})}),(0,l.jsx)(u,{align:"right",width:"200px",children:(0,l.jsx)(m,{margin:"7px",marginLeft:"50px",fontWeight:"700",fontSize:"22px",children:"\uc791\uc131\uc77c"})}),(0,l.jsx)(u,{align:"right",width:"180px",children:(0,l.jsx)(m,{margin:"7px",marginRight:"15px",fontWeight:"700",fontSize:"22px",width:"180px",children:"\ub2f5\ubcc0 \uc720\ubb34"})})]})})})}),"inquiry"===e&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)(u,{children:(0,l.jsx)(m,{margin:"7px",marginLeft:"15px",fontSize:"20px",width:"130px",children:(e=>{switch(e){case 0:return"\ubc84\uadf8 \uc81c\ubcf4 / \ubb38\uc81c \ud574\uacb0";case 1:return"\uacc4\uc815 \uad00\ub828 \ubb38\uc81c";case 2:return"\uc11c\ube44\uc2a4 \uc774\uc6a9 \uad00\ub828 \ubb38\uc758";case 99:return"\uae30\ud0c0 \ubb38\uc758"}})(t.type)})}),(0,l.jsx)(u,{width:"700px",children:(0,l.jsx)(m,{margin:"7px",fontSize:"22px",children:t.title})}),(0,l.jsx)(u,{children:(0,l.jsx)(m,{margin:"7px",fontSize:"20px",width:"120px",children:t.createdAt})}),(0,l.jsx)(u,{align:"right",width:"180px",children:(0,l.jsx)(m,{margin:"7px",fontWeight:"700",fontSize:"20px",width:"120px",children:(n=t.needsAnswer,(0,l.jsx)(x,{isTrue:n,children:n?"YES":"NO"}))})})]})})})})]})})})});var n};f.propTypes={boardType:s().string,isAnswer:s().bool,data:s().object,onClick:s().func};const w=f},6862:(e,t,i)=>{i.d(t,{Z:()=>l});i(4519);var n=i(5655),r=i(1386),o=i.n(r),s=i(2556);const a=n.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,h=n.ZP.p`
  color: ${e=>e.color||"#828282"};
  font-family: "Gugi";
  font-size: ${e=>e.fontSize||"30px"};
  font-weight: ${e=>e.fontWeight||"500"};
  margin: 53px 0px 0 64px;
`,d=({type:e})=>(0,s.jsx)(a,{children:(0,s.jsx)(h,{children:(()=>{switch(e){case"notice":return"\uacf5\uc9c0\uc0ac\ud56d";case"inquiry":return"\ubb38\uc758\uc0ac\ud56d";case"create":return"\ubb38\uc758 \ub4f1\ub85d"}})()})});d.propTypes={type:o().string};const l=d},3700:(e,t,i)=>{i.d(t,{Z:()=>P});var n=i(4519),r=i(1386),o=i.n(r),s=i(5655),a=i(9892),h=i(12),d=i(5381),l=i(2556);const c=({appendFilesToFormData:e,width:t,height:i,mode:r=0})=>{const[o,s]=(0,n.useState)([]),[a,d]=(0,n.useState)([]),c=(0,n.useRef)(null),g=e=>{d((t=>t?.filter((t=>t.name!==e)))),s((t=>t?.filter((t=>t.name!==e))))},P=o?.map(((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(w,{src:e.url,alt:e.name}),(0,l.jsx)(A,{mode:r,onClick:()=>g(e.name),children:(0,l.jsx)(j,{icon:h.EOp})})]},t))),y=a?.map(((e,t)=>(0,l.jsxs)(x,{col:"center",children:[(0,l.jsx)(u,{children:e.name}),(0,l.jsx)(A,{onClick:()=>g(e.name),children:(0,l.jsx)(j,{icon:h.EOp})})]},t)));return(0,l.jsxs)(p,{mode:r,col:0!==r&&"center",children:[0===r&&0!==o.length&&(0,l.jsx)(m,{children:P}),0!==r&&0!==o.length&&(0,l.jsx)(m,{children:y}),o.length<3&&(0,l.jsx)($,{width:t,height:i,mode:r,onClick:()=>c.current&&c.current.click(),children:0===r?(0,l.jsx)(b,{icon:h.r8p}):(0,l.jsx)(f,{children:"\ucca8\ubd80\ud30c\uc77c"})}),(0,l.jsx)(Z,{ref:c,name:"images",onChange:t=>{t.preventDefault(),t.persist();const i=Array.from(t.target.files),n=[];for(let e=0;e<i.length;e++){if(i[e].size>5242880)return void alert("\ud30c\uc77c\ub2f9 5MB\ub97c \ucd08\uacfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");if(a.some((t=>t.name===i[e].name)))return void alert("\uac19\uc740 \uc774\ub984\uc758 \ud30c\uc77c\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.");const t=URL.createObjectURL(i[e]);n.push(t)}d((t=>(e([...t,...i]),[...t,...i])));const r=n?.map(((e,t)=>({name:i[t].name,url:e})));s((e=>e.concat(r))),t.target.value=""},accept:"image/jpg, image/jpeg, image/png, image/bmp, image/webp"})]})};c.propTypes={appendFilesToFormData:o().func,width:o().string,height:o().string,mode:o().number};const g=(0,s.ZP)(d.h)`
  & > * + * {
    margin-left: 5px;
  }
`,p=(0,s.ZP)(g)`
  width: ${({mode:e})=>0!==e&&"100%"};
  margin-left: ${({mode:e})=>0!==e&&"5px"};
  overflow-x: ${({mode:e})=>0!==e&&"auto"};
`,m=(0,s.ZP)(g)``,x=(0,s.ZP)(d.h)`
  width: fit-content;
  height: 2.25rem;
  padding: 0 1.5rem 0 1rem;
  background-color: #eee;
  border-radius: 30px;
`,u=s.ZP.span`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,f=s.ZP.span`
  font-size: ${({theme:e})=>e.fontSize.xxxs};
`,w=s.ZP.img`
  width: 6.25rem;
  height: 5.625rem;
  object-fit: cover;
`,A=s.ZP.button`
  position: relative;
  top: ${({mode:e})=>0!==e?"0":"-96px"};
  right: ${({mode:e})=>0===e?"-73%":"-12px"};
  background-color: #000;
  opacity: 0.7;
  border-radius: ${({mode:e})=>0!==e&&"50%"};
`,j=(0,s.ZP)(a.G)`
  color: #fff;
`,$=s.ZP.button`
  width: ${({width:e})=>e||"6.25rem"};
  height: ${({height:e})=>e||"5.625rem"};
  background-color: ${({mode:e})=>0===e?"#585858":"#EBE8E1"};
  color: ${({mode:e})=>0!==e&&"#3F3F3F"};
  font-size: ${({mode:e,theme:t})=>0!==e&&t.fontSize.xxxs};

  min-width: ${({mode:e})=>0!==e&&"5.5rem"};
  margin-left: ${({mode:e})=>0!==e&&"auto"};
`,b=(0,s.ZP)(a.G)`
  font-size: ${({theme:e})=>e.fontSize.xxl};
  color: #fff;
`,Z=s.ZP.input.attrs((()=>({type:"file"})))`
  display: none;
  -webkit-appearance: none;
  appearance: none;
`,P=c},7688:(e,t,i)=>{i.d(t,{Z:()=>A});var n=i(1386),r=i.n(n),o=i(5655),s=i(9892),a=i(12),h=i(5381),d=i(2556);const l=({currPage:e=1,setCurrPage:t,lastPageIdx:i=1})=>{const n=10,r=Math.floor((e-1)/n),o=Math.floor((i-1)/n),s=r*n+1,h=r===o&&i%n!==0?i%n:n,l=Array.from({length:h},((e,t)=>s+t));return(0,d.jsxs)(c,{row:"center",col:"center",children:[(0,d.jsx)(p,{icon:a._Wx,onClick:()=>t(1)}),(0,d.jsx)(m,{icon:a.EyR,onClick:()=>t(Math.max(1,s-n))}),(0,d.jsx)(f,{children:l?.map((i=>(0,d.jsx)(w,{onClick:()=>t(i),active:e===i,children:i},i)))}),(0,d.jsx)(x,{icon:a.yOZ,onClick:()=>t(Math.min(i,s+n))}),(0,d.jsx)(u,{icon:a.ccb,onClick:()=>t(i)})]})};l.propTypes={currPage:r().number,setCurrPage:r().func,lastPageIdx:r().number};const c=(0,o.ZP)(h.Z)`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`,g=(0,o.ZP)(s.G)`
  margin: 8px;
  font-size: 1rem;
  color: #687587;
  cursor: pointer;
`,p=(0,o.ZP)(g)``,m=(0,o.ZP)(g)``,x=(0,o.ZP)(g)``,u=(0,o.ZP)(g)``,f=(0,o.ZP)(h.Z)``,w=o.ZP.button`
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
`,A=l},3461:(e,t,i)=>{i.d(t,{Z:()=>k});var n=i(4519),r=i(1386),o=i.n(r),s=i(5655),a=i(5381);const h=s.ZP.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`,d=s.ZP.div`
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
`,c=(0,s.ZP)(a.h)`
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
`,m=s.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,x=(0,s.ZP)(a.h)`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,u=s.ZP.input`
  width: ${e=>e.width||"20.688rem"};
  height: ${e=>e.height||"3.313rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`,f=(0,s.ZP)(a.h)`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,w=s.ZP.textarea`
  width: ${e=>e.width||"20.688rem"};
  height: ${e=>e.height||"10.375rem"};
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
`,A=(0,s.ZP)(a.h)`
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
`,$=s.ZP.button`
  width: 1.125rem;
  height: 1.125rem;
  background-color: ${({theme:e})=>e.colors.error};
  border-radius: 50%;

  &:hover {
    background-color: #cf5757;
  }
`;var b=i(8229),Z=i(8735),P=i(2556);const y=({onClick:e,setIsOpen:t,hasButton:i,isBan:r,isWithdrawal:o=!1,handleWithdrawal:s,children:a})=>{const[y,k]=(0,n.useState)(1),[S,C]=(0,n.useState)(""),v=e=>{const t=e.target;let i=t.value;if("number"===t.type){if(i=parseInt(t.value),isNaN(parseInt(i)))return;if(Z.EM.test(i))return;i<parseInt(t.min)?i=parseInt(t.min):i>parseInt(t.max)&&(i=parseInt(t.max)),k(i)}else if("textarea"===t.type){if(i.length>t.maxLength||!Z.Ao.test(i))return;C(i)}};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{onClick:()=>t(!1)}),(0,P.jsxs)(d,{children:[(0,P.jsx)(l,{row:"end",col:"center",children:(0,P.jsx)($,{onClick:()=>t(!1)})}),(0,P.jsxs)(c,{dir:"col",row:"center",col:"center",height:r&&"25.438rem",children:[i&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{children:a}),o?(0,P.jsxs)(p,{row:"evenly",children:[(0,P.jsx)(b.Z,{type:"modal",message:"\ud655\uc778",onClick:s},"withdrawal"),(0,P.jsx)(b.Z,{type:"modal",message:"\ucde8\uc18c",onClick:()=>t(!1)},"exit")]}):(0,P.jsx)(b.Z,{type:"modal",message:"\ud655\uc778",onClick:e},"confirm")]}),r&&(0,P.jsxs)(m,{col:"center",children:[(0,P.jsxs)(x,{children:[(0,P.jsx)(g,{paddingRight:"15px",children:"\ubc34 \uc77c\uc218"}),(0,P.jsx)(u,{type:"number",min:1,max:200,step:1,value:y,onChange:v})]}),(0,P.jsxs)(f,{children:[(0,P.jsx)(g,{paddingRight:"15px",children:"\ubc34 \uc0ac\uc720"}),(0,P.jsx)(w,{maxLength:100,value:S,onChange:v})]}),(0,P.jsx)(A,{row:"center",children:(0,P.jsx)(j,{onClick:()=>e(y,S),width:"11rem",children:"\uc0ac\uc6a9\uc790 \ube44\ud65c\uc131\ud654"})})]})]})]})]})};y.propTypes={onClick:o().func,setIsOpen:o().func,isBan:o().bool,hasButton:o().bool,isWithdrawal:o().bool,handleWithdrawal:o().func,children:o().node};const k=y},2782:(e,t,i)=>{i.r(t),i.d(t,{default:()=>O});var n=i(4519),r=i(5655),o=i(47),s=i(7480),a=i(2674),h=i(3908),d=i(5381),l=i(3426),c=i(6862),g=i(7709),p=i(7688),m=i(8229),x=i(1386),u=i.n(x),f=i(9892),w=i(12),A=i(2556);const j=r.ZP.p`
  font-family: "Pretendard Variable";
  font-size: 53px;
  font-weight: 800;
  margin: 0;
`,$=(0,r.ZP)(d.h)`
  width: "100%";
  height: ${e=>e.height||"fit-content"};
  margin: ${e=>e.margin||"5px"};
  margin-top: ${e=>e.marginTop||null};
  margin-bottom: ${e=>e.marginBottom||null};
`,b=r.ZP.p`
  width: ${e=>e.width||"fit-content"};
  font-size: ${e=>e.fontSize||null};
  color: ${e=>e.color||null};
  margin: 0;
  margin-bottom: ${e=>e.marginBottom||null};
`,Z=r.ZP.img`
  width: ${e=>e.width||"150px"};
  height: ${e=>e.height||"150px"};
`,P=({isAnswer:e,content:t,createdAt:i,files:n})=>{return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)($,{row:"between",col:"start",marginTop:"10px",marginBottom:"15px",children:[(0,A.jsx)($,{children:(0,A.jsx)(b,{children:(r=e,(0,A.jsx)(j,{isTrue:r,children:r?"A.":"Q."}))})}),(0,A.jsxs)($,{dir:"col",children:[(0,A.jsx)(b,{width:"930px",fontSize:"20px",marginBottom:"10px",children:t}),n&&(0,A.jsx)($,{children:n.map(((e,t)=>(0,A.jsx)(Z,{src:e,alt:"\ucca8\ubd80\ud30c\uc77c"},t)))})]}),(0,A.jsx)(b,{fontSize:"18px",color:"#A7A7A7",children:i})]})});var r};P.propTypes={isAnswer:u().bool,content:u().string,createdAt:u().instanceOf(Date),files:u().arrayOf(u().string)};const y=P;var k=i(3700),S=i(3461);const C=(0,r.ZP)(d.h)`
  width: ${e=>e.width||"100%"};
  height: fit-content;
  margin-top: ${e=>e.marginTop||null};
  margin-bottom: ${e=>e.marginBottom||null};
  background-color: #ecebe6;
`,v=r.ZP.input`
  width: 91%;
  height: 3rem;
  background-color: transparent;
  border: 0;
  border: 1px solid #ccc;
`,B=r.ZP.button`
  flex: 1;
  height: 3rem;
  background-color: transparent;
  border: 1px solid #ccc;
`,z=(0,r.ZP)(f.G)`
  font-size: ${({theme:e})=>e.fontSize.xxs};
  transform: rotate(43deg);
`,I=(0,r.ZP)(d.h)`
  width: ${e=>e.width||"100%"};
  margin-top: ${({marginTop:e})=>e||"6px"};
  height: ${({height:e})=>e||"3rem"};
  border: 1px solid #ccc;
  overflow-x: auto;
`,E=({inquiryId:e,currPage:t,title:i,type:r})=>{const o=(0,n.useRef)(null),[s,a]=(0,n.useState)([]),[d,c]=(0,n.useState)(""),[g,p]=(0,n.useState)([]),[m,x]=(0,n.useState)(!1),[u]=(0,h.Z)(["sessionId"]),[f,j]=(0,n.useState)({method:"get",url:`/inquiry/${e}?page=${t}`,headers:{sessionId:u.sessionId}}),{response:$,loading:b,error:Z,fetchData:P}=(0,l.Z)(f);(0,n.useEffect)((()=>{null!==f&&P()}),[f]),(0,n.useEffect)((()=>{null!==$?f?.url.startsWith(`/inquiry/${e}?page=`)?(a($.result.list),c($.result.threadId)):f?.url.startsWith(`/inquiry/${d}`)&&(j({method:"get",url:`/inquiry/${e}?page=${t}`,headers:{sessionId:u.sessionId}}),a(null!==$?$.result.list:[])):Z&&(f?.url.startsWith(`/inquiry/${e}?page=`)?a([]):f?.url.startsWith(`/inquiry/${d}`)&&x(!0))}),[$,Z]);(0,n.useEffect)((()=>{console.log(g)}),[g]);return(0,A.jsxs)(A.Fragment,{children:[m&&(0,A.jsx)(S.Z,{onClick:()=>{x(!1)},hasButton:!0,children:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."}),(0,A.jsxs)(C,{dir:"col",children:[s?.map(((e,t)=>(0,A.jsx)(y,{isAnswer:e.isAnswer,content:e.content,createdAt:e.createdAt,files:e.file},t))),(0,A.jsxs)(C,{dir:"col",col:"center",marginBottom:"10px",children:[(0,A.jsxs)(C,{width:"98%",children:[(0,A.jsx)(v,{ref:o}),(0,A.jsx)(B,{onClick:()=>{const e=o.current.value;if(e.length<1||e.length>2e3)x(!0);else{const t=new FormData;t.append("title",i),t.append("content",e),g.forEach((e=>{t.append("files",e)})),t.append("type",r),j({method:"post",url:`/inquiry/${d}`,headers:{"Content-Type":"multipart/form-data",sessionId:u.sessionId},data:t})}},children:(0,A.jsx)(z,{icon:w.$40})})]}),(0,A.jsx)(I,{width:"98%",dir:"col",row:"between",col:"center",height:"none",children:(0,A.jsx)(k.Z,{width:"7rem",height:"2.9rem",mode:1,appendFilesToFormData:e=>{p(e||[])}})})]})]})]})};E.propTypes={inquiryId:u().number,currPage:u().number,title:u().string,type:u().number};const T=E,D=(0,r.ZP)(d.h)`
  margin-top: ${e=>e.marginTop||null};
  margin-bottom: ${e=>e.marginBottom||null};
`,F=r.ZP.div`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"fit-content"};
  min-height: ${e=>e.minHeight||null};
  border-top: ${e=>e.borderTop||null};
  border-bottom: ${e=>e.borderBottom||null};
  margin-top: ${e=>e.marginTop||null};
  margin-bottom: ${e=>e.marginBottom||null};
  margin-left: ${e=>e.marginLeft||null};
  margin-right: ${e=>e.marginRight||null};
`,R=()=>{const[e]=(0,h.Z)(["sessionId"]),[t,i]=(0,n.useState)([]),[r,o]=(0,n.useState)(1),[s,d]=(0,n.useState)(30),[x,u]=(0,n.useState)(null),[f,w]=(0,n.useState)({method:"get",url:`/inquiry/list?page=${r}`,headers:{sessionId:e.sessionId}}),{response:j,error:$,loading:b,fetchData:Z}=(0,l.Z)(f),P=(0,a.s0)();(0,n.useEffect)((()=>{Z()}),[f]),(0,n.useEffect)((()=>{null!==j?(d(0===j.result.lastPage?1:j.result.lastPage),i(j.result.list)):(d(1),i([]))}),[j,$]),(0,n.useEffect)((()=>{w({...f,url:`/inquiry/list?page=${r}`,headers:{sessionId:e.sessionId}})}),[r]);return(0,A.jsxs)(F,{width:"75rem",marginLeft:"auto",marginRight:"auto",children:[(0,A.jsx)(c.Z,{type:"inquiry"}),(0,A.jsx)(D,{row:"end",marginBottom:"20px",children:(0,A.jsx)(m.Z,{type:"smallDark",message:"\ubb38\uc758 \uc4f0\uae30",onClick:()=>{P("/inquiry/create")}})}),(0,A.jsxs)(F,{minHeight:"480px",borderTop:"5px solid #C2C2C2",children:[(0,A.jsx)(g.Z,{boardType:"header"}),t?.map(((e,t)=>(0,A.jsxs)("div",{children:[(0,A.jsx)(g.Z,{boardType:"inquiry",id:e.id,data:e,onClick:()=>{return t=e.id,void u((e=>e===t?null:t));var t}}),x===e.id&&(0,A.jsx)(T,{inquiryId:x,currPage:r,title:e.title,type:e.type})]},t)))]}),(0,A.jsx)(D,{marginTop:"25px",children:(0,A.jsx)(p.Z,{currPage:r,setCurrPage:o,lastPageIdx:s})})]})};R.propTypes={};const M=R,V=(0,r.ZP)(o.or)`
  background-color: ${({theme:e})=>e.colors.content};
  height: 100vh;
`,O=()=>(0,A.jsxs)(o.vs,{row:"center",col:"center",children:[(0,A.jsx)(s.Z,{type:"detail"}),(0,A.jsx)(o.J7,{dir:"col",width:"100%",children:(0,A.jsx)(V,{children:(0,A.jsx)(M,{})})})]})},47:(e,t,i)=>{i.d(t,{J7:()=>d,VR:()=>l,ZQ:()=>a,lt:()=>s,or:()=>c,vs:()=>h,xu:()=>g});var n=i(5655),r=i(5381);const o=n.F4`
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
`),h=(0,n.ZP)(r.h)`
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
`},3159:(e,t,i)=>{i.d(t,{r:()=>n});const n=e=>{const t=new Date(e),i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return"".concat(i,"-").concat(n,"-").concat(r," ").concat(o,":").concat(s,":").concat(a)}},8735:(e,t,i)=>{i.d(t,{Ao:()=>r,C_:()=>o,EM:()=>s,o0:()=>n});const n=/^[a-zA-Z0-9\uac00-\ud7a3]{1,15}$/,r=/^[a-zA-Z0-9\uac00-\ud7a3 -~]{1,100}/,o=/^[a-zA-Z\uac00-\ud7a30-9 -~].+$/,s=/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/},3653:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHzSURBVHgB3VXLccJADBXmxI0SNhXEqSBQAfjC8LngChIqACoIqcBc+AwXJxUQOqADNh1w4wTkySOD7bWNwy3RzM7aWus9SSvJRH9dSnmHvu9XD4dD37Ks5/P5bEOlAqNSaYtNQ/fZ6XSmdxHM5/MmgD2AVClfNNY4i8hKUy6Xyzd46TM49i/sA6gfAFLidTqdnvDuCrjC8haLxZCKRCAfjgC8B9C42+1OKEcQ6SsiHYozk3a7PcgkAHifvWHw4/FY7/V628T5jndE8RDVz2Yzu1wur5kEy4FTH+FZMkVBmOx5ElxEyYoJf8s2ASDujYvDIBDv2VjfSkuaiA3fV1B5BgHS0pDHMd0pXLaCVTMIEKLiHbnc0p0C4DD3jwYBDrmRqNVq3SRAOlWaHpev5VEZBAVFy77OIkmKlTS+YVina3MZJFyuvMsoiROESlxUMwtdUhAjiZ6jRG3B+DYIcMkbIWpQjiRIkhKOi0ujXTrZ87xqpVLZSTcOftsLmF8vsGMbHe30SwSu6/LscQMlZstqtbKLgkvuR/Ia66NYFfEMgRfvHAXI1jzIqIDn4RyilLGd+j9AdYzomk/NhtyAYY9w9XAxyH3VWMeOwUHDocwfjswmJlGUIzLW3egELUQQJRJPlfw2GVRj4wm6QWFMHcfZ07+VH6VyAk1f2PpbAAAAAElFTkSuQmCC"},2999:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIMSURBVHgB7VTBccJADDw8YeBJBzgVABXEVBD8Az7YFUAHkApwKrD5AMPHUAGmgpAK4g7Ckxdk1+iYg4EEfplJNCNLp5PWkk53Sv0Jmkwm9j3+1jdAHlmvx+NxD+JDpPZxTJ+bwBkEEZLjOC7RlsvlqlmAZVUowzCkfUl1NptVL+E88DOdTrsQ3n6/d1utVrrdbtfFYjFzgM7A5DwQ+0fAfD6fSlI2khjudrtVu90OssyxIHBVslW+728gUsm4i58PoT5xDT+Ha9oFO3VddyO+Q+w3UF0nW/ODPjawEYuzDy5j3YNjSf1A8NvAby7JDDQGOhDltBNKYv+cK8GlO+zzZrPpUrcM49oMhHgB1wEQqAtEO9pZgzqSrDUddUuyduDcE+CkUCg8oqyBWSozYrkiSQP0tgQ/j0loO3Fk2g7TwsOBMfsrSqobWXg6G10qKMKBfrIlMgQJJwzSxdm9ycgy0URPiy2BI3UDAVRPx0nPsV6IWjEz186VM5wE3AfbKJVyBZ9ngNvGvkllwUkpLclkIbIhIBmh3MTsMXhpnE3Efe0rcZ7gZB24NooReKSD0cuAF4N9lhF8xQ0NeHnk8Po6llOH86mdgPOtYADUjlFmSmdeZ2mdTZv8pAJumLMuk+Yeb6w6I3nl+gJ0ExGUreCtPLFfC5ByHQTyTWF2tm4LdPIa63d1GMVE/dOvoC/PEBkfRciCAQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=782.2ef0a443.chunk.js.map