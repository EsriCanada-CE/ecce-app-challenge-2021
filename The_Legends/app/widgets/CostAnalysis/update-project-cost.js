// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/CostAnalysis/update-project-cost.html":'\x3cdiv class\x3d"esriCTProjectListMainContainer"\x3e\r\n  \x3c!-- // list --\x3e\r\n  \x3cdiv class\x3d"esriCTProjectListChildContainer esriCTHidden" data-dojo-attach-point\x3d"projectListChildContainer"\x3e\x3c/div\x3e\r\n  \x3c!-- // button --\x3e\r\n  \x3cdiv class\x3d"esriCTUpdateButtonContainer esriCTHidden" data-dojo-attach-point\x3d"updateButtonParentContainer"\x3e\r\n    \x3cdiv class\x3d"jimu-btn jimu-state-disabled esriCTUpdateEquationBtnDisabled" data-dojo-attach-point\x3d"updateCostEquationButton"\r\n      data-dojo-attach-event\x3d"onclick:_updateCostEquation" role\x3d"button" aria-label\x3d"${nls.updateCostEquationPanel.updateButtonTextForm}"\x3e${nls.updateCostEquationPanel.updateButtonTextForm}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"noFeatureFoundScreen" class\x3d"esriCTNoFeatureFoundScreen esriCTHidden"\x3e${nls.updateCostEquationPanel.updateProjectNoProject}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dojo/Evented dijit/_TemplatedMixin dojo/_base/lang dojo/_base/array dojo/dom-construct jimu/dijit/CheckBox dojo/dom-class dojo/on dojo/text!./update-project-cost.html dojo/promise/all esri/tasks/QueryTask esri/tasks/query jimu/dijit/Message esri/graphic dojo/dom-attr dojo/keys dojo/_base/event".split(" "),function(v,w,x,y,d,f,r,z,g,t,A,l,n,p,B,C,q,u,D){return v([w,x,y],{templateString:A,_updateCostProjectSelectAllCheckBox:null,_filteredProjectNameOptions:null,
constructor:function(a){a&&d.mixin(this,a)},postCreate:function(){this.inherited(arguments);this.own(t(this.updateCostEquationButton,"keydown",d.hitch(this,function(a){if(a.keyCode===u.ENTER||a.keyCode===u.SPACE)D.stop(a),this._updateCostEquation()})))},startup:function(){this.inherited(arguments);this.loadingIndicator.show();this._initializeData();this._filteredProjectNameOptions=f.filter(this.projectNameOptions,d.hitch(this,function(a){return a.label!==this.nls.createLoadProject.selectProject}));
0<this._filteredProjectNameOptions.length?this._displayProjectCostEquationList():this._displayNoFeatureFoundScreen();this.loadingIndicator.hide()},_displayNoFeatureFoundScreen:function(){g.remove(this.noFeatureFoundScreen,"esriCTHidden")},_initializeData:function(){this._filteredProjectNameOptions=this._updateCostProjectSelectAllCheckBox=null},_displayProjectCostEquationList:function(){g.remove(this.projectListChildContainer,"esriCTHidden");g.remove(this.updateButtonParentContainer,"esriCTHidden");
this._updateCostProjectRow(this.nls.updateCostEquationPanel.updateProjectCostSelectProjectTitle,!0);f.forEach(this._filteredProjectNameOptions,d.hitch(this,function(a){this._updateCostProjectRow(a)}));this.emit("updateProjectCostWidgetLoaded")},_updateCostProjectRow:function(a,c){var b,e;e=r.create("div",{"class":"esriCTUpdateCostRowMainNode"},this.projectListChildContainer);c?(g.add(e,"esriCTUpdateCostSelectAll"),b=a):(g.add(e,"esriCTUpdateCostProjectRow"),b=a.label);e=r.create("div",{"class":"esriCTCheckBoxParentNode"},
e);b=new z({"class":"esriCTProjectNameCheckBox",checked:!1,label:b,tabindex:"-1","aria-label":b},e);c?this._updateCostProjectSelectAllCheckBox=b:a.checkbox=b;this.own(t(b,"change",d.hitch(this,function(a){c?this._selectAllUpdateCostCheckBox(a):this._maintainSelectAllState()})))},_selectAllUpdateCostCheckBox:function(a){f.forEach(this._filteredProjectNameOptions,d.hitch(this,function(c){c.checkbox.setValue(a);a&&(q.set(this.updateCostEquationButton,"tabindex","0"),this.updateLastFocusNode(this.updateCostEquationButton,
this.widgetDomNode))}))},_maintainSelectAllState:function(){var a,c;a=!0;c=!1;f.forEach(this._filteredProjectNameOptions,d.hitch(this,function(b){b.checkbox.getValue()||(a=!1);b.checkbox.getValue()&&(c=!0)}));c?(g.remove(this.updateCostEquationButton,"jimu-state-disabled esriCTUpdateEquationBtnDisabled"),q.set(this.updateCostEquationButton,"tabindex","0"),this.updateLastFocusNode(this.updateCostEquationButton,this.widgetDomNode)):(g.add(this.updateCostEquationButton,"jimu-state-disabled esriCTUpdateEquationBtnDisabled"),
q.set(this.updateCostEquationButton,"tabindex","-1"),this.setTabindexOfUpdateProjectCost(!0,this.widgetDomNode));a?(this._updateCostProjectSelectAllCheckBox.check(!0),this.updateLastFocusNode(this.updateCostEquationButton,this.widgetDomNode)):(this._updateCostProjectSelectAllCheckBox.uncheck(!0),c||this.setTabindexOfUpdateProjectCost(!0,this.widgetDomNode))},_updateCostEquation:function(){this.loadingIndicator.show();var a=this._getProjectGuid(),c=this.layerInfosObj.getTableInfoById(this.config.projectSettings.assetTable).layerObject;
this._getAssets(a,c)},_getProjectGuid:function(){var a=[];f.forEach(this._filteredProjectNameOptions,d.hitch(this,function(c){c.checkbox.getValue()&&a.push(c.globalIdValue)}));return a},_getAssets:function(a,c){var b={};b.assetsDeferredList=this._getAssetsDeferred(a,c);l(b).then(d.hitch(this,function(a){var b,c;b=[];c={};f.forEach(a.assetsDeferredList.features,d.hitch(this,function(a){a.hasOwnProperty("attributes")&&a.attributes.hasOwnProperty(this.config.assetTableFields.ASSETGUID)&&b.push(a.attributes[this.config.assetTableFields.ASSETGUID]);
c[a.attributes[this.config.assetTableFields.ASSETGUID]]=a.attributes}));this._getAssetLayers(b,c)}),d.hitch(this,function(){this.loadingIndicator.hide();this._showMessage(this.nls.updateCostEquationPanel.updateProjectCostError)}))},_getAssetsDeferred:function(a,c){a=this.config.assetTableFields.PROJECTGUID+" IN ('"+a.join("','")+"')";c=new n(c.url);var b=new p;b.outFields=["*"];b.where=a;b.returnGeometry=!1;b.outSpatialReference=this.map.spatialReference;return c.execute(b).promise},_getAssetLayers:function(a,
c){var b={};f.forEach(this.config.layerSettings,d.hitch(this,function(c){var e=this.layerInfosObj.getLayerInfoById(c.id);e&&e.layerObject&&e.layerObject.globalIdField&&(b[c.id]=this._getAssetLayerDeferred(c,a))}));l(b).then(d.hitch(this,function(b){b=this._createProjectAssetRelationship(b);b=this._createAssetProjectRelationship(b,a);this._getAssetsGuidName(c,b)}),d.hitch(this,function(){this.loadingIndicator.hide();this._showMessage(this.nls.updateCostEquationPanel.updateProjectCostError)}))},_getAssetsGuidName:function(a,
c){var b={},e=this.map.getLayer(this.config.projectSettings.costingGeometryLayer),k;for(k in a)if(a.hasOwnProperty(k)){var h=a[k][this.config.assetTableFields.GEOGRAPHYGUID];""!==h&&null!==h&&void 0!==h&&(b[k]=this._getAssetGuidDeferred(e,h))}l(b).then(d.hitch(this,function(b){b=this._getAssetGuidNameRelation(b);this._compareAssetsInfoWithConfiguration(c,a,b)}),d.hitch(this,function(){this.loadingIndicator.hide();this._showMessage(this.nls.updateCostEquationPanel.updateProjectCostError)}))},_getAssetGuidNameRelation:function(a){var c=
{},b;for(b in a)a.hasOwnProperty(b)&&(c[b]=a[b].features[0].attributes[this.config.projectSettings.geographyField]);return c},_getAssetGuidDeferred:function(a,c){c=a.globalIdField+" \x3d '"+c+"'";a=new n(a.url);var b=new p;b.outFields=[this.config.projectSettings.geographyField];b.where=c;b.returnGeometry=!1;b.outSpatialReference=this.map.spatialReference;return a.execute(b).promise},_compareAssetsInfoWithConfiguration:function(a,c,b){var e=[],d;for(d in a)if(a.hasOwnProperty(d)){var h=this._getUpdateAssetGraphic(this.config.costingInfoSettings[a[d]],
c,d,b);h&&e.push(h)}0<e.length?this._updateAssetCostingInfo(e):(this.loadingIndicator.hide(),this._showMessage(this.nls.updateCostEquationPanel.updateProjectCostSuccess))},_getUpdateAssetGraphic:function(a,c,b,e){var k=null;f.forEach(a,d.hitch(this,function(a){var d=a.scenario,f=a.featureTemplate,g=a.geography,h=c[b][this.config.assetTableFields.SCENARIO],l=c[b][this.config.assetTableFields.TEMPLATENAME],m;m=e.hasOwnProperty(b)?e[b]:c[b][this.config.assetTableFields.GEOGRAPHYGUID];if(""===d||null===
d)d=null;if(""===g||null===g)g=null;if(""===h||null===h)h=null;if(""===m||null===m)m=null;f===l&&g===m&&d===h&&(d={},d[this.config.assetTableFields.OBJECTID]=c[b][this.config.assetTableFields.OBJECTID],d[this.config.assetTableFields.COSTEQUATION]=a.costEquation,k=new C(null,null,d,null))}));return k},_updateAssetCostingInfo:function(a){this.layerInfosObj.getTableInfoById(this.config.projectSettings.assetTable).layerObject.applyEdits(null,a,null,d.hitch(this,function(){this.loadingIndicator.hide();
this._showMessage(this.nls.updateCostEquationPanel.updateProjectCostSuccess)}),d.hitch(this,function(){this.loadingIndicator.hide();this._showMessage(this.nls.updateCostEquationPanel.updateProjectCostError)}))},_createAssetProjectRelationship:function(a,c){var b={};f.forEach(c,d.hitch(this,function(c){for(var d in a)a.hasOwnProperty(d)&&-1<a[d].indexOf(c)&&(b[c]=d)}));return b},_createProjectAssetRelationship:function(a){var c={},b;for(b in a)if(a.hasOwnProperty(b)){var d=this._getRelatedAssetGuidArr(a[b]);
c[b]=d}return c},_getRelatedAssetGuidArr:function(a){var c=[];f.forEach(a.features,d.hitch(this,function(b){b.hasOwnProperty("attributes")&&c.push(b.attributes[a.globalIdFieldName])}));return c},_getAssetLayerDeferred:function(a,c){c=this.layerInfosObj.getLayerInfoById(a.id).layerObject.globalIdField+" IN ('"+c.join("','")+"')";a=new n(a.url);var b=new p;b.outFields=["*"];b.where=c;b.returnGeometry=!1;b.outSpatialReference=this.map.spatialReference;return a.execute(b).promise},_showMessage:function(a){(new B({message:a})).message=
a}})});