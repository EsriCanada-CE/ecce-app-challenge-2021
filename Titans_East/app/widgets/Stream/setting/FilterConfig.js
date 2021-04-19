// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Stream/setting/FilterConfig.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"stream-filter-head" style\x3d"overflow:hidden;"\x3e\r\n    \x3cdiv class\x3d"jimu-float-leading"\x3e\r\n      \x3cdiv class\x3d"add-with-icon" data-dojo-attach-event\x3d"onclick:_addFilter"\x3e\r\n        \x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"add-label jimu-widget-normal"\x3e${nls.addNew}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"stream-filterList"\x3e\r\n    \x3cdiv class\x3d"stream-filterList-content"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"filterList"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"single-filter-container" data-dojo-attach-point\x3d"singleFilterContainer"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-style dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./FilterConfig.html ./SingleFilter jimu/dijit/Message jimu/dijit/SimpleTable jimu/dijit/LoadingShelter".split(" "),function(h,e,g,f,d,k,l,m,n,p,q,r,t){return h([l,m,n],{baseClass:"jimu-widget-stream-filter",templateString:p,streamLayer:null,config:null,postCreate:function(){this.inherited(arguments);this.filterList=new t({autoHeight:!1,
selectable:!0,fields:[{name:"name",title:this.nls.name,width:"auto",type:"text",editable:!1},{name:"actions",title:"",width:"70px",type:"actions",actions:["up","down","delete"]}]},this.filterList);k.add(this.filterList.domNode,"stream-filter-table");d.set(this.filterList.domNode,"height","100%");this.own(f(this.filterList,"row-select",e.hitch(this,this._onFilterSelected)));this.own(f(this.filterList,"row-delete",e.hitch(this,this._onFilterRemoved)));this.filterList.startup();this.config&&0<this.config.length&&
this._applyConfig()},_applyConfig:function(){this.filterList.clear();g.forEach(this.config,e.hitch(this,function(a,b){var c=this.filterList.addRow({name:a.name||this.nls.newFilter}).tr;this._createFilter(c,a);0===b&&this.filterList.selectRow(c)}))},getConfig:function(){var a,b=[];g.forEach(this.filterList.getRows(),function(c){a=c.filter;b.push(a.getConfig())});return b},_addFilter:function(){var a=this.filterList.addRow({name:this.nls.newFilter});a.success?(a=a.tr,this._createFilter(a,{name:this.nls.newFilter}),
this.filterList.selectRow(a)):new r({message:this.nls.addFilterFailed})},_onFilterSelected:function(a){var b;this.currentTR?this.currentTR!==a&&((b=this.currentTR.filter)&&d.set(b.domNode,"display","none"),this.currentTR=a,(b=this.currentTR.filter)&&d.set(b.domNode,"display","block")):(this.currentTR=a,(b=this.currentTR.filter)&&d.set(b.domNode,"display","block"))},_onFilterRemoved:function(a){var b=a.filter;b&&(b.destroy(),a.filter=null)},_createFilter:function(a,b){b=new q({config:b,streamLayer:this.streamLayer,
nls:this.nls});b.placeAt(this.singleFilterContainer);a.filter=b;this.own(f(b,"filterNameChanged",e.hitch(this,function(c){this.filterList.editRow(a,{name:c})})));d.set(b.domNode,"display","none")}})});