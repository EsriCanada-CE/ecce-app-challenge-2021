// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/GriddedReferenceGraphic/templates/ConfirmNotation.html":'\x3cdiv class\x3d\'coordinateContainer\'\x3e\r\n    \x3cspan class\x3d\'jimu-widget-subtitle\' data-dojo-attach-point\x3d\'label1\'\x3e\x3c/span\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n        \x3cdiv class\x3d"controlItem" style\x3d"padding-top: 10px;"\x3e\r\n            \x3cselect style\x3d"width: 225px" data-dojo-type\x3d"jimu/dijit/formSelect" data-dojo-attach-point\x3d"comboOptions"\x3e\r\n            \x3c/select\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/ConfirmNotation.html jimu/utils".split(" "),function(c,b,d,e,f,g){return c([b,d,e],{templateString:f,numberOfInputs:0,selectOptions:{},constructor:function(a,b){c.safeMixin(this,b);this.numberOfInputs=a.length;this.selectOptions=a},postCreate:function(){this.label1.innerHTML=g.sanitizeHTML(this.numberOfInputs)+" "+this.nls.notationsMatch;for(var a=0;a<this.selectOptions.length;a++)this.comboOptions.addOption({value:this.selectOptions[a].name,
label:this.selectOptions[a].notationType})}})});