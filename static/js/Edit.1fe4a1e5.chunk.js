(this["webpackJsonptaqwa-prayer"]=this["webpackJsonptaqwa-prayer"]||[]).push([[1],{123:function(e,t,a){},124:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a(19),c=a(2),l=a(0),u=a.n(l),m=a(104),i=a.n(m),o=a(1),s=a.n(o),d=a(25),f=a(17),h=a(30),p=a(16),E=a(11),b=a(5),g=(a(123),Object(h.b)("signin","authError")((function(e){var t=e.signin,a=e.authError,m=e.meta,i=Object(l.useState)({uname:"",pwd:""}),o=Object(c.a)(i,2),s=o[0],f=o[1],h=Object(l.useState)(a),p=Object(c.a)(h,1)[0],E=Object(l.useState)(!1),b=Object(c.a)(E,2),g=b[0],j=b[1],O=function(e){f(Object(r.a)(Object(r.a)({},s),{},Object(n.a)({},e.target.name,e.target.value)))};return u.a.createElement("div",null,u.a.createElement("form",{className:"login-form"},u.a.createElement("h1",null,"Login"),p&&u.a.createElement("div",{className:"login-form__error"},p),g&&u.a.createElement(d.a,null),u.a.createElement("input",{type:"text",name:"uname",className:"login-form__input-item",placeholder:"Username",value:s.uname,onChange:O}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("input",{type:"password",name:"pwd",className:"login-form__input-item",placeholder:"Password",value:s.pwd,onChange:O}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("input",{type:"submit",className:"login-form__input-button",value:"Sign in",onClick:function(e){e.preventDefault(),j(!0),t(s.uname,s.pwd).catch((function(e){j(!1)}))}})),m&&u.a.createElement("div",{className:"login-form__footer"},"If you do not have the credentials, please contact brothers on ",m.EMAIL," or ",m.PHONE))}))),j=(a(124),function(e){return u.a.createElement("input",{required:!0,type:"time",value:e.time,name:e.name,className:"t",onChange:e.handler})});t.default=Object(h.b)("currentToken","signout","statusPending")((function(e){var t=Object(l.useState)({}),a=Object(c.a)(t,2),m=a[0],o=a[1],h=Object(l.useState)(!0),O=Object(c.a)(h,2),v=O[0],N=O[1],y=Object(l.useState)(null),S=Object(c.a)(y,2),D=S[0],T=S[1],Y=Object(l.useState)(null),_=Object(c.a)(Y,2),w=_[0],M=_[1],k=Object(l.useState)(null),P=Object(c.a)(k,2),C=P[0],I=P[1],q=Object(l.useState)(null),x=Object(c.a)(q,2),A=x[0],J=x[1],U=Object(l.useState)(null),V=Object(c.a)(U,2),L=V[0],R=V[1],B=Object(E.a)("dev",0,-1);Object(l.useEffect)((function(){localStorage.setItem("_cbrk",Math.random()),Number(B)&&console.log("Development mode")}),[B]),Object(l.useEffect)((function(){if(e.ready){var t=s()(e.upcomingTimes.effective,b.e);t.startOf("day").isBefore(s()().startOf("day"))&&(t=s()().startOf("day"));var a={times:{fajr:Object(p.d)(e.upcomingTimes.fajr),dhuhr:Object(p.d)(e.upcomingTimes.dhuhr),asr:Object(p.d)(e.upcomingTimes.asr),ishaa:Object(p.d)(e.upcomingTimes.ishaa),jumuah:Object(p.d)(e.upcomingTimes.jumuah)},upcomingEffectiveDate:t.format("YYYY-MM-DD")};o({fajr:a.times.fajr,dhuhr:a.times.dhuhr,asr:a.times.asr,ishaa:a.times.ishaa,jumuah:a.times.jumuah}),I(a.upcomingEffectiveDate),J(s()().startOf("day").format("YYYY-MM-DD")),R(s()().startOf("day").add(7,"day").format("YYYY-MM-DD")),N(!1)}}),[e.ready,e.upcomingTimes]);var F=function(t,a){return console.debug("post to endpoint %s - data\n%s",t,a),fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:e.currentToken},body:a}).then((function(e){return e.json()})).catch((function(e){console.error("saveData error %s",e),T("Unexpected error "+e)}))},z=function(e){e.preventDefault(),o(Object(r.a)(Object(r.a)({},m),{},Object(n.a)({},e.target.name,e.target.value)))};return u.a.createElement(i.a,{id:"pa-edit",className:"pa-edit",meta:{title:"Edit Prayer Times",viewport:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}},(!e.currentToken&&e.statusPending||v)&&u.a.createElement(d.a,null),!e.currentToken&&!e.statusPending&&u.a.createElement(g,e),e.currentToken&&!e.statusPending&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Edit Iqaamah Times"),v&&u.a.createElement("div",{className:"pending"},"Loading..."),D&&u.a.createElement("div",{className:"error"},D),w&&u.a.createElement("div",{className:"message"},w),u.a.createElement("form",{onSubmit:function(t){t.preventDefault(),N(!0);var a="SAVE_ENDPOINT_UPCOMING",n="SAVE_ENDPOINT_CURR";Number(B)&&(console.log("Dev mode ..."),a="".concat(a,"_DEV"),n="".concat(n,"_DEV"));var c=f.a[a],l=f.a[n],u=s()().startOf("day"),i=s()(e.upcomingTimes.effective,b.e),o=[];i.isSameOrBefore(u)?(console.log("Replacing current times with upcoming..."),o.push(F(l,JSON.stringify({fajr:Object(p.d)(e.upcomingTimes.fajr),dhuhr:Object(p.d)(e.upcomingTimes.dhuhr),asr:Object(p.d)(e.upcomingTimes.asr),ishaa:Object(p.d)(e.upcomingTimes.ishaa),jumuah:Object(p.d)(e.upcomingTimes.jumuah),effective:s()().startOf("day").format(b.e)})))):console.log("Ignoring replacing current times",i.format("YYYY-MM-DD"),u.format("YYYY-MM-DD")),console.log("Setting upcoming times ..."),o.push(F(c,JSON.stringify(Object(r.a)(Object(r.a)({},m),{},{effective:C})))),Promise.all(o).then((function(e){N(!1);var t=e.map((function(e){return e.error})).filter((function(e){return e})).join(" \u2022 ");t.length>0?T(t):M("Successfully updated!"),localStorage.setItem("_cbrk","upd-"+Math.random())})).catch((function(e){console.error(e),T("Unexpected error occurred")}))}},u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Fajr"),u.a.createElement("td",null,u.a.createElement(j,{name:"fajr",time:m.fajr,handler:z}))),u.a.createElement("tr",null,u.a.createElement("td",null,"Dhuhr"),u.a.createElement("td",null,u.a.createElement(j,{name:"dhuhr",time:m.dhuhr,handler:z}))),u.a.createElement("tr",null,u.a.createElement("td",null,"Asr"),u.a.createElement("td",null,u.a.createElement(j,{name:"asr",time:m.asr,handler:z}))),u.a.createElement("tr",null,u.a.createElement("td",null,"Ishaa"),u.a.createElement("td",null,u.a.createElement(j,{name:"ishaa",time:m.ishaa,handler:z}))),u.a.createElement("tr",null,u.a.createElement("td",null,"Jumuah"),u.a.createElement("td",null,u.a.createElement(j,{name:"jumuah",time:m.jumuah,handler:z}))),u.a.createElement("tr",null),u.a.createElement("tr",null,u.a.createElement("td",null,"Effective from"),u.a.createElement("td",null,u.a.createElement("input",{type:"date",id:"effective",name:"effective",className:"t",value:C,min:A,max:L,required:!0,onChange:function(e){I(e.target.value)}}))),u.a.createElement("tr",{className:"button-container"},u.a.createElement("td",{colSpan:"2"},u.a.createElement("input",{type:"submit",className:"button",value:"Save",disabled:v}))),u.a.createElement("tr",{className:"button-container"},u.a.createElement("td",{colSpan:"2"},u.a.createElement("input",{type:"button",className:"button",value:"Cancel",onClick:function(e){e.preventDefault(),window.location="/"}}))),u.a.createElement("tr",{className:"button-container"},u.a.createElement("td",{colSpan:"2"},u.a.createElement("input",{type:"button",className:"button",value:"Sign Out",onClick:function(t){t.preventDefault(),e.signout()}})))))),u.a.createElement("div",{className:"note"},"Maghrib iqaamah time is 10 (+",b.f," min offset) minutes after adhaan")))}))}}]);