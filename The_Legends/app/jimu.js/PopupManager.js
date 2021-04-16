// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/Deferred dojo/topic dojo/on dojo/query ./FeatureActionManager ./utils ./dijit/FeatureActionPopupMenu ./RelatedRecordsPopupProjector ./LayerInfos/LayerInfos".split(" "),function(l,c,b,m,d,e,h,n,p,q,r,t){var f=null,g=l(null,{mapManager:null,popupUnion:null,_relatedRecordsPopupProjector:null,constructor:function(a){c.mixin(this,a);this.popupMenu=q.getInstance();this.isInited=!1;this.featureActionManager=n.getInstance();d.subscribe("mapLoaded",
c.hitch(this,this.onMapLoadedOrChanged));d.subscribe("mapChanged",c.hitch(this,this.onMapLoadedOrChanged));d.subscribe("appConfigChanged",c.hitch(this,this._onAppConfigChanged));d.subscribe("widgetsActionsRegistered",c.hitch(this,this._onWidgetsActionsRegistered))},init:function(){this.popupUnion=this.mapManager.getMapInfoWindow();this.popupUnion.bigScreen&&this.popupUnion.mobile&&this.popupUnion.bigScreen.domNode&&this.popupUnion.mobile.domNode&&!this.isInited&&(this._createPopupMenuButton(),this._bindSelectionChangeEvent(),
this.isInited=!0)},_createPopupMenuButton:function(){this.popupMenuButtonDesktop&&b.destroy(this.popupMenuButtonDesktop);this.popupMenuButtonMobile&&b.destroy(this.popupMenuButtonMobile);this.popupMenuButtonDesktop=b.create("span",{"class":"popup-menu-button"},h(".actionList",this.popupUnion.bigScreen.domNode)[0]);var a=h("div.esriMobileInfoView.esriMobilePopupInfoView .esriMobileInfoViewItem").parent()[0],a=b.create("div",{"class":"esriMobileInfoViewItem"},a);this.popupMenuButtonMobile=b.create("span",
{"class":"popup-menu-button"},a);e(this.popupMenuButtonMobile,"click",c.hitch(this,this._onPopupMenuButtonClick));e(this.popupMenuButtonDesktop,"click",c.hitch(this,this._onPopupMenuButtonClick))},_onPopupMenuButtonClick:function(a){a=b.position(a.target);this.menuActionsOfSelectedFeature&&this.popupMenu.setActions(this.menuActionsOfSelectedFeature);this.popupMenu.show(a)},_bindSelectionChangeEvent:function(){e(this.popupUnion.bigScreen,"selection-change",c.hitch(this,this._onSelectionChange));e(this.popupUnion.mobile,
"selection-change",c.hitch(this,this._onSelectionChange))},_onSelectionChange:function(a){(this.selectedFeature=a.target.getSelectedFeature())?(this.initPopupMenu([this.selectedFeature]),a=this.selectedFeature.getLayer(),(this.selectedFeature.infoTemplate||a&&a.infoTemplate)&&this._createRelatedRecordsPopupProjector(this.selectedFeature)):this._disablePopupMenu()},_disablePopupMenu:function(){b.addClass(this.popupMenuButtonDesktop,"disabled");b.addClass(this.popupMenuButtonMobile,"disabled")},_enablePopupMenu:function(){b.removeClass(this.popupMenuButtonDesktop,
"disabled");b.removeClass(this.popupMenuButtonMobile,"disabled")},convertFeatures:function(a){var c=new m,b=t.getInstanceSync(),k=a&&a[0]&&a[0].getLayer();(b=b.getLayerInfoById(k&&k.id))?c=b.getMSShipFeatures(a):c.resolve(null);return c},initPopupMenu:function(a){a?this.convertFeatures(a).then(c.hitch(this,function(b){var d=p.toFeatureSet(b||a);this.featureActionManager.getSupportedActions(d).then(c.hitch(this,function(a){var b="ZoomTo ShowPopup Flash ExportToCSV ExportToFeatureCollection ExportToGeoJSON ShowRelatedRecords SaveToMyContent CreateLayer".split(" ");
a=a.filter(c.hitch(this,function(a){return 0>b.indexOf(a.name)}));0===a.length?this._disablePopupMenu():this._enablePopupMenu();this.menuActionsOfSelectedFeature=a=a.map(c.hitch(this,function(a){a.data=d;return a}));this.popupMenu.setActions(a)}))})):(this._disablePopupMenu(),this.popupMenu.setActions([]))},onMapLoadedOrChanged:function(){this.isInited=!1;this.init()},_onAppConfigChanged:function(){this.popupUnion&&(this.popupUnion.bigScreen&&this.popupUnion.bigScreen.hide&&(this.popupUnion.bigScreen.hide(),
this.popupMenu.hide()),this.popupUnion.mobile&&this.popupUnion.mobile.hide&&(this.popupUnion.mobile.hide(),this.popupMenu.hide()))},_onWidgetsActionsRegistered:function(){this.init()},_createRelatedRecordsPopupProjector:function(a){try{this._relatedRecordsPopupProjector&&this._relatedRecordsPopupProjector.domNode&&(this._relatedRecordsPopupProjector.destroy(),this._relatedRecordsPopupProjector=null),this._relatedRecordsPopupProjector=new r({originalFeature:a,popup:this.mapManager.map.infoWindow,popupManager:this})}catch(u){console.warn(u.message)}}});
g.getInstance=function(a){null===f&&(f=new g({mapManager:a}));return f};return g});