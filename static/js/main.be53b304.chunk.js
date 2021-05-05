(this["webpackJsonpcircuit-server-frontend"]=this["webpackJsonpcircuit-server-frontend"]||[]).push([[0],{200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(77),r=a.n(c),l=(a(88),a(1)),s=a(2),o=a(4),u=a(3),m=a(16),d=a(14),h=a(31),p=a(82),v=a(45),f=a(49),E=a(46),b=a(7),g=a(24),O=a.n(g),w={server:"https://api.thingspeak.com/",readChannelWriteKey:"3PHOQ8WWK84H2ZOI",readChannelReadKey:"C8UBSQMSSEF8QUHZ",readChannelID:"1367898",writeChannelWriteKey:"WWM5JZUQBE4DRHND",writeChannelReadKey:"G6HUJVWXW7RFCMSE",writeChannelID:"1367899",generalChannelWriteKey:"7VF6L5923BZJMANS",generalChannelReadKey:"8S4OMK4UI4ZGW9W0",generalChanenlID:"1367901"},y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.switchActiveTab,a=e.activeTab,n=e.logOut;return i.a.createElement("div",{className:"side-panel"},i.a.createElement("ul",null,i.a.createElement("li",{className:"overview"===a?"active":"",onClick:function(){return t("overview")}},"Overview"),i.a.createElement("li",{className:"graphs"===a?"active":"",onClick:function(){return t("graphs")}},"Graphs"),i.a.createElement("li",{className:"userlogs"===a?"active":"",onClick:function(){return t("userlogs")}},"User Logs"),i.a.createElement("li",{className:"notifications"===a?"active":"",onClick:function(){return t("notifications")}},"Notifications"),i.a.createElement("li",{onClick:function(){return n()}},"Logout")))}}]),a}(n.Component),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.status;return i.a.createElement("button",{className:"btn-toggle",onClick:this.props.switchStatus},e?"TURN OFF":"TURN ON")}}]),a}(n.Component),N=function(){return i.a.createElement("svg",{width:"50px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},i.a.createElement("path",{d:"M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"}))},j=function(){return i.a.createElement("svg",{width:"50px",fill:"yellow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},i.a.createElement("path",{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"}))},C=function(e){return i.a.createElement("svg",{width:"20px",height:"20px",xmlns:"http://www.w3.org/2000/svg",fill:"on"===e?"green":"red",viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"}))},k=function(){return i.a.createElement("svg",{width:"30px",height:"30px",fill:"#060e3d",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"}))},A=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.bulbStatus,a=e.deviceStatus,n=e.switchBulbStatus;return i.a.createElement("div",{className:"device-card"},t&&a?i.a.createElement(j,null):i.a.createElement(N,null),i.a.createElement("h2",null,"Supply Status: ",t&&a?"ON":"OFF"),i.a.createElement(S,{status:t,switchStatus:n}))}}]),a}(n.Component),I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.deviceStatus,a=e.switchDeviceStatus,n=e.activeSource;return i.a.createElement("div",{className:"device-card"},t?i.a.createElement(j,null):i.a.createElement(N,null),i.a.createElement("h2",null,"Source Status: ",n),i.a.createElement(S,{status:t,switchStatus:a}))}}]),a}(n.Component),x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"digital-display"},this.props.value?this.props.value:"---")}}]),a}(n.Component),U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.value,n=e.setActiveSource,c=e.activeSource,r=e.source;return i.a.createElement("div",{className:"pvi-card"},i.a.createElement("h4",null,t),a&&i.a.createElement(x,{value:a}),!a&&i.a.createElement("button",{className:"btn-control",onClick:function(){return n(r)}},c===r?"Active":"Switch"),r&&c===r&&i.a.createElement("div",{className:"indicator"}))}}]),a}(n.Component),M=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.activeSource,a=e.bulbStatus,n=e.deviceStatus,c=e.powerProduced,r=e.powerConsumed,l=e.communities,s=this.props,o=s.switchBulbStatus,u=s.switchDeviceStatus,m=s.setActiveSource,d=s.controlUser;return i.a.createElement("div",{className:"main-content"},i.a.createElement("h1",{className:"app-title"},"Development of intelligent master controller for Hybridized power pool System Applications"),i.a.createElement("div",{className:"main-content-top"},i.a.createElement(U,{title:"GRID SOURCE",setActiveSource:m,source:"Grid",activeSource:t}),i.a.createElement(U,{title:"RENEWABLE SOURCE",setActiveSource:m,source:"Renewable",activeSource:t}),i.a.createElement(U,{title:"GENERATOR SOURCE",setActiveSource:m,source:"Generator",activeSource:t})),i.a.createElement("div",{className:"main-content-top"},i.a.createElement(U,{title:"VOLTAGE",value:n?c:"---"}),i.a.createElement(U,{title:"CURRENT",value:a&&n?r:"---"})),i.a.createElement("div",{className:"main-content-body"},i.a.createElement(I,{deviceStatus:n,switchDeviceStatus:u,activeSource:t}),i.a.createElement(A,{bulbStatus:a,deviceStatus:n,switchBulbStatus:o})),i.a.createElement("div",{className:"user-logs-wrap"},i.a.createElement("ul",null,l.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("div",null," ",e.name," "),i.a.createElement("div",null,e.status?C("on"):C("off")),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return d(e.id)}},e.status?"Turn Off":"Turn On")))})))))}}]),a}(n.Component),P=a(78),R=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"main-content"},i.a.createElement("h1",{className:"app-title"},"IMC Trend Page"),i.a.createElement("h2",null,"Graphs"),i.a.createElement(P.a,{data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Power Consumed",borderColor:"rgb(255, 99, 132)",data:[0,10,5,2,20,30,45]},{label:"Power Produced",borderColor:"rgb(0,0,255)",data:[10,20,30,20,30,50,60]}]},height:500,width:800}))}}]),a}(n.Component),T=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={names:[{id:1,name:"AFIKPO",status:!0},{id:2,name:"AMAZIRI",status:!1},{id:3,name:"OZZIA",status:!0},{id:4,name:"ENOHIA",status:!1},{id:5,name:"UNWANA",status:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.communities;return i.a.createElement("div",{className:"main-content"},i.a.createElement("h1",{className:"app-title"},"IMC Operator's History Page"),i.a.createElement("h2",null,"UserLogs"),i.a.createElement("div",{className:"user-logs-wrap"},i.a.createElement("ul",null,t.map((function(t){return i.a.createElement("li",{key:t.id},i.a.createElement("div",null,t.name),i.a.createElement("div",null,t.status?C("on"):C("off")),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.props.controlUser(t.id)}},t.status?"Turn Off":"Turn On")),i.a.createElement("div",null,i.a.createElement("button",null,"History")))})))))}}]),a}(n.Component),G=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.notification,a=t.title,n=t.date;t.id;return i.a.createElement("li",null,i.a.createElement("div",{style:{width:"10%"}},i.a.createElement(k,null)),i.a.createElement("div",{style:{textAlign:"left",width:"50%"}},i.a.createElement("p",null,a)),i.a.createElement("div",{style:{width:"20%"}},i.a.createElement("button",{onClick:function(){return e.props.displayNotification()}},"View")),i.a.createElement("div",{style:{width:"20%"}},i.a.createElement("p",null,n)))}}]),a}(n.Component),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"notification-popup"},i.a.createElement("p",null,i.a.createElement("strong",null,"Notification")),i.a.createElement("ul",null,i.a.createElement("li",null,"Name:"),i.a.createElement("li",null,"Phone Number:"),i.a.createElement("li",null,"Email:"),i.a.createElement("li",null,"ID Number:")),i.a.createElement("div",null,i.a.createElement("button",null,"Verify"),i.a.createElement("button",{onClick:function(){return e.props.hideNotification()}},"Close")))}}]),a}(n.Component),B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={displayNotification:!1},n.displayNotification=n.displayNotification.bind(Object(b.a)(n)),n.hideNotification=n.hideNotification.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"displayNotification",value:function(){this.setState({displayNotification:!0})}},{key:"hideNotification",value:function(){this.setState({displayNotification:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"main-content"},i.a.createElement("h1",{className:"app-title"},"IMC Authentication Page  "),this.state.displayNotification&&i.a.createElement(D,{hideNotification:this.hideNotification}),i.a.createElement("h2",null,"Notifications"),i.a.createElement("div",{className:"notification-wrap"},i.a.createElement("ul",null,this.props.notifications.map((function(t){return i.a.createElement(G,{notification:t,displayNotification:e.displayNotification,hideNotification:e.hideNotification})})))))}}]),a}(n.Component),W=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"modal"},i.a.createElement("p",null,this.props.message," | ",i.a.createElement("span",{style:{color:"red"}},"X")))}}]),a}(n.Component),K=new Map,F=new Map;new Map;K.set(1,{index:1,field:"field1"}),K.set(2,{index:2,field:"field2"}),K.set(3,{index:3,field:"field3"}),K.set(4,{index:4,field:"field4"}),K.set(5,{index:5,field:"field5"}),K.set("Grid",{index:6,field:"field6"}),K.set("Solar",{index:7,field:"field7"}),K.set("Generator",{index:8,field:"field8"}),F.set("Current",{index:1,field:"field1"}),F.set("Voltage",{index:2,field:"field2"}),F.set("General PHY",{index:3,field:"field3"}),F.set("General APP",{index:4,field:"field4"});var H=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={activeTab:"overview",activeSource:"none",modal:{show:!1,message:"This is some sample mesage for the modal"},communities:[{id:1,name:"AFIKPO",status:!0},{id:2,name:"AMAZIRI",status:!1},{id:3,name:"OZZIA",status:!0},{id:4,name:"ENOHIA",status:!1},{id:5,name:"UNWANA",status:!1}],notifications:[{title:"AFIKPO Signed Up",date:"22/02/2020",id:1},{title:"AMAZIRI Signed Up",date:"23/02/2020",id:2},{title:"OZZIA Signed Up",date:"12/02/2020",id:3},{title:"ENOHIA Signed Up",date:"02/02/2020",id:4},{title:"UNWANA Signed Up",date:"22/03/2020",id:5}],bulbStatus:!0,deviceStatus:!0,voltage:5,current:2,powerProduced:200,powerConsumed:150},n.switchBulbStatus=n.switchBulbStatus.bind(Object(b.a)(n)),n.switchDeviceStatus=n.switchDeviceStatus.bind(Object(b.a)(n)),n.switchActiveTab=n.switchActiveTab.bind(Object(b.a)(n)),n.setActiveSource=n.setActiveSource.bind(Object(b.a)(n)),n.logOut=n.logOut.bind(Object(b.a)(n)),n.controlUser=n.controlUser.bind(Object(b.a)(n)),n.varyGenerated=n.varyGenerated.bind(Object(b.a)(n)),n.fetchState=n.fetchState.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchState()}},{key:"fetchState",value:function(){var e,t=this,a=Object(E.a)(K.entries());try{var n=function(){var a=Object(f.a)(e.value,2),n=a[0],i=a[1];console.log(n,i),O.a.get("https://api.thingspeak.com/channels/".concat(w.readChannelID,"/fields/").concat(i.index,".json"),{params:{api_key:w.readChannelReadKey,results:1}}).then((function(e){console.log(e.data),t.writeState(n,e.data)})).catch((function(e){console.log(e)}))};for(a.s();!(e=a.n()).done;)n()}catch(l){a.e(l)}finally{a.f()}var i,c=Object(E.a)(F.entries());try{var r=function(){var e=Object(f.a)(i.value,2),a=e[0],n=e[1];console.log(a,n),O.a.get("https://api.thingspeak.com/channels/".concat(w.generalChanenlID,"/fields/").concat(n.index,".json"),{params:{api_key:w.generalChannelReadKey,results:1}}).then((function(e){console.log(e.data),t.writeState(a,e.data)})).catch((function(e){console.log(e)}))};for(c.s();!(i=c.n()).done;)r()}catch(l){c.e(l)}finally{c.f()}}},{key:"writeState",value:function(e,t){switch(e){case 1:this.setState(Object(v.a)({},this.state,{communities:[Object(v.a)({},this.state.communities[0],{status:1e3!==t})].concat(Object(p.a)(this.state.communities.slice(1)))}))}}},{key:"varyGenerated",value:function(){this.setState({powerProduced:this.state.powerProduced+(Math.floor(6*Math.random())+1),powerConsumed:this.state.powerConsumed+(Math.floor(4*Math.random())+1)})}},{key:"controlUser",value:function(e){var t=this,a=!this.state.communities.filter((function(t){return t.id===e}))[0].status;O.a.get("https://api.thingspeak.com/update",{params:Object(h.a)({api_key:w.writeChannelWriteKey},K.get(e).field,a?1e3:500)}).then((function(a){0!==a.data?t.setState({communities:t.state.communities.map((function(t){return t.id===e?{id:t.id,name:t.name,status:!t.status}:t}))}):console.log("error")})).catch((function(e){return console.log(e)}))}},{key:"switchActiveTab",value:function(e){this.setState({activeTab:e})}},{key:"setActiveSource",value:function(e){var t=this;O.a.get("https://api.thingspeak.com/update",{params:{api_key:w.writeKey}}).then((function(a){0!==a.data&&t.setState({activeSource:e})}))}},{key:"switchBulbStatus",value:function(){this.setState({bulbStatus:!this.state.bulbStatus})}},{key:"logOut",value:function(){this.props.history.push("/login")}},{key:"switchDeviceStatus",value:function(){!0===this.state.deviceStatus&&this.setState({activeSource:"Grid"}),this.setState({deviceStatus:!this.state.deviceStatus,bulbStatus:!this.false})}},{key:"render",value:function(){var e=this.state.activeTab;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},this.state.modal.show&&i.a.createElement(W,{message:this.state.modal.message}),i.a.createElement(y,{switchActiveTab:this.switchActiveTab,activeTab:this.state.activeTab,logOut:this.logOut}),"overview"===e&&i.a.createElement(M,{data:this.state,controlUser:this.controlUser,switchBulbStatus:this.switchBulbStatus,setActiveSource:this.setActiveSource,switchDeviceStatus:this.switchDeviceStatus}),"graphs"===e&&i.a.createElement(R,null),"userlogs"===e&&i.a.createElement(T,{communities:this.state.communities,controlUser:this.controlUser}),"notifications"===e&&i.a.createElement(B,{notifications:this.state.notifications})))}}]),a}(n.Component),Z=a(32),L=a.n(Z),z=a(33),J=a.n(z),V=a(34),Q=a.n(V),Y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).checkLogin=n.checkLogin.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"checkLogin",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"login-wrap"},i.a.createElement("div",{className:"login-left"},i.a.createElement("div",{className:"login-content"},i.a.createElement("div",{className:"images"},i.a.createElement("img",{src:L.a,alt:"generator"}),i.a.createElement("img",{src:J.a,alt:"Grid"}),i.a.createElement("img",{src:Q.a,alt:"Renewable"}))," ",i.a.createElement("h1",null," ","Intelligent Master ",i.a.createElement("br",null)," Controller Interface"," ")," ",i.a.createElement("div",null," ")," ",i.a.createElement("input",{type:"mail",placeholder:"Email"})," ",i.a.createElement("br",null),i.a.createElement("input",{type:"password",placeholder:"Password"})," ",i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return e.checkLogin()}}," SIGN IN ")," ",i.a.createElement("p",null," ",i.a.createElement(m.b,{to:""}," Forgot Your Password ? ")))," "),i.a.createElement("div",{className:"login-right"},i.a.createElement("div",{className:"login-content"},i.a.createElement("h1",null," New IMC Operator 's ")," ",i.a.createElement("p",null," Enter your personal details to sign up ")," ",i.a.createElement(m.b,{to:"/signup"}," SIGN UP ")," ",i.a.createElement("p",null," AFIKPO UNIFIED ENERGY SYSTEM ")," ")," ")," ")}}]),a}(n.Component),_=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"login-wrap"},i.a.createElement("div",{className:"login-right signup-left"},i.a.createElement("div",{className:"login-content"},i.a.createElement("h1",null,"Welcome Back"),i.a.createElement("p",null,"To keep connected with us please log in with your personal info"),i.a.createElement(m.b,{to:"/login"},"SIGN IN"))),i.a.createElement("div",{className:"login-left"},i.a.createElement("div",{className:"login-content"},i.a.createElement("div",{className:"images"},i.a.createElement("img",{src:L.a,alt:"generator"}),i.a.createElement("img",{src:J.a,alt:"Grid"}),i.a.createElement("img",{src:Q.a,alt:"Renewable"})),i.a.createElement("h1",null,"Create Account"),i.a.createElement("div",null),i.a.createElement("div",{className:"input-details"},i.a.createElement("input",{type:"text",placeholder:"*First Name"}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",placeholder:"*Last Name"}),i.a.createElement("br",null),i.a.createElement("input",{type:"number",placeholder:"Phone Number"}),i.a.createElement("br",null),i.a.createElement("input",{type:"email",placeholder:"*Email Address"}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",placeholder:"*Identification Number"}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",placeholder:"*Location"}),i.a.createElement("br",null),i.a.createElement("input",{type:"date",placeholder:"*Date of Birth"}),i.a.createElement("br",null),i.a.createElement("input",{type:"password",placeholder:"*Password"}),i.a.createElement("br",null),i.a.createElement("input",{type:"password",placeholder:"*Verify Password"}),i.a.createElement("br",null)),i.a.createElement("button",null,"SIGN UP"))))}}]),a}(n.Component),X=(a(200),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,{basename:"/"},i.a.createElement(d.a,{exact:!0,path:"/",component:H}),i.a.createElement(d.a,{path:"/login",component:Y}),i.a.createElement(d.a,{path:"/signup",component:_}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports=a.p+"static/media/generator.408cfd0d.png"},33:function(e,t,a){e.exports=a.p+"static/media/grid.bb35b4ca.png"},34:function(e,t,a){e.exports=a.p+"static/media/renewable.986ad70e.png"},83:function(e,t,a){e.exports=a(201)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.be53b304.chunk.js.map