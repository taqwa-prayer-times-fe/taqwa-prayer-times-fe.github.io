(this["webpackJsonptaqwa-prayer"]=this["webpackJsonptaqwa-prayer"]||[]).push([[5,3,6,7],{103:function(e,a,t){},127:function(e,a,t){"use strict";t.r(a);var n=t(78),r=t(79),i=t(81),s=t(80),l=t(0),c=t.n(l),m=t(88),o=t(94),u=t(99),h=t(95),d=t(25),p=(t(103),{today:o.default,week:u.default,next:h.default}),f=function(){return c.a.createElement("div",null,"Invalid slide")},g=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).slides=r.props.q.slides?r.props.q.slides.split(","):Object.keys(p),r.state={curr:d.a},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.nextSlide(),setInterval((function(){e.nextSlide()}),1e3*(parseInt(this.props.q.interval,10)||30))}},{key:"nextSlide",value:function(){var e=this.state.currIdx||0;(e+=1)>this.slides.length-1&&(e=0),"now"===this.props.remaining&&this.slides.indexOf("next")>-1&&(e=this.slides.indexOf("next")),this.setState({currIdx:e,curr:p[this.slides[e]]||f})}},{key:"render",value:function(){var e=this.state.curr;return c.a.createElement(e,{ignoreInit:!0})}}]),t}(l.Component);a.default=Object(m.a)(g)},86:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(t(0)),r=s(t(10)),i=s(t(37));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var c=function(e){var a;return n.default.createElement("span",{className:(0,i.default)("hjs-icon",(a={},l(a,e.className,!!e.className),l(a,"is-small","small"===e.size),l(a,"is-large","large"===e.size),l(a,"is-xlarge","xlarge"===e.size),l(a,"is-xxlarge","xxlarge"===e.size),l(a,"is-xxxlarge","xxxlarge"===e.size),l(a,"is-custom","custom"===e.size),l(a,"is-flipped",e.flipped),a))},n.default.createElement("svg",{className:"hjs-icon__svg",viewBox:(e.viewBox.minX||0)+" "+(e.viewBox.minY||0)+" "+e.viewBox.width+" "+e.viewBox.height},n.default.createElement("path",{fill:"currentColor",d:e.path})))};c.displayName="IconWrapper",c.propTypes={name:r.default.string.isRequired,size:r.default.oneOf(["small","large","xlarge","xxlarge","xxxlarge","custom"]),path:r.default.string.isRequired,flipped:r.default.bool,viewBox:r.default.shape({minX:r.default.number,minY:r.default.number,width:r.default.number.isRequired,height:r.default.number.isRequired})},c.defaultProps={size:"small",viewBox:{minX:0,minY:0,width:640,height:512},flipped:!1},c.displayName="Icon",a.default=c},87:function(e,a,t){"use strict";var n=t(18),r=t(26),i=t(78),s=t(79),l=t(82),c=t(81),m=t(80),o=t(0),u=t.n(o),h=t(1),d=t.n(h),p=t(15),f=t(25),g=t(16),b=t(5);a.a=function(e){return Object(p.b)("ready","iqaamah","currentTimes","upcomingTimes","adhaan","initPage","pageInterval","pageInitialized","lastUpdated","monitorMode","version","meta")((a=e,function(e){Object(c.a)(o,e);var t=Object(m.a)(o);function o(e){var a;return Object(i.a)(this,o),(a=t.call(this,e)).state={titles:["Salaah","Adhaan","Iqaamah"],heading:"Prayer Times for ".concat(d()().format("DD MMM, YYYY"),"<br/>").concat(e.meta.FULL_NAME),times:[],nextSalaah:null,updated:"",ready:e.ready},a.refresh=a.refresh.bind(Object(l.a)(a)),a.buildPrayerTime=a.buildPrayerTime.bind(Object(l.a)(a)),a.findIqaamah=a.findIqaamah.bind(Object(l.a)(a)),a.findAdhaan=a.findAdhaan.bind(Object(l.a)(a)),a.buildChangeMessage=a.buildChangeMessage.bind(Object(l.a)(a)),a}return Object(s.a)(o,[{key:"componentDidMount",value:function(){this.props.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,60))}},{key:"componentDidUpdate",value:function(e,a){a.ready!==this.state.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,60))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.props.pageInterval)}},{key:"findIqaamah",value:function(e){return"maghrib"===e?Object(g.c)(this.props.adhaan[Object(g.e)()][e],b.f+10):"shurooq"===e?Object(g.c)(this.props.adhaan[Object(g.e)()][e],15):"jumuah"===e?b.c:Object(g.c)(this.props.iqaamah[e])}},{key:"findAdhaan",value:function(e){if("jumuah"===e)return Object(g.c)(this.props.iqaamah[e]);var a="maghrib"===e?b.f:0;return Object(g.c)(this.props.adhaan[Object(g.e)()][e],a)}},{key:"buildChangeMessage",value:function(e){if(!this.props.currentTimes[e])return{changing:!1};var a=d()(this.props.upcomingTimes.effective,b.e),t=d()(this.props.currentTimes[e],b.h),n=d()(this.props.upcomingTimes[e],b.h);if(a.isAfter(d()())&&!n.isSame(t)){var i="jumuah"===e?"changingMessageAdhaan":"changingMessageIqaamah",s=a.format("ddd");"Fri"===s&&"dhuhr"===e&&(s="Sat");var l=a.startOf("day").isSame(d()().startOf("day").add(1,"days"))?"Tomorrow":s;return Object(r.a)({changing:!0},i,"".concat(Object(g.c)(n)," from ").concat(l))}return{changing:!1}}},{key:"buildPrayerTime",value:function(e,a){return Object(n.a)({name:e,key:a,adhaan:this.findAdhaan(a),iqaamah:this.findIqaamah(a)},this.buildChangeMessage(a))}},{key:"refresh",value:function(){var e={};e=Object(g.f)()?this.buildPrayerTime("Jumuah","jumuah"):this.buildPrayerTime("Dhuhr","dhuhr");var a=[this.buildPrayerTime("(True) Fajr","fajr"),this.buildPrayerTime("Shurooq","shurooq"),e,this.buildPrayerTime("Asr","asr"),this.buildPrayerTime("Maghrib","maghrib"),this.buildPrayerTime("Ishaa","ishaa")];this.setState({heading:"Prayer Times for ".concat(d()().format("DD MMM, YYYY"),"<br/>").concat(this.props.meta.FULL_NAME),times:a,nextSalaah:Object(g.b)({adhaan:this.props.adhaan,iqaamah:this.props.iqaamah,upcomingIqaamah:this.props.upcomingTimes})})}},{key:"render",value:function(){return(this.state.ready?null:u.a.createElement(f.a,null))||u.a.createElement(a,Object.assign({titles:this.state.titles,heading:this.state.heading,times:this.state.times,jumuah:this.props.upcomingTimes?d()(this.props.upcomingTimes.jumuah,b.h).format(b.d):"...",nextSalaah:this.state.nextSalaah},this.props))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.ready!==a.ready?{ready:!0}:null}}]),o}(u.a.Component)));var a}},88:function(e,a,t){"use strict";var n=t(18),r=t(78),i=t(79),s=t(82),l=t(81),c=t(80),m=t(0),o=t.n(m),u=t(91),h=t.n(u),d=t(15),p=t(25),f=t(16),g=t(9);a.a=function(e){return Object(d.b)("ready","adhaan","currentTimes","upcomingTimes","initPage","pageInterval","pageInitialized","updated","monitorMode","version","meta","q")((a=e,function(e){Object(l.a)(m,e);var t=Object(c.a)(m);function m(e){var a;return Object(r.a)(this,m),(a=t.call(this,e)).state={ready:e.ready,heading:"...",name:"...",remaining:"...",time:"...",type:"...",updated:"...",pageTitle:"..."},a.refresh=a.refresh.bind(Object(s.a)(a)),a}return Object(i.a)(m,[{key:"componentDidMount",value:function(){this.props.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,15))}},{key:"componentDidUpdate",value:function(e,a){a.ready!==this.state.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,15))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.props.pageInterval)}},{key:"refresh",value:function(){var e=Object(f.b)({adhaan:this.props.adhaan,iqaamah:this.props.currentTimes,upcomingIqaamah:this.props.upcomingTimes});console.log(e),e.name=h()(e.name);var a="".concat(e.remaining," to ").concat(e.name),t="Next Prayer";e.type===g.a.NOW&&(a="".concat(e.name," Time"),t="Happening Now"),t="".concat(t,"<br/>").concat(this.props.meta.FULL_NAME),this.setState(Object(n.a)(Object(n.a)({},e),{},{name:e.name,pageTitle:a,heading:t}))}},{key:"render",value:function(){return(this.state.ready?null:o.a.createElement(p.a,null))||o.a.createElement(a,Object.assign({remaining:this.state.remaining,name:this.state.name,heading:this.state.heading,time:this.state.time,type:this.state.type,pageTitle:this.state.pageTitle},this.props))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.ready!==a.ready?{ready:!0}:null}}]),m}(o.a.Component)));var a}},89:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i(t(0)),r=i(t(86));function i(e){return e&&e.__esModule?e:{default:e}}a.default=function(e){return n.default.createElement(r.default,Object.assign({},e,{name:"clock",path:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z",viewBox:{width:512,height:512}}))}},90:function(e,a,t){},91:function(e,a,t){(function(a){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="[\\ud800-\\udfff]",s="["+r+"]",l="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",c="\\d+",m="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+r+c+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",h="\\ud83c[\\udffb-\\udfff]",d="[^\\ud800-\\udfff]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",g="[A-Z\\xc0-\\xd6\\xd8-\\xde]",b="(?:"+o+"|"+u+")",v="(?:"+g+"|"+u+")",y="(?:"+l+"|"+h+")"+"?",E="[\\ufe0e\\ufe0f]?"+y+("(?:\\u200d(?:"+[d,p,f].join("|")+")[\\ufe0e\\ufe0f]?"+y+")*"),O="(?:"+[m,p,f].join("|")+")"+E,j="(?:"+[d+l+"?",l,p,f,i].join("|")+")",x=RegExp("['\u2019]","g"),N=RegExp(l,"g"),q=RegExp(h+"(?="+h+")|"+j+E,"g"),A=RegExp([g+"?"+o+"+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?="+[s,g,"$"].join("|")+")",v+"+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?="+[s,g+b,"$"].join("|")+")",g+"?"+b+"+(?:['\u2019](?:d|ll|m|re|s|t|ve))?",g+"+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",c,O].join("|"),"g"),I=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),T=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,S="object"==typeof a&&a&&a.Object===Object&&a,M="object"==typeof self&&self&&self.Object===Object&&self,k=S||M||Function("return this")();var w,P=(w={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"ss"},function(e){return null==w?void 0:w[e]});function D(e){return I.test(e)}function L(e){return D(e)?function(e){return e.match(q)||[]}(e):function(e){return e.split("")}(e)}var U=Object.prototype.toString,F=k.Symbol,z=F?F.prototype:void 0,C=z?z.toString:void 0;function _(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==U.call(e)}(e))return C?C.call(e):"";var a=e+"";return"0"==a&&1/e==-1/0?"-0":a}function R(e,a,t){var n=e.length;return t=void 0===t?n:t,!a&&t>=n?e:function(e,a,t){var n=-1,r=e.length;a<0&&(a=-a>r?0:r+a),(t=t>r?r:t)<0&&(t+=r),r=a>t?0:t-a>>>0,a>>>=0;for(var i=Array(r);++n<r;)i[n]=e[n+a];return i}(e,a,t)}function W(e){return null==e?"":_(e)}var Y,V,Z=(Y=function(e,a,t){return e+(t?" ":"")+B(a)},function(e){return function(e,a,t,n){var r=-1,i=e?e.length:0;for(n&&i&&(t=e[++r]);++r<i;)t=a(t,e[r],r,e);return t}(function(e,a,n){return e=W(e),void 0===(a=n?void 0:a)?function(e){return T.test(e)}(e)?function(e){return e.match(A)||[]}(e):function(e){return e.match(t)||[]}(e):e.match(a)||[]}(function(e){return(e=W(e))&&e.replace(n,P).replace(N,"")}(e).replace(x,"")),Y,"")}),B=(V="toUpperCase",function(e){var a=D(e=W(e))?L(e):void 0,t=a?a[0]:e.charAt(0),n=a?R(a,1).join(""):e.slice(1);return t[V]()+n});e.exports=Z}).call(this,t(38))},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(26),r=t(78),i=t(79),s=t(81),l=t(80),c=t(0),m=t.n(c),o=t(28),u=t(1),h=t.n(u),d=t(85),p=t(37),f=t.n(p),g=t(29),b=t(89),v=t.n(b),y=t(87),E=(t(90),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={time:h()().format("HH:mm")},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.timeInterval&&(clearInterval(window.timeInterval),window.timeInterval=null),window.timeInterval=setInterval((function(){e.setState({time:h()().format("HH:mm")})}),1e3)}},{key:"render",value:function(){var e=this.props;return m.a.createElement("div",{className:"App ".concat(e.monitorMode?"is-monitor":"")},m.a.createElement(d.a,{defer:!1},m.a.createElement("title",null,"Prayer Times, ",e.meta.NAME)),!e.monitorMode&&m.a.createElement(m.a.Fragment,null,m.a.createElement("img",{src:e.meta.LOGO,className:"App-img",alt:e.meta.NAME}),m.a.createElement("div",{className:"App-heading",dangerouslySetInnerHTML:{__html:e.heading}})),m.a.createElement("div",{className:"App-table Today-table"},m.a.createElement("div",{className:"Today-table-heading"},e.titles.map((function(e){return m.a.createElement("div",{className:"Today-table-heading-item",key:e},e)})),this.state.time&&m.a.createElement("div",{className:"Today-clock"},m.a.createElement(v.a,{size:"large"})," ",this.state.time)),m.a.createElement("div",{className:"Today-table-body"},e.times.map((function(a){var t;return m.a.createElement(m.a.Fragment,{key:a.name},m.a.createElement("div",{className:f()("prayer",(t={},Object(n.a)(t,"type-".concat(e.nextSalaah.type||"upcoming"),!0),Object(n.a)(t,"App-is-next",e.nextSalaah&&e.nextSalaah.name===a.key),Object(n.a)(t,"is-jumuah","Jumuah"===a.name),Object(n.a)(t,"is-shurooq","Shurooq"===a.name),t))},m.a.createElement("div",{className:"Today-next-container type-".concat(e.nextSalaah.type)},!e.media.mobile&&e.nextSalaah&&e.nextSalaah.name===a.key&&m.a.createElement("span",{className:"Today-next"},"close"===e.nextSalaah.type?"Soon":"now"===e.nextSalaah.type?"Now":"Next"),a.name),m.a.createElement("div",{className:"Today-time time-adhaan ".concat(a.changingMessageAdhaan?"has-changing-message":"")},"Shurooq"===a.name&&m.a.createElement("div",{className:"cell-heading"},"End of Fajr"),a.adhaan,a.changingMessageAdhaan&&m.a.createElement("div",{className:"Today-changing-message"},!e.media.mobile&&m.a.createElement(v.a,{className:"Today-changing-message-img",size:"small"}),m.a.createElement("span",{className:"Today-changing-message-txt"},a.changingMessageAdhaan))),m.a.createElement("div",{className:"Today-time time-iqaamah ".concat(a.changingMessageIqaamah?"has-changing-message":"")},"Shurooq"===a.name&&m.a.createElement("div",{className:"cell-heading"},"Start of Shurooq"),a.iqaamah,a.changingMessageIqaamah&&m.a.createElement("div",{className:"Today-changing-message"},!e.media.mobile&&m.a.createElement(v.a,{className:"Today-changing-message-img",size:"small"}),m.a.createElement("span",{className:"Today-changing-message-txt"},a.changingMessageIqaamah)))))})))),m.a.createElement("div",{className:"Today-footer"},!e.monitorMode&&m.a.createElement(m.a.Fragment,null,m.a.createElement("br",null),m.a.createElement(o.b,{to:"/next",className:"App-switch-link"},"View Next Prayer"),m.a.createElement("br",null),m.a.createElement(o.b,{to:"/week",className:"App-switch-link"},"View 7 Days Prayer Times")),e.lastUpdated&&m.a.createElement("div",{className:"Today-last-updated"},"Last fetched ",e.lastUpdated),!e.monitorMode&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"App-email"},"Send your feedbacks and suggestions to ",e.meta.EMAIL),m.a.createElement("br",null),m.a.createElement("div",{className:"App-ver"},"Ver. ",e.version))))}}]),t}(c.Component));a.default=Object(y.a)(Object(g.withMedia)(E))},95:function(e,a,t){"use strict";t.r(a);var n=t(78),r=t(79),i=t(81),s=t(80),l=t(0),c=t.n(l),m=t(85),o=t(88),u=t(9),h=(t(92),function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={flashOn:!1},r}return Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this;e.type===this.props.type||this.props.type!==u.a.CLOSE&&this.props.type!==u.a.NOW?this.props.type===u.a.UPCOMING&&(window.clearInterval(this.intervalFlash),this.intervalFlash=null):(this.intervalFlash&&window.clearInterval(this.intervalFlash),this.intervalFlash=window.setInterval((function(){t.setState({flashOn:!t.state.flashOn})}),200))}},{key:"render",value:function(){return c.a.createElement("div",{className:"App ".concat(this.props.monitorMode?"is-monitor":"")},c.a.createElement(m.a,{defer:!1},c.a.createElement("title",null,this.props.type===u.a.CLOSE||this.props.type===u.a.NOW?this.state.flashOn?"\ud83d\udd34":"\u2b55":"",this.props.pageTitle," - Prayer Times, ",this.props.meta.NAME)),!this.props.monitorMode&&c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:this.props.meta.LOGO,className:"App-img",alt:this.props.meta.NAME}),c.a.createElement("div",{className:"App-heading",dangerouslySetInnerHTML:{__html:this.props.heading}})),c.a.createElement("div",{className:"Next App-is-next type-".concat(this.props.type)},c.a.createElement("div",{className:"Next-data"},this.props.monitorMode&&c.a.createElement("div",{className:"Next-title"},c.a.createElement("div",{className:"Next-subtitle"},this.props.type===u.a.NOW?"":"Next Prayer")),c.a.createElement("div",{className:"Next-name"},this.props.name),c.a.createElement("div",{className:"Next-time"},this.props.time),c.a.createElement("br",null),this.props.type!==u.a.NOW&&this.props.remaining.length>0&&c.a.createElement("div",{className:"Next-rem"},"in ",this.props.remaining))),c.a.createElement("br",null),this.props.updated&&c.a.createElement("div",{className:"Next-last-updated"},"Last fetched ",this.props.updated),c.a.createElement("div",{className:"App-ver"},"Ver. ",this.props.version))}}]),t}(l.Component));a.default=Object(o.a)(h)},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),s=t(85),l=t(37),c=t.n(l),m=t(18),o=t(78),u=t(79),h=t(82),d=t(81),p=t(80),f=t(1),g=t.n(f),b=t(15),v=t(25),y=t(16),E=t(5);t(93),a.default=function(e){return Object(b.b)("ready","iqaamah","currentTimes","upcomingTimes","adhaan","adhaanNextMonth","initPage","pageInterval","pageInitialized","updated","monitorMode","version","meta")((a=e,function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={ready:e.ready,dates:[],nextSalaah:null},a.effectiveDate=a.effectiveDate.bind(Object(h.a)(a)),a.refresh=a.refresh.bind(Object(h.a)(a)),a.buildIqaamahObj=a.buildIqaamahObj.bind(Object(h.a)(a)),a.formatAdhaan=a.formatAdhaan.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,60))}},{key:"componentDidUpdate",value:function(e,a){a.ready!==this.state.ready&&(this.props.ignoreInit?this.refresh():this.props.initPage(this.refresh,60))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.props.pageInterval)}},{key:"effectiveDate",value:function(){return this.props.upcomingTimes?g()(this.props.upcomingTimes.effective,E.e):g()()}},{key:"formatAdhaan",value:function(e,a,t){var n=e.format(E.b),r=this.props.adhaan[n]||this.props.adhaanNextMonth[n];return r?Object(y.c)(r[a],t):"Not available"}},{key:"buildIqaamahObj",value:function(e,a){var t=this.prevIqaamahSource&&this.prevIqaamahSource[a]&&this.iqaamahSource[a]!==this.prevIqaamahSource[a];return"dhuhr"===a&&"Sat"===e.format("ddd")&&this.props.currentTimes[a]!==this.props.upcomingTimes[a]&&(this.effectiveDate().isSame(e)||"Fri"===this.effectiveDate().format("ddd"))&&(t=!0),this.effectiveDate().isSameOrBefore(g()().startOf("day"))&&(t=!1),{iqaamah:this.iqaamahSource&&this.iqaamahSource[a]?Object(y.c)(this.iqaamahSource[a]):"Error",changing:t}}},{key:"refresh",value:function(){this.props.currentTimes&&(this.iqaamahSource=Object(m.a)({},this.props.currentTimes),this.prevIqaamahSource=null);var e=Object(y.b)({adhaan:this.props.adhaan,iqaamah:this.props.iqaamah,upcomingIqaamah:this.props.upcomingTimes}),a=e.isAfterIshaa?g()().add(1,"day"):g()();e.name="".concat(a.format("DD-MMM"),"-").concat(e.name.toLowerCase());for(var t=[],n=0;n<7;++n){var r=g()().add(n,"days").startOf("day"),i=r.format("DD/MMM"),s=r.format("ddd");r.isSameOrAfter(this.effectiveDate())&&(this.prevIqaamahSource=Object(m.a)({},this.iqaamahSource),this.iqaamahSource=Object(m.a)({},this.props.upcomingTimes));var l={};if(Object(y.f)(r)){var c=this.buildIqaamahObj(r,"jumuah");l.adhaan=c.iqaamah,l.iqaamah=E.c}else l=Object(m.a)({adhaan:this.formatAdhaan(r,"dhuhr")},this.buildIqaamahObj(r,"dhuhr"));t.push({name:i,dayOfWeek:s,key:r.format("DD-MMM"),fajr:Object(m.a)({adhaan:this.formatAdhaan(r,"fajr")},this.buildIqaamahObj(r,"fajr")),shurooq:{adhaan:this.formatAdhaan(r,"shurooq"),iqaamah:this.formatAdhaan(r,"shurooq",15)},dhuhr:l,asr:Object(m.a)({adhaan:this.formatAdhaan(r,"asr")},this.buildIqaamahObj(r,"asr")),maghrib:{adhaan:this.formatAdhaan(r,"maghrib",E.f),iqaamah:this.formatAdhaan(r,"maghrib",E.f+10)},ishaa:Object(m.a)({adhaan:this.formatAdhaan(r,"ishaa")},this.buildIqaamahObj(r,"ishaa"))})}this.setState({dates:t,nextSalaah:e})}},{key:"render",value:function(){return(this.state.ready?null:r.a.createElement(v.a,null))||r.a.createElement(a,Object.assign({dates:this.state.dates,nextSalaah:this.state.nextSalaah},this.props))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.ready!==a.ready?{ready:!0}:null}}]),n}(r.a.Component)));var a}((function(e){var a=function(a,t){return e.nextSalaah&&e.nextSalaah.name===a.key+"-"+t?"App-is-next type-"+e.nextSalaah.type:""},t=function(e,a){return e[a]&&e[a].changing?"App-is-changing":""};return r.a.createElement("div",{className:"App ".concat(e.monitorMode?"is-monitor":"")},r.a.createElement(s.a,{defer:!1},r.a.createElement("title",null,"Prayer Times, ",e.meta.NAME)),!e.monitorMode&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App-heading"},"7 Days Prayer Times",r.a.createElement("br",null),e.meta.FULL_NAME),r.a.createElement("img",{src:e.meta.LOGO,className:"App-img Week-img",alt:e.meta.NAME})),r.a.createElement("table",{border:"0",cellSpacing:"0",cellPadding:"0",className:"App-table Week-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Date"),r.a.createElement("td",null,"(True) Fajr"),r.a.createElement("td",null,"Shurooq"),r.a.createElement("td",null,"Dhuhr / Jumuah"),r.a.createElement("td",null,"Asr"),r.a.createElement("td",null,"Maghrib"),r.a.createElement("td",null,"Ishaa"))),r.a.createElement("tbody",null,e.dates.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement("tr",null,r.a.createElement("td",{className:"date"},r.a.createElement("span",{className:"date-name"},e.name,r.a.createElement("br",null),e.dayOfWeek),r.a.createElement("table",{className:"date-table"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"date-table-row"},r.a.createElement("td",{className:"date-table-data"},"Adhaan")),r.a.createElement("tr",{className:"date-table-row"},r.a.createElement("td",{className:"date-table-data"},"Iqaamah"))))),r.a.createElement("td",{className:c()("prayer",a(e,"fajr"),t(e,"fajr"))},r.a.createElement("span",{className:"tags"}),e.fajr.adhaan,r.a.createElement("br",null),r.a.createElement("br",null),e.fajr.iqaamah),r.a.createElement("td",{className:c()("prayer",a(e,"shurooq"),t(e,"shurooq"))},r.a.createElement("span",{className:"tags"}),e.shurooq.adhaan,r.a.createElement("br",null),r.a.createElement("br",null),e.shurooq.iqaamah),r.a.createElement("td",{className:c()("prayer",a(e,"dhuhr"),t(e,"dhuhr"),a(e,"jumuah"),t(e,"jumuah"))},r.a.createElement("span",{className:"tags"}),e.dhuhr.adhaan,r.a.createElement("br",null),r.a.createElement("br",null),e.dhuhr.iqaamah),r.a.createElement("td",{className:c()("prayer",a(e,"asr"),t(e,"asr"))},r.a.createElement("span",{className:"tags"}),e.asr.adhaan,r.a.createElement("br",null),r.a.createElement("br",null),e.asr.iqaamah),r.a.createElement("td",{className:c()("prayer",a(e,"maghrib"),t(e,"maghrib"))},r.a.createElement("span",{className:"tags"}),e.maghrib.adhaan,r.a.createElement("br",null),r.a.createElement("br",null),e.maghrib.iqaamah),r.a.createElement("td",{className:c()("prayer",a(e,"ishaa"),t(e,"ishaa"))},r.a.createElement("span",{className:"tags"}),e.ishaa.adhaan,r.a.createElement("br",null),r.a.createElement("br",null),e.ishaa.iqaamah)))})))),!e.monitorMode&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(i.b,{to:"/next",className:"App-switch-link"},"View Next Prayer"),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/",className:"App-switch-link"},"View Today's Prayer Times")),e.lastUpdated&&r.a.createElement("div",{className:"Today-last-updated"},"Last fetched ",e.lastUpdated),!e.monitorMode&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App-email"},"Send your feedbacks and suggestions to ",e.meta.EMAIL),r.a.createElement("br",null),r.a.createElement("div",{className:"App-ver"},"Ver. ",e.version)))}))}}]);