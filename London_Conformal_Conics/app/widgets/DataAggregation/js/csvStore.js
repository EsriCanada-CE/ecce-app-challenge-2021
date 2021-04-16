// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/DeferredList dojo/Evented dojox/data/CsvStore dojo/store/Observable dojo/store/Memory esri/graphicsUtils esri/geometry/webMercatorUtils esri/geometry/Point esri/layers/FeatureLayer esri/tasks/locator esri/tasks/query esri/SpatialReference esri/dijit/PopupTemplate esri/geometry/geometryEngine esri/tasks/ProjectParameters esri/tasks/GeometryService esri/request jimu/utils moment/moment".split(" "),function(P,t,g,A,K,Q,R,
S,T,U,V,L,W,X,M,N,Y,O,Z,aa,ba,I,ca){return P([Q],{file:null,map:null,spatialReference:null,fsFields:[],duplicateTestFields:[],geocodeSources:[],duplicateData:[],data:null,editLayer:null,parent:null,separatorCharacter:null,csvStore:null,storeItems:null,matchedFeatureLayer:null,mappedArrayFields:null,unMatchedFeatureLayer:null,duplicateFeatureLayer:null,addrFieldName:"",xFieldName:"",yFieldName:"",symbol:null,matchFieldPrefix:"MatchField_",_internalFields:[],_removeLocators:[],constructor:function(a){g.mixin(this,
a);this.useAddr=!0;this.objectIdField="ObjectID";this.nls=a.nls;this.minScore=90;this._getDuplicateFields(this.fsFields);this.spatialReference=this.map.spatialReference;this.decimalSeperator=/^1(.+)1$/.exec(I.localizeNumber(1.1))[1].toString()},_getDuplicateFields:function(a){var c=[];t.forEach(a,function(h){h.duplicate&&c.push(h.name)});this.duplicateTestFields=c},handleCsv:function(){var a=new A;if(this.file&&!this.file.data){var c=new FileReader;c.onload=g.hitch(this,function(){this.data=c.result;
this._processCsvData().then(function(h){a.resolve(h)},g.hitch(this,function(h){a.reject(h)}))});c.readAsText(this.file)}return a},_processCsvData:function(){var a=new A;this._convertSources();this._getSeparator();this._getCsvStore().then(function(c){a.resolve(c)},function(c){a.reject(c)});return a},processForm:function(){this._internalFields=["DestinationOID","matchScore","hasDuplicateUpdates","duplicateState"];this._matchFields=[];var a=new A;this._locateData(this.useAddr).then(g.hitch(this,function(c){var h=
[],f=[],k=[],e={},b=0,d=0;0<this._removeLocators.length&&(this._removeLocators.sort(function(n,u){return u-n}),t.forEach(this._removeLocators,g.hitch(this,function(n){this._geocodeSources.splice(n,1)})));for(var m=function(n,u,y,F){var w=n;-1===[null,void 0,""].indexOf(n)&&n.indexOf&&-1<n.indexOf(u)&&(y=y.filter(function(z){return z.keyField===F}))&&y.hasOwnProperty("length")&&1===y.length&&(w=n.toString?n.toString().replace(u,"."):n);return w},q=Object.keys(c),r=0;r<q.length;r++){var l={},p=c[q[r]],
B=this.storeItems[p.csvIndex];t.forEach(this.fsFields,g.hitch(this,function(n){if(this.mappedArrayFields.hasOwnProperty(n.name))if(this.mappedArrayFields[n.name]){var u=this.csvStore.getValue(B,this.mappedArrayFields[n.name]);if(n.domainValues){var y=n.domainValues.filter(g.hitch(this,function(F){return F.label===u}));l[n.name]=y&&0<y.length?y[0].value:u}else l[n.name]="."===this.decimalSeperator||this.useAddr?u:m(u,this.decimalSeperator,this._currentAddressFields,this.mappedArrayFields[n.name])}else l[n.name]=
void 0}));t.forEach(this._currentAddressFields,g.hitch(this,function(n){var u=this.matchFieldPrefix+n.keyField;if("undefined"!==typeof n.value){var y=this.csvStore.getValue(B,n.value);l[u]="."===this.decimalSeperator||this.useAddr?y:m(y,this.decimalSeperator,this._currentAddressFields,n.keyField)}else l[u]=void 0;this._matchFields.push(u)}));p&&p.score>this.minScore?(l.ObjectID=r-b-d,l.matchScore=p.score,h.push({geometry:p.location,attributes:g.clone(l)})):p.isDuplicate?(l.ObjectID=d,l.DestinationOID=
p.featureAttributes[this.editLayer.objectIdField],l.matchScore=100,l.hasDuplicateUpdates=!1,l.duplicateState="no-change",k.push({geometry:p.location,attributes:g.clone(l)}),e[d]=p.featureAttributes,d++):(l.ObjectID=b,l.matchScore=p.score?p.score:0,f.push({geometry:p.location&&p.location.type?p.location:new L(0,0,this.spatialReference),attributes:g.clone(l)}),b++)}this.matchedFeatureLayer=this._initLayer(h,this.file.name.replace(".csv",""));0<k.length&&(this.duplicateFeatureLayer=this._initLayer(k,
this.file.name.replace(".csv","")+"_Duplicate"));0<f.length&&(this.unMatchedFeatureLayer=this._initLayer(f,this.file.name.replace(".csv","")+"_UnMatched"));a.resolve({matchedLayer:this.matchedFeatureLayer,unMatchedLayer:this.unMatchedFeatureLayer,duplicateLayer:this.duplicateFeatureLayer,duplicateLookupList:e})}),function(c){a.reject(c,!0)});return a},_initLayer:function(a,c){a=this._generateFC(a);c=new W(a,{id:c,editable:!0,outFields:["*"]});this._initPopup(c);this.map.addLayers([c]);return c},_initPopup:function(a){var c=
{title:a.id+": {"+this.labelField+"}"},h=[];t.forEach(a.fields,g.hitch(this,function(f){f.name!==this.objectIdField&&-1===this._internalFields.indexOf(f.name)&&-1===this._matchFields.indexOf(f.name)&&h.push({fieldName:f.name,visible:!0})}));c.fieldInfos=h;a.infoTemplate=new Y(c)},_findDuplicates:function(){var a=new A;this._getAllLayerFeatures(this.editLayer,this.fsFields).then(g.hitch(this,function(c){this.keys=Object.keys(this.mappedArrayFields);this.oidField=this.editLayer.objectIdField;var h=
[],f=[],k=this.duplicateTestFields;k&&k.hasOwnProperty("length")&&0<k.length&&t.forEach(this.storeItems,g.hitch(this,function(b){var d={compareValues:{},fileId:b._csvId,featureId:-1};t.forEach(k,g.hitch(this,function(m){var q=this.mappedArrayFields[m];"undefined"!==typeof q&&(d.compareValues[m]=this.csvStore.getValue(b,q),-1===f.indexOf(m)&&f.push(m))}));0<Object.keys(d.compareValues).length&&h.push(d)}));var e=[];0<h.length&&t.forEach(h,g.hitch(this,function(b){t.forEach(c,g.hitch(this,function(d){var m=
{};t.forEach(f,g.hitch(this,function(r){var l=d.attributes[r];m[r]=-1===[null,void 0].indexOf(l)&&l.toString?l.toString():l}));if(JSON.stringify(b.compareValues)===JSON.stringify(m)){var q=d.attributes[this.oidField];-1!==b.featureId?(b.hasMultiDuplicates=!0,"undefined"===typeof b.featureIds?(b.featureIds=[b.featureId,q],b.features=[b.feature,d]):(b.featureIds.push(q),b.features.push(d))):(b.featureId=q,b.feature=d,e.push(b))}}))}));a.resolve(e)}));return a},_getAllLayerFeatures:function(a,c){var h=
new A,f=[this.editLayer.objectIdField];t.forEach(c,function(e){e.name&&f.push(e.name)});2>f.length&&(f=c);var k=a.maxRecordCount;c=new M;c.where="1\x3d1";a.queryIds(c).then(function(e){var b=[],d;if(e&&0<e.length){var m=0;for(d=e.length;m<d;m+=k){var q=new M;q.outFields=f;q.objectIds=e.slice(m,m+k);q.returnGeometry=!0;b.push(a.queryFeatures(q))}(new K(b)).then(g.hitch(this,function(r){if(r){for(var l=[],p=0;p<r.length;p++)r[p][1].features&&l.push.apply(l,r[p][1].features.map(function(B){return{geometry:B.geometry,
attributes:B.attributes}}));h.resolve(l)}}))}else h.resolve([])},function(e){console.error(e);h.resolve({type:"error",message:e})});return h},_locateData:function(a){var c=new A;this._findDuplicates().then(g.hitch(this,function(h){this.duplicateData=h;if(a){var f=g.hitch(this,function(k,e,b){var d=new A,m=this._geocodeSources[e],q=m.locator;q.outSpatialReference=this.spatialReference;var r=[],l=[],p=0;var B=0;var n=k.length;for(;B<n;B+=500){var u=k.slice(B,B+500),y=[];(m.singleEnabled||m.multiEnabled)&&
t.forEach(u,g.hitch(this,function(w){var z=w._csvId,D=null;a:for(v in this.duplicateData){var E=this.duplicateData[v];if(E.fileId===z){D=g.mixin({},E);delete this.duplicateData[v];break a}}var x={};x.OBJECTID=z;if(this.useMultiFields)t.forEach(this.multiFields,g.hitch(this,function(H){this._currentAddressFields=this.multiFields;if(H.value!==this.nls.noValue){var da=this.csvStore.getValue(w,H.value);x[H.keyField]=da}else x[H.keyField]=void 0}));else if(this.singleFields[0].value!==this.nls.noValue){this._currentAddressFields=
this.singleFields;var v=this.csvStore.getValue(w,this.singleFields[0].value);"undefined"===typeof v&&(v=typeof v+z);x[m.singleLineFieldName]=v}v=g.mixin({},x);v=JSON.stringify(v);if(null===D)y.push(x),b[v]={index:p,csvIndex:z,location:{}},p+=1;else if(null!==D){E=D.feature.geometry;var G=D.feature.attributes;if(-1!==[null,void 0].indexOf(E)&&D.features){var C=0;a:for(;C<D.features.length;C++){var J=D.features[C];if(-1===[null,void 0].indexOf(J.geometry)){E=J.geometry;G=J.attributes;break a}}}b[v]=
{index:-1,csvIndex:z,isDuplicate:!0,location:g.mixin({},E),featureAttributes:G}}}));this.useMultiFields&&m.multiEnabled||!this.useMultiFields&&m.singleEnabled?l.push(q.addressesToLocations({addresses:y,countryCode:m.countryCode,outFields:["ResultID","Score"]})):(u=new A,u.reject(this.nls.warningsAndErrors.notConfigured,!0),l.push(u))}var F=Object.keys(b);(new K(l)).then(g.hitch(this,function(w){this.minScore=this._geocodeSources[e]?this._geocodeSources[e].minCandidateScore:90;e+=1;var z=this._geocodeSources.length>
e;if(w&&w.length&&w[0].length&&!1===w[0][0])if(1<w[0].length&&console.error(w[0][1]),(this.useMultiFields&&m.multiEnabled||!this.useMultiFields&&m.singleEnabled)&&this.parent.locatorError(this._geocodeSources[e-1].locator.url,!1),this._removeLocators.push(e-1),z)f(this._remainingStoreItems||this.storeItems,e,this._currentFinalResults||{}).then(g.hitch(this,function(x){d.resolve(x)}));else return 1<this._geocodeSources.length?d.resolve(b):d.reject(this.nls.warningsAndErrors.noMoreLocators),d.promise;
else if(w){var D=this.minScore,E=0;t.forEach(w,g.hitch(this,function(x){x=x[1];t.forEach(x,function(v){v.ResultID=v.attributes.ResultID});x=S(new T({data:x,idProperty:"ResultID"})).query({},{sort:[{attribute:"ResultID"}]});t.forEach(x,g.hitch(this,function(v){for(var G in F){var C=F[G];if(b[C]&&b[C].index===E){v.attributes.Score<D?z?(r.push(k[b[C].csvIndex]),delete b[C]):b[C].score=v.attributes.Score:(b[C].location=v.location,b[C].score=v.attributes.Score,delete b[C].index);delete F[G];break}}E+=
1}))}));if(z&&0<r.length)this._remainingStoreItems=r,this._currentFinalResults=b,f(r,e,b).then(g.hitch(this,function(x){d.resolve(x)}));else return d.resolve(b),d.promise}}),g.hitch(this,function(w){console.log(w);e+=1;if(this._geocodeSources.length>e)f(this._remainingStoreItems||this.storeItems,e,this._currentFinalResults||{}).then(g.hitch(this,function(z){d.resolve(z)}));else return 1<this._geocodeSources.length?d.resolve(b):d.reject(this.nls.warningsAndErrors.noMoreLocators),d.promise}));return d});
this._removeLocators=[];f(this.storeItems,0,{}).then(g.hitch(this,function(k){c.resolve(k)}),g.hitch(this,function(k){c.reject(k)}))}else this._currentAddressFields=[{keyField:this.xFieldName,label:this.xFieldName,value:this.xFieldName},{keyField:this.yFieldName,label:this.yFieldName,value:this.yFieldName}],this._xyData({storeItems:this.storeItems,csvStore:this.csvStore,xFieldName:this.xFieldName,yFieldName:this.yFieldName,wkid:this.spatialReference.wkid}).then(g.hitch(this,function(k){if(this.isGeographic&&
!this.map.spatialReference.isWebMercator()&&4326!==this.spatialReference.wkid){var e=[];t.forEach(k,function(d){e.push(d.location)});var b=1<e.length?O.union(e):O.buffer(e[0],100,9001);this._projectPoints(b,e).then(function(d){for(var m=0;m<k.length;m++)k[m].location=d[m];c.resolve(k)})}else c.resolve(k)}),function(k){c.reject(k)})}));return c},_xyData:function(a){var c=new A,h=[],f=a.csvStore;t.forEach(a.storeItems,g.hitch(this,function(k){var e=k._csvId,b=null;a:for(q in this.duplicateData){var d=
this.duplicateData[q];if(d.fileId===e){b=g.mixin({},d);delete this.duplicateData[q];break a}}var m={};var q=f.getAttributes(k);t.forEach(q,function(p){m[p]=f.getValue(k,p)});q=!1;if(null!==b&&b.feature&&b.feature.geometry){d=b.feature.geometry;q=!0;var r=b.feature.attributes}else{b=f.getValue(k,a.xFieldName);var l=f.getValue(k,a.yFieldName);"."!==this.decimalSeperator&&(b=-1!==[null,void 0,""].indexOf(b)?void 0:b.toString().replace(this.decimalSeperator,"."),l=-1!==[null,void 0,""].indexOf(l)?void 0:
l.toString().replace(this.decimalSeperator,"."));b=parseFloat(b);l=parseFloat(l);d=this._getGeometry(b,l);l=isNaN(b)||isNaN(l)?0:100}d&&h.push({attributes:m,location:d,csvIndex:e,score:l,isDuplicate:q,featureAttributes:r})}));c.resolve(h);return c},_getGeometry:function(a,c){"undefined"===typeof this.isGeographic&&(this.isGeographic=/(?=^[-]?\d{1,3}\.)^[-]?\d{1,3}\.\d+|(?=^[-]?\d{4,})|^[-]?\d{1,3}/.exec(a)?!0:!1);a=new L(isNaN(a)?0:a,isNaN(c)?0:c);this.isGeographic&&this.spatialReference.isWebMercator()?
a=V.geographicToWebMercator(a):a.spatialReference=this.isGeographic&&4326!==this.spatialReference.wkid?new N(4326):new N({wkid:this.spatialReference.wkid});return a},_projectPoints:function(a,c){var h=new A;this.gsvc=new aa(this.appConfig.geometryService);a={url:this.gsvc.url+"/findTransformations",content:{f:"json",inSR:a.spatialReference.wkid,outSR:this.spatialReference.wkid,extentOfInterest:JSON.stringify(a.getExtent().toJson())},handleAs:"json",callbackParamName:"callback"};ba(a,{usePost:!1}).then(g.hitch(this,
function(f){f=(f=f&&f.transformations?f.transformations:void 0)&&0<f.length?f[0].wkid:void 0;var k=new Z;k.outSR=this.spatialReference;k.geometries=c;k.transformForward=!0;k.transformation=f;this.gsvc.project(k,g.hitch(this,function(e){h.resolve(e)}),function(e){h.reject(e)})}),function(f){h.reject(f)});return h},_generateFC:function(a){var c={layerDefinition:{geometryType:"esriGeometryPoint",spatialReference:this.spatialReference,objectIdField:this.objectIdField,type:"Feature Layer",drawingInfo:{renderer:{type:"simple",
symbol:this.symbol}},fields:[{name:this.objectIdField,alias:this.objectIdField,type:"esriFieldTypeOID"}]},featureSet:{features:a,geometryType:"esriGeometryPoint"}};t.forEach(this.fsFields,g.hitch(this,function(h){c.layerDefinition.fields.push({name:h.name,alias:h.label,type:h.value,editable:!0,domain:null})}));return c},clear:function(){this._removeLayer(this.matchedFeatureLayer);this._removeLayer(this.unMatchedFeatureLayer);this._removeLayer(this.duplicateFeatureLayer);this.storeItems=this.csvStore=
this.separatorCharacter=this.data=this.fsFields=this.file=void 0;this.duplicateData=[];this.mappedArrayFields=this.duplicateFeatureLayer=this.unMatchedFeatureLayer=this.matchedFeatureLayer=void 0;this.useAddr=!0;this.yFieldName=this.xFieldName=this.addrFieldName=""},_removeLayer:function(a){a&&(this.map.removeLayer(a),a.clear())},_getSeparator:function(){var a=this.data.indexOf("\n"),c=g.trim(this.data.substr(0,a)),h=0,f="";t.forEach([",","      ",";","|"],function(k){var e=c.split(k).length;e>h&&
(h=e,f=k)});this.separatorCharacter=f},_getCsvStore:function(){var a=new A;this.csvStore=new R({data:this.data,separator:this.separatorCharacter});this.csvStore.fetch({onComplete:g.hitch(this,function(c){this.storeItems=c;this._fetchFieldsAndUpdateForm(this.storeItems,this.csvStore,this.fsFields).then(function(h){a.resolve(h)})}),onError:g.hitch(this,function(c){a.reject(c)})});return a},_fetchFieldsAndUpdateForm:function(a,c,h){var f=new A,k=c._attributes,e=this.decimalSeperator,b={};t.forEach(k,
function(d){t.forEach(a,function(m){var q=!0,r=!0,l=!0,p=!0;if(b.hasOwnProperty(d)){r=b[d].supportsInt;l=b[d].supportsFloat;p=b[d].supportsDate;var B=b[d].maxLength;r||l||p||(q=!1)}var n=c.getValue(m,d);if(n){m=n.toString().length;var u=ca(n);if(q){q=-1!==[null,void 0,""].indexOf(n);if(!q&&(p=p&&u.isValid()))if(u=n)try{p=!isNaN((new Date(u)).getTime())}catch(y){console.error(y),p=!1}else p=-1<[null,void 0,""].indexOf(u)?!0:!1;b[d]={supportsDate:p,supportsInt:q?r:!isNaN(parseInt(n,10))&&parseInt(n,
10).toString().length===m&&r};"."!==e&&(n=q?"":n.toString().replace(e,"."));b[d].supportsFloat=q?l:!isNaN(parseFloat(n))&&parseFloat(n).toString().length===m&&l}r=b[d];r.maxLength=B;"undefined"===typeof r.maxLength?r.maxLength=m:r.maxLength<m&&(r.maxLength=m)}})});f.resolve({fields:k,fieldTypes:b,fsFields:h});return f},_zoomToData:function(a,c){if(a&&0<a.length)try{var h=U.graphicsExtent(a);c?this.map.setExtent(h.expand(1.9),!0):this.map.setExtent(h,!0)}catch(f){console.log(f.message)}},_convertSources:function(){this.geocodeSources&&
0<this.geocodeSources.length&&(this._geocodeSources=t.map(this.geocodeSources,g.hitch(this,function(a){if(a&&a.url&&"locator"===a.type)return{locator:new X(a.url||""),outFields:["ResultID","Score"],singleLineFieldName:a.singleLineFieldName||"",name:I.stripHTML(a.name||""),placeholder:I.stripHTML(a.placeholder||""),countryCode:a.countryCode||"",addressFields:a.addressFields,singleEnabled:a.singleEnabled||!1,multiEnabled:a.multiEnabled||!1,minCandidateScore:a.minCandidateScore||90}})))}})});