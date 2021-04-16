// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/lang","dojo/on","dojo/_base/html","dijit/a11yclick"],function(c,d,a,e){return{a11y_init:function(){a.setAttr(this.domNode,"tabindex","0");a.setAttr(this.domNode,"role","checkbox");this.setLabel(this.label);this.a11y_changeAriaCheckedAttr();this.own(d(this.domNode,"focus",c.hitch(this,function(){a.addClass(this.checkNode,"dijitCheckBoxFocused")})));this.own(d(this.domNode,"blur",c.hitch(this,function(){a.removeClass(this.checkNode,"dijitCheckBoxFocused")})));this.own(d(this.domNode,
e,c.hitch(this,function(){this.status&&(this.checked?this.uncheck():this.check())})))},a11y_changeAriaCheckedAttr:function(){a.setAttr(this.domNode,"aria-checked",this.checked?"true":"false")},a11y_setDisabled:function(b){b=b.toString();"false"===b?a.removeAttr(this.domNode,"disabled"):a.setAttr(this.domNode,"disabled",b);a.setAttr(this.domNode,"aria-disabled",b)},a11y_updateAriaLabel:function(b){""===this.label?(a.setAttr(this.domNode,"title",this.title),a.setAttr(this.domNode,"aria-label",this.title)):
a.setAttr(this.domNode,"aria-label",this.title?this.title:b)}}});