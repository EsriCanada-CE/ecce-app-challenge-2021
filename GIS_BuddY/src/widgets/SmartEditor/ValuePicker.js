// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/ValuePicker.html":'\x3cdiv class\x3d"jimu-widget-smartEditor" style\x3d"max-height: 445px;padding: 0 5px;"\x3e\r\n  \x3cdiv class\x3d"esriCTValuePickerHint" data-dojo-attach-point\x3d"valuePickerHint" tabindex\x3d"0"\r\n    aria-label\x3d"${nls.valuePicker.popupHint}" role\x3d"presentation"\x3e\r\n    ${nls.valuePicker.popupHint}\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"width:100%" data-dojo-attach-point\x3d"fieldsContainer"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-class dojo/text!./ValuePicker.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/Popup jimu/dijit/formSelect jimu/utils".split(" "),function(l,m,e,f,g,n,p,q,r,t,u,h){return l([r,m,q],{baseClass:"jimu-widget-smartEditor-multiple-value-picker",templateString:p,allFields:{},isOpen:!0,postCreate:function(){this.inherited(arguments);this.allFields={};this._initControls();this.showDialog()},_isFieldDisabled:function(a){return this.disabledFields&&
0!==this.disabledFields.length&&this.disabledFields&&-1<this.disabledFields.indexOf(a)?!0:!1},_initControls:function(){if(this.showForField)n.add(this.valuePickerHint,"esriCTHidden"),this.addField(this.showForField);else if(this.multipleValues)for(var a in this.multipleValues)this._isFieldDisabled(a)||this.addField(a)},addField:function(a){var b=this.multipleValues[a],c=g.create("div",{class:"esriCTFieldContainer"},this.fieldsContainer);g.create("div",{innerHTML:this.fieldLabels[a],class:"esriCTFieldName"},
c);b=this._getFieldsOptionsObj(a,b);this.allFields[a]=new u({style:{width:"270px"},options:b,"aria-label":this.fieldLabels[a]},g.create("div",{},c))},showDialog:function(){this.isOpen=!0;this.fieldsPopup=new t({titleLabel:this.nls.valuePicker.popupTitle,width:310,maxHeight:500,autoHeight:!0,content:this,class:this.baseClass,buttons:[{label:this.nls.ok,onClick:e.hitch(this,function(){var a={};if(this.showForField)a[this.showForField]=this.allFields[this.showForField].get("value");else for(var b in this.allFields)a[b]=
this.allFields[b].get("value");this.emit("value-selected",a);this.fieldsPopup.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:e.hitch(this,function(){this.isOpen=!1;this.fieldsPopup.close()})}],onClose:e.hitch(this,function(){this.isOpen=!1})})},hideDialog:function(){this.fieldsPopup&&this.isOpen&&(this.isOpen=!1,this.fieldsPopup.close())},_getFieldsOptionsObj:function(a,b){var c=this._getPopupFieldInfo(a);a=h._getValues(this.layerInfo.layerInfo.layerObject,c,a,b);return a=
f.map(a,function(d){return{value:d.value,label:d.label+""}})},_getPopupFieldInfo:function(a){var b;if(b=this.layerInfo.layerInfo.getPopupInfo())b=b.fieldInfos,f.some(b,function(d){if(d.fieldName===a)return c=d,!0});else var c=h.getPopupFieldFromLayerField(this.layerInfo.layerInfo.layerObject.getField(a));return c},setValue:function(a,b){b&&(1<b.length?this.allFields[a].set("value",this.getSelectedValueForDateField(a,b)):this.allFields[a].set("value",b.getValue()))},getSelectedValueForDateField:function(a,
b){var c="";var d=this._getPopupFieldInfo(a);var v=h._getValues(this.layerInfo.layerInfo.layerObject,d,a,[b[0].value?b[0].value.getTime():""]);f.some(this.allFields[a].options,e.hitch(this,function(k){if(k.value===v[0].value)return c=k.value,!0}));return c}})});