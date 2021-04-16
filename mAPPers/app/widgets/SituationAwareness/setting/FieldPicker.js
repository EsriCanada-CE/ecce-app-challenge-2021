// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SituationAwareness/setting/FieldPicker.html":'\x3cdiv class\x3d"field-picker-main"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableArea" class\x3d"tableArea"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"btnAddField" class\x3d"btn-add-section enable"\x3e\r\n      \x3cspan class\x3d"btn-add-icon"\x3e\x3c/span\x3e\r\n      \x3cspan class\x3d"btn-add-label" data-dojo-attach-point\x3d"divLayerTitle"\x3e${nls.addField}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTFieldTableParent" data-dojo-attach-point\x3d"fieldTable"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-r-row pad-top20" data-dojo-attach-point\x3d"chk_countOnly"\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkCountOnly"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-r-row pad-top20" data-dojo-attach-point\x3d"chk_summary"\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkCount"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkArea"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkLength"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-r-row pad-top20" data-dojo-attach-point\x3d"chk_summaryLabels"\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkCountLabel"\x3e\r\n      \x3cspan class\x3d"label"\x3e ${nls.count_label}:\x3c/span\x3e\r\n      \x3cinput class\x3d"validationBox" data-dojo-attach-point\x3d"featureCountLabel" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n             disabled\x3d"disabled" title\x3d"${nls.count_label}" /\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkAreaLabel"\x3e\r\n      \x3cspan class\x3d"label"\x3e ${nls.area_label}:\x3c/span\x3e\r\n      \x3cinput class\x3d"validationBox" data-dojo-attach-point\x3d"featureAreaLabel" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n             disabled\x3d"disabled" title\x3d"${nls.area_label}" /\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"col-1-3" data-dojo-attach-point\x3d"div_chkLengthLabel"\x3e\r\n      \x3cspan class\x3d"label"\x3e ${nls.length_label}:\x3c/span\x3e\r\n      \x3cinput class\x3d"validationBox" data-dojo-attach-point\x3d"featureLengthLabel" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n             disabled\x3d"disabled" title\x3d"${nls.length_label}" /\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c!-- Report options Starts --\x3e\r\n  \x3cdiv class\x3d"esriCTReportOptionsContainer"\x3e\r\n    \x3cdiv class\x3d"esriCTReportOption"\x3e${nls.report_label}\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTReportOption" data-dojo-attach-point\x3d"div_chkAnalysisSummary"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTReportOption" data-dojo-attach-point\x3d"div_chkPopUpSummary"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c!-- Report options ends --\x3e\r\n\r\n  \x3cdiv class\x3d"field-picker-footer"\x3e\r\n    \x3cdiv class\x3d"jimu-btn ok" data-dojo-attach-point\x3d"btnOk"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn cancel" data-dojo-attach-point\x3d"btnCancel"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dijit/form/Select dijit/form/ValidationTextBox dijit/registry dojo/dom-construct dojo/_base/array dojo/_base/lang dojo/_base/html dojo/dom-style dojo/dom-class dojo/Deferred dojo/on dojo/query jimu/BaseWidget jimu/dijit/Message jimu/utils jimu/dijit/Popup jimu/dijit/CheckBox esri/layers/FeatureLayer dojo/text!./FieldPicker.html dojo/Evented jimu/dijit/SimpleTable ./FieldOptions".split(" "),function(E,F,A,G,w,x,r,f,u,l,m,B,k,t,H,C,v,I,J,K,L,
M,N,O){return E([H,F,M],{templateString:L,baseClass:"jimu-widget-SAT-setting",advStat:{},fieldsList:null,callerLayer:null,callerTab:null,callerOpLayers:null,layerList:null,test:!1,fields:null,hasFields:!0,areaOptions:{},lengthOptions:{},constructor:function(a){this.map=a.map;a.test&&(this.test=a.test)},postMixInProperties:function(){this.inherited(arguments);this.nls.common=window.jimuNls.common},postCreate:function(){this.inherited(arguments);this.startup()},_initCheckBoxes:function(){this.chk_count_only=
this._initCheckBox(this.nls.count_checkBox,this.div_chkCountOnly);this.own(k(this.chk_count_only,"change",f.hitch(this,this.chkCountChanged)));this.chk_count=this._initCheckBox(this.nls.count_checkBox,this.div_chkCount);this.own(k(this.chk_count,"change",f.hitch(this,this.chkCountChanged)));this.chk_area=this._initCheckBox(this.nls.area_checkBox,this.div_chkArea);this.own(k(this.chk_area,"change",f.hitch(this,this.chkAreaChanged)));this.editAreaOptions=this._initValueOptions(this.div_chkArea);this.own(k(this.editAreaOptions,
"click",f.hitch(this,this.showAreaOptions)));this.chk_length=this._initCheckBox(this.nls.length_checkBox,this.div_chkLength);this.own(k(this.chk_length,"change",f.hitch(this,this.chkLengthChanged)));this.editLengthOptions=this._initValueOptions(this.div_chkLength);this.own(k(this.editLengthOptions,"click",f.hitch(this,this.showLengthOptions)));this.chk_analysisSummary=this._initCheckBox(this.nls.analysisSummaryLabelForReport,this.div_chkAnalysisSummary);this.chk_analysisSummary.check();this.chk_PopUpSummary=
this._initCheckBox(this.nls.popUpSummaryLabelForReport,this.div_chkPopUpSummary);this.chk_PopUpSummary.check()},_initCheckBox:function(a,b){var c=new J;c.setLabel(a);c.placeAt(b);return c},_initValueOptions:function(a){a=x.create("div",{className:"float-right edit-options edit-fields"},a);a.setStatus=this._setStatus;return a},_setStatus:function(a){var b=a?"edit-fields-disabled":"edit-fields";a=a?"edit-fields":"edit-fields-disabled";m.contains(this,b)&&m.remove(this,b);m.add(this,a)},startup:function(){var a=
null;this.test||(a="summary"===this.callerTab.type?[{name:"layer",title:this.nls.fieldTitle,"class":"label",type:"empty",width:"250px"},{name:"label",title:this.nls.layerLabel,"class":"label",type:"empty",width:"200px"},{name:"type",title:this.nls.typeTitle,"class":"sumlabel",type:"empty",width:"150px"},{name:"actions",title:this.nls.actionsTitle,"class":"actions",type:"actions",actions:["up","down","edit","delete"]}]:"groupedSummary"===this.callerTab.type?[{name:"layer",title:this.nls.groupByField,
"class":"label",type:"empty",width:"40%"},{name:"label",title:this.nls.layerLabel,"class":"label",type:"empty",width:"20%"},{name:"type",title:this.nls.labelType,"class":"label",type:"empty",width:"20%"}]:[{name:"layer",title:this.nls.fieldTitle,"class":"label",type:"empty",width:"60%"},{name:"label",title:this.nls.layerLabel,"class":"label",type:"empty",width:"200px"},{name:"actions",title:this.nls.actionsTitle,"class":"actions",type:"actions",actions:["up","down","edit","delete"],width:"40%"}],
this.displayFieldsTable=new N({fields:a}),this.displayFieldsTable.placeAt(this.fieldTable),u.setStyle(this.displayFieldsTable.domNode,{height:"100%"}),this.displayFieldsTable.startup(),this.operationsList=[],"summary"===this.callerTab.type?this.operationsList.push({value:"sum",label:this.nls.sum},{value:"avg",label:this.nls.avg},{value:"min",label:this.nls.min},{value:"max",label:this.nls.max}):"groupedSummary"===this.callerTab.type&&this.operationsList.push({value:"pre",label:this.nls.prefix},{value:"suf",
label:this.nls.suffix}),this._initCheckBoxes(),"summary"===this.callerTab.type?(l.set(this.chk_summary,"display","block"),l.set(this.chk_summaryLabels,"display","block"),l.set(this.chk_countOnly,"display","none"),l.set(this.editAreaOptions,"display","block"),l.set(this.editLengthOptions,"display","block")):(l.set(this.chk_countOnly,"display","block"),l.set(this.chk_summary,"display","none"),l.set(this.chk_summaryLabels,"display","none"),l.set(this.editAreaOptions,"display","none"),l.set(this.editLengthOptions,
"display","none")),this.btnCancel.innerText=this.nls.common.cancel,this.own(k(this.btnCancel,"click",f.hitch(this,function(){this.emit("cancel")}))),this.btnOk.innerText=this.nls.common.ok,this.own(k(this.btnOk,"click",f.hitch(this,function(){if(!m.contains(this.btnOk,"jimu-state-disabled")){this.updateSummaryType();var b=!1,c;for(c in this.advStat.stats)this.advStat.stats.hasOwnProperty(c)&&(b=!0);b||(this.advStat=null);this._addFieldOrder();this._addReportOptions();this.emit("ok",this.advStat)}}))),
this.layerTables=[],this.summaryLayers=[],this.advStat={},this._getAllValidLayers().then(f.hitch(this,function(){"groupedSummary"===this.callerTab.type?(l.set(this.btnAddField,"display","none"),this.hasFields&&this._addTabRow()):this.hasFields&&(this.addHandler=this.own(k(this.btnAddField,"click",f.hitch(this,this._addTabRow))),this.own(k(this.displayFieldsTable,"row-delete",f.hitch(this,this._rowDeleted))),this.own(k(this.displayFieldsTable,"actions-edit",f.hitch(this,this._rowEdit))))})))},_addFieldOrder:function(){var a=
[],b=this.displayFieldsTable.getRows();r.forEach(b,function(c){c.selectTypes?a.push({fieldName:c.selectFields.value,fieldType:c.selectTypes.value}):a.push(c.selectFields.value)});1<a.length&&(this.advStat.fieldOrder=a)},_updateGeomOptions:function(a){a&&(this.chk_area.setStatus("esriGeometryPolygon"===a),this.editAreaOptions.setStatus("esriGeometryPolygon"===a&&this.chk_area.checked),this.chk_length.setStatus("esriGeometryPolyline"===a),this.editLengthOptions.setStatus("esriGeometryPolyline"===a&&
this.chk_length.checked))},_getAllValidLayers:function(a){var b=new B;r.forEach(this.callerOpLayers,f.hitch(this,function(d){0<d.newSubLayers.length?this._recurseOpLayers(d.newSubLayers):d.id===this.callerLayer&&(this.layerList=d)}));if(this.layerList.layerObject.empty){if(this.layerList.layerObject.url){var c=new K(this.layerList.layerObject.url);k(c,"load",f.hitch(this,function(){this._completeMapLayers(c,a);b.resolve("sucess")}))}}else this._completeMapLayers(this.layerList,a),b.resolve("sucess");
return b},_recurseOpLayers:function(a){r.forEach(a,f.hitch(this,function(b){0<b.newSubLayers.length?this._recurseOpLayers(b.newSubLayers):b.id===this.callerLayer&&(this.layerList=b)}))},_completeMapLayers:function(a,b){if(a){a="undefined"===typeof a.layerObject?a:a.layerObject;var c=a.geometryType;this.objectIdField=a.objectIdField;var d={url:a.url,stats:{}},e=f.clone(a.fields),g=this.getSkipFields(a),n=[];r.forEach(e,function(h){-1===g.indexOf(h.name)&&n.push(h)});this.fields=n;this.popUpFields=
this._getPopupFields(a);this.advStat=d;if("undefined"===typeof b){this._updateGeomOptions(c);if(this.advStat.url){if("undefined"!==typeof this.callerTab.advStat&&this.callerTab.advStat){this.callerTab.advStat.stats?this._setFields(n):this._setFields(n,!0);var p=f.clone(this.callerTab.advStat.stats);this.callerTab.advStat.stats&&this.callerTab.advStat.fieldOrder&&r.forEach(this.callerTab.advStat.fieldOrder,f.hitch(this,function(h){if(h=h&&h.hasOwnProperty("fieldName")?this._initFieldsByFieldOrder(p,
h):this._initFieldsByName(p,h))this._populateTabTableRow(h.key,h.element),p[h.key].splice(h.index,1),0===p[h.key].length&&delete p[h.key]}));for(var q in p)"count"===q?(this.chk_count.setValue(!0),this.featureCountLabel.set("value",p[q][0].label)):"area"===q?(this.chk_area.setValue(!0),this.featureAreaLabel.set("value",p[q][0].label),this.areaOptions=p[q][0]):"length"===q?(this.chk_length.setValue(!0),this.featureLengthLabel.set("value",p[q][0].label),this.lengthOptions=p[q][0]):"tabCount"===q?this.chk_count_only.setValue(p[q]):
"undefined"===typeof this.callerTab.advStat.fieldOrder&&r.forEach(p[q],f.hitch(this,function(h){this._populateTabTableRow(q,h)}))}else this._setFields(n,!0);b=this.callerTab.advStat;if(!b||"undefined"!==typeof b&&!b.hasOwnProperty("stats"))if(b=0<this.popUpFields.length,a=this.fieldsList.length,"groupedSummary"===this.callerTab.type&&(a=1,b||this._setFields(n)),0<a){c="summary"===this.callerTab.type?21:4;e=d=0;a:for(;e<a;e++){var D=!1,y=this.fieldsList[e];if(b){var P=this.popUpFields[e],z=0;b:for(;z<
this.fieldsList.length;z++)if(y=this.fieldsList[z],y.value===P){D=!0;break b}}if(D)if(d+=1,d<c)this._addTabRow(y);else{m.add(this.btnAddField,"btn-add-disabled");break a}}3===d&&m.add(this.btnAddField,"btn-add-disabled")}else m.add(this.btnAddField,"btn-add-disabled"),this.hasFields=!1}this.callerTab.hasOwnProperty("advStat")&&this.callerTab.advStat.hasOwnProperty("analysisSummaryForReport")&&this.callerTab.advStat.hasOwnProperty("PopUpSummaryForReport")?(this.chk_analysisSummary.setValue(this.callerTab.advStat.analysisSummaryForReport),
this.chk_PopUpSummary.setValue(this.callerTab.advStat.PopUpSummaryForReport)):(this.chk_analysisSummary.setValue(!0),this.chk_PopUpSummary.setValue(!0));("groupedSummary"===this.callerTab.type&&0<this.popUpFields.length||"groupedSummary"!==this.callerTab.type)&&this._setFields(n)}}},_initFieldsByFieldOrder:function(a,b){return this._getFieldInfo(a,b.fieldType,b.fieldName)},_initFieldsByName:function(a,b){var c=["count","area","length","tabCount"],d;for(d in a)if(-1===c.indexOf(d))return this._getFieldInfo(a,
d,b)},_getFieldInfo:function(a,b,c){a=a[b];for(var d=0;d<a.length;d++){var e=a[d];if(e.expression&&e.expression===c)return{key:b,element:e,index:d,statGroup:a}}},_validatePopupFields:function(){var a=new B;this._getAllValidLayers(!0).then(f.hitch(this,function(){for(var b=[],c=0;c<this.popUpFields.length;c++){var d=this.popUpFields[c],e=0;a:for(;e<this.fields.length;e++){var g=this.fields[e];if(d===g.name){b.push(g);break a}}}this.callerTab.type="summary";this._setFields(b,!0);c=0<this.fieldsList.length;
this._setFields(this.fields);a.resolve({layer:this.callerLayer,hasPopupFields:0<b.length,hasFields:0<this.fields.length,hasSummaryPopupFields:c,hasSummaryFields:0<this.fieldsList.length,popUpFields:b,validSummaryFields:this.fieldsList,advStat:this.advStat})}));return a},_getPopupFields:function(a){var b=this.getSkipFields(a),c=[];this.objectIdField=a.objectIdField;if(a.infoTemplate)var d=a.infoTemplate.info.fieldInfos;else if(a.url&&-1<a.url.indexOf("MapServer")){a=a.url.split("MapServer/")[1];var e=
this.map.itemInfo.itemData.operationalLayers;d=null;for(var g=0;g<e.length;g++){var n=e[g];if(n.layerObject&&n.layerObject.infoTemplates&&(n=n.layerObject.infoTemplates[a])){d=n.infoTemplate.info.fieldInfos;break}}}if(d)for(a=0;a<d.length;a++)(e=d[a])&&e.visible&&-1===b.indexOf(e.fieldName)&&c.push(e.fieldName);return c},checkStringWidth:function(a){var b=x.create("div",{"class":"visDivLength",id:"SA_VisDiv",innerHTML:a},this.domNode);a=220>b.clientWidth?!0:!1;x.destroy(b);var c=a,d=w.byNode(this.domNode).id;
t(".validationBox").forEach(function(e){e=w.byNode(e);d!==e.id&&(c=c?"Error"!==e.state:c)});(b=t(".field-picker-footer")[0])&&(c?u.removeClass(b.children[0],"jimu-state-disabled"):u.addClass(b.children[0],"jimu-state-disabled"));return a},_setFields:function(a,b){var c=["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeDouble"];"summary"!==this.callerTab.type&&(c.push("esriFieldTypeString"),c.push("esriFieldTypeDate"));var d=[],e=[];r.forEach(a,f.hitch(this,function(g){-1<c.indexOf(g.type)&&
(b&&this.popUpFields&&-1<this.popUpFields.indexOf(g.name)&&e.push(g.name),d.push({label:g.alias,value:g.name}))}));1>d.length?(m.add(this.btnAddField,"btn-add-disabled"),this.hasFields=!1):this.test||(l.set(this.displayFieldsTable.domNode,"display","block"),l.set(this.btnAddField,"display","inline-block"));e.length!==this.popUpFields.length&&(this.popUpFields=e);this.fieldsList=f.clone(d)},_populateTabTableRow:function(a,b){var c=this.displayFieldsTable.addRow({});c.success&&c.tr&&(c=c.tr,this._addTabFields(c),
this._addTabTypes(c),this._addTabLabel(c),c.selectFields.set("value",b.expression),("summary"===this.callerTab.type||"groupedSummary"===this.callerTab.type||b.validLabel)&&c.labelText.set("value",b.label),c.selectTypes&&c.selectTypes.set("value",a),this._addFieldOptions(c,b));this._checkFields()},_addTabRow:function(a){var b=this.displayFieldsTable.getRows().length;"summary"!==this.callerTab.type&&3<=b?new C({message:this.nls.max_records}):"groupedSummary"===this.callerTab.type&&0<b||(b=this.displayFieldsTable.addRow({}),
b.success&&b.tr&&(b=b.tr,this._addTabFields(b),this._addTabTypes(b),this._addTabLabel(b),a&&b.selectFields.set("value",a.value),this._enableOk()),this._checkFields())},_checkFields:function(){"summary"!==this.callerTab.type&&"groupedSummary"!==this.callerTab.type&&3===this.displayFieldsTable.getRows().length&&m.add(this.btnAddField,"btn-add-disabled")},_addTabFields:function(a){var b=f.clone(this.fieldsList),c=t(".simple-table-cell",a)[0];c&&(b=new A({style:{height:"24px",width:"100%"},"class":"summary"===
this.callerTab.type?"shortSelect":"longSelect",options:b}),b.placeAt(c),b.startup(),a.selectFields=b)},_addTabLabel:function(a){var b=t(".simple-table-cell",a)[1],c=new G({style:{width:"100%",height:"24px"},"class":"validationBox"});c.invalidMessage=this.nls.invalid_string_width;c.placeAt(b);c.startup();c.validator=this.checkStringWidth;a.labelText=c},_addTabTypes:function(a){if("summary"===this.callerTab.type||"groupedSummary"===this.callerTab.type){var b=f.clone(this.operationsList),c=t(".simple-table-cell",
a)[2];c&&(b=new A({style:{width:"100%",height:"24px"},options:b}),b.placeAt(c),b.startup(),a.selectTypes=b)}},_addFieldOptions:function(a,b){a.modify=b.modify;a.round=b.round;a.truncate=b.truncate;a.roundPlaces=b.roundPlaces;a.truncatePlaces=b.truncatePlaces},getSkipFields:function(a){var b=[];if(a.fields)for(var c=0;c<a.fields.length;c++){var d=a.fields[c];d&&d.type&&d.name&&"esriFieldTypeGeometry"===d.type&&b.push(d.name)}a.globalIdField&&""!==a.globalIdField&&b.push(a.globalIdField);a.objectIdField&&
""!==a.objectIdField&&b.push(a.objectIdField);return b},getDefaultFields:function(a,b,c){var d={stats:{fields:[],tabCount:!1},analysisSummaryForReport:!0,PopUpSummaryForReport:!0};if("summary"!==c&&"groupedSummary"!==c){b=[];for(c=0;c<(3>a.length?a.length:3);c++){var e=a[c];b.push({value:0,expression:e.name,label:e.alias})}0<b.length&&(d.stats.outFields=b)}else"summary"===c&&b&&b.hasOwnProperty("length")&&0<b.length&&(d.stats.sum=[],r.forEach(b,f.hitch(this,function(g){d.stats.sum.push({value:0,expression:g.name||
g.value,label:g.alias?g.alias:g.label?g.label:g.name||g.value})})));return d},updateSummaryType:function(){var a=this.displayFieldsTable.getRows();if("summary"!==this.callerTab.type&&"groupedSummary"!==this.callerTab.type){var b=[];r.forEach(a,function(c){b.push({value:0,expression:c.selectFields.value,label:v.stripHTML(c.labelText.value),validLabel:!0,modify:c.modify,round:c.round,truncate:c.truncate,roundPlaces:c.roundPlaces,truncatePlaces:c.truncatePlaces})});0<b.length&&(this.advStat.stats.outFields=
b);this.advStat.stats.tabCount=this.chk_count_only.getValue()}else this.advStat.stats.tabCount="groupedSummary"===this.callerTab.type?this.chk_count_only.getValue():this.chk_count.getValue(),this.chk_count.getValue()&&(this.advStat.stats.count=[{value:0,expression:this.objectIdField,label:v.stripHTML(this.featureCountLabel.value?this.featureCountLabel.value:this.nls.count)}]),this.chk_area.getValue()&&(this.advStat.stats.area=[{value:0,expression:this.objectIdField,label:v.stripHTML(this.featureAreaLabel.value?
this.featureAreaLabel.value:this.nls.area)}],this.areaOptions&&f.mixin(this.advStat.stats.area[0],this.areaOptions)),this.chk_length.getValue()&&(this.advStat.stats.length=[{value:0,expression:this.objectIdField,label:v.stripHTML(this.featureLengthLabel.value?this.featureLengthLabel.value:this.nls.length)}],this.lengthOptions&&f.mixin(this.advStat.stats.length[0],this.lengthOptions)),r.forEach(a,f.hitch(this,function(c){"undefined"===typeof this.advStat.stats[c.selectTypes.value]&&(this.advStat.stats[c.selectTypes.value]=
[]);for(var d={value:0,expression:c.selectFields.value,modify:c.modify,round:c.round,truncate:c.truncate,roundPlaces:c.roundPlaces,truncatePlaces:c.truncatePlaces},e=0;e<c.selectFields.options.length;e++)if(c.selectFields.options[e].value===c.selectFields.value){d.label="groupedSummary"!==this.callerTab.type?c.labelText.value?c.labelText.value:c.selectFields.options[e].label:c.labelText.value;break}"undefined"===typeof d.label&&(d.label=d.expression);this.advStat.stats[c.selectTypes.value].push(d)}));
console.log("ADVSTAT",this.advStat)},chkCountChanged:function(a){"summary"===this.callerTab.type&&(this.updateLabel(this.featureCountLabel,a),a?this._enableOk():0===this.displayFieldsTable.getRows().length?this._disableOk():this._enableOk())},chkAreaChanged:function(a){this.updateLabel(this.featureAreaLabel,a);this.updateEdit(this.editAreaOptions,a)},showAreaOptions:function(){m.contains(this.editAreaOptions,"edit-fields-disabled")||this._showEditOptions("area")},chkLengthChanged:function(a){this.updateLabel(this.featureLengthLabel,
a);this.updateEdit(this.editLengthOptions,a)},showLengthOptions:function(){m.contains(this.editLengthOptions,"edit-fields-disabled")||this._showEditOptions("length")},_showEditOptions:function(a){this._initFieldOptions("area"===a?this.areaOptions:this.lengthOptions,a)},_initFieldOptions:function(a,b){var c=new O({nls:this.nls,tr:"area"===b?this.areaOptions:"length"===b?this.lengthOptions:a}),d=new I({width:445,autoHeight:!0,content:c,titleLabel:this.nls.fieldOptions,nls:this.nls});this.own(k(c,"ok",
f.hitch(this,function(e){"area"===b?this.areaOptions=e:"length"===b?this.lengthOptions=e:f.mixin(a,e);c.destroy();c=null;d.close()})));this.own(k(c,"cancel",f.hitch(this,function(){c.destroy();c=null;d.close()})))},updateLabel:function(a,b){a.set("disabled",!b);a.validator=this.checkStringWidth;a.invalidMessage=this.nls.invalid_string_width;b&&""===a.value&&(b="",a.id===this.featureCountLabel.id?b=this.nls.count:a.id===this.featureAreaLabel.id?b=this.nls.area:a.id===this.featureLengthLabel.id&&(b=
this.nls.length),a.set("value",b));this.validateAll()},updateEdit:function(a,b){a.setStatus(b)},validateAll:function(){var a=!0;t(".validationBox").forEach(function(c){c=w.byNode(c);a=a?"Error"!==c.state:a});var b=t(".field-picker-footer")[0];b&&(a?u.removeClass(b.children[0],"jimu-state-disabled"):u.addClass(b.children[0],"jimu-state-disabled"))},_rowDeleted:function(){this.validateAll();var a=this.displayFieldsTable.getRows();0===a.length?"summary"===this.callerTab.type&&this.chk_count.getValue()?
this._enableOk():this._disableOk():this._enableOk();"summary"!==this.callerTab.type&&"groupedSummary"!==this.callerTab.type&&3>a.length&&m.contains(this.btnAddField,"btn-add-disabled")&&m.remove(this.btnAddField,"btn-add-disabled")},_rowEdit:function(a){this._validateRowType(a.selectFields.value)?this._initFieldOptions(a,"",!1):new C({message:this.nls.onlyDouble})},_validateRowType:function(a){var b=["esriFieldTypeDouble","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle"],c=
this.fields.filter(function(d){return d.name===a&&-1<b.indexOf(d.type)});return c&&0<c.length},_disableOk:function(){var a=t(".field-picker-footer")[0];a&&u.addClass(a.children[0],"jimu-state-disabled")},_enableOk:function(){var a=t(".field-picker-footer")[0];a&&u.removeClass(a.children[0],"jimu-state-disabled")},destroy:function(){this.advStat=null},_addReportOptions:function(){this.advStat.analysisSummaryForReport=this.chk_analysisSummary.getValue();this.advStat.PopUpSummaryForReport=this.chk_PopUpSummary.getValue()}})});