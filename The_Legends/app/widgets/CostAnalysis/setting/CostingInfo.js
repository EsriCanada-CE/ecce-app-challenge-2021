// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/CostingInfo.html":'\x3cdiv class\x3d"esriCTTabNode"\x3e\r\n    \x3c!--Add Layers section --\x3e\r\n    \x3cdiv class\x3d"esriCTTabContainer row"\x3e\r\n        \x3cdiv class\x3d"esriCTManageScenarioButtonContainer"\x3e\r\n            \x3cdiv class\x3d"esriCTMangeScenarios"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"btnManageScenarios" class\x3d"esriCTBtnAddSection esriCTEllipsis"\x3e\r\n                    \x3cspan class\x3d"esriCTBtnAddIcon"\x3e\x3c/span\x3e\r\n                    \x3cspan class\x3d"esriCTBtnAddLabel esriCTEllipsis"\x3e${nls.costingInfo.manageScenariosTitle}\x3c/span\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTHidden esriCTNoEditableLayersAvailable" data-dojo-attach-point\x3d"noEditableLayersAvailable"\x3e\r\n            ${nls.costingInfo.noEditableLayersAvailable}\r\n        \x3c/div\x3e\r\n        \x3c!-- Update cost equation checkbox parent node --\x3e\r\n        \x3cdiv class\x3d"esriCTUpdateCostCheckBoxParentContainer esriCTHidden" data-dojo-attach-point\x3d"updateCostEquationChkContainer"\x3e\r\n            \x3c!-- checkbox container --\x3e\r\n            \x3cdiv class\x3d"esriCTUpdateCheckBoxContainer"\x3e\r\n                \x3c!-- checkbox --\x3e\r\n                \x3cinput id\x3d"esrict-update-costequation-check" data-dojo-attach-point\x3d"updateCostEquationCheckBox"\r\n                    data-dojo-type\x3d"dijit/form/CheckBox" type\x3d"checkbox" checked\x3d"false" /\x3e\r\n                \x3cspan\x3e${nls.costingInfo.updateProjectCostCheckboxLabel}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTUpdateEquationHint esriCTNote"\x3e${nls.costingInfo.updateProjectCostEquationHint}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"costingTemplateContainer"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./CostingInfo.html dojo/on dojo/dom-construct dojo/_base/lang dojo/_base/array ./ManageScenarios ./CostingTemplate esri/tasks/query esri/tasks/QueryTask dojo/Deferred dojo/string dojo/dom-class dijit/form/CheckBox".split(" "),function(m,n,p,q,r,l,t,e,h,u,v,w,x,y,k,g){return m([n,p,q],{templateString:r,_manageScenario:null,totalScenariosCollection:[],costingTemplate:{},_scenarioOptions:[],_geographyOptions:[],
costingInfoData:{},_configuredLayers:[],baseClass:"jimu-widget-cost-analysis-costing-info",constructor:function(a){e.mixin(this,a)},postMixInProperties:function(){this.nls.common={};e.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this.costingTemplate={};this._manageScenario=null;this.totalScenariosCollection=[];this._scenarioOptions=[];this._geographyOptions=[];this.costingInfoData={};this._configuredLayers=[];this.inherited(arguments);this._setUpdateEquationCheckBoxState();
for(var a in this.config.layerSettings)this.config.layerSettings[a].editable&&this._configuredLayers.push(this.config.layerSettings[a].id);this._init();this.own(l(this.btnManageScenarios,"click",e.hitch(this,this._manageScenariosBtnClicked)))},_setUpdateEquationCheckBoxState:function(){this.config&&this.config.hasOwnProperty("updateCostEquationCheckBoxStatus")&&this.updateCostEquationCheckBox.set("checked",this.config.updateCostEquationCheckBoxStatus)},validate:function(){var a=this._validateCostingInfoTabData();
return a.isValid?{isValid:!0}:{isValid:!1,errorMessage:a.errorMessage}},getConfig:function(){return{costingInfoData:this.costingInfoData,scenarios:this.totalScenariosCollection,updateCostEquationCheckBoxStatus:this.updateCostEquationCheckBox.get("checked")}},_init:function(){this._geographyOptions=[{label:this.nls.costingInfo.noneValue,value:""}];this.config.projectSettings&&""!==this.config.projectSettings.costingGeometryLayer&&void 0!==this.config.projectSettings.costingGeometryLayer?this.getGeographyOptions().then(e.hitch(this,
function(){this._createCostingTemplate()})):this.config.layerSettings&&this.config.layerSettings.length&&this._createCostingTemplate()},_createCostingTemplate:function(){var a,b;this._getScenarioOptions(this.config.scenarios);a=this.map.itemInfo.itemData.operationalLayers;this._showHideNoLayerMessage(a.length);if(0<Object.keys(this.config.costingInfoSettings).length)for(b in this.config.costingInfoSettings)if(-1!==this._configuredLayers.indexOf(b)){var c=this._getOperationalLayer(a,b);c&&(!c.errors||
0>=c.errors.length)&&this._createCostingTemplateObj(c)}},_createCostingTemplateObj:function(a){0===this._scenarioOptions.length&&this._scenarioOptions.push({label:this.nls.costingInfo.noneValue,value:""});this.costingTemplate[a.id]=new v({nls:this.nls,map:this.map,config:this.config,layer:a,scenarios:this._scenarioOptions,geographies:this._geographyOptions},t.create("div",{},this.costingTemplateContainer))},_getOperationalLayer:function(a,b){var c;h.some(a,e.hitch(this,function(a){if(a.id===b)return c=
a,!0}));return c},_manageScenariosBtnClicked:function(){this._manageScenario=new u({nls:this.nls,map:this.map,config:this.config,existingScenarios:this.totalScenariosCollection});l(this._manageScenario,"okButtonClicked",e.hitch(this,function(a){this._manageScenario.destroy();this._getScenarioOptions(a)}))},_checkEditCapabilities:function(a){return a&&a.capabilities&&"string"===typeof a.capabilities&&-1!==a.capabilities.indexOf("Delete")&&-1!==a.capabilities.indexOf("Create")&&-1!==a.capabilities.indexOf("Update")&&
a.globalIdField?!0:!1},_getScenarioOptions:function(a){var b,c;this._scenarioOptions=[{label:this.nls.costingInfo.noneValue,value:""}];this.totalScenariosCollection=[];h.forEach(a,e.hitch(this,function(a){b="object"===typeof a?a.field:a;this._scenarioOptions.push({label:b,value:b});this.totalScenariosCollection.push(b)}));for(c in this.costingTemplate)this.costingTemplate[c].updateScenarioOptions(this._scenarioOptions)},getGeographyOptions:function(a,b){var c,d;c=new y;b||(a=this.config.projectSettings.geographyField,
b=this.config.projectSettings.costingGeometryLayer);""!==b&&this.layerInfosObj.getLayerInfoById(b)?(b=this.map._layers[b],b=new x(b.url),d=new w,d.outFields=[a],d.returnDistinctValues=!0,d.returnGeometry=!1,d.where="1\x3d1",b.execute(d,e.hitch(this,function(b){this._geographyQueryTaskComplete(b,a);c.resolve(this._geographyOptions)}),e.hitch(this,function(){this._geographyOptions=[];this._geographyOptions.push({label:this.nls.costingInfo.noneValue,value:""});c.resolve(this._geographyOptions)}))):(this._geographyOptions=
[],this._geographyOptions.push({label:this.nls.costingInfo.noneValue,value:""}),c.resolve(this._geographyOptions));return c.promise},_geographyQueryTaskComplete:function(a,b){this._geographyOptions=[{label:this.nls.costingInfo.noneValue,value:""}];h.forEach(a.features,e.hitch(this,function(a){""!==a.attributes[b]&&null!==a.attributes[b]&&this._geographyOptions.push({label:isNaN(a.attributes[b])?a.attributes[b]:a.attributes[b].toString(),value:a.attributes[b]})}))},_validateCostingInfoTabData:function(){var a,
b,c,d,f,e,g;this.costingInfoData={};for(a in this.costingTemplate)if(e=[],g=[],this.costingTemplate[a]){this.costingInfoData[a]=this.costingTemplate[a].getUpdatedCostingInfo();d=this.costingInfoData[a].length;for(b in this.costingInfoData[a]){f=this.costingInfoData[a][b];-1===g.indexOf(f.featureTemplate)&&g.push(f.featureTemplate);""===f.scenario&&""===f.geography&&-1===e.indexOf(f.featureTemplate)&&e.push(f.featureTemplate);if(!this.costingTemplate[a].validateCostEquation(f.costEquation))return{isValid:!1,
errorMessage:k.substitute(this.nls.costingInfo.requiredCostEquation,{templateName:f.featureTemplate,layerName:this.costingTemplate[a].layer.title})};if(1<d)for(c=parseInt(b,0)+1;c<d;c++){var h;h=this.costingInfoData[a][c];if(f.featureTemplate===h.featureTemplate&&f.scenario===h.scenario&&f.geography===h.geography)return{isValid:!1,errorMessage:k.substitute(this.nls.costingInfo.duplicateTemplateMessage,{layerName:this.costingTemplate[a].layer.title,templateName:f.featureTemplate})}}}d=0;f=g.length;
for(d;d<f;d++)if(-1===e.indexOf(g[d]))return{isValid:!1,errorMessage:k.substitute(this.nls.costingInfo.defaultEquationRequired,{templateName:g[d],layerName:this.costingTemplate[a].layer.title})};if(0===this.costingInfoData[a].length)return{isValid:!1,errorMessage:k.substitute(this.nls.costingInfo.noTemplateAvailable,{layerName:this.costingTemplate[a].layer.title})}}return Object.keys(this.costingInfoData).length?{isValid:!0}:{isValid:!1,errorMessage:k.substitute(this.nls.costingInfo.noLayerMessage,
{tabName:this.nls.costingInfo.tabTitle})}},_updateCostingInfoTable:function(a,b){var c,d;a.layerId?c=a.layerId:(d=a.lastSelectedId,c=a.currentSelectedLayerId);Object.keys(a).length&&(d?(this.costingTemplate[c]&&this._deleteCostingInfoLayer(c),d&&(b||this._addCostingInfoLayer(d))):a.editable?b||this._addCostingInfoLayer(c):this.costingTemplate[c]&&this._deleteCostingInfoLayer(c));this._showHideNoLayerMessage(Object.keys(this.costingTemplate).length)},_showHideNoLayerMessage:function(a){0===a?(g.remove(this.noEditableLayersAvailable,
"esriCTHidden"),g.add(this.updateCostEquationChkContainer,"esriCTHidden"),g.add(this.costingTemplateContainer,"esriCTHidden")):(g.add(this.noEditableLayersAvailable,"esriCTHidden"),g.remove(this.updateCostEquationChkContainer,"esriCTHidden"),g.remove(this.costingTemplateContainer,"esriCTHidden"))},_deleteCostingInfoLayer:function(a){this.costingTemplate[a].destroyRecursive();delete this.costingTemplate[a];delete this.config.costingInfoSettings[a]},_addCostingInfoLayer:function(a){h.some(this.map.itemInfo.itemData.operationalLayers,
e.hitch(this,function(b){if(a===b.id&&this._checkEditCapabilities(b.layerObject))return this._createCostingTemplateObj(b),!0}))},onGeographyFieldUpdate:function(a){for(var b in this.costingTemplate)this.costingTemplate[b].updateGeographyOptions(a)},disableUpdateCostEquationChk:function(a){this.updateCostEquationCheckBox.set("disabled",a);a&&this.updateCostEquationCheckBox.set("value",!1)}})});