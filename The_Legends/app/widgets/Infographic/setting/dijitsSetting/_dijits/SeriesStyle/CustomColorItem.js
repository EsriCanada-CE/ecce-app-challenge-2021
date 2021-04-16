// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/SeriesStyle/CustomColorItem.html":'\x3cdiv\x3e\r\n\t\x3cdiv  class\x3d"text-container"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"textDiv" class\x3d"category-text-div text-over"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"labelContainer" class\x3d"label-container"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"labelPart" class\x3d"label-part"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-event\x3d"click:_onEditClicked" data-dojo-attach-point\x3d"labelDiv" class\x3d"label-div text-over" title\x3d"${nls.clickToEdit}"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"editPart" class\x3d"edit-part hide"\x3e\r\n\t\t\t\x3cinput class\x3d"edit-input" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"intermediateChanges:false" data-dojo-attach-event\x3d"blur:_onEditInputBlured" data-dojo-attach-point\x3d"editInput" required type\x3d"text"\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"action-container"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"colorDiv" class\x3d"color-div"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"deleteBtn" data-dojo-attach-event\x3d"click:_onDeleteClick" class\x3d"delete-icon" title\x3d"${nls.deleteText}" \x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./CustomColorItem.html dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/ColorPickerPopup dojo/_base/Color jimu/utils dojo/on dojo/_base/lang dojo/_base/html dijit/form/ValidationTextBox".split(" "),function(g,h,k,l,m,n,p,d,c,e,f,b){return g([l,m,n,k],{baseClass:"infographic-custom-color-item",templateString:h,deletable:!0,numberType:!1,labelVisible:!0,postCreate:function(){this.inherited(arguments);this._ignoreEvent();
this._initDom();this._updateNodesDisplay();this._initEvents();this._careEvent()},setConfig:function(a){a&&"undefined"!==typeof a.id&&(this._ignoreEvent(),this.itemId=a.id,a.color&&this.colorPicker.setColor(new d(a.color)),"undefined"!==typeof a.text&&(this.textDiv.innerHTML=c.sanitizeHTML(a.text),this.textDiv.title=a.text),"undefined"!==typeof a.label&&(this.labelDiv.innerHTML=c.sanitizeHTML(a.label),this.editInput.set("value",a.label)),this._careEvent())},_ignoreEvent:function(){this.ignoreChangeEvents=
!0},_careEvent:function(){this.ignoreChangeEvents=!1},setColor:function(a){this.colorPicker.setColor(new d(a))},setNumberType:function(a){this.numberType=a},lestenDocumentMousemove:function(){this._shouldCareMousemove=!0},_initDom:function(){this.colorPicker=new p({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});this.colorPicker.placeAt(this.colorDiv);this.colorPicker.startup();this.colorPicker.setColor(new d("#68D2E0"))},_initEvents:function(){this.own(e(this.colorPicker,
"change",f.hitch(this,function(){this.onChange()})));this.own(e(document.body,"click",f.hitch(this,function(a){b.isDescendant(a.target,this.editPart)||this._hideEditInput()})));this._hasHideEditInput=!0},isValid:function(){var a=this.labelDiv.innerHTML,b=this.textDiv.innerHTML.trim();return"undefined"!==typeof this.itemId&&!!a&&!!b&&this.editInput.isValid()},getConfig:function(){return this.isValid()?{id:this.numberType?Number(this.itemId):this.itemId,text:this.textDiv.innerHTML.trim(),label:this.labelDiv.innerHTML,
color:this._getColor()}:void 0},_getColor:function(){var a=this.colorPicker.getColor();return a&&a.toHex?a.toHex():a},onChange:function(){if(!this.ignoreChangeEvents){var a=this.getConfig();a&&this.emit("change",a)}},destroy:function(){this.colorPicker&&this.colorPicker.destroy();this.inherited(arguments)},highLight:function(){b.hasClass(this.domNode,"high-light")||b.addClass(this.domNode,"high-light");setTimeout(function(){this._removeHighLight()}.bind(this),2E3)},_removeHighLight:function(){this.domNode&&
b.hasClass(this.domNode,"high-light")&&b.removeClass(this.domNode,"high-light")},_onEditClicked:function(a){a&&a.stopPropagation&&a.stopPropagation();a=this.labelDiv.innerHTML;this._showEditInput();this.editInput.set("value",a);this.editInput.focus()},_showEditInput:function(){this._hasHideEditInput&&(this._hideLabelPart(),this._showEditPart(),this._hasHideEditInput=!1)},_hideEditInput:function(){!this._hasHideEditInput&&this.editInput.isValid()&&(this._hideEditPart(),this._showLabelPart(),this._hasHideEditInput=
!0)},_onEditInputBlured:function(){var a=this.editInput.get("value"),a=c.stripHTML(a);this._hideEditInput();this.labelDiv.innerHTML!==a&&(this.labelDiv.innerHTML=c.sanitizeHTML(a),this.onChange())},_onEditCancled:function(a){a&&a.stopPropagation&&a.stopPropagation();this._hideEditPart();this._showLabelPart()},_onDeleteClick:function(a){a&&a.stopPropagation&&a.stopPropagation();this.emit("delete",this.itemId);this.destroy()},_updateNodesDisplay:function(){this.updateDeletabe(this.deletable);this.updateLabelDisplay(this.labelVisible)},
updateDeletabe:function(a){(this.deletable=a)?this._showDeleteButton():this._hideDeleteButton()},updateLabelDisplay:function(a){(this.labelVisible=a)?this._showLabelContainer():this._hideLabelContainer()},_showDeleteButton:function(){b.removeClass(this.deleteBtn,"hidden")},_hideDeleteButton:function(){b.addClass(this.deleteBtn,"hidden")},_hideLabelContainer:function(){b.addClass(this.labelContainer,"hidden")},_showLabelContainer:function(){b.removeClass(this.labelContainer,"hidden")},_showLabelPart:function(){b.removeClass(this.labelPart,
"hide")},_hideLabelPart:function(){b.addClass(this.labelPart,"hide")},_showEditPart:function(){b.removeClass(this.editPart,"hide")},_hideEditPart:function(){b.addClass(this.editPart,"hide")}})});