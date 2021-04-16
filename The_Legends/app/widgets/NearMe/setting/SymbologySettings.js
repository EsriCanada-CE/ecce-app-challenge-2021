// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/setting/SymbologySettings.html":'\x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"btnAddSymbolsNode" class\x3d"esriCTAddSymbologyBtn" title\x3d"${nls.symbologySetting.addSymbologyBtnLabel}"\x3e\r\n        \x3cspan class\x3d"esriCTAddSymbologyIcon"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"esriCTAddSymbologyLabel"\x3e${nls.symbologySetting.addSymbologyBtnLabel}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"symbologyTableAttachNode" class\x3d"esriCTAddLayerTableNode"\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./SymbologySettings.html jimu/dijit/SimpleTable dojo/on dojo/dom-construct dojo/_base/lang dojo/string dojo/_base/array dojo/query dijit/form/Select dijit/form/ValidationTextBox dijit/form/NumberTextBox dojo/store/Memory ./SymbolChooserPopup jimu/symbolUtils jimu/utils esri/symbols/jsonUtils jimu/dijit/Message jimu/LayerInfos/LayerInfos dojo/promise/all jimu/dijit/LoadingIndicator".split(" "),function(u,
v,w,x,y,z,m,k,e,A,l,t,p,B,C,q,D,E,F,n,G,H,I,J){return u([v,w,x],{templateString:y,baseClass:"jimu-widget-nearme-setting-symbology",_layerNameStore:null,_layerFieldStore:{},_layerValuedStore:null,_layerDetails:{},_layerInfosObj:null,constructor:function(b){e.mixin(this,b)},postMixInProperties:function(){this.nls.common={};e.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this._layerNameStore=null;this._layerFieldStore={};this._layerValuedStore=null;this._layerDetails={};this.inherited(arguments);
this._initLoading();this._createSymbologyTable();this.own(m(this.btnAddSymbolsNode,"click",e.hitch(this,this._addSymbolBtnClicked)));H.getInstance(this.map,this.map.webMapResponse.itemInfo).then(e.hitch(this,function(b){this._layerInfosObj=b;this._loading.show();var a=[],c=[],a=b.getLayerInfoArray(),a=a.concat(b.getTableInfoArray());l.forEach(a,e.hitch(this,function(a){c.push(a.getLayerObject());var b=[];(b=a.getSubLayers())&&0<b.length&&l.forEach(b,e.hitch(this,function(a){a&&a.layerObject&&!a.layerObject.empty&&
c.push(a.getLayerObject())}))}));I(c).then(e.hitch(this,function(){if(this.config.attributeSymbology&&0<Object.keys(this.config.attributeSymbology).length)for(var a in this.config.attributeSymbology)this.config.attributeSymbology[a].hasOwnProperty("layerId")?this._populateTableRows([this.config.attributeSymbology[a]],this.config.attributeSymbology[a].layerId):this._populateTableRows(this.config.attributeSymbology[a],a);else this._layerNameStore||this._createLayerNameStore();this._loading.hide()}),
e.hitch(this,function(){this._loading.hide()}))}))},_errorMessage:function(b){(new G({message:b})).message=b},_initLoading:function(){var b;this._loading=new J({hidden:!0});b=t(".widget-setting-popup")[0];this._loading.placeAt(b);this._loading.startup()},_populateTableRows:function(b,a){l.forEach(b,e.hitch(this,function(c){c.layerId=a;this._addLayerRow(c)}))},_createSymbologyTable:function(){this._symbologyTable=new z({fields:[{name:"field",title:this.nls.symbologySetting.layerNameTitle,type:"empty",
editable:!1,width:"30%"},{name:"field1",title:this.nls.symbologySetting.fieldTitle,type:"empty",editable:!0,width:"25%"},{name:"field2",title:this.nls.symbologySetting.valuesTitle,type:"empty",editable:!1,width:"20%"},{name:"field3",title:this.nls.symbologySetting.symbolTitle,type:"empty",editable:!1,width:"15%"},{name:"actions",title:this.nls.symbologySetting.actionsTitle,width:"10%",type:"actions",actions:["up","down","delete"]}],selectable:!1,autoHeight:!0});this._symbologyTable.placeAt(this.symbologyTableAttachNode);
this._symbologyTable.startup()},_addSymbolBtnClicked:function(){!this._layerNameStore||this._layerNameStore&&0>=this._layerNameStore.data.length?this._errorMessage(this.nls.errorStrings.selectLayerErrorString):this._addLayerRow()},_addLayerRow:function(b){var a,c;a=this._symbologyTable.addRow({});if(c=t(".simple-table-cell",a.tr))a=a.tr,this._addLayerNameDropdown(c[0],a,b),this._addLayerFieldDropdown(c[1],a,b),this._addLayerValueDropdown(c[2],a,b),this._addSymbolPicker(c[3],a,b)},_addSymbolPicker:function(b,
a,c){var f={};a.symbol?f.symbol=n.fromJson(a.symbol):c&&c.symbol?f.symbol=n.fromJson(c.symbol):this.config&&this.config.symbols&&this.config.symbols.hasOwnProperty("graphicLocationSymbol")&&(f.symbol=n.fromJson(this.config.symbols.graphicLocationSymbol));var h={symbolChooserTitle:this._getFieldAlias(a),symbolParams:f,nls:this.nls,symbolType:"graphicLocationSymbol"},d=k.create("div",{style:"height: 27px;"},b);this._showSelectedSymbol(d,f.symbol,a);this.own(m(d,"click",e.hitch(this,function(){h.symbolChooserTitle=
this._getFieldAlias(a);h.symbolParams.symbol=n.fromJson(a.symbol);this._initSymbolChooserPopup(h,d,a)})))},_getFieldAlias:function(b){var a,c;a=b.layerNameDropDown.getValue();b=b.layerFieldDropDown.getValue();c="";this._layerDetails[a]&&this._layerDetails[a].fields&&this._layerDetails[a].fields[b]&&this._layerDetails[a].fields[b].fieldAlias&&(c=this._layerDetails[a].fields[b].fieldAlias);return c},_initSymbolChooserPopup:function(b,a,c){var f=new D(b);f.onOkClick=e.hitch(this,function(){var b=f.symbolChooser.getSymbol();
this._showSelectedSymbol(a,b,c);f.popup.close()})},_showSelectedSymbol:function(b,a,c){k.empty(b);var f,h,d;if(a){26<a.height&&(f=e.clone(a.height),a.height=26);26<a.width&&(h=e.clone(a.width),a.width=26);20<a.size&&(d=e.clone(a.size),a.size=20);var g=E.createSymbolNode(a);g||(g=k.create("div"));k.place(g,b);f&&(a.height=f);h&&(a.width=h);d&&(a.size=d);c.symbol=a.toJson()}},_addLayerNameDropdown:function(b,a,c){b=k.create("div",{"class":"esriCTDropDownContainer"},b);this._layerNameStore||this._createLayerNameStore();
a.layerNameDropDown=new p({name:"layerSelect",store:this._layerNameStore,labelAttr:"name","class":"esriCTLayerNameDropdown"},b);a.layerNameDropDown.startup();c&&a.layerNameDropDown.set("value",c.layerId,!1);m(a.layerNameDropDown,"change",e.hitch(this,function(){this._createLayerFieldsStore(a);a.layerFieldDropDown.setStore(this._layerFieldStore);this._addLayerValueDropdown(a.cells[2],a,null)}));a.layerNameDropDown.startup()},_createLayerNameStore:function(b){var a;a=[];l.forEach(b||this.config.searchLayers,
e.hitch(this,function(c){a.push({name:c.title,value:c.id})}));this._layerNameStore=new q({idProperty:"value",data:a})},_addLayerFieldDropdown:function(b,a,c){k.empty(b);b=k.create("div",{"class":"esriCTDropDownContainer"},b);this._createLayerFieldsStore(a);a.layerFieldDropDown=new p({name:"fieldSelect",labelAttr:"name",store:this._layerFieldStore,"class":"esriCTLayerFieldDropDown"},b);m(a.layerFieldDropDown,"change",e.hitch(this,function(){this._addLayerValueDropdown(a.cells[2],a,null)}));c&&a.layerFieldDropDown.set("value",
c.fieldName,!1);a.layerFieldDropDown.startup()},_createLayerFieldsStore:function(b){var a,c,f;a=[];c=b.layerNameDropDown.getValue();f=this._layerInfosObj.getLayerInfoById(c).layerObject;this._layerDetails[c]||(this._layerDetails[c]={fields:{}});l.forEach(f.fields,e.hitch(this,function(b){var d,g,h;-1==="esriFieldTypeDate esriFieldTypeOID esriFieldTypeGeometry esriFieldTypeBlob esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeXML".split(" ").indexOf(b.type)&&(d=b.name,this._layerDetails[c].fields[d]||
(this._layerDetails[c].fields[d]={},this._layerDetails[c].fields[d].fieldAlias=b.alias,(g=f.getDomain(d))?(g=e.clone(g),g.codedValues&&(h=F.getCodedValueListForCodedValueOrSubTypes(f,d),g.codedValues=e.clone(h)),this._layerDetails[c].fields[d].codedDomainStore=this._getCodedDomainStore(g),this._layerDetails[c].fields[d].type=g.type):this._layerDetails[c].fields[d].codedDomainStore=null),a.push({name:b.alias||b.name,value:b.name}))}));this._layerFieldStore=new q({idProperty:"value",data:a})},_getCodedDomainStore:function(b){var a;
a=[];l.forEach(b.codedValues,e.hitch(this,function(b){a.push({name:b.label,value:b.value})}));return new q({idProperty:"value",data:a})},_addLayerValueDropdown:function(b,a,c){var f,e,d,g,r;k.empty(b);e=a.layerNameDropDown.getValue();d=a.layerFieldDropDown.getValue();f=k.create("div",{"class":"esriCTDropDownContainer esriCTLayerFieldDropDown"},b);b=k.create("div",{"class":"esriCTDropDownContainer esriCTLayerFieldDropDown"},b);g=this._layerDetails[e].fields[d].codedDomainStore;r=this._layerDetails[e].fields[d];
g&&"codedValue"===r.type?(a.layerValueDropDown=new p({name:"valuesSelect",labelAttr:"name",store:g,"class":"esriCTLayerValuedDropDown"},f),a.layerValueDropDown.startup(),c&&a.layerValueDropDown.set("value",c.fieldValue)):g&&"range"===r.type?(c=this._layerInfosObj.getLayerInfoById(e).layerObject,d=c.getDomain(d),a.valueTextBox=new C({"class":"esriCTLayerValuedDropDown",constraints:{min:d.minValue,max:d.maxValue}},b),a.valueTextBox.startup()):(a.valueTextBox=new B({"class":"esriCTLayerValuedDropDown"},
b),a.valueTextBox.startup(),c&&a.valueTextBox.set("value",c.fieldValue))},updateLayerOptions:function(b){var a;this._createLayerNameStore(b);l.forEach(this._symbologyTable.getRows(),e.hitch(this,function(b){b.layerNameDropDown&&0<this._layerNameStore.query({value:b.layerNameDropDown.getValue()}).length?(a=b.layerNameDropDown.getValue(),b.layerNameDropDown.setStore(this._layerNameStore),b.layerNameDropDown.set("value",a,!1),a!==b.layerNameDropDown.getValue()&&(b.layerFieldDropDown&&(this._createLayerFieldsStore(b),
b.layerFieldDropDown.setStore(this._layerFieldStore)),this._addLayerValueDropdown(b.cells[2],b,null))):this._symbologyTable.deleteRow(b)}))},getConfig:function(){var b={},a,c,f,h=!0,d,g=[];l.forEach(this._symbologyTable.getRows(),e.hitch(this,function(d){d.layerNameDropDown&&(f=d.layerNameDropDown.getValue(),c=this._layerInfosObj.getLayerInfoById(f).layerObject,a={},a.layerId=f,a.fieldName=d.layerFieldDropDown.getValue(),c.getDomain(a.fieldName)?a.fieldValue=d.layerValueDropDown.getValue():a.fieldValue=
d.valueTextBox.getValue(),d.symbol&&(a.symbol=d.symbol),b.hasOwnProperty(f)||(b[f]=[]),l.forEach(b[f],e.hitch(this,function(b){if(b.fieldName===a.fieldName&&b.fieldValue===a.fieldValue)return h=!1,!0})),b[f].push(a),g.push(a))}));if(h)return{isValid:h,symbolConfig:g};d=A.substitute(this.nls.symbologySetting.invalidConfigMsg,{fieldName:a.fieldName,layerName:c.name});return{isValid:h,message:d}}})});