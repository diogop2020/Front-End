(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{392:function(e,t,l){"use strict";l.r(t);var r=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],n={data:function(){return{fill:!0,selectedGradient:r[4],gradients:r,padding:8,radius:10,value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],width:2}}},d=l(78),o=l(102),c=l.n(o),v=l(334),f=l(386),m=l(328),h=l(388),w=l(389),k=l(132),x=l(387),V=l(390),_=l(394),C=l(395),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-container",{attrs:{fluid:""}},[l("v-sparkline",{attrs:{fill:e.fill,gradient:e.selectedGradient,"line-width":e.width,padding:e.padding,smooth:e.radius||!1,value:e.value,"auto-draw":""}}),e._v(" "),l("v-divider"),e._v(" "),l("v-row",[l("v-col",{attrs:{cols:"12",md:"6"}},[l("v-row",{staticClass:"fill-height",attrs:{align:"center"}},[l("v-item-group",{attrs:{mandatory:""},model:{value:e.selectedGradient,callback:function(t){e.selectedGradient=t},expression:"selectedGradient"}},[l("v-row",e._l(e.gradients,(function(t,i){return l("v-item",{key:i,attrs:{value:t},scopedSlots:e._u([{key:"default",fn:function(e){var r=e.active,n=e.toggle;return[l("v-card",{staticClass:"mr-2",style:{background:t.length>1?"linear-gradient(0deg, "+t+")":t[0],border:"2px solid",borderColor:r?"#222":"white"},attrs:{width:"30",height:"30"},nativeOn:{click:function(e){return n(e)}}})]}}],null,!0)})})),1)],1)],1)],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"6"}},[l("v-slider",{attrs:{label:"Width",min:"0.1",max:"10",step:"0.1","thumb-label":""},model:{value:e.width,callback:function(t){e.width=t},expression:"width"}})],1),e._v(" "),l("v-col",{attrs:{cols:"6"}},[l("v-row",{staticClass:"fill-height",attrs:{align:"center"}},[l("v-switch",{attrs:{label:"Filled"},model:{value:e.fill,callback:function(t){e.fill=t},expression:"fill"}})],1)],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"6"}},[l("v-slider",{attrs:{label:"Radius",min:"0",max:"25","thumb-label":""},model:{value:e.radius,callback:function(t){e.radius=t},expression:"radius"}})],1),e._v(" "),l("v-col",{attrs:{cols:"12",md:"6","offset-md":"6"}},[l("v-slider",{attrs:{label:"Padding",min:"0",max:"25","thumb-label":""},model:{value:e.padding,callback:function(t){e.padding=t},expression:"padding"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:v.a,VCol:f.a,VContainer:m.a,VDivider:h.a,VItem:w.a,VItemGroup:k.b,VRow:x.a,VSlider:V.a,VSparkline:_.a,VSwitch:C.a})}}]);