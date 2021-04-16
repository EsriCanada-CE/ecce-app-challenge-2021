// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/_base/array","dojo/Deferred","jimu/utils","jimu/ServiceBrowserRule"],function(e,f,h,k,l){var m={combineRules:function(d){var b=new l;f.forEach(d,function(c){f.forEach(c.leafTypes,function(a){0>b.leafTypes.indexOf(a)&&b.leafTypes.push(a)});f.forEach(c.serviceTypes,function(a){0>b.serviceTypes.indexOf(a)&&b.serviceTypes.push(a)})});b.getMatchedRule=function(c){var a=null;f.some(d,function(b){return b.isUrlContainsServiceType(c)?(a=b,!0):!1});return a};b.getItem=function(c){var a=
null;return a=(a=b.getMatchedRule(c))?a.getItem(c):b.defaultGetItem(c)};b.getSubItemUrls=function(c){var a=null;return a=(a=b.getMatchedRule(c))?a.getSubItemUrls(c):b.defaultGetSubItemUrls(c)};b.getIconImageName=function(c,a){var n="";if(c.url){var g=b.getMatchedRule(c.url);g&&"function"===typeof g.getIconImageName&&(n=g.getIconImageName(c,a))}return n};return b},getFeaturelayerServiceBrowserRule:function(d,b,c){d=e.clone(d);var a=["point","polyline","polygon"];e.isArrayLike(d)&&0<d.length?(d=f.filter(d,
function(b){return 0<=a.indexOf(b)}),0===d.length&&(d=a)):d=a;return m._getFeaturelayerServiceBrowserRule(d,b,c)},_getFeaturelayerServiceBrowserRule:function(d,b,c){return new l({types:d,leafTypes:["Feature Layer","Table"],serviceTypes:["MapServer","FeatureServer"],_groupLayerType:"Group Layer",_featureLayerType:"Feature Layer",_tableType:"Table",getItem:function(a){var b=new h;this.isUrlEndWithServiceType(a,this.serviceTypes)?b=this.defaultGetItem(a):this.getRestInfo(a).then(e.hitch(this,function(c){c=
this._getItemByLayerDefinition(a,c);b.resolve(c)}),e.hitch(this,function(a){b.reject(a)}));return b},getSubItemUrls:function(a){var b=new h;return b=this.isUrlEndWithServiceType(a)?this._getSubUrlsByServiceUrl(a):this._getSubUrlsByGroupUrl(a)},getIconImageName:function(a,b){var c="";"MapServer"===a.type||"FeatureServer"===a.type?c=b?"mapserver_open.png":"mapserver_close.png":a.type===this._groupLayerType?c=b?"group_layer2.png":"group_layer1.png":a.type===this._featureLayerType?(a=k.getTypeByGeometryType(a.definition&&
a.definition.geometryType),"point"===a?c="point_layer1.png":"polyline"===a?c="line_layer1.png":"polygon"===a&&(c="polygon_layer1.png")):a.type===this._tableType?c="table.png":"root"===a.type&&this._currentUrl&&f.some(this.serviceTypes,e.hitch(this,function(a){return k.isStringEndWith(this._currentUrl,"/"+a)}))&&(c=b?"mapserver_open.png":"mapserver_close.png");return c},_getSubUrlsByServiceUrl:function(a){var b=new h;this.getRestInfo(a).then(e.hitch(this,function(d){var g=[];f.forEach(d.layers,e.hitch(this,
function(b){0<=b.parentLayerId||g.push(a+"/"+b.id)}));c&&f.forEach(d.tables,e.hitch(this,function(b){0<=b.parentLayerId||g.push(a+"/"+b.id)}));b.resolve(g)}),e.hitch(this,function(a){b.reject(a)}));return b},_getSubUrlsByGroupUrl:function(a){var b=new h;this.getRestInfo(a).then(e.hitch(this,function(c){var d=[];if(c.type===this._groupLayerType)var g=this._getServiceUrlByLayerUrl(a),d=f.map(c.subLayers||[],e.hitch(this,function(a){return g+"/"+a.id}));b.resolve(d)}),e.hitch(this,function(a){b.reject(a)}));
return b},_getItemByLayerDefinition:function(a,c){var d=null,e=c.type;if(e===this._groupLayerType)d={name:c.name,type:e,url:a,definition:c};else if(e===this._featureLayerType||e===this._tableType){var f=!1;e===this._featureLayerType?f=this._validateEsriGeometryType(c.geometryType):e===this._tableType&&(f=!0);f&&(f=!1,(f=b?k.isFeaturelayerUrlSupportQuery(a,c.capabilities):!0)&&(d={name:c.name,type:e,url:a,definition:c}))}return d},_validateEsriGeometryType:function(a){a=k.getTypeByGeometryType(a);
return 0<=this.types.indexOf(a)},_getServiceUrlByLayerUrl:function(a){for(var b="",c=0;c<this.serviceTypes.length;c++){var d=this.serviceTypes[c].toLowerCase(),e=a.toLowerCase().lastIndexOf("/"+d+"/");if(0<=e){b=a.slice(0,e+d.length+1);break}}return b}})},getGeocodeServiceBrowserRule:function(){return new l({leafTypes:["GeocodeServer"],serviceTypes:["GeocodeServer"]})},getGpServiceBrowserRule:function(){return new l({leafTypes:["GPTask"],serviceTypes:["GPServer"],getItem:function(d){var b=new h;this.isUrlEndWithServiceType(d)?
b=this.defaultGetItem(d):this.getRestInfo(d).then(e.hitch(this,function(c){b.resolve({name:c.displayName||c.name,type:"GPTask",url:d,definition:c})}),e.hitch(this,function(c){b.reject(c)}));return b},getSubItemUrls:function(d){var b=new h;this.isUrlEndWithServiceType(d)?this.getRestInfo(d).then(e.hitch(this,function(c){c=f.map(c.tasks||[],e.hitch(this,function(a){return d+"/"+a}));b.resolve(c)}),e.hitch(this,function(c){b.reject(c)})):b.resolve([]);return b},getIconImageName:function(d,b){b="";"GPServer"===
d.type?b="toolbox.png":"GPTask"===d.type&&(b="tool.png");return b}})},getImageServiceBrowserRule:function(d){return new l({leafTypes:["ImageServer"],serviceTypes:["ImageServer"],getItem:function(b){var c=new h;this.isUrlEndWithServiceType(b)?this.defaultGetItem(b).then(e.hitch(this,function(a){d?k.isImageServiceSupportQuery(a.definition.capabilities)?c.resolve(a):c.resolve(null):c.resolve(a)}),e.hitch(this,function(a){c.reject(a)})):c.resolve(null);return c},getIconImageName:function(b,c){c="";"ImageServer"===
b.type&&(c="image_layer.png");return c}})},getQueryableServiceBrowserRule:function(){var d=m.getFeaturelayerServiceBrowserRule(["point","polyline","polygon"],!0,!0),b=m.getImageServiceBrowserRule(!0);return m.combineRules([d,b])}};return m});