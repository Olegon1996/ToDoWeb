(this["webpackJsonptodolist-app"]=this["webpackJsonptodolist-app"]||[]).push([[0],{118:function(e,t,n){e.exports=n(159)},155:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(19),l=n(32),s=n(104),u=n(96),d=n(26),p="LOGIN_REQUEST",m="LOGIN_SUCCESSES",f="LOGIN_ERROR",b="LOGUP_REQUEST",g="LOGUP_SUCCESSES",E="LOGUP_ERROR",h="LOGOUT_REQUEST",O="LOGOUT_SUCCESSES",y="LOGOUT_ERROR",v={isLogIn:!1,userInfo:{name:"",email:"",id:""},errorText:""},x={todos:[],todoLength:0,loading:!1,errorMessage:""},T=Object(l.c)({AuthReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e;case m:return Object(d.a)({},e,{isLogIn:!0,userInfo:{name:t.payload.name,email:t.payload.email,id:t.payload.uid}});case f:return Object(d.a)({},e,{isLogIn:!1,userInfo:{},errorText:t.payload});case b:return e;case g:return Object(d.a)({},e,{isLogIn:!0,userInfo:{name:t.payload.name,email:t.payload.email,id:t.payload.uid}});case E:return Object(d.a)({},e,{isLogIn:!1,userInfo:{},errorText:t.payload});case O:return Object(d.a)({},e,{isLogIn:!1,userInfo:{}});case y:return Object(d.a)({},e,{isLogIn:!0,userInfo:{},errorText:t.payload});default:return e}},ToDoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_DATA":return Object(d.a)({},e,{loading:!0});case"FETCH_DATA_SUCCESES":return Object(d.a)({},e,{loading:!1,todos:t.payload,todoLength:t.payload.length});case"FETCH_DATA_ERROR":return Object(d.a)({},e,{todos:[],loading:!1,errorMessage:t.payload});case"ADD_TODO_ITEM":return Object(d.a)({},e,{todoLength:e.todoLength+1});case"DELETE_TODO_ITEM":return Object(d.a)({},e,{todoLength:--e.todos.length});case"CHANGE_TODO_STATUS":return console.log("asd"),Object(d.a)({},e);default:return e}}}),j=n(15),I=n.n(j),S=n(27),w=n(70),R=n.n(w);n(135),n(136),n(137);R.a.initializeApp({apiKey:"AIzaSyBdwF5X33Sbx6NZbOhcTpLjoJ9enhx4pV4",authDomain:"todolist-5f89f.firebaseapp.com",databaseURL:"https://todolist-5f89f.firebaseio.com",projectId:"todolist-5f89f",storageBucket:"todolist-5f89f.appspot.com",messagingSenderId:"44091671391",appId:"1:44091671391:web:71ed9243c8a4ade4532cea",measurementId:"G-DQWLZZDZZP"});var L=R.a.database(),k=R.a.auth(),C=n(98),D=n.n(C),_=function(e,t){var n,a,r,o;return I.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,I.a.awrap(k.signInWithEmailAndPassword(e,t));case 2:return n=c.sent,c.next=5,I.a.awrap(D.a.get("https://todolist-5f89f.firebaseio.com/.json"));case 5:return a=c.sent,c.next=8,I.a.awrap(a.data);case 8:r=c.sent,c.t0=I.a.keys(r);case 10:if((c.t1=c.t0()).done){c.next=16;break}if((o=c.t1.value)!==n.user.uid){c.next=14;break}return c.abrupt("return",{Auth:n,name:r[o].name});case 14:c.next=10;break;case 16:case"end":return c.stop()}}))},A=function(e,t,n){var a;return I.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,I.a.awrap(k.createUserWithEmailAndPassword(e,t));case 2:return a=r.sent,r.next=5,I.a.awrap(L.ref().child(a.user.uid).set({name:n,password:t,email:e,id:a.user.uid}));case 5:return r.abrupt("return",a);case 6:case"end":return r.stop()}}))},N=function(){var e;return I.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.awrap(k.signOut());case 2:return e=t.sent,console.log("User Log Out"),t.abrupt("return",e);case 5:case"end":return t.stop()}}))},z=I.a.mark(M),U=I.a.mark(G),F=I.a.mark(B);function M(e){var t,n,a,r,o;return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.credentions,n=t.email,a=t.password,c.prev=1,c.next=4,Object(S.a)(_,n,a);case 4:return r=c.sent,o={name:r.name,email:r.Auth.user.email,uid:r.Auth.user.uid},sessionStorage.setItem("token",JSON.stringify(o)),c.next=9,Object(S.b)({type:m,payload:o});case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(1),c.next=15,Object(S.b)({type:f,payload:c.t0});case 15:case"end":return c.stop()}}),z,null,[[1,11]])}function G(e){var t,n,a,r,o,c;return I.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.credentions,n=t.email,a=t.password,r=t.name,i.prev=1,i.next=4,Object(S.a)(A,n,a,r);case 4:return o=i.sent,c={name:r,email:o.user.email,uid:o.user.uid},sessionStorage.setItem("token",JSON.stringify(c)),i.next=9,Object(S.b)({type:g,payload:c});case 9:i.next=15;break;case 11:return i.prev=11,i.t0=i.catch(1),i.next=15,Object(S.b)({type:E,payload:i.t0});case 15:case"end":return i.stop()}}),U,null,[[1,11]])}function B(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(S.a)(N);case 3:return sessionStorage.removeItem("token"),e.next=6,Object(S.b)({type:O});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(S.b)({type:y});case 12:case"end":return e.stop()}}),F,null,[[0,8]])}var P=I.a.mark(H);function H(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.c)(p,M);case 2:return e.next=4,Object(S.c)(b,G);case 4:return e.next=6,Object(S.c)(h,B);case 6:case"end":return e.stop()}}),P)}var J=Object(s.a)(),Q=Object(l.e)(T,Object(l.d)(Object(l.a)(u.a),Object(l.a)(J),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));J.run(H);var W=Q,X=n(45),Z=n(42),V=n(17),q=(n(49),n(196)),Y=n(100),K=n.n(Y);function $(e){var t=e.color,n=e.size,a=e.style,o=e.onClick;return r.a.createElement(q.a,{color:t,size:n,style:a,onClick:o,"aria-label":"add"},r.a.createElement(K.a,null))}var ee=n(200),te=n(210),ne=Object(ee.a)((function(e){return{root:{width:"90%","& > *":{margin:e.spacing(1),width:"100%"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#f50057"}},"& > label":{color:"red"}}}}));function ae(e){var t=e.variant,n=e.label,a=e.color,o=e.onChange,c=e.style,i=e.value,l=e.inputStyle,s=e.labelStyle,u=ne();return r.a.createElement("form",{className:u.root,noValidate:!0,autoComplete:"off"},r.a.createElement(te.a,{label:n,variant:t,color:a,onChange:o,style:c,value:i,inputProps:{style:l},InputLabelProps:{style:s}}))}var re=Object(i.b)((function(e){return{todos:e.ToDoReducer.todos,todoLength:e.ToDoReducer.todoLength,userID:e.AuthReducer.userInfo.id}}),(function(e){return{addToDoItem:function(t,n){e(function(e,t){return function(n){var a=L.ref().child("".concat(t,"/todos")).push({title:e,status:!0}).key;L.ref().child("".concat(t,"/todos/").concat(a)).update({id:a}),n({type:"ADD_TODO_ITEM"})}}(t,n))}}}))((function(e){var t=e.addToDoItem,n=Object(a.useState)(""),o=Object(V.a)(n,2),c=o[0],i=o[1],l=JSON.parse(sessionStorage.getItem("token"));return r.a.createElement("div",{className:"addTodoDiv"},r.a.createElement(ae,{onChange:function(e){i(e.target.value)},label:"some todo",name:"todo",type:"text",value:c,variant:"outlined",color:"secondary",style:{width:"100%",fontFamily:"cursive"},inputStyle:{color:"#f50057"},labelStyle:{color:"#f50057"}}),r.a.createElement($,{onClick:function(){if(!c)return null;t(c,l.uid),i("")},color:"secondary",size:"medium",style:{marginLeft:"15px"}}))})),oe=n(203),ce=n(160),ie=n(204),le=n(206),se=n(214),ue=n(212),de=n(205),pe=n(101),me=n.n(pe),fe=Object(ee.a)((function(e){return{root:{width:"90%",maxHeight:570,overflow:"hidden",backgroundColor:"rgba(161, 40, 77, 0.49)",borderRadius:"8px"},oneItem:{color:"white",overflow:"hidden",marginRight:"10px"}}}));var be=Object(i.b)(null,(function(e){return{changeToDoItem:function(t,n){e(function(e,t){return function(n){L.ref().child("".concat(t,"/todos/").concat(e.id)).update({status:!e.status}),n({type:"CHANGE_TODO_STATUS"})}}(t,n))},deleteTodoItem:function(t,n){e(function(e,t){return function(n){L.ref().child("".concat(t,"/todos/").concat(e)).remove(),n({type:"DELETE_TODO_ITEM"})}}(t,n))}}}))((function(e){var t=e.changeToDoItem,n=e.deleteTodoItem,a=e.currentTodosList,o=JSON.parse(sessionStorage.getItem("token")),c=fe(),i=function(e){return function(){return t(e,o.uid)}},l=function(e){return function(){return n(e,o.uid)}};return r.a.createElement(oe.a,{className:c.root},a.map((function(e){return r.a.createElement(ce.a,{key:e.id,role:void 0,dense:!0,button:!0,onClick:i(e)},r.a.createElement(ie.a,null,r.a.createElement(ue.a,{edge:"start",checked:!1===e.status,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":e.id},color:"secondary"})),r.a.createElement(se.a,{className:c.oneItem,value:e.id,id:e.id,primary:e.title}),r.a.createElement(le.a,null,r.a.createElement(de.a,{edge:"end","aria-label":"comments",onClick:l(e.id),color:"secondary"},r.a.createElement(me.a,null))))})))})),ge=n(50),Ee=n.n(ge);var he=Object(i.b)((function(e){return{todos:e.ToDoReducer.todos}}))((function(e){var t=e.todos,n=r.a.useState([]),a=Object(V.a)(n,2),o=a[0],c=a[1];return r.a.useEffect((function(){var e=[];t.map((function(t){!1===t.status&&(e.push(t),c(e))}))}),[t]),r.a.createElement(r.a.Fragment,null,t.find((function(e){return!1===e.status}))?r.a.createElement(be,{currentTodosList:o}):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{fontSize:"large",style:{marginTop:"10%",zIndex:"2",color:"#f50057"}}),r.a.createElement("p",{style:{zIndex:"2",textAlign:"center",fontSize:"30px",color:"#f50057"}},"You haven't anything  To Do!")))}));var Oe=Object(i.b)((function(e){return{todos:e.ToDoReducer.todos}}))((function(e){var t=e.todos,n=r.a.useState([]),a=Object(V.a)(n,2),o=a[0],c=a[1];return r.a.useEffect((function(){var e=[];t.map((function(t){!0===t.status&&(e.push(t),c(e))}))}),[t]),r.a.createElement(r.a.Fragment,null,t.find((function(e){return!0===e.status}))?r.a.createElement(be,{currentTodosList:o}):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{fontSize:"large",style:{marginTop:"10%",zIndex:"2",color:"#f50057"}}),r.a.createElement("p",{style:{zIndex:"2",textAlign:"center",fontSize:"30px",color:"#f50057"}},"You haven't anything  To Do!")))}));var ye=Object(i.b)((function(e){return{todos:e.ToDoReducer.todos,userID:e.AuthReducer.userInfo.id}}))((function(e){var t=e.todos;return r.a.createElement(r.a.Fragment,null,t&&t.length>0?r.a.createElement(be,{currentTodosList:t}):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{fontSize:"large",style:{marginTop:"10%",zIndex:"2",color:"#f50057"}}),r.a.createElement("p",{style:{zIndex:"2",textAlign:"center",fontSize:"30px",color:"#f50057"}},"You haven't anything To Do!")))})),ve=function(e){return{type:"FETCH_DATA_SUCCESES",loading:!1,payload:e,errorMessage:""}},xe=n(209),Te=n(103),je=n.n(Te);n(155);function Ie(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background-container"},r.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png",alt:"111"}),r.a.createElement("div",{className:"stars"}),r.a.createElement("div",{className:"twinkling"}),r.a.createElement("div",{className:"clouds"})))}var Se=n(6),we=n(207),Re=n(105),Le=n(208);var ke=Object(i.b)(null,(function(e){return{logOutFunc:function(){e({type:"LOGOUT_REQUEST"})}}}))((function(e){var t=e.logOutFunc,n=Object(a.useState)(""),o=Object(V.a)(n,2),c=o[0],i=o[1],l=r.a.useState(null),s=Object(V.a)(l,2),u=s[0],d=s[1],p=r.a.useState(!1),m=Object(V.a)(p,2),f=m[0],b=m[1],g=r.a.useState(!1),E=Object(V.a)(g,2),h=E[0],O=E[1],y=r.a.useState(!1),v=Object(V.a)(y,2),x=v[0],T=v[1],j=Object(Z.f)(),I=JSON.parse(sessionStorage.getItem("token")),S=f?r.a.createElement(Z.a,{to:"/app"}):null,w=h?r.a.createElement(Z.a,{to:"/app/completed"}):null,R=x?r.a.createElement(Z.a,{to:"/app/incompleted"}):null,L=function(){return d(null)};return Object(a.useEffect)((function(){I||j.push("/")}),[j,I]),r.a.createElement("div",null,S,w,R,r.a.createElement(we.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"secondary",onClick:function(e){return d(e.currentTarget)},style:{width:100,padding:"3px 5px 15px 5px",borderTopRightRadius:"0",borderTopLeftRadius:"0",borderBottomRightRadius:"50px",borderBottomLeftRadius:"50px",position:"fixed",top:"0",left:"0",textTransform:"none"}},c||"Menu"),r.a.createElement(Ce,{id:"customized-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:L},r.a.createElement(De,{selected:f,onClick:function(){b(!0),O(!1),T(!1),L(),i("All")}},r.a.createElement(se.a,{primary:"All"})),r.a.createElement(De,{selected:h,onClick:function(){O(!0),b(!1),T(!1),L(),i("Done")}},r.a.createElement(se.a,{primary:"Done"})),r.a.createElement(De,{selected:x,onClick:function(){T(!0),b(!1),O(!1),L(),i("Not done")}},r.a.createElement(se.a,{primary:"Not done"})),r.a.createElement(we.a,{onClick:function(){L(),t()},size:"small",color:"secondary",style:{position:"absolute",top:"208px",left:"7px"}},"log out"),r.a.createElement(we.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"secondary",onClick:L,style:_e},c||"Menu")))})),Ce=Object(Se.a)({paper:{width:"100px",height:295,left:"0px !IMPORTANT",top:"0px !IMPORTANT",borderRadius:0,boxShadow:"none",minHeight:295,borderBottomLeftRadius:50,borderBottomRightRadius:50}})((function(e){return r.a.createElement(Re.a,Object.assign({elevation:6,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),De=Object(Se.a)((function(e){return{root:{width:"97px",borderTopRightRadius:"25px",borderBottomRightRadius:"25px",marginBottom:"5px","&:nth-of-type(2)":{marginBottom:5,marginTop:5},"& > *":{"& > *":{fontSize:16}},"&:focus":{backgroundColor:e.palette.secondary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(Le.a),_e={width:100,padding:"3px 5px 15px 5px",borderTopRightRadius:"0",borderTopLeftRadius:"0",borderBottomRightRadius:"50px",borderBottomLeftRadius:"50px",position:"fixed",top:"253px",left:"0",zIndex:"2",textTransform:"none"};var Ae=Object(i.b)((function(e){return{todoLength:e.ToDoReducer.todoLength,isUser:e.AuthReducer.isLogIn}}),(function(e){return{logOutFunc:function(){e({type:"LOGOUT_REQUEST"})},startFetchingData:function(t){return e(function(e){return function(t){W.dispatch({type:"FETCHING_DATA",payload:[]});try{L.ref("".concat(e,"/todos")).on("value",(function(e){var n;return I.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e&&e.val()&&Object.values(e.val()))){a.next=5;break}return a.next=3,I.a.awrap(Object.values(e.val()));case 3:n=a.sent,t(ve(n));case 5:case"end":return a.stop()}}))}))}catch(n){t(function(e){return{type:"FETCH_DATA_ERROR",loading:!1,payload:[],errorMessage:e}}(n))}}}(t))}}}))((function(e){var t=e.todoLength,n=(e.logOutFunc,e.startFetchingData),o=Object(Z.f)(),c=JSON.parse(sessionStorage.getItem("token"));return r.a.useEffect((function(){c&&n(c.uid)}),[]),Object(a.useEffect)((function(){c||o.push("/")}),[o,c]),r.a.createElement("div",{className:"mainBlock"},r.a.createElement(Ie,null),r.a.createElement(X.a,null,r.a.createElement("div",{className:"functionallDiv"},r.a.createElement("div",{className:"header"},r.a.createElement("h2",{className:"titleName"},"TODO APP"),r.a.createElement(xe.a,{overlap:"circle",max:9,badgeContent:t,color:"secondary",style:{position:"absolute",top:"20px",right:"20px",zIndex:"10",filter:"invert(1)"}},r.a.createElement(je.a,{fontSize:"large"})),r.a.createElement(ke,null)),r.a.createElement(re,null),r.a.createElement(Z.b,{exact:!0,path:"/app/",component:ye}),r.a.createElement(Z.b,{path:"/app/completed",component:he}),r.a.createElement(Z.b,{path:"/app/incompleted",component:Oe}))))})),Ne=n(106),ze=n(211),Ue=n(215),Fe=n(76);var Me=Object(i.b)((function(e){return{isLogIn:e.AuthReducer.isLogIn}}),(function(e){return{logUp:function(t,n,a){return e({type:"LOGUP_REQUEST",credentions:{email:t,password:n,name:a}})}}}))((function(e){var t=e.isOpen,n=e.closeModal,o=e.logUp,c=e.isLogIn,i=Object(Z.f)(),l=Ge(),s=Object(a.useState)(""),u=Object(V.a)(s,2),d=u[0],p=u[1],m=Object(a.useState)(""),f=Object(V.a)(m,2),b=f[0],g=f[1],E=Object(a.useState)(""),h=Object(V.a)(E,2),O=h[0],y=h[1];return Object(a.useEffect)((function(){c&&i.push("app")}),[c]),r.a.createElement("div",null,r.a.createElement(ze.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:l.modal,open:t,onClose:function(){n(!1),y(""),p(""),g("")},closeAfterTransition:!0,BackdropComponent:Ue.a,BackdropProps:{timeout:500}},r.a.createElement(Be,{in:t},r.a.createElement("div",{className:l.paper},r.a.createElement(te.a,{onChange:function(e){return p(e.target.value)},label:"Email",name:"todo",type:"email",required:!0,value:d,variant:"outlined",color:"secondary",style:{width:"90%",fontFamily:"cursive"}}),r.a.createElement(te.a,{onChange:function(e){return y(e.target.value)},label:"Password",name:"todo",type:"password",required:!0,value:O,variant:"outlined",color:"secondary",style:{width:"90%",fontFamily:"cursive"}}),r.a.createElement(te.a,{onChange:function(e){return g(e.target.value)},label:"Name",name:"name",type:"text",required:!0,value:b,variant:"outlined",color:"secondary",style:{width:"90%",fontFamily:"cursive"}}),r.a.createElement(we.a,{color:"secondary",size:"large",type:"submit",onClick:function(){""!==d&&""!==O&&o(d,O,b)},style:{width:"90%"}},"sign up")))))})),Ge=Object(ee.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",outline:"none"},paper:{backgroundColor:e.palette.background.paper,border:"none",outline:"none",borderRadius:8,boxShadow:e.shadows[5],padding:e.spacing(2,4,2),display:"flex",flexDirection:"column",height:"40vh",width:"81%",justifyContent:"space-evenly",alignItems:"center"}}})),Be=r.a.forwardRef((function(e,t){var n=e.in,a=e.children,o=(e.onEnter,e.onExited,Object(Ne.a)(e,["in","children","onEnter","onExited"])),c=Object(Fe.useSpring)({from:{opacity:0},to:{opacity:n?1:0}});return r.a.createElement(Fe.animated.div,Object.assign({ref:t,style:c},o),a)})),Pe=n(213);function He(e){var t=e.isOpen,n=e.closeIsOpen,a=Je();return r.a.createElement("div",null,r.a.createElement(Pe.a,{className:a.root,anchorOrigin:{vertical:"bottom",horizontal:"left"},key:"bottom, left",open:t,onClose:function(e){n(e)},message:"Authorization failed",autoHideDuration:1e3}))}var Je=Object(ee.a)((function(e){return{root:{"& > *":{background:"rgb(245, 0, 87)"}}}}));var Qe={width:"100%",height:"255px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},We=Object(i.b)((function(e){return{isLogIn:e.AuthReducer.isLogIn,errorMessage:e.AuthReducer.errorText}}),(function(e){return{logIn:function(t,n){e({type:"LOGIN_REQUEST",credentions:{email:t,password:n}})}}}))((function(e){var t=e.logIn,n=e.errorMessage,o=Object(Z.f)(),c=Object(a.useState)(""),i=Object(V.a)(c,2),l=i[0],s=i[1],u=Object(a.useState)(""),d=Object(V.a)(u,2),p=d[0],m=d[1],f=Object(a.useState)(!1),b=Object(V.a)(f,2),g=b[0],E=b[1],h=sessionStorage.getItem("token"),O=Object(a.useState)(!1),y=Object(V.a)(O,2),v=y[0],x=y[1];return Object(a.useEffect)((function(){n&&x(!0),h&&o.push("/app")}),[h,o,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(He,{isOpen:v,closeIsOpen:function(e){x(e)}}),r.a.createElement("h2",{style:{fontFamily:"monospace",textAlign:"center",padding:"20px"}},"If you want to write your to do's, you should make log in or sign up if you haven't profile"),r.a.createElement(Me,{isOpen:g,closeModal:function(e){return E(e)}}),r.a.createElement("div",{style:Qe},r.a.createElement(te.a,{onChange:function(e){return s(e.target.value)},label:"Email",name:"todo",type:"email",value:l,variant:"outlined",color:"secondary",style:{width:"50%",fontFamily:"cursive"}}),r.a.createElement(te.a,{onChange:function(e){return m(e.target.value)},label:"Password",name:"todo",type:"password",value:p,variant:"outlined",color:"secondary",style:{width:"50%",fontFamily:"cursive"}}),r.a.createElement("div",{style:{width:"50%"}},r.a.createElement(we.a,{color:"secondary",size:"large",onClick:function(){t(l,p)},style:{width:"50%"}},"Log In"),r.a.createElement(we.a,{color:"secondary",size:"large",type:"submit",onClick:function(){return E(!0)},style:{width:"50%"}},"sign up"))))}));c.a.render(r.a.createElement(i.a,{store:W},r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(X.a,null,r.a.createElement(Z.b,{exact:!0,path:"/",component:We}),r.a.createElement(Z.b,{path:"/app",component:Ae})))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.f7ebe487.chunk.js.map