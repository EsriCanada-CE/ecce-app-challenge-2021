// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/config dojo/cookie dojo/Deferred dojo/promise/all dojo/request/xhr dojo/request/script ./utils ./privilegeUtils ./WidgetManager ./shared/utils ./tokenUtils ./portalUtils ./appConfigResourceUtils ./portalUrlUtils ./AppStateManager esri/IdentityManager esri/config esri/urlUtils esri/arcgis/utils".split(" "),function(J,f,A,G,B,C,t,x,D,K,q,y,L,v,m,r,M,n,N,E,z,H,I){var w=null;var F=J(null,{urlParams:null,appConfig:null,
rawAppConfig:null,configFile:null,_configLoaded:!1,portalSelf:null,constructor:function(a,b){this._removeHash(a);this.urlParams=a||{};this.widgetManager=L.getInstance();f.mixin(this,b)},loadConfig:function(){console.time("Load Config");return this._tryLoadConfig().then(f.hitch(this,function(a){var b=this.checkConfig(a);if(b)throw Error(b);this.rawAppConfig=f.clone(a);N.getInstance().setRawAppConfig(this.rawAppConfig);a=this._upgradeAppConfig(a);this._processAfterTryLoad(a);this.appConfig=a;if(this.urlParams.id)return this.loadWidgetsManifest(a).then(f.hitch(this,
function(){return this.loadAndUpgradeAllWidgetsConfig(a)})).then(f.hitch(this,function(c){return this.updateNecessaryAttrOfResourceUrlInAppConfig(c,this.urlParams.id)})).then(f.hitch(this,function(){this._configLoaded=!0;this._setDocumentTitle(a);this._readAndSetSharedTheme(a);return this.getAppConfig()}));m.setPortalUrl(a.portalUrl);I.arcgisUrl=n.getBaseItemUrl(a.portalUrl);return this._proesssWebTierAndSignin(a).then(f.hitch(this,function(){if(this.urlParams.appid){if(window.appInfo.isRunInPortal){var c=
n.getStandardPortalUrl(a.portalUrl),d=r.getPortal(c);return y.checkIsSelfOrigin(this.urlParams.appid,d,m.isInBuilderWindow()).then(f.hitch(this,function(e){if(!e)throw e=Error(window.jimuNls.orgUrlMessage),e.isSelfOrigin=!1,e;})).then(f.hitch(this,function(){return y.checkEssentialAppsLicense(this.urlParams.appid,d,m.isInBuilderWindow()).then(f.hitch(this,function(){return this._getAppConfigFromTemplateAppId(a.portalUrl,this.urlParams.appid).then(f.hitch(this,function(e){this._tryUpdateAppConfigByLocationUrl(e);
return this._processInPortalAppProtocol(e)}))}),f.hitch(this,function(e){console.error(e);if(e.isBlockedByOrg)throw Error(window.jimuNls.blockedByAdminErrorForApp);throw Error(window.jimuNls.essentialAppsLicenseErrorForApp);}))}))}return this._processNotInPortalAppProtocol(a).then(f.hitch(this,function(e){return this._getAppDataAddTemplateDataFromTemplateAppId(e.portalUrl,this.urlParams.appid).then(f.hitch(this,function(h){h.appData.appConfig&&(e=h.appData.appConfig);e._appData=h.appData;e.templateConfig=
h.templateData;e.isTemplateApp=!0;return e}))}))}return this._processNotInPortalAppProtocol(a)})).then(f.hitch(this,function(c){this._processAfterTryLoad(c);this.appConfig=c;return c.map.itemId?c:(c.map["3D"]?r.getDefaultWebScene(c.portalUrl):r.getDefaultWebMap(c.portalUrl)).then(function(d){c.map.itemId=d;return c})})).then(f.hitch(this,function(c){return this.loadWidgetsManifest(c)})).then(f.hitch(this,function(c){return c._appData?c._appData.values&&c._appData.values.webmap?r.getPortal(c.portalUrl).getItemById(c._appData.values.webmap).then(f.hitch(this,
function(d){return q.template.mergeTemplateAppConfigToAppConfig(c,c._appData,d)})):q.template.mergeTemplateAppConfigToAppConfig(c,c._appData):c})).then(f.hitch(this,function(c){return this.loadAndUpgradeAllWidgetsConfig(c)})).then(f.hitch(this,function(c){return c._wabAppId?this.processResourceInAppConfigForConfigLoader(c,this.urlParams):c.appItemId&&-1<window.JSON.stringify(c).indexOf("${itemId}")?this.updateNecessaryAttrOfResourceUrlInAppConfig(c,c.appItemId):c})).then(f.hitch(this,function(c){this.appConfig=
c;this._configLoaded=!0;this._setDocumentTitle(c);this._readAndSetSharedTheme(c);return this.getAppConfig()}))}),f.hitch(this,function(a){var b=new t;b.reject(a);return b}))},processResourceInAppConfigForConfigLoader:function(a,b){var c=a.portalUrl,d=a.appItemId,e=b.appid,h=new t,g=f.clone(a);this.updateNecessaryAttrOfResourceUrlInAppConfig(g,e).then(function(){if("config"===b.mode){var k=this.getResourceUrlsOfAppConfig(a).result;0!==k.length?r.getItemResources(c,e).then(function(p){if(0===p.length)return k=
k.map(function(l){return{resUrl:l}}),M.AddResourcesToItemForAppSave(c,k,d,e).then(function(){h.resolve(g)},function(l){console.warn("Add resource to template based app error:"+l.message||l);h.resolve(g)});h.resolve(g)},function(p){console.warn("Get resource of template based item error:"+p.message||p);h.resolve(g)}):h.resolve(g)}else h.resolve(g)}.bind(this),function(k){console.warn("Insert appId to resource url of appConfig error:"+k.message||k);h.resolve(g)});return h},getResourceUrlsOfAppConfig:function(a){var b=
{test:function(c){return/^https?:\/\/(.)+\/sharing\/rest\/content\/items\/(.)+\/resources\/inConfig\//.test(c)},func:f.hitch(this,function(c){return c.value})};return q.processItemResourceOfAppConfig(a,b)},updateNecessaryAttrOfResourceUrlInAppConfig:function(a,b){function c(g){return/^https?:\/\/(.)+\/sharing\/rest\/content\/items\/(.)+\/resources\/inConfig\//.test(g)}function d(g,k){g=h.processItemIDAndTokenOfResources(k.value,g);g=h.setResouceProtocolForHttps(g);var p=k.obj,l=k.key;"number"===typeof k.i?
p[l][k.i]=g:p[l]=g;return!0}var e=a.portalUrl,h=this;return r.getPortal(e).getItemById(b).then(f.hitch(this,function(g){g={test:c,func:f.hitch(this,d,{appId:b,isPublic:"public"===g.access,portalUrl:e})};return q.processItemResourceOfAppConfig(a,g).appConfig}))},setResouceProtocolForHttps:function(a){var b=a;"https:"===window.location.protocol&&(b=a.replace(/^http(s?):\/\//i,"https://"));return b},processItemIDAndTokenOfResources:function(a,b){0<a.indexOf("${itemId}")&&(a=a.replace("${itemId}",b.appId));
/(\?|&)token=.+/.test(a)&&(a=a.replace(/(\?|&)token=.+/,""));b.isPublic||(b=m.getPortalCredential(b.portalUrl))&&(a+="?token\x3d"+b.token);return a},_setDocumentTitle:function(a){!window.isBuilder&&a&&a.title&&(document.title=q.stripHTML(a.title))},getAppConfig:function(){var a=f.clone(this.appConfig);a.getConfigElementById=function(b){return q.getConfigElementById(this,b)};a.getConfigElementsByName=function(b){return q.getConfigElementsByName(this,b)};a.visitElement=function(b){q.visitElement(this,
b)};this._addAuthorizedCrossOriginDomains(this.portalSelf,a);return a},_addAuthorizedCrossOriginDomains:function(a,b){a&&a.authorizedCrossOriginDomains&&m.addAuthorizedCrossOriginDomains(a.authorizedCrossOriginDomains);b&&b.authorizedCrossOriginDomains&&m.addAuthorizedCrossOriginDomains(b.authorizedCrossOriginDomains)},checkConfig:function(){return!1},processProxy:function(a){z.defaults.io.alwaysUseProxy=a.httpProxy&&a.httpProxy.useProxy&&a.httpProxy.alwaysUseProxy;z.defaults.io.proxyUrl="";z.defaults.io.proxyRules=
[];a.httpProxy&&a.httpProxy.useProxy&&a.httpProxy.url&&(z.defaults.io.proxyUrl=a.httpProxy.url);a.httpProxy&&a.httpProxy.useProxy&&a.httpProxy.rules&&A.forEach(a.httpProxy.rules,function(b){H.addProxyRule(b)})},addNeedValues:function(a){this._processNoUriWidgets(a);this._processEmptyGroups(a);this._addElementId(a);this._fixRepeatedId(a)},showError:function(a){a&&a.message&&(G.create("div",{"class":"app-error",innerHTML:q.sanitizeHTML(a.message)},document.body),G.setStyle(jimuConfig.loadingId,"display",
"none"))},_tryLoadConfig:function(){"stemapp"===this.urlParams.id&&(this.urlParams.config=window.appInfo.appPath+"config.json",delete this.urlParams.id);if(this.urlParams.config)return this.configFile=this.urlParams.config,D(this.configFile,{handleAs:"json",headers:{"X-Requested-With":null}}).then(f.hitch(this,function(d){m.setPortalUrl(d.portalUrl);d.portalUrl&&(window.portalUrl=d.portalUrl);return this.urlParams.token?m.registerToken(this.urlParams.token).then(function(){return d}):d}));if(this.urlParams.id){window.appInfo.isRunInPortal=
!0;var a=n.getPortalUrlFromLocation(),b=new t;m.setPortalUrl(a);window.portalUrl=a;I.arcgisUrl=n.getBaseItemUrl(a);if(this.urlParams.token)var c=m.registerToken(this.urlParams.token);else c=new t,c.resolve();c.then(f.hitch(this,function(){var d=r.getPortal(a);d.loadSelfInfo().then(f.hitch(this,function(e){this.portalSelf=e;e.allSSL&&"http:"===window.location.protocol?(console.log("redirect from http to https"),window.location.href=n.setHttpsProtocol(window.location.href),b.reject()):this._processSignIn(a).then(f.hitch(this,
function(){this._getAppConfigFromAppId(a,this.urlParams.id).then(f.hitch(this,function(h){return y.checkIsSelfOrigin(this.urlParams.id,d,m.isInBuilderWindow()).then(f.hitch(this,function(g){if(g)return h;g=Error(window.jimuNls.orgUrlMessage);g.isSelfOrigin=!1;throw g;}))})).then(f.hitch(this,function(h){return y.checkEssentialAppsLicense(this.urlParams.id,d,m.isInBuilderWindow()).then(f.hitch(this,function(){this._tryUpdateAppConfigByLocationUrl(h);return this._processInPortalAppProtocol(h)}),f.hitch(this,
function(g){console.error(g);if(g.isBlockedByOrg)throw Error(window.jimuNls.blockedByAdminErrorForApp);throw Error(window.jimuNls.essentialAppsLicenseErrorForApp);}))})).then(function(h){b.resolve(h)},function(h){b.reject(h)})}))}))}),f.hitch(this,function(d){this.showError(d)}));return b}this.configFile="config.json";return D(this.configFile,{handleAs:"json"}).then(f.hitch(this,function(d){m.setPortalUrl(d.portalUrl);d.portalUrl&&(window.portalUrl=d.portalUrl);return this.urlParams.token?m.registerToken(this.urlParams.token).then(function(){return d}):
d}))},_upgradeAppConfig:function(a){var b=window.wabVersion,c=a.wabVersion;a.configWabVersion=a.wabVersion;if(b===c)return a;var d=this.versionManager.getVersionIndex(c),e=this.versionManager.getVersionIndex(b);if(d>e)throw Error("Bad version number, "+c);a=this.versionManager.upgrade(a,c,b);a.wabVersion=b;return a},loadAndUpgradeAllWidgetsConfig:function(a){var b=new t,c=[];v.visitElement(a,f.hitch(this,function(d){d.uri&&(d=this.widgetManager.tryLoadWidgetConfig(d),c.push(d))}));x(c).then(f.hitch(this,
function(){b.resolve(a)}),function(d){b.reject(d)});return b},_processAfterTryLoad:function(a){this._setPortalUrl(a);this._tryUpdateAppConfigByLocationUrl(a);this._processUrlParams(a);this.addNeedValues(a);this.processProxy(a);E.tokenValidity=10080;return a},_readAndSetSharedTheme:function(a){a.theme.sharedTheme?this.portalSelf.portalProperties&&this.portalSelf.portalProperties.sharedTheme||(a.theme.sharedTheme.isPortalSupport=!1):(a.theme.sharedTheme={useHeader:!1,useLogo:!1},a.theme.sharedTheme.isPortalSupport=
this.portalSelf.portalProperties&&this.portalSelf.portalProperties.sharedTheme?!0:!1);a.theme.sharedTheme.useHeader&&(a.theme.sharedTheme.isPortalSupport&&this.portalSelf.portalProperties?(a.theme.customStyles={mainBackgroundColor:this.portalSelf.portalProperties.sharedTheme.header.background},a.titleColor=this.portalSelf.portalProperties.sharedTheme.header.text):console.error("Portal does not support sharedTheme."));a.theme.sharedTheme.useLogo&&(a.theme.sharedTheme.isPortalSupport&&this.portalSelf.portalProperties?
(a.logo=this.portalSelf.portalProperties.sharedTheme.logo.small?this.portalSelf.portalProperties.sharedTheme.logo.small:"images/app-logo.png",!a.logoLink&&this.portalSelf.portalProperties.sharedTheme.logo.link&&(a.logoLink=this.portalSelf.portalProperties.sharedTheme.logo.link)):(console.error("Portal does not support sharedTheme, use default logo."),a.logo="images/app-logo.png"))},_tryUpdateAppConfigByLocationUrl:function(a){if(!(this.urlParams.config&&-1<this.urlParams.config.indexOf("arcgis.com/sharing/rest/content/items/"))){var b=
n.getPortalUrlFromLocation();b=n.getStandardPortalUrl(b);n.isOnline(b)&&(b=n.updateUrlProtocolByOtherUrl(b,a.portalUrl),a.map.portalUrl&&n.isSamePortalUrl(a.portalUrl,a.map.portalUrl)&&(a.map.portalUrl=b),a.portalUrl=b,a.httpProxy&&a.httpProxy.url&&(a.httpProxy.url=n.getPortalProxyUrl(b)))}},_processWidgetJsons:function(a){v.visitElement(a,function(b,c){c.isWidget&&b.uri&&q.widgetJson.processWidgetJson(b)})},_processNoUriWidgets:function(a){var b=0;v.visitElement(a,function(c,d){d.isWidget&&!c.uri&&
(b++,c.placeholderIndex=b)})},_processEmptyGroups:function(a){var b=0;a.widgetOnScreen.groups&&A.forEach(a.widgetOnScreen.groups,function(c){if(!c.widgets||c.widgets&&0===c.widgets.length)b++,c.placeholderIndex=b})},_addElementId:function(a){var b=0,c;v.visitElement(a,function(d){if(d.id){d.id=d.id.replace(/\//g,"_");var e=d.id.lastIndexOf("_");-1<e&&(c=d.id.substr(e+1),b=Math.max(b,c))}});v.visitElement(a,function(d){d.id||(b++,d.id=d.itemId?d.itemId+"_"+b:d.uri?d.uri.replace(/\//g,"_")+"_"+b:"_"+
b)})},_setPortalUrl:function(a){if(a.portalUrl){var b=n.getPortalUrlFromLocation(),c=n.isOnline(b);n.isSamePortalUrl(a.portalUrl,b)||c||(window.appInfo.isRunInPortal=!1)}else window.isXT&&C("wab_portalurl")?a.portalUrl=C("wab_portalurl"):(window.appInfo.isRunInPortal=!0,a.portalUrl=n.getPortalUrlFromLocation())},_changePortalUrlProtocol:function(a,b){a.portalUrl=n.setProtocol(a.portalUrl,b);a.map.portalUrl&&(a.map.portalUrl=n.setProtocol(a.map.portalUrl,b));a.httpProxy&&(a.httpProxy.url=n.setProtocol(a.httpProxy.url,
b),a.httpProxy&&a.httpProxy.rules&&A.forEach(a.httpProxy.rules,f.hitch(this,function(c){c.proxyUrl=n.setProtocol(c.proxyUrl,b)})))},_processInPortalAppProtocol:function(a){var b=new t,c=r.getPortal(a.portalUrl),d=f.hitch(this,function(e){if("https:"===window.location.protocol)this._changePortalUrlProtocol(a,"https");else{if(e){console.log("redirect from http to https");window.location.href=n.setHttpsProtocol(window.location.href);b.reject();return}this._changePortalUrlProtocol(a,"http")}this._checkLocale();
b.resolve(a)});c.loadSelfInfo().then(f.hitch(this,function(e){this.portalSelf=e;"private"===e.access?(e=0===a.portalUrl.toLowerCase().indexOf("https://"),d(e)):d(e.allSSL)}),f.hitch(this,function(e){b.reject(e)}));return b},_processNotInPortalAppProtocol:function(a){var b=new t;a.portalUrl?r.getPortal(a.portalUrl).loadSelfInfo().then(f.hitch(this,function(c){this.portalSelf=c;var d="https:"===window.location.protocol;(c.allSSL||d)&&this._changePortalUrlProtocol(a,"https");0!==a.portalUrl.toLowerCase().indexOf("https://")||
d||m.isInConfigOrPreviewWindow()?b.resolve(a):(console.log("redirect from http to https"),window.location.href=n.setHttpsProtocol(window.location.href),b.reject())}),f.hitch(this,function(c){b.reject(c)})):b.resolve(a);return b},_proesssWebTierAndSignin:function(a){var b=new t,c=!1,d=a.portalUrl;this._processWebTier(a).then(f.hitch(this,function(e){c=e;return r.getPortal(d).loadSelfInfo()})).then(f.hitch(this,function(e){this.portalSelf=e;return this._processSignIn(d,c)})).then(f.hitch(this,function(){b.resolve()}),
function(e){b.reject(e)});return b},_processWebTier:function(a){var b=new t,c=a.portalUrl;a.isWebTier?(m.addAuthorizedCrossOriginDomains([c]),m.isWebTierPortal(c).then(f.hitch(this,function(){var d=m.getPortalCredential(c);d&&d.ssl&&"http:"===window.location.protocol&&!m.isInConfigOrPreviewWindow()?(console.log("redirect from http to https"),window.location.href=n.setHttpsProtocol(window.location.href)):b.resolve(a.isWebTier)}),f.hitch(this,function(d){b.reject(d)}))):b.resolve(!1);return b},_processSignIn:function(a,
b){var c=new t,d=r.getPortal(a),e=n.getSharingUrl(a),h=n.setHttpsProtocol(a+"/sharing/generateToken?f\x3djson");window.appInfo.isRunInPortal?(b=E.checkSignInStatus(e),b.promise.then(f.hitch(this,function(g){g.token?c.resolve():K.get(h,{jsonp:"callback"}).then(f.hitch(this,function(k){k&&k.token&&(g.token=k.token,g.expires||(g.expires=k.expires));c.resolve()}),f.hitch(this,function(k){console.error(k);c.resolve()}))}),f.hitch(this,function(){c.resolve()}))):(!m.isInBuilderWindow()&&!m.isInConfigOrPreviewWindow()&&
this.portalSelf.supportsOAuth&&this.rawAppConfig&&this.rawAppConfig.appId&&!b&&m.registerOAuthInfo(a,this.rawAppConfig.appId),b=E.checkSignInStatus(e),b.promise.always(f.hitch(this,function(){m.xtGetCredentialFromCookie(a);d.loadSelfInfo().then(f.hitch(this,function(g){this.portalSelf=g;this._checkLocale();c.resolve()}))})));return c},_checkLocale:function(){if(!m.isInConfigOrPreviewWindow()){var a=this.portalSelf.user&&this.portalSelf.user.culture||B.locale;a="hi"===a?"en":a.toLowerCase();!this.urlParams.locale&&
q.isLocaleChanged(B.locale,a)&&(C("wab_app_locale",a),window.location.reload())}},_getAppConfigFromTemplateAppId:function(a,b){var c=r.getPortal(a);return this._getWabAppIdAndDataFromTemplateAppId(a,b).then(f.hitch(this,function(d){var e=d.appId,h=d.appData;return x([this._getAppConfigFromAppId(a,e),c.getItemData(h.source)]).then(f.hitch(this,function(g){if(h.appConfig){var k=h.appConfig;delete h.appConfig}else k=g[0];k=this._upgradeAppConfig(k);g=g[1];k._appData=h;k._wabAppId=e;k.templateConfig=
g;k.isTemplateApp=!0;return k}))}))},_getAppDataAddTemplateDataFromTemplateAppId:function(a,b){var c=r.getPortal(a);return c.getItemData(b).then(function(d){return c.getItemData(d.source).then(function(e){return{appData:d,templateData:e}})})},_getWabAppIdAndDataFromTemplateAppId:function(a,b){var c=new t,d=r.getPortal(a);d.getItemData(b).then(f.hitch(this,function(e){d.getItemById(e.source).then(f.hitch(this,function(h){h=H.urlToObject(h.url);c.resolve({appId:h.query.id,appData:e})}))}),function(e){c.reject(e)});
return c},_getAppConfigFromAppId:function(a,b){return r.getPortal(a).getItemData(b)},_removeHash:function(a){for(var b in a)a[b]&&(a[b]=a[b].replace("#",""))},loadWidgetsManifest:function(a){function b(h,g,k){function p(l){return h.loadWidgetManifest(l).then(function(u){return u},function(u){console.log("Widget failed to load, it is removed.",l.name);u.stack?console.error(u.stack):console.log(u);c(a,l)})}return g.itemId?r.getPortal(k).getItemById(g.itemId).then(function(l){g.uri=q.widgetJson.getUriFromItem(l);
return p(g)},function(l){console.log("Widget is not loaded, it is removed.",g.name,l);c(a,g)}):p(g)}function c(h,g){function k(p){h[p]&&h[p].widgets&&(h[p].widgets=h[p].widgets.filter(function(l){if(g)return l.id!==g.id;l.uri&&!l.manifest&&console.error("Widget is removed because it is not loaded successfully.",l.uri);return l.manifest}));h[p]&&h[p].groups&&h[p].groups.forEach(function(l){l.widgets&&(l.widgets=l.widgets.filter(function(u){if(g)return u.id!==g.id;u.uri&&!u.manifest&&console.error("Widget is removed because it is not loaded successfully.",
u.uri);return u.manifest}))})}k("widgetOnScreen");k("widgetPool")}var d=[],e=new t;this.urlParams.manifest&&a._buildInfo&&a._buildInfo.widgetManifestsMerged&&delete a._buildInfo.widgetManifestsMerged;a._buildInfo&&a._buildInfo.widgetManifestsMerged?this._loadMergedWidgetManifests().then(f.hitch(this,function(h){v.visitElement(a,f.hitch(this,function(g){g.widgets||!g.uri&&!g.itemId||(g.uri&&h[g.uri]?(this._addNeedValuesForManifest(h[g.uri],g.uri),q.widgetJson.addManifest2WidgetJson(g,h[g.uri])):d.push(b(this.widgetManager,
g,a.portalUrl)))}));x(d).then(function(){e.resolve(a)})})):(v.visitElement(a,f.hitch(this,function(h){h.widgets||!h.uri&&!h.itemId||d.push(b(this.widgetManager,h,a.portalUrl))})),x(d).then(function(){e.resolve(a)}));setTimeout(function(){e.isResolved()||(c(a),e.resolve(a))},6E4);return e},_addNeedValuesForManifest:function(a,b){f.mixin(a,q.getUriInfo(b));q.manifest.addManifestProperies(a);q.manifest.processManifestLabel(a,B.locale)},_loadMergedWidgetManifests:function(){return D(window.appInfo.appPath+
"widgets/widgets-manifest.json",{handleAs:"json"})},_fixRepeatedId:function(a){var b=[];v.visitElement(a,function(c){0<=b.indexOf(c.id)&&(c.id+="_");b.push(c.id)})},_processUrlParams:function(a){var b=this.urlParams.itemid||this.urlParams.webmap;b&&a.map.itemId!==b&&(a.map.mapOptions&&q.deleteMapOptions(a.map.mapOptions),a.map.itemId=b);this.urlParams.mode&&(a.mode=this.urlParams.mode);a.map.mapOptions||(a.map.mapOptions={});this.urlParams.scale&&(a.map.mapOptions.scale=this.urlParams.scale);if(this.urlParams.level||
this.urlParams.zoom)a.map.mapOptions.zoom=this.urlParams.level||this.urlParams.zoom}});F.getInstance=function(a,b){null===w?w=new F(a,b):(w.urlParams=a||{},w.options=b);return w};return F});