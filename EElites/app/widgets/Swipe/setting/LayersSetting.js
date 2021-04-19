// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Swipe/setting/LayersSetting.html":'\x3cdiv class\x3d"default-layer-setting"\x3e\r\n\t\x3cdiv class\x3d"layer-section swipe-mode"\x3e\r\n\t\t\x3cspan class\x3d"layer-text sub-title"\x3e${nls.swipeMode}\x3c/span\x3e\r\n\t\t\x3cdiv class\x3d"swipe-radio"\x3e\r\n\t\t\t\x3cinput data-dojo-attach-point\x3d"singleLayerRaido" data-dojo-type\x3d"dijit/form/RadioButton" type\x3d"radio" class\x3d"jimu-radio-btn blue-radio"\r\n\t\t\t name\x3d"modeRaido" id\x3d"singleLayerRaido" /\x3e\r\n\t\t\t\x3clabel data-dojo-attach-point\x3d"singleLayerRaidoLabel" for\x3d"singleLayerRaido"\x3e${nls.singleLayer}\x3c/label\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"swipe-radio"\x3e\r\n\t\t\t\x3cinput data-dojo-attach-point\x3d"multipleLayerRaido" data-dojo-type\x3d"dijit/form/RadioButton" type\x3d"radio" class\x3d"jimu-radio-btn blue-radio"\r\n\t\t\t name\x3d"modeRaido" id\x3d"multipleLayerRaido" /\x3e\r\n\t\t\t\x3clabel data-dojo-attach-point\x3d"multipleLayerRaidoLabel" for\x3d"multipleLayerRaido"\x3e${nls.MultipleLayers}\x3c/label\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"layer-section"\x3e\r\n\t\t\x3cspan class\x3d"layer-text"\x3e${nls.layersAvailable}\x3c/span\x3e\r\n\t\t\x3cspan class\x3d"jimu-icon jimu-icon-error hide" data-dojo-attach-point\x3d"layersChooserError"\x3e\x3c/span\x3e\r\n\t\t\x3cdiv class\x3d"layers-chooser" data-dojo-attach-point\x3d"layersChooser"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"layer-section"\x3e\r\n\t\t\x3cspan class\x3d"layer-text" data-dojo-attach-point\x3d"layerTextNode"\x3e${nls.layerText}\x3c/span\x3e\r\n\t\t\x3cdiv class\x3d"select-container default-layers-selector"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"swipeLayersContainer"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"swipeLayers"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"defaultLayersContainer" class\x3d"hide"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"defaultLayersSelectorContainer"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3clabel class\x3d"layer-hint"\x3e${nls.layerHint}\x3c/label\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/Evented dojo/_base/declare dojo/_base/lang dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/on dojo/_base/array dojo/_base/html jimu/LayerInfos/LayerInfos jimu/dijit/LayerChooserFromMapLite dojo/Deferred ../MultSelector/MultSelector dojo/text!./LayersSetting.html jimu/dijit/LoadingShelter jimu/utils jimu/dijit/CheckBox dijit/form/Select dojox/form/CheckedMultiSelect dijit/form/ValidationTextBox".split(" "),function(n,p,e,q,r,t,l,h,g,m,u,v,w,x,y,z){return p([q,
r,t,n],{templateString:x,postCreate:function(){this.shelter=new y({hidden:!0});this.defaultLayersSelector=new w({nls:this.nls},this.defaultLayersSelectorContainer);this.defaultLayersSelector.startup();this.shelter.show();this._getLayerInfoObj(this.map).then(e.hitch(this,function(){this._setDefaultLayerByState(this.config.layerState)}),function(a){console.log(a)}).always(e.hitch(this,function(){this.shelter.hide()}));this.own(l(this.singleLayerRaido,"change",e.hitch(this,function(){this.singleLayerRaido.checked&&
(g.addClass(this.defaultLayersContainer,"hide"),g.removeClass(this.swipeLayersContainer,"hide"),this.emit("change",{mode:"single"}))})));this.own(l(this.multipleLayerRaido,"change",e.hitch(this,function(){this.multipleLayerRaido.checked&&(g.removeClass(this.defaultLayersContainer,"hide"),g.addClass(this.swipeLayersContainer,"hide"),this.emit("change",{mode:"mult"}))})));this.inherited(arguments)},startup:function(){this.inherited(arguments)},setConfig:function(a){this.config=a;"mult"===this.config.layerMode?
this.multipleLayerRaido.setChecked(!0):this.singleLayerRaido.setChecked(!0);this._layerChooserFromMap||(this._layerChooserFromMap=new u({showTables:!1,onlyShowWebMapLayers:!0,customFilter:e.hitch(this,function(b){var c=new v,d=m.getInstanceSync().getLayerInfoArrayOfWebmap();h.some(d,function(k){if(k.id===b.id)return!0},this)?b.isRootLayer()?c.resolve(!0):this.map.getLayer(b.id)?c.resolve(!0):c.resolve(!1):c.resolve(!1);return c}),layerState:this.config.layerState}),this._layerChooserFromMap.placeAt(this.layersChooser),
this._layerChooserFromMap.startup(),h.forEach(this._layerInfosObj.getLayerInfoArray(),function(b){b&&b.layerObject&&b.layerObject.declaredClass&&("esri.layers.ArcGISDynamicMapServiceLayer"===b.layerObject.declaredClass||"esri.layers.ArcGISTiledMapServiceLayer"===b.layerObject.declaredClass||"esri.layers.FeatureCollection"===b.layerObject.declaredClass)&&(b=this._layerChooserFromMap.getLayerAssociateDomNodesById(b.id))&&g.addClass(b.collapseIcon,"transparent")},this),this.own(l(this._layerChooserFromMap,
"tree-click",e.hitch(this,function(){var b=this._layerChooserFromMap.getState();this._setDefaultLayerByState(b);this._isLayersChooserStateEmpty()&&(this.swipeLayers.set("options",[{value:"",label:""}]),this.swipeLayers.reset(),this.defaultLayersSelector.reset())}))));a=this._getOptionsFromState(this.config.layerState);this._isSelectedLayerInOptions(a)&&this.swipeLayers.set("value",this.config.layer);this.config.defaultLayers||(this.config.defaultLayers=[]);this.defaultLayersSelector.setConfig(this.config.defaultLayers)},
getConfig:function(a){a.layerMode=this.multipleLayerRaido.checked?"mult":"single";a.layer=this.swipeLayers.get("value");a.defaultLayers=this.defaultLayersSelector.getConfig();a.layerState=this._layerChooserFromMap.getState();return this.config},setLayerInfoText:function(a){this.layerTextNode.innerHTML=z.sanitizeHTML(a)},_getLayerInfoObj:function(a){return m.getInstance(a,a.itemInfo).then(e.hitch(this,function(b){this._layerInfosObj=b;b=this._layerInfosObj.getLayerInfoArray();b=h.filter(b,e.hitch(this,
function(c){if(!this._isNewAddedLayer(c))return!0}));b=h.map(b,function(c){return{label:c.title,value:c.id}});this.swipeLayers.set("options",b);this.defaultLayersSelector.setOptions(b)}))},_isSelectedLayerInOptions:function(a){for(var b=this.config.layer||this.swipeLayers.getValue(),c=0,d=a.length;c<d;c++)if(a[c].value===b)return!0;return!1},_setDefaultLayerByState:function(a){"undefined"===typeof a||null===a?this.defaultLayersSelector.initOptions(this.swipeLayers.getOptions(),!0):(a=this._getOptionsFromState(a,
!0),this.swipeLayers.set("options",e.clone(a)),this._isSelectedLayerInOptions(a)&&0!==a.length?this.swipeLayers.setValue(this.config.layer||this.swipeLayers.getValue()):this.swipeLayers.reset(),this.defaultLayersSelector.initOptions(a,!0))},_getOptionsFromState:function(a,b){var c=[];if(!a)return c;for(var d in a)if(a.hasOwnProperty(d)){var k=a[d];if(!0===k.selected){var f=this._layerInfosObj.getLayerInfoById(d);f&&!this._isNewAddedLayer(f)&&(f=f.title)&&(f={value:d,label:f},b&&k.selected&&(f.selected=
!0),c.push(f))}}return c},_isNewAddedLayer:function(a){for(var b=this._layerInfosObj.getLayerInfoArrayOfWebmap(),c=0,d=b.length;c<d;c++)if(b[c].id===a.id)return!1;return!0},_isLayersChooserStateEmpty:function(){return 0===this._getOptionsFromState(this._layerChooserFromMap.getState()).length?!0:!1}})});