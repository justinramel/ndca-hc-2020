webpackJsonp([3],{"/Ud6":function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-burger",class:{"is-active":this.menuIsActive},attrs:{"data-target":"navMenu"},on:{click:this.toggleMenu}},[e("span"),e("span"),e("span")])},staticRenderFns:[]};e.a=s},"13Md":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-menu",class:{"is-active":t.menuIsActive},attrs:{id:"navMenu"}},[a("div",{staticClass:"navbar-start"},[a("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events & Results")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"bar"}}},[t._v("Tables")]),a("div",{staticClass:"navbar-dropdown"},[a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"bar"}}},[t._v("Overall")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"lbar"}}},[t._v("Women")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"vbar"}}},[t._v("Vets")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"jbar"}}},[t._v("Junior")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-bar"}}},[t._v("Team")])],1)],1),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"riders"}}},[t._v("Riders")]),a("div",{staticClass:"navbar-dropdown"},[a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"riders"}}},[t._v("Find Rider")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"head2head"}}},[t._v("Head 2 Head")])],1)],1),t._m(0)],1),a("div",{staticClass:"navbar-end"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link",attrs:{href:"https://justinramel.github.io/ndca-hc-2018/"}},[this._v("Years")]),e("div",{staticClass:"navbar-dropdown"},[e("a",{staticClass:"navbar-item",attrs:{href:"https://justinramel.github.io/ndca-hc-2018/"}},[this._v("2018")]),e("a",{staticClass:"navbar-item",attrs:{href:"https://justinramel.github.io/ndca-hc-2017/"}},[this._v("2017")])])])}]};e.a=s},"2TjK":function(t,e,a){"use strict";e.a={name:"header",props:["title","subtitle"]}},"3lOj":function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("uZCW"),l=a("L+yk"),o=a("N8kU");e.a={name:"team-bar",components:{Page:r.a,TeamBarTable:l.a,NoData:o.a},computed:i()({},Object(n.mapGetters)({results:"team-vbar/results",isMobile:"is-mobile/isMobile"}))}},"4BFn":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.results,function(e){return a("div",{key:e.id,staticClass:"card"},[a("div",{staticClass:"card-content small-padding-bottom"},[a("div",{staticClass:"media no-margin-bottom"},[a("div",{staticClass:"media-left"},[t.clubView?a("p",{staticClass:"title is-4"},[a("span",{staticClass:"primary"},[t._v(t._s(e.teamName))]),t._v(" -\n            "+t._s(e.position)+"\n            "),a("sup",{staticClass:"subtitle is-7 tight-ordinal"},[t._v(t._s(t._f("ordinalOnly")(e.position)))]),a("span",{staticClass:"title is-7"},[t._v(" Team")])]):t._e(),t.clubView?t._e():a("p",{staticClass:"title is-3"},[t._v("\n            "+t._s(e.position)+"\n            "),a("sup",{staticClass:"subtitle is-7 tight-ordinal"},[t._v(t._s(t._f("ordinalOnly")(e.position)))])])]),a("div",{staticClass:"media-content"},[t.clubView?t._e():a("p",{staticClass:"title is-4"},[a("nuxt-link",{attrs:{to:{name:"clubs-name",params:{name:e.club}}}},[t._v("\n              "+t._s(e.club)+"\n            ")])],1),t.clubView?t._e():a("p",{staticClass:"subtitle is-7"},[t._v("\n            "+t._s(e.teamName)+"\n          ")])]),a("div",{staticClass:"media-right"},[a("p",{staticClass:"title is-4"},[t._v("\n            "+t._s(e.total)+"\n          ")]),a("p",{staticClass:"subtitle is-7 is-pulled-right"},[t._v("\n            Points\n          ")])])]),a("div",{staticClass:"content"},[a("TeamMarkersTable",{attrs:{markers:e.markers,total:e.total,totalPredicted:e.totalPredicted,"is-mobile":t.isMobile}})],1)])])}))},staticRenderFns:[]};e.a=s},"57fK":function(t,e,a){"use strict";var s=a("wa5m"),i=a("13Md"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},"6+GS":function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar hero is-primary is-bold"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},staticRenderFns:[]};e.a=s},"7TxH":function(t,e,a){"use strict";var s=a("mfI2"),i=a("Wwdg"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},"9YCY":function(t,e,a){"use strict";var s=a("EYzX"),i=a("/Ud6"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},"9d4F":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table is-bordered"},[a("tbody",[a("tr",[a("td",{attrs:{width:"50%"}},[t._v("Name")]),a("td",[a("nuxt-link",{attrs:{to:{name:"riders-id",params:{id:t.row.id}}}},[t._v("\n            "+t._s(t.row.name)+"\n          ")])],1)]),a("tr",[a("td",[t._v("Average Points Per Race")]),a("td",[t._v("\n          "+t._s(t._f("decimal")(t.row.averagePointsPerRace))+"\n        ")])]),a("tr",[a("td",[t._v("Average Points Per Race Total")]),a("td",[t._v("\n          "+t._s(t._f("decimal")(t.row.averagePointsPerRaceTotal))+"\n        ")])]),a("tr",[a("td",[t._v("Races")]),a("td",[t._v("\n          "+t._s(t.row.allCount)+"\n        ")])]),a("tr",[a("td",[t._v("Complete?")]),a("td",[a("Complete",{attrs:{flag:t.row.complete}}),a("CantComplete",{attrs:{flag:t.row.canComplete}})],1)]),a("tr",[a("td",[t._v("Points")]),a("td",[t._v("\n          "+t._s(t.row.points)+"\n        ")])])])])])},staticRenderFns:[]};e.a=s},"AF/1":function(t,e,a){"use strict";var s=a("Omfq"),i=a("vuXo"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},AHTq:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.isMobile?t._e():a("NavBar"),t.isMobile?a("NavBarMobile"):t._e(),t.isMobile?t._e():t._t("header",[a("PageHeader",{attrs:{slot:"header",title:t.title,subtitle:t.subtitle},slot:"header"})]),a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[t._t("default")],2)]),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer medium-margin-top no-padding-top no-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[this._v("Made by "),e("a",{attrs:{href:"mailto:justin.ramel@gmail.com",target:"_blank",rel:"noopener"}},[this._v("Justin Ramel")]),this._v(".")])])])])}]};e.a=s},Bi5o:function(t,e,a){"use strict";e.a={name:"cant-complete",props:["flag"]}},CpgL:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Page",{attrs:{title:"Vets Team",subtitle:""}},[e("TeamBarTable",{attrs:{results:this.results,"is-mobile":this.isMobile}}),e("NoData",{directives:[{name:"show",rawName:"v-show",value:!this.results.length,expression:"!results.length"}]})],1)},staticRenderFns:[]};e.a=s},EYzX:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO");e.a={name:"menu",methods:i()({},Object(n.mapMutations)({toggleMenu:"menu/toggle"})),computed:i()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},FGlh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("3lOj"),i=a("CpgL"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.default=n.exports},JT4g:function(t,e,a){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section no-padding-top no-padding-bottom"},[e("article",{staticClass:"message is-warning small-padding-top"},[e("div",{staticClass:"message-header"},[e("p",[this._v("Info")])]),e("div",{staticClass:"message-body"},[e("p",[this._v("Looking for last years results? You can find them under the menu "),e("a",{attrs:{href:"https://justinramel.github.io/ndca-bar-2017"}},[this._v("Years > 2017")]),this._v(".")])])])])}]};e.a=s},KV3J:function(t,e,a){"use strict";var s=a("kaUX"),i=a("7TxH");e.a={name:"team-bar-table",props:["results","clubView","isMobile"],components:{TeamMarkersTable:i.a},filters:s.a}},"L+yk":function(t,e,a){"use strict";var s=a("KV3J"),i=a("4BFn"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},LmCr:function(t,e,a){"use strict";var s=a("Bi5o"),i=a("grPb"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},N8kU:function(t,e,a){"use strict";var s=a("JT4g"),i=a("VU/8")(null,s.a,!1,null,null,null);e.a=i.exports},Omfq:function(t,e,a){"use strict";e.a={name:"complete",props:["flag"]}},"Q5+t":function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("57fK"),l=a("9YCY");e.a={name:"nav-bar-mobile",components:{MenuDesktop:r.a,MenuMobile:l.a},computed:i()({},Object(n.mapGetters)({title:"title/getTitle"}))}},SGS6:function(t,e,a){"use strict";var s=a("x5xv"),i=a("9d4F"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},Uijt:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},staticRenderFns:[]};e.a=s},Uyz7:function(t,e,a){"use strict";e.a={maxRaces:3,maxShort:3,maxMedium:0,maxLong:0,maxPoints:360,maxPointsShort:360,maxPointsMedium:0,maxPointsLong:0,jbarMaxRaces:3,jbarMaxShort:3,jbarMaxMedium:0,jbarMaxLong:0,jbarMaxPoints:360,jbarMaxPointsShort:360,jbarMaxPointsMedium:0,jbarMaxPointsLong:0,barPositions:120,minimumQualifyingRaces:3,short:"short",medium:"medium",long:"long"}},Wrid:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".tight[data-v-a2c4da0c]{padding:16px;padding:1rem}",""])},Wwdg:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-table",{attrs:{data:t.markers,striped:!0,narrowed:!0,selectable:!0,paginated:!1,"mobile-cards":!1,detailed:!0},scopedSlots:t._u([{key:"header",fn:function(e){return[a("b-tooltip",{attrs:{active:!!e.column.meta,label:e.column.meta,position:"is-bottom",dashed:""}},[t._v("\n      "+t._s(e.column.label)+"\n    ")])]}},{key:"default",fn:function(e){return[a("b-table-column",{staticClass:"is-capitalized",attrs:{field:"name",label:"Markers"}},[a("nuxt-link",{attrs:{to:{name:"riders-id",params:{id:e.row.id}}}},[t._v("\n        "+t._s(e.row.name)+"\n      ")]),a("Needs",{attrs:{rider:e.row,"is-mobile":t.isMobile}})],1),a("b-table-column",{attrs:{visible:!t.isMobile,field:"averagePointsPerRace",label:"Average",meta:"Average Points Per Race",numeric:""}},[t._v("\n      "+t._s(t._f("decimal")(e.row.averagePointsPerRace))+"\n    ")]),a("b-table-column",{attrs:{visible:!t.isMobile,field:"averagePointsPerRaceTotal",label:"Avg Tot",meta:"Average Points Per Race Total"}},[t._v("\n      "+t._s(t._f("decimal")(e.row.averagePointsPerRaceTotal))+"\n    ")]),a("b-table-column",{attrs:{visible:!t.isMobile,field:"allCount",label:"Races"}},[t._v("\n      "+t._s(e.row.allCount)+"\n    ")]),a("b-table-column",{attrs:{visible:!t.isMobile,field:"complete",label:"Complete?"}},[a("Complete",{attrs:{flag:e.row.complete}})],1),a("b-table-column",{attrs:{field:"grandTotal",label:"Points",sortable:"",numeric:""}},[a("strong",[t._v(t._s(e.row.points))])])]}},{key:"detail",fn:function(t){return[a("TeamMarkersTableDetail",{attrs:{row:t.row}})]}}])})},staticRenderFns:[]};e.a=s},fNCm:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-primary is-bold"},[e("div",{staticClass:"hero-body tight"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),e("h2",{staticClass:"subtitle"},[this._v(this._s(this.subtitle))])])])])},staticRenderFns:[]};e.a=s},gpH9:function(t,e,a){"use strict";var s=a("Uyz7");e.a={name:"rank",props:["rider","is-mobile"],computed:{needs:function(){return this.needsShort||this.needsMedium||this.needsLong},needsShort:function(){return this.shortsNeeded>0},needsMedium:function(){return this.mediumsNeeded>0},needsLong:function(){return this.longsNeeded>0},shortsNeeded:function(){return s.a.maxShort-this.rider.shortCount},mediumsNeeded:function(){return s.a.maxMedium-this.rider.mediumCount},longsNeeded:function(){return s.a.maxLong-this.rider.longCount}}}},grPb:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};e.a=s},htll:function(t,e,a){"use strict";var s=a("Q5+t"),i=a("6+GS"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},kaUX:function(t,e,a){"use strict";var s=a("PJh5"),i=a.n(s),n=a("Uyz7"),r={currency:function(t){return"£"+t.toFixed(2)},decimal:function(t){return t.toFixed(2)},integer:function(t){return parseInt(t)},date:function(t){return t.split(" ")[0]+" "+t.split(" ")[1].substring(0,3)},time:function(t){return t||"N/A"},closingDate:function(t){return i()(t+" 23:59","DD MMMM YYYY HH:mm",!0).fromNow(!0)},directionIcon:function(t){return t<0?"fa fa-caret-up":t>0?"fa fa-caret-down":"fa fa-ellipsis-h"},directionClass:function(t){return t<0?"icon is-success is-small":t>0?"icon is-danger is-small":"icon is-small"},direction:function(t){return 0===t?"":Math.abs(t)},ordinal:function(t){if("DNS"===t||"DNF"===t||"N/A"===t||""===t)return t;if(!t)return"";var e=["th","st","nd","rd"],a=t%100;return t+(e[(a-20)%10]||e[a]||e[0])},ordinalOnly:function(t){if("DNS"===t||"DNF"===t||"N/A"===t||""===t)return"";if(t>120)return"";var e=["th","st","nd","rd"],a=t%100;return e[(a-20)%10]||e[a]||e[0]},removeZeroPoints:function(t){return 0===t?"":t},distance:function(t){return""+t.substring(0,1).toUpperCase()+t.substring(1)},barPosition:function(t){return t>n.a.barPositions?"":t},barPoints:function(t){return 0===t?"":t},positive:function(t){return Math.abs(t)},firstLetter:function(t){return t?t.substring(0,1):""},camel:function(t){return t.toLowerCase().replace(/^\w|\s\w/g,function(t){return t.toUpperCase()})}};e.a=r},kmiW:function(t,e,a){"use strict";var s=a("gpH9"),i=a("tz1E"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},mfI2:function(t,e,a){"use strict";var s=a("kaUX"),i=a("SGS6"),n=a("AF/1"),r=a("kmiW");e.a={name:"team-markers-table",components:{TeamMarkersTableDetail:i.a,Complete:n.a,Needs:r.a},filters:s.a,props:["markers","total","totalPredicted","isMobile"]}},npdG:function(t,e,a){"use strict";var s=a("2TjK"),i=a("fNCm");var n=function(t){a("pcZ1")},r=a("VU/8")(s.a,i.a,!1,n,"data-v-a2c4da0c",null);e.a=r.exports},pcZ1:function(t,e,a){var s=a("Wrid");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("04bb8e38",s,!0,{sourceMap:!1})},s9Qj:function(t,e,a){"use strict";var s=a("zcCo"),i=a("Uijt"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},tz1E:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("br",{directives:[{name:"show",rawName:"v-show",value:this.isMobile,expression:"isMobile"}]}),e("span",{directives:[{name:"show",rawName:"v-show",value:this.needs,expression:"needs"}],staticClass:"title is-7"},[this._v("Needs "+this._s(this.shortsNeeded)+" more races")])])},staticRenderFns:[]};e.a=s},u5DT:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("s9Qj"),l=a("htll"),o=a("npdG");e.a={name:"layout",props:["title","subtitle"],components:{NavBar:r.a,NavBarMobile:l.a,PageHeader:o.a},methods:i()({},Object(n.mapMutations)({setTitle:"title/setTitle"})),computed:i()({},Object(n.mapGetters)({isMobile:"is-mobile/isMobile"})),mounted:function(){this.setTitle(this.title)}}},uZCW:function(t,e,a){"use strict";var s=a("u5DT"),i=a("AHTq"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},vuXo:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:this.flag,expression:"flag"}],staticClass:"icon is-success is-small",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fa fa-check"})]),e("span",{directives:[{name:"show",rawName:"v-show",value:!this.flag,expression:"!flag"}],staticClass:"icon is-danger is-small",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fa fa-times"})]),this._t("default")],2)},staticRenderFns:[]};e.a=s},wa5m:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO");e.a={name:"menu-desktop",computed:i()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},x5xv:function(t,e,a){"use strict";var s=a("kaUX"),i=a("AF/1"),n=a("LmCr");e.a={name:"team-markers-table-detail",props:["row"],components:{Complete:i.a,CantComplete:n.a},filters:s.a}},zcCo:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("9YCY"),l=a("57fK");e.a={name:"nav-bar",components:{MenuMobile:r.a,MenuDesktop:l.a},computed:i()({},Object(n.mapGetters)({title:"title/getTitle"}))}}});