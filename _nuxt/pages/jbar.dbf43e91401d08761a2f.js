webpackJsonp([8],{"/Ud6":function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-burger",class:{"is-active":this.menuIsActive},attrs:{"data-target":"navMenu"},on:{click:this.toggleMenu}},[e("span"),e("span"),e("span")])},staticRenderFns:[]};e.a=s},"13Md":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-menu",class:{"is-active":t.menuIsActive},attrs:{id:"navMenu"}},[a("div",{staticClass:"navbar-start"},[a("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events & Results")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"bar"}}},[t._v("Tables")]),a("div",{staticClass:"navbar-dropdown"},[a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"bar"}}},[t._v("Overall")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"lbar"}}},[t._v("Women")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"vbar"}}},[t._v("Vets")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"jbar"}}},[t._v("Junior")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-bar"}}},[t._v("Team")])],1)],1),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"riders"}}},[t._v("Riders")]),a("div",{staticClass:"navbar-dropdown"},[a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"riders"}}},[t._v("Find Rider")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"head2head"}}},[t._v("Head 2 Head")])],1)],1),t._m(0)],1),a("div",{staticClass:"navbar-end"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link",attrs:{href:"https://justinramel.github.io/ndca-hc-2018/"}},[this._v("Years")]),e("div",{staticClass:"navbar-dropdown"},[e("a",{staticClass:"navbar-item",attrs:{href:"https://justinramel.github.io/ndca-hc-2018/"}},[this._v("2018")]),e("a",{staticClass:"navbar-item",attrs:{href:"https://justinramel.github.io/ndca-hc-2017/"}},[this._v("2017")])])])}]};e.a=s},"2TjK":function(t,e,a){"use strict";e.a={name:"header",props:["title","subtitle"]}},"57fK":function(t,e,a){"use strict";var s=a("wa5m"),i=a("13Md"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},"6+GS":function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar hero is-primary is-bold"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},staticRenderFns:[]};e.a=s},"78Ub":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table is-bordered"},[a("tbody",[a("tr",[a("td",{attrs:{width:"50%"}},[t._v("Position")]),a("td",[t._v("\n          "+t._s(t._f("ordinal")(t.row.position))+"\n        ")])]),a("tr",[a("td",[t._v("Direction")]),a("td",[a("span",{class:t._f("directionClass")(t.row.pointsDirection),staticStyle:{"vertical-align":"middle"}},[a("i",{class:t._f("directionIcon")(t.row.pointsDirection),staticStyle:{"margin-right":"3px !important"}}),t._v("\n              "+t._s(t._f("direction")(t.row.pointsDirection))+"\n          ")])])]),a("tr",[a("td",[t._v("Average points position")]),a("td",[t._v("\n          "+t._s(t._f("ordinal")(t.row.barPredictedFinalPosition))+"\n        ")])]),a("tr",[a("td",[t._v("Name")]),a("td",[a("nuxt-link",{attrs:{to:{name:"riders-id",params:{id:t.row.id}}}},[t._v(t._s(t.row.name))])],1)]),a("tr",[a("td",[t._v("Club")]),a("td",[a("nuxt-link",{attrs:{to:{name:"clubs-name",params:{name:t.row.club}}}},[t._v(t._s(t.row.club))])],1)]),a("tr",[a("td",[t._v("Average points per race")]),a("td",[t._v("\n          "+t._s(t._f("decimal")(t.row.averagePointsPerRace))+"\n        ")])]),a("tr",[a("td",[t._v("Average points total")]),a("td",[t._v("\n          "+t._s(t._f("integer")(t.row.predictedFinalPoints))+"\n        ")])]),a("tr",[a("td",[t._v("Total Points")]),a("td",[a("strong",[t._v(t._s(t.row.grandTotal))])])]),a("tr",[a("td",[t._v("Complete?")]),a("td",[a("Complete",{attrs:{flag:t.row.complete}}),a("CantComplete",{attrs:{flag:t.row.canComplete}})],1)])])])])},staticRenderFns:[]};e.a=s},"9YCY":function(t,e,a){"use strict";var s=a("EYzX"),i=a("/Ud6"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},"AF/1":function(t,e,a){"use strict";var s=a("Omfq"),i=a("vuXo"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},AHTq:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.isMobile?t._e():a("NavBar"),t.isMobile?a("NavBarMobile"):t._e(),t.isMobile?t._e():t._t("header",[a("PageHeader",{attrs:{slot:"header",title:t.title,subtitle:t.subtitle},slot:"header"})]),a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[t._t("default")],2)]),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer medium-margin-top no-padding-top no-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[this._v("Made by "),e("a",{attrs:{href:"mailto:justin.ramel@gmail.com",target:"_blank",rel:"noopener"}},[this._v("Justin Ramel")]),this._v(".")])])])])}]};e.a=s},Bi5o:function(t,e,a){"use strict";e.a={name:"cant-complete",props:["flag"]}},EYzX:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO");e.a={name:"menu",methods:i()({},Object(n.mapMutations)({toggleMenu:"menu/toggle"})),computed:i()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},JT4g:function(t,e,a){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section no-padding-top no-padding-bottom"},[e("article",{staticClass:"message is-warning small-padding-top"},[e("div",{staticClass:"message-header"},[e("p",[this._v("Info")])]),e("div",{staticClass:"message-body"},[e("p",[this._v("Looking for last years results? You can find them under the menu "),e("a",{attrs:{href:"https://justinramel.github.io/ndca-bar-2017"}},[this._v("Years > 2017")]),this._v(".")])])])])}]};e.a=s},KUA5:function(t,e,a){"use strict";var s=a("kaUX"),i=a("AF/1"),n=a("LmCr");e.a={name:"bar-table-detail",props:["row"],components:{Complete:i.a,CantComplete:n.a},filters:s.a}},LmCr:function(t,e,a){"use strict";var s=a("Bi5o"),i=a("grPb"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},N8kU:function(t,e,a){"use strict";var s=a("JT4g"),i=a("VU/8")(null,s.a,!1,null,null,null);e.a=i.exports},Omfq:function(t,e,a){"use strict";e.a={name:"complete",props:["flag"]}},"Q5+t":function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("57fK"),l=a("9YCY");e.a={name:"nav-bar-mobile",components:{MenuDesktop:r.a,MenuMobile:l.a},computed:i()({},Object(n.mapGetters)({title:"title/getTitle"}))}},QFPr:function(t,e,a){"use strict";var s=a("kaUX"),i=a("AF/1"),n=a("LmCr"),r=a("RYrl");e.a={name:"bar-table",props:{results:Array,rival:{type:Object,default:function(){return{id:0}}},isMobile:Boolean},components:{Complete:i.a,CantComplete:n.a,BarTableDetail:r.a},filters:s.a,computed:{paginate:function(){return this.results.length>50},showHead2Head:function(){return 0!==this.rival.id}}}},RYrl:function(t,e,a){"use strict";var s=a("KUA5"),i=a("78Ub"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},Uijt:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},staticRenderFns:[]};e.a=s},Uyz7:function(t,e,a){"use strict";e.a={maxRaces:3,maxShort:3,maxMedium:0,maxLong:0,maxPoints:360,maxPointsShort:360,maxPointsMedium:0,maxPointsLong:0,jbarMaxRaces:3,jbarMaxShort:3,jbarMaxMedium:0,jbarMaxLong:0,jbarMaxPoints:360,jbarMaxPointsShort:360,jbarMaxPointsMedium:0,jbarMaxPointsLong:0,barPositions:120,minimumQualifyingRaces:3,short:"short",medium:"medium",long:"long"}},Wrid:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".tight[data-v-a2c4da0c]{padding:16px;padding:1rem}",""])},Y5zV:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Page",{attrs:{title:"Juniors",subtitle:""}},[e("BarTable",{directives:[{name:"show",rawName:"v-show",value:this.results.length,expression:"results.length"}],attrs:{results:this.results,"is-mobile":this.isMobile}}),e("NoData",{directives:[{name:"show",rawName:"v-show",value:!this.results.length,expression:"!results.length"}]})],1)},staticRenderFns:[]};e.a=s},fNCm:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-primary is-bold"},[e("div",{staticClass:"hero-body tight"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),e("h2",{staticClass:"subtitle"},[this._v(this._s(this.subtitle))])])])])},staticRenderFns:[]};e.a=s},grPb:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};e.a=s},htll:function(t,e,a){"use strict";var s=a("Q5+t"),i=a("6+GS"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},iMkz:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("uZCW"),l=a("xs4p"),o=a("N8kU");e.a={name:"bar",components:{Page:r.a,BarTable:l.a,NoData:o.a},computed:i()({},Object(n.mapGetters)({results:"jbar/results",isMobile:"is-mobile/isMobile"}))}},kaUX:function(t,e,a){"use strict";var s=a("PJh5"),i=a.n(s),n=a("Uyz7"),r={currency:function(t){return"£"+t.toFixed(2)},decimal:function(t){return t.toFixed(2)},integer:function(t){return parseInt(t)},date:function(t){return t.split(" ")[0]+" "+t.split(" ")[1].substring(0,3)},time:function(t){return t||"N/A"},closingDate:function(t){return i()(t+" 23:59","DD MMMM YYYY HH:mm",!0).fromNow(!0)},directionIcon:function(t){return t<0?"fa fa-caret-up":t>0?"fa fa-caret-down":"fa fa-ellipsis-h"},directionClass:function(t){return t<0?"icon is-success is-small":t>0?"icon is-danger is-small":"icon is-small"},direction:function(t){return 0===t?"":Math.abs(t)},ordinal:function(t){if("DNS"===t||"DNF"===t||"N/A"===t||""===t)return t;if(!t)return"";var e=["th","st","nd","rd"],a=t%100;return t+(e[(a-20)%10]||e[a]||e[0])},ordinalOnly:function(t){if("DNS"===t||"DNF"===t||"N/A"===t||""===t)return"";if(t>120)return"";var e=["th","st","nd","rd"],a=t%100;return e[(a-20)%10]||e[a]||e[0]},removeZeroPoints:function(t){return 0===t?"":t},distance:function(t){return""+t.substring(0,1).toUpperCase()+t.substring(1)},barPosition:function(t){return t>n.a.barPositions?"":t},barPoints:function(t){return 0===t?"":t},positive:function(t){return Math.abs(t)},firstLetter:function(t){return t?t.substring(0,1):""},camel:function(t){return t.toLowerCase().replace(/^\w|\s\w/g,function(t){return t.toUpperCase()})}};e.a=r},kem7:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-table",{attrs:{data:t.results,striped:!0,narrowed:!0,paginated:t.paginate,"per-page":50,"pagination-simple":!0,"mobile-cards":!1,detailed:""},scopedSlots:t._u([{key:"header",fn:function(e){return[a("b-tooltip",{attrs:{active:!!e.column.meta,label:e.column.meta,position:"is-bottom",dashed:""}},[t._v("\n      "+t._s(e.column.label)+"\n    ")])]}},{key:"default",fn:function(e){return[a("b-table-column",{attrs:{field:"position",label:"Pos",meta:"Position",sortable:""}},[t._v("\n      "+t._s(t._f("ordinal")(e.row.position))+"\n    ")]),a("b-table-column",{attrs:{visible:!t.isMobile,field:"pointsDirection",label:"Dir",meta:"Direction",sortable:""}},[a("span",{class:t._f("directionClass")(e.row.pointsDirection),staticStyle:{"vertical-align":"middle"}},[a("i",{class:t._f("directionIcon")(e.row.pointsDirection),staticStyle:{"margin-right":"3px !important"}}),t._v("\n          "+t._s(t._f("direction")(e.row.pointsDirection))+"\n      ")])]),a("b-table-column",{attrs:{visible:!t.isMobile,field:"barPredictedFinalPosition",label:"AP Pos",meta:"Average Points Final Position",sortable:"",width:"100"}},[t._v("\n      "+t._s(t._f("ordinal")(e.row.barPredictedFinalPosition))+"\n    ")]),a("b-table-column",{staticClass:"is-capitalized",attrs:{field:"name",label:"Name",sortable:""}},[a("nuxt-link",{attrs:{to:{name:"riders-id",params:{id:e.row.id}}}},[t._v(t._s(e.row.name))])],1),a("b-table-column",{attrs:{visible:!t.isMobile,field:"club",label:"Club",sortable:""}},[a("nuxt-link",{attrs:{to:{name:"clubs-name",params:{name:e.row.club}}}},[t._v(t._s(e.row.club))])],1),a("b-table-column",{attrs:{visible:!t.isMobile,field:"averagePointsPerRace",label:"Avg",meta:"Average Points Per Race",sortable:"",numeric:""}},[t._v("\n      "+t._s(t._f("decimal")(e.row.averagePointsPerRace))+"\n    ")]),a("b-table-column",{staticClass:"has-text-centered",attrs:{visible:!t.isMobile,field:"predictedFinalPoints",label:"AP Total",meta:"Average Points Final Total",sortable:"",width:"110"}},[t._v("\n      "+t._s(t._f("integer")(e.row.predictedFinalPoints))+"\n    ")]),a("b-table-column",{attrs:{field:"grandTotal",label:"Points",sortable:"",numeric:""}},[a("strong",[t._v(t._s(e.row.grandTotal))])]),a("b-table-column",{attrs:{visible:!t.isMobile,field:"bar.complete",label:"Complete",sortable:"",centered:""}},[a("Complete",{attrs:{flag:e.row.complete}}),a("CantComplete",{attrs:{flag:e.row.canComplete}})],1),a("b-table-column",{attrs:{field:"id",label:"",visible:t.showHead2Head}},[a("nuxt-link",{attrs:{to:{name:"head2head-ids",params:{ids:t.rival.id+"vs"+e.row.id}}}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fa fa-columns"})])])],1)]}},{key:"detail",fn:function(t){return[a("BarTableDetail",{attrs:{row:t.row}})]}}])})},staticRenderFns:[]};e.a=s},npdG:function(t,e,a){"use strict";var s=a("2TjK"),i=a("fNCm");var n=function(t){a("pcZ1")},r=a("VU/8")(s.a,i.a,!1,n,"data-v-a2c4da0c",null);e.a=r.exports},pcZ1:function(t,e,a){var s=a("Wrid");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("04bb8e38",s,!0,{sourceMap:!1})},s9Qj:function(t,e,a){"use strict";var s=a("zcCo"),i=a("Uijt"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},tpjv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("iMkz"),i=a("Y5zV"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.default=n.exports},u5DT:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("s9Qj"),l=a("htll"),o=a("npdG");e.a={name:"layout",props:["title","subtitle"],components:{NavBar:r.a,NavBarMobile:l.a,PageHeader:o.a},methods:i()({},Object(n.mapMutations)({setTitle:"title/setTitle"})),computed:i()({},Object(n.mapGetters)({isMobile:"is-mobile/isMobile"})),mounted:function(){this.setTitle(this.title)}}},uZCW:function(t,e,a){"use strict";var s=a("u5DT"),i=a("AHTq"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},vuXo:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:this.flag,expression:"flag"}],staticClass:"icon is-success is-small",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fa fa-check"})]),e("span",{directives:[{name:"show",rawName:"v-show",value:!this.flag,expression:"!flag"}],staticClass:"icon is-danger is-small",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fa fa-times"})]),this._t("default")],2)},staticRenderFns:[]};e.a=s},wa5m:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO");e.a={name:"menu-desktop",computed:i()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},xs4p:function(t,e,a){"use strict";var s=a("QFPr"),i=a("kem7"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},zcCo:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("9YCY"),l=a("57fK");e.a={name:"nav-bar",components:{MenuMobile:r.a,MenuDesktop:l.a},computed:i()({},Object(n.mapGetters)({title:"title/getTitle"}))}}});