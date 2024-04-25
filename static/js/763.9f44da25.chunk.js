"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[763],{3984:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(4519),s=r(3908),o=r(2322),i=r(1386),a=r.n(i),c=r(5655),l=r(6638),d=r(2120),h=r(5913),p=r(8417),u=r(7688),m=r(5381),g=r(5023),x=r(3426),f=r(2556);const j=({type:e,onThreadOpen:t})=>{const r=(0,o.sJ)(l.T0),[i]=(0,s.Z)(["sessionId"]),[a,c]=(0,n.useState)([]),[m,j]=(0,n.useState)(null),[b,Z]=(0,n.useState)(1),[P,$]=(0,n.useState)(30),[v,y]=(0,o.FV)(l.O6),[k,S]=(0,n.useState)({method:"get",url:`/inquiry/search?page=${b}`,headers:{sessionId:i.sessionId}}),{response:C,loading:E,error:I,fetchData:O}=(0,x.Z)(k,!1),F=["type","needAnswer"]?.map((e=>{let t;return"type"===e?t=[0,1,2,5,99]:"needAnswer"===e&&(t=[!0,!1]),{key:e,values:t}}));return(0,n.useEffect)((()=>{null!==k&&O()}),[k]),(0,n.useEffect)((()=>{null!==r&&S({...r,url:`/inquiry/search?page=${b}`})}),[r]),(0,n.useEffect)((()=>{null!==C?($(0===C.result.lastPage?1:C.result.lastPage),c(C.result.list?.map((({updatedAt:e,createdAt:t,id:r,type:n,title:s,needAnswer:o})=>({id:r,type:n,title:s,needAnswer:o}))))):($(1),c([]))}),[C]),(0,n.useEffect)((()=>{if(null!==m){const e=Object.entries(m).map((([e,t])=>`${e}=${t}`)).join("&");S({...k,url:`/inquiry/search?page=${b}&${e}`})}else S({...k,url:`/inquiry/search?page=${b}`})}),[b,m]),(0,f.jsx)(f.Fragment,{children:"home"!==e?(0,f.jsxs)(g.xu,{children:[(0,f.jsxs)(A,{row:"between",col:"center",children:[(0,f.jsx)(d.Z,{title:"inquiry"}),(0,f.jsx)(w,{marginTop:"1.313rem",marginRight:"0.75rem",children:(0,f.jsx)(p.Z,{filterOptions:F,selectedFilterOptions:m,setSelectedFilterOptions:j})})]}),(0,f.jsx)(h.Z,{isHome:!1,title:"inquiry",data:a,onSideOpen:t,isAnswerCompleted:v}),(0,f.jsx)(u.Z,{currPage:b,setCurrPage:Z,lastPageIdx:P})]}):(0,f.jsxs)(g.xu,{type:e,children:[(0,f.jsx)(d.Z,{type:e,title:"inquiry"}),(0,f.jsx)(h.Z,{isHome:!0,title:"inquiry",data:a,isAnswerCompleted:v,onSideOpen:t})]})})};j.propTypes={type:a().string,onThreadOpen:a().func,isAnswerCompleted:a().object,setIsAnswerCompleted:a().func};const A=(0,c.ZP)(m.h)`
  padding-bottom: 14px;
`,w=c.ZP.div`
  margin-top: ${({marginTop:e})=>e};
  margin-right: ${({marginRight:e})=>e};
`,b=j},8417:(e,t,r)=>{r.d(t,{Z:()=>A});var n=r(4519),s=r(5655),o=r(1386),i=r.n(o),a=r(5381);const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgB7ZPBDYMwDEV/1A7iETpKN2k3aHvskQ3YBLhxgw1gA9gAfkiQkCAQhROCJz0lShQrlm3gdKjJ/kMFYbT0Z9eBJ+12qmPgbgOmVkEYNS1xCJTj/EUfWCejMTzxKUKz9PDmCKh/LjBt4PJPcxwOtXEvMBM0olONYPouiC/mxXhjB0ILWlkThE/ThSc9eZU2SxdIGWIAAAAASUVORK5CYII=";var l=r(2556);const d={type:"\ubb38\uc758 \uc720\ud615",types:"\uc2e0\uace0 \uc720\ud615",needAnswer:"\ub2f5\ubcc0 \uc5ec\ubd80",createdAt:"\uc815\ub82c"},h=({filterOptions:e,selectedFilterOptions:t,setSelectedFilterOptions:r})=>{const[s,o]=(0,n.useState)(e?.reduce(((e,t)=>({...e,[t]:!1})),{})),[i,a]=(0,n.useState)(e?.filter((({key:e})=>"types"===e))?.reduce(((e,t)=>({...e,[t.key]:t.values.reduce(((e,t)=>({...e,[t]:!1})),{})})),{}));return(0,l.jsx)(m,{children:e?.map((({key:e,values:n},d)=>(0,l.jsxs)(g,{col:"center",children:[(0,l.jsx)("span",{children:p(e)}),(0,l.jsx)(x,{src:c,onClick:()=>o((t=>({...t,[e]:!t[e]}))),onMouseOver:e=>e.target.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7ZPfDYIwEMbvgAEcgRHcRDewgQEcAdlAFiAdgRFgA0eoGzBA//hVxQcj1TTxgejvpeXr3ZfLHUf0c/B0KYqiYuacIkDeqLWupZRj5oWyLLc4DhSJc47SNB1w7a6GxpgeQo+HnCJAhQoeJ1oE/EpET/c41qFEtGdo21Y+69lM/JHeVcLsByk/MkRwba3dUYAkSRpaJBx6FELk+D+rR/BtIxpshJrLyUKG6JPwvtO33whoZwoMLWiIwUhUuIHR6l6hgtbRn69yAX49Q5AwFGjCAAAAAElFTkSuQmCC"),onMouseOut:e=>e.target.setAttribute("src",c)}),s[e]&&(0,l.jsx)(f,{marginLeft:1===d?"30px":"",dir:"col",col:"center",children:n?.map(((n,s)=>(0,l.jsx)(j,{value:n,onClick:()=>((e,n)=>{if("types"!==e){const s={...t,[e]:n};r(s),o((t=>({...t,[e]:!t[e]})))}})(e,n),children:"types"===e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:"checkbox",checked:i[e][n],onChange:()=>((e,t)=>{a((n=>{const s={...n,[e]:{...n[e],[t]:!n[e][t]}};return r((t=>({...t,[e]:s[e]}))),s}))})(e,n)}),u(e,n)]}):u(e,n)},s)))})]},e)))})},p=e=>d[e]||"",u=(e,t)=>{switch(e){case"type":switch(t){case 0:return(0,l.jsx)("span",{children:"\ubc84\uadf8\ubb38\uc758"});case 1:return(0,l.jsx)("span",{children:"\uacc4\uc815\ubb38\uc758"});case 2:return(0,l.jsx)("span",{children:"\uc11c\ube44\uc2a4\ubb38\uc758"});case 5:return(0,l.jsx)("span",{children:"\ub2e8\uc5b4\ucd94\uac00\ubb38\uc758"});case 99:return(0,l.jsx)("span",{children:"\uae30\ud0c0\ubb38\uc758"})}case"needAnswer":switch(t){case!0:return(0,l.jsx)("span",{children:"NO"});case!1:return(0,l.jsx)("span",{children:"YES"});default:return""}case"types":switch(t){case"isOffensive":return(0,l.jsx)("span",{children:"\uacf5\uaca9\uc801\uc778 \uc5b8\uc5b4 \uc0ac\uc6a9"});case"isPoorManner":return(0,l.jsx)("span",{children:"\ube44\ub9e4\ub108 \ud589\uc704"});case"isCheating":return(0,l.jsx)("span",{children:"\uc0ac\uae30 \ud589\uc704"});default:return""}case"createdAt":switch(t){case"oldest":return(0,l.jsx)("span",{children:"\uacfc\uac70\uc21c"});case"latest":return(0,l.jsx)("span",{children:"\ucd5c\uc2e0\uc21c"})}}};h.propTypes={filterOptions:i().array,selectedFilterOptions:i().object,setSelectedFilterOptions:i().func};const m=(0,s.ZP)(a.h)`
  & > * + * {
    margin-left: 1.75rem;
  }
`,g=(0,s.ZP)(a.h)``,x=s.ZP.img`
  width: 19px;
  margin-left: 6px;

  &:hover {
    cursor: pointer;
  }
`,f=(0,s.ZP)(a.h).attrs({as:"ul"})`
  position: absolute;
  top: 165px;
  width: max-content;
  align-self: baseline;
  margin-top: 10px;
  margin-left: ${e=>e.marginLeft||""};
  background-color: ${({theme:e})=>e.colors.content};
  border: 2px solid #a2a2a2;
  border-radius: 1px;
  box-shadow: 0 1px 4px #00000019;
  text-align: center;
`,j=s.ZP.li`
  width: 100%;
  min-width: 60px;
  padding: 3px 10px;

  &:hover {
    background-color: #ebeae6;
    font-weight: 700;
    cursor: pointer;
  }
`,A=h},3700:(e,t,r)=>{r.d(t,{Z:()=>$});var n=r(4519),s=r(1386),o=r.n(s),i=r(5655),a=r(9892),c=r(12),l=r(5381),d=r(2556);const h=({appendFilesToFormData:e,width:t,height:r,mode:s=0})=>{const[o,i]=(0,n.useState)([]),[a,l]=(0,n.useState)([]),h=(0,n.useRef)(null),p=e=>{l((t=>t?.filter((t=>t.name!==e)))),i((t=>t?.filter((t=>t.name!==e))))},$=o?.map(((e,t)=>(0,d.jsxs)("div",{children:[(0,d.jsx)(j,{src:e.url,alt:e.name}),(0,d.jsx)(A,{mode:s,onClick:()=>p(e.name),children:(0,d.jsx)(w,{icon:c.EOp})})]},t))),v=a?.map(((e,t)=>(0,d.jsxs)(g,{col:"center",children:[(0,d.jsx)(x,{children:e.name}),(0,d.jsx)(A,{onClick:()=>p(e.name),children:(0,d.jsx)(w,{icon:c.EOp})})]},t)));return(0,d.jsxs)(u,{mode:s,col:0!==s&&"center",children:[0===s&&0!==o.length&&(0,d.jsx)(m,{children:$}),0!==s&&0!==o.length&&(0,d.jsx)(m,{children:v}),o.length<3&&(0,d.jsx)(b,{width:t,height:r,mode:s,onClick:()=>h.current&&h.current.click(),children:0===s?(0,d.jsx)(Z,{icon:c.r8p}):(0,d.jsx)(f,{children:"\ucca8\ubd80\ud30c\uc77c"})}),(0,d.jsx)(P,{ref:h,name:"images",onChange:t=>{t.preventDefault(),t.persist();const r=Array.from(t.target.files),n=[];for(let e=0;e<r.length;e++){if(r[e].size>5242880)return void alert("\ud30c\uc77c\ub2f9 5MB\ub97c \ucd08\uacfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");if(a.some((t=>t.name===r[e].name)))return void alert("\uac19\uc740 \uc774\ub984\uc758 \ud30c\uc77c\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.");const t=URL.createObjectURL(r[e]);n.push(t)}l((t=>(e([...t,...r]),[...t,...r])));const s=n?.map(((e,t)=>({name:r[t].name,url:e})));i((e=>e.concat(s))),t.target.value=""},accept:"image/jpg, image/jpeg, image/png, image/bmp, image/webp"})]})};h.propTypes={appendFilesToFormData:o().func,width:o().string,height:o().string,mode:o().number};const p=(0,i.ZP)(l.h)`
  & > * + * {
    margin-left: 5px;
  }
`,u=(0,i.ZP)(p)`
  width: ${({mode:e})=>0!==e&&"100%"};
  margin-left: ${({mode:e})=>0!==e&&"5px"};
  overflow-x: ${({mode:e})=>0!==e&&"auto"};
`,m=(0,i.ZP)(p)``,g=(0,i.ZP)(l.h)`
  width: fit-content;
  height: 2.25rem;
  padding: 0 1.5rem 0 1rem;
  background-color: #eee;
  border-radius: 30px;
`,x=i.ZP.span`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,f=i.ZP.span`
  font-size: ${({theme:e})=>e.fontSize.xxxs};
`,j=i.ZP.img`
  width: 6.25rem;
  height: 5.625rem;
  object-fit: cover;
`,A=i.ZP.button`
  position: relative;
  top: ${({mode:e})=>0!==e?"0":"-96px"};
  right: ${({mode:e})=>0===e?"-73%":"-12px"};
  background-color: #000;
  opacity: 0.7;
  border-radius: ${({mode:e})=>0!==e&&"50%"};
`,w=(0,i.ZP)(a.G)`
  color: #fff;
`,b=i.ZP.button`
  width: ${({width:e})=>e||"6.25rem"};
  height: ${({height:e})=>e||"5.625rem"};
  background-color: ${({mode:e})=>0===e?"#585858":"#EBE8E1"};
  color: ${({mode:e})=>0!==e&&"#3F3F3F"};
  font-size: ${({mode:e,theme:t})=>0!==e&&t.fontSize.xxxs};

  min-width: ${({mode:e})=>0!==e&&"5.5rem"};
  margin-left: ${({mode:e})=>0!==e&&"auto"};
`,Z=(0,i.ZP)(a.G)`
  font-size: ${({theme:e})=>e.fontSize.xxl};
  color: #fff;
`,P=i.ZP.input.attrs((()=>({type:"file"})))`
  display: none;
  -webkit-appearance: none;
  appearance: none;
`,$=h},1114:(e,t,r)=>{r.d(t,{Hi:()=>o});var n=r(5655);n.ZP.button`
  width: 100%;
  height: 4.3rem;
  background-color: ${({theme:e})=>e.colors.button.main.background};
  color: ${({theme:e})=>e.colors.button.main.text};
  font-size: 26px;
  font-weight: 700;

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.main.hover};
  }
`,n.ZP.button`
  width: 15rem;
  height: 4.688rem;
  background-color: ${({theme:e})=>e.colors.button.main.background};
  color: ${({theme:e})=>e.colors.button.main.text};
  font-size: ${({theme:e})=>e.fontSize.l};
  font-weight: 700;

  &:hover {
    background-color: ${({theme:e})=>e.colors.button.main.hover};
  }
`,n.ZP.button`
  width: 11rem;
  height: ${e=>e.width||"3.625rem"};
  background-color: ${({theme:e})=>e.colors.gray100};
  border: 1px solid ${({theme:e})=>e.colors.gray500};
  color: ${({theme:e})=>e.colors.gray600};
  font-size: ${({theme:e})=>e.fontSize.s};
  font-weight: 500;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray400};
  }
`,n.ZP.button`
  width: ${e=>e.width||"9rem"};
  height: ${e=>e.height||"4.3rem"};
  background-color: transparent;
  border: 2px solid ${({theme:e})=>e.colors.gray600};
  color: ${({theme:e})=>e.colors.text.sub};
  font-size: ${({theme:e})=>e.fontSize.s};
  font-weight: 700;

  &:hover {
    background-color: #ffffff32;
  }
`;const s=n.ZP.button`
  width: ${e=>e.width||"6rem"};
  height: ${e=>e.height||"3rem"};
  font-size: ${({theme:e})=>e.fontSize.xxxs};
  font-weight: 700;
`,o=((0,n.ZP)(s)`
  background-color: transparent;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #ffffff32;
  }
`,(0,n.ZP)(s)`
  background-color: #585858;
  color: #fff;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray600};
  }
`),i=((0,n.ZP)(s)`
  background-color: #aaa;
  color: #000;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray400};
  }
`,n.ZP.button`
  width: ${e=>e.width||"2.875rem"};
  height: ${e=>e.height||"1.688rem"};
  background-color: transparent;
  font-size: ${({theme:e})=>e.fontSize.xxxxs};
  font-weight: 700;
`);(0,n.ZP)(i)`
  border: 1px solid ${({theme:e})=>e.colors.success};
  color: ${({theme:e})=>e.colors.success};
`,(0,n.ZP)(i)`
  border: 1px solid ${({theme:e})=>e.colors.error};
  color: ${({theme:e})=>e.colors.error};
`},3763:(e,t,r)=>{r.r(t),r.d(t,{default:()=>X});var n=r(4519),s=r(3908),o=r(2322),i=r(5655),a=r(1386),c=r.n(a),l=r(8582),d=r(6638),h=r(3984),p=r(9892),u=r(5381),m=r(12),g=r(1114),x=r(3700),f=r(3461),j=r(3426),A=r(3159),w=r(2556);const b=({data:e,fetchAnswer:t})=>{const{threadId:r,type:i,threadTitle:a,nickname:c,updatedAt:l,list:h}=e,[p]=(0,s.Z)(["sessionId"]),u=(0,o.Zl)(d.T0),[g,b]=(0,o.FV)(d.O6),[N,V]=(0,n.useState)(h?.some((e=>!0===e.isAnswer))),[J,H]=(0,n.useState)(""),[G,K]=(0,n.useState)([]),[X,W]=(0,n.useState)(!1),[_,ee]=(0,n.useState)(null),[te,re]=(0,n.useState)(null),{response:ne,error:se,loading:oe,fetchData:ie}=(0,j.Z)(_,!1),ae=(0,n.useRef)(null);(0,n.useEffect)((()=>{null!==_&&ie()}),[_]),(0,n.useEffect)((()=>{null!==ne&&(V(!1),t(),u({method:"get",url:"/inquiry/search?page=1",headers:{sessionId:p.sessionId}}))}),[ne]);const ce=(0,n.useCallback)((e=>{K(e)}),[g,r]),le=(0,n.useCallback)((e=>{if(e.preventDefault(),""===J)return void W(!0);const t=new FormData;t.append("type",i),t.append("title",a),t.append("content",J),G?.forEach((e=>{t.append("files",e)})),ee({method:"post",url:`/inquiry/${r}?page=1`,headers:{sessionId:p.sessionId,"Content-Type":"multipart/form-data"},data:t}),ae.current.value="",re(Date.now())}),[r,(e,t)=>{b((r=>({...r,[e]:t})))}]);return(0,w.jsxs)(Z,{children:[X&&(0,w.jsx)(f.Z,{hasButton:!0,setIsOpen:W,onClick:()=>W(!1),children:"\ub2f5\ubcc0\uc744 \uc785\ub825\ud558\uc138\uc694"}),(0,w.jsxs)(P,{col:"center",children:[(0,w.jsx)(F,{icon:(e=>{switch(e){case 0:return m.QLU;case 1:return m.ILF;case 2:return m.MZe;case 5:return m.b7h;default:return m.mCs}})(i)}),(0,w.jsx)("span",{children:(e=>{switch(e){case 0:return"\ubc84\uadf8\ubb38\uc758";case 1:return"\uacc4\uc815\ubb38\uc758";case 2:return"\uc11c\ube44\uc2a4\ubb38\uc758";case 5:return"\ub2e8\uc5b4\ucd94\uac00\ubb38\uc758";case 99:return"\uae30\ud0c0\ubb38\uc758";default:return"\uae30\ud0c0"}})(i)})]}),(0,w.jsxs)($,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(k,{children:"Q."})}),(0,w.jsxs)(B,{children:[(0,w.jsxs)(v,{dir:"col",children:[(0,w.jsx)(y,{col:"center",children:(0,w.jsx)(S,{children:a})}),(0,w.jsxs)(E,{row:"between",col:"center",children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(O,{icon:m.ILF}),(0,w.jsx)(I,{children:c})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(O,{icon:m.SZw}),(0,w.jsx)(I,{children:l})]})]})]}),(0,w.jsxs)(T,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(C,{children:h?.[0].content})}),(0,w.jsx)("div",{children:h?.[0].file?.length>0&&h?.[0].file?.map(((e,t)=>(0,w.jsx)(Y,{src:e,width:"fit-content",height:"auto"},t)))})]})]})]}),h?.slice(1).map(((e,t)=>e.isAnswer?(0,w.jsxs)(z,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(k,{children:"A."})}),(0,w.jsxs)(B,{children:[(0,w.jsx)(Q,{marginTop:"10px",children:(0,w.jsx)(D,{children:e?.content})}),(0,w.jsx)(L,{children:e?.file?.length>0&&e?.file?.map(((e,t)=>(0,w.jsx)(Y,{src:e,alt:"\ucca8\ubd80\ud30c\uc77c"},t)))}),(0,w.jsx)(E,{row:"end",col:"center",children:(0,w.jsxs)("div",{children:[(0,w.jsx)(O,{icon:m.SZw}),(0,w.jsx)(I,{children:(0,A.r)(e?.createdAt)})]})})]})]},t):(0,w.jsxs)($,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(k,{children:"Q."})}),(0,w.jsx)(B,{children:(0,w.jsxs)(T,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(C,{children:e?.content})}),(0,w.jsx)("div",{children:e?.file?.length>0&&e?.file?.map(((e,t)=>(0,w.jsx)(Y,{src:e,width:"fit-content",height:"auto"},t)))}),(0,w.jsx)(E,{row:"end",col:"center",children:(0,w.jsxs)("div",{children:[(0,w.jsx)(O,{icon:m.SZw}),(0,w.jsx)(I,{children:(0,A.r)(e?.createdAt)})]})})]})})]},t))),(0,w.jsxs)(z,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(k,{children:"A."})}),(0,w.jsxs)(B,{children:[(0,w.jsx)(R,{placeholder:"\ub2f5\ubcc0\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:e=>{H(e.target.value)},ref:ae}),(0,w.jsx)(U,{row:"between",col:"center",children:(0,w.jsx)(Q,{children:(0,w.jsx)(x.Z,{width:"7rem",height:"2.9rem",mode:1,appendFilesToFormData:ce},te)})}),(0,w.jsx)(M,{row:"end",children:(0,w.jsx)(q,{width:"7rem",onClick:le,children:"\uc800\uc7a5"})})]})]})]})};b.propTypes={data:c().object,fetchAnswer:c().func};const Z=i.ZP.div`
  margin: 0 14px;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`,P=(0,i.ZP)(u.h)`
  position: relative;
  top: 30px;
  width: calc(100% + 3rem);
  margin-left: -1.5rem;
  padding-left: 2rem;
  height: 2rem;
  background-color: #00000020;
  font-weight: 700;

  & > * + * {
    margin-left: 10px;
  }
`,$=(0,i.ZP)(u.h)`
  width: 100%;
  margin-top: 2.75rem;

  & > * + * {
    margin-left: 0.75rem;
  }
`,v=(0,i.ZP)(u.h)`
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
`,y=(0,i.ZP)(u.h)`
  & > * + * {
    margin-left: 10px;
  }
`,k=i.ZP.span`
  font-family: "Pretendard Variable";
  font-size: 53px;
  font-weight: 800;
`,S=i.ZP.span`
  font-size: 1.5rem;
  font-weight: 700;
`,C=i.ZP.span`
  font-size: ${({theme:e})=>e.fontSize.xxs};
  font-weight: 500;
`,E=(0,i.ZP)(u.h)`
  margin-top: 4px;

  & > * + * {
    margin-left: 30px;
  }
`,I=i.ZP.span`
  margin-left: 9px;
  font-size: 16px;
  color: #a7a7a7;
`,O=(0,i.ZP)(p.G)`
  font-size: 16px;
  color: #a7a7a7;
`,F=(0,i.ZP)(O)`
  color: ${({theme:e})=>e.colors.text.main};
`,T=i.ZP.div`
  width: 100%;
  height: fit-content;
`,z=(0,i.ZP)(u.h)`
  margin-top: 1rem;

  & > * + * {
    margin-left: 0.75rem;
  }
`,B=i.ZP.div`
  width: 100%;
`,R=i.ZP.textarea`
  background-color: transparent;
  border: 1px solid #ccc;
  width: 100%;
  height: ${({height:e})=>e||"12.5rem"};
  margin-top: 0.5rem;
  padding: 10px 12px;
  font-size: ${({theme:e})=>e.fontSize.xxs};
`,U=(0,i.ZP)(u.h)`
  margin-top: ${({marginTop:e})=>e||"6px"};
  height: ${({height:e})=>e||"3rem"};
  border: 1px solid #ccc;
  overflow-x: auto;
`,Q=(0,i.ZP)(u.h)`
  width: 100%;
  margin-top: ${({marginTop:e})=>e||""};
`,D=i.ZP.textarea.attrs({readonly:!0})`
  width: 100%;
  margin: 0;
  border: 0;
  background-color: transparent;
  font-size: ${({theme:e})=>e.fontSize.xxs};
`,L=i.ZP.div``,Y=i.ZP.img`
  width: ${({width:e})=>e||"100px"};
  height: ${({height:e})=>e||"100px"};
  max-width: 100%;
`,M=(0,i.ZP)(u.h)`
  margin-top: 1rem;
`,q=(0,i.ZP)(g.Hi)``,N=b;var V=r(7480),J=r(5023),H=r(47);const G=({type:e})=>{const[t,r]=(0,o.FV)(l.N),[i,a]=(0,o.FV)(d.QC),[c]=(0,s.Z)(["sessionId"]),[p,u]=(0,n.useState)(null),[m,g]=(0,o.FV)(d.O6),[x,f]=(0,n.useState)(null),{response:A,loading:b,error:Z,fetchData:P}=(0,j.Z)(x,!1);(0,n.useEffect)((()=>{null===i?r(0):f({method:"get",url:`/inquiry/${i}?page=1`,headers:{sessionId:c.sessionId}})}),[]),(0,n.useEffect)((()=>{null!==x&&P()}),[x]),(0,n.useEffect)((()=>{null!==A&&u(A.result)}),[A]),(0,n.useEffect)((()=>{null!==p&&r(1)}),[p]);return(0,w.jsx)(H.vs,{row:"center",col:"center",children:(0,w.jsxs)(H.J7,{width:"82rem",dir:"col",children:[(0,w.jsx)(V.Z,{type:"admin-detail"}),(0,w.jsx)(H.or,{type:"admin",row:"between",children:(0,w.jsxs)(K,{row:"between",children:[(0,w.jsx)(h.Z,{type:e,onThreadOpen:e=>{f({method:"get",url:`/inquiry/${e}?page=1`,headers:{sessionId:c.sessionId}})},isAnswerCompleted:m,setIsAnswerCompleted:g}),1===t&&(0,w.jsx)(J.xu,{children:(0,w.jsx)(N,{data:p,fetchAnswer:P},p?.threadId)})]})})]})})};G.propTypes={type:c().string};const K=(0,i.ZP)(u.h)``,X=G},8582:(e,t,r)=>{r.d(t,{N:()=>n});const n=(0,r(2322).cn)({key:"isActiveSideContentTypeState",default:0})},3159:(e,t,r)=>{r.d(t,{r:()=>n});const n=e=>{const t=new Date(e),r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(s," ").concat(o,":").concat(i,":").concat(a)}}}]);
//# sourceMappingURL=763.9f44da25.chunk.js.map