(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c50f5ca0"],{"0c18":function(t,e,r){},3408:function(t,e,r){},4059:function(t,e,r){},"62ad":function(t,e,r){"use strict";r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("a9e3"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0");var n=r("ade3"),o=r("5530"),i=(r("4b85"),r("2b0e")),s=r("d9f7"),a=r("80d2"),l=["sm","md","lg","xl"],c=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return l.reduce((function(t,e){return t["offset"+Object(a["r"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["order"+Object(a["r"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(c),offset:Object.keys(u),order:Object.keys(d)};function f(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),n.toLowerCase()):n.toLowerCase()}}var v=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(o["a"])({cols:{type:[Boolean,String,Number],default:!1}},c,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,o=e.data,i=e.children,a=(e.parent,"");for(var l in r)a+=String(r[l]);var c=v.get(a);return c||function(){var t,e;for(e in c=[],h)h[e].forEach((function(t){var n=r[t],o=f(e,t,n);o&&c.push(o)}));var o=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!o||!r.cols},Object(n["a"])(t,"col-".concat(r.cols),r.cols),Object(n["a"])(t,"offset-".concat(r.offset),r.offset),Object(n["a"])(t,"order-".concat(r.order),r.order),Object(n["a"])(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),v.set(a,c)}(),t(r.tag,Object(s["a"])(o,{class:c}),i)}})},7925:function(t,e,r){"use strict";var n=r("4059"),o=r.n(n);o.a},9086:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"overflow-hidden mb-5",attrs:{id:"services"}},[r("v-row",{staticClass:"pa-5",attrs:{"no-gutters":""}},[r("base-bubble-2",{staticStyle:{transform:"translateX(55%)"}}),r("v-row",{staticClass:"d-flex flex-column justify-center align-center fill-height"},[r("base-heading",{staticClass:"info--text"},[t._v(" Skills ")]),r("v-alert",{attrs:{outlined:"",color:"info"}},t._l(t.skills,(function(e,n){return r("v-row",{key:n,style:"color: "+e.color+";"},[r("v-col",{staticClass:"d-flex text-uppercase",domProps:{textContent:t._s(e.name)}}),r("v-col",{staticClass:"text-right",domProps:{textContent:t._s(e.value+"%")}}),r("v-progress-linear",{attrs:{value:e.value,color:e.color,height:"8"}})],1)})),1)],1),r("v-container",{attrs:{fluid:""}},[r("v-container",{staticClass:"list d-flex justify-center flex-wrap"},t._l(t.services,(function(e){return r("span",{key:e.id},[r("div",{staticClass:"d-flex flex-column align-center ma-3",attrs:{with:"500"}},[r("v-avatar",{staticClass:"elevation-6 mb-2",attrs:{color:"#69A1BB",size:"90",tile:""}},[r("v-icon",{attrs:{dark:"",size:"52"},domProps:{textContent:t._s(e.icon)}})],1),r("base-text",[r("div",{staticClass:"mb-2",domProps:{textContent:t._s(e.name)}}),r("div",{domProps:{innerHTML:t._s(e.blurb)}})])],1)])})),0)],1)],1)],1)},o=[],i={name:"Services",data:function(){return{services:[{id:0,name:"Vue",icon:"mdi-vuejs",blurb:""},{id:1,name:"React",icon:"mdi-react",blurb:""},{id:2,name:"Javascript",icon:"mdi-language-javascript",blurb:""},{id:3,name:"Node",icon:"mdi-nodejs",blurb:""},{id:4,name:"Vuetify",icon:"mdi-vuetify",blurb:""},{id:5,name:"Bootstrap",icon:"mdi-bootstrap",blurb:""},{id:6,name:"CSS3",icon:"mdi-language-css3",blurb:""},{id:7,name:"HTML5",icon:"mdi-language-html5",blurb:""}],skills:[{name:"Web Design",value:100,color:"#69A1BB"},{name:"Web Development",value:85,color:"#EAAF58"},{name:"Web Support",value:90,color:"#14BF14"},{name:"Debugging",value:80,color:"#D7DE04"}]}}},s=i,a=(r("7925"),r("2877")),l=r("6544"),c=r.n(l),u=(r("caad"),r("5530")),d=r("ade3"),h=(r("0c18"),r("10d2")),f=r("afdd"),v=r("9d26"),p=r("f2e7"),b=r("7560"),m=r("2b0e"),g=m["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),y=r("58df"),C=r("d9bd"),_=Object(y["a"])(h["a"],p["a"],g).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(d["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(f["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(v["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(v["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(u["a"])({},h["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||b["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(C["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),B=(r("a9e3"),r("3408"),r("a9ad")),x=r("24b2"),S=r("80d2"),j=Object(y["a"])(B["a"],x["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes:function(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles:function(){return Object(u["a"])({height:Object(S["d"])(this.size),minWidth:Object(S["d"])(this.size),width:Object(S["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),w=r("62ad"),O=r("a523"),$=r("132d"),k=r("8e36"),A=r("0fd9"),E=Object(a["a"])(s,n,o,!1,null,"26df14e4",null);e["default"]=E.exports;c()(E,{VAlert:_,VAvatar:j,VCol:w["a"],VContainer:O["a"],VIcon:$["a"],VProgressLinear:k["a"],VRow:A["a"]})},afdd:function(t,e,r){"use strict";var n=r("8336");e["a"]=n["a"]}}]);
//# sourceMappingURL=chunk-c50f5ca0.dacdf63b.js.map