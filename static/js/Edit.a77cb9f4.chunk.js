(this["webpackJsonptaqwa-prayer"]=this["webpackJsonptaqwa-prayer"]||[]).push([[1],{124:function(e,t,a){},125:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(19),c=a(14),l=a.n(c),u=a(18),m=a(1),i=a(0),s=a.n(i),o=a(105),d=a.n(o),f=a(2),p=a.n(f),h=a(26),b=a(15),E=a(31),j=a(16),O=a(11),g=a(5),v=(a(124),Object(E.b)("signin","authError")((function(e){var t=e.signin,a=e.authError,c=e.meta,l=Object(i.useState)({uname:"",pwd:""}),u=Object(m.a)(l,2),o=u[0],d=u[1],f=Object(i.useState)(a),p=Object(m.a)(f,1)[0],b=Object(i.useState)(!1),E=Object(m.a)(b,2),j=E[0],O=E[1],g=function(e){d(Object(r.a)(Object(r.a)({},o),{},Object(n.a)({},e.target.name,e.target.value)))};return s.a.createElement("div",null,s.a.createElement("form",{className:"login-form"},s.a.createElement("h1",null,"Login"),p&&s.a.createElement("div",{className:"login-form__error"},p),j&&s.a.createElement(h.a,null),s.a.createElement("input",{type:"text",name:"uname",className:"login-form__input-item",placeholder:"Username",value:o.uname,onChange:g}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("input",{type:"password",name:"pwd",className:"login-form__input-item",placeholder:"Password",value:o.pwd,onChange:g}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("input",{type:"submit",className:"login-form__input-button",value:"Sign in",onClick:function(e){e.preventDefault(),O(!0),t(o.uname,o.pwd).catch((function(e){O(!1)}))}})),c&&s.a.createElement("div",{className:"login-form__footer"},"If you do not have the credentials, please contact brothers on ",c.email," or ",c.phone))}))),y=(a(125),function(e){return s.a.createElement("input",{required:!0,type:"time",value:e.time,name:e.name,className:"t",onChange:e.handler})});t.default=Object(E.b)("currentToken","signout","statusPending")((function(e){var t=Object(i.useState)({}),a=Object(m.a)(t,2),c=a[0],o=a[1],f=Object(i.useState)(!0),E=Object(m.a)(f,2),N=E[0],S=E[1],T=Object(i.useState)(null),w=Object(m.a)(T,2),D=w[0],_=w[1],k=Object(i.useState)(null),x=Object(m.a)(k,2),Y=x[0],C=x[1],M=Object(i.useState)(null),P=Object(m.a)(M,2),I=P[0],q=P[1],U=Object(i.useState)(null),J=Object(m.a)(U,2),A=J[0],V=J[1],L=Object(i.useState)(null),B=Object(m.a)(L,2),F=B[0],R=B[1],z=Object(O.a)("dev",0,-1);Object(i.useEffect)((function(){localStorage.setItem("_cbrk",Math.random()),Number(z)&&console.log("Development mode")}),[z]),Object(i.useEffect)((function(){if(e.ready){var t=p()(e.upcomingTimes.effective,g.e);t.startOf("day").isBefore(p()().startOf("day"))&&(t=p()().startOf("day"));var a={times:{fajr:Object(j.d)(e.upcomingTimes.fajr),dhuhr:Object(j.d)(e.upcomingTimes.dhuhr),asr:Object(j.d)(e.upcomingTimes.asr),ishaa:Object(j.d)(e.upcomingTimes.ishaa),jumuah:Object(j.d)(e.upcomingTimes.jumuah)},upcomingEffectiveDate:t.format("YYYY-MM-DD")};o({fajr:a.times.fajr,dhuhr:a.times.dhuhr,asr:a.times.asr,ishaa:a.times.ishaa,jumuah:a.times.jumuah}),q(a.upcomingEffectiveDate),V(p()().startOf("day").format("YYYY-MM-DD")),R(p()().startOf("day").add(7,"day").format("YYYY-MM-DD")),S(!1)}}),[e.ready,e.upcomingTimes]);var G=function(t,a){return fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:e.currentToken},body:a}).then((function(e){return e.json()})).catch((function(e){_("Unexpected error "+e)}))},H=function(){var t=Object(u.a)(l.a.mark((function t(a){var n,m,i,s,o,d,f,h,E;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),S(!0),n="SAVE_ENDPOINT_UPCOMING",m="SAVE_ENDPOINT_CURR",Number(z)&&(console.log("Dev mode ..."),n="".concat(n,"_DEV"),m="".concat(m,"_DEV")),i=b.a[n],s=b.a[m],o=p()().startOf("day"),d=p()(e.upcomingTimes.effective,g.e),f=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.error?_(t.error):C("Successfully updated!"),localStorage.setItem("_cbrk","upd-"+Math.random()),S(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!d.isSameOrBefore(o)){t.next=27;break}return t.prev=11,t.next=14,G(s,JSON.stringify({fajr:Object(j.d)(e.upcomingTimes.fajr),dhuhr:Object(j.d)(e.upcomingTimes.dhuhr),asr:Object(j.d)(e.upcomingTimes.asr),ishaa:Object(j.d)(e.upcomingTimes.ishaa),jumuah:Object(j.d)(e.upcomingTimes.jumuah),effective:p()().startOf("day").format(g.e)}));case 14:return h=t.sent,t.next=17,f(h);case 17:t.next=25;break;case 19:return t.prev=19,t.t0=t.catch(11),S(!1),console.error(t.t0),_("Unexpected error occurred (curr)"),t.abrupt("return");case 25:t.next=27;break;case 27:return t.prev=27,t.next=30,G(i,JSON.stringify(Object(r.a)(Object(r.a)({},c),{},{effective:I})));case 30:return E=t.sent,t.next=33,f(E);case 33:t.next=41;break;case 35:return t.prev=35,t.t1=t.catch(27),S(!1),console.error(t.t1),_("Unexpected error occurred (upc)"),t.abrupt("return");case 41:case"end":return t.stop()}}),t,null,[[11,19],[27,35]])})));return function(e){return t.apply(this,arguments)}}(),K=function(e){e.preventDefault(),o(Object(r.a)(Object(r.a)({},c),{},Object(n.a)({},e.target.name,e.target.value)))};return s.a.createElement(d.a,{id:"pa-edit",className:"pa-edit",meta:{title:"Edit Prayer Times",viewport:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}},(!e.currentToken&&e.statusPending||N)&&s.a.createElement(h.a,null),!e.currentToken&&!e.statusPending&&s.a.createElement(v,e),e.currentToken&&!e.statusPending&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Edit Iqaamah Times"),N&&s.a.createElement("div",{className:"pending"},"Loading..."),D&&s.a.createElement("div",{className:"error"},D),Y&&s.a.createElement("div",{className:"message"},Y),s.a.createElement("form",{onSubmit:H},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Fajr"),s.a.createElement("td",null,s.a.createElement(y,{name:"fajr",time:c.fajr,handler:K}))),s.a.createElement("tr",null,s.a.createElement("td",null,"Dhuhr"),s.a.createElement("td",null,s.a.createElement(y,{name:"dhuhr",time:c.dhuhr,handler:K}))),s.a.createElement("tr",null,s.a.createElement("td",null,"Asr"),s.a.createElement("td",null,s.a.createElement(y,{name:"asr",time:c.asr,handler:K}))),s.a.createElement("tr",null,s.a.createElement("td",null,"Ishaa"),s.a.createElement("td",null,s.a.createElement(y,{name:"ishaa",time:c.ishaa,handler:K}))),s.a.createElement("tr",null,s.a.createElement("td",null,"Jumuah"),s.a.createElement("td",null,s.a.createElement(y,{name:"jumuah",time:c.jumuah,handler:K}))),s.a.createElement("tr",null),s.a.createElement("tr",null,s.a.createElement("td",null,"Effective from"),s.a.createElement("td",null,s.a.createElement("input",{type:"date",id:"effective",name:"effective",className:"t",value:I,min:A,max:F,required:!0,onChange:function(e){q(e.target.value)}}))),s.a.createElement("tr",{className:"button-container"},s.a.createElement("td",{colSpan:"2"},s.a.createElement("input",{type:"submit",className:"button",value:"Save",disabled:N}))),s.a.createElement("tr",{className:"button-container"},s.a.createElement("td",{colSpan:"2"},s.a.createElement("input",{type:"button",className:"button",value:"Cancel",onClick:function(e){e.preventDefault(),window.location="/"}}))),s.a.createElement("tr",{className:"button-container"},s.a.createElement("td",{colSpan:"2"},s.a.createElement("input",{type:"button",className:"button",value:"Sign Out",onClick:function(t){t.preventDefault(),e.signout()}})))))),s.a.createElement("div",{className:"note"},"Maghrib iqaamah time is 10 (+",e.cfg.maghrib_offset," mins offset) minutes after adhaan. Login to ",s.a.createElement("a",{href:"https://wetsand.amrayn.com"},"wetsand console")," to change this.")))}))}}]);