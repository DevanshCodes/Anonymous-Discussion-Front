(this.webpackJsonpanonymous=this.webpackJsonpanonymous||[]).push([[0],{116:function(e,a){},119:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var n,s=t(0),r=t.n(s),c=t(59),o=t.n(c),m=(t(75),t(30)),l=t(15),i=t(26),u=t(27),h=t(14),d=t(32),p=t(31),b=(t(76),t(134)),v=t(135),E=t(136),g=t(137),f=(t(77),t(138)),y=t(139),C=t(140),N=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={username:"",roomno:""},n.handleChangeusername=n.handleChangeusername.bind(Object(h.a)(n)),n.handleChangeroomno=n.handleChangeroomno.bind(Object(h.a)(n)),n}return Object(u.a)(t,[{key:"handleChangeusername",value:function(e){this.setState({username:e.target.value})}},{key:"handleChangeroomno",value:function(e){this.setState({roomno:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(b.a,{maxWidth:"md"},r.a.createElement("h1",null,"Anonymous Discussion!")),r.a.createElement(v.a,{className:"Card"},r.a.createElement(E.a,{className:"content"},r.a.createElement("div",{className:"greeting"},"Let's Get Started!"),r.a.createElement("div",null,r.a.createElement(g.a,{className:"avatar"})),r.a.createElement("form",{className:"form"},r.a.createElement(f.a,{className:"mb-3",type:"text",value:this.state.username,id:"inputText",onChange:this.handleChangeusername},r.a.createElement(f.a.Prepend,null,r.a.createElement(f.a.Text,{id:"basic-addon1"},"@")),r.a.createElement(y.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"})),r.a.createElement(f.a,{className:"mb-3",type:"text",value:this.state.roomno,id:"inputText",onChange:this.handleChangeroomno},r.a.createElement(f.a.Prepend,null,r.a.createElement(f.a.Text,{id:"basic-addon1"},"#")),r.a.createElement(y.a,{placeholder:"RoomID","aria-label":"Username","aria-describedby":"basic-addon1"})),r.a.createElement(m.b,{to:"".concat(this.state.username,"/").concat(this.state.roomno)},r.a.createElement(C.a,{className:"Submit",type:"submit",value:"Submit",variant:"primary"}," Submit "))))))}}]),t}(s.Component),k=t(42),j=t.n(k),S=t(65),x=(t(86),t(66)),O=t.n(x),w=t(121),T=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var s;return Object(i.a)(this,t),(s=a.call(this,e)).state={endpoint:"https://anonymous-project-backend.herokuapp.com:4000",message:"",messages:[{username:"",chat:"",roomno:""}]},n=O.a.connect(s.state.endpoint),s.handleChange=s.handleChange.bind(Object(h.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(h.a)(s)),n.on("newChat",function(){var e=Object(S.a)(j.a.mark((function e(a){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=s.state.messages).push({username:a.username,chat:a.chat}),s.setState({messages:t});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),s}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params;fetch("https://anonymous-project-backend.herokuapp.com/api/chats/".concat(a.roomno)).then((function(e){return e.json()})).then((function(a){console.log(a),e.setState({messages:a})})),console.log(a),n.on("connect",(function(){n.emit("room",a.roomno)}))}},{key:"componentDidUpdate",value:function(){var e=document.getElementById("chatscroll");e.scrollTop=e.scrollHeight}},{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){var a={username:this.props.match.params.username,chat:this.state.message,roomno:this.props.match.params.roomno};n.emit("newMessage",a),this.setState({message:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(b.a,{maxWidth:"lg"},r.a.createElement("h1",null,"Anonymous Discussion!"),r.a.createElement("div",null," ",r.a.createElement(w.a,{variant:"outlined",className:"paper",id:"chatscroll"},this.state.messages.map((function(e){return r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"Avatar"}),r.a.createElement("div",{className:"text"},r.a.createElement("div",{className:"username"}," ",e.username," "),r.a.createElement("div",{className:"chatText"}," ",e.chat," ")," "))})))," "),r.a.createElement("form",null,r.a.createElement(f.a,{className:"mb-3"},r.a.createElement(y.a,{value:this.state.message,onChange:this.handleChange,placeholder:"Chat Message","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),r.a.createElement(f.a.Append,null,r.a.createElement(C.a,{variant:"outline-secondary",onClick:this.handleSubmit,className:"submit",type:"submit"},"Submit"))))))}}]),t}(s.Component),A=(t(119),function(){return r.a.createElement(m.a,{basename:"/"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:N}),r.a.createElement(l.a,{exact:!0,path:"/:username/:roomno",component:T})))});var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,a,t){e.exports=t(120)},75:function(e,a,t){},76:function(e,a,t){},86:function(e,a,t){}},[[70,1,2]]]);
//# sourceMappingURL=main.bc10d926.chunk.js.map