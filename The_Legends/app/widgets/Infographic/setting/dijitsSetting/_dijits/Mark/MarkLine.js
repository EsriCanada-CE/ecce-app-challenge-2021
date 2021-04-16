// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/Mark/MarkLine.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"mark-row"\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e${nls.valueString}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e\r\n\t\t\t\x3cinput class\x3d"mark-input"  data-dojo-type\x3d"dijit/form/NumberTextBox" required data-dojo-attach-point\x3d"valueInput" data-dojo-attach-event\x3d"change:_onValueChanged" /\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"mark-row"\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e${nls.labelString}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e\r\n\t\t\t\x3cinput class\x3d"mark-input" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"labelInput" data-dojo-attach-event\x3d"change:_onChange" /\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"mark-row"\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e${nls.labelColor}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"labelColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting"  data-dojo-attach-event\x3d"change:_onChange"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"mark-row"\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e${nls.labelPosition}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-center-sb line-pos"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"posStart" data-dojo-attach-event\x3d"click:_onPosStartClicked" class\x3d"box box-3 box-style textOverFlow jimu-auto-vertical" title\x3d"${nls.start}"\x3e${nls.start}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"posMiddle" data-dojo-attach-event\x3d"click:_onPosMiddleClicked" class\x3d"box box-3 box-style textOverFlow jimu-auto-vertical" title\x3d"${nls.middle}"\x3e${nls.middle}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"posEnd" data-dojo-attach-event\x3d"click:_onPosEndClicked" class\x3d"box box-3 box-style textOverFlow jimu-auto-vertical" title\x3d"${nls.end}"\x3e${nls.end}\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"mark-row"\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e${nls.lineColor}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"lineColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onChange"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"mark-row"\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e${nls.lineWidth}\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"lineWidthSliderDiv" class\x3d"mark-col"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"mark-row"\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e${nls.dashType}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"mark-col"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"dashType" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/Mark/DashTypeSelect" data-dojo-props\x3d"folderUrl:\'${folderUrl}\'" data-dojo-attach-event\x3d"change:_onChange"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dojo/Evented dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./MarkLine.html dojo/on dojo/_base/html dojo/_base/lang ../VisibleSliderBar jimu/utils ./DashTypeSelect dijit/form/TextBox dijit/form/NumberTextBox ../ChartColorSetting".split(" "),function(h,l,m,n,p,q,r,b,t,u,v){return h([l,m,n,p],{baseClass:"infographic-setting-mark-line",templateString:q,nls:null,_defaultLineColor:"#68D2E0",_defaultLineWidth:1,postCreate:function(){this.inherited(arguments);
this.ignoreEvent=!0;this._initDom();setTimeout(function(){this.ignoreEvent=!1}.bind(this),200);this.setConfig(this.config)},_initDom:function(){this.lineWidthSlider=new u({min:1,max:10,step:1,value:1});this.own(r(this.lineWidthSlider,"change",t.hitch(this,this._onChange)));this.lineWidthSlider.placeAt(this.lineWidthSliderDiv);this._cleanUI()},isValid:function(){return this.valueInput.isValid()},_cleanUI:function(){this.valueInput.set("value","");this.labelInput.set("value","");this.labelColor.setSingleColor(this.defaultColor);
this._selectPosition("end");this.lineColor.setSingleColor(this._defaultLineColor);this.lineWidthSlider.setValue(this._defaultLineWidth);this.dashType.setValue("solid")},setConfig:function(a){if(a){this.ignoreEvent=!0;this._cleanUI();var k="bar"===this.chartType?a.xAxis:a.yAxis,b=a.name,d=a.label&&a.label.color,e=a.label&&a.label.position,f=a.lineStyle&&a.lineStyle.color,g=a.lineStyle&&a.lineStyle.width;a=a.lineStyle&&a.lineStyle.type;"undefined"!==typeof k&&this.valueInput.set("value",k);"undefined"!==
typeof b&&this.labelInput.set("value",b);"undefined"!==typeof d&&this.labelColor.setSingleColor(d);"undefined"!==typeof e&&this._selectPosition(e);"undefined"!==typeof f&&this.lineColor.setSingleColor(f);"undefined"!==typeof g&&this.lineWidthSlider.setValue(g);"undefined"!==typeof a&&this.dashType.setValue(a);setTimeout(function(){this.ignoreEvent=!1}.bind(this),200)}},_showInputError:function(){var a=this.valueInput.getErrorMessage();this.valueInput.displayMessage(a)},getConfig:function(){if(!this.isValid())return this._showInputError(),
!1;var a={},b=this.valueInput.get("value"),b=Number(b),c=this.labelInput.get("value"),c=v.sanitizeHTML(c),d=this.labelColor.getSingleColor(),e=this._getPosition(),f=this.lineColor.getSingleColor(),g=this.lineWidthSlider.getValue(),h=this.dashType.getValue();"bar"===this.chartType?a.xAxis=b:a.yAxis=b;a.name=c;b={show:!!c};b.position=e;b.color=d;a.label=b;a.lineStyle={color:f,width:g,type:h};return a},_onChange:function(){if(!this.ignoreEvent){if(!this.isValid())return this._showInputError(),!1;this.emit("change")}},
_onValueChanged:function(a){!this.ignoreEvent&&this.isValid()&&(this.emit("value-change",a),this._onChange())},_selectPosition:function(a){b.removeClass(this.posStart,"selected");b.removeClass(this.posMiddle,"selected");b.removeClass(this.posEnd,"selected");"start"===a?b.addClass(this.posStart,"selected"):"middle"===a?b.addClass(this.posMiddle,"selected"):"end"===a&&b.addClass(this.posEnd,"selected");this._onChange()},_getPosition:function(){if(b.hasClass(this.posStart,"selected"))return"start";if(b.hasClass(this.posMiddle,
"selected"))return"middle";if(b.hasClass(this.posEnd,"selected"))return"end"},_onPosStartClicked:function(a){a.stopPropagation();this._selectPosition("start")},_onPosMiddleClicked:function(a){a.stopPropagation();this._selectPosition("middle")},_onPosEndClicked:function(a){a.stopPropagation();this._selectPosition("end")}})});