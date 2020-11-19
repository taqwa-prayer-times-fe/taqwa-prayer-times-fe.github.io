(this["webpackJsonptaqwa-prayer"]=this["webpackJsonptaqwa-prayer"]||[]).push([[3],{161:function(e,t,a){},162:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),i=a(31),l=a(92),m=a(16),s=(a(161),a(1)),o=a(39),d=a.n(o),u=a(2),f=a.n(u),_=a(41),E=a.n(_),v=a(13),h=(a(162),function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(Math.random()),l=Object(s.a)(i,2),m=l[0],o=l[1];return Object(n.useEffect)((function(){fetch(v.a.WEATHER_CLOUD_DATA+m).then((function(e){return e.json()})).then((function(e){e&&e.temp?c(e):console.error("Get weather function did not return correct data",e)})).catch((function(e){console.error("Error while fetching data information %s",e)}))}),[m]),Object(n.useEffect)((function(){var e=setInterval((function(){o(Math.random())}),2e4);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:d()("WeatherWidget",{"has-data":a})},!a&&r.a.createElement(E.a,{className:"WeatherWidget__spinner",color:"#444"}),a&&r.a.createElement("div",null,r.a.createElement("img",{src:a.icon,alt:a.name,className:"WeatherWidget__icon"}),r.a.createElement("div",{className:"WeatherWidget__name"},a.name),r.a.createElement("div",{className:"WeatherWidget__temp"},a.temp),r.a.createElement("div",{className:"WeatherWidget__feeltemp"},"Feels like ",a.feelsLike),r.a.createElement("div",{className:"WeatherWidget__updatedOn"},f()(Number(a.updated)).format("DD/MM/YYYY, HH:mm"))))}),g=a(163),N=a.n(g),p=(a(166),function(e){var t=Object(n.useState)(N()()),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(n.useEffect)((function(){var t=setInterval((function(){i(N()().tz(e.timezone))}));return function(){return clearInterval(t)}}),[e.timezone]),r.a.createElement("div",{className:"ClockWidget"},r.a.createElement("div",{className:"ClockWidget__name"},e.name),r.a.createElement("div",{className:"ClockWidget__time"},r.a.createElement("div",{className:"ClockWidget__min"},c.format("h:mm")),r.a.createElement("div",{className:"ClockWidget__sec"},c.format("ss")),r.a.createElement("div",{className:"ClockWidget__ampm"},c.format("a"))),r.a.createElement("div",{className:"ClockWidget__date"},c.format("ddd, d MMM")))}),y=a(244),W=(a(167),["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]),b=function(e){return r.a.createElement("div",{className:"WeeklyProgram"},e.cancelledThisWeek&&r.a.createElement("div",{className:"WeeklyProgram__cancelled-ribbon"},r.a.createElement("span",null,"Cancelled This Week")),r.a.createElement("div",{className:d()("WeeklyProgram__contents",{"is-cancelled":e.cancelledThisWeek,"is-next":e.isNext})},r.a.createElement("div",{className:"WeeklyProgram__series"},e.series),r.a.createElement("div",{className:"WeeklyProgram__chapter"},e.chapter),r.a.createElement("div",{className:"WeeklyProgram__day"},W[e.day-1]),r.a.createElement("div",{className:"WeeklyProgram__timing"},e.timing),e.deliveredBy&&r.a.createElement("div",{className:"WeeklyProgram__deliveredBy"},e.deliveredBy)))};b.defaultProps={deliveredBy:"",cancelledThisWeek:!1};var k=b,O=(a(168),function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),l=Object(s.a)(i,2),m=l[0],o=l[1],d=Object(n.useState)(Math.random()),u=Object(s.a)(d,2),_=u[0],h=u[1];return Object(n.useEffect)((function(){fetch(v.a.DUROOS_CLOUD_DATA+_).then((function(e){return e.json()})).then((function(e){for(var t=e.filter((function(e){return!e.hide})).sort((function(e,t){return e.day-t.day})),a=f()().day(),n=function(e){var a=t.find((function(t){return t.day===e%7}));if(a)return o(a.day),"break"},r=a;r<=a+7;++r){if("break"===n(r))break}c([].concat(Object(y.a)(t),Object(y.a)(t)))})).catch((function(e){console.error("Error while fetching data information %s",e)}))}),[_]),Object(n.useEffect)((function(){var e=setInterval((function(){h(Math.random())}),2e4);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"WeeklyProgramList"},!a&&r.a.createElement(E.a,{className:"WeeklyProgramList__spinner",color:"#444"}),a&&a.length>0&&r.a.createElement("h3",{className:"InfoPage__right-pane-title"},"Weekly Programs"),a&&r.a.createElement("div",{className:"WeeklyProgramList__contents"},a.map((function(e){return r.a.createElement(k,{key:e.series,day:e.day,timing:e.timing,series:e.series,chapter:e.chapter,deliveredBy:e.deliveredBy,cancelledThisWeek:e.cancelledThisWeek,isNext:e.day===m})}))))}),j=a(169),P=a.n(j),I=(a(241),function(e){return r.a.createElement("div",{className:"Announcement"},r.a.createElement("div",{className:"Announcement__title"},e.title),r.a.createElement("div",{className:"Announcement__description"},r.a.createElement(P.a,{source:e.description})),e.date&&r.a.createElement("div",{className:"Announcement__date"},e.date),e.time&&r.a.createElement("div",{className:"Announcement__time"},e.time),e.endTime&&r.a.createElement("div",{className:"Announcement__endtime"},e.endTime))});I.defaultProps={description:""};var T=I,A=(a(242),function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(Math.random()),l=Object(s.a)(i,2),m=l[0],o=l[1];return Object(n.useEffect)((function(){fetch(v.a.ANNOUNCEMENTS_CLOUD_DATA+m).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return!e.hide})).sort((function(e,t){return e.ord-t.ord})).map((function(e){if(e.date){var t=f()(e.date);e.date=t.format("DD MMM YYYY"),e.hideTime||(e.time=t.format("h:mm a"))}return e.hideDate&&(e.date=null),e.hasEndDate&&e.endDate&&(e.endTime=f()(e.endDate).format("h:mm a")),e}));c(t)})).catch((function(e){console.error("Error while fetching data information %s",e)}))}),[m]),Object(n.useEffect)((function(){var e=setInterval((function(){o(Math.random())}),2e4);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:d()("AnnouncementList",{"has-data":a})},!a&&r.a.createElement(E.a,{className:"AnnouncementList__spinner",color:"#444"}),a&&a.length>0&&r.a.createElement("h3",{className:"InfoPage__right-pane-title"},"Events / Announcements"),a&&r.a.createElement("div",{className:"AnnouncementList__contents"},a.map((function(e){return r.a.createElement(T,{key:e.title,title:e.title,description:e.description,date:e.date,time:e.time,endTime:e.endTime})}))))}),M=function(){return r.a.createElement("div",{className:"InfoPage__left-sep"})};t.default=Object(m.b)("hijriDate","meta")(Object(i.withMedia)((function(e){return r.a.createElement("div",{className:"App InfoPage ".concat(e.monitorMode?"is-monitor":"")},r.a.createElement(l.a,{defer:!1},r.a.createElement("title",null,"Information \u2013 ",e.meta.name)),r.a.createElement("div",{className:"InfoPage__title"},r.a.createElement("img",{src:e.meta.logo,className:"InfoPage__title-img",alt:e.meta.name}),r.a.createElement("div",{className:"InfoPage__title-text",dangerouslySetInnerHTML:{__html:e.meta.full_name}})),r.a.createElement("div",{className:"InfoPage__contents"},r.a.createElement("div",{className:"InfoPage__left-pane"},r.a.createElement("div",{className:"InfoPage__left-pane-inner"},r.a.createElement(h,null),r.a.createElement(M,null),r.a.createElement(p,{timezone:"Australia/Canberra",name:"Canberra"}),r.a.createElement(M,null),r.a.createElement(p,{timezone:"Etc/GMT-3",name:"Makkah"}),r.a.createElement(M,null),r.a.createElement("div",{className:"InfoPage__hijridate"},e.hijriDate))),r.a.createElement("div",{className:"InfoPage__right-pane"},r.a.createElement(O,null),r.a.createElement(A,null))),r.a.createElement("div",{className:"InfoPage__foot"},r.a.createElement(c.b,{to:"/",className:"App-switch-link"},"View Prayer Times")))})))}}]);