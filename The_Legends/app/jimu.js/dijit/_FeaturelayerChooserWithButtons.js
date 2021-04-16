// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/FeaturelayerChooserFromMap".split(" "),function(b,d,a,c,e,f,g,h,k){return e([f,g,h,d],{baseClass:"jimu-layer-chooser-with-buttons jimu-feature-layer-chooser-with-buttons",declaredClass:"jimu.dijit.FeaturelayerChooserWithButtons",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"chooser-container" data-dojo-attach-point\x3d"chooserContainer"\x3e\x3c/div\x3e\x3cdiv class\x3d"footer"\x3e\x3cdiv class\x3d"jimu-btn jimu-float-trailing cancel jimu-btn-vacation" data-dojo-attach-point\x3d"btnCancel"\x3e${nls.cancel}\x3c/div\x3e\x3cdiv class\x3d"jimu-btn jimu-float-trailing ok jimu-trailing-margin1 jimu-state-disabled" data-dojo-attach-point\x3d"btnOk"\x3e${nls.ok}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
layerChooserFromMap:null,constructor:function(a){this.options=a},postMixInProperties:function(){this.nls=a.clone(window.jimuNls.common)},postCreate:function(){this.inherited(arguments);this.layerChooser=this.layerChooserFromMap?this.layerChooserFromMap:new k(this.options);this.layerChooser.placeAt(this.chooserContainer);c.setStyle(this.layerChooser.domNode,{width:"100%",height:"100%"});this.own(b(this.layerChooser,"tree-click",a.hitch(this,function(){0<this.getSelectedItems().length?c.removeClass(this.btnOk,
"jimu-state-disabled"):c.addClass(this.btnOk,"jimu-state-disabled")})));this.own(b(this.btnOk,"click",a.hitch(this,function(){var a=this.getSelectedItems();0<a.length&&this.emit("ok",a)})));this.own(b(this.btnCancel,"click",a.hitch(this,function(){this.emit("cancel")})))},getSelectedItems:function(){return this.layerChooser.getSelectedItems()},startup:function(){this.inherited(arguments);this.layerChooser.startup()}})});