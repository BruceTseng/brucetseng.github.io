(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("9e7293fc",content,!0,{sourceMap:!1})},195:function(t,e,n){t.exports=function(){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var t="sticky-events--sentinel-top",e="sticky-events--sentinel-bottom",n=function(){function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.container,n=void 0===e?document:e,i=t.enabled,s=void 0===i||i,r=t.stickySelector,o=void 0===r?".sticky-events":r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),this.container=n,this.observers=[],this.stickyElements=Array.from(document.querySelectorAll(o)),this.stickySelector=o,this.state=new Map,s&&this.enableEvents()}var n,r;return n=a,(r=[{key:"setState",value:function(n){this.state.get(n)||this.state.set(n,{isSticky:!1,headerSentinel:this.addSentinel(n,t),footerSentinel:this.addSentinel(n,e)})}},{key:"enableEvents",value:function(){var t=this;window.self===window.top?(this.observers={header:this.createHeaderObserver(),footer:this.createFooterObserver()},this.stickyElements.forEach((function(e){t.setState(e)}))):console.warn("StickyEvents: There are issues with using IntersectionObservers in an iframe, canceling initialization. Please see https://github.com/w3c/IntersectionObserver/issues/183")}},{key:"disableEvents",value:function(t){var e=this;0<arguments.length&&void 0!==t&&!t||this.stickyElements.forEach((function(t){return e.fire(!1,t)})),Object.values(this.observers).forEach((function(t){return t.disconnect()})),this.observers=null,this.state.clear()}},{key:"addStickies",value:function(t){var e,n=this;(e=this.stickyElements).push.apply(e,function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t)),this.stickyElements.forEach((function(t){return n.setState(t)}))}},{key:"addSticky",value:function(t){this.stickyElements.push(t),this.setState(t)}},{key:"addSentinel",value:function(n,r){var o=document.createElement("div"),i=n.parentElement;switch(n.style.cssText="\n        position: -webkit-sticky;\n        position: sticky;\n      ",o.classList.add("sticky-events--sentinel",r),Object.assign(o.style,{left:0,position:"absolute",right:0,visibility:"hidden"}),r){case t:i.insertBefore(o,n),Object.assign(o.style,this.getSentinelPosition(n,o,r),{position:"relative"}),this.observers.header.observe(o);break;case e:i.appendChild(o),Object.assign(o.style,this.getSentinelPosition(n,o,r)),this.observers.footer.observe(o)}return o}},{key:"createHeaderObserver",value:function(){var t=this;return new IntersectionObserver((function(e){e.forEach((function(e){var n=e.boundingClientRect,r=e.isIntersecting,i=e.rootBounds,s=e.target.parentElement,o=s.querySelector(t.stickySelector);s.style.position="relative",n.bottom<i.bottom&&r?t.fire(!1,o):n.bottom<=i.top&&!r&&t.fire(!0,o)}))}),Object.assign({threshold:[0]},!(this.container instanceof HTMLDocument)&&{root:this.container}))}},{key:"createFooterObserver",value:function(){var t=this;return new IntersectionObserver((function(e){e.forEach((function(e){var n=e.boundingClientRect,r=e.isIntersecting,i=e.rootBounds,s=e.target.parentElement.querySelector(t.stickySelector);n.top<i.top&&n.bottom<i.bottom&&!r?t.fire(!1,s):n.bottom>i.top&&t.isSticking(s)&&r&&t.fire(!0,s)}))}),Object.assign({threshold:[1]},!(this.container instanceof HTMLDocument)&&{root:this.container}))}},{key:"fire",value:function(t,e){this.state.get(e).isSticky!==t&&(e.dispatchEvent(new CustomEvent(a.CHANGE,{detail:{isSticky:t},bubbles:!0})),e.dispatchEvent(new CustomEvent(t?a.STUCK:a.UNSTUCK,{bubbles:!0})),this.state.set(e,{isSticky:t}))}},{key:"getSentinelPosition",value:function(n,r,o){var i=window.getComputedStyle(n),s=window.getComputedStyle(n.parentElement);switch(o){case t:return{top:"calc(".concat(i.getPropertyValue("top")," * -1)"),height:1};case e:var c=parseInt(s.paddingTop);return{bottom:i.top,height:"".concat(n.getBoundingClientRect().height+c,"px")}}}},{key:"isSticking",value:function(t){var e=t.previousElementSibling,n=t.getBoundingClientRect().top,i=e.getBoundingClientRect().top;return Math.round(Math.abs(n-i))!==Math.abs(parseInt(window.getComputedStyle(e).getPropertyValue("top")))}}])&&i(n.prototype,r),a}();return n.CHANGE="sticky-change",n.STUCK="sticky-stuck",n.UNSTUCK="sticky-unstuck",n}()},196:function(t,e,n){"use strict";var r=n(191);n.n(r).a},197:function(t,e,n){(e=n(44)(!1)).push([t.i,".stars{display:inline-block;vertical-align:sub}.stars ul{direction:rtl;text-align:left;font-size:0}.stars ul li{display:inline-block;width:.5em;overflow:hidden;text-indent:-.5em;color:#fff;padding:0;transition:.5s;font-size:1.125rem;cursor:pointer}.stars ul li.active{color:#f5a623}.stars ul li:nth-child(odd){text-indent:0;margin-right:4px}",""]),t.exports=e},198:function(t,e,n){"use strict";n.r(e);n(79),n(23),n(17),n(15),n(47),n(33),n(46);var r=n(60),o=(n(32),n(4)),c=n(195),_=n.n(c),l={props:{score:{type:String,default:"0"}},computed:{plus:function(){return 2*this.score},minus:function(){return 10-2*this.score}}},v=(n(196),n(7)),m=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stars"},[n("ul",[t._l(t.minus,(function(e,r){return n("li",{key:r},[t._v("★")])})),t._v(" "),t._l(t.plus,(function(e,r){return n("li",{key:10-r,staticClass:"active"},[t._v("★")])}))],2)])}),[],!1,null,null,null).exports;function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=null,y=null,C={components:{Stars:m},data:function(){return{isRefundAgreementActive:!0,isTicketingInfoContentActive:!0,selecteEventIndex:0}},computed:{program:function(){return this.$store.state.program.program},eventsByVenue:function(){var t=[],e=this.program.eventVenues[this.selecteEventIndex];e&&e.events&&e.events.forEach((function(e){e.sections&&e.sections.forEach((function(element){return t.push(element)}))}));return t},eventDate:function(){var t={startDateTime:0,endDateTime:0,lat:0,lng:0},e=this.program.eventVenues[this.selecteEventIndex];return e&&(t.startDateTime=0|e.startDateTime,t.endDateTime=0|e.endDateTime,e.venue&&e.venue.lat&&e.venue.lng&&(t.lat=parseFloat(e.venue.lat),t.lng=parseFloat(e.venue.lng))),t},recommendPrograms:function(){return this.$store.state.program.recommendPrograms},eventNoteContent:function(){if(this.program&&this.program.eventVenues&&this.program.eventVenues.length>0){var t=this.program.eventVenues[0];return t&&t.eventNoteContent?t.eventNoteContent:""}return""},eventNoteNotice:function(){if(this.program&&this.program.eventVenues&&this.program.eventVenues.length>0){var t=this.program.eventVenues[0];return t&&t.eventNoteNotice?t.eventNoteNotice:""}return""},ticketingInfoContent:function(){if(this.program&&this.program.eventVenues&&this.program.eventVenues.length>0){var t=this.program.eventVenues[0];return t&&t.ticketingInfoContent?t.ticketingInfoContent:""}return""},refundAgreement:function(){return this.program&&this.program.refundAgreement?this.program.refundAgreement:""}},mounted:function(){this.bindMenuEvent(),this.bindTitleEvent()},beforeMount:function(){this.$store.dispatch("program/fetchPrograms"),this.$store.dispatch("program/fetchRecommendPrograms")},beforeDestroy:function(){h.disableEvents(),y.disableEvents()},methods:{bindTitleEvent:function(){(y=new _.a({stickySelector:".program__brief--title"})).stickyElements.forEach((function(t){t.addEventListener(_.a.CHANGE,(function(e){t.classList.toggle("isSticky",e.detail.isSticky),document.querySelector(".l-program__stickybar__container").classList.toggle("isSticky")}))}))},bindMenuEvent:function(){(h=new _.a({stickySelector:".l-program__functions"})).stickyElements.forEach((function(t){t.addEventListener(_.a.CHANGE,(function(e){t.classList.toggle("isSticky",e.detail.isSticky),document.querySelector(".l-program__functions--menus").classList.toggle("isSticky"),document.querySelector(".l-program__stickybar__container").classList.toggle("isSticky")}))}))},fetchSomething:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("".concat("https://ntch-dev.jayboapp.com","/programs/1228149766812614657"));case 2:n=e.sent,t.program=n.result,(r=t.program.programOrganizers.map((function(t,e){return"主辦單位"===t.type?t.key=0:"協辦單位"===t.type?t.key=1:"贊助單位"===t.type?t.key=2:"其他主辦單位"===t.type?t.key=3:t.key=e+4,f({},t)}))).sort((function(a,b){return a.key-b.key})),t.program.programOrganizers=r;case 7:case"end":return e.stop()}}),e)})))()},mapsSelector:function(t,e){navigator.platform.includes("iPhone")||navigator.platform.includes("iPad")||navigator.platform.includes("iPod"),window.open("https://maps.google.com/maps?daddr=".concat(t,",").concat(e))}}},k=Object(v.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.program.id,expression:"program.id"}]},[n("section",{staticClass:"l-program__stickybar__container"},[n("div",{staticClass:"l-program__stickybar__content col-container"},[n("div",[n("span",{staticClass:"program-name"},[t._v(t._s(t.program.name))])]),t._v(" "),n("div",{staticClass:"l-program__stickybar__content--right"},[n("a",{attrs:{href:""}},[t._v("立即購買")]),t._v(" "),n("span",{staticClass:"icon__social"},[n("fa",{attrs:{icon:["fas","link"]}})],1),t._v(" "),n("span",{staticClass:"icon__social"},[n("fa",{attrs:{icon:["far","heart"]}})],1)])])]),t._v(" "),n("section",{staticClass:"l-program__introduce col-container"},[n("div",{staticClass:"l-program__introduce--left"},[n("div",{staticClass:"introduce__container"},[n("div",{staticClass:"introduce--bg",style:{"background-image":"url("+t.program.imageUrl+")"}})]),t._v(" "),n("img",{staticClass:"program-logo",attrs:{src:t.program.imageUrl,alt:""}}),t._v(" "),n("div",{staticClass:"program__brief"},[n("span",{staticClass:"program__brief--title"},[t._v(t._s(t.program.name))]),t._v(" "),n("span",[n("span",{staticClass:"program__brief__category"},[t._v(t._s(t.$t("program.time"))+"：")]),t._v("\n          "+t._s(t._f("formatDate")(t.program.startDateTime,"YYYY/MM/DD (dd)"))+" -\n          "+t._s(t._f("formatDate")(t.program.endDateTime,"YYYY/MM/DD (dd)")))]),t._v(" "),n("span",[n("span",{staticClass:"program__brief__category"},[t._v("\n            "+t._s(t.$t("program.score"))+"：\n          ")]),t._v(" "),n("span",{staticClass:"program__brief__scores"},[t._v("\n            "+t._s(t.program.userRating)+"\n          ")]),t._v(" "),n("Stars",{attrs:{score:"3.5"}})],1),t._v(" "),n("span",[n("span",{staticClass:"program__brief__category"},[t._v(t._s(t.$t("program.level"))+"：")]),t._v("建議年齡 13 歲以上")]),t._v(" "),n("span",[n("span",{staticClass:"program__brief__category"},[t._v(t._s(t.$t("program.price"))+"：")]),t._v("\n          "+t._s("$"+t.program.minPrice)+" - "+t._s("$"+t.program.maxPrice)+"\n        ")]),t._v(" "),n("span",[n("span",{staticClass:"program__brief__category"},[t._v(t._s(t.$t("program.organizer"))+"：")]),n("a",{attrs:{href:""}},[t._v("C MUSICAL")]),t._v(" 0919-941-611")])]),t._v(" "),n("ul",{staticClass:"program__brief--tags"},t._l(t.program.tags,(function(e,r){return n("li",{key:r},[t._v(t._s(e))])})),0)]),t._v(" "),n("div",{staticClass:"l-program__introduce--right"},[n("a",{attrs:{href:""}},[t._v("立即購買")]),t._v(" "),n("span",{staticClass:"icon__social"},[n("fa",{attrs:{icon:["fas","link"]}})],1),t._v(" "),n("span",{staticClass:"icon__social"},[n("fa",{attrs:{icon:["far","heart"]}})],1)])]),t._v(" "),t._m(0),t._v(" "),n("section",{staticClass:"l-program__events col-container"},[n("div",{staticClass:"events__wrapper"},[n("span",{staticClass:"events__content__title"},[t._v("場次購票")]),t._v(" "),n("div",[n("div",{staticClass:"events__content__list"},[n("ol",[n("li",[t._v("1.選擇場館")]),t._v(" "),n("div",{staticClass:"events__venues"},t._l(t.program.eventVenues,(function(p,e){return n("div",{key:e,staticClass:"events__venues__block",class:{active:e===t.selecteEventIndex}},[n("a",{on:{click:function(n){t.selecteEventIndex=e}}},[n("div",{staticClass:"events__venues__block__wrapper"},[n("div",{staticClass:"location"},[t._v("\n                      "+t._s(p.venue.city)+"\n                    ")]),t._v(" "),n("div",{staticClass:"venue"},[t._v("\n                      "+t._s(p.venue.name)+"\n                    ")])])])])})),0),t._v(" "),n("div",{staticClass:"events__mobile__detail"},[n("div",[n("fa",{attrs:{icon:["far","calendar-alt"]}}),t._v("\n                "+t._s(t._f("formatDate")(t.eventDate.startDateTime,"YYYY/MM/DD"))+"-\n                "+t._s(t._f("formatDate")(t.eventDate.endDateTime,"MM/DD"))+"\n              ")],1),t._v(" "),n("div",[n("span",{staticClass:"web"},[n("a",{attrs:{href:t.program.websiteUrl,target:"_blank"}},[n("fa",{attrs:{icon:["fas","globe-asia"]}}),t._v("\n                    官網\n                  ")],1)]),t._v(" "),n("span",[n("a",{on:{click:function(e){return e.stopPropagation(),t.mapsSelector(t.eventDate.lat,t.eventDate.lng)}}},[n("fa",{attrs:{icon:["fas","map-marked-alt"]}}),t._v("\n                    地圖\n                  ")],1)])])]),t._v(" "),n("li",[t._v("2.選擇場次")]),t._v(" "),n("div",{staticClass:"events__list"},[n("table",{staticClass:"events__list__table"},[t._m(1),t._v(" "),n("tbody",t._l(t.eventsByVenue,(function(e,r){return n("tr",{key:r,staticClass:"column__body"},[n("th",{attrs:{align:"left"}},[t._v("\n                      "+t._s(t._f("formatDate")(e.onSaleStartDateTime,"YYYY/MM/DD (dd) HH:mm"))+"\n                    ")]),t._v(" "),n("th",{attrs:{align:"left"}},[t._v("\n                      "+t._s(e.quantity.remainingQuantity)+"\n                    ")]),t._v(" "),n("th",{staticClass:"column__price",attrs:{align:"left"}},[t._v("\n                      "+t._s(e.price)+"\n                    ")]),t._v(" "),t._m(2,!0)])})),0)])])])])])])]),t._v(" "),n("section",{staticClass:"l-program__contents col-container"},[n("div",[n("div",{staticClass:"content content__introduce"},[n("div",{staticClass:"content__introduce__wrapper"},[n("span",{staticClass:"content__title",attrs:{id:"description"}},[t._v("節目介紹")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"content__content"},[n("div",{domProps:{innerHTML:t._s(t.program.description)}})])])]),t._v(" "),n("div",{staticClass:"content content__discount",attrs:{id:"saleInfoContent"}},[n("div",{staticClass:"content__introduce__wrapper"},[n("span",{staticClass:"content__title"},[t._v("折扣優惠")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"content__content"},[n("div",{domProps:{innerHTML:t._s(t.program.saleInfoContent)}})])])]),t._v(" "),n("div",{staticClass:"content content__introduce",attrs:{id:"eventNotecontent"}},[n("div",{staticClass:"content__introduce__wrapper"},[n("span",{staticClass:"content__title"},[t._v("展演須知")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"content__content"},[n("div",{domProps:{innerHTML:t._s(t.eventNoteContent)}}),t._v(" "),n("div",{staticClass:"content__content__notice"},[n("span",{staticClass:"content__content__notice__title"},[n("fa",{attrs:{icon:["fas","exclamation-circle"]}}),t._v("溫馨提醒")],1),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.eventNoteNotice)}})])])])]),t._v(" "),n("div",{staticClass:"content content__introduce"},[n("div",{staticClass:"content__introduce__wrapper"},[n("div",{staticClass:"content__introduce__header"},[n("span",{staticClass:"content__title content__title__ticketingInfo",class:{show:!t.isTicketingInfoContentActive}},[t._v("\n              購票須知\n            ")]),t._v(" "),n("a",{staticClass:"content__more",on:{click:function(e){t.isTicketingInfoContentActive=!t.isTicketingInfoContentActive}}},[t._v("\n              查看\n            ")])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"content__content content__content__ticketingInfoContent",class:{collapse:t.isTicketingInfoContentActive,show:!t.isTicketingInfoContentActive}},[n("div",{domProps:{innerHTML:t._s(t.ticketingInfoContent)}})])])]),t._v(" "),n("div",{staticClass:"content content__introduce"},[n("div",{staticClass:"content__introduce__wrapper"},[n("div",{staticClass:"content__introduce__header"},[n("span",{staticClass:"content__title content__title__refundAgreement",class:{show:!t.isRefundAgreementActive}},[t._v("\n              退換須知\n            ")]),t._v(" "),n("a",{staticClass:"content__more",on:{click:function(e){t.isRefundAgreementActive=!t.isRefundAgreementActive}}},[t._v("查看")])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"content__content content__content__refundAgreement",class:{collapse:t.isRefundAgreementActive,show:!t.isRefundAgreementActive}},[n("div",{domProps:{innerHTML:t._s(t.refundAgreement)}})])])]),t._v(" "),n("div",{staticClass:"content content__introduce"},[n("div",{staticClass:"content__introduce__wrapper"},[n("span",{staticClass:"content__title"},[t._v("相關單位")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"content__content"},t._l(t.program.programOrganizers,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"programOrganizers__title"},[t._v(t._s(e.type))]),t._v(" "),n("ul",t._l(e.info,(function(p,i){return n("li",{key:i,staticClass:"programOrganizers__organizer"},[n("a",{attrs:{href:p.websiteUrl}},[n("img",{attrs:{src:p.logoUrl}})])])})),0)])})),0)])])]),t._v(" "),n("div",[n("div",{staticClass:"recommend"},[n("span",{staticClass:"recommend__title"},[t._v("為您推薦")]),t._v(" "),n("ul",t._l(t.recommendPrograms,(function(rp,e){return n("li",{key:e,staticClass:"recommend__program"},[n("img",{staticClass:"recommend__program__logo",attrs:{src:rp.imageUrl,alt:""}}),t._v(" "),n("div",{staticClass:"recommend__program__description"},[n("span",{staticClass:"recommend__program__title"},[t._v(t._s(rp.name))]),t._v(" "),n("span",{staticClass:"recommend__program__date"},[t._v(t._s(t._f("formatDate")(rp.startDateTime,"yyyy-MM-dd"))+"\n              ")])])])})),0)]),t._v(" "),t._m(3)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"l-program__functions"},[n("div",{staticClass:"l-program__functions--menus col-container"},[n("ul",[n("li",[n("a",{staticClass:"active",attrs:{href:""}},[t._v("場次購票")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#description"}},[t._v("節目介紹")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#saleInfoContent"}},[t._v("折扣優惠")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#eventNotecontent"}},[t._v("展演須知")])]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("評論評分")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"column__time",attrs:{align:"left"}},[this._v("時間")]),this._v(" "),e("th",{staticClass:"column__remain",attrs:{align:"left"}},[this._v("剩餘張數")]),this._v(" "),e("th",{staticClass:"column__section",attrs:{align:"left"}},[this._v("票區")]),this._v(" "),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{attrs:{align:"right"}},[e("a",[this._v("購買")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"history"},[n("span",{staticClass:"history__title"},[t._v("瀏覽紀錄")]),t._v(" "),n("ul",[n("li",{staticClass:"history__program"},[n("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1581548936925-407b8c676603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",alt:""}}),t._v(" "),n("div",{staticClass:"history__program__description"},[n("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),n("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])]),t._v(" "),n("li",{staticClass:"history__program"},[n("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1581700598738-c0743919eaaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:""}}),t._v(" "),n("div",{staticClass:"history__program__description"},[n("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),n("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])]),t._v(" "),n("li",{staticClass:"history__program"},[n("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1581636624937-a31682a6ca1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:""}}),t._v(" "),n("div",{staticClass:"history__program__description"},[n("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),n("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])]),t._v(" "),n("li",{staticClass:"history__program"},[n("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1754&q=80",alt:""}}),t._v(" "),n("div",{staticClass:"history__program__description"},[n("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),n("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])]),t._v(" "),n("li",{staticClass:"history__program"},[n("img",{staticClass:"history__program__logo",attrs:{src:"https://images.unsplash.com/photo-1581682100477-d2a6bfc7c6a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:""}}),t._v(" "),n("div",{staticClass:"history__program__description"},[n("span",{staticClass:"history__program__title"},[t._v("NSO 名家系列《畫景敘事》")]),t._v(" "),n("span",{staticClass:"history__program__date"},[t._v("2018/4/11(四)")])])])])])}],!1,null,null,null);e.default=k.exports}}]);