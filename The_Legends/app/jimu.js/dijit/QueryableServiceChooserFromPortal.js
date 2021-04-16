// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/QueryableServiceChooserFromPortal.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"selector-container" data-dojo-attach-point\x3d"selectorContainer"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"service-browser-container" data-dojo-attach-point\x3d"serviceBrowserContainer"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"footer"\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn jimu-float-trailing cancel jimu-btn-vacation" data-dojo-attach-point\x3d"btnCancel" data-dojo-attach-event\x3d"onclick:_onBtnCancelClicked"\x3e${nls.cancel}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn jimu-float-trailing next jimu-state-disabled" data-dojo-attach-point\x3d"btnNext" data-dojo-attach-event\x3d"onclick:_onBtnNextClicked"\x3e${nls.next}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn jimu-float-trailing ok jimu-state-disabled" data-dojo-attach-point\x3d"btnOk" data-dojo-attach-event\x3d"onclick:_onBtnOkClicked"\x3e${nls.ok}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn jimu-float-trailing back" data-dojo-attach-point\x3d"btnBack" data-dojo-attach-event\x3d"onclick:_onBtnBackClicked"\x3e${nls.back}\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/QueryableServiceChooserFromPortal.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojo/Deferred dojo/Evented dojo/promise/all jimu/dijit/ItemSelector jimu/dijit/QueryableServiceBrowser jimu/portalUrlUtils esri/request".split(" "),function(d,e,f,g,h,b,a,k,c,q,r,l,t,m,n,p,u){return d([e,f,g,l],{templateString:h,declaredClass:"jimu.dijit.QueryableServiceChooserFromPortal",
baseClass:"jimu-service-chooser-from-portal jimu-queryable-service-chooser-from-portal",_serviceBrowserDef:null,portalUrl:null,multiple:!1,postMixInProperties:function(){this.nls=b.mixin({},window.jimuNls.common);this.nls=b.mixin(this.nls,window.jimuNls.featureLayerChooserFromPortal);this.portalUrl=p.getStandardPortalUrl(this.portalUrl);this.multiple=!0===this.multiple?!0:!1},postCreate:function(){this.inherited(arguments);this._initSelf()},getSelectedItems:function(){return this.serviceBrowser.getSelectedItems()},
_initSelf:function(){this.selector=new m({portalUrl:this.portalUrl,itemTypes:["Feature Service","Map Service","Image Service"],onlyShowOnlineFeaturedItems:!1});this.own(c(this.selector,"item-selected",b.hitch(this,this._onItemSelected)));this.own(c(this.selector,"none-item-selected",b.hitch(this,this._onNoneItemSelected)));this.selector.placeAt(this.selectorContainer);this.selector.startup();this.serviceBrowser=new n({multiple:this.multiple});this.own(c(this.serviceBrowser,"tree-click",b.hitch(this,
this._onServiceBrowserClicked)));this.serviceBrowser.placeAt(this.serviceBrowserContainer);this.serviceBrowser.startup()},_onItemSelected:function(){a.removeClass(this.btnNext,"jimu-state-disabled")},_onNoneItemSelected:function(){a.addClass(this.btnNext,"jimu-state-disabled")},_onBtnBackClicked:function(){this._serviceBrowserDef&&!this._serviceBrowserDef.isFulfilled()&&this._serviceBrowserDef.cancel();a.setStyle(this.btnOk,"display","none");a.setStyle(this.btnNext,"display","block");a.setStyle(this.btnBack,
"display","none");a.addClass(this.btnOk,"jimu-state-disabled");a.setStyle(this.selectorContainer,"display","block");a.setStyle(this.serviceBrowserContainer,"display","none");this.serviceBrowser.reset();this.emit("back")},_onBtnOkClicked:function(){var a=this.selector.getSelectedItem(),c=this.getSelectedItems();a&&0<c.length&&(k.forEach(c,b.hitch(this,function(b){b.portalUrl=a.portalUrl;b.itemId=a.id})),this.emit("ok",c))},_onBtnNextClicked:function(){var c=this.selector.getSelectedItem();c&&(a.setStyle(this.btnNext,
"display","none"),a.setStyle(this.btnBack,"display","block"),a.setStyle(this.btnOk,"display","block"),a.addClass(this.btnOk,"jimu-state-disabled"),a.setStyle(this.selectorContainer,"display","none"),a.setStyle(this.serviceBrowserContainer,"display","block"),this.serviceBrowser.reset(),this._serviceBrowserDef=this.serviceBrowser.setUrl(c.url||c.item),this._serviceBrowserDef.then(b.hitch(this,function(){this._serviceBrowserDef=null;this._setOkStateBySelectedItems()}),b.hitch(this,function(){this._serviceBrowserDef=
null})),this.emit("next"))},_setOkStateBySelectedItems:function(){0<this.serviceBrowser.getSelectedItems().length?a.removeClass(this.btnOk,"jimu-state-disabled"):a.addClass(this.btnOk,"jimu-state-disabled")},_onServiceBrowserClicked:function(){this._setOkStateBySelectedItems()},_onBtnCancelClicked:function(){this.emit("cancel")}})});