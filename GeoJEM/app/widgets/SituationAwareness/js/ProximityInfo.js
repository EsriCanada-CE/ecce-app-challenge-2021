// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on dojo/query dojo/keys esri/graphic esri/Color esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query esri/geometry/geometryEngine jimu/utils ./analysisUtils".split(" "),function(X,l,R,K,S,O,B,G,Y,T,H,da,J,U,Z,Q,V,W,aa,ba,ca,N,P,
u){return X("ProximityInfo",null,{featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,constructor:function(a,d,f){this.tab=a;this.container=d;this.parent=f;this.graphicsLayer=this.incident=null;this.specialFields={};this.typeIdField="";this.types=[];this.dateFields={};this.config=f.config;this.parentNode=f.domNode;this.baseLabel=""!==a.label?a.label:a.layerTitle?a.layerTitle:a.layers},queryTabCount:function(a,d,f,h){var n=new O;this.incidentCount=a.length;var e=[this.tab.tabLayers[0]];
this.mapServiceLayer&&1<this.tab.tabLayers.length&&(e=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer"))if(this.mapServiceLayer=!0,"undefined"!==typeof this.tab.tabLayers[0].infoTemplate)if(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded)this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,d,f,h,e).then(function(b){n.resolve(b)});else{var c=
new Q(this.summaryLayer.url);c.infoTemplate=this.tab.tabLayers[0].infoTemplate;e=[c];this.tab.tabLayers=e;H(c,"load",l.hitch(this,function(){this.summaryLayer=c;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,d,f,h,e).then(function(b){n.resolve(b)})}))}else this.loading||(c=new Q(this.tab.tabLayers[0].url),this.loading=!0,H(c,"load",l.hitch(this,function(){this.summaryLayer=c;this.summaryFields=this._getFields(this.summaryLayer);for(var b=this.tab.tabLayers[0].url.split("MapServer/")[1],
m=this.parent.map.itemInfo.itemData.operationalLayers,v=0;v<m.length;v++){var g=m[v];if(-1<this.tab.tabLayers[0].url.indexOf(g.url)&&"undefined"!==typeof g.layerObject&&g.layerObject.infoTemplates&&(g=g.layerObject.infoTemplates[b])){c.infoTemplate=g.infoTemplate;break}}this.tab.tabLayers=[c];this.loading=!1;this._performQuery(a,d,f,h,this.tab.tabLayers).then(function(w){n.resolve(w)})})));this.mapServiceLayer||this._performQuery(a,d,f,h,e).then(function(b){n.resolve(b)});return n},_performQuery:function(a,
d,f,h,n){var e=new O,c=[],b;0<d.length?b=u.getGeoms(d):0<a.length&&(b=u.getGeoms(a));this.summaryGeoms=b;if(0<b.length)for(a=0;a<b.length;a++){c=b[a];d=u.createDefArray(n,c,this.parent.opLayers,this.tab);var m=0===a?c=d:c=m.concat(d)}(new S(c)).then(l.hitch(this,function(v){for(var g=0,w=0;w<v.length;w++){var k=v[w][1];isNaN(k)?k&&k.features?g+=k.features.length:k&&"undefined"!==typeof k.length&&(g+=k.length):g+=k}this.updateTabCount(g,f,h);e.resolve(g)}));return e},updateTabCount:function(a,d,f){this.featureCount=
a;u.updateTabCount(this.featureCount,d,f,this.baseLabel,this.incidentCount)},updateForIncident:function(a,d,f,h,n,e){this.incidentCount=a.length;this.allFields="undefined"!==typeof n&&"undefined"!==typeof e?n?!0:e:!1;var c="undefined"!==typeof h,b;K.forEach(this.tab.tabLayers,l.hitch(this,function(m){c&&(b=new O);if(m.url){var v=new Q(m.url,{mode:Q.MODE_ONDEMAND,infoTemplate:m.infoTemplate});H(v,"load",l.hitch(this,function(){this.tab.tabLayers=[v];c?this.processIncident(a,d,f,h,n).then(l.hitch(this,
function(g){b.resolve(g)}),l.hitch(this,function(g){console.error(g);b.reject(g)})):this.processIncident(a,d,f,h,n)}))}else c?this.processIncident(a,d,f,h,n).then(l.hitch(this,function(g){b.resolve(g)}),l.hitch(this,function(g){console.error(g);b.reject(g)})):this.processIncident(a,d,f,h,n)}));if(c)return b},processIncident:function(a,d,f,h,n){this.incidents=a;var e=[];if(0===d.length)for(var c=0;c<a.length;c++){var b=a[c];b=b.geometry?b.geometry:b;"polygon"===b.type?(d.push(b),e.push({geometry:b,
buffer:b})):e.push({geometry:void 0,buffer:void 0})}else for(c=0;c<a.length;c++){b=a[c];var m=d[c].geometry?d[c].geometry:d[c];b=b.geometry?b.geometry:b;e.push({geometry:b,buffer:m})}if(0!==d.length){for(a=0;a<e.length;a++)if(d=e[a].buffer,"undefined"!==typeof d)for(b=0;b<e.length;b++)if(b!==a&&(c=e[b].buffer,"undefined"!==typeof c&&N.overlaps(d,c))){e[a].buffer=N.difference(d,c);e[b].buffer=N.difference(c,d);c=N.union(c,d);c=N.difference(c,e[a].buffer);c=N.difference(c,e[b].buffer);if(Array.isArray(e[a].geometry)){if(Array.isArray(e[b].geometry))for(m=
0;m<e[b].geometry.length;m++)e[a].geometry.push(e[b].geometry[m]);else e[a].geometry.push(e[b].geometry);m=e[a].geometry}else if(m=[],m.push(e[a].geometry),Array.isArray(e[b].geometry))for(var v=0;v<e[b].geometry.length;v++)m.push(e[b].geometry[v]);else m.push(e[b].geometry);e.push({geometry:m,buffer:c})}var g="undefined"!==typeof h;if(g)var w=new O;else this.container.innerHTML="",B.add(this.container,"loading");var k=[];this.graphicsLayer=f;f=this.tab.tabLayers[0];var E=this._getFields(f),I=u.getPopupConfiguredFields(f);
h=-1===[null,void 0,""].indexOf(f.id)?f.id:this.tab.layers;h=u.getFilter(h,this.parent.opLayers);a=[];for(d=0;d<e.length;d++)b=new ca,b.returnGeometry=!0,b.outSpatialReference=this.parent.map.spatialReference,b.geometry=e[d].buffer,b.where=h,b.outFields=["*"],"undefined"!==typeof f.queryFeatures&&a.push(f.queryFeatures(b));(new S(a)).then(l.hitch(this,function(p){for(var C=0;C<p.length;C++){var A=p[C][1];if(A&&A.features){A=A.features;for(var x=e[C].geometry,L=0;L<A.length;L++){var y=A[L],z=y.geometry;
if(Array.isArray(x)){for(var q,D=0;D<x.length;D++){var M=u.getDistance(x[D],z,this.parent.config.distanceUnits);if("undefined"===typeof q||M<q)q=M}z=q;var r={DISTANCE:q}}else z=u.getDistance(x,z,this.parent.config.distanceUnits),r={DISTANCE:z};K.forEach(E,l.hitch(this,function(t){r[t]=y.attributes[t]}));this.config.hasOwnProperty("exportFieldsOptionForCSV")&&"allFields"===this.config.exportFieldsOptionForCSV||this.config.hasOwnProperty("csvAllFields")&&(!0===this.config.csvAllFields||"true"===this.config.csvAllFields)?
y.attributes.DISTANCE=z:(this.config.hasOwnProperty("exportFieldsOptionForCSV")&&"popUpFields"===this.config.exportFieldsOptionForCSV&&!n&&(r={DISTANCE:z},K.forEach(I,l.hitch(this,function(t){r[t]=y.attributes[t]}))),y.attributes=r);k.push(y)}}}k.sort(u.compareDistance);if(g){var F={graphics:k,analysisResults:k.length,context:this};this._processResults(k,!0).then(l.hitch(this,function(t){w.resolve(l.mixin(F,t))}))}else this._processResults(k)}),l.hitch(this,function(p){console.error(p);w.reject(p)}));
if(g)return w}},_processResults:function(a,d){var f=a&&0<a.length;if(f&&"point"!==a[0].geometry.type)for(var h=a.length-1;0<=h;h--)"undefined"===typeof a[h].geometry.getExtent()&&a.splice(h,1);if(d)var n=new O;else if(this.container.innerHTML="",B.remove(this.container,"loading"),this.graphicsLayer.clear(),f){var e=G.create("div",{"class":"SAT_tabPanelContent"},this.container);h=G.create("div",{},e);B.add(h,"SATcolExport");B.add(h,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");var c=
G.create("div",{title:this.parent.nls.downloadCSV,tabindex:"0",role:"button","aria-label":this.parent.nls.downloadCSV,"class":"proximityDownLoadCSVButton"},h);B.add(c,"btnExport");B.add(c,this.parent.lightTheme?"lightThemeBackground":"darkThemeBackground");c.focus();P.initFirstFocusNode(this.parentNode,c);H(c,"click",l.hitch(this,this._exportToCSV,a));H(c,"keydown",l.hitch(this,function(r){if(!r.shiftKey||r.keyCode!==J.TAB)if(r.keyCode===J.ENTER||r.keyCode===J.SPACE)this._exportToCSV(a,r),setTimeout(function(){c.focus()},
500)}))}h=this.parent.nls[this.parent.config.distanceUnits];if("undefined"!==typeof this.tab.advStat&&"undefined"!==typeof this.tab.advStat.stats&&"undefined"!==typeof this.tab.advStat.stats.outFields)var b=this.tab.advStat.stats.outFields;else b=[],0<this.tab.tabLayers.length&&K.forEach(this.tab.tabLayers,l.hitch(this,function(r){"undefined"!==typeof r.popupInfo?K.forEach(r.popupInfo.fieldInfos,l.hitch(this,function(F){if(F.visible){var t={value:0};t.expression=F.fieldName;t.label=F.label;b.push(t)}})):
r.infoTemplate?K.forEach(r.infoTemplate.info.fieldInfos,l.hitch(this,function(F){if(F.visible){var t={value:0};t.expression=F.fieldName;t.label=F.label;b.push(t)}})):K.forEach((r.layerObject?r.layerObject:r).fields,l.hitch(this,function(F){var t={value:0};t.expression=F.name;t.label=F.alias;b.push(t)}))}));var m=220,v=[];if(f)for(var g=0;g<a.length;g++){var w=g+1,k=a[g],E=k.geometry,I=E;"point"!==E.type&&(I=E.getExtent().getCenter());E=k.attributes;var p=u.getDistanceLabel(E.DISTANCE,h,this.parent.nls.approximate),
C="",A=0,x=[];if("undefined"!==typeof b){for(var L=0;L<b.length;L++){var y=b[L],z;for(z in E)if("DISTANCE"!==z&&3>A&&y.expression===z){var q=u.getFieldValue(z,E[z],this.specialFields,this.dateFields,"longMonthDayYear",this.typeIdField,this.types,this.layerObject&&this.layerObject.renderer?this.layerObject:this.layerDefinition,E,y);q="undefined"!==typeof q&&null!==q?P.stripHTML(q.toString()):"";var D="undefined"!==typeof y.label&&""!==y.label?y.label:void 0,M=k._layer&&k._layer.fields?k._layer.fields:
this.tab.tabLayers&&this.tab.tabLayers[0]?this.tab.tabLayers[0].fields:void 0;M&&"undefined"===typeof D&&(M=u.getField(M,z))&&(D=M.alias);if("undefined"===typeof D||D in[""," ",null,void 0])D=z;u.isURL(q)?q='\x3ca href\x3d"'+q+'" target\x3d"_blank" style\x3d"color: inherit;"\x3e'+D+"\x3c/a\x3e":u.isEmail(q)&&(q='\x3ca href\x3d"mailto:'+q+'" style\x3d"color: inherit;"\x3e'+D+"\x3c/a\x3e");C+=y.validLabel?("undefined"!==typeof y.label&&""!==y.label?D+" ":"")+q+"\x3cbr/\x3e":q+"\x3cbr/\x3e";A+=1;x.push({label:D,
value:q})}}x.push({label:this.parent.nls.distance,value:p});0<x.length&&v.push(x)}d||(k=G.create("div",{},e),B.add(k,"SATcolRec"),B.add(k,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),A=G.create("div",{},k),B.add(A,"SATcolRecBar"),x=G.create("div",{innerHTML:w,tabindex:"0",role:"button","aria-label":this.parent.nls.zoomToFeature+" "+w,isLastElement:a.length-1===g},A),B.add(x,"SATcolRecNum"),a.length-1===g&&P.initLastFocusNode(this.parentNode,x),T.set(x,"backgroundColor",this.parent.config.activeColor),
H(x,"click",l.hitch(this,this._zoomToLocation,I,null)),H(x,"keydown",l.hitch(this,this._zoomToLocation,I,!0)),"point"===this.incidents[0].geometry.type&&(p=G.create("div",{innerHTML:p},A),B.add(p,"SATcolDistance")),this.parent.config.enableRouting&&(p=G.create("div",{"class":"directionsButton",title:this.parent.nls.get_directions,tabindex:"0","aria-label":this.parent.nls.get_directions,role:"button"},A),B.add(p,"SATcolDir"),H(p,"click",l.hitch(this,this._routeToIncident,I,null)),H(p,"keydown",l.hitch(this,
this._routeToIncident,I,!0)),P.initLastFocusNode(this.parentNode,p)),C=G.create("div",{"class":"SATcolWrap",innerHTML:C},k),B.add(C,"SATcolInfo"),m+=Y.position(k).w,C=new W(W.STYLE_SOLID,new R.fromString(this.parent.config.activeMapGraphicColor),1),C=new V(V.STYLE_CIRCLE,24,C,new R.fromString(this.parent.config.activeMapGraphicColor)),p=new aa,p.family="Arial",p.size="12px",w=new ba(w,p,new Z(this.parent.lightTheme?"#111111":this.parent.config.fontColor)),w.setOffset(0,-4),this.graphicsLayer.add(new U(I,
C,E)),this.graphicsLayer.add(new U(I,w,E)))}if(!d&&f)T.set(e,"width",m+"px");else return n.resolve({reportResults:v}),n},_exportToCSV:function(a,d,f,h){if(this.parent.config.hasOwnProperty("exportFieldsOptionForCSV"))var n=this.parent.config.exportFieldsOptionForCSV;else this.parent.config.hasOwnProperty("csvAllFields")&&(n=this.parent.config.csvAllFields);a=u.exportToCSV(a,d,f,h,{type:"proximity",baseLabel:this.baseLabel,csvAllFields:n,layer:this.tab.tabLayers[0],opLayers:this.parent.opLayers,nlsValue:this.parent.nls.proximity,
nlsCount:this.parent.nls.count,unit:this.parent.nls[this.parent.config.distanceUnits],approximateLabel:this.parent.nls.approximate});this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){this.layerDefinition=P.getFeatureLayerDefinition(a);this.layerObject=a;a=u.getFields(a,this.tab,this.allFields,this.parent);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=a.types;this.displayFields=u.getDisplayFields(this.tab);return a.fields},
_zoomToLocation:function(a,d,f){f.shiftKey&&f.keyCode===J.TAB||d&&f.keyCode!==J.ENTER&&f.keyCode!==J.SPACE||this.parent.zoomToLocation(a)},_routeToIncident:function(a,d,f){d&&f.keyCode!==J.ENTER&&f.keyCode!==J.SPACE||this.parent.routeToIncident(a)}})});