System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e){var t,r,o;return{setters:[function(e){t=e},function(e){r=e},function(e){o=e}],execute:function(){e(function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=402)}({0:function(e,r){e.exports=t},1:function(e,t){e.exports=r},218:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1H2zm0-1h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zM1 4h14v1H1V4zm1.5-1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-.646 9.646a.5.5 0 11-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L3.207 10l2.647 2.646zm4.292 0L12.793 10l-2.647-2.646a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708zM8.982 6.62a.5.5 0 01.354.613l-1.553 5.795a.5.5 0 11-.966-.259L8.37 6.973a.5.5 0 01.612-.354z" fill="#000" fill-rule="nonzero"></path></svg>'},30:function(e,t,r){"use strict";var o;r.d(t,"a",(function(){return o})),function(e){e.Url="url",e.Code="code"}(o||(o={}))},402:function(e,t,r){"use strict";r.r(t);var o,n=r(0),i=r(1),a=r(30),s={_widgetLabel:"Embed",embedHint:"Embed by URL or code",unSupportUrl:"It's not a valid URL.",unSupportIframeUrl:"Sorry, this content could not be embedded. It may restrict the embedding of content from other sites."},c=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=new(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.versions=[{version:"1.0.0",description:"The first release.",upgrader:function(e){var t,r,o=null===(t=null==e?void 0:e.functionConfig)||void 0===t?void 0:t.embedType,n=null===(r=null==e?void 0:e.functionConfig)||void 0===r?void 0:r.content;return o?(e=e.set("embedType",o),e=o===a.a.Url?e.set("staticUrl",n):e.set("embedCode",n)):e=e.set("embedType",a.a.Url),e=e.without("functionConfig")}}],t}return c(t,e),t}(n.BaseVersionManager)),u=r(5),f=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),d=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))},p=function(e,t){var r,o,n,i,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){a.label=i[1];break}if(6===i[0]&&a.label<n[1]){a.label=n[1],n=i;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(i);break}n[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},h=function(e){function t(t){var r=e.call(this,t)||this;r.iframeOnLoad=function(e){r.setState({isResetting:!1})},r.checkSafeDomain=function(e){var t=!1;if(!e)return t;var r="";e.indexOf("https://")>-1&&(r=e.substr(8).split("/")[0]);for(var o=0,n=["arcgis.com","esri.com"];o<n.length;o++){var i=n[o];if(r.indexOf(i)>-1){t=!0;break}}return t},r.processUrl=function(e){var t,o,i;if(!e)return e;var a,s=e.toLowerCase();if(/https:\/\/vimeo\.com\/.*/.test(s))return"https://player.vimeo.com/video/"+(a=(e=n.urlUtils.removeSearchFromUrl(e)).split("/"))[a.length-1];if(/https:\/\/www\.youtube\.com\/watch\?.*v=.*/.test(s)){var c=null===(t=n.queryString.parseUrl(e))||void 0===t?void 0:t.query;return"https://www.youtube.com/embed/"+(null==c?void 0:c.v)}if(/https:\/\/youtu\.be\/.*/.test(s))return"https://www.youtube.com/embed/"+(a=(e=n.urlUtils.removeSearchFromUrl(e)).split("/"))[a.length-1];if(/https:\/\/www\.facebook\.com\/.*\/videos\/.*/.test(s))return"https://www.facebook.com/plugins/video.php?href="+s+"&show_text=0";r.checkURLFormat(e)||(e="about:blank");var l="";e.indexOf("https://")>-1&&(l=e.substr(8).split("/")[0]);for(var u=!1,f="",d=0,p=[".maps.arcgis.com",".mapsdevext.arcgis.com",".mapsqa.arcgis.com"];d<p.length;d++){var h=p[d];if(l.indexOf(h)>-1){switch(u=!0,h){case".maps.arcgis.com":f="prod";break;case".mapsdevext.arcgis.com":f="dev";break;case".mapsqa.arcgis.com":f="qa"}break}}var v=window.jimuConfig.hostEnv;if(u&&f===v){var m=Object(n.getAppStore)().getState();if(m&&m.user){var g=null===(o=null==m?void 0:m.portalSelf)||void 0===o?void 0:o.urlKey,b=null===(i=null==m?void 0:m.portalSelf)||void 0===i?void 0:i.customBaseUrl;l&&g&&b&&(e=e.replace(l,g+"."+b))}}return e},r.checkURLFormat=function(e){if(!e||""===e)return!1;if(!new RegExp("^(([h][t]{2}[p][s])?://)").test(e))return!1;var t=e.indexOf(".");return!(t<0||t===e.length-1)},r.formatMessage=function(e){return r.props.intl.formatMessage({id:e,defaultMessage:s[e]})},r.fetchUrl=function(e,t){return d(r,void 0,Promise,(function(){var r,o,i;return p(this,(function(a){switch(a.label){case 0:return r=n.SessionManager.getInstance().getMainSession(),[4,fetch(e,{method:"post",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify({token:null==r?void 0:r.token,url:t})}).catch((function(e){}))];case 1:return(o=a.sent())?[4,o.json().catch((function(e){}))]:[2,Promise.resolve(null)];case 2:return i=a.sent(),[2,Promise.resolve(i)]}}))}))},r.isUsedDataSource=function(e){e||(e=r.props);var t=e.useDataSources;return e.useDataSourcesEnabled&&t&&t.length>0},r.onUrlExpResolveChange=function(e){(null==e?void 0:e.isSuccessful)?r.setState({content:e.value,resolveErr:!1}):r.setState({resolveErr:!0})},r.getRecordsFromRepeatedDataSource=function(){var e,t=r.props.useDataSources&&r.props.useDataSources[0]&&r.props.useDataSources[0].dataSourceId;if(t&&r.props.repeatedDataSource&&t===r.props.repeatedDataSource.dataSourceId){var o=r.props.repeatedDataSource.record;return(e={})[t]=o,e}return null},r.onResize=function(e,t){if(r.size){var o=r.size,n=o.width,i=o.height;(n<1||i<1)&&e>1&&t>1&&r.needReload&&(r.reload(),r.needReload=!1)}r.size={width:e,height:t}},r.reload=function(){var e=r.props.config;if(r.ifr)if(e.embedType===a.a.Code){var t=r.ifr.srcdoc;r.ifr.srcdoc=t}else{var o=r.ifr.src;r.ifr.src=o}},r.loadContent=function(){var e=r.props.config,t=r.state.content,o=e.embedType;r.ifr&&(o===a.a.Code?r.ifr.srcdoc=t:(r.ifr.removeAttribute("srcdoc"),r.ifr.removeAttribute("src"),setTimeout((function(){r.ifr&&(r.ifr.src=r.processUrl(t))}),100)))};var o=t.config,i=o.embedType,c=o.embedCode;r.errMessages={unSupportUrl:r.formatMessage("unSupportUrl"),unSupportIframeUrl:r.formatMessage("unSupportIframeUrl")},r.checkUrl=r.checkUrl.bind(r);var l={content:i===a.a.Url?r.isUsedDataSource()?void 0:o.staticUrl:c,loadErr:!1,resolveErr:!1,refreshFlag:!1,refreshInterval:10,refreshTimer:void 0,changeTimerFlag:!1};return r.state=l,r.shouldRenderIframeInView=!1,r}return f(t,e),t.getDerivedStateFromProps=function(e,t){if(!e||0===Object.keys(e).length||!t||0===Object.keys(t).length)return null;var r=e.config,o=r.autoRefresh,n=void 0!==o&&o,i=r.autoInterval,a=void 0===i?10:i,s=t.refreshFlag,c=t.refreshInterval;return n!==s||a!==c?{refreshFlag:n,refreshInterval:a,changeTimerFlag:!0}:null},t.prototype.componentDidMount=function(){var e=this,t=this.props.config,r=this.state.content;r&&r.trim().length>0&&this.setState({isResetting:!0},(function(){e.loadContent(),t.embedType===a.a.Url&&e.checkUrl(e.processUrl(r))}))},t.prototype.componentDidUpdate=function(e,t){var r=this,o=this.props,i=o.appMode,s=o.config,c=o.useDataSourcesEnabled,l=o.sectionNavInfos,u=s.embedCode,f=s.embedType,d=s.staticUrl,p=s.autoRefresh,h=s.autoInterval,v=p!==e.config.autoRefresh||h!==e.config.autoInterval;if((i!==e.appMode&&i===n.AppMode.Design||v)&&this.reload(),f!==e.config.embedType){var m=f===a.a.Url?this.isUsedDataSource()?void 0:d:u;this.setState({content:m})}else if(f===a.a.Url){var g=this.isUsedDataSource(),b=this.isUsedDataSource(e);if(!0===e.useDataSourcesEnabled&&!1===c&&this.loadContent(),!g||g!==b){var w=g?void 0:d;this.setState({content:w})}}else e.config.embedCode!==u&&this.setState({content:u});var y=this.state,S=y.content,U=y.refreshFlag,R=y.refreshInterval,x=y.refreshTimer,I=y.changeTimerFlag,C=t.content;if(S!==C&&this.setState({isResetting:!!S,loadErr:!1},(function(){if(r.loadContent(),f===a.a.Url&&(r.checkUrl(r.processUrl(S)),r.size)){var e=r.size,t=e.width,o=e.height;(t<1||o<1)&&(r.needReload=!0)}})),this.needLoadContentInView&&e.sectionNavInfos!==l&&this.loadContent(),!x&&U){var E=setInterval((function(){if(f===a.a.Url){if(r.ifr){var e=r.ifr.src;r.ifr.src=e}}else{var t=r.ifr.srcdoc;r.ifr.srcdoc=t}}),60*R*1e3);this.setState({refreshTimer:E})}else x&&!U&&(clearInterval(x),this.setState({refreshTimer:void 0}));if(I&&!U){x&&clearInterval(x);var O=setInterval((function(){if(f===a.a.Url){if(r.ifr){var e=r.ifr.src;r.ifr.src=e}}else{var t=r.ifr.srcdoc;r.ifr.srcdoc=t}}),60*R*1e3);this.setState({refreshTimer:O,changeTimerFlag:!1})}},t.prototype.checkUrl=function(e){var t,r,o,i=this;if(this.checkURLFormat(e)){var a=null===(o=null===(r=null===(t=Object(n.getAppStore)())||void 0===t?void 0:t.getState())||void 0===r?void 0:r.appRuntimeInfo)||void 0===o?void 0:o.appMode;e&&window.jimuConfig.isInBuilder&&a!==n.AppMode.Run&&!window.jimuConfig.isInPortal&&(e.indexOf("https://www.facebook.com/plugins/video.php?show_text=0&href=")>-1||e.indexOf("https://www.youtube.com/embed/")>-1||e.indexOf("https://player.vimeo.com/video/")>-1?this.setState({loadErr:!1}):this.fetchUrl(window.location.origin+"/check_url",e).then((function(t){var r,o,n,a,s,c=!0;if(t&&t.success){var l=t.data,u=null==l?void 0:l.status,f=['default-src "self"',"frame-ancestors"];if(u&&u<400){var d=null===(r=null==l?void 0:l.headers)||void 0===r?void 0:r["content-security-policy"];d&&(a=d,s=!1,f.map((function(e){a.indexOf(e)>0&&(s=!0)})),s)&&(c=!1);var p=null===(n=null===(o=null==l?void 0:l.headers)||void 0===o?void 0:o["x-frame-options"])||void 0===n?void 0:n.toLowerCase();p&&("deny"===p?c=!1:"sameorigin"===p&&(i.isOriginSameAsLocation(e)||(c=!1)))}else c=!1}else c=!1;var h={loadErr:!c};c||(h.isResetting=!1,h.errMessage=i.errMessages.unSupportIframeUrl),i.setState(h)})))}else this.setState({loadErr:!0,errMessage:this.errMessages.unSupportUrl})},t.prototype.isOriginSameAsLocation=function(e){var t=window.location,r=/(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(e)||[],o={protocol:r[1]||"",host:r[2]||"",port:r[3]||""},n=function(e){return e.port||{"http:":80,"https:":443}[e.protocol||t.protocol]};return!!(o.protocol&&o.protocol==t.protocol&&o.host&&o.host==t.host&&o.host&&n(o)==n(t))},t.prototype.render=function(){var e=this,t=this.state,o=t.isResetting,s=t.loadErr,c=t.errMessage,l=t.resolveErr,f=t.content,d=this.props,p=d.theme,h=d.id,v=d.config,m=v.embedCode,g=v.embedType,b=v.staticUrl,w=v.expression,y=this.props.useDataSourcesEnabled;if(g===a.a.Code?!m:!b&&!y||y&&!w)return n.React.createElement(i.WidgetPlaceholder,{widgetId:this.props.id,icon:r(218),message:this.formatMessage("embedHint")});var S=!0;return g===a.a.Url&&(S=!this.checkSafeDomain(f)),n.React.createElement(u.ViewVisibilityContext.Consumer,null,(function(t){var r=t.isInView,i=t.isInCurrentView,u=!0;return e.shouldRenderIframeInView||(u=!r||i)&&(e.shouldRenderIframeInView=!0),e.needLoadContentInView=r&&i,n.React.createElement(n.React.Fragment,null,u&&n.React.createElement("div",{style:{width:"100%",height:"100%",position:"relative"},className:"jimu-widget widget-embed"},S?n.React.createElement("iframe",{id:"ifrSandbox",className:"iframe-"+h,style:{width:"100%",height:"100%"},sandbox:"allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-popups-to-escape-sandbox",allowFullScreen:!0,onLoad:e.iframeOnLoad,frameBorder:"0",ref:function(t){e.ifr=t},allow:"geolocation","data-testid":"embedSandbox"}):n.React.createElement("iframe",{id:"ifrSafe",className:"iframe-"+h,style:{width:"100%",height:"100%"},allowFullScreen:!0,onLoad:e.iframeOnLoad,frameBorder:"0",ref:function(t){e.ifr=t},allow:"geolocation","data-testid":"embedSafe"}),o&&n.React.createElement("div",{className:"jimu-secondary-loading"}),s&&n.React.createElement("div",{className:"mask text-center",style:{position:"absolute",left:0,right:0,top:0,bottom:0,paddingTop:"30%",backgroundColor:p.colors.white}},c),l&&y&&n.React.createElement("div",{className:"mask text-center",style:{position:"absolute",left:0,right:0,top:0,bottom:0,paddingTop:"30%",backgroundColor:p.colors.white}},null==w?void 0:w.name),n.React.createElement("div",{style:{display:"none"}},y&&g===a.a.Url&&w&&n.React.createElement("div",null,n.React.createElement(n.ExpressionResolverComponent,{useDataSources:e.props.useDataSources,expression:w,onChange:e.onUrlExpResolveChange,widgetId:e.props.id}))),n.React.createElement(n.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:e.onResize})))}))},t.versionManager=l,t.mapExtraStateProps=function(e,t){var r,o;return{appMode:null===(r=null==e?void 0:e.appRuntimeInfo)||void 0===r?void 0:r.appMode,sectionNavInfos:null===(o=null==e?void 0:e.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos}},t}(n.React.PureComponent);t.default=h},5:function(e,t){e.exports=o}}))}}}));