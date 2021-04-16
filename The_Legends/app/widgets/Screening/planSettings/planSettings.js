// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dijit/TooltipDialog jimu/dijit/formSelect dojo/dom-construct dijit/popup jimu/BaseWidget dojo/Evented dojo/dom-class dijit/focus dojo/keys dojo/_base/event".split(" "),function(l,c,m,n,d,p,h,f,k,q,r,t,g,e,b){return l([q,r],{baseClass:"jimu-widget-screening",planSettingsOptions:{directionOrAngleUnits:["decimalDegree","degreeMinuteSeconds"],distanceAndLengthUnits:["uSSurveyFeet","meters"]},isTooltipDialogOpened:!1,constructor:function(a){this.planSettingsOptions=
{directionOrAngleUnits:["decimalDegree","degreeMinuteSeconds"],distanceAndLengthUnits:["uSSurveyFeet","meters"]};this.isTooltipDialogOpened=!1;c.mixin(this,a)},startup:function(){this._popupDialog=new p({"class":"esriCTPlanSettingsDialog "+this.baseClass,style:{width:"250px"}});this._popupDialog.startup();"DartTheme"===this.appConfig.theme.name&&t.add(this._popupDialog.domNode,"dart-panel");this.own(d(document.body,"click",c.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement)||this.closePopup()})));
this.own(d(window,"resize",c.hitch(this,function(){this.closePopup()})));this.createPlanSettingsUI()},createPlanSettingsUI:function(){var a;a=f.create("div",{"class":"esriCTPlanSettingsContainer"},null);f.create("div",{"class":"esriCTEllipsis esriCTPlanSettingLabel",innerHTML:this.nls.planSettings.directionUnitLabelText},a);this.directionUnitSelect=new h({"aria-label":this.nls.planSettings.directionUnitLabelText});this._loadOptionsForDropDown(this.directionUnitSelect,this.planSettingsOptions.directionOrAngleUnits,
this.config.traverseDirectionUnit);this.directionUnitSelect.placeAt(a);this.own(d(this.directionUnitSelect,"keydown",c.hitch(this,function(a){a.keyCode===e.ESCAPE&&(b.stop(a),this.closePopup())})));f.create("div",{"class":"esriCTEllipsis esriCTPlanSettingLabel",innerHTML:this.nls.planSettings.distanceUnitLabelText},a);this.distanceUnitSelect=new h({"aria-label":this.nls.planSettings.distanceUnitLabelText});this.own(d(this.distanceUnitSelect,"keydown",c.hitch(this,function(a){a.keyCode===e.ESCAPE&&
(b.stop(a),this.closePopup())})));this._loadOptionsForDropDown(this.distanceUnitSelect,this.planSettingsOptions.distanceAndLengthUnits,this.config.traverseUnit);this.distanceUnitSelect.placeAt(a);this._popupDialog.setContent(a);a=f.create("button",{innerHTML:this.nls.common.apply,"class":"esriCTEllipsis jimu-btn esriCTPlanSettingsBtn"},f.create("div",{"class":"esriCTPlanSettingsBtnContainer"},a));this.own(d(a,"click",c.hitch(this,function(){this._savePlanSettings()})));this.own(d(a,"keydown",c.hitch(this,
function(a){if(a.keyCode===e.ENTER||a.keyCode===e.SPACE)b.stop(a),this._savePlanSettings();a.keyCode===e.ESCAPE&&(b.stop(a),this.closePopup())})));this.openPopup()},_savePlanSettings:function(){this.emit("planSettingsChanged",this.directionUnitSelect.get("value"),this.distanceUnitSelect.get("value"));this.closePopup()},_loadOptionsForDropDown:function(a,d,f){var e=[],b;m.forEach(d,c.hitch(this,function(a){this.nls.units[a]&&(b={value:a,label:this.nls.units[a]});e.push(b);f===b.value&&(b.selected=
!0)}));a.addOption(e)},openPopup:function(){k.open({popup:this._popupDialog,x:this.position.pageX+11,y:this.position.pageY,tabindex:"0"});this.isTooltipDialogOpened=!0},closePopup:function(){this._popupDialog&&(k.close(this._popupDialog),this.isTooltipDialogOpened=!1,this._restoreDialog(),this.emit("setFocusOnPlanSettingsIcon"))},isPartOfPopup:function(a){var b;b=this._popupDialog.domNode;return a===b||n.isDescendant(a,b)},_restoreDialog:function(){this.directionUnitSelect.set("value",this.config.traverseDirectionUnit);
this.distanceUnitSelect.set("value",this.config.traverseUnit)},_focusOutCurrentNode:function(){g.curNode&&g.curNode.blur()},setFocusToPlanSettingsDialog:function(){this._focusOutCurrentNode();g.focus(this.directionUnitSelect)}})});