// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/DistanceAndDirection/templates/TabCircle.html":'\x3cdiv class\x3d"tabPanel" data-dojo-attach-point\x3d"circleContainer"\x3e\r\n  \x3cdiv class\x3d"controls"\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel\x3e${nls.circleTitle}\x3c/label\x3e\r\n      \x3cdiv class\x3d"controlItem"\x3e\r\n        \x3cselect aria-label\x3d"${nls.circleTitle}" style\x3d"width:100%;" data-dojo-type\x3d"jimu/dijit/formSelect"\r\n          data-dojo-attach-point\x3d"creationType" class\x3d"esriCTDropdownObj"\x3e\r\n          \x3coption value\x3d"Radius" selected\x3d"selected"\x3e${nls.radiusLabel}\x3c/option\x3e\r\n          \x3coption value\x3d"Diameter"\x3e${nls.diameterLabel}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"coordInputLabel"\x3e${nls.centerPointLabel}\x3c/label\x3e\r\n      \x3cdiv class\x3d"controlItem"\x3e\r\n        \x3cdiv class\x3d"jimu-input coordInput" data-dojo-attach-point\x3d"startPointCoords"\r\n          placeholder\x3d"${nls.startPointPlaceHolderLabel}" role\x3d"textbox"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"controlItem paddedLeft"\x3e\r\n          \x3cdiv class\x3d\'add-with-icon\'\x3e\r\n            \x3cspan title\x3d"${nls.formatInputLabel}" class\x3d"jimu-icon settingBtn safariOnly"\r\n              data-dojo-attach-point\x3d"coordinateFormatButton" tabindex\x3d"0" role\x3d"button"\r\n              aria-label\x3d"${nls.formatInputLabel}"\x3e\x3c/span\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d\'add-with-icon\'\x3e\r\n            \x3cdiv title\x3d"${nls.drawCircleLabel}" class\x3d"drawPointBtn" data-dojo-attach-point\x3d"addPointBtn" tabindex\x3d"0"\r\n              role\x3d"button" aria-label\x3d"${nls.drawCircleLabel}"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"controlGroup"\x3e\r\n        \x3cinput aria-label\x3d"${nls.createCircleInteractivelyLabel}" class\x3d"interactive-checkbox esriCTCheckboxObj"\r\n          type\x3d"checkbox" data-dojo-attach-point\x3d"interactiveCircle"\r\n          aria-label\x3d"${nls.createCircleInteractivelyLabel}" /\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"interactiveLabel"\x3e${nls.createCircleInteractivelyLabel}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"radiusDiameterLabel"\x3e${nls.radiusLabel}\x3c/label\x3e\r\n      \x3cdiv class\x3d"controlItem" data-dojo-attach-point\x3d"radiusInputDiv"\x3e\r\n        \x3cinput aria-label\x3d"${nls.radiusLabel}" style\x3d"width: calc(100% - 108px);"\r\n          data-dojo-type\x3d\'dijit/form/NumberTextBox\' required\x3d"true" value\x3d"1000" data-dojo-props\x3d"constraints: {min: 1}"\r\n          data-dojo-attach-point\x3d"radiusInput"\x3e\r\n        \x3c/input\x3e\r\n        \x3cselect aria-label\x3d"${nls.radiusLabel}" style\x3d"width: 100px" class\x3d"controlSpace noResize"\r\n          data-dojo-type\x3d"jimu/dijit/formSelect" data-dojo-attach-point\x3d"lengthUnitDD"\x3e\r\n          \x3coption value\x3d"feet"\x3e${nls.units.feet}\x3c/option\x3e\r\n          \x3coption value\x3d"kilometers"\x3e${nls.units.kilometers}\x3c/option\x3e\r\n          \x3coption value\x3d"miles"\x3e${nls.units.miles}\x3c/option\x3e\r\n          \x3coption value\x3d"meters" selected\x3d"selected"\x3e${nls.units.meters}\x3c/option\x3e\r\n          \x3coption value\x3d"nautical-miles"\x3e${nls.units.nauticalMiles}\x3c/option\x3e\r\n          \x3coption value\x3d"yards"\x3e${nls.units.yards}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup" data-dojo-attach-point\x3d\'distCalcControlDiv\'\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d\'distCalcControl\' data-dojo-type\x3d"dijit/TitlePane" data-dojo-props\x3d"open: false"\x3e\r\n        \x3cdiv class\x3d"controlGroup"\x3e\r\n          \x3clabel\x3e${nls.timeLabel}\r\n            \x3clabel\x3e\r\n              \x3cdiv class\x3d"controlItem"\x3e\r\n                \x3cinput aria-label\x3d"${nls.timeLabel}" style\x3d\'width: calc(100% - 108px);\' data-dojo-type\x3d\'dijit/form/NumberTextBox\'\r\n                  required\x3d"true" value\x3d"1" data-dojo-props\x3d"constraints: {min: 1}" data-dojo-attach-point\x3d"timeInput"\x3e\r\n                \x3c/input\x3e\r\n                \x3cselect aria-label\x3d"${nls.timeLabel}" class\x3d"controlSpace noResize"\r\n                  data-dojo-type\x3d"jimu/dijit/formSelect" data-dojo-attach-point\x3d"timeUnitDD"\x3e\r\n                  \x3coption value\x3d"3600"\x3e${nls.hoursLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"60" selected\x3d"selected"\x3e${nls.minutesLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"1"\x3e${nls.secondsLabel}\x3c/option\x3e\r\n                \x3c/select\x3e\r\n              \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"controlGroup"\x3e\r\n          \x3clabel\x3e${nls.rateLabel}\r\n            \x3clabel\x3e\r\n              \x3cdiv class\x3d"controlItem"\x3e\r\n                \x3cinput aria-label\x3d"${nls.rateLabel}" style\x3d\'width: calc(100% - 108px)\' data-dojo-type\x3d\'dijit/form/NumberTextBox\'\r\n                  required\x3d"true" value\x3d"1" data-dojo-props\x3d"constraints: {min: 1}"\r\n                  data-dojo-attach-point\x3d"distanceInput"\x3e\r\n                \x3c/input\x3e\r\n                \x3cselect aria-label\x3d"${nls.rateLabel}" class\x3d"controlSpace noResize"\r\n                  data-dojo-type\x3d"jimu/dijit/formSelect" data-dojo-attach-point\x3d"distanceUnitDD"\x3e\r\n                  \x3coption value\x3d"0.3048;1"\x3e${nls.feetSecondsLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"0.3048;3600"\x3e${nls.feetHourLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"1000;1"\x3e${nls.kmSecondLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"1000;3600"\x3e${nls.kmHourLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"1;1" selected\x3d"selected"\x3e${nls.metersSecondLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"1;3600"\x3e${nls.metersHourLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"1609.344;1"\x3e${nls.milesSecondLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"1609.344;3600"\x3e${nls.milesHourLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"1852;1"\x3e${nls.nauticalMilesSecondLabel}\x3c/option\x3e\r\n                  \x3coption value\x3d"1852;3600"\x3e${nls.nauticalMilesHourLabel}\x3c/option\x3e\r\n                \x3c/select\x3e\r\n              \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"buttonContainer"\x3e\r\n      \x3cdiv class\x3d\'jimu-btn jimu-state-disabled\' data-dojo-attach-point\x3d\'okButton\' style\x3d"width: 49%;"\r\n        data-dojo-attach-event\x3d"onclick: okButtonClicked" aria-label\x3d"${nls.common.ok}" role\x3d"button"\x3e${nls.common.ok}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d\'jimu-btn\' tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.clearGraphicsLabel}" style\x3d"width: 49%;"\r\n        data-dojo-attach-point\x3d\'clearGraphicsButton\'\x3e${nls.clearGraphicsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/kernel dojo/on dojo/topic dojo/has dojo/touch dojo/dom-attr dojo/dom-class dojo/string dojo/mouse dojo/number dojo/keys dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/TooltipDialog dijit/popup jimu/dijit/Message jimu/LayerInfos/LayerInfos esri/layers/FeatureLayer esri/symbols/SimpleFillSymbol esri/symbols/SimpleMarkerSymbol esri/symbols/TextSymbol esri/graphic esri/geometry/Polyline esri/geometry/Polygon esri/geometry/Point esri/geometry/Circle esri/tasks/FeatureSet esri/layers/LabelClass ../models/CircleFeedback ../views/CoordinateInput ../views/EditOutputCoordinate dojo/text!../templates/TabCircle.html jimu/utils dijit/focus dojo/_base/event dojo/aspect dijit/form/NumberTextBox jimu/dijit/formSelect jimu/dijit/CheckBox dijit/TitlePane".split(" "),
function(r,c,w,d,p,x,y,n,l,z,A,t,f,B,C,D,E,h,u,v,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,q,g,k,U){return r([B,C,D],{templateString:T,baseClass:"jimu-widget-TabCircle",_restrictFocusOnAddCenterPointBtn:!1,_centerPointInputKeyPressed:!1,constructor:function(a){r.safeMixin(this,a)},postCreate:function(){this._centerPointInputKeyPressed=this._restrictFocusOnAddCenterPointBtn=this.useCalculatedDistance=!1;this.currentLengthUnit=this.lengthUnitDD.get("value");this._circleSym=new G(this.circleSymbol);this._ptSym=
new H(this.pointSymbol);this._labelSym=new I(this.labelSymbol);this.map.addLayer(this.getLayer());if(this._gl.loaded){var a=v.getInstanceSync().getLayerInfoById("Distance \x26 Direction - Circle Graphics");a.showLabels();a.enablePopup()}else this._gl.on("load",c.hitch(this,function(){var b=v.getInstanceSync().getLayerInfoById("Distance \x26 Direction - Circle Graphics");b.showLabels();b.enablePopup()}));this.coordTool=new R({appConfig:this.appConfig,nls:this.nls,"aria-label":this.nls.centerPointLabel},
this.startPointCoords);this.coordTool.inputCoordinate.formatType="DD";this.coordinateFormat=new E({content:new S({nls:this.nls}),style:"width: 400px"});U.after(this.coordinateFormat,"onClose",c.hitch(this,function(){g.focus(this.coordinateFormatButton);if(this._restrictFocusOnAddCenterPointBtn){var b=this.coordTool.getValue();if(""===b||null===b||void 0===b)this._restrictFocusOnAddCenterPointBtn=!1}}));"DartTheme"===this.appConfig.theme.name&&l.add(this.coordinateFormat.domNode,"dartThemeClaroDijitTooltipContainerOverride");
this.dt=new Q({appConfig:this.appConfig,map:this.map,coordTool:this.coordTool.inputCoordinate.util,nls:this.nls});this.dt.setFillSymbol(this._circleSym);this.syncEvents();this.checkValidInputs();this.radiusInput.invalidMessage=this.nls.numericInvalidMessage;this.radiusInput.rangeMessage=this.nls.rangeErrorMessage;this.timeInput.invalidMessage=this.nls.numericInvalidMessage;this.timeInput.rangeMessage=this.nls.invalidTimeMessage;this.distanceInput.invalidMessage=this.nls.numericInvalidMessage;this.distanceInput.rangeMessage=
this.nls.invalidDistanceMessage;this.distCalcControl.set("title",this.nls.distanceCalculatorLabel)},getLayer:function(){if(!this._gl){var a=new P({labelExpressionInfo:{value:"{Label}"}});a.symbol=this._labelSym;var b={layerDefinition:{id:"circleLayer",geometryType:"esriGeometryPolygon",objectIdField:"ObjectID",fields:[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"Label",type:"esriFieldTypeString",alias:"Label"}]},featureSet:new O};this._gl=new F(b,{id:"Distance \x26 Direction - Circle Graphics",
showLabels:!0,outFields:["*"]});this._gl.setLabelingInfo([a]);return this._gl}},syncEvents:function(){p.subscribe("TAB_SWITCHED",c.hitch(this,this.tabSwitched));p.subscribe("DD-WIDGET-CLOSED",c.hitch(this,this._closeDijit));this.distCalcControl.watch("open",c.hitch(this,this.distCalcDidExpand));this.dt.watch("length",c.hitch(this,function(a,b,e){this.circleLengthDidChange(e)}));this.dt.watch("startPoint",c.hitch(this,function(a,b,e){this.dt.addStartGraphic(e,this._ptSym)}));this.dt.watch("startPointDD",
c.hitch(this,function(a,b,e){this.coordTool.inputCoordinate.set("coordinateEsriGeometry",e);this.coordTool.inputCoordinate.set("inputType",this.coordTool.inputCoordinate.formatType)}));this.dt.watch("endPoint",c.hitch(this,function(a,b,e){this.coordTool.inputCoordinate.set("coordinateEsriGeometry",e)}));this.coordTool.inputCoordinate.watch("outputString",c.hitch(this,function(a,b,e){this.coordTool.manualInput||(this.coordTool.set("value",e),this.currentCircle=null,this._restrictFocusOnAddCenterPointBtn?
this._restrictFocusOnAddCenterPointBtn=!1:this._centerPointInputKeyPressed?this._centerPointInputKeyPressed=!1:g.focus(this.addPointBtn))}));this.dt.on("draw-complete",c.hitch(this,this.feedbackDidComplete));this.own(d(this.coordTool,"keydown",c.hitch(this,this.coordToolKeyWasPressed)),this.lengthUnitDD.on("change",c.hitch(this,this.lengthUnitDDDidChange)),this.creationType.on("change",c.hitch(this,this.creationTypeDidChange)),this.distanceUnitDD.on("change",c.hitch(this,this.distanceInputDidChange)),
this.timeUnitDD.on("change",c.hitch(this,this.timeInputDidChange)),d(this.radiusInput,"change",c.hitch(this,function(){this.currentCircle=null})),d(this.coordinateFormatButton,"click",c.hitch(this,this.coordinateFormatButtonWasClicked)),d(this.coordinateFormatButton,"keydown",c.hitch(this,function(a){if(a.keyCode===f.ENTER||a.keyCode===f.SPACE)k.stop(a),this.coordinateFormatButtonWasClicked()})),d(this.addPointBtn,"keydown",c.hitch(this,function(a){if(a.keyCode===f.ENTER||a.keyCode===f.SPACE)k.stop(a),
this.pointButtonWasClicked()})),d(this.timeInput,"change",c.hitch(this,this.timeInputDidChange)),d(this.distanceInput,"change",c.hitch(this,this.distanceInputDidChange)),d(this.distanceInput,"keyup",c.hitch(this,this.distanceInputKeyWasPressed)),d(this.clearGraphicsButton,"click",c.hitch(this,this.clearGraphics)),d(this.clearGraphicsButton,"keydown",c.hitch(this,function(a){if(a.keyCode===f.ENTER||a.keyCode===f.SPACE)k.stop(a),this.clearGraphics()})),d(this.interactiveCircle,"change",c.hitch(this,
this.interactiveCheckBoxChanged)),d(this.interactiveCircle,"keydown",c.hitch(this,function(a){a.keyCode===f.ENTER&&(this.interactiveCircle.checked=this.interactiveCircle.checked?!1:!0,this.interactiveCheckBoxChanged())})),d(this.coordinateFormat.content.applyButton,"click",c.hitch(this,function(){this._restrictFocusOnAddCenterPointBtn=!0;var a=this.coordinateFormat.content.formats[this.coordinateFormat.content.ct],b=a.defaultFormat,e=this.coordinateFormat.content.frmtSelect.get("value");a.useCustom&&
(b=a.customFormat);this.coordTool.inputCoordinate.set("formatPrefix",this.coordinateFormat.content.addSignChkBox.checked);this.coordTool.inputCoordinate.set("formatString",b);this.coordTool.inputCoordinate.set("formatType",e);this.setCoordLabel(e);h.close(this.coordinateFormat);g.focus(this.coordinateFormatButton)})),d(this.coordinateFormat.content.applyButton,"keydown",c.hitch(this,function(a){if(a.keyCode===f.ENTER||a.keyCode===f.SPACE){k.stop(a);this._restrictFocusOnAddCenterPointBtn=!0;var b=
this.coordinateFormat.content.formats[this.coordinateFormat.content.ct],e=b.defaultFormat,m=this.coordinateFormat.content.frmtSelect.get("value");b.useCustom&&(e=b.customFormat);this.coordTool.inputCoordinate.set("formatPrefix",this.coordinateFormat.content.addSignChkBox.checked);this.coordTool.inputCoordinate.set("formatString",e);this.coordTool.inputCoordinate.set("formatType",m);this.setCoordLabel(m);h.close(this.coordinateFormat);g.focus(this.coordinateFormatButton)}a.keyCode===f.ESCAPE&&(k.stop(a),
h.close(this.coordinateFormat),g.focus(this.coordinateFormatButton))})),d(this.coordinateFormat.content.cancelButton,"click",c.hitch(this,function(){h.close(this.coordinateFormat)})),d(this.coordinateFormat.content.cancelButton,"keydown",c.hitch(this,function(a){if(a.keyCode===f.ENTER||a.keyCode===f.SPACE)k.stop(a),h.close(this.coordinateFormat),g.focus(this.coordinateFormatButton);a.keyCode===f.ESCAPE&&(k.stop(a),h.close(this.coordinateFormat),g.focus(this.coordinateFormatButton))})),d(this.coordinateFormat.content.frmtSelect,
"keydown",c.hitch(this,function(a){a.keyCode===f.ESCAPE&&(k.stop(a),h.close(this.coordinateFormat),g.focus(this.coordinateFormatButton))})),d(this.coordinateFormat.content.frmtVal,"keydown",c.hitch(this,function(a){a.keyCode===f.ESCAPE&&(k.stop(a),h.close(this.coordinateFormat),g.focus(this.coordinateFormatButton))})),d(this.coordinateFormat.content.addSignChkBox,"keydown",c.hitch(this,function(a){a.keyCode===f.ESCAPE&&(k.stop(a),h.close(this.coordinateFormat),g.focus(this.coordinateFormatButton));
a.keyCode===f.ENTER&&(k.stop(a),this.coordinateFormat.content.addSignChkBox.checked=this.coordinateFormat.content.addSignChkBox.checked?!1:!0)})),d(this.radiusInputDiv,A.leave,c.hitch(this,this.checkValidInputs)),d(this.okButton,"keydown",c.hitch(this,function(a){if(a.keyCode===f.ENTER||a.keyCode===f.SPACE)k.stop(a),this.okButtonClicked()})));x("esri-touch")?this.own(d(this.addPointBtn,y.press,c.hitch(this,this.pointButtonWasClicked))):this.own(d(this.addPointBtn,"click",c.hitch(this,this.pointButtonWasClicked)))},
circleLengthDidChange:function(a){var b=t.format(a,{places:2,locale:w.locale});this.radiusInput.set("displayedValue",b);this.radiusInput.set("value",a)},interactiveCheckBoxChanged:function(){this.tabSwitched();this.interactiveCircle.checked?(this.radiusInput.set("disabled",!0),this.distCalcControl.set("open",!1),this.distCalcControl.set("open",!1),this.distCalcControl.set("toggleable",!1)):(this.radiusInput.set("disabled",!1),this.distCalcControl.set("disabled",!1),this.distCalcControl.set("toggleable",
!0));this.checkValidInputs()},coordToolKeyWasPressed:function(a){this.dt.removeStartGraphic();a.keyCode===f.ENTER&&(this._centerPointInputKeyPressed=this._restrictFocusOnAddCenterPointBtn=!0,this.coordTool.inputCoordinate.getInputType().then(c.hitch(this,function(b){"UNKNOWN"===b.inputType?(new u({message:this.nls.invalidCoordinateTypeMessage}),this.coordTool.inputCoordinate.coordinateEsriGeometry=null,this.checkValidInputs()):this.dt.getProjectedGeometry(b.coordinateEsriGeometry,this.map.spatialReference).then(c.hitch(this,
c.hitch(this,function(e){p.publish("manual-circle-center-point-input",e);this.setCoordLabel(b.inputType);this.coordTool.inputCoordinate.set("formatString",this.coordinateFormat.content.formats[b.inputType].defaultFormat);this.coordTool.inputCoordinate.set("formatType",b.inputType);this.dt.addStartGraphic(e,this._ptSym);this.checkValidInputs()})))})))},coordinateFormatButtonWasClicked:function(){this.coordinateFormat.content.set("ct",this.coordTool.inputCoordinate.formatType);h.open({popup:this.coordinateFormat,
around:this.coordinateFormatButton});g.focus(this.coordinateFormat.content.frmtSelect.focusNode)},_closeDijit:function(){this.coordinateFormat&&this.coordinateFormat.domNode.offsetParent&&h.close(this.coordinateFormat)},distCalcDidExpand:function(){this.dt.deactivate();this.dt.cleanup();this.dt.disconnectOnMouseMoveHandler();this.coordTool.inputCoordinate.isManual=!0;this.distCalcControl.get("open")?this.radiusInput.set("disabled",!0):(this.radiusInput.set("disabled",!1),this.timeInput.set("value",
1),this.distanceInput.set("value",1))},timeInputDidChange:function(){this.currentTimeInSeconds=this.timeInput.get("value")*this.timeUnitDD.get("value");this.getCalculatedDistance();this.currentCircle=null},distanceInputKeyWasPressed:function(a){this.distanceInputDidChange();a.keyCode===f.ENTER&&(this.coordTool.inputCoordinate.outputString&&""!==this.coordTool.inputCoordinate.inputString?(this.removeManualGraphic(),this.setGraphic(!0),this.dt._onDoubleClickHandler()):new u({message:this.nls.noCenterPointSetMessage}))},
okButtonClicked:function(){l.contains(this.okButton,"jimu-state-disabled")||(this._restrictFocusOnAddCenterPointBtn=!0,this.removeManualGraphic(),this.currentCircle||this.setGraphic(!0),this.emit("show-publish",this._gl))},distanceInputDidChange:function(){this.currentDistanceInMeters=this.distanceInput.get("value")*this.distanceUnitDD.value.split(";")[0]/this.distanceUnitDD.value.split(";")[1];this.getCalculatedDistance();this.currentCircle=null},getCalculatedDistance:function(){if(this.currentTimeInSeconds&&
0<this.currentTimeInSeconds&&this.currentDistanceInMeters&&0<this.currentDistanceInMeters){this.calculatedRadiusInMeters=this.currentTimeInSeconds*this.currentDistanceInMeters;this.useCalculatedDistance=!0;var a=0;switch(this.currentLengthUnit){case "feet":a=3.2808399*this.calculatedRadiusInMeters;break;case "meters":a=this.calculatedRadiusInMeters;break;case "yards":a=1.0936133*this.calculatedRadiusInMeters;break;case "kilometers":a=.001*this.calculatedRadiusInMeters;break;case "miles":a=6.21371192E-4*
this.calculatedRadiusInMeters;break;case "nautical-miles":a=5.39957E-4*this.calculatedRadiusInMeters}a="Diameter"===this.creationType.get("value")?2*a:a;a=t.format(a,{places:"4"});this.radiusInput.set("value",a)}else this.calculatedRadiusInMeters=null,this.useCalculatedDistance=!0},pointButtonWasClicked:function(){l.contains(this.addPointBtn,"drawPointBtn-active")?(this.dt.deactivate(),this._setMapNavigation(!0)):(this.coordTool.manualInput=!1,p.publish("clear-points"),this._setMapNavigation(!1),
this.dt.set("isDiameter","Diameter"===this.creationType.get("value")),this.distCalcControl.get("open")?this.dt.activate("point"):this.interactiveCircle.checked?this.dt.activate("polyline"):this.dt.activate("point"));l.toggle(this.addPointBtn,"drawPointBtn-active")},lengthUnitDDDidChange:function(){this.currentLengthUnit=this.lengthUnitDD.get("value");this.dt.set("lengthUnit",this.currentLengthUnit);this.distCalcControl.get("open")&&this.distanceInputDidChange();this.currentCircle=null},creationTypeDidChange:function(){var a=
"Diameter"===this.creationType.get("value")?this.nls.diameterLabel:this.nls.radiusLabel;this.radiusDiameterLabel.innerHTML=q.sanitizeHTML(a);n.set(this.radiusInput,"aria-label",a);n.set(this.lengthUnitDD,"aria-label",a);this.currentCircle=null},feedbackDidComplete:function(a){if(a.geometry.center){var b=a.geometry.center,e=new M(a.geometry.rings[0][0][0],a.geometry.rings[0][0][1],a.geometry.center.spatialReference);a=new K(a.geometry.center.spatialReference);a.addPath([b,e]);this.setGraphic(!1,a);
g.focus(this.addPointBtn)}else l.toggle(this.addPointBtn,"drawPointBtn-active"),this._setMapNavigation(!0),this.dt.deactivate(),this.checkValidInputs()},setCoordLabel:function(a){a=q.sanitizeHTML(z.substitute(this.nls.centerPointLabel+" (${crdType})",{crdType:a}));this.coordInputLabel.innerHTML=a;n.set(this.coordTool.textbox,"aria-label",a)},removeManualGraphic:function(){null!==this.tempGraphic&&this._gl.remove(this.tempGraphic);this.dt.removeStartGraphic()},setGraphic:function(a,b){a||l.toggle(this.addPointBtn,
"drawPointBtn-active");this._setMapNavigation(!0);this.dt.deactivate();this.dt.removeStartGraphic();b="Diameter"===this.creationType.get("value")?this.radiusInput.get("value")/2:this.radiusInput.get("value");b=this.coordTool.inputCoordinate.util.convertToMeters(b,this.lengthUnitDD.get("value"));a=this.coordTool.inputCoordinate.coordinateEsriGeometry;b=new N({center:a,radius:b,geodesic:!0,numberOfPoints:360});a=new L(a.spatialReference);a.addRing(b.rings[0]);this.dt.getProjectedGeometry(a,this.map.spatialReference).then(c.hitch(this,
function(e){var m="Diameter"===this.creationType.get("value")?parseFloat(this.radiusInput.get("value"))/2:parseFloat(this.radiusInput.get("value"));m=new J(e,this._circleSym,{Label:window.isRTL?this._getLengthAbbrevation(this.lengthUnitDD.get("value"))+" "+this.radiusInput.get("displayedValue")+" "+this.creationType.get("displayedValue"):this.creationType.get("displayedValue")+" "+this.radiusInput.get("displayedValue")+" "+this._getLengthAbbrevation(this.lengthUnitDD.get("value")),CenterPoint:this.coordTool.get("value"),
RadiusDistance:m,RadiusUnit:this.currentLengthUnit});this.checkValidInputs();this.map.setExtent(e.getExtent().expand(3));this.currentCircle=m;this._gl.add(m);this._gl.refresh();this.dt.set("startPoint",null)}))},clearGraphics:function(){this._gl&&(this._gl.clear(),this._gl.refresh(),this.clearUI(!1));this.tabSwitched();this.checkValidInputs();this.currentCircle=null;for(var a=0;a<this.map.graphicsLayerIds.length;a++)this.map.getLayer(this.map.graphicsLayerIds[a]).refresh()},clearUI:function(a){a||
this.coordTool.clear();this.dt.set("startPoint",null);this.useCalculatedDistance=!1;l.remove(this.addPointBtn,"drawPointBtn-active");n.set(this.startPointCoords,"value","");this.radiusInput.set("value",1E3);this.timeInput.set("value",1);this.distanceInput.set("value",1)},setGraphicsHidden:function(){this._gl&&this._gl.hide()},setGraphicsShown:function(){this._gl&&this._gl.show()},checkValidInputs:function(){l.add(this.okButton,"jimu-state-disabled");n.set(this.okButton,"tabindex",-1);null!==this.coordTool.inputCoordinate.coordinateEsriGeometry&&
this.radiusInput.isValid()&&(l.remove(this.okButton,"jimu-state-disabled"),n.set(this.okButton,"tabindex",0));this.okButton.innerHTML=this.interactiveCircle.checked?this.nls.publishDDBtn:this.nls.common.ok},tabSwitched:function(){this.dt.deactivate();this.dt.cleanup();this.dt.disconnectOnMouseMoveHandler();this.dt.set("startPoint",null);this._setMapNavigation(!0);this.dt.removeStartGraphic();this.addPointBtn&&l.remove(this.addPointBtn,"drawPointBtn-active");h.close(this.coordinateFormat)},_setMapNavigation:function(a){a?
this.map.enableMapNavigation():(this.map.disableMapNavigation(),this.map.enableScrollWheelZoom())},_getLengthAbbrevation:function(a){var b=null;if(a)switch(a){case "feet":b=this.nls.abbrevFeetLabel;break;case "kilometers":b=this.nls.abbrevKmLabel;break;case "miles":b=this.nls.abbrevMilesLabel;break;case "meters":b=this.nls.abbrevMetersLabel;break;case "nautical-miles":b=this.nls.abbrevNauticalMilesLabel;break;case "yards":b=this.nls.abbrevYardsLabel;break;default:b=a}return b},_getDegreeAbbreviation:function(a){var b=
null;if(a)switch(a){case "degrees":b=this.nls.abbrevDegreesLabel;break;case "mils":b=this.nls.abbrevMilsLabel;break;default:b=a}return b},_getTimeAbbreviation:function(a){var b=null;if(a)switch(a){case "3600":b=this.nls.abbrevHoursLabel;break;case "60":b=this.nls.abbrevMinutesLabel;break;case "1":b=this.nls.abbrevSecondsLabel;break;default:b=a}return b},_getRateAbbreviation:function(a){var b=null;if(a)switch(a){case "0.3048;1":b=this.nls.abbrevFeetSecondsLabel;break;case "0.3048;3600":b=this.nls.abbrevFeetHourLabel;
break;case "1000;1":b=this.nls.abbrevKmSecondLabel;break;case "1000;3600":b=this.nls.abbrevKmHourLabel;break;case "1;1":b=this.nls.abbrevMetersSecondLabel;break;case "1;3600":b=this.nls.abbrevMetersHourLabel;break;case "1609.344;1":b=this.nls.abbrevMilesSecondLabel;break;case "1609.344;3600":b=this.nls.abbrevMilesHourLabel;break;case "1852;1":b=this.nls.abbrevNauticalMilesSecondLabel;break;case "1852;3600":b=this.nls.abbrevNauticalMilesHourLabel;break;default:b=a}return b},setFirstFocusNode:function(){q.initFirstFocusNode(this.domNodeObj,
this.creationType.domNode)},focusFirstNodeOfSelectedTab:function(){g.focus(this.creationType.focusNode)},setLastFocusNode:function(){q.initLastFocusNode(this.domNodeObj,this.clearGraphicsButton)}})});