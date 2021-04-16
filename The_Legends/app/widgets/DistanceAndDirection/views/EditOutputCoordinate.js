// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DistanceAndDirection/templates/EditOutputCoordinate.html":'\x3cdiv\x3e\r\n  \x3cspan class\x3d\'jimu-widget-subtitle\'\x3e${nls.setCoordFormatStringMessage}\x3c/span\x3e\r\n  \x3cdiv class\x3d"controlContainer"\x3e\r\n    \x3cselect class\x3d"selectFormat esriCTDropdownObj" name\x3d"test" data-dojo-type\x3d\'jimu/dijit/formSelect\'\r\n      data-dojo-attach-point\x3d"frmtSelect" aria-label\x3d"${nls.setCoordFormatStringMessage}"\x3e\r\n      \x3coption value\x3d"DD"\x3e${nls.ddLabel}\x3c/option\x3e\r\n      \x3coption value\x3d"DDM"\x3e${nls.ddmLabel}\x3c/option\x3e\r\n      \x3coption value\x3d"DMS"\x3e${nls.dmsLabel}\x3c/option\x3e\r\n      \x3coption value\x3d"GARS"\x3e${nls.garsLabel}\x3c/option\x3e\r\n      \x3coption value\x3d"GEOREF"\x3e${nls.georefLabel}\x3c/option\x3e\r\n      \x3coption value\x3d"MGRS"\x3e${nls.mgrsLabel}\x3c/option\x3e\r\n      \x3coption value\x3d"USNG"\x3e${nls.usngLabel}\x3c/option\x3e\r\n      \x3coption value\x3d"UTM"\x3e${nls.utmLabel}\x3c/option\x3e\r\n      \x3coption value\x3d"UTM (H)"\x3e${nls.utmhLabel}\x3c/option\x3e\r\n    \x3c/select\x3e\r\n    \x3cinput type\x3d"text" data-dojo-attach-point\x3d"frmtVal" class\x3d"formatInput esriCTInputObj"\r\n      aria-label\x3d"${nls.setCoordFormatStringMessage}"\x3e\x3c/input\x3e\r\n    \x3cdiv class\x3d\'settingsContainer\' data-dojo-attach-point\x3d"prefixContainer"\x3e\r\n      \x3cinput data-dojo-attach-point\x3d"addSignChkBox" type\x3d"checkbox" aria-label\x3d"${nls.prefixMessage}"\r\n        class\x3d"esriCTCheckboxObj"\x3e\r\n      \x3clabel class\x3d"formatText"\x3e${nls.prefixMessage}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"btnContainer"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"applyButton" class\x3d\'jimu-btn esriCTButtonObj\' tabindex\x3d"0"\r\n      aria-label\x3d"${nls.common.ok}" role\x3d"button"\x3e\r\n      ${nls.common.ok}\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"cancelButton" class\x3d\'jimu-btn esriCTButtonObj\' tabindex\x3d"0"\r\n      aria-label\x3d"${nls.common.cancel}" role\x3d"button"\x3e${nls.common.cancel}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/on dojo/dom-attr dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/EditOutputCoordinate.html jimu/dijit/formSelect jimu/dijit/CheckBox".split(" "),function(f,d,e,g,c,h,k,l,m){return f([h,k,l],{templateString:m,formats:{},ct:"DD",_setCtAttr:function(a){this.frmtSelect.set("value",a)},postCreate:function(){this.formats={DD:{defaultFormat:"YN XE",customFormat:null,useCustom:!1},DDM:{defaultFormat:"A\u00b0 B'N X\u00b0 Y'E",
customFormat:null,useCustom:!1},DMS:{defaultFormat:"A\u00b0 B' C\"N X\u00b0 Y' Z\"E",customFormat:null,useCustom:!1},GARS:{defaultFormat:"XYQK",customFormat:null,useCustom:!1},GEOREF:{defaultFormat:"ABCDXY",customFormat:null,useCustom:!1},MGRS:{defaultFormat:"ZSXY",customFormat:null,useCustom:!1},USNG:{defaultFormat:"ZSXY",customFormat:null,useCustom:!1},UTM:{defaultFormat:"ZB X Y",customFormat:null,useCustom:!1},"UTM (H)":{defaultFormat:"ZH X Y",customFormat:null,useCustom:!1}};c.set(this.frmtVal,
"value",this.formats[this.ct].defaultFormat);this.own(this.frmtSelect.on("change",d.hitch(this,this.frmtSelectValueDidChange)));this.own(g(this.frmtVal,"change",d.hitch(this,this.formatValDidChange)));this.displayPrefixContainer()},formatValDidChange:function(){var a=c.get(this.frmtVal,"value"),b=this.frmtSelect.get("value");this.formats[b].customFormat=a;this.formats[b].useCustom=!0;this.currentformat=a},frmtSelectValueDidChange:function(){var a=this.frmtSelect.get("value"),b=this.formats[a].useCustom?
this.formats[a].customFormat:this.formats[a].defaultFormat;this.ct=a;c.set(this.frmtVal,"value",b);this.displayPrefixContainer()},displayPrefixContainer:function(){switch(this.frmtSelect.get("value")){case "DD":case "DDM":case "DMS":e.set(this.prefixContainer,{display:""});break;default:e.set(this.prefixContainer,{display:"none"})}}})});