(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(13),r=n.n(s),i=n(12),o=(n(35),n(7)),l=(n(36),n(3)),d=n.p+"static/media/edit.78f5537e.svg",j=n.p+"static/media/header.a6cbff23.svg",u={edit:d,settings:n.p+"static/media/settings.be22443e.svg",stats:n.p+"static/media/stats.a4d7c093.svg",sun:n.p+"static/media/sun.db2717a2.svg",back:n.p+"static/media/undo.abd720f9.svg"},b=n(28),x=(n(47),n(10)),h=n(11),m=n(21),O=n(20),p=n(1),f=["show","enter","enterStart","enterEnd","leave","leaveStart","leaveEnd","appear","unmountOnExit","tag","children"],v=["show","appear"],g=a.a.createContext({parent:{}});function w(e){var t=e.show,n=e.enter,c=void 0===n?"":n,s=e.enterStart,r=void 0===s?"":s,i=e.enterEnd,o=void 0===i?"":i,l=e.leave,d=void 0===l?"":l,j=e.leaveStart,u=void 0===j?"":j,b=e.leaveEnd,v=void 0===b?"":b,g=e.appear,w=e.unmountOnExit,y=e.tag,N=void 0===y?"div":y,E=e.children,S=Object(m.a)(e,f),_=c.split(" ").filter((function(e){return e.length})),k=r.split(" ").filter((function(e){return e.length})),T=o.split(" ").filter((function(e){return e.length})),C=d.split(" ").filter((function(e){return e.length})),M=u.split(" ").filter((function(e){return e.length})),L=v.split(" ").filter((function(e){return e.length})),R=w;function I(e,t){var n;t.length&&(n=e.classList).add.apply(n,Object(h.a)(t))}function D(e,t){var n;t.length&&(n=e.classList).remove.apply(n,Object(h.a)(t))}var A=a.a.useRef(null),P=N;return Object(p.jsx)(O.CSSTransition,{appear:g,nodeRef:A,unmountOnExit:R,in:t,addEndListener:function(e){A.current.addEventListener("transitionend",e,!1)},onEnter:function(){R||(A.current.style.display=null),I(A.current,[].concat(Object(h.a)(_),Object(h.a)(k)))},onEntering:function(){D(A.current,k),I(A.current,T)},onEntered:function(){D(A.current,[].concat(Object(h.a)(T),Object(h.a)(_)))},onExit:function(){I(A.current,[].concat(Object(h.a)(C),Object(h.a)(M)))},onExiting:function(){D(A.current,M),I(A.current,L)},onExited:function(){D(A.current,[].concat(Object(h.a)(L),Object(h.a)(C))),R||(A.current.style.display="none")},children:Object(p.jsx)(P,Object(x.a)(Object(x.a)({ref:A},S),{},{style:{display:R?null:"none"},children:E}))})}var y=function(e){var t=e.show,n=e.appear,a=Object(m.a)(e,v),s=Object(c.useContext)(g).parent,r=function(){var e=Object(c.useRef)(!0);return Object(c.useEffect)((function(){e.current=!1}),[]),e.current}();return void 0===t?Object(p.jsx)(w,Object(x.a)({appear:s.appear||!s.isInitialRender,show:s.show},a)):Object(p.jsx)(g.Provider,{value:{parent:{show:t,isInitialRender:r,appear:n}},children:Object(p.jsx)(w,Object(x.a)({appear:n,show:t},a))})};var N=function(e){return Object(p.jsxs)("div",{className:"grid place-center ",children:[Object(p.jsx)(y,{className:"fixed inset-0 bg-gray-900  bg-opacity-40 z-0 transition-opacity",show:e.openModal,appear:e.openModal,enter:"transition ease-out duration-200",enterStart:"opacity-0",enterEnd:"opacity-100",leave:"transition ease-out duration-100",leaveStart:"opacity-100",leaveEnd:"opacity-0","aria-hidden":"true"}),Object(p.jsx)(y,{id:"search-modal",className:"fixed overflow-hidden inset-0 z-50 overflow-hidden top-1/3 flex items-start mb-4 justify-center transform px-4 sm:px-6",role:"dialog","aria-modal":"true",show:e.openModal,appear:e.openModal,enter:"transition ease-in-out duration-200",enterStart:"opacity-0 translate-y-4",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-200",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 translate-y-4",children:Object(p.jsx)("div",{className:"rounded-lg text-center p-2 w-5/6 min-h-1/4 bg-white sm:w-auto sm:px-4 lg:w-56 lg:p-4",children:e.children})})]})},E=a.a.createContext({status:!1,setStatus:function(){}}),S=n(14);var _=function(e){var t=Object(S.c)((function(e){return e.duration})),n=Object(c.useState)(!1),a=Object(o.a)(n,2),s=a[0],r=a[1],l=Object(c.useState)(0),d=Object(o.a)(l,2),x=d[0],h=d[1],m=Object(c.useState)(0),O=Object(o.a)(m,2),f=O[0],v=O[1],g=Object(c.useState)(!1),w=Object(o.a)(g,2),y=w[0],_=w[1],k=Object(c.useState)(t),T=Object(o.a)(k,2),C=T[0],M=T[1],L=Object(c.useState)("py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_blue"),R=Object(o.a)(L,2),I=R[0],D=R[1],A=60*t*1e3,P=Object(c.useState)("start"),B=Object(o.a)(P,2),U=B[0],X=B[1],z=Object(c.useState)(A),V=Object(o.a)(z,2),G=V[0],J=V[1],K=Object(c.useState)(0),W=Object(o.a)(K,2),Y=W[0],F=W[1];Object(c.useEffect)((function(){var e=setTimeout((function(){0===G&&(H(),q()),G>0&&y&&(J(G-1e3),M(Math.floor(G%36e5/6e4)),h(Math.floor(G%6e4)/1e3)),v(Math.floor(100-100*G/A))}),1e3);return function(){return clearTimeout(e)}}),[G,y]);var q=function(){Y<4?F(Y+1):(alert("You completed today you should go back tomorow ...."),e.history.goBack())},H=function(){_(!1),J(60*t*1e3),M(t),h(0),X("start"),D("py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_blue"),v(0)};return Object(p.jsxs)(E.Provider,{value:{status:y,setStatus:_},children:[s?Object(p.jsxs)(N,{openModal:s,children:[Object(p.jsx)("p",{className:"text-medium",children:" Are you sure to GIVE UP ? "}),Object(p.jsxs)("div",{className:"flex justify-between p-4",children:[Object(p.jsx)("button",{onClick:function(){return r(!s)},className:"py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_red",children:"NO"}),Object(p.jsx)("button",{onClick:function(){r(!1),H()},className:"py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_blue",children:"YES"})]})]}):null,Object(p.jsxs)("div",{className:"z-100",children:[Object(p.jsx)("header",{children:Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{className:"w-full flex justify-between items-center p-4",children:[Object(p.jsx)("div",{children:Object(p.jsx)(i.b,{to:"/",children:Object(p.jsx)("img",{src:u.back,alt:"stats",className:"w-8 h-8 cursor-pointer"})})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{className:"font-bold text-2xl text-my_blue ",children:" POMODOROS "})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:u.edit,alt:"stats",className:"w-8 h-8 cursor-pointer"})})]})})}),Object(p.jsx)("main",{children:Object(p.jsxs)("section",{className:"mx-auto ",children:[Object(p.jsx)("div",{className:"mx-2 my-6 p-8 h-80",children:Object(p.jsx)("img",{src:j,alt:"header",className:"w-full h-full"})}),Object(p.jsxs)("div",{className:"w-full flex justify-between items-center px-6",children:[Object(p.jsxs)("p",{className:"font-light text-my_red ",children:[C<10?"0".concat(C):C," :"," ",x<10?"0".concat(x):x]}),Object(p.jsxs)("p",{className:"font-light text-my_red ",children:[Y," of 4"]})]}),Object(p.jsx)("div",{className:"mx-6 my-2 ",children:Object(p.jsx)(b.ProgressBar,{percent:f,filledBackground:"#39bdc8"})}),Object(p.jsx)("div",{className:"mx-auto text-center mt-16 ",children:Object(p.jsx)("button",{onClick:function(){y?r(!0):(D("py-2 px-4 rounded shadow-2xl text-white font-bold bg-my_red"),X("Give up"),_(!0))},className:I,children:U})}),Object(p.jsx)("div",{className:"text-center mx-auto cursor-pointer mt-12",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"#c4c4c4",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 8h16M4 16h16"})})})]})})]})]})};var k=function(e){var t="px-5 shadow py-1 h-auto text-center  rounded-2xl mx-2 cursor-pointer "+e.color;return Object(p.jsxs)("div",{className:t,onClick:function(){return e.changeTime(e.time)},children:[Object(p.jsx)("div",{className:" mt-4 rounded-full  p-6 bg-white bg-opacity-40",children:Object(p.jsxs)("h2",{className:"font-extrabold text-2xl text-white",children:[e.time,"'"]})}),Object(p.jsx)("div",{className:"mt-4",children:Object(p.jsx)("h5",{className:"font-medium uppercase text-lg text-white",children:e.name})})]})},T="TASK_COMPLETED_ACTION",C="SET_TASK_DURATION_ACTION",M=function(e){return{type:C,time:e}};var L=function(e){var t=Object(S.b)(),n=function(n){t(M(n)),e.history.push("/start")};return Object(p.jsxs)("div",{children:[Object(p.jsx)("header",{children:Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{className:"w-full flex justify-between items-center p-4",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{onClick:function(){return t(M(35))},src:u.stats,alt:"stats",className:"w-8 h-8 cursor-pointer"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:u.sun,alt:"stats",className:"w-8 h-8 cursor-pointer"})})]})})}),Object(p.jsx)("main",{children:Object(p.jsxs)("section",{className:"mx-auto ",children:[Object(p.jsx)("div",{className:"mx-2 my-6 p-8 h-80",children:Object(p.jsx)("img",{src:j,alt:"header",className:"w-full h-full"})}),Object(p.jsx)("div",{className:"mx-auto my-2  text-center",children:Object(p.jsx)(i.b,{to:"/start",children:Object(p.jsx)("button",{className:"py-2 px-4 rounded shadow-lg text-white font-bold bg-my_blue",children:"START"})})})]})}),Object(p.jsxs)("div",{className:"w-full flex justify-between items-center p-4",children:[Object(p.jsx)("div",{children:Object(p.jsx)("p",{className:"font-semibold text-lg text-my_voilet ",children:" POMODOROS "})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:u.settings,alt:"stats",className:"w-6 h-6 cursor-pointer"})})]}),Object(p.jsxs)("div",{className:"flex px-2 overflow-auto",children:[Object(p.jsx)(k,{name:"working",time:"30",color:"bg-my_blue",changeTime:n}),Object(p.jsx)(k,{changeTime:n,name:"reading",time:"25",color:"bg-primary"}),Object(p.jsx)(k,{changeTime:n,name:"learning",time:"35",color:"bg-my_red"})]}),Object(p.jsx)("div",{className:"text-center mx-auto cursor-pointer mt-4",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"#c4c4c4",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 8h16M4 16h16"})})})]})};var R=function(){var e=Object(c.useState)(25),t=Object(o.a)(e,2);return t[0],t[1],Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)("div",{className:"mx-auto lg:w-1/3 md:w-2/3 md:border  ",children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:L}),Object(p.jsx)(l.a,{exact:!0,path:"/start",component:_})]})})})},I=n(30),D=function(e,t){return Object(x.a)(Object(x.a)({},e),t)},A={duration:1,taskCompleted:0},P=function(e,t){return e.taskCompleted<4?D(e,{taskCompleted:e.taskCompleted+1}):D(e,{taskCompleted:4})},B=function(e,t){return D(e,{duration:t.time})},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return B(e,t);case T:return P(e);default:return e}},X=Object(I.a)(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(p.jsx)(S.a,{store:X,children:Object(p.jsx)(i.a,{children:Object(p.jsx)(R,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.f354f269.chunk.js.map