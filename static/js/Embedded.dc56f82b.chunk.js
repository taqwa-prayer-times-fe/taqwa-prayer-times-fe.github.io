(this["webpackJsonptaqwa-prayer"]=this["webpackJsonptaqwa-prayer"]||[]).push([[2],{100:function(e,t,a){"use strict";var n=a(23),r=a(31),i=a(91),o=a(92),c=a(95),u=a(94),s=a(93),h=a(0),l=a.n(h),m=a(2),f=a.n(m),p=a(15),d=a(30),b=a(16),y=a(5);t.a=function(e){return Object(p.b)("ready","iqaamah","currentTimes","upcomingTimes","adhaan","initPage","pageInterval","pageInitialized","lastUpdated","monitorMode","version","meta")((t=e,function(e){Object(u.a)(h,e);var a=Object(s.a)(h);function h(e){var t;return Object(i.a)(this,h),(t=a.call(this,e)).state={titles:["Salaah","Adhaan","Iqaamah"],heading:"Prayer Times for ".concat(f()().format("DD MMM, YYYY"),"<br/>").concat(e.meta.FULL_NAME),times:[],nextSalaah:null,updated:"",ready:e.ready},t.refresh=t.refresh.bind(Object(c.a)(t)),t.buildPrayerTime=t.buildPrayerTime.bind(Object(c.a)(t)),t.findIqaamah=t.findIqaamah.bind(Object(c.a)(t)),t.findAdhaan=t.findAdhaan.bind(Object(c.a)(t)),t.buildChangeMessage=t.buildChangeMessage.bind(Object(c.a)(t)),t}return Object(o.a)(h,[{key:"componentDidMount",value:function(){this.props.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,60))}},{key:"componentDidUpdate",value:function(e,t){t.ready!==this.state.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,60))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.props.pageInterval)}},{key:"findIqaamah",value:function(e){return"maghrib"===e?Object(b.c)(this.props.adhaan[Object(b.e)()][e],y.e+10):"shurooq"===e?Object(b.c)(this.props.adhaan[Object(b.e)()][e],15):"jumuah"===e?y.b:Object(b.c)(this.props.iqaamah[e])}},{key:"findAdhaan",value:function(e){if("jumuah"===e)return Object(b.c)(this.props.iqaamah[e]);var t="maghrib"===e?y.e:0;return Object(b.c)(this.props.adhaan[Object(b.e)()][e],t)}},{key:"buildChangeMessage",value:function(e){if(!this.props.currentTimes[e])return{changing:!1};var t=f()(this.props.upcomingTimes.effective,y.d),a=f()(this.props.currentTimes[e],y.h),n=f()(this.props.upcomingTimes[e],y.h);if(t.isAfter(f()())&&!n.isSame(a)){var i="jumuah"===e?"changingMessageAdhaan":"changingMessageIqaamah",o=t.format("ddd");"Fri"===o&&"dhuhr"===e&&(o="Sat");var c=t.startOf("day").isSame(f()().startOf("day").add(1,"days"))?"Tomorrow":o;return Object(r.a)({changing:!0},i,"".concat(Object(b.c)(n)," from ").concat(c))}return{changing:!1}}},{key:"buildPrayerTime",value:function(e,t){return Object(n.a)({name:e,key:t,adhaan:this.findAdhaan(t),iqaamah:this.findIqaamah(t)},this.buildChangeMessage(t))}},{key:"refresh",value:function(){var e={};e=Object(b.f)()?this.buildPrayerTime("Jumuah","jumuah"):this.buildPrayerTime("Dhuhr","dhuhr");var t=[this.buildPrayerTime("(True) Fajr","fajr"),this.buildPrayerTime("Shurooq","shurooq"),e,this.buildPrayerTime("Asr","asr"),this.buildPrayerTime("Maghrib","maghrib"),this.buildPrayerTime("Ishaa","ishaa")];this.setState({heading:"Prayer Times for ".concat(f()().format("DD MMM, YYYY"),"<br/>").concat(this.props.meta.FULL_NAME),times:t,nextSalaah:Object(b.b)({adhaan:this.props.adhaan,iqaamah:this.props.iqaamah,upcomingIqaamah:this.props.upcomingTimes})})}},{key:"render",value:function(){return(this.state.ready?null:l.a.createElement(d.a,null))||l.a.createElement(t,Object.assign({titles:this.state.titles,heading:this.state.heading,times:this.state.times,jumuah:this.props.upcomingTimes?f()(this.props.upcomingTimes.jumuah,y.h).format(y.c):"...",nextSalaah:this.state.nextSalaah},this.props))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.ready!==t.ready?{ready:!0}:null}}]),h}(l.a.Component)));var t}},115:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(0),i=a.n(r),o=a(46),c=a.n(o),u=a(100);a(115);t.default=Object(u.a)((function(e){return i.a.createElement("div",{className:"App"},i.a.createElement("table",{border:"0",cellSpacing:"0",cellPadding:"0",className:"App-table Embedded-table"},i.a.createElement("caption",{className:"Embedded-title"},"Taqwa Masjid Iqamah Times"),i.a.createElement("thead",null,i.a.createElement("tr",null,e.times.filter((function(e){return"shurooq"!==e.key})).map((function(t){var a;return i.a.createElement(i.a.Fragment,null,i.a.createElement("td",{className:c()("App-next-container",(a={},Object(n.a)(a,"type-".concat(e.nextSalaah.type),!0),Object(n.a)(a,"App-is-next",e.nextSalaah&&e.nextSalaah.name===t.key),a))},t.name.indexOf("Fajr")>-1?"Fajr":t.name))})))),i.a.createElement("tbody",null,i.a.createElement("tr",null,e.times.filter((function(e){return"shurooq"!==e.key})).map((function(t){var a;return i.a.createElement(i.a.Fragment,null,i.a.createElement("td",{className:c()("App-next-container",(a={},Object(n.a)(a,"type-".concat(e.nextSalaah.type),!0),Object(n.a)(a,"App-is-next",e.nextSalaah&&e.nextSalaah.name===t.key),a))},t.iqaamah))}))))),i.a.createElement("div",{className:"Embedded-jumuah"},"Jumuah @ ",e.jumuah))}))},91:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},92:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},93:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.d(t,"a",(function(){return u}));var o=a(95);function c(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?Object(o.a)(e):t}function u(e){return function(){var t,a=n(e);if(r()){var i=n(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return c(this,t)}}},94:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return r}))},95:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))}}]);