webpackJsonp([11],{"/Ud6":function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-burger",class:{"is-active":this.menuIsActive},attrs:{"data-target":"navMenu"},on:{click:this.toggleMenu}},[e("span"),e("span"),e("span")])},staticRenderFns:[]};e.a=s},"13Md":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-menu",class:{"is-active":t.menuIsActive},attrs:{id:"navMenu"}},[a("div",{staticClass:"navbar-start"},[a("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events & Results")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"bar"}}},[t._v("Tables")]),a("div",{staticClass:"navbar-dropdown"},[a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"bar"}}},[t._v("Overall")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"lbar"}}},[t._v("Women")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"vbar"}}},[t._v("Vets")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"jbar"}}},[t._v("Junior")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"team-bar"}}},[t._v("Team")])],1)],1),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("nuxt-link",{staticClass:"navbar-link",attrs:{to:{name:"riders"}}},[t._v("Riders")]),a("div",{staticClass:"navbar-dropdown"},[a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"riders"}}},[t._v("Find Rider")]),a("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"head2head"}}},[t._v("Head 2 Head")])],1)],1),t._m(0)],1),a("div",{staticClass:"navbar-end"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link",attrs:{href:"https://justinramel.github.io/ndca-hc-2018/"}},[this._v("Years")]),e("div",{staticClass:"navbar-dropdown"},[e("a",{staticClass:"navbar-item",attrs:{href:"https://justinramel.github.io/ndca-hc-2018/"}},[this._v("2018")]),e("a",{staticClass:"navbar-item",attrs:{href:"https://justinramel.github.io/ndca-hc-2017/"}},[this._v("2017")])])])}]};e.a=s},"2TjK":function(t,e,a){"use strict";e.a={name:"header",props:["title","subtitle"]}},"57fK":function(t,e,a){"use strict";var s=a("wa5m"),i=a("13Md"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},"6+GS":function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar hero is-primary is-bold"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},staticRenderFns:[]};e.a=s},"9YCY":function(t,e,a){"use strict";var s=a("EYzX"),i=a("/Ud6"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},AHTq:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.isMobile?t._e():a("NavBar"),t.isMobile?a("NavBarMobile"):t._e(),t.isMobile?t._e():t._t("header",[a("PageHeader",{attrs:{slot:"header",title:t.title,subtitle:t.subtitle},slot:"header"})]),a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[t._t("default")],2)]),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer medium-margin-top no-padding-top no-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[this._v("Made by "),e("a",{attrs:{href:"mailto:justin.ramel@gmail.com",target:"_blank",rel:"noopener"}},[this._v("Justin Ramel")]),this._v(".")])])])])}]};e.a=s},EYzX:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO");e.a={name:"menu",methods:i()({},Object(n.mapMutations)({toggleMenu:"menu/toggle"})),computed:i()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},LZai:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Page",{attrs:{title:"Riders"}},[e("RiderFinder",{attrs:{"rider-list":this.riders}})],1)},staticRenderFns:[]};e.a=s},"Q5+t":function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("57fK"),l=a("9YCY");e.a={name:"nav-bar-mobile",components:{MenuDesktop:r.a,MenuMobile:l.a},computed:i()({},Object(n.mapGetters)({title:"title/getTitle"}))}},T5Fp:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("uZCW"),l=a("sJnp");e.a={name:"riders",components:{Page:r.a,RiderFinder:l.a},computed:i()({},Object(n.mapGetters)({riders:"riders/riders"}))}},Uijt:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[e("p",{staticClass:"navbar-item"},[this._v("\n        "+this._s(this.title)+"\n      ")]),e("MenuMobile")],1),e("MenuDesktop")],1)])},staticRenderFns:[]};e.a=s},Wrid:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".tight[data-v-a2c4da0c]{padding:16px;padding:1rem}",""])},"a+nh":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("T5Fp"),i=a("LZai"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.default=n.exports},fNCm:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-primary is-bold"},[e("div",{staticClass:"hero-body tight"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),e("h2",{staticClass:"subtitle"},[this._v(this._s(this.subtitle))])])])])},staticRenderFns:[]};e.a=s},htll:function(t,e,a){"use strict";var s=a("Q5+t"),i=a("6+GS"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},kSSr:function(t,e,a){"use strict";e.a={name:"rider-finder",props:["rider","rider-list"],data:function(){var t=this.rider?this.rider.name:"";return{listRider:{data:this.riderList,name:t,selected:this.rider}}},methods:{selectRider:function(t){t&&(this.listRider.selected=t,this.redirect())},redirect:function(){this.listRider.selected&&this.$router.push({name:"riders-id",params:{id:this.listRider.selected.id}})}},computed:{filteredRider:function(){var t=this;if(this.listRider)return this.listRider.data.filter(function(e){return e.name.toLowerCase().indexOf(t.listRider.name.toLowerCase())>=0})}}}},"n+RY":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("b-field",{attrs:{label:"Find Rider"}},[a("b-autocomplete",{attrs:{placeholder:"Name","keep-first":!0,data:t.filteredRider,field:"name",size:"is-medium",icon:"search","icon-pack":"fa"},on:{select:t.selectRider},model:{value:t.listRider.name,callback:function(e){t.$set(t.listRider,"name",e)},expression:"listRider.name"}})],1)],1)},staticRenderFns:[]};e.a=s},npdG:function(t,e,a){"use strict";var s=a("2TjK"),i=a("fNCm");var n=function(t){a("pcZ1")},r=a("VU/8")(s.a,i.a,!1,n,"data-v-a2c4da0c",null);e.a=r.exports},pcZ1:function(t,e,a){var s=a("Wrid");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("04bb8e38",s,!0,{sourceMap:!1})},s9Qj:function(t,e,a){"use strict";var s=a("zcCo"),i=a("Uijt"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},sJnp:function(t,e,a){"use strict";var s=a("kSSr"),i=a("n+RY"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},u5DT:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("s9Qj"),l=a("htll"),c=a("npdG");e.a={name:"layout",props:["title","subtitle"],components:{NavBar:r.a,NavBarMobile:l.a,PageHeader:c.a},methods:i()({},Object(n.mapMutations)({setTitle:"title/setTitle"})),computed:i()({},Object(n.mapGetters)({isMobile:"is-mobile/isMobile"})),mounted:function(){this.setTitle(this.title)}}},uZCW:function(t,e,a){"use strict";var s=a("u5DT"),i=a("AHTq"),n=a("VU/8")(s.a,i.a,!1,null,null,null);e.a=n.exports},wa5m:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO");e.a={name:"menu-desktop",computed:i()({},Object(n.mapGetters)({title:"title/getTitle",menuIsActive:"menu/menuIsActive"}))}},zcCo:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("9YCY"),l=a("57fK");e.a={name:"nav-bar",components:{MenuMobile:r.a,MenuDesktop:l.a},computed:i()({},Object(n.mapGetters)({title:"title/getTitle"}))}}});