(this["webpackJsonp3g-squared-client"]=this["webpackJsonp3g-squared-client"]||[]).push([[14],{179:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(107),s=t(108),c=t(136),r=t.n(c),l=t(106),d=t(114),b=t(115),j=t(42),u=t(183),m=t(137),o=t.n(m),O=function(e){var n=Object(a.useState)({}),t=Object(j.a)(n,2),i=t[0],s=t[1],c=Object(a.useState)({}),r=Object(j.a)(c,2),l=r[0],m=r[1],O=Object(a.useState)(!1),h=Object(j.a)(O,2),p=h[0],g=h[1];Object(a.useEffect)((function(){var e;0===Object.keys(l).length&&p&&(s(""),e="success",u.a[e]({message:"Success",description:"Your message has been sent!"}))}),[l,p]);return{handleChange:function(e){e.persist(),s((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,e.target.value))})),m((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,""))}))},handleSubmit:function(n){n.preventDefault(),m(e(i));3===Object.keys(i).length&&o.a.post("",Object(b.a)({},i)).then((function(){g(!0)}))},values:i,errors:l}};function h(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var p,g,x,f,v,y,w=t(4),S=t(5),C=S.b.div(p||(p=Object(w.a)(["\n  padding: 5rem 0;\n"]))),k=S.b.section(g||(g=Object(w.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n"]))),q=(S.b.div(x||(x=Object(w.a)(["\n  @media only screen and (min-width: 980px) {\n    padding: 10rem 7rem;\n  }\n"]))),S.b.form(f||(f=Object(w.a)(["\n  width: 100%;\n  max-width: 520px;\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"])))),E=S.b.span(v||(v=Object(w.a)(["\n  display: block;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),z=S.b.div(y||(y=Object(w.a)(["\n  text-align: end;\n  position: relative;\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),Y=t(1),M=Object(a.lazy)((function(){return t.e(13).then(t.bind(null,184))})),N=Object(a.lazy)((function(){return t.e(11).then(t.bind(null,185))})),J=Object(a.lazy)((function(){return t.e(1).then(t.bind(null,128))})),D=Object(a.lazy)((function(){return t.e(12).then(t.bind(null,186))}));n.default=Object(l.a)()((function(e){var n=e.title,t=e.content,a=e.id,c=e.t,l=O(h),d=l.values,b=l.errors,j=l.handleChange,u=l.handleSubmit,m=function(e){var n=e.type,t=b[n];return b[n]?Object(Y.jsx)(r.a,{cascade:!0,children:Object(Y.jsx)(E,{children:t})}):Object(Y.jsx)(E,{})};return Object(Y.jsx)(C,{id:a,children:Object(Y.jsx)(k,{children:Object(Y.jsxs)(i.a,{type:"flex",justify:"space-between",align:"middle",children:[Object(Y.jsx)(s.a,{lg:12,md:11,sm:24,children:Object(Y.jsx)(M,{padding:!0,title:n,content:t})}),Object(Y.jsx)(s.a,{lg:12,md:12,sm:24,children:Object(Y.jsxs)(q,{autoComplete:"off",onSubmit:u,children:[Object(Y.jsxs)(s.a,{span:24,children:[Object(Y.jsx)(N,{type:"text",name:"name",id:"Name",placeholder:"Your Name",value:d.name||"",onChange:j}),Object(Y.jsx)(m,{type:"name"})]}),Object(Y.jsxs)(s.a,{span:24,children:[Object(Y.jsx)(N,{type:"text",name:"email",id:"Email",placeholder:"Your Email",value:d.email||"",onChange:j}),Object(Y.jsx)(m,{type:"email"})]}),Object(Y.jsxs)(s.a,{span:24,children:[Object(Y.jsx)(D,{placeholder:"Your Message",value:d.message||"",name:"message",id:"Message",onChange:j}),Object(Y.jsx)(m,{type:"message"})]}),Object(Y.jsx)(z,{children:Object(Y.jsx)(J,{name:"submit",type:"submit",children:c("Submit")})})]})})]})})})}))}}]);
//# sourceMappingURL=14.6d5e6cab.chunk.js.map