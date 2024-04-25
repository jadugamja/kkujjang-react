"use strict";(self.webpackChunkkkujjang=self.webpackChunkkkujjang||[]).push([[182],{3439:(e,t,r)=>{r.d(t,{Z:()=>$});var n=r(4519),o=r(3908),s=r(2322),i=r(1386),l=r.n(i),a=r(5655),c=r(2120),d=r(5913),h=r(8229),u=r(4972),g=r(7688),p=r(5023),f=r(5381),m=r(3426),x=r(6638),b=r(8735),j=r(2556);const w=({type:e,onDetailOpen:t,onCreateOpen:r})=>{const i=(0,s.sJ)(x.T0),[l]=(0,o.Z)(["sessionId"]),[a,h]=(0,n.useState)([]),[f,w]=(0,n.useState)(1),[$,y]=(0,n.useState)(1),[q,P]=(0,n.useState)(""),[E,I]=(0,n.useState)({method:"get",url:`/notice/list?page=${f}`,headers:{sessionId:l.sessionId}}),{response:z,loading:C,error:D,fetchData:T}=(0,m.Z)(E,!1);return(0,n.useEffect)((()=>{null!==E&&T()}),[E]),(0,n.useEffect)((()=>{null!==i&&I(i)}),[i]),(0,n.useEffect)((()=>{null!==z?E.url.includes("/search?q=")?(y(1),h(z.list?.map((({content:e,created_at:t,views:r,...n})=>({...n,created_at:t.split("T")[0],views:r}))))):(y(0===z.lastPage?1:z.lastPage),h(z.list?.map((({content:e,created_at:t,views:r,...n})=>({...n,created_at:t.split("T")[0],views:r}))))):(y(1),h([]))}),[z]),(0,n.useEffect)((()=>{""!==q&&b.C_.test(q)&&I({...E,url:`/notice/search?q=${q}&page=${f}`})}),[f,q]),(0,j.jsx)(j.Fragment,{children:C?(0,j.jsx)("p",{children:"Loading..."}):D?(0,j.jsx)("p",{children:D}):"home"!==e?(0,j.jsxs)(p.xu,{children:[(0,j.jsxs)(Z,{row:"between",col:"center",children:[(0,j.jsx)(c.Z,{title:"notice"}),(0,j.jsx)(k,{marginTop:"14px",children:(0,j.jsx)(u.Z,{searchType:"\uc81c\ubaa9",setSearchKeyword:P})})]}),(0,j.jsx)(d.Z,{isHome:!1,title:"notice",data:a,onSideOpen:t}),(0,j.jsx)(g.Z,{currPage:f,setCurrPage:w,lastPageIdx:$}),(0,j.jsx)(v,{row:"end",children:(0,j.jsx)(S,{onClick:r})})]}):(0,j.jsxs)(p.xu,{type:e,children:[(0,j.jsx)(c.Z,{type:e,title:"notice"}),(0,j.jsx)(d.Z,{isHome:!0,title:"notice",data:a,onSideOpen:t})]})})};w.propTypes={type:l().string,onDetailOpen:l().func,onCreateOpen:l().func};const Z=(0,a.ZP)(f.h)`
  padding-bottom: 14px;
`,k=a.ZP.div`
  margin-top: ${({marginTop:e})=>e};
  margin-right: ${({marginRight:e})=>e};
`,v=(0,a.ZP)(f.h)`
  margin-top: 10px;
`,S=(0,a.ZP)(h.Z).attrs({type:"smallDark",message:"\ub4f1\ub85d"})``,$=w},4972:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(4519),o=r(5655),s=r(1386),i=r.n(s),l=r(9892),a=r(5381),c=r(12),d=r(8735),h=r(2556);const u=({searchType:e,setSearchKeyword:t})=>{const r=(0,n.useRef)(),o=e=>{e.preventDefault(),d.C_.test(r.current.value)&&(t(r.current.value),r.current.value=e.target.value)};return(0,h.jsxs)(g,{col:"center",field:e,children:[(0,h.jsx)(f,{type:"text",readOnly:!0,value:e}),(0,h.jsx)(m,{type:"text",field:e,placeholder:"\uac80\uc0c9\uc5b4 \uc785\ub825",onKeyDown:e=>{"Enter"===e.key&&o(e)},ref:r}),(0,h.jsx)(x,{onClick:e=>o(e),children:(0,h.jsx)(b,{icon:c.Y$T})})]})};u.propTypes={searchType:i().string,setSearchKeyword:i().func};const g=(0,o.ZP)(a.h)`
  border: 2px solid ${({theme:e})=>e.colors.gray200};
  border-radius: 10px;
  width: 18.5rem;
  height: ${e=>e.height||"3.2rem"};
`,p=o.ZP.input`
  border: 0;
  background-color: transparent;
  font-size: ${({theme:e})=>e.fontSize.xxxs};
`,f=(0,o.ZP)(p)`
  width: ${({value:e})=>"\ub2c9\ub124\uc784"===e?"5.25rem":"4.2rem"};
  padding: 0 16px;
  border-right: 2px solid ${({theme:e})=>e.colors.gray200};

  &:hover {
    cursor: default;
  }
`,m=(0,o.ZP)(p)`
  flex: 1;
  margin: 0 10px;
  width: ${({field:e})=>"\ub2c9\ub124\uc784"===e?"9.25rem":"70%"};

  &::placeholder {
    color: #a7a7a7;
  }
`,x=o.ZP.button`
  background-color: transparent;
  width: 22px;
  margin-right: 15px;
  padding: 0;
`,b=(0,o.ZP)(l.G)`
  font-size: 19px;
`,j=u},1114:(e,t,r)=>{r.d(t,{Hi:()=>s});var n=r(5655);n.ZP.button`
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
`;const o=n.ZP.button`
  width: ${e=>e.width||"6rem"};
  height: ${e=>e.height||"3rem"};
  font-size: ${({theme:e})=>e.fontSize.xxxs};
  font-weight: 700;
`,s=((0,n.ZP)(o)`
  background-color: transparent;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #ffffff32;
  }
`,(0,n.ZP)(o)`
  background-color: #585858;
  color: #fff;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray600};
  }
`),i=((0,n.ZP)(o)`
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
`},6693:(e,t,r)=>{r.d(t,{I:()=>s,_:()=>o});var n=r(5655);r(5381);const o=n.ZP.label`
  font-size: 19px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.gray600};
`,s=n.ZP.input.attrs((e=>({type:e.type})))`
  ${({type:e,theme:t})=>("text"===e||"password"===e||"email"===e)&&`\n    width: 100%;\n    height: 3.8rem;\n    margin-top: 8px;\n    padding: 10px 18px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    color: ${t.colors.text.sub};\n    font-size: 19px;\n    font-weight: 400;\n  `}
`},2182:(e,t,r)=>{r.r(t),r.d(t,{default:()=>B});var n=r(4519),o=r(3908),s=r(2322),i=r(2674),l=r(8582),a=r(6638),c=r(5381),d=r(5023),h=r(47),u=r(7480),g=r(3439),p=r(1386),f=r.n(p),m=r(5655),x=r(5474),b=r.n(x),j=r(9892),w=(r(1942),r(3159)),Z=r(7960),k=r(3426),v=r(6693),S=r(3461),$=r(1114),y=r(8735),q=r(2556);const P=m.ZP.form`
  padding: 50px 15px 0 15px;

  & > * + * {
    margin-top: 1.5rem;
  }
`,E=(0,m.ZP)(v.I)`
  font-size: ${({theme:e})=>e.fontSize.xxs};
  background-color: transparent;

  &::placeholder {
    font-weight: 400;
    color: #a7a7a7;
  }
`,I=m.ZP.div`
  height: 33rem;

  & .ql-container.ql-snow {
    border: 1px solid #ccc !important;
  }

  & .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: "본문";
  }

  & .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: "제목 1";
  }

  & .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: "제목 2";
  }

  & .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: "제목 3";
  }
`,z=(0,m.ZP)(c.Z)``,C=(0,m.ZP)($.Hi)``,D=()=>{const e=(0,s.Zl)(l.N),t=(0,s.Zl)(a.T0),[r]=(0,o.Z)(["sessionId"]),[i,c]=(0,n.useState)(""),[d,h]=(0,n.useState)(""),[u,g]=(0,n.useState)([]),[p,f]=(0,n.useState)(""),[m,x]=(0,n.useState)(!1),[j,w]=(0,n.useState)(null),{response:Z,error:v,loading:$,fetchData:D}=(0,k.Z)(j,!1),T=(0,n.useRef)(null);(0,n.useEffect)((()=>{null!==j&&D()}),[j]),(0,n.useEffect)((()=>{null!==Z?(e(0),t({method:"get",url:"/notice/list?page=1",headers:{sessionId:r.sessionId}})):v&&(f(v),x(!0))}),[Z,v]),(0,n.useEffect)((()=>{const e=()=>{if(!T.current)return;const e=T.current.getEditor();if(null===e.container.querySelector("input.ql-image[type=file]")){const t=document.createElement("input");t.setAttribute("type","file"),t.setAttribute("accept","image/png, image/jpeg, image/jpg, image/tif"),t.classList.add("ql-image"),t.onchange=()=>{if(t.files&&t.files[0]){const r=t.files[0];if(r.size>5242880)return f("\ud30c\uc77c\ub2f9 5MB\ub97c \ucd08\uacfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),void x(!0);if(document.querySelectorAll("img").length>3)return f("\ucd5c\ub300 3\uac1c\uc758 \uc774\ubbf8\uc9c0\ub9cc \ucca8\ubd80\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),void x(!0);const n=new FileReader;n.onload=()=>{const t=e.getSelection(!0);e.insertEmbed(t.index,"image",n.result);const o=T.current.makeUnprivilegedEditor(e).getLength();e.scrollIntoView({index:o-1,length:0}),e.setSelection(t.index+1),g((e=>e.concat(r)))},n.readAsDataURL(r)}},t.click()}};if(T.current){T.current.getEditor().getModule("toolbar").addHandler("image",e)}}),[]),(0,n.useEffect)((()=>{if(!T.current)return;const e=T.current.getEditor(),t=()=>{let t=[];e.getContents().ops.forEach((e=>{e.insert&&e.insert.image&&t.push(e.insert.image)})),g((e=>e.filter((e=>t.includes(e)))))};return e.on("text-change",t),()=>e.off("text-change",t)}),[]),(0,n.useEffect)((()=>{if(T.current){const e=T.current.getEditor(),t=T.current.makeUnprivilegedEditor(e).getLength();e.scrollIntoView({index:t-1,length:0})}}),[d]);return(0,q.jsx)(q.Fragment,{children:$?(0,q.jsx)("p",{children:"Loading..."}):(0,q.jsxs)(P,{children:[m&&(0,q.jsx)(S.Z,{hasButton:!0,setIsOpen:x,onClick:()=>x(!1),children:p}),(0,q.jsx)(E,{type:"text",name:"title",hasLabel:!1,maxLength:"100",onChange:e=>c(e.target.value),placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694."}),(0,q.jsx)(I,{children:(0,q.jsx)(b(),{style:{height:"29rem"},ref:T,theme:"snow",modules:{toolbar:[[{header:[]}],["bold","italic","underline","strike","code-block"],[{list:"ordered"},{list:"bullet"}],["link","image"],[{align:[]},{color:[]},{background:[]}],["clean"]]},onChange:e=>{const t=e.replace(/<img[^>]*src="[^"]*"[^>]*>/g,(e=>e.replace(/src="[^"]*"/,'src=""')));h(t)},placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694."})}),(0,q.jsx)(z,{row:"end",children:(0,q.jsx)(C,{width:"7rem",onClick:e=>(e=>{e.preventDefault();const t=new FormData;if(t.append("title",i),t.append("content",d),u?.forEach((e=>{t.append("files",e)})),!y.Ao.test(i))return f("\uc81c\ubaa9\uc744 \uc62c\ubc14\ub974\uac8c \uc785\ub825\ud558\uc138\uc694."),void x(!0);w({method:"post",url:"/notice",headers:{sessionId:r.sessionId},data:t})})(e),children:"\uc800\uc7a5"})})]})})};var T=r(8229);const F=({data:e,isEditMode:t,setIsEditMode:r,fetchDetail:i})=>{const{id:c,title:d,content:h,created_at:u,views:g,files:p}=e,[f]=(0,o.Z)(["sessionId"]),[m,x]=(0,n.useState)(d),[j,v]=(0,n.useState)(h),[$,y]=(0,n.useState)([]),P=(0,s.Zl)(l.N),E=(0,s.Zl)(a.T0),[z,C]=(0,n.useState)(""),[D,F]=(0,n.useState)(!1),[V,B]=(0,n.useState)(null),{response:U,loading:J,error:Y,fetchData:Q}=(0,k.Z)(V,!1),W=(0,n.useRef)(),X=(0,n.useRef)(null),ee=(0,n.useRef)(null);(0,n.useEffect)((()=>{null!==V&&Q()}),[V]),(0,n.useEffect)((()=>{null!==U?("delete"===V.method?P(0):"put"===V.method&&(r(!1),i()),E({method:"get",url:"/notice/list?page=1",headers:{sessionId:f.sessionId}})):Y&&(C(Y),F(!0))}),[U,Y]);const te=()=>{x(d),v(h),r(!0)},re={toolbar:[[{header:[]}],["bold","italic","underline","strike","code-block"],[{list:"ordered"},{list:"bullet"}],["link","image"],[{align:[]},{color:[]},{background:[]}],["clean"]]};(0,n.useEffect)((()=>{if(W.current){W.current.querySelectorAll("img").forEach(((e,t)=>{null!==p&&p[t]&&(e.src=p[t])}))}}),[h,p]);const ne=()=>{C("\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),F(!0)};return(0,q.jsx)(q.Fragment,{children:J?(0,q.jsx)("center",{children:"Loading..."}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(M,{children:t?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(O,{dir:"col",children:[(0,q.jsx)("div",{children:(0,q.jsx)(R,{type:"text",value:m,maxLength:"100",onChange:e=>(e=>{e.preventDefault(),X.current===e.target&&x(e.target.value),ee.current===e.target&&v(e.target.value)})(e),ref:X})}),(0,q.jsxs)(_,{col:"center",children:[(0,q.jsxs)("div",{children:[(0,q.jsx)(H,{icon:Z.SZw}),(0,q.jsx)(A,{children:(0,w.r)(u)})]}),(0,q.jsxs)("div",{children:[(0,q.jsx)(G,{icon:Z.Mdf}),(0,q.jsx)(A,{children:g})]})]})]}),(0,q.jsx)(K,{children:(0,q.jsx)(I,{children:(0,q.jsx)(b(),{style:{height:"29rem"},theme:"snow",value:j,modules:re,onChange:e=>v(e)})})}),(0,q.jsx)(N,{row:"end",children:(0,q.jsx)(T.Z,{type:"smallTransparent",message:"\uc800\uc7a5",onClick:e=>(e=>{e.preventDefault();const t=new FormData;t.append("id",c),t.append("title",m),t.append("content",j),$.length>0&&$?.forEach((e=>{t.append("files",e)})),B({method:"put",url:`/notice/${c}`,headers:{sessionId:f.sessionId,"Content-Type":"multipart/form-data"},data:t})})(e)})})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(O,{dir:"col",children:[(0,q.jsx)("div",{children:(0,q.jsx)(L,{children:d})}),(0,q.jsxs)(_,{col:"center",children:[(0,q.jsxs)("div",{children:[(0,q.jsx)(H,{icon:Z.SZw}),(0,q.jsx)(A,{children:(0,w.r)(u)})]}),(0,q.jsxs)("div",{children:[(0,q.jsx)(G,{icon:Z.Mdf}),(0,q.jsx)(A,{children:g})]})]})]}),(0,q.jsx)(K,{children:(0,q.jsx)(b(),{style:{height:"32rem"},theme:"snow",value:h,readOnly:!0,modules:{toolbar:!1}})}),(0,q.jsxs)(N,{row:"end",children:[(0,q.jsx)(T.Z,{type:"smallTransparent",message:"\uc218\uc815",onClick:te}),(0,q.jsx)(T.Z,{type:"smallGray",message:"\uc0ad\uc81c",onClick:ne})]})]})},c),D&&(0,q.jsx)(S.Z,{setIsOpen:F,onClick:Y?()=>F(!1):()=>{z.includes("\uc0ad\uc81c")&&B({method:"delete",url:`/notice/${c}`,headers:{sessionId:f.sessionId}}),F(!1)},hasButton:!0,children:z})]})})};F.propTypes={data:f().object,isEditMode:f().bool,setIsEditMode:f().func,fetchDetail:f().func};const M=m.ZP.div`
  margin: 0 14px;
`,O=(0,m.ZP)(c.Z)`
  margin: 54px 0 24px;
`,L=m.ZP.span`
  font-size: 1.5rem;
  font-weight: 700;
`,R=(0,m.ZP)(v.I)`
  margin-top: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  font-size: 1.5rem;
  height: 2.14rem;
`,_=(0,m.ZP)(c.Z)`
  margin: 8px 0;

  & > * + * {
    margin-left: 30px;
  }
`,A=m.ZP.span`
  margin-left: 9px;
  font-size: ${({theme:e})=>e.fontSize.xxxs};
  color: #a7a7a7;
`,H=(0,m.ZP)(j.G)`
  font-size: ${({theme:e})=>e.fontSize.xxxs};
  color: #a7a7a7;
`,G=(0,m.ZP)(j.G)`
  font-size: ${({theme:e})=>e.fontSize.xxxs};
  color: #a7a7a7;
`,K=m.ZP.div`
  width: 100%;
  height: 32rem;

  & > .quill > .ql-container.ql-snow {
    border: 0;
  }
`,N=(0,m.ZP)(c.Z)`
  position: absolute;
  right: calc(18% - 8px);
  margin-top: 2.5rem;
  & > * + * {
    margin-left: 10px;
  }
`,V=F,B=()=>{const[e]=(0,o.Z)(["sessionId"]),t=(0,i.s0)(),[r,p]=(0,s.FV)(l.N),[f,m]=(0,s.FV)(a.QC),x=(0,s.Zl)(a.SL),[b,j]=(0,n.useState)(!1),[w,Z]=(0,n.useState)({}),[v,S]=(0,n.useState)(null),{response:$,error:y,loading:P,fetchData:E}=(0,k.Z)(v,!1);(0,n.useEffect)((()=>{e.sessionId||t("/")}),[]),(0,n.useEffect)((()=>{null===f?p(0):(p(1),S({method:"get",url:`/notice/${f}`,headers:{sessionId:e.sessionId}}))}),[]),(0,n.useEffect)((()=>{null!==v&&E()}),[v]),(0,n.useEffect)((()=>{null!==$&&(j(!1),Z($.result),p(1),m($.result.id))}),[$]);return(0,q.jsx)(h.vs,{row:"center",col:"center",children:(0,q.jsxs)(h.J7,{width:"82rem",dir:"col",children:[(0,q.jsx)(u.Z,{type:"admin-detail"}),(0,q.jsx)(h.or,{type:"admin",row:"between",children:(0,q.jsxs)(c.h,{row:"between",children:[(0,q.jsx)(g.Z,{onDetailOpen:t=>{S({method:"get",url:`/notice/${t}`,headers:{sessionId:e.sessionId}})},onCreateOpen:()=>{x(null),p(2)}}),(()=>{switch(r){case 1:return(0,q.jsx)(d.xu,{children:(0,q.jsx)(V,{data:w,isEditMode:b,setIsEditMode:j,fetchDetail:E})});case 2:return(0,q.jsx)(d.xu,{children:(0,q.jsx)(D,{})});case 0:return""}})()]})})]})})}},8582:(e,t,r)=>{r.d(t,{N:()=>n});const n=(0,r(2322).cn)({key:"isActiveSideContentTypeState",default:0})},3159:(e,t,r)=>{r.d(t,{r:()=>n});const n=e=>{const t=new Date(e),r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),s=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0"),l=String(t.getSeconds()).padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(o," ").concat(s,":").concat(i,":").concat(l)}}}]);
//# sourceMappingURL=182.5744f690.chunk.js.map