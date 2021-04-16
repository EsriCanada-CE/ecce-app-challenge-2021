// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/Intersection.html":'\x3cdiv class\x3d"esriCTIntersectionMainContainer"\x3e\r\n    \x3cdiv syle\x3d"width:100%"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"groupInfoNode1"\x3e\r\n          \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n            \x3cdiv class\x3d"esriCTIntersectionGroupName"\x3e\r\n              \x3cdiv class\x3d"esriCTlabel"\x3e\r\n                ${nls.intersectionPage.groupNameLabel}\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriCTGroupInfoContainer"\x3e\r\n                \x3cdiv style\x3d"width: 75%;" data-dojo-attach-point\x3d"groupNameTextBoxNode"\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTIntersectionDatatype"\x3e\r\n              \x3cdiv class\x3d"esriCTlabel"\x3e\r\n                ${nls.intersectionPage.dataTypeLabel}\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriCTGroupInfoContainer"\x3e\r\n                \x3cdiv style\x3d"width: 75%;" data-dojo-attach-point\x3d"dataTypeDropDownNode"\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"ignoreLayerRankingNode" class\x3d"esriCTlabel esriCTIgnoreLayerRankingLabel"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n      \x3clegend class\x3d"esriCTLegendTitle"\x3e${nls.intersectionPage.intersectingLayersLabel}\x3c/legend\x3e\r\n      \x3cdiv class\x3d"addLayerLink"\x3e\r\n        \x3cdiv class\x3d"add-with-icon" data-dojo-attach-point\x3d"addLayer"\x3e\r\n          \x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\x3cspan class\x3d"add-label"\x3e\r\n            ${nls.intersectionPage.addLayerLinkText}\x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTIntersectionHint"\x3e${nls.intersectionPage.intersectionLayerHint}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"layerTableNode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/fieldset\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"  data-dojo-attach-point\x3d"groupInfoNode2"\x3e\r\n    \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n      \x3clegend class\x3d"esriCTLegendTitle"\x3e${nls.intersectionPage.layerAndFieldsApplyLabel}\x3c/legend\x3e\r\n      \x3cdiv class\x3d"esriCTTableParentContainer" data-dojo-attach-point\x3d"tableParentContainer"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/fieldset\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dijit/form/Select dojo/_base/array dojo/dom-attr dojo/dom-construct dojo/on dojo/query dojo/promise/all dojo/Deferred dojo/text!./Intersection.html dijit/_TemplatedMixin jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Message jimu/dijit/Popup jimu/dijit/CheckBox dijit/popup dijit/TooltipDialog dijit/form/ValidationTextBox dijit/form/NumberTextBox dijit/form/DropDownButton dojo/dom-class ./layersAndFieldsApplyOn".split(" "),
function(v,w,e,p,h,q,g,k,n,K,x,y,z,l,A,B,C,D,E,u,L,F,G,H,I,r,J){return v([B,w,z],{baseClass:"jimu-widget-smartEditor-setting-intersection",templateString:y,popup:null,totalLayers:[],_layersForApplyOn:[],isGroup:!1,ValidFieldsByType:{esriFieldTypeOID:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeSmallInteger:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeInteger:["esriFieldTypeOID",
"esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeDouble:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeSingle:["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeGUID:["esriFieldTypeGUID","esriFieldTypeGlobalID"],esriFieldTypeDate:["esriFieldTypeDate"],esriFieldTypeString:"esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeGUID esriFieldTypeDate esriFieldTypeOID esriFieldTypeGlobalID".split(" ")},
ValidFieldsByTypeToApplyOn:{esriFieldTypeInteger:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],esriFieldTypeGUID:["esriFieldTypeGUID"],esriFieldTypeDate:["esriFieldTypeDate"],esriFieldTypeString:["esriFieldTypeString"]},postCreate:function(){this.inherited(arguments);this.totalLayers=[];this._layersForApplyOn=[];this._createToleranceSettingsDialogContent();this._createDialogContent();this.isDelete||this.showDialog();this._initLayerSelector();this._createLayersAndFields();
this.own(k(this.addLayer,"click",e.hitch(this,function(){if(0<this.totalLayers.length){var a=this._layerTable.addRow({}).tr;this._addLayersDropDown(a);this._addFieldsDropDown(a);this._addToleranceSettings(a)}else new D({message:this.nls.intersectionPage.noLayersMessage})})))},_createDialogContent:function(){this.isEnabled=!1;this._fieldValues&&this._fieldValues.Intersection&&this._fieldValues.Intersection.hasOwnProperty("enabled")&&(this.isEnabled=this._fieldValues.Intersection.enabled);this._initControls();
this._initTable()},_initControls:function(){this.groupNameTextBox=new G({style:{width:"100%"},required:!0,trim:!0},g.create("div",{},this.groupNameTextBoxNode));this.groupNameTextBox.validator=e.hitch(this,function(a){return a?a!==this.prevName&&this.editUtils.isDuplicateGroupName(a,this.existingGroupNames)?(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.uniqueGroupNameMsg),!1):!0:(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.requiredGroupNameMsg),!1)});
this.name&&this.groupNameTextBox.set("value",this.name);this.dataTypeDropdown=new p({options:this._addDataTypeOptions(),style:{width:"100%"}});this.dataTypeDropdown.placeAt(this.dataTypeDropDownNode);this.dataTypeDropdown.startup();this.own(k(this.dataTypeDropdown,"change",e.hitch(this,function(a){this.isGroup&&(this._fieldType=a,this.totalLayers=[],this._layersForApplyOn=[],a=this._layerTable.getRows(),h.forEach(a,e.hitch(this,function(b){this._layerTable.deleteRow(b)})),this._initLayerSelector(),
this._createLayersAndFields())})));this._fieldType&&this.dataTypeDropdown.set("value",this._fieldType,!1);this.ignoreLayerRanking=new u({label:this.nls.intersectionPage.ignoreLayerRankingCheckboxLabel},g.create("div",{},this.ignoreLayerRankingNode))},_addDataTypeOptions:function(){return[{label:this.nls.dataType.esriFieldTypeString,value:"esriFieldTypeString"},{label:this.nls.dataType.esriFieldTypeInteger,value:"esriFieldTypeInteger"},{label:this.nls.dataType.esriFieldTypeDate,value:"esriFieldTypeDate"},
{label:this.nls.dataType.esriFieldTypeGUID,value:"esriFieldTypeGUID"}]},_initTable:function(){this._layerTable=new C({fields:[{name:"layerName",title:this.nls.intersectionPage.layerText,type:"empty",width:"30%"},{name:"fieldName",title:this.nls.intersectionPage.fieldText,type:"empty",width:"30%"},{name:"toleranceSettings",title:this.nls.intersectionPage.toleranceSettingText,type:"empty",width:"25%"},{name:"actions",title:this.nls.intersectionPage.actionsText,type:"actions",width:"15%",actions:["up",
"down","delete"],"class":"actions"}],selectable:!1});this._layerTable.placeAt(this.layerTableNode);this._layerTable.startup();this.own(k(this._layerTable,"actions-edit",e.hitch(this,this._onEditFieldInfoClick)));this.own(k(this._layerTable,"actions-delete",e.hitch(this,this._onDeleteFieldInfoClick)));this._populateTableData()},_populateTableData:function(){this._fieldValues.Intersection.ignoreLayerRanking&&this.ignoreLayerRanking.setValue(!0);h.forEach(this._fieldValues.Intersection.fields,e.hitch(this,
function(a){if(a.layerId&&this.layerInfos.getLayerInfoById(a.layerId)){var b=this._layerTable.addRow({}).tr;this._addLayersDropDown(b,a);this._addFieldsDropDown(b,a);this._addToleranceSettings(b,a)}}))},_createToleranceSettingsDialogContent:function(){var a=g.create("div",{"class":"esriCTpopupFieldContent"});this._useDefaultToleranceCheckbox=new u({label:this.nls.intersectionPage.useDefaultToleranceText},g.create("div",{"class":"esriCTPopupLabels"},a));g.create("div",{"class":"esriCTPopupLabels esriCTMargin",
innerHTML:this.nls.intersectionPage.toleranceValueText},a);this._toleranceValueTextbox=new H({style:{width:"100%"},constraints:{min:0},required:!0},g.create("div",{"class":"esriCTPopupLabels"},a));g.create("div",{"class":"esriCTPopupLabels esriCTMargin",innerHTML:this.nls.intersectionPage.toleranceUnitText},a);var b=[{label:this.nls.units.miles,value:"miles"},{label:this.nls.units.kilometers,value:"kilometers"},{label:this.nls.units.meters,value:"meters"},{label:this.nls.units.feet,value:"feet"}];
var c=g.create("div",{},a);this._toleranceUnitDropdown=new p({style:{width:"200px"},options:b});this._toleranceUnitDropdown.placeAt(c);this._toleranceUnitDropdown.startup();this.toleranceSettingIconDialog=new F({"class":this.baseClass,content:a});this.own(k(this.toleranceSettingIconDialog,"close",e.hitch(this,function(){var d;var f=this._useDefaultToleranceCheckbox.getValue();var m=this._toleranceValueTextbox.get("value");var t=this._toleranceUnitDropdown.getValue();f?d=this._useDefaultToleranceCheckbox.label:
this._toleranceValueTextbox.isValid()&&(d="px"===t?m+" "+this.nls.intersectionPage.pixelsUnitText:m+" "+this.nls.units[t]);if(f||this._toleranceValueTextbox.isValid())this._toleranceValueTextbox.isValid()?this._selectedRowForToleranceSettings.toleranceSettings.value=m:this._selectedRowForToleranceSettings.toleranceSettings.value=0,this._selectedRowForToleranceSettings.toleranceSettings.unit=t,this._selectedRowForToleranceSettings.toleranceSettings.useDefault=f,q.set(this._selectedRowForToleranceSettings.toleranceTextContainer,
"innerHTML",d),q.set(this._selectedRowForToleranceSettings.toleranceTextContainer,"title",d)})))},_addToleranceSettings:function(a,b){a.toleranceSettings=b&&b.toleranceSettings?b.toleranceSettings:{useDefault:!1,value:0,unit:"meters"};b=a.toleranceSettings.useDefault?this._useDefaultToleranceCheckbox.label:"px"===a.toleranceSettings.unit?a.toleranceSettings.value+" "+this.nls.intersectionPage.pixelsUnitText:a.toleranceSettings.value+" "+this.nls.units[a.toleranceSettings.unit];var c=n(".simple-table-cell",
a)[2];c=g.create("div",{"class":"esriCTToleranceParentDiv"},c);a.toleranceTextContainer=g.create("div",{"class":"esriCTToleranceValueText esriCTEllipsis",innerHTML:b,title:b},c);b=new I({iconClass:"esriCTToleranceSettingsIcon",dropDown:this.toleranceSettingIconDialog,title:this.nls.intersectionPage.toleranceSettingText},g.create("div",{},c));this.own(k(b,"click",e.hitch(this,function(){this._selectedRowForToleranceSettings=a;this._updateUnitsOption();this._toleranceValueTextbox.set("value",a.toleranceSettings.value);
this._useDefaultToleranceCheckbox.setValue(a.toleranceSettings.useDefault);this._toleranceUnitDropdown.set("value",a.toleranceSettings.unit)})))},_updateUnitsOption:function(){var a=!1;"esriGeometryPoint"===this._selectedRowForToleranceSettings.layerSelector.getSelectedItem().layerInfo.layerObject.geometryType?(h.some(this._toleranceUnitDropdown.options,e.hitch(this,function(b){if("px"===b.value)return a=!0})),a||this._toleranceUnitDropdown.addOption({label:this.nls.intersectionPage.pixelsUnitText,
value:"px"})):this._toleranceUnitDropdown.removeOption("px")},_addLayersDropDown:function(a,b){a.layerSelector&&a.layerSelector.destroy();var c=this._createLayerChooserMapArgs();var d=new l(c);d.startup();c=n(".simple-table-cell",a)[0];d=new A({layerChooser:d});d.placeAt(c);d.startup();a.layerSelector=d;d.setSelectedLayer(this.totalLayers[0]);b&&d.setSelectedLayer(this.layerInfos.getLayerInfoById(b.layerId).layerObject);this.own(k(d,"selection-change",e.hitch(this,function(){a.layerFields.set("options",
this._addLayerFieldOptions(a));a.layerFields.set("value",a.layerFields.options[0],!1);var f=n(".esriCTToleranceValueText",a)[0];var m=this.nls.units.meters;a.toleranceSettings={value:0,unit:"meters"};q.set(f,"innerHTML","0 "+m)})))},_createLayerChooserMapArgs:function(){return{multiple:!1,createMapResponse:this.map.webMapResponse,filter:this._createFiltersForLayerSelector()}},_createIntersectionLayerfilter:function(a){return function(b){var c=!1;b.getLayerObject().then(function(d){d&&d.fields&&h.some(d.fields,
function(f){if(-1<a.indexOf(f.type))return c=!0})});return c}},_createFiltersForLayerSelector:function(){var a=l.createFeaturelayerFilter(["point","polyline","polygon"],!1,!1);var b=l.createImageServiceLayerFilter(!0);a=l.orCombineFilters([a,b]);b=this._createIntersectionLayerfilter(this.ValidFieldsByType[this._fieldType]);return l.andCombineFilters([a,b])},_initLayerSelector:function(){var a=[];var b=this._createLayerChooserMapArgs();this._layerChooserFromMap=new l(b);this._layerChooserFromMap.startup();
b=this._layerChooserFromMap.layerInfosObj.getLayerInfoArray();this._getAllFilteredLayers(b,a);return a},_getAllFilteredLayers:function(a,b){h.forEach(a,e.hitch(this,function(c){if(c.isLeaf()){var d=new x;this._layerChooserFromMap.filter(c).then(e.hitch(this,function(f){f&&(this.totalLayers.push(c),this._isLayerEditable(c)&&this._layersForApplyOn.push(c));d.resolve()}));b.push(d)}else this._getAllFilteredLayers(c.newSubLayers,b)}))},_isLayerEditable:function(a){var b=!1;a&&a.layerObject&&a.layerObject.getEditCapabilities&&
(a=a.layerObject.getEditCapabilities(),a.canCreate||a.canUpdate||a.canDelete||a.canUpdateGeometry)&&(b=!0);return b},_addFieldsDropDown:function(a,b){var c;if(c=n(".simple-table-cell",a)[1])c=g.create("div",{"class":"esriCTDropDownContainer"},c),a.layerFields=new p({options:this._addLayerFieldOptions(a),"class":"esriCTSettingsFieldDropdown"}),a.layerFields.placeAt(c),a.layerFields.startup(),b&&a.layerFields.set("value",b.field,!1)},_addLayerNameOptions:function(){var a=[];var b=this.layerInfos.getLayerInfoArray();
h.forEach(b,e.hitch(this,function(c){-1<c.layerObject.capabilities.indexOf("Query")&&a.push({label:c.layerObject.name,value:c.layerObject.id})}));return a},_addLayerFieldOptions:function(a){var b=[],c=[];if(!a.layerSelector.getSelectedItem())return b;"esriFieldTypeString"===this._fieldType&&b.push({label:this.nls.intersectionPage.useLayerName,value:"esriCTUseLayerName"});c=this.ValidFieldsByType[this._fieldType];a=a.layerSelector.getSelectedItem().layerInfo.layerObject;h.forEach(a.fields,e.hitch(this,
function(d){"esriFieldTypeGeometry"!==d.type&&"esriFieldTypeBlob"!==d.type&&"esriFieldTypeRaster"!==d.type&&"esriFieldTypeXML"!==d.type&&-1<c.indexOf(d.type)&&b.push({label:d.alias||d.name,value:d.name})}));return b},showDialog:function(){var a=600,b=!1;this.isGroup||(r.add(this.groupInfoNode1,"esriCTHidden"),r.add(this.groupInfoNode2,"esriCTHidden"),r.add(this.layerTableNode,"esriCTIntersectionTableMaxHeight"),b=!0,a=400);var c=new E({titleLabel:this.nls.actionPage.copyAction.intersection,width:950,
maxHeight:a,autoHeight:b,content:this,"class":this.baseClass,buttons:[{label:this.nls.ok,onClick:e.hitch(this,function(){var d={},f={};d.enabled=this.isEnabled;d.ignoreLayerRanking=this.ignoreLayerRanking.checked;d.fields=this._getTableData();if(this.isGroup){if(!this.groupNameTextBox.isValid()){this.groupNameTextBox.focus();return}}else delete this._fieldValues.Intersection.attributeActionGroupName;this._fieldValues.Intersection||(this._fieldValues.Intersection={actionName:"Intersection"});e.mixin(this._fieldValues.Intersection,
d);this.isGroup?(f.name=this.groupNameTextBox.get("value"),f.dataType=this.dataTypeDropdown.get("value"),f.attributeInfo=d,f.appliedOn=this._layerAndFieldsApplyOnObj.getCheckedFields(f),this.emit("groupInfoUpdated",f)):this.emit("attributeActionUpdated");c.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:e.hitch(this,function(){c.close()})}],onClose:e.hitch(this,function(){})});this.isGroup&&this.groupNameTextBox.focus()},_getTableData:function(){var a=[],b;h.forEach(this._layerTable.getRows(),
e.hitch(this,function(c){c.layerSelector&&(b={},b.layerId=c.layerSelector.getSelectedItem().layerInfo.id,b.field=c.layerFields.getValue(),b.toleranceSettings=e.clone(c.toleranceSettings),a.push(b))}));return a},_createLayerFieldsFilter:function(a){var b=[],c={};h.forEach(this._layersForApplyOn,e.hitch(this,function(d){d.isTable||h.forEach(d.layerObject.fields,e.hitch(this,function(f){this.ValidFieldsByTypeToApplyOn[a]&&(b=this.ValidFieldsByTypeToApplyOn[a],-1<b.indexOf(f.type)&&f.editable&&(c[d.id]||
(c[d.id]={}),c[d.id][f.name]=f))}))}));return c},_createLayersAndFields:function(){this._layerAndFieldsApplyOnObj=new J({map:this.map,layerInfos:this.layerInfos,_configInfos:this._configInfos,actionName:"Intersection",nls:this.nls,prevName:this.prevName,existingGroups:this.existingGroups,layerDetails:this._createLayerFieldsFilter(this.dataTypeDropdown.get("value")),appliedOn:this.appliedOn});g.empty(this.tableParentContainer);this._layerAndFieldsApplyOnObj.placeAt(this.tableParentContainer);this._layerAndFieldsApplyOnObj.startup()},
deleteGroup:function(){this._layerAndFieldsApplyOnObj.deleteGroup()}})});