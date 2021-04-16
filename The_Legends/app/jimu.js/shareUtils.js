// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang esri/request dojo/promise/all jimu/shared/basePortalUrlUtils dojo/Deferred esri/lang jimu/portalUtils jimu/Role jimu/utils esri/urlUtils".split(" "),function(e,k,t,l,g,p,q,u,h,n){var m={getBaseHrefUrl:function(a){var b="HTML3D"===window.appInfo.appType?"webappviewer3d":"webappviewer",d="";window.isXT?d=window.location.protocol+"//"+window.location.host+window.appInfo.appPath:(d=h.urlToObject(window.location.href).query||{},d=d.appid?a+"apps/"+b+"/index.html?appid\x3d"+d.appid:
d.id?a+"apps/"+b+"/index.html?id\x3d"+d.id:h.getAppHref());return d},addQueryParamToUrl:function(a,b,d,c){a=n.urlToObject(a);a.query||(a.query={});a.query[b]=d;b=a.path;for(var f in a.query)d=a.query[f],!0===c&&(d=encodeURIComponent(d)),b=b===a.path?b+"?"+f+"\x3d"+d:b+"\x26"+f+"\x3d"+d;return b},getQueryParamFromUrl:function(a,b){a=n.urlToObject(a);a.query||(a.query={});return a.query[b]},removeQueryParamFromUrl:function(a,b,d){a=n.urlToObject(a);a.query&&delete a.query[b];b=a.path;for(var c in a.query){var f=
a.query[c];!0===d&&(f=encodeURIComponent(f));b=b===a.path?b+"?"+c+"\x3d"+f:b+"\x26"+c+"\x3d"+f}return b},getShareUrlContent:function(a){return"\x3cdiv class\x3d'marker-feature-action-popup'\x3e\x3cdiv class\x3d'item'\x3e\x3cspan class\x3d'sub-title jimu-float-leading'\x3e"+window.jimuNls.common.url+"\x3c/span\x3e\x3cinput type\x3d'text' class\x3d'jimu-float-leading' readonly\x3d'readonly' value\x3d"+a+"\x3e\x3c/input\x3e\x3c/div\x3e\x3c/div\x3e"},getShareUrl:function(a,b,d){var c=m.getBaseHrefUrl(window.portalUrl),
f="",r,e,g,h,k;b&&(b.longitude&&b.latitude?(r=b.longitude,e=b.latitude,f=b.longitude+","+b.latitude+","):b.x&&b.y&&b.spatialReference&&b.spatialReference.wkid&&(g=b.x,h=b.y,k=b.spatialReference.wkid,f=b.x+","+b.y+","+b.spatialReference.wkid));c=m.addQueryParamToUrl(c,"marker",f,!0);c=m.addQueryParamToUrl(c+",,,","markertemplate",encodeURIComponent(JSON.stringify({title:b.title,x:g,y:h,wkid:k,longitude:r,latitude:e,isIncludeShareUrl:d})));b=a.getLevel();return c="number"===typeof b&&-1!==b?m.addQueryParamToUrl(c,
"level",a.getLevel(),!0):m.addQueryParamToUrl(c,"scale",a.getScale(),!0)},getXyContent:function(a){var b="\x3cdiv class\x3d'marker-feature-action-popup'\x3e";a.longitude&&a.latitude?b+="\x3cdiv class\x3d'item clearFix'\x3e\x3cspan class\x3d'sub-title'\x3e"+window.jimuNls.common.longitude+"\x3c/span\x3e\x3cspan class\x3d'val'\x3e"+h.localizeNumber(parseFloat(a.longitude).toFixed(4))+"\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'item clearFix'\x3e\x3cspan class\x3d'sub-title'\x3e"+window.jimuNls.common.latitude+
"\x3c/span\x3e\x3cspan class\x3d'val'\x3e"+h.localizeNumber(parseFloat(a.latitude).toFixed(4))+"\x3c/span\x3e\x3c/div\x3e":a.x&&a.y&&(b+="\x3cdiv class\x3d'item clearFix'\x3e\x3cspan class\x3d'sub-title'\x3ex\x3c/span\x3e\x3cspan class\x3d'val'\x3e"+h.localizeNumber(parseFloat(a.x).toFixed(4))+"\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'item'\x3e\x3cspan class\x3d'sub-title'\x3ey\x3c/span\x3e\x3cspan class\x3d'val'\x3e"+h.localizeNumber(parseFloat(a.y).toFixed(4))+"\x3c/span\x3e\x3c/div\x3e");return b+
"\x3c/div\x3e"},_isUserOwnTheApp:function(a){return a&&a.username&&a.username===window.appInfo.appOwner?!0:!1},getItemByUserAndItemId:function(a,b,d,c){var f=new g;c=l.getStandardPortalUrl(c);c=c+"/sharing/rest/content/users/"+(b?b.username?b.username:b.email:d.email);if(p.isDefined(a.folderId)&&"/"!==a.folderId||p.isDefined(a.ownerFolder)&&"/"!==a.ownerFolder)c+="/"+(a.folderId||a.ownerFolder);c+="/items/"+a.id;k({url:c,handleAs:"json",content:{f:"json"},callbackParamName:"callback"}).then(e.hitch(this,
function(a){f.resolve(a)}),e.hitch(this,function(a){console.error(a);f.reject(a)}));return f},_getProfile:function(a,b){var d=new g;a=l.getUserUrl(b,a.owner);k({url:a,handleAs:"json",content:{f:"json"},callbackParamName:"callback"}).then(e.hitch(this,function(a){d.resolve(a)}),e.hitch(this,function(a){console.error(a);d.reject(a)}));return d},_unshareItemById:function(a,b,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/items/"+b+"/unshare";b={f:"json"};b=e.mixin(b,a);k({url:d,
handleAs:"json",content:b,callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},canSharePublic:function(a){return!a.selfUrl||!0!==a.canSharePublic&&!1!==a.canSharePublic?!0:a.canSharePublic},unshareItemsByUser:function(a,b,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/users/"+a+"/unshareItems";a={f:"json"};a=e.mixin(a,b);k({url:d,handleAs:"json",content:a,callbackParamName:"callback"},
{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},unshareItems:function(a,b,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/users/"+(b.owner||a.email)+"/unshareItems";a={f:"json"};a=e.mixin(a,b);k({url:d,handleAs:"json",content:a,callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},shareItemsByUser:function(a,
b,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/users/"+a+"/shareItems";a={f:"json"};a=e.mixin(a,b);k({url:d,handleAs:"json",content:a,callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},shareItems:function(a,b,d){var c=new g;d=l.getStandardPortalUrl(d);d+="/sharing/rest/content/users/"+(b.owner||a.email)+"/shareItems";a={f:"json"};a=e.mixin(a,b);k({url:d,handleAs:"json",
content:a,callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){console.error(a);c.reject(a)}));return c},getItemsGroups:function(a,b){var d=new g;b=l.getStandardPortalUrl(b);b+="/sharing/rest/content/items/"+a.id+"/groups";k({url:b,handleAs:"json",content:{f:"json"},callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){d.resolve(a)}),e.hitch(this,function(a){console.error(a);d.reject(a)}));return d},isSharedToPublic:function(a){return window.isXT?
!1:null===a?!0:"undefined"!==typeof a&&"undefined"!==typeof a.item&&"undefined"!==typeof a.item.access&&"public"===a.item.access?!0:!1},isShowSocialMediaLinks:function(a){return window.isXT?!0:null===a?!0:"undefined"!==typeof a&&"undefined"!==typeof a.item&&"undefined"!==typeof a.item.access&&"private"===a.item.access?!1:!0},getItemShareInfo:function(a){var b=new g,d="";if(window.isXT)return b.resolve(null);d=h.urlToObject(h.getAppHref()).query||{};d=d.id||d.appid;if("undefined"===typeof d||""===
d)return b.resolve(null);q.getPortal(a).getItemById(d).then(e.hitch(this,function(a){var d={};d.item=a;d.item&&"undefined"===typeof d.item.sharing&&d.item.access&&(d.item.sharing={access:d.item.access});b.resolve(d)}),e.hitch(this,function(a){console.log(a);b.resolve(null)}));return b},getShareInfo:function(a){var b=q.getPortal(a),d=new g,c="";if(window.isXT)return d.resolve(null);c=h.urlToObject(h.getAppHref()).query||{};c=c.id||c.appid;if("undefined"===typeof c||""===c)return d.resolve(null);t({getUser:b.getUser(),
loadSelfInfo:b.loadSelfInfo(),getItem:b.getItemById(c)}).then(e.hitch(this,function(b){var c={};c.item=b.getItem;c.item&&c.item.ownerFolder&&c.item.ownerFolder.length&&"/"!==c.item.ownerFolder&&(c.item.folderId=c.item.ownerFolder);"undefined"===typeof c.item.sharing&&c.item.access&&(c.item.sharing={access:c.item.access});c.user=b.getUser;m._setUserRole(b.loadSelfInfo,c);c.currentUser=c.user;c.isAdmin=!1;c.userRole&&(c.userRole.isAdmin()||c.userRole.isCustom()&&c.userRole.canUpdateOrgItems())?(c.isAdmin=
!0,c.item.owner!==c.currentUser.name?m._getProfile(c.item,a).then(e.hitch(this,function(a){c.itemUser=a;c.itemUser.orgId!==c.currentUser.orgId&&(c.isAdmin=!1);d.resolve(c)})):(c.itemUser=c.currentUser,d.resolve(c))):(c.currentUser&&(c.itemUser=c.currentUser),d.resolve(c))}),e.hitch(this,function(a){console.log(a);d.resolve(null)}));return d},_setUserRole:function(a,b){b.userPortalUrl=a.urlKey?a.urlKey+"."+a.customBaseUrl:this.portalUrl;!a||a.code||a.message||(b.organization=a);if(a&&a.user)b.userRole=
new u({id:a.user.roleId?a.user.roleId:a.user.role,role:a.user.role}),b._isCustomRole=b.userRole.isCustom(),b._roleCanShareToGroup=b._isCustomRole&&b.userRole.canShareItemToGroup(),b._roleCanShareToOrg=b._isCustomRole&&b.userRole.canShareItemToOrg(),b._roleCanSharePublic=b._isCustomRole&&b.userRole.canShareItemToPublic(),b._roleCanShare=b._roleCanShareToGroup||b._roleCanShareToOrg||b._roleCanShareToPublic,b._roleCanUpdateItems=b._isCustomRole&&b.userRole.canUpdateOrgItems(),b._roleCanShareOthersItemsToGroup=
b._isCustomRole&&b.userRole.canShareOthersItemsToGroup(),b._roleCanShareOthersItemsToOrg=b._isCustomRole&&b.userRole.canShareOthersItemsToOrg(),b._roleCanShareOthersItemsToPublic=b._isCustomRole&&b.userRole.canShareOthersItemsToPublic(),b._roleCanShareOthersItems=b._isCustomRole&&(b.userRole.canShareOthersItemsToGroup()||b.userRole.canShareOthersItemsToOrg()||b._roleCanShareOthersItemsToPublic),b._orgUserCanSharePublicOrOverride=b.organization&&(!0===b.organization.canSharePublic&&(!b._isCustomRole||
b._roleCanSharePublic||b._roleCanShareOthersItemsToPublic)||b.userRole.isAdmin());else return!1},getItemById:function(a,b){var d=new g;b=l.getStandardPortalUrl(b);b+="/sharing/rest/content/items/"+a.id;k({url:b,handleAs:"json",content:{f:"json"},callbackParamName:"callback"}).then(e.hitch(this,function(a){d.resolve(a)}),e.hitch(this,function(a){console.error(a);d.reject(a)}));return d},disableWebMapPopup:function(a){a&&a.setInfoWindowOnClick&&a.setInfoWindowOnClick(!1)},enableWebMapPopup:function(a){a&&
a.setInfoWindowOnClick&&a.setInfoWindowOnClick(!0)}};return m});