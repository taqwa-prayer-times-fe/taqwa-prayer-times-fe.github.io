(this["webpackJsonptaqwa-prayer"]=this["webpackJsonptaqwa-prayer"]||[]).push([[7],{100:function(a,e,t){"use strict";t.r(e);var r=t(0),n=t.n(r),s=t(28),l=t(86),i=t(37),m=t.n(i),h=t(19),c=t(78),d=t(79),o=t(82),u=t(81),p=t(80),b=t(2),f=t.n(b),E=t(17),g=t(25),y=t(16),v=t(5);t(94),e.default=function(a){return Object(E.b)("ready","iqaamah","currentTimes","upcomingTimes","adhaan","adhaanNextMonth","initPage","pageInterval","pageInitialized","updated","monitorMode","version","meta")((e=a,function(a){Object(u.a)(r,a);var t=Object(p.a)(r);function r(a){var e;return Object(c.a)(this,r),(e=t.call(this,a)).state={ready:a.ready,dates:[],nextSalaah:null},e.effectiveDate=e.effectiveDate.bind(Object(o.a)(e)),e.refresh=e.refresh.bind(Object(o.a)(e)),e.buildIqaamahObj=e.buildIqaamahObj.bind(Object(o.a)(e)),e.formatAdhaan=e.formatAdhaan.bind(Object(o.a)(e)),e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.props.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,60))}},{key:"componentDidUpdate",value:function(a,e){e.ready!==this.state.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,60))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.props.pageInterval)}},{key:"effectiveDate",value:function(){return this.props.upcomingTimes?f()(this.props.upcomingTimes.effective,v.e):f()()}},{key:"formatAdhaan",value:function(a,e,t){var r=a.format(v.b),n=this.props.adhaan[r]||this.props.adhaanNextMonth[r];return n?Object(y.c)(n[e],t):"Not available"}},{key:"buildIqaamahObj",value:function(a,e){var t=this.prevIqaamahSource&&this.prevIqaamahSource[e]&&this.iqaamahSource[e]!==this.prevIqaamahSource[e];return"dhuhr"===e&&"Sat"===a.format("ddd")&&this.props.currentTimes[e]!==this.props.upcomingTimes[e]&&(this.effectiveDate().isSame(a)||"Fri"===this.effectiveDate().format("ddd"))&&(t=!0),this.effectiveDate().isSameOrBefore(f()().startOf("day"))&&(t=!1),{iqaamah:this.iqaamahSource&&this.iqaamahSource[e]?Object(y.c)(this.iqaamahSource[e]):"Error",changing:t}}},{key:"refresh",value:function(){this.props.currentTimes&&(this.iqaamahSource=Object(h.a)({},this.props.currentTimes),this.prevIqaamahSource=null);var a=Object(y.b)({adhaan:this.props.adhaan,iqaamah:this.props.iqaamah,upcomingIqaamah:this.props.upcomingTimes}),e=a.isAfterIshaa?f()().add(1,"day"):f()();a.name="".concat(e.format("DD-MMM"),"-").concat(a.name.toLowerCase());for(var t=[],r=0;r<7;++r){var n=f()().add(r,"days").startOf("day"),s=n.format("DD/MMM"),l=n.format("ddd");n.isSameOrAfter(this.effectiveDate())&&(this.prevIqaamahSource=Object(h.a)({},this.iqaamahSource),this.iqaamahSource=Object(h.a)({},this.props.upcomingTimes));var i={};if(Object(y.f)(n)){var m=this.buildIqaamahObj(n,"jumuah");i.adhaan=m.iqaamah,i.iqaamah=v.c}else i=Object(h.a)({adhaan:this.formatAdhaan(n,"dhuhr")},this.buildIqaamahObj(n,"dhuhr"));t.push({name:s,dayOfWeek:l,key:n.format("DD-MMM"),fajr:Object(h.a)({adhaan:this.formatAdhaan(n,"fajr")},this.buildIqaamahObj(n,"fajr")),shurooq:{adhaan:this.formatAdhaan(n,"shurooq"),iqaamah:this.formatAdhaan(n,"shurooq",15)},dhuhr:i,asr:Object(h.a)({adhaan:this.formatAdhaan(n,"asr")},this.buildIqaamahObj(n,"asr")),maghrib:{adhaan:this.formatAdhaan(n,"maghrib",v.f),iqaamah:this.formatAdhaan(n,"maghrib",v.f+10)},ishaa:Object(h.a)({adhaan:this.formatAdhaan(n,"ishaa")},this.buildIqaamahObj(n,"ishaa"))})}this.setState({dates:t,nextSalaah:a})}},{key:"render",value:function(){return(this.state.ready?null:n.a.createElement(g.a,null))||n.a.createElement(e,Object.assign({dates:this.state.dates,nextSalaah:this.state.nextSalaah},this.props))}}],[{key:"getDerivedStateFromProps",value:function(a,e){return a.ready!==e.ready?{ready:!0}:null}}]),r}(n.a.Component)));var e}((function(a){var e=function(e,t){return a.nextSalaah&&a.nextSalaah.name===e.key+"-"+t?"App-is-next type-"+a.nextSalaah.type:""},t=function(a,e){return a[e]&&a[e].changing?"App-is-changing":""};return n.a.createElement("div",{className:"App ".concat(a.monitorMode?"is-monitor":"")},n.a.createElement(l.a,{defer:!1},n.a.createElement("title",null,"Prayer Times, ",a.meta.NAME)),!a.monitorMode&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"App-heading"},"7 Days Prayer Times",n.a.createElement("br",null),a.meta.FULL_NAME),n.a.createElement("img",{src:a.meta.LOGO,className:"App-img Week-img",alt:a.meta.NAME})),n.a.createElement("table",{border:"0",cellSpacing:"0",cellPadding:"0",className:"App-table Week-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Date"),n.a.createElement("td",null,"(True) Fajr"),n.a.createElement("td",null,"Shurooq"),n.a.createElement("td",null,"Dhuhr / Jumuah"),n.a.createElement("td",null,"Asr"),n.a.createElement("td",null,"Maghrib"),n.a.createElement("td",null,"Ishaa"))),n.a.createElement("tbody",null,a.dates.map((function(a){return n.a.createElement(n.a.Fragment,{key:a.name},n.a.createElement("tr",null,n.a.createElement("td",{className:"date"},n.a.createElement("span",{className:"date-name"},a.name,n.a.createElement("br",null),a.dayOfWeek),n.a.createElement("table",{className:"date-table"},n.a.createElement("tbody",null,n.a.createElement("tr",{className:"date-table-row"},n.a.createElement("td",{className:"date-table-data"},"Adhaan")),n.a.createElement("tr",{className:"date-table-row"},n.a.createElement("td",{className:"date-table-data"},"Iqaamah"))))),n.a.createElement("td",{className:m()("prayer",e(a,"fajr"),t(a,"fajr"))},n.a.createElement("span",{className:"tags"}),a.fajr.adhaan,n.a.createElement("br",null),n.a.createElement("br",null),a.fajr.iqaamah),n.a.createElement("td",{className:m()("prayer",e(a,"shurooq"),t(a,"shurooq"))},n.a.createElement("span",{className:"tags"}),a.shurooq.adhaan,n.a.createElement("br",null),n.a.createElement("br",null),a.shurooq.iqaamah),n.a.createElement("td",{className:m()("prayer",e(a,"dhuhr"),t(a,"dhuhr"),e(a,"jumuah"),t(a,"jumuah"))},n.a.createElement("span",{className:"tags"}),a.dhuhr.adhaan,n.a.createElement("br",null),n.a.createElement("br",null),a.dhuhr.iqaamah),n.a.createElement("td",{className:m()("prayer",e(a,"asr"),t(a,"asr"))},n.a.createElement("span",{className:"tags"}),a.asr.adhaan,n.a.createElement("br",null),n.a.createElement("br",null),a.asr.iqaamah),n.a.createElement("td",{className:m()("prayer",e(a,"maghrib"),t(a,"maghrib"))},n.a.createElement("span",{className:"tags"}),a.maghrib.adhaan,n.a.createElement("br",null),n.a.createElement("br",null),a.maghrib.iqaamah),n.a.createElement("td",{className:m()("prayer",e(a,"ishaa"),t(a,"ishaa"))},n.a.createElement("span",{className:"tags"}),a.ishaa.adhaan,n.a.createElement("br",null),n.a.createElement("br",null),a.ishaa.iqaamah)))})))),!a.monitorMode&&n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement(s.b,{to:"/next",className:"App-switch-link"},"View Next Prayer"),n.a.createElement("br",null),n.a.createElement(s.b,{to:"/",className:"App-switch-link"},"View Today's Prayer Times")),a.lastUpdated&&n.a.createElement("div",{className:"Today-last-updated"},"Last fetched ",a.lastUpdated),!a.monitorMode&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"App-email"},"Send your feedbacks and suggestions to ",a.meta.EMAIL),n.a.createElement("br",null),n.a.createElement("div",{className:"App-ver"},"Ver. ",a.version)))}))},94:function(a,e,t){}}]);