// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NetworkTrace/setting/SymbolChooserPopup.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTSymbolChooserContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"symbolData" title\x3d"${symbolChooserTitle}" class\x3d"common-input esriCTSymbolData"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"buttonsDiv" class\x3d"buttonsDiv"\x3e\r\n        \x3cdiv class\x3d"button-container button-container-absolute" style\x3d"padding: 0px;"\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"okButton"\x3e\r\n                ${nls.common.ok}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/on dojo/text!./SymbolChooserPopup.html jimu/dijit/SymbolChooser jimu/dijit/Popup dojo/domReady!".split(" "),function(a,b,c,d,e,f,g,h,k,l){return a([b,c],{templateString:h,baseClass:"jimu-widget-NetworkTrace-setting",postCreate:function(){this.own(g(this.okButton,"click",d.hitch(this,this._onOKButtonClicked)));this._initSymbolChooser();this._createSymbolChooserPopup()},
_initSymbolChooser:function(){this.symbolChooser=new k(this.symbolParams,f.create("div",{},this.symbolData));this.symbolChooser.startup()},_createSymbolChooserPopup:function(){this.popup=new l({titleLabel:this.symbolChooserTitle,width:420,height:400,content:this.domNode})},_onOKButtonClicked:function(){if(!e.contains(this.okButton,"jimu-state-disabled"))this.onOkClick()},onOkClick:function(a){return a}})});