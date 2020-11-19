(this["webpackJsonptaqwa-prayer"]=this["webpackJsonptaqwa-prayer"]||[]).push([[3],{162:function(e,t,a){},163:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),i=a(29),l=a(31),s=a(92),o=a(161),m=a.n(o),d=a(16),u=(a(162),a(39)),f=a.n(u),_=a(2),h=a.n(_),g=a(41),E=a.n(g),v=a(13),p=(a(163),function(e){var t=Object(c.useState)(null),a=Object(n.a)(t,2),i=a[0],l=a[1],s=Object(c.useState)(Math.random()),o=Object(n.a)(s,2),m=o[0],d=o[1];return Object(c.useEffect)((function(){fetch(v.a.WEATHER_CLOUD_DATA+m).then((function(e){return e.json()})).then((function(e){e&&e.updated?l(e):console.error("Get weather function did not return correct data",e)})).catch((function(e){console.error("Error while fetching data information %s",e)}))}),[m]),Object(c.useEffect)((function(){var e=setInterval((function(){d(Math.random())}),2e4);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:f()("WeatherWidget",{"has-data":i})},!i&&r.a.createElement(E.a,{className:"WeatherWidget__spinner",color:"#444"}),i&&r.a.createElement("div",null,r.a.createElement("img",{src:i[e.loc].icon,alt:i.name,className:"WeatherWidget__icon"}),r.a.createElement("div",{className:"WeatherWidget__name"},i[e.loc].name),r.a.createElement("div",{className:"WeatherWidget__temp"},i[e.loc].temp),r.a.createElement("div",{className:"WeatherWidget__feeltemp"},"Feels like ",i[e.loc].feelsLike),!1))}),b=a(164),y=a.n(b),N=(a(167),Object(d.b)("hijriDate")((function(e){var t=Object(c.useState)(y()()),a=Object(n.a)(t,2),i=a[0],l=a[1];return Object(c.useEffect)((function(){var t=setInterval((function(){l(y()().tz(e.timezone))}));return function(){return clearInterval(t)}}),[e.timezone]),r.a.createElement("div",{className:"ClockWidget"},r.a.createElement("div",{className:"ClockWidget__name"},e.name),r.a.createElement("div",{className:"ClockWidget__time"},r.a.createElement("div",{className:"ClockWidget__min"},i.format("h:mm")),r.a.createElement("div",{className:"ClockWidget__sec"},i.format("ss")),r.a.createElement("div",{className:"ClockWidget__ampm"},i.format("a"))),!e.noDate&&r.a.createElement("div",{className:"ClockWidget__date"},i.format("ddd, d MMM")),!e.noDate&&e.showHijriDate&&r.a.createElement("div",{className:"ClockWidget__hijridate"},e.hijriDate))}))),O=a(19),j=a(245),T=a(17),k=a(10),W=a.n(k),P=(a(168),["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]),I=r.a.forwardRef((function(e,t){return r.a.createElement("div",{className:"WeeklyProgram",ref:t},e.cancelledThisWeek&&r.a.createElement("div",{className:"WeeklyProgram__cancelled-ribbon"},r.a.createElement("span",null,"Cancelled This Week")),r.a.createElement("div",{className:f()("WeeklyProgram__contents",{"is-cancelled":e.cancelledThisWeek,"is-next":e.isNext})},e.isNext&&r.a.createElement("div",{className:"WeeklyProgram__next"},"Next"),r.a.createElement("div",{className:"WeeklyProgram__series"},e.series),r.a.createElement("div",{className:"WeeklyProgram__chapter"},e.chapter),r.a.createElement("div",{className:"WeeklyProgram__day"},P[e.day-1]),r.a.createElement("div",{className:"WeeklyProgram__timing"},e.timing),e.deliveredBy&&r.a.createElement("div",{className:"WeeklyProgram__deliveredBy"},e.deliveredBy)))}));I.propTypes={day:W.a.number.isRequired,series:W.a.string.isRequired,chapter:W.a.string.isRequired,deliveredBy:W.a.string,cancelledThisWeek:W.a.bool},I.defaultProps={deliveredBy:"",cancelledThisWeek:!1};var A=I,D=(a(169),Object(d.b)("q")(Object(l.withMedia)((function(e){var t=Object(c.useState)(null),a=Object(n.a)(t,2),i=a[0],l=a[1],s=Object(c.useState)(null),o=Object(n.a)(s,2),m=o[0],d=o[1],u=Object(c.useState)(null),_=Object(n.a)(u,2),g=_[0],p=_[1],b=Object(c.useState)(Math.random()),y=Object(n.a)(b,2),N=y[0],k=y[1],W=Object(c.useState)(null),P=Object(n.a)(W,2),I=P[0],D=P[1],M=Object(c.useState)(e.hasEvents),S=Object(n.a)(M,2),w=S[0],C=S[1],L=Object(c.useRef)(),Y=Object(c.useRef)();return Object(c.useEffect)((function(){C(e.hasEvents)}),[e.hasEvents]),Object(c.useEffect)((function(){fetch(v.a.DUROOS_CLOUD_DATA+N).then((function(e){return e.json()})).then((function(e){l(e)})).catch((function(e){console.error("Error while fetching data information %s",e)}))}),[N,e.media]),Object(c.useEffect)((function(){if(i){for(var t=L.current.offsetHeight>300,a=i.filter((function(e){return!e.hide})).sort((function(e,t){return e.day-t.day})),n=h()().day(),c=function(e){var t=a.find((function(t){return t.day===e%7}));if(t&&!t.cancelledThisWeek)return p(t.day),"break"},r=n;r<=n+7;++r){if("break"===c(r))break}a.length>=3&&a.length<=6&&!e.media.mobile&&!e.media.tablet&&!t?d([].concat(Object(j.a)(a),Object(j.a)(a),Object(j.a)(a),Object(j.a)(a)).map((function(e,t){return Object(O.a)(Object(O.a)({},e),{},{key:"".concat(e.series,"-").concat(t)})}))):d(a)}}),[i,L,e.media]),Object(c.useEffect)((function(){var e=setInterval((function(){k(Math.random())}),2e4);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){var e=m;if(e&&e.length>1&&g)for(var t=e.length-1;e[0].day!==g||t-- >=-1;)e=Object(T.g)(e);D(e)}),[m,g]),Object(c.useEffect)((function(){if(!e.media.mobile){var t=Number(e.q.scroll),a=15e3;t&&t>1&&t<=30&&(a=1e3*t);var n=setInterval((function(){!L.current||!Y.current||I.length<=2||(L.current.scrollBy({top:Y.current.clientHeight+10,left:0,behavior:"smooth"}),L.current.scrollHeight-L.current.clientHeight===L.current.scrollTop&&L.current.scrollBy({top:-L.current.scrollHeight,left:0,behavior:"smooth"}))}),a);return function(){return clearInterval(n)}}}),[I,e.q,e.media]),r.a.createElement(c.Fragment,null,r.a.createElement("div",{ref:L,className:f()("WeeklyProgramList",{"has-events":w})},!I&&r.a.createElement(E.a,{className:"WeeklyProgramList__spinner",color:"#444"}),I&&r.a.createElement(c.Fragment,null,I.map((function(e){return r.a.createElement(A,{ref:Y,key:e.key||e.series,day:e.day,timing:e.timing,series:e.series,chapter:e.chapter,deliveredBy:e.deliveredBy,cancelledThisWeek:e.cancelledThisWeek,isNext:e.day===g})})))),!1)})))),M=a(96),S=a.n(M),w=a(170),C=a.n(w),L=(a(242),function(e){return r.a.createElement("div",{className:f()("Announcement",{"is-30days":"Upcoming"===e.upcomingType,"is-7days":"Soon"===e.upcomingType,"is-today":"Today"===e.upcomingType,"is-tmw":"Tomorrow"===e.upcomingType})},r.a.createElement("div",{className:"Announcement__title"},e.title),e.upcomingType&&r.a.createElement("div",{className:f()("Announcement__upcoming",{"is-30days":"Upcoming"===e.upcomingType,"is-7days":"Soon"===e.upcomingType,"is-today":"Today"===e.upcomingType,"is-tmw":"Tomorrow"===e.upcomingType})},e.upcomingType),r.a.createElement("div",{className:"Announcement__description"},r.a.createElement(C.a,{source:e.description})),e.date&&r.a.createElement("div",{className:"Announcement__date"},e.date),(e.time||e.endTime)&&r.a.createElement("div",{className:"Announcement__time-container"},e.time&&r.a.createElement("div",{className:"Announcement__time"},e.time),e.endTime&&r.a.createElement("div",{className:"Announcement__endtime"},e.endTime)))});L.defaultProps={description:""};var Y=L,q=(a(243),function(e){var t=Object(c.useState)(null),a=Object(n.a)(t,2),i=a[0],l=a[1],s=Object(c.useState)({}),o=Object(n.a)(s,2),m=o[0],d=o[1],u=Object(c.useState)(null),_=Object(n.a)(u,2),g=_[0],p=_[1],b=Object(c.useState)(Math.random()),y=Object(n.a)(b,2),N=y[0],O=y[1];return Object(c.useEffect)((function(){fetch(v.a.ANNOUNCEMENTS_CLOUD_DATA+N).then((function(e){return e.json()})).then((function(t){var a=t.filter((function(e){return!e.hide&&(!e.date||h()(e.date).isAfter(h()().startOf("day")))})).sort((function(e,t){return e.date&&t.date?h()(e.date).format("YYYYMMDD")-h()(t.date).format("YYYYMMDD"):0})).map((function(e){if(e.date){var t=h()(e.date);e.date=t.format("DD MMM YYYY"),e.hideTime||(e.time=t.format("h:mm a"))}return e.hideDate&&(e.date=null),e.hasEndDate&&e.endDate&&(e.endTime=h()(e.endDate).format("h:mm a")),e}));if(a.length>0&&a[0].date){var n,c=h()(a[0].date).startOf("day").diff(h()().startOf("day"),"days");if(c<30)n=0===c?"Today":1===c?"Tomorrow":c<=7?"Soon":"Upcoming",d({title:a[0].title,type:n})}l(a),e.onLoad(a.length>0)})).catch((function(e){console.error("Error while fetching data information %s",e)}))}),[N,e]),Object(c.useEffect)((function(){var e=setInterval((function(){O(Math.random())}),2e4);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){p(i)}),[i]),r.a.createElement("div",{className:f()("AnnouncementList",{"has-data":g})},!g&&r.a.createElement(E.a,{className:"AnnouncementList__spinner",color:"#444"}),g&&g.length>0&&r.a.createElement("h3",{className:"InfoPage__right-pane-title is-events-title"},r.a.createElement("span",{className:"InfoPage__right-pane-title-icon-container"},r.a.createElement(S.a,{size:"custom",className:"InfoPage__right-pane-title-icon"})),r.a.createElement("span",{className:"InfoPage__right-pane-title-text"},"Events / Announcements")),g&&r.a.createElement("div",{className:"AnnouncementList__contents"},g.map((function(e){return r.a.createElement(Y,{key:e.title,title:e.title,description:e.description,date:e.date,time:e.time,endTime:e.endTime,upcomingType:m.title===e.title&&m.type})}))))});t.default=Object(d.b)("meta","q")(Object(l.withMedia)((function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),l=a[0],o=a[1];return r.a.createElement("div",{className:"App InfoPage ".concat(e.monitorMode?"is-monitor":""),style:{fontSize:(e.q.size||16)+"px"}},r.a.createElement(s.a,{defer:!1},r.a.createElement("title",null,"Information \u2013 ",e.meta.name)),r.a.createElement("div",{className:"InfoPage__title"},r.a.createElement("img",{src:e.meta.logo,className:"InfoPage__title-img",alt:e.meta.name}),r.a.createElement("div",{className:"InfoPage__title-text",dangerouslySetInnerHTML:{__html:e.meta.full_name}})),r.a.createElement("div",{className:"InfoPage__contents"},!e.media.mobile&&!e.media.tablet&&r.a.createElement("div",{className:"InfoPage__left-pane"},r.a.createElement("div",{className:"InfoPage__left-pane-inner"},r.a.createElement(N,{timezone:"Australia/Canberra",showHijriDate:!0}),r.a.createElement(p,{loc:"cbr"}),r.a.createElement("div",{className:"InfoPage__left-sep"}),r.a.createElement(N,{timezone:"Etc/GMT-3",name:"Makkah Time",noDate:!0}),r.a.createElement(p,{loc:"makkah"}))),r.a.createElement("div",{className:"InfoPage__right-pane"},r.a.createElement("h3",{className:"InfoPage__right-pane-title"},r.a.createElement("span",{className:"InfoPage__right-pane-title-icon-container"},r.a.createElement(m.a,{size:"custom",className:"InfoPage__right-pane-title-icon"})),r.a.createElement("span",{className:"InfoPage__right-pane-title-text"},"Weekly Programs")),r.a.createElement(D,{hasEvents:l}),r.a.createElement(q,{onLoad:function(e){return o(e)}}))),r.a.createElement("div",{className:"InfoPage__foot"},r.a.createElement(i.b,{to:"/",className:"App-switch-link"},"View Prayer Times")))})))}}]);