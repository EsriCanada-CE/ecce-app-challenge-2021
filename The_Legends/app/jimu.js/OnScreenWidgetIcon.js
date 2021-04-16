// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/keys dijit/Tooltip dijit/_WidgetBase ./utils".split(" "),function(k,b,l,c,d,f,m,n,h){return k(n,{"class":"jimu-widget-onscreen-icon",postCreate:function(){this.inherited(arguments);this.iconNode=c.create("img",{src:this.widgetConfig.icon,alt:this.widgetConfig.label},this.domNode);window.isRTL&&this.widgetConfig.mirrorIconForRTL&&c.addClass(this.iconNode,"jimu-flipx");c.setAttr(this.domNode,"title",this.widgetConfig.label);
c.setAttr(this.domNode,"data-widget-name",this.widgetConfig.name);c.setAttr(this.domNode,"tabindex",this.widgetConfig.tabIndex?this.widgetConfig.tabIndex:this.widgetConfig.tabIndexJimu);c.setAttr(this.domNode,"role","button");this.own(d(this.domNode,"click",b.hitch(this,function(){this.onClick()})));this.own(d(this.domNode,"keydown",b.hitch(this,function(a){if(a.keyCode===f.ENTER||a.keyCode===f.SPACE)this.onClick();else a.keyCode===f.ESCAPE&&this.map.container.focus()})));h.addTooltipByDomNode(m,
this.domNode,this.widgetConfig.label);this.position=b.clone(this.widgetConfig.position);"map"===this.widgetConfig.position.relativeTo&&this.own(d(this.map,"resize",b.hitch(this,function(){var a=b.clone(this.position);delete a.width;delete a.height;this.panel&&this.panel.setPosition(a)})));this.state="closed"},startup:function(){this.inherited(arguments)},onClick:function(){"closed"===this.state?this.switchToOpen():this.switchToClose()},moveTo:function(a){var g={left:"auto",right:"auto",bottom:"auto",
top:"auto",width:"auto",height:"auto"},g=b.mixin(g,h.getPositionStyle(a));delete g.width;delete g.height;c.setStyle(this.domNode,g);this.position=b.clone(a);this.widgetConfig&&this.widgetConfig.panel&&(this.widgetConfig.panel.position=b.clone(a),this.widgetConfig.position=b.clone(a));this.panel&&this.panel.setPosition(b.clone(a));this.widget&&this.widget.setPosition(this.getOffPanelWidgetPosition(this.widget))},destroy:function(){this.panel?this.panelManager.destroyPanel(this.panel):this.widget&&
this.widgetManager.destroyWidget(this.widget);this.inherited(arguments)},switchToOpen:function(){this.state="opened";this.panelManager.closeAllPanelsInGroup(this.widgetConfig.gid);l.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){a.closeable&&this.widgetManager.closeWidget(a)},this);c.addClass(this.domNode,"jimu-state-selected");this._showLoading();!1===this.widgetConfig.inPanel?this.widgetManager.loadWidget(this.widgetConfig).then(b.hitch(this,function(a){this.widget=a;a.setPosition(this.getOffPanelWidgetPosition(a));
this.widgetManager.openWidget(a);this.own(d(a,"close",b.hitch(this,function(){this.switchToClose();this.iconNode.parentNode.focus()})));this._hideLoading()})):this.panelManager.showPanel(b.clone(this.widgetConfig)).then(b.hitch(this,function(a){this.panel=a;this.own(d(a,"close",b.hitch(this,function(){this.switchToClose();this.iconNode.parentNode.focus()})));this.own(d(a.closeNode,"keydown",b.hitch(this,function(a){a.keyCode===f.ESCAPE&&(a.stopPropagation(),this.iconNode.parentNode.focus())})));this._hideLoading()}))},
switchToClose:function(){this.state="closed";c.removeClass(this.domNode,"jimu-state-selected");!1===this.widgetConfig.inPanel?this.widgetManager.closeWidget(this.widget):this.panelManager.closePanel(this.panel)},getOffPanelWidgetPosition:function(a){var b={relativeTo:a.position.relativeTo},e=c.getMarginBox(this.domNode);a=this.widgetManager.getWidgetMarginBox(a);var d=c.getMarginBox("map"===b.relativeTo?this.map.id:jimuConfig.layoutId),f=e.t+e.h+1;f+a.h>d.h?b.bottom=d.h-e.t+1:b.top=f;window.isRTL?
b.right=0>e.l+e.w-a.w?0:e.l+e.w-a.w:e.l+a.w>d.w?b.right=0:b.left=e.l;return b},_showLoading:function(){c.setAttr(this.iconNode,"src",require.toUrl("jimu")+"/images/loading_circle.gif")},_hideLoading:function(){c.setAttr(this.iconNode,"src",this.widgetConfig.icon)}})});