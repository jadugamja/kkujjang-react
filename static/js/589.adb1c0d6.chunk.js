"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[589],{8229:(e,r,t)=>{t.d(r,{Z:()=>g});t(4519);var o=t(5655),n=t(1386),s=t.n(n),a=t(2556);const i=e=>{switch(e){case"bigBrown":return{width:"100%",height:"4.3rem"};case"smallBrown":return{width:"15rem",height:"4.688rem"};case"modal":return{width:"11rem",height:"3.625rem"};case"bigTransparent":return{width:"9rem",height:"4.3rem"};case"smallTransparent":case"smallDark":case"smallGray":return{width:"6rem",height:"3rem"};case"miniBlue":case"miniRed":return{width:"2.875rem",height:"1.688rem"}}},l=e=>{switch(e){case"bigBrown":case"smallBrown":return{bgColor:"#413014",textColor:"#ffffff",hoverBgColor:"#554730"};case"modal":return{bgColor:"#e5e5e5",textColor:"#7d7d7d",hoverBgColor:"#c1c1c1"};case"bigTransparent":return{bgColor:"transparent",textColor:"#363636",hoverBgColor:"#ffffff32"};case"smallTransparent":return{bgColor:"transparent",textColor:"#000",hoverBgColor:"#ffffff32"};case"smallDark":return{bgColor:"#585858",textColor:"#fff",hoverBgColor:"#7d7d7d"};case"smallGray":return{bgColor:"#aaa",textColor:"#000",hoverBgColor:"#c1c1c1"};case"miniBlue":return{bgColor:"transparent",textColor:"#486dff"};case"miniRed":return{bgColor:"transparent",textColor:"#ff6c6c"}}},c=e=>{switch(e){case"bigBrown":return{size:"27px",weight:"700"};case"smallBrown":return{size:"28px",weight:"700"};case"modal":return{size:"22px",weight:"500"};case"bigTransparent":return{size:"22px",weight:"700"};case"smallTransparent":case"smallDark":case"smallGray":return{size:"18px",weight:"700"};case"miniBlue":case"miniRed":return{size:"14px",weight:"700"}}},d=e=>{switch(e){case"modal":return{style:"solid",width:"1px",color:"#929292"};case"bigTransparent":return{style:"solid",width:"2px",color:"#929292"};case"smallTransparent":return{style:"solid",width:"1px",color:"#000"};case"miniBlue":return{style:"solid",width:"1px",color:"#486dff"};case"miniRed":return{style:"solid",width:"1px",color:"#ff6c6c"};default:return{style:null,width:null,color:null}}},u=o.ZP.button`
  width: ${({type:e})=>i(e).width};
  height: ${({type:e})=>i(e).height};

  background-color: ${({type:e})=>l(e).bgColor};
  color: ${({type:e})=>l(e).textColor};

  font-size: ${({type:e})=>c(e).size};
  font-weight: ${({type:e})=>c(e).weight};

  // border: ${({type:e})=>d(e).border};

  border-style: ${({type:e})=>d(e)?.style};
  border-width: ${({type:e})=>d(e)?.width};
  border-color: ${({type:e})=>d(e)?.color};

  border-radius: ${({type:e})=>d(e)?.radius};

  &:hover {
    ${({type:e})=>l(e).hoverBgColor};
  }
`,h=({type:e,onClick:r,message:t})=>(0,a.jsx)(u,{type:e,onClick:r,children:t});h.propTypes={type:s().string,message:s().string,onClick:s().func};const g=h},7480:(e,r,t)=>{t.d(r,{Z:()=>B});var o=t(4519),n=t(2322),s=t(3908),a=t(2674),i=t(5655),l=t(1843),c=t(1386),d=t.n(c),u=t(3426),h=t(5381),g=t(2556);const f=({type:e="default"})=>{const r=(0,a.TH)(),[t,n]=(0,o.useState)(!1),s=(0,o.useRef)([o.createRef(),o.createRef(),o.createRef()]);(0,o.useEffect)((()=>{const e=r.pathname;e.includes("notice")?n(0):e.includes("inquiry")?n(1):e.includes("member")&&n(2)}),[r]);return(0,g.jsx)(p,{align:"flex-end",width:"20rem",row:"guest"===e?"end":"between",onClick:e=>{const r=s.current.findIndex((r=>r.current===e.target));n(r)},children:"clearTab"===e||"detail"===e?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{to:"/notice/list",children:(0,g.jsx)(b,{type:e,ref:s.current[0],clicked:0===t,children:"\uacf5\uc9c0"})}),(0,g.jsx)(m,{to:"/inquiry/list",children:(0,g.jsx)(b,{type:e,ref:s.current[1],clicked:1===t,children:"1:1 \ubb38\uc758"})}),(0,g.jsx)(m,{to:"/member/myInfo",children:(0,g.jsx)(b,{type:e,ref:s.current[2],clicked:2===t,children:"\ub0b4 \uc815\ubcf4"})})]}):(0,g.jsx)(m,{to:"/member/join",children:(0,g.jsx)(b,{type:e,ref:s.current[2],clicked:2===t,children:"\ud68c\uc6d0\uac00\uc785"})})})},p=(0,i.ZP)(h.h)`
  flex-basis: ${e=>e.width||auto};
  align-self: ${e=>e.align||auto};
`,m=(0,i.ZP)(l.rU)`
  align-self: flex-end;
`,b=(0,i.ZP)(h.h).attrs({row:"center",col:"center"})`
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
`;f.propTypes={type:d().string};const y=f;var w=t(9892),x=t(12),k=t(6628);const A=({type:e="default"})=>{const r=(0,n.Zl)(k.E),[t,i]=(0,o.useState)("transparent"),[c,d]=(0,o.useState)(),h=(0,a.s0)(),[f,,p]=(0,s.Z)(["sessionId"]),[m,b]=(0,o.useState)(null),{response:A,loading:B,error:I,fetchData:R}=(0,u.Z)(m,!1);(0,o.useEffect)((()=>{null!==m&&R()}),[m]),(0,o.useEffect)((()=>{null!==A&&(r(null),p("sessionId",{path:"/"}),f?.userRole&&p("userRole",{path:"/"}),h("/"))}),[A]);const z=()=>{window.scrollY>0?(i("#EAEFF9"),d("-14px 15px 30px #EAEFF9")):(i("transparent"),d("none"))};return(0,o.useEffect)((()=>(window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z))),[]),(0,g.jsx)(C,{color:t,shadow:c,children:(0,g.jsxs)(v,{type:e,children:[(0,g.jsx)(l.rU,{to:"/",children:(0,g.jsx)(P,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA/CAYAAAB3s08iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUNSURBVHgB7ZtRdps4FIavHOd5OGfa57orGLqC4NnAZFYQZwVNVzDOCpKuIO4Kxt1AQ1dQuoLS5yYtfY5t9ZcFNghkQBBDHX3n5NhCQhGXX1dXkkVksXQJI0sGz312C6N4SZoTjf3gzteVH5ClEdaADRlSh3iuM0qn/SAK65ZDnoMPJ5UdIT8qqKNSubp0rMDhDaPhl+Tv71fOi6JS6TKMjm+VOtx0PtHRleZ/XSjlTqkFOlWgyoofvYITf0m0CIQ68N2jmgyIOfI+BoV9C6Tyhu6A+Av+CGNmrwzIiP2//mQ0wkeEx72tWwdGzVPcd8ppNUPynOgYaX7DHyng2BjQ5G2Xswh1fk3CP4sHwwO6MNvGP22VqJSG+0NuqPyPiNPQZ9K/ucnVRIlQ3l88W0uI/4k6liG1wMaAJm+7DE5HUADNdPl+cH8hPsfuc/gk7mzbIpWYheFlfBvn64gCUYUwVvoZtkpU28TeIa6bUkv0ogtDgcGKKFSVmFCsPJViJaZqiZXHQ6qHi5eTu5gE170w4Ifg7l/xqSoxAY0dl9WxVeLzifB5ar6p8vBCrvRZKQNy4jPSlmQjSk1v5NsUqsiVE2/epZp47p8IKQYw3Mopml0KoyAPo+r9XF+HiBWP4fNWJ0UDhvCFsp6HIDZ2K2wMiMadk7Zxa//iJWlhvKLyKDdlBgZkNMBb5iPd1FwqahDi61xfy3C0a7TFdTEawycOL5Fs34BdoFMevs1XxBHGsMm2NHeKlJgoD/lKEC57idp7Ukr0d0cI2bbo8jv2gew1VOHllMcWF/6n6OvYfTZJXXWKlSiVp9ac9JLYJ3rb64kSd0cICRjc3qIeX5fft0D6rXjbnNNPkYYRLuV1+q9GNQHue0+bbvoQiG6LOk4o48fboVcGJPZwJZSXJJNRE0qsbEAMhhgk7qfbOtYDRhD7Z49apqIBF2HsfBN0TtjPBq6DEmfN36FLfdykYuXlSsVKjFPRftpWDbsirWBXpPeMNWBD+jWI9INLMe3bJh9CsjwemUFErt7qlsRNWGICH/nUAXJ9k5+Vl2zWRrULO9npUzMQ7X+kzmCYodCkrFTTNh6cD0yUx9aLE+VAMGeYk5+YKvEAB5FqykvhrTcVDJWoGjASgSO1xrK1ZaMy4L/F9ib892qUdu14HmGYaf4OjoUMttnaxPfXmDKeYQR+I3bzqCIZA8YbzT79lgzFSraXn1zxL0WrKei2E+VSvI6ZXxHfxcEG0kJ5sjctL4tLLK9FPhYf5tSAAw6ki5WXkCzrFyixFpUMKJf02Q1VhNMSi5Dfr+kJUEOB1cICyaCWH/mdOdguLDbVsU2KnrN6/yHewE+DrnuNzax/5H6MOQfsA8UGPXewp/GHpoCzayewKkYGlHsOi4sdRSLaM2LRE7HgS7iPU7lNKkmUmL8jqzxOqze4JkbkWm03VCD/UWVLcN+INmEXLlq/4g1SifnSqvLEz+HqP9PBxYGYRcxugzuGGcV5lfKIA89FeYQ8MzLArkg3pJIHVX86VobYRWvzJ2R9xiqwIdaADTEdhTHSDXYM98u9hzFdYRoHzjHaVRrlDh3bhRtiDdgQoy68Pcyio+x4w+Fg6gPXRwj0+etfS03pCWC7cEOsARtiGgcWHnNIsbftzK4x9YH+rmMRTwnbhRtiDdgQoy4sDq/Iwyo62j1O1WdMN5W89OEVlbaPU/UZ24UbYg3YENODNmX4ZLFY9sAvzd8QMBSWnGUAAAAASUVORK5CYII=",type:e})}),("detail"===e||"clearTab"===e||"guest"===e)&&(0,g.jsx)(y,{type:e}),("admin"===e||"admin-detail"===e)&&(0,g.jsxs)(j,{children:[(0,g.jsx)(l.rU,{to:"/game",children:(0,g.jsxs)(S,{children:[(0,g.jsx)(w.G,{icon:x.zc,color:"#FAC138"}),"\uac8c\uc784\uc2dc\uc791"]})}),(0,g.jsx)(Z,{onClick:()=>b({method:"get",url:"/user/signout",headers:{sessionId:f.sessionId}}),children:(0,g.jsx)($,{icon:x.HEx})})]})]})})};A.propTypes={type:d().string};const C=(0,i.ZP)(h.h).attrs((()=>({as:"header",row:"center"})))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({color:e})=>e};
  box-shadow: ${({shadow:e})=>e};
  z-index: 3;
`,v=(0,i.ZP)(h.h).attrs((({type:e})=>({row:"big"===e?"center":"between",col:"center"})))`
  width: ${({type:e})=>"admin"===e?"100%":"admin-detail"===e?"84rem":"75rem"};
  height: ${({type:e})=>"big"===e?"10rem":"guest"===e?"8.5rem":"admin-detail"===e?"6.5rem":"7.5rem"};
  padding: ${({type:e})=>"admin"===e?"0 60px":"0 30px"};
`,P=i.ZP.img`
  ${({type:e})=>(e=>"big"===e?" width: 5.5rem; ":" width: 4rem; ")(e)};

  &:hover {
    cursor: pointer;
  }
`,j=(0,i.ZP)(h.h)``,S=i.ZP.button`
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
`,Z=i.ZP.button`
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
`,$=(0,i.ZP)(w.G)`
  font-size: 25px;
  color: ${({theme:e})=>e.colors.text.main};
`,B=A},5381:(e,r,t)=>{t.d(r,{Z:()=>i,h:()=>o});const o=t(5655).ZP.div`
  display: flex;
  flex-direction: ${({dir:e})=>n(e)};
  justify-content: ${({row:e})=>s(e)};
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
`,n=e=>{if("col"===e)return"column"},s=e=>{switch(e){case"center":return"center";case"start":default:return"flex-start";case"end":return"flex-end";case"between":return"space-between";case"around":return"space-around";case"evenly":return"space-evenly"}},a=e=>{switch(e){case"center":return"center";case"start":return"flex-start";case"end":return"flex-end";case"baseline":return"baseline";default:return"stretch"}},i=o},3426:(e,r,t)=>{t.d(r,{Z:()=>i});var o=t(4519),n=t(9191),s=t(1857);const a=n.Z.create({baseURL:s._n}),i=function(e){let r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const t=(0,o.useRef)(!1),[n,s]=(0,o.useState)(null),[i,l]=(0,o.useState)(""),[c,d]=(0,o.useState)(!1),u=(0,o.useCallback)((async()=>{d(!0),l("");try{const r=await a.request(e);s(r.data)}catch(i){var r;l(null===(r=i.response)||void 0===r?void 0:r.data.error)}finally{d(!1)}}),[e]);return(0,o.useEffect)((()=>{t.current||r&&(u(),t.current=!0)}),[r]),{response:n,error:i,loading:c,fetchData:u}}},6628:(e,r,t)=>{t.d(r,{E:()=>n,XI:()=>i,fZ:()=>s,fg:()=>l,gs:()=>c,ls:()=>a});var o=t(2322);const n=(0,o.cn)({key:"userInfoState",default:null}),s=((0,o.nZ)({key:"avatarUrlState",get:e=>{let{get:r}=e;const t=r(n);return null===t||void 0===t?void 0:t.avatarUrl}}),(0,o.cn)({key:"isActiveAccountState",default:!0})),a=(0,o.cn)({key:"waitingPlayerListState",default:[]}),i=((0,o.cn)({key:"waitingPlayerState",default:{isReady:!1,isHost:!0}}),(0,o.cn)({key:"playingPlayerListState",default:[]})),l=(0,o.cn)({key:"playingPlayerState",default:{myTurn:!1,score:0}}),c=(0,o.nZ)({key:"syncPlayingPlayerToListState",get:e=>{let{get:r}=e;const t=r(i),o=r(l);return t.map((e=>e.id===o.id?o:e))},set:(e,r)=>{let{set:t}=e;t(i,r)}})}}]);
//# sourceMappingURL=589.adb1c0d6.chunk.js.map