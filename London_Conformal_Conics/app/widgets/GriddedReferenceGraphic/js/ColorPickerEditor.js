// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/GriddedReferenceGraphic/templates/ColorPickerEditor.html":'\x3cdiv class\x3d"colorPickerEditor"\x3e\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPicker"\x3e\x3c/div\x3e\r\n  \x3cspan class\x3d"trans"\x3e${nls.transparency}\x3c/span\x3e\r\n  \x3cdiv class\x3d"sliderbar" data-dojo-attach-point\x3d"sliderBar"\x3e\x3c/div\x3e\r\n  \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"0"\r\n         data-dojo-attach-point\x3d"spinner" data-dojo-props\x3d"smallDelta:10,intermediateChanges:true,constraints: {min:0,max:100}"\x3e\r\n  \x3cspan class\x3d"percent-display"\x3e%\x3c/span\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/dom-attr dojo/on dojo/query dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/ColorPickerEditor.html dijit/form/HorizontalSlider jimu/dijit/ColorPickerPopup dijit/form/NumberSpinner".split(" "),function(f,d,g,c,e,h,k,l,m,n,p,q,r){return f([l,m,n],{_defaultColor:"#485566",templateString:p,nls:null,postCreate:function(){this.colorPicker=new r({color:this._defaultColor,width:this._defaultWidth,
tabindex:"0",role:"button"},this.colorPicker);this.colorPicker.startup();this.slider=new q({name:"slider",value:100,minimum:0,maximum:100,discreteValues:101,intermediateChanges:!0,showButtons:!1,style:"width:140px;display: inline-block;"},this.sliderBar);this.slider.startup();this.inherited(arguments)},startup:function(){this._setAriaLabelForEditorNodes();this.own(e(this.slider,"change",d.hitch(this,function(a){!1===this._isSameVal()&&this.spinner.setValue(a)})));this.own(e(this.spinner,"change",
d.hitch(this,function(a){!1===this._isSameVal()&&100>=a&&this.slider.setValue(a)})));this._stylePolyfill();this.inherited(arguments)},_setAriaLabelForEditorNodes:function(){var a="",b="";this.nls.gridSettings&&(a="Fill"===this.typeOfColorPicker?this.nls.gridSettings.cellFill:this.nls.gridSettings.cellOutline,b=this.nls.gridSettings.colorPicker);c.set(this.colorPicker.domNode,"aria-label",a+" "+b);c.set(this.slider,"aria-label",a+" "+this.nls.transparency);c.set(this.spinner,"aria-label",a+" "+this.nls.transparency)},
_isSameVal:function(){return this.slider.getValue()===this.spinner.getValue()},getValues:function(){var a=null,b=null;(b=this.colorPicker.getColor())&&b.toHex&&(a=b.toHex());b=this.spinner.getValue()/100;return{color:a,transparency:b}},setValues:function(a){if("object"===typeof a||"string"===typeof a)this.colorPicker.setColor(new g(a.color)),a.transparency="undefined"===typeof a.transparency?0:100*a.transparency,this.slider.setValue(a.transparency),this.spinner.setValue(a.transparency)},_stylePolyfill:function(){var a=
h(".dijitSliderLeftBumper",this.domNode)[0];a&&a.parentNode&&k.setStyle(a.parentNode,"background-color","#24b5cc")}})});