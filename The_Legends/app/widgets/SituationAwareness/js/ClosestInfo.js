// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on dojo/keys jimu/utils esri/geometry/geometryEngine esri/graphic esri/Color esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query ./analysisUtils".split(" "),function(R,n,M,K,N,H,r,x,S,O,y,A,I,B,L,T,C,P,Q,U,V,W,t){return R("ClosestInfo",
null,{featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,constructor:function(a,b,c){this.tab=a;this.container=b;this.parent=c;this.graphicsLayer=this.incident=null;this.map=c.map;this.specialFields={};this.typeIdField="";this.types=[];this.dateFields={};this.config=c.config;this.parentNode=c.domNode;this.baseLabel=""!==a.label?a.label:a.layerTitle?a.layerTitle:a.layers},queryTabCount:function(a,b,c,f){var l=new H;this.incidentCount=a.length;var g=this.parent.config.distanceSettings[this.parent.config.distanceUnits],
d=this.parent.config.maxDistance;b=[];for(var e=0;e<a.length;e++){var h=a[e].geometry;"4326"===h.spatialReference.wkid||h.spatialReference.isWebMercator()?b.push(B.geodesicBuffer(h,d,g)):b.push(B.buffer(h,d,g))}var m=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&(m=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var k;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?
(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,b,c,f,m).then(function(a){l.resolve(a)})):(k=new C(this.summaryLayer.url),k.infoTemplate=this.tab.tabLayers[0].infoTemplate,m=[k],this.tab.tabLayers=m,y(k,"load",n.hitch(this,function(){this.summaryLayer=k;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,b,c,f,m).then(function(a){l.resolve(a)})})))):
this.loading||(k=new C(this.tab.tabLayers[0].url),this.loading=!0,y(k,"load",n.hitch(this,function(){this.summaryLayer=k;this.summaryFields=this._getFields(this.summaryLayer);for(var h=this.tab.tabLayers[0].url.split("MapServer/")[1],d=this.parent.map.itemInfo.itemData.operationalLayers,g=0;g<d.length;g++){var e=d[g];if(-1<this.tab.tabLayers[0].url.indexOf(e.url)&&"undefined"!==typeof e.layerObject&&e.layerObject.infoTemplates&&(e=e.layerObject.infoTemplates[h])){k.infoTemplate=e.infoTemplate;break}}m=
[k];this.tab.tabLayers=m;this.loading=!1;this._performQuery(a,b,c,f,m).then(function(a){l.resolve(a)})})))}this.mapServiceLayer||this._performQuery(a,b,c,f,m).then(function(a){l.resolve(a)});return l},_performQuery:function(a,b,c,f,l){var g=new H,d=[],e,h;this.summaryGeoms=b;if(0<b.length)for(a=0;a<b.length;a++)d=b[a],h=t.createDefArray(l,d,this.parent.opLayers,this.tab),e=0===a?d=h:d=e.concat(h);(new N(d)).then(n.hitch(this,function(a){for(var b=0,e=0;e<a.length;e++){var d=a[e][1];isNaN(d)?d&&d.features?
0<d.features.length&&(b+=1):d&&"undefined"!==typeof d.length&&0<d.length&&(b+=1):0<d&&(b+=1)}this.updateTabCount(b,c,f);g.resolve(b)}));return g},updateTabCount:function(a,b,c){this.featureCount=0===parseInt(a,10)?0:a;t.updateTabCount(this.featureCount,b,c,this.baseLabel,this.incidentCount)},updateForIncident:function(a,b,c,f,l,g){this.incidentCount=a.length;this.allFields="undefined"!==typeof l&&"undefined"!==typeof g?l?!0:g:!1;var d="undefined"!==typeof f,e;K.forEach(this.tab.tabLayers,n.hitch(this,
function(h){d&&(e=new H);if(h.url){var g=new C(h.url,{mode:C.MODE_ONDEMAND,infoTemplate:h.infoTemplate});y(g,"load",n.hitch(this,function(){this.tab.tabLayers=[g];d?this.processIncident(a,b,c,f).then(n.hitch(this,function(a){e.resolve(a)}),n.hitch(this,function(a){console.error(a);e.reject(a)})):this.processIncident(a,b,c,f)}))}else d?this.processIncident(a,b,c,f).then(n.hitch(this,function(a){e.resolve(a)}),n.hitch(this,function(a){console.error(a);e.reject(a)})):this.processIncident(a,b,c,f)}));
if(d)return e},processIncident:function(a,b,c,f){this.incidents=a;var l,g="undefined"!==typeof f;g?l=new H:(this.container.innerHTML="",r.add(this.container,"loading"));var d=[];f=this.parent.config.distanceSettings[this.parent.config.distanceUnits];for(var e=[],h=0;h<a.length;h++){var m=a[h].geometry,k;k="4326"===m.spatialReference.wkid||m.spatialReference.isWebMercator()?B.geodesicBuffer(m,b,f):B.buffer(m,b,f);e.push({geometry:m,buffer:k})}(this.graphicsLayer=c)&&this.graphicsLayer.clear();a=[];
b=this.tab.tabLayers[0];c=-1===[null,void 0,""].indexOf(b.id)?b.id:this.tab.layers;c=t.getFilter(c,this.parent.opLayers);var q=this._getFields(b),u=t.getPopupConfiguredFields(b);for(f=0;f<e.length;f++)h=new W,h.returnGeometry=!0,h.outSpatialReference=this.parent.map.spatialReference,h.geometry=e[f].buffer,h.where=c,h.outFields=["*"],"undefined"!==typeof b.queryFeatures&&a.push(b.queryFeatures(h));(new N(a)).then(n.hitch(this,function(a){for(var b=0;b<a.length;b++)if(a[b][0]){var c=a[b][1].features,
f=[],h=e[b].geometry;if(c&&0<c.length){for(var m=0;m<c.length;m++){var k=new L(c[m].toJson()),r=t.getDistance(h,k.geometry,this.parent.config.distanceUnits),p={DISTANCE:r};K.forEach(q,n.hitch(this,function(a){p[a]=k.attributes[a]}));this.config.hasOwnProperty("exportFieldsOptionForCSV")&&"allFields"===this.config.exportFieldsOptionForCSV||this.config.hasOwnProperty("csvAllFields")&&(!0===this.config.csvAllFields||"true"===this.config.csvAllFields)?k.attributes.DISTANCE=r:(this.config.hasOwnProperty("exportFieldsOptionForCSV")&&
"popUpFields"===this.config.exportFieldsOptionForCSV&&!this.allFields&&(p={DISTANCE:r},K.forEach(u,n.hitch(this,function(a){p[a]=k.attributes[a]}))),k.attributes=p);f.push(k)}f.sort(t.compareDistance);d.push(f[0])}}else a[b][1]&&a[b][1].message&&console.log(a[b][1].message);d.sort(t.compareDistance);g?this._processResults(d,!0).then(n.hitch(this,function(a){l.resolve(a)})):this._processResults(d)}),n.hitch(this,function(a){console.error(a);l.reject(a)}));if(g)return l},_processResults:function(a,
b){var c,f,l=a&&0<a.length;if(l&&"point"!==a[0].geometry.type)for(var g=a.length-1;0<=g;g--)"undefined"===typeof a[g].geometry.getExtent()&&a.splice(g,1);if(b)c=new H;else if(this.container.innerHTML="",r.remove(this.container,"loading"),l){f=x.create("div",{"class":"SAT_tabPanelContent"},this.container);g=x.create("div",{},f);r.add(g,"SATcolExport");r.add(g,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");var d=x.create("div",{title:this.parent.nls.downloadCSV,tabindex:"0",role:"button",
"aria-label":this.parent.nls.downloadCSV,"class":"closestDownLoadCSVButton"},g);I.initFirstFocusNode(this.parentNode,d);r.add(d,"btnExport");y(d,"click",n.hitch(this,this._exportToCSV,a));y(d,"keydown",n.hitch(this,function(b){if(!b.shiftKey||b.keyCode!==A.TAB)if(b.keyCode===A.ENTER||b.keyCode===A.SPACE)this._exportToCSV(a,b),setTimeout(function(){d.focus()},500)}));d.focus()}var g=this.parent.nls[this.parent.config.distanceUnits],e=[],h=220;if(l)for(var m=0;m<a.length;m++){var k=m+1,q=a[m],u=q.geometry,
F=u;"point"!==u.type&&(F=u.getExtent().getCenter());var u=q.attributes,B;"point"===this.incidents[0].geometry.type&&(B=Math.round(100*u.DISTANCE)/100+" "+g+" ("+this.parent.nls.approximate+")");var D="",v=0,w=[];if("undefined"!==typeof this.displayFields)for(var C=0;C<this.displayFields.length;C++){var E=this.displayFields[C],G;a:for(G in u)if("DISTANCE"!==G&&3>v&&E.expression===G){var p=t.getFieldValue(G,u[G],this.specialFields,this.dateFields,"longMonthDayYear",this.typeIdField,this.types,this.layerObject&&
this.layerObject.renderer?this.layerObject:this.layerDefinition,u,E),p="undefined"!==typeof p&&null!==p?I.stripHTML(p.toString()):"",z="undefined"!==typeof E.label&&""!==E.label?E.label:void 0,J=q._layer&&q._layer.fields?q._layer.fields:this.tab.tabLayers&&this.tab.tabLayers[0]?this.tab.tabLayers[0].fields:void 0;J&&"undefined"===typeof z&&(J=t.getField(J,G))&&(z=J.alias);if("undefined"===typeof z||z in[""," ",null,void 0])z=G;t.isURL(p)?p='\x3ca href\x3d"'+p+'" target\x3d"_blank" style\x3d"color: inherit;"\x3e'+
z+"\x3c/a\x3e":t.isEmail(p)&&(p='\x3ca href\x3d"mailto:'+p+'" style\x3d"color: inherit;"\x3e'+z+"\x3c/a\x3e");D+=E.validLabel?("undefined"!==typeof E.label&&""!==E.label?z+" ":"")+p+"\x3cbr/\x3e":p+"\x3cbr/\x3e";v+=1;w.push({value:-1<p.indexOf(",")?p.replace(",",""):p,label:z});break a}}e.push(w);b||(q=x.create("div",{},f),r.add(q,"SATcolRec"),r.add(q,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),v=x.create("div",{},q),r.add(v,"SATcolRecBar"),w=x.create("div",{innerHTML:k,tabindex:"0",
role:"button","aria-label":this.parent.nls.zoomToFeature+" "+k},v),r.add(w,"SATcolRecNum"),O.set(w,"backgroundColor",this.parent.config.activeColor),y(w,"click",n.hitch(this,this._zoomToLocation,F,null)),y(w,"keydown",n.hitch(this,this._zoomToLocation,F,!0)),I.initLastFocusNode(this.parentNode,w),B&&(w=x.create("div",{innerHTML:B},v),r.add(w,"SATcolDistance")),this.parent.config.enableRouting&&(v=x.create("div",{"class":"directionsButton",title:this.parent.nls.get_directions,tabindex:"0","aria-label":this.parent.nls.get_directions,
role:"button"},v),r.add(v,"SATcolDir"),y(v,"click",n.hitch(this,this._routeToIncident,F,null)),y(v,"keydown",n.hitch(this,this._routeToIncident,F,!0)),I.initLastFocusNode(this.parentNode,v)),D=x.create("div",{"class":"SATcolWrap",innerHTML:D},q),r.add(D,"SATcolInfo"),h+=S.position(q).w,D=new Q(Q.STYLE_SOLID,new M.fromRgb(this.parent.config.activeMapGraphicColor),1),D=new P(P.STYLE_CIRCLE,24,D,new M.fromRgb(this.parent.config.activeMapGraphicColor)),q=new U,q.family="Arial",q.size="12px",k=new V(k,
q,new T(this.parent.config.fontColor)),k.setOffset(0,-4),this.graphicsLayer.add(new L(F,D,u)),this.graphicsLayer.add(new L(F,k,u)))}if(!b&&l)O.set(f,"width",h);else if(l)return c.resolve({graphics:a,analysisResults:e,context:this}),c},_exportToCSV:function(a,b,c,f){var l;this.parent.config.hasOwnProperty("exportFieldsOptionForCSV")?l=this.parent.config.exportFieldsOptionForCSV:this.parent.config.hasOwnProperty("csvAllFields")&&(l=this.parent.config.csvAllFields);a=t.exportToCSV(a,b,c,f,{type:"closest",
baseLabel:this.baseLabel,csvAllFields:l,layer:this.tab.tabLayers[0],opLayers:this.parent.opLayers,nlsValue:this.parent.nls.closest,nlsCount:this.parent.nls.count});this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){this.layerDefinition=I.getFeatureLayerDefinition(a);this.layerObject=a;a=t.getFields(a,this.tab,this.allFields,this.parent);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=a.types;this.displayFields=t.getDisplayFields(this.tab);
return a.fields},_zoomToLocation:function(a,b,c){c.shiftKey&&c.keyCode===A.TAB?(c.stopPropagation(),c.cancelBubble=!0):b&&c.keyCode!==A.ENTER&&c.keyCode!==A.SPACE||this.parent.zoomToLocation(a)},_routeToIncident:function(a,b,c){b&&c.keyCode!==A.ENTER&&c.keyCode!==A.SPACE||this.parent.routeToIncident(a)}})});