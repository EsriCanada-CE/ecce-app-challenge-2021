// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(k){function e(){this.versions=[{version:"1.0",upgrader:function(b){return b}},{version:"1.1",upgrader:function(b){for(var a=null,c=null,d=null,f=null,h="#5d9cd3 #eb7b3a #a5a5a5 #febf29 #4673c2 #72ad4c".split(" "),g=0;g<b.charts.length;g++)a=b.charts[g],f=a.mode,c=a.types,d=a.colors,delete a.types,delete a.colors,d="feature"===f||"category"===f?1===a.valueFields.length?[d[0]]:h:[d[0]],0<=c.indexOf("column")&&(a.column={horizontalAxis:!0,verticalAxis:!0,
colors:d}),0<=c.indexOf("bar")&&(a.bar={horizontalAxis:!0,verticalAxis:!0,colors:d}),0<=c.indexOf("line")&&(a.line={horizontalAxis:!0,verticalAxis:!0,colors:d}),0<=c.indexOf("pie")&&(a.pie={label:!0,colors:h});return b}},{version:"1.2",upgrader:function(b){return b}},{version:"1.3",upgrader:function(b){return b}},{version:"1.4",upgrader:function(b){return b}},{version:"2.0Beta",upgrader:function(b){return b}},{version:"2.0",upgrader:function(b){return b}},{version:"2.0.1",upgrader:function(b){return b}},
{version:"2.1",upgrader:function(b){for(var a=null,c=0;c<b.charts.length;c++)a=b.charts[c],a.webMapLayerId="";return b}},{version:"2.2",upgrader:function(b){return b}},{version:"2.3",upgrader:function(b){return b}},{version:"2.4",upgrader:function(b){return b}},{version:"2.5",upgrader:function(b){for(var a=null,c=0;c<b.charts.length;c++)a=b.charts[c],a.types=[],a.column&&a.types.push({type:"column",display:{colors:a.column.colors,showLegend:!1,showHorizontalAxis:a.column.horizontalAxis,showVerticalAxis:a.column.verticalAxis}}),
a.pie&&a.types.push({type:"pie",display:{colors:a.pie.colors,showLegend:!1,showDataLabel:a.pie.label}}),a.bar&&a.types.push({type:"bar",display:{colors:a.bar.colors,showLegend:!1,showHorizontalAxis:a.bar.horizontalAxis,showVerticalAxis:a.bar.verticalAxis}}),a.line&&a.types.push({type:"line",display:{colors:a.line.colors,showLegend:!1,showHorizontalAxis:a.line.horizontalAxis,showVerticalAxis:a.line.verticalAxis}});return b}},{version:"2.6",upgrader:function(b){for(var a=null,c=0;c<b.charts.length;c++)a=
b.charts[c],a.sortOrder={isLabelAxis:!0,isAsc:"asc"===a.sortOrder},"feature"===a.mode&&(a.sortOrder.field=a.labelField);return b}}]}e.prototype=new k;return e.prototype.constructor=e});