// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang jimu/portalUtils jimu/portalUrlUtils jimu/Role esri/lang".split(" "),function(k,b,h,c,l,d){var e=null,g=k([],{userRole:null,userPortalUrl:null,portalAnalysis:null,portalSelf:null,portalUrl:null,_isServiceAvailable:!1,constructor:function(a){this.portalUrl=a},_clearLoadedInfo:function(){this.portalUrl=this.portalSelf=this.userPortalUrl=this.userRole=null},loadPrivileges:function(a){this.portalSelf=this.userPortalUrl=this.userRole=null;this._isServiceAvailable=
!1;a&&(this.portalUrl=a);a=h.getPortal(this.portalUrl);return a.haveSignIn()?this._loadUserInfo(a):this._signIn(a)},getPortalUrl:function(a){return a?c.getStandardPortalUrl(a):this.portalUrl?c.getStandardPortalUrl(this.portalUrl):c.getStandardPortalUrl(this.appConfig.portalUrl)},_privilegeLoaded:function(){return null!==this.portalSelf},getUserPortal:function(){return this._privilegeLoaded()?this.getPortalUrl(this.userPortalUrl):null},_signIn:function(a){return a.loadSelfInfo().then(b.hitch(this,
function(a){var f=h.getPortal(a.portalHostname);return null===f?!1:f.signIn().then(b.hitch(this,function(a){return this._loadUserInfo(f,a)}),function(){return!1})}),function(){return!1})},_loadUserInfo:function(a){return a.loadSelfInfo().then(b.hitch(this,function(a){this.userPortalUrl=a.urlKey?a.urlKey+"."+a.customBaseUrl:this.portalUrl;return a&&a.user?(this.userRole=new l({id:a.user.roleId?a.user.roleId:a.user.role,role:a.user.role}),a.user.privileges&&this.userRole.setPrivileges(a.user.privileges),
this.portalSelf=a,!0):!1}),function(){return!1})},_canPerformElevationAnalysis:function(){this.portalSelf&&(this._isServiceAvailable=d.isDefined(this.portalSelf.helperServices.elevation));return this.canPerformAnalysis()&&this._isServiceAvailable},canPerformAnalysis:function(){var a=!1;this.userRole&&(this.userRole.isAdmin()||this.userRole.isPublisher())?a=!0:this.userRole&&this.userRole.isCustom()&&(a=this.userRole.canCreateItem()&&this.userRole.canPublishFeatures()&&this.userRole.canUseSpatialAnalysis());
this.portalSelf&&this.portalSelf.isPortal&&(a=a&&d.isDefined(this.portalSelf.helperServices.analysis)&&d.isDefined(this.portalSelf.helperServices.analysis.url));return a}});g.getInstance=function(a){null===e&&(e=new g(a));return e};return g});