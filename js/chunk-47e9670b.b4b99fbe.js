(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47e9670b"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var o=i("fe6c"),n=i("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"7a74":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{staticClass:"justify-center",attrs:{height:"88"}},[i("social-media",{attrs:{large:""}})],1)},n=[],s=(i("d3b7"),{name:"CoreFooter",components:{SocialMedia:function(){return i.e("chunk-af548b74").then(i.bind(null,"48c3"))}}}),a=s,c=i("2877"),r=i("6544"),p=i.n(r),u=(i("a9e3"),i("c7cd"),i("5530")),l=(i("b5b6"),i("3a66")),h=i("8dd9"),d=i("d10f"),f=i("58df"),b=i("80d2"),m=Object(f["a"])(h["a"],Object(l["a"])("footer",["height","inset"]),d["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(u["a"])({},h["a"].options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(u["a"])({},h["a"].options.computed.styles.call(this),{height:isNaN(t)?t:Object(b["d"])(t),left:Object(b["d"])(this.computedLeft),right:Object(b["d"])(this.computedRight),bottom:Object(b["d"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),v=Object(c["a"])(a,o,n,!1,null,null,null);e["default"]=v.exports;p()(v,{VFooter:m})},b5b6:function(t,e,i){},d10f:function(t,e,i){"use strict";var o=i("2b0e");e["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-47e9670b.b4b99fbe.js.map