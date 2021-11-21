(this["webpackJsonpreact-landing-page"]=this["webpackJsonpreact-landing-page"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(9),r=a.n(s),i=(a(94),a(19)),l=(a(95),a(12)),o=(a(58),a(2));function j(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"relative  pt-16 pb-32 flex content-center items-center justify-center",style:{minHeight:"75vh"},children:[Object(o.jsx)("div",{className:"absolute top-0 w-full h-full bg-center bg-cover img  ",style:{backgroundImage:"url('https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')"},children:Object(o.jsx)("span",{id:"blackOverlay",className:"w-full h-full absolute opacity-75 bg-black"})}),Object(o.jsx)("div",{className:"container  relative mx-auto",children:Object(o.jsx)("div",{className:"items-center flex flex-wrap",children:Object(o.jsx)("div",{className:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center",children:Object(o.jsxs)("div",{className:"pr-12",children:[Object(o.jsx)("h1",{className:"text-white font-semibold text-5xl",children:"Welcome to Spark Bank"}),Object(o.jsx)("p",{className:"mt-4 text-lg text-gray-300",children:"Spark Foundation Web Development Task 1"})]})})})})]})})})}var u=a(14),b=a.n(u),d=a(22),h=a(15),m=a(165),x=a(5),O=a(163),p=a(167),f=a(161),v=a(164),g=a(166),N=a(162),w=a(124),y=a(168),k=a(24),S=a.n(k),T=Object(x.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(f.a),D=Object(x.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(N.a),A=Object(O.a)({table:{minWidth:50,margin:"100px auto 200px",width:"70%"}});function B(){var e=A(),t=Object(c.useState)([]),a=Object(h.a)(t,2),n=a[0],s=a[1],r=function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("http://localhost:5000/customers");case 2:t=e.sent,a=t.data,console.log("RESPONSE: ",a),s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(o.jsx)("div",{children:Object(o.jsx)(v.a,{className:"text-white bg-dark",component:w.a,children:Object(o.jsxs)(m.a,{className:e.table,"aria-label":"customized table",children:[Object(o.jsx)(g.a,{children:Object(o.jsxs)(N.a,{children:[Object(o.jsx)(T,{children:"S No."}),Object(o.jsx)(T,{children:"Name"}),Object(o.jsx)(T,{align:"right",children:"Amount"}),Object(o.jsx)(T,{align:"right",children:"Transfer"})]})}),Object(o.jsx)(p.a,{children:n&&n.map((function(e,t){return Object(o.jsxs)(D,{className:"text-white",children:[Object(o.jsx)(T,{className:"text-white",component:"th",scope:"row",children:t+1}),Object(o.jsx)(T,{className:"text-white",align:"left",component:"th",scope:"row",children:e.name}),Object(o.jsx)(T,{className:"text-white",align:"right",children:e.amount}),Object(o.jsx)(T,{align:"right",children:Object(o.jsx)(i.b,{to:"/customers/".concat(e._id),children:Object(o.jsx)(y.a,{variant:"contained",className:"bg-info",color:"success",children:"Transfer"})})})]},e.name)}))})]})})})}var E=a(169),C=a(178),M=a(176),F=a(180),W=a(181),P=(a(121),a(172)),z=a(77),H=Object(c.createContext)();function I(e){var t=Object(l.e)(),a=Object(c.useState)(1),n=Object(h.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)([]),j=Object(h.a)(i,2),u=j[0],m=j[1],x=Object(c.useState)([]),O=Object(h.a)(x,2),p=O[0],f=O[1],v=Object(c.useState)([]),g=Object(h.a)(v,2),N=g[0],w=g[1];function y(){return(y=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f((function(e){return[].concat(Object(z.a)(e),[u])})),console.log(u),e.next=4,S.a.post("/add",u);case 4:m(""),r(1),t.push("/customers");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.post("/customer/money",N);case 2:t.push("/customers");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsx)(H.Provider,{value:{currentStep:s,setCurrentStep:r,userData:u,setUserData:m,finalData:p,setFinalData:f,submitData:function(){return y.apply(this,arguments)},transferData:N,setTransferData:w,sendMoney:function(){return k.apply(this,arguments)}},children:e.children})}function R(){var e=Object(l.f)().id,t=Object(c.useState)(""),a=Object(h.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),i=Object(h.a)(r,2),j=i[0],u=i[1],m=Object(c.useState)(""),x=Object(h.a)(m,2),O=x[0],p=x[1],f=Object(c.useState)([]),v=Object(h.a)(f,2),g=v[0],N=v[1],w=Object(l.e)(),k=function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("http://localhost:5000/customers");case 2:t=e.sent,a=t.data,N(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){T(e),k()}),[]),console.log(O);var T=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("http://localhost:5000/customers/".concat(t));case 2:a=e.sent,c=a.data,p(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("TRANSFER DATA",A),w.push("/success");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A={count:Number(j),id:e,id2:n};return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"app ",children:Object(o.jsxs)("div",{className:"details",children:[Object(o.jsx)("div",{className:"big-img",children:Object(o.jsx)("img",{src:"../assets/images/sampleProfile.png",style:{width:"70%"}})}),Object(o.jsxs)("div",{className:"box",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("h4",{children:[O.name,Object(o.jsx)("h6",{children:O.amount})]}),Object(o.jsxs)("span",{children:[O.accountType,Object(o.jsx)("i",{})," ",O.gender]})]}),Object(o.jsxs)("div",{className:"row text-white",children:[Object(o.jsxs)(E.a,{className:"bg-white",children:[Object(o.jsx)(C.a,{className:"text-dark",id:"countrySelectLabel",children:"Transfer to"}),Object(o.jsx)(M.a,{labelId:"countrySelectLabel",id:"countrySelect",onChange:function(e){return s(e.target.value)},value:n,children:g&&g.map((function(e,t){return g.name!==e.name?Object(o.jsx)(F.a,{value:e._id,children:e.name},t):null}))})]}),Object(o.jsx)(W.a,{className:"text-white text bg-white",label:"Transfer Amount",id:"standard-start-adornment",type:"number",value:j,color:"primary",onChange:function(e){return u(e.target.value)},error:j>O.amount,helperText:(console.log(j),console.log(O.amount),j>O.amount?"The amount is greater than your balance":" "),InputProps:{startAdornment:Object(o.jsx)(P.a,{className:"text-white",position:"start",children:"\u20b9"})}})]}),Object(o.jsx)("div",{children:j>O.amount?Object(o.jsx)(y.a,{variant:"contained",disabled:!0,children:"Send"}):Object(o.jsx)(y.a,{variant:"contained",color:"primary",onClick:D,children:"Send"})})]})]})})})}var J=a(177),G=Object(O.a)({table:{minWidth:50,margin:"100px auto 200px",width:"70%"},tableBody:{margin:"10px"}});function L(){var e=G(),t=Object(c.useState)([]),a=Object(h.a)(t,2),n=a[0],s=a[1],r=function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("http://localhost:5000/gettransactions");case 2:t=e.sent,a=t.data,console.log("RESPONSE: ",a),s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(o.jsx)("div",{children:Object(o.jsx)(m.a,{className:e.table,"aria-label":"customized table",children:Object(o.jsx)(p.a,{children:n&&n.map((function(t,a){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(J.a,{severity:"success",className:e.tableBody,children:Object(o.jsxs)("h6",{children:[t.userOne," transfered \u20b9",t.amount," to ",t.userTwo]})}),Object(o.jsx)(J.a,{severity:"error",className:e.tableBody,children:Object(o.jsxs)("h6",{children:[t.userOne," transfered \u20b9",t.amount," to ",t.userTwo]})})]})}))})})})}function Z(){return Object(o.jsx)("footer",{className:"relative foot"})}function _(e){var t=n.a.useState(!1),a=Object(h.a)(t,2);a[0],a[1];return Object(o.jsxs)("nav",{className:"navbar sticky-top navbar-expand-lg back",style:{background:"#000000",color:"white"},children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse item",id:"navbarTogglerDemo01",children:[Object(o.jsx)(i.b,{className:"navbar-brand text-white",to:"/",children:"Spark Bank"}),Object(o.jsx)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"}),Object(o.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(o.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(o.jsx)("li",{className:"nav-item  ",children:Object(o.jsx)(i.b,{className:"nav-link text-white item",to:"/customers",children:"View All Customers"})}),Object(o.jsx)("li",{className:"nav-item  ",children:Object(o.jsx)(i.b,{className:"nav-link item text-white",to:"/transactions",children:"All Transactions"})})]})})]})]})}var q=a(173),U=a(174),V=a(175),Y=a(47),K=(a(122),function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(q.a,{children:[Object(o.jsx)(U.a,{className:"bg-dark text-white",align:"center",title:"Spark Bank",subheader:"by Ganesh"}),Object(o.jsx)(V.a,{className:"bg-dark",children:Object(o.jsx)(Y.a,{className:"success",align:"center",variant:"h5",children:"Transaction Successfull"})})]})})});function Q(){return Object(o.jsx)("div",{children:Object(o.jsx)(I,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(_,{transparent:!0}),Object(o.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(l.a,{exact:!0,path:"/customers",component:B}),Object(o.jsx)(l.a,{exact:!0,path:"/success",component:K}),Object(o.jsx)(l.a,{exact:!0,path:"/customers/:id",component:R}),Object(o.jsx)(l.a,{exact:!0,path:"/transactions",component:L}),Object(o.jsx)(Z,{})]})})})}r.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(Q,{})}),document.getElementById("root"))},58:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.fbd9c57b.chunk.js.map