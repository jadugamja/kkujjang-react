"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[206],{6862:(t,e,i)=>{i.d(e,{Z:()=>c});i(4519);var r=i(5655),n=i(1386),o=i.n(n),A=i(2556);const g=r.ZP.div`
  width: ${t=>t.width||"fit-content"};
  height: ${t=>t.height||"fit-content"};
`,l=r.ZP.p`
  color: ${t=>t.color||"#828282"};
  font-family: "Gugi";
  font-size: ${t=>t.fontSize||"30px"};
  font-weight: ${t=>t.fontWeight||"500"};
  margin: 53px 0px 0 64px;
`,d=({type:t})=>(0,A.jsx)(g,{children:(0,A.jsx)(l,{children:(()=>{switch(t){case"notice":return"\uacf5\uc9c0\uc0ac\ud56d";case"inquiry":return"\ubb38\uc758\uc0ac\ud56d";case"create":return"\ubb38\uc758 \ub4f1\ub85d"}})()})});d.propTypes={type:o().string};const c=d},1206:(t,e,i)=>{i.r(e),i.d(e,{default:()=>B});var r=i(4519),n=i(5655),o=i(47),A=i(7480),g=i(2674),l=i(5381),d=i(3159),c=i(3653),s=i(2999),a=i(3426),h=i(6862),m=i(8229),p=i(2556);const x=(0,n.ZP)(l.h)`
  width: ${t=>t.width||"100%"};
  height: ${t=>t.height||"fit-content"};
  border-top: ${t=>t.borderTop||null};
  border-bottom: ${t=>t.borderBottom||null};
  margin-top: ${t=>t.marginTop||null};
  margin-bottom: ${t=>t.marginBottom||null};
`,u=n.ZP.div`
  width: ${t=>t.width||"100%"};
  height: ${t=>t.height||"fit-content"};
  border-top: ${t=>t.borderTop||null};
  border-bottom: ${t=>t.borderBottom||null};
  margin-top: ${t=>t.marginTop||null};
  margin-bottom: ${t=>t.marginBottom||null};
  margin-left: ${t=>t.marginLeft||null};
  margin-right: ${t=>t.marginRight||null};
`,f=n.ZP.p`
  color: ${t=>t.color||"#32250F"};
  font-size: ${t=>t.fontSize||"32px"};
  margin: 0;
`,w=n.ZP.img`
  width: ${t=>t.width||"24px"};
  height: ${t=>t.height||"24px"};
  margin-right: ${t=>t.marginRight||null};
`,j=()=>{const{noticeId:t}=(0,g.UO)(),[e,i]=(0,r.useState)([]),[n,o]=(0,r.useState)({method:"get",url:`/notice/${t}`}),{response:A,error:l,loading:j,fetchData:S}=(0,a.Z)(n),B=(0,g.s0)();(0,r.useEffect)((()=>{null!==n&&S()}),[n]),(0,r.useEffect)((()=>{i(null!==A?A.result:[])}),[A,l]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(u,{width:"75rem",marginLeft:"auto",marginRight:"auto",children:[(0,p.jsx)(h.Z,{type:"notice"}),(0,p.jsxs)(u,{borderTop:"5px solid #C2C2C2",borderBottom:"5px solid #C2C2C2",children:[(0,p.jsxs)(x,{dir:"col",children:[(0,p.jsx)(u,{marginTop:"15px",marginBottom:"10px",children:(0,p.jsx)(f,{children:e.title})}),(0,p.jsxs)(x,{width:"400px",marginBottom:"15px",children:[(0,p.jsxs)(x,{col:"center",children:[(0,p.jsx)(w,{src:c,marginRight:"10px"}),(0,p.jsx)(f,{color:"#A7A7A7",fontSize:"20px",children:(0,d.r)(e.created_at)})]}),(0,p.jsxs)(x,{col:"center",children:[(0,p.jsx)(w,{src:s,marginRight:"10px"}),(0,p.jsx)(f,{color:"#A7A7A7",fontSize:"20px",children:e.views})]})]})]}),(0,p.jsxs)(x,{borderTop:"1px solid #C2C2C2",dir:"col",marginBottom:"10px",children:[(0,p.jsxs)(u,{dir:"col",height:"390px",marginTop:"15px",children:[(0,p.jsx)("div",{children:e.content}),e.files&&(0,p.jsx)(p.Fragment,{children:e.files?.map(((t,e)=>(0,p.jsx)("img",{src:t},e)))})]}),(0,p.jsx)(x,{row:"end",children:(0,p.jsx)(m.Z,{type:"smallGray",message:"\ubaa9\ub85d",onClick:()=>{B("/notice/list")}})})]})]})]})})},S=(0,n.ZP)(o.or)`
  background-color: ${({theme:t})=>t.colors.content};
  height: 100vh;
`,B=()=>(0,p.jsxs)(o.vs,{row:"center",col:"center",children:[(0,p.jsx)(A.Z,{type:"detail"}),(0,p.jsx)(o.J7,{dir:"col",width:"100%",children:(0,p.jsx)(S,{children:(0,p.jsx)(j,{})})})]})},47:(t,e,i)=>{i.d(e,{J7:()=>d,VR:()=>c,ZQ:()=>g,lt:()=>A,or:()=>s,vs:()=>l,xu:()=>a});var r=i(5655),n=i(5381);const o=r.F4`
  from { opacity: 0;}
  to {opacity: 1;}
`,A=r.F4`
  50% {
      opacity: 0;
  }
`,g=(r.ZP.div`
  display: none;
`,r.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42.25rem;
  background-image: linear-gradient(#dbe1ed, #ffffff00);
  z-index: -1;
`),l=(0,r.ZP)(n.h)`
  animation: ${o} 0.5s ease-in-out;
`,d=(0,r.ZP)(n.h)`
  width: ${t=>t.width||"75rem"};
  height: 100vh;
`,c=(0,r.ZP)(n.h)`
  width: 36.75rem; // 기존 40.75rem
  height: ${t=>t.height||"fit-content"};
`,s=r.ZP.main`
  width: 100%;
  margin-top: ${({type:t})=>"big"===t?"10rem":"admin"!==t?"7.5rem":"6.5rem"};
`,a=(0,r.ZP)(n.h)`
  width: 100%;
  max-width: 100%;
  height: 43.25rem;
  padding: 10px;
  background-color: ${({bgColor:t,theme:e})=>t||e.colors.content};
`;(0,r.ZP)(n.h)`
  flex-basis: ${t=>t.width||auto};
  align-self: ${t=>t.align||auto};
`},3159:(t,e,i)=>{i.d(e,{r:()=>r});const r=t=>{const e=new Date(t),i=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),A=String(e.getMinutes()).padStart(2,"0"),g=String(e.getSeconds()).padStart(2,"0");return"".concat(i,"-").concat(r,"-").concat(n," ").concat(o,":").concat(A,":").concat(g)}},3653:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHzSURBVHgB3VXLccJADBXmxI0SNhXEqSBQAfjC8LngChIqACoIqcBc+AwXJxUQOqADNh1w4wTkySOD7bWNwy3RzM7aWus9SSvJRH9dSnmHvu9XD4dD37Ks5/P5bEOlAqNSaYtNQ/fZ6XSmdxHM5/MmgD2AVClfNNY4i8hKUy6Xyzd46TM49i/sA6gfAFLidTqdnvDuCrjC8haLxZCKRCAfjgC8B9C42+1OKEcQ6SsiHYozk3a7PcgkAHifvWHw4/FY7/V628T5jndE8RDVz2Yzu1wur5kEy4FTH+FZMkVBmOx5ElxEyYoJf8s2ASDujYvDIBDv2VjfSkuaiA3fV1B5BgHS0pDHMd0pXLaCVTMIEKLiHbnc0p0C4DD3jwYBDrmRqNVq3SRAOlWaHpev5VEZBAVFy77OIkmKlTS+YVina3MZJFyuvMsoiROESlxUMwtdUhAjiZ6jRG3B+DYIcMkbIWpQjiRIkhKOi0ujXTrZ87xqpVLZSTcOftsLmF8vsGMbHe30SwSu6/LscQMlZstqtbKLgkvuR/Ia66NYFfEMgRfvHAXI1jzIqIDn4RyilLGd+j9AdYzomk/NhtyAYY9w9XAxyH3VWMeOwUHDocwfjswmJlGUIzLW3egELUQQJRJPlfw2GVRj4wm6QWFMHcfZ07+VH6VyAk1f2PpbAAAAAElFTkSuQmCC"},2999:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIMSURBVHgB7VTBccJADDw8YeBJBzgVABXEVBD8Az7YFUAHkApwKrD5AMPHUAGmgpAK4g7Ckxdk1+iYg4EEfplJNCNLp5PWkk53Sv0Jmkwm9j3+1jdAHlmvx+NxD+JDpPZxTJ+bwBkEEZLjOC7RlsvlqlmAZVUowzCkfUl1NptVL+E88DOdTrsQ3n6/d1utVrrdbtfFYjFzgM7A5DwQ+0fAfD6fSlI2khjudrtVu90OssyxIHBVslW+728gUsm4i58PoT5xDT+Ha9oFO3VddyO+Q+w3UF0nW/ODPjawEYuzDy5j3YNjSf1A8NvAby7JDDQGOhDltBNKYv+cK8GlO+zzZrPpUrcM49oMhHgB1wEQqAtEO9pZgzqSrDUddUuyduDcE+CkUCg8oqyBWSozYrkiSQP0tgQ/j0loO3Fk2g7TwsOBMfsrSqobWXg6G10qKMKBfrIlMgQJJwzSxdm9ycgy0URPiy2BI3UDAVRPx0nPsV6IWjEz186VM5wE3AfbKJVyBZ9ngNvGvkllwUkpLclkIbIhIBmh3MTsMXhpnE3Efe0rcZ7gZB24NooReKSD0cuAF4N9lhF8xQ0NeHnk8Po6llOH86mdgPOtYADUjlFmSmdeZ2mdTZv8pAJumLMuk+Yeb6w6I3nl+gJ0ExGUreCtPLFfC5ByHQTyTWF2tm4LdPIa63d1GMVE/dOvoC/PEBkfRciCAQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=206.df76ff70.chunk.js.map