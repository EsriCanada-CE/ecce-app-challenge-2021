// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/Mark/DashTypeSelect.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"dashSelect" class\x3d"restrict-select-width" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onDashTypeChanged" style\x3d"width:100%;height:30x;"\x3e\r\n    \x3cspan style\x3d"width: 100%" data-dojo-value\x3d\'solid\'\x3e\r\n      \x3cimg  style\x3d"width:100%;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${folderUrl}/setting/css/images/line-solid.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan style\x3d"width: 100%" data-dojo-value\x3d\'dashed\'\x3e\r\n      \x3cimg  style\x3d"width:100%;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${folderUrl}/setting/css/images/line-dashed.png" /\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan style\x3d"width: 100%" data-dojo-value\x3d\'dotted\'\x3e\r\n      \x3cimg  style\x3d"width:100%;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src\x3d"${folderUrl}/setting/css/images/line-dotted.png" /\x3e\r\n    \x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./DashTypeSelect.html dijit/form/Select".split(" "),function(b,c,d,e,f,g){return c([d,e,f,b],{templateString:g,baseClass:"mark-dash-type",getValue:function(){return this.dashSelect.get("value")},setValue:function(a){this.ignoreEvent=!0;this.dashSelect.set("value",a);setTimeout(function(){this.ignoreEvent=!1}.bind(this),200)},_onDashTypeChanged:function(){if(!this.ignoreEvent){var a=
this.getValue();this.emit("change",a)}}})});