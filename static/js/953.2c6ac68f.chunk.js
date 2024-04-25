"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[953],{7709:(e,t,r)=>{r.d(t,{Z:()=>m});r(4519);var n=r(5655),i=r(5381),o=r(1386),a=r.n(o),s=r(3159),c=r(3653),d=r(2999),l=r(2556);const h=(0,n.ZP)(i.h)`
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
`,x=(0,n.ZP)(p)`
  width: ${e=>e.width||"fit-content"};
  margin: ${e=>e.margin||"0"};
  margin-left: ${e=>e.marginLeft||null};
  margin-right: ${e=>e.marginRight||null};
  font-weight: ${e=>e.fontWeight||null};
`,u=n.ZP.p`
  color: ${e=>e.isTrue?"#6080FF":"#4B3F2C"};
  margin: 0;
`,f=n.ZP.td`
  width: ${e=>e.width||"200px"};
  text-align: ${e=>e.align||null};
`,A=({boardType:e,data:t,onClick:r})=>{return(0,l.jsx)(l.Fragment,{children:"notice"===e?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(h,{row:"between",col:"center",width:"100%",height:"40px",marginBottom:"10px",onClick:r,children:[(0,l.jsx)(x,{fontSize:"20px",children:t.title}),(0,l.jsxs)(h,{row:"between",width:"13.5rem",children:[(0,l.jsxs)(h,{col:"center",children:[(0,l.jsx)(g,{width:"20px",height:"20px",src:c,marginRight:"10px"}),(0,l.jsx)(x,{color:"#A7A7A7",fontSize:"18px",children:(0,s.r)((e=>e.createdAt||e.created_at)(t))})]}),(0,l.jsxs)(h,{col:"center",children:[(0,l.jsx)(g,{width:"20px",height:"20px",src:d,marginRight:"10px"}),(0,l.jsx)(x,{color:"#A7A7A7",fontSize:"18px",children:t.views})]})]})]})}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(h,{width:"100%",row:"between",col:"center",borderTop:"1px solid #C2C2C2",onClick:r,children:["header"===e&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)(f,{children:(0,l.jsx)(x,{margin:"7px",marginLeft:"15px",fontWeight:"700",fontSize:"22px",children:"\ubb38\uc758 \uc720\ud615"})}),(0,l.jsx)(f,{width:"700px",children:(0,l.jsx)(x,{margin:"7px",marginLeft:"15px",fontWeight:"700",fontSize:"22px",children:"\ubb38\uc758 \uc81c\ubaa9"})}),(0,l.jsx)(f,{align:"right",width:"200px",children:(0,l.jsx)(x,{margin:"7px",marginLeft:"50px",fontWeight:"700",fontSize:"22px",children:"\uc791\uc131\uc77c"})}),(0,l.jsx)(f,{align:"right",width:"180px",children:(0,l.jsx)(x,{margin:"7px",marginRight:"15px",fontWeight:"700",fontSize:"22px",width:"180px",children:"\ub2f5\ubcc0 \uc720\ubb34"})})]})})})}),"inquiry"===e&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)(f,{children:(0,l.jsx)(x,{margin:"7px",marginLeft:"15px",fontSize:"20px",width:"130px",children:(e=>{switch(e){case 0:return"\ubc84\uadf8 \uc81c\ubcf4 / \ubb38\uc81c \ud574\uacb0";case 1:return"\uacc4\uc815 \uad00\ub828 \ubb38\uc81c";case 2:return"\uc11c\ube44\uc2a4 \uc774\uc6a9 \uad00\ub828 \ubb38\uc758";case 99:return"\uae30\ud0c0 \ubb38\uc758"}})(t.type)})}),(0,l.jsx)(f,{width:"700px",children:(0,l.jsx)(x,{margin:"7px",fontSize:"22px",children:t.title})}),(0,l.jsx)(f,{children:(0,l.jsx)(x,{margin:"7px",fontSize:"20px",width:"120px",children:t.createdAt})}),(0,l.jsx)(f,{align:"right",width:"180px",children:(0,l.jsx)(x,{margin:"7px",fontWeight:"700",fontSize:"20px",width:"120px",children:(n=t.needsAnswer,(0,l.jsx)(u,{isTrue:n,children:n?"YES":"NO"}))})})]})})})})]})})})});var n};A.propTypes={boardType:a().string,isAnswer:a().bool,data:a().object,onClick:a().func};const m=A},6862:(e,t,r)=>{r.d(t,{Z:()=>l});r(4519);var n=r(5655),i=r(1386),o=r.n(i),a=r(2556);const s=n.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
`,c=n.ZP.p`
  color: ${e=>e.color||"#828282"};
  font-family: "Gugi";
  font-size: ${e=>e.fontSize||"30px"};
  font-weight: ${e=>e.fontWeight||"500"};
  margin: 53px 0px 0 64px;
`,d=({type:e})=>(0,a.jsx)(s,{children:(0,a.jsx)(c,{children:(()=>{switch(e){case"notice":return"\uacf5\uc9c0\uc0ac\ud56d";case"inquiry":return"\ubb38\uc758\uc0ac\ud56d";case"create":return"\ubb38\uc758 \ub4f1\ub85d"}})()})});d.propTypes={type:o().string};const l=d},7688:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(1386),i=r.n(n),o=r(5655),a=r(9892),s=r(12),c=r(5381),d=r(2556);const l=({currPage:e=1,setCurrPage:t,lastPageIdx:r=1})=>{const n=10,i=Math.floor((e-1)/n),o=Math.floor((r-1)/n),a=i*n+1,c=i===o&&r%n!==0?r%n:n,l=Array.from({length:c},((e,t)=>a+t));return(0,d.jsxs)(h,{row:"center",col:"center",children:[(0,d.jsx)(p,{icon:s._Wx,onClick:()=>t(1)}),(0,d.jsx)(x,{icon:s.EyR,onClick:()=>t(Math.max(1,a-n))}),(0,d.jsx)(A,{children:l?.map((r=>(0,d.jsx)(m,{onClick:()=>t(r),active:e===r,children:r},r)))}),(0,d.jsx)(u,{icon:s.yOZ,onClick:()=>t(Math.min(r,a+n))}),(0,d.jsx)(f,{icon:s.ccb,onClick:()=>t(r)})]})};l.propTypes={currPage:i().number,setCurrPage:i().func,lastPageIdx:i().number};const h=(0,o.ZP)(c.Z)`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`,g=(0,o.ZP)(a.G)`
  margin: 8px;
  font-size: 1rem;
  color: #687587;
  cursor: pointer;
`,p=(0,o.ZP)(g)``,x=(0,o.ZP)(g)``,u=(0,o.ZP)(g)``,f=(0,o.ZP)(g)``,A=(0,o.ZP)(c.Z)``,m=o.ZP.button`
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
`,w=l},4972:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(4519),i=r(5655),o=r(1386),a=r.n(o),s=r(9892),c=r(5381),d=r(12),l=r(8735),h=r(2556);const g=({searchType:e,setSearchKeyword:t})=>{const r=(0,n.useRef)(),i=e=>{e.preventDefault(),l.C_.test(r.current.value)&&(t(r.current.value),r.current.value=e.target.value)};return(0,h.jsxs)(p,{col:"center",field:e,children:[(0,h.jsx)(u,{type:"text",readOnly:!0,value:e}),(0,h.jsx)(f,{type:"text",field:e,placeholder:"\uac80\uc0c9\uc5b4 \uc785\ub825",onKeyDown:e=>{"Enter"===e.key&&i(e)},ref:r}),(0,h.jsx)(A,{onClick:e=>i(e),children:(0,h.jsx)(m,{icon:d.Y$T})})]})};g.propTypes={searchType:a().string,setSearchKeyword:a().func};const p=(0,i.ZP)(c.h)`
  border: 2px solid ${({theme:e})=>e.colors.gray200};
  border-radius: 10px;
  width: 18.5rem;
  height: ${e=>e.height||"3.2rem"};
`,x=i.ZP.input`
  border: 0;
  background-color: transparent;
  font-size: ${({theme:e})=>e.fontSize.xxxs};
`,u=(0,i.ZP)(x)`
  width: ${({value:e})=>"\ub2c9\ub124\uc784"===e?"5.25rem":"4.2rem"};
  padding: 0 16px;
  border-right: 2px solid ${({theme:e})=>e.colors.gray200};

  &:hover {
    cursor: default;
  }
`,f=(0,i.ZP)(x)`
  flex: 1;
  margin: 0 10px;
  width: ${({field:e})=>"\ub2c9\ub124\uc784"===e?"9.25rem":"70%"};

  &::placeholder {
    color: #a7a7a7;
  }
`,A=i.ZP.button`
  background-color: transparent;
  width: 22px;
  margin-right: 15px;
  padding: 0;
`,m=(0,i.ZP)(s.G)`
  font-size: 19px;
`,w=g},7480:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(4519),i=r(2322),o=r(3908),a=r(2674),s=r(5655),c=r(1843),d=r(1386),l=r.n(d),h=r(3426),g=r(5381),p=r(2556);const x=({type:e="default"})=>{const t=(0,a.TH)(),[r,i]=(0,n.useState)(!1),o=(0,n.useRef)([n.createRef(),n.createRef(),n.createRef()]);(0,n.useEffect)((()=>{const e=t.pathname;e.includes("notice")?i(0):e.includes("inquiry")?i(1):e.includes("member")&&i(2)}),[t]);return(0,p.jsx)(u,{align:"flex-end",width:"20rem",row:"guest"===e?"end":"between",onClick:e=>{const t=o.current.findIndex((t=>t.current===e.target));i(t)},children:"clearTab"===e||"detail"===e?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{to:"/notice/list",children:(0,p.jsx)(A,{type:e,ref:o.current[0],clicked:0===r,children:"\uacf5\uc9c0"})}),(0,p.jsx)(f,{to:"/inquiry/list",children:(0,p.jsx)(A,{type:e,ref:o.current[1],clicked:1===r,children:"1:1 \ubb38\uc758"})}),(0,p.jsx)(f,{to:"/member/myInfo",children:(0,p.jsx)(A,{type:e,ref:o.current[2],clicked:2===r,children:"\ub0b4 \uc815\ubcf4"})})]}):(0,p.jsx)(f,{to:"/member/join",children:(0,p.jsx)(A,{type:e,ref:o.current[2],clicked:2===r,children:"\ud68c\uc6d0\uac00\uc785"})})})},u=(0,s.ZP)(g.h)`
  flex-basis: ${e=>e.width||auto};
  align-self: ${e=>e.align||auto};
`,f=(0,s.ZP)(c.rU)`
  align-self: flex-end;
`,A=(0,s.ZP)(g.h).attrs({row:"center",col:"center"})`
  width: 6.3rem;
  height: ${e=>e.clicked?"2.25rem":"3rem"};
  background-color: ${e=>"detail"===e.type?e.clicked?e.theme.colors.content:e.theme.colors.paleBlueGray:"transparent"};
  border-radius: 15px 15px 0 0;
  padding-top: ${({type:e})=>"clearTab"===e?"0":"14px"};
  font-family: "Noto Sans KR";
  font-weight: 600;
  font-size: 19px;
  color: #4e4e4e;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
    background-color: ${e=>"detail"===e.type?e.clicked?"#F2F2F2":"#94a7c1":"transparent"};
  }
`;x.propTypes={type:l().string};const m=x;var w=r(9892),b=r(12),j=r(6628);const y=({type:e="default"})=>{const t=(0,i.Zl)(j.E),[r,s]=(0,n.useState)("transparent"),[d,l]=(0,n.useState)(),g=(0,a.s0)(),[x,,u]=(0,o.Z)(["sessionId"]),[f,A]=(0,n.useState)(null),{response:y,loading:E,error:D,fetchData:R}=(0,h.Z)(f,!1);(0,n.useEffect)((()=>{null!==f&&R()}),[f]),(0,n.useEffect)((()=>{null!==y&&(t(null),u("sessionId",{path:"/"}),x?.userRole&&u("userRole",{path:"/"}),g("/"))}),[y]);const z=()=>{window.scrollY>0?(s("#EAEFF9"),l("-14px 15px 30px #EAEFF9")):(s("transparent"),l("none"))};return(0,n.useEffect)((()=>(window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z))),[]),(0,p.jsx)(k,{color:r,shadow:d,children:(0,p.jsxs)(S,{type:e,children:[(0,p.jsx)(c.rU,{to:"/",children:(0,p.jsx)(Z,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA/CAYAAAB3s08iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUNSURBVHgB7ZtRdps4FIavHOd5OGfa57orGLqC4NnAZFYQZwVNVzDOCpKuIO4Kxt1AQ1dQuoLS5yYtfY5t9ZcFNghkQBBDHX3n5NhCQhGXX1dXkkVksXQJI0sGz312C6N4SZoTjf3gzteVH5ClEdaADRlSh3iuM0qn/SAK65ZDnoMPJ5UdIT8qqKNSubp0rMDhDaPhl+Tv71fOi6JS6TKMjm+VOtx0PtHRleZ/XSjlTqkFOlWgyoofvYITf0m0CIQ68N2jmgyIOfI+BoV9C6Tyhu6A+Av+CGNmrwzIiP2//mQ0wkeEx72tWwdGzVPcd8ppNUPynOgYaX7DHyng2BjQ5G2Xswh1fk3CP4sHwwO6MNvGP22VqJSG+0NuqPyPiNPQZ9K/ucnVRIlQ3l88W0uI/4k6liG1wMaAJm+7DE5HUADNdPl+cH8hPsfuc/gk7mzbIpWYheFlfBvn64gCUYUwVvoZtkpU28TeIa6bUkv0ogtDgcGKKFSVmFCsPJViJaZqiZXHQ6qHi5eTu5gE170w4Ifg7l/xqSoxAY0dl9WxVeLzifB5ar6p8vBCrvRZKQNy4jPSlmQjSk1v5NsUqsiVE2/epZp47p8IKQYw3Mopml0KoyAPo+r9XF+HiBWP4fNWJ0UDhvCFsp6HIDZ2K2wMiMadk7Zxa//iJWlhvKLyKDdlBgZkNMBb5iPd1FwqahDi61xfy3C0a7TFdTEawycOL5Fs34BdoFMevs1XxBHGsMm2NHeKlJgoD/lKEC57idp7Ukr0d0cI2bbo8jv2gew1VOHllMcWF/6n6OvYfTZJXXWKlSiVp9ac9JLYJ3rb64kSd0cICRjc3qIeX5fft0D6rXjbnNNPkYYRLuV1+q9GNQHue0+bbvoQiG6LOk4o48fboVcGJPZwJZSXJJNRE0qsbEAMhhgk7qfbOtYDRhD7Z49apqIBF2HsfBN0TtjPBq6DEmfN36FLfdykYuXlSsVKjFPRftpWDbsirWBXpPeMNWBD+jWI9INLMe3bJh9CsjwemUFErt7qlsRNWGICH/nUAXJ9k5+Vl2zWRrULO9npUzMQ7X+kzmCYodCkrFTTNh6cD0yUx9aLE+VAMGeYk5+YKvEAB5FqykvhrTcVDJWoGjASgSO1xrK1ZaMy4L/F9ib892qUdu14HmGYaf4OjoUMttnaxPfXmDKeYQR+I3bzqCIZA8YbzT79lgzFSraXn1zxL0WrKei2E+VSvI6ZXxHfxcEG0kJ5sjctL4tLLK9FPhYf5tSAAw6ki5WXkCzrFyixFpUMKJf02Q1VhNMSi5Dfr+kJUEOB1cICyaCWH/mdOdguLDbVsU2KnrN6/yHewE+DrnuNzax/5H6MOQfsA8UGPXewp/GHpoCzayewKkYGlHsOi4sdRSLaM2LRE7HgS7iPU7lNKkmUmL8jqzxOqze4JkbkWm03VCD/UWVLcN+INmEXLlq/4g1SifnSqvLEz+HqP9PBxYGYRcxugzuGGcV5lfKIA89FeYQ8MzLArkg3pJIHVX86VobYRWvzJ2R9xiqwIdaADTEdhTHSDXYM98u9hzFdYRoHzjHaVRrlDh3bhRtiDdgQoy68Pcyio+x4w+Fg6gPXRwj0+etfS03pCWC7cEOsARtiGgcWHnNIsbftzK4x9YH+rmMRTwnbhRtiDdgQoy4sDq/Iwyo62j1O1WdMN5W89OEVlbaPU/UZ24UbYg3YENODNmX4ZLFY9sAvzd8QMBSWnGUAAAAASUVORK5CYII=",type:e})}),("detail"===e||"clearTab"===e||"guest"===e)&&(0,p.jsx)(m,{type:e}),("admin"===e||"admin-detail"===e)&&(0,p.jsxs)(P,{children:[(0,p.jsx)(c.rU,{to:"/game",children:(0,p.jsxs)(v,{children:[(0,p.jsx)(w.G,{icon:b.zc,color:"#FAC138"}),"\uac8c\uc784\uc2dc\uc791"]})}),(0,p.jsx)(C,{onClick:()=>A({method:"get",url:"/user/signout",headers:{sessionId:x.sessionId}}),children:(0,p.jsx)($,{icon:b.HEx})})]})]})})};y.propTypes={type:l().string};const k=(0,s.ZP)(g.h).attrs((()=>({as:"header",row:"center"})))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({color:e})=>e};
  box-shadow: ${({shadow:e})=>e};
  z-index: 3;
`,S=(0,s.ZP)(g.h).attrs((({type:e})=>({row:"big"===e?"center":"between",col:"center"})))`
  width: ${({type:e})=>"admin"===e?"100%":"admin-detail"===e?"84rem":"75rem"};
  height: ${({type:e})=>"big"===e?"10rem":"guest"===e?"8.5rem":"admin-detail"===e?"6.5rem":"7.5rem"};
  padding: ${({type:e})=>"admin"===e?"0 60px":"0 30px"};
`,Z=s.ZP.img`
  ${({type:e})=>(e=>"big"===e?" width: 5.5rem; ":" width: 4rem; ")(e)};

  &:hover {
    cursor: pointer;
  }
`,P=(0,s.ZP)(g.h)``,v=s.ZP.button`
  width: 11.8rem;
  height: 4.5rem;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-weight: 800;
  background-color: #fce8b7;
  border: 5px solid #ffd46c;
  border-radius: 22px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: #403a34;

  & > svg {
    margin-right: 12px;
  }

  &:hover {
    background-color: rgb(255 211 104);
  }
`,C=s.ZP.button`
  width: 5rem;
  height: 4.5rem;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-weight: 800;
  background-color: rgb(219 219 219);
  border: 5px solid rgb(187 187 187);
  border-radius: 22px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:hover {
    background-color: rgb(207 207 207);
  }
`,$=(0,s.ZP)(w.G)`
  font-size: 25px;
  color: ${({theme:e})=>e.colors.text.main};
`,E=y},5953:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(4519),i=r(5655),o=r(47),a=r(7480),s=r(2674),c=r(5381),d=r(3426),l=r(8735),h=r(6862),g=r(4972),p=r(7709),x=r(7688),u=r(2556);const f=(0,i.ZP)(c.h)`
  margin-right: ${e=>e.marginRight};
  margin-top: ${e=>e.marginTop||null};
  margin-bottom: ${e=>e.marginBottom||null};
`,A=i.ZP.div`
  width: ${e=>e.width||"fit-content"};
  height: ${e=>e.height||"fit-content"};
  margin-left: ${e=>e.marginLeft||null};
  margin-right: ${e=>e.marginRight||null};
  padding: ${e=>e.padding};
`,m=()=>{const[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(1),[o,a]=(0,n.useState)(30),[c,m]=(0,n.useState)(""),[w,b]=(0,n.useState)({method:"get",url:`/notice/list?page=${r}`}),{response:j,error:y,loading:k,fetchData:S}=(0,d.Z)(w),Z=(0,s.s0)();(0,n.useEffect)((()=>{null!==w&&S()}),[w]),(0,n.useEffect)((()=>{null!==j?w.url.includes("/search?q=")?(a(1),t(j.result),console.log(j.result)):(a(0===j.lastPage?1:j.lastPage),t(j.list),console.log(j.list)):(a(1),t([]))}),[j,y]),(0,n.useEffect)((()=>{""!==c&&l.C_.test(c)&&b({...w,url:`/notice/search?q=${c}&page=${r}`})}),[r,c]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(A,{width:"75rem",marginLeft:"auto",marginRight:"auto",children:[(0,u.jsx)(h.Z,{type:"notice"}),(0,u.jsx)(f,{row:"end",marginBottom:"25px",marginRight:"56px",children:(0,u.jsx)(g.Z,{searchType:"\uc81c\ubaa9",setSearchKeyword:m})}),(0,u.jsx)(A,{width:"100%",height:"fit-content",padding:"10px 72px",children:e?.map(((e,t)=>(0,u.jsx)(p.Z,{boardType:"notice",id:e.id,data:e,onClick:()=>{return t=e.id,void Z(`/notice/${t}`);var t}},t)))}),(0,u.jsx)(f,{marginTop:"25px",children:(0,u.jsx)(x.Z,{currPage:r,setCurrPage:i,lastPageIdx:o})})]})})},w=(0,i.ZP)(o.or)`
  background-color: ${({theme:e})=>e.colors.content};
  height: 100vh;
`,b=()=>(0,u.jsxs)(o.vs,{row:"center",col:"center",children:[(0,u.jsx)(a.Z,{type:"detail"}),(0,u.jsx)(o.J7,{dir:"col",width:"100%",children:(0,u.jsx)(w,{children:(0,u.jsx)(m,{})})})]})},47:(e,t,r)=>{r.d(t,{J7:()=>d,VR:()=>l,ZQ:()=>s,lt:()=>a,or:()=>h,vs:()=>c,xu:()=>g});var n=r(5655),i=r(5381);const o=n.F4`
  from { opacity: 0;}
  to {opacity: 1;}
`,a=n.F4`
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
`),c=(0,n.ZP)(i.h)`
  animation: ${o} 0.5s ease-in-out;
`,d=(0,n.ZP)(i.h)`
  width: ${e=>e.width||"75rem"};
  height: 100vh;
`,l=(0,n.ZP)(i.h)`
  width: 36.75rem; // 기존 40.75rem
  height: ${e=>e.height||"fit-content"};
`,h=n.ZP.main`
  width: 100%;
  margin-top: ${({type:e})=>"big"===e?"10rem":"admin"!==e?"7.5rem":"6.5rem"};
`,g=(0,n.ZP)(i.h)`
  width: 100%;
  max-width: 100%;
  height: 43.25rem;
  padding: 10px;
  background-color: ${({bgColor:e,theme:t})=>e||t.colors.content};
`;(0,n.ZP)(i.h)`
  flex-basis: ${e=>e.width||auto};
  align-self: ${e=>e.align||auto};
`},5381:(e,t,r)=>{r.d(t,{Z:()=>s,h:()=>n});const n=r(5655).ZP.div`
  display: flex;
  flex-direction: ${({dir:e})=>i(e)};
  justify-content: ${({row:e})=>o(e)};
  align-items: ${({col:e})=>a(e)};
  position: ${({position:e})=>e};
  top: ${({top:e})=>e};
  bottom: ${({bottom:e})=>e};
  left: ${({left:e})=>e};
  right: ${({right:e})=>e};
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  margin: ${({margin:e})=>e};
  padding: ${({padding:e})=>e};
  flex: ${({flex:e})=>e};
  background-color: ${({bgColor:e})=>e};
  box-shadow: ${({shadow:e})=>e};
  border: ${({border:e})=>e};
  border-top: ${({borderTop:e})=>e};
  border-right: ${({borderRight:e})=>e};
  border-bottom: ${({borderBottom:e})=>e};
  border-left: ${({borderLeft:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
  z-index: ${({zIndex:e})=>e};

  ${({clicky:e})=>e&&"\n    :hover {\n      cursor: pointer;\n    }\n  "}
`,i=e=>{if("col"===e)return"column"},o=e=>{switch(e){case"center":return"center";case"start":default:return"flex-start";case"end":return"flex-end";case"between":return"space-between";case"around":return"space-around";case"evenly":return"space-evenly"}},a=e=>{switch(e){case"center":return"center";case"start":return"flex-start";case"end":return"flex-end";case"baseline":return"baseline";default:return"stretch"}},s=n},3426:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(4519),i=r(9191),o=r(1857);const a=i.Z.create({baseURL:o._n}),s=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=(0,n.useRef)(!1),[i,o]=(0,n.useState)(null),[s,c]=(0,n.useState)(""),[d,l]=(0,n.useState)(!1),h=(0,n.useCallback)((async()=>{l(!0),c("");try{const t=await a.request(e);o(t.data)}catch(s){var t;c(null===(t=s.response)||void 0===t?void 0:t.data.error)}finally{l(!1)}}),[e]);return(0,n.useEffect)((()=>{r.current||t&&(h(),r.current=!0)}),[t]),{response:i,error:s,loading:d,fetchData:h}}},6628:(e,t,r)=>{r.d(t,{E:()=>i,XI:()=>s,fZ:()=>o,fg:()=>c,gs:()=>d,ls:()=>a});var n=r(2322);const i=(0,n.cn)({key:"userInfoState",default:null}),o=((0,n.nZ)({key:"avatarUrlState",get:e=>{let{get:t}=e;const r=t(i);return null===r||void 0===r?void 0:r.avatarUrl}}),(0,n.cn)({key:"isActiveAccountState",default:!0})),a=(0,n.cn)({key:"waitingPlayerListState",default:[]}),s=((0,n.cn)({key:"waitingPlayerState",default:{isReady:!1,isHost:!0}}),(0,n.cn)({key:"playingPlayerListState",default:[]})),c=(0,n.cn)({key:"playingPlayerState",default:{myTurn:!1,score:0}}),d=(0,n.nZ)({key:"syncPlayingPlayerToListState",get:e=>{let{get:t}=e;const r=t(s),n=t(c);return r.map((e=>e.id===n.id?n:e))},set:(e,t)=>{let{set:r}=e;r(s,t)}})},3159:(e,t,r)=>{r.d(t,{r:()=>n});const n=e=>{const t=new Date(e),r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0"),s=String(t.getSeconds()).padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(i," ").concat(o,":").concat(a,":").concat(s)}},8735:(e,t,r)=>{r.d(t,{Ao:()=>i,C_:()=>o,EM:()=>a,o0:()=>n});const n=/^[a-zA-Z0-9\uac00-\ud7a3]{1,15}$/,i=/^[a-zA-Z0-9\uac00-\ud7a3 -~]{1,100}/,o=/^[a-zA-Z\uac00-\ud7a30-9 -~].+$/,a=/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/},3653:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHzSURBVHgB3VXLccJADBXmxI0SNhXEqSBQAfjC8LngChIqACoIqcBc+AwXJxUQOqADNh1w4wTkySOD7bWNwy3RzM7aWus9SSvJRH9dSnmHvu9XD4dD37Ks5/P5bEOlAqNSaYtNQ/fZ6XSmdxHM5/MmgD2AVClfNNY4i8hKUy6Xyzd46TM49i/sA6gfAFLidTqdnvDuCrjC8haLxZCKRCAfjgC8B9C42+1OKEcQ6SsiHYozk3a7PcgkAHifvWHw4/FY7/V628T5jndE8RDVz2Yzu1wur5kEy4FTH+FZMkVBmOx5ElxEyYoJf8s2ASDujYvDIBDv2VjfSkuaiA3fV1B5BgHS0pDHMd0pXLaCVTMIEKLiHbnc0p0C4DD3jwYBDrmRqNVq3SRAOlWaHpev5VEZBAVFy77OIkmKlTS+YVina3MZJFyuvMsoiROESlxUMwtdUhAjiZ6jRG3B+DYIcMkbIWpQjiRIkhKOi0ujXTrZ87xqpVLZSTcOftsLmF8vsGMbHe30SwSu6/LscQMlZstqtbKLgkvuR/Ia66NYFfEMgRfvHAXI1jzIqIDn4RyilLGd+j9AdYzomk/NhtyAYY9w9XAxyH3VWMeOwUHDocwfjswmJlGUIzLW3egELUQQJRJPlfw2GVRj4wm6QWFMHcfZ07+VH6VyAk1f2PpbAAAAAElFTkSuQmCC"},2999:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIMSURBVHgB7VTBccJADDw8YeBJBzgVABXEVBD8Az7YFUAHkApwKrD5AMPHUAGmgpAK4g7Ckxdk1+iYg4EEfplJNCNLp5PWkk53Sv0Jmkwm9j3+1jdAHlmvx+NxD+JDpPZxTJ+bwBkEEZLjOC7RlsvlqlmAZVUowzCkfUl1NptVL+E88DOdTrsQ3n6/d1utVrrdbtfFYjFzgM7A5DwQ+0fAfD6fSlI2khjudrtVu90OssyxIHBVslW+728gUsm4i58PoT5xDT+Ha9oFO3VddyO+Q+w3UF0nW/ODPjawEYuzDy5j3YNjSf1A8NvAby7JDDQGOhDltBNKYv+cK8GlO+zzZrPpUrcM49oMhHgB1wEQqAtEO9pZgzqSrDUddUuyduDcE+CkUCg8oqyBWSozYrkiSQP0tgQ/j0loO3Fk2g7TwsOBMfsrSqobWXg6G10qKMKBfrIlMgQJJwzSxdm9ycgy0URPiy2BI3UDAVRPx0nPsV6IWjEz186VM5wE3AfbKJVyBZ9ngNvGvkllwUkpLclkIbIhIBmh3MTsMXhpnE3Efe0rcZ7gZB24NooReKSD0cuAF4N9lhF8xQ0NeHnk8Po6llOH86mdgPOtYADUjlFmSmdeZ2mdTZv8pAJumLMuk+Yeb6w6I3nl+gJ0ExGUreCtPLFfC5ByHQTyTWF2tm4LdPIa63d1GMVE/dOvoC/PEBkfRciCAQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=953.2c6ac68f.chunk.js.map