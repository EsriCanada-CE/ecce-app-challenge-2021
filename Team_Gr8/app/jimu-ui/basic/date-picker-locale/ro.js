System.register([],(function(e){return{execute:function(){e(function(e){var a={};function t(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(i,n,function(a){return e[a]}.bind(null,n));return i},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=995)}({3:function(e,a,t){"use strict";function i(e){return function(a,t){var i,n=t||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=n.width?String(n.width):r;i=e.formattingValues[o]||e.formattingValues[r]}else{var u=e.defaultWidth,m=n.width?String(n.width):e.defaultWidth;i=e.values[m]||e.values[u]}return i[e.argumentCallback?e.argumentCallback(a):a]}}t.d(a,"a",(function(){return i}))},4:function(e,a,t){"use strict";function i(e){return function(a,t){var i=String(a),n=t||{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=i.match(o);if(!u)return null;var m,d=u[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return m="[object Array]"===Object.prototype.toString.call(s)?function(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}(s,(function(e){return e.test(d)})):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}(s,(function(e){return e.test(d)})),m=e.valueCallback?e.valueCallback(m):m,{value:m=n.valueCallback?n.valueCallback(m):m,rest:i.slice(d.length)}}}t.d(a,"a",(function(){return i}))},5:function(e,a,t){"use strict";function i(e){return function(a){var t=a||{},i=t.width?String(t.width):e.defaultWidth;return e.formats[i]||e.formats[e.defaultWidth]}}t.d(a,"a",(function(){return i}))},8:function(e,a,t){"use strict";function i(e){return function(a,t){var i=String(a),n=t||{},r=i.match(e.matchPattern);if(!r)return null;var o=r[0],u=i.match(e.parsePattern);if(!u)return null;var m=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:m=n.valueCallback?n.valueCallback(m):m,rest:i.slice(o.length)}}}t.d(a,"a",(function(){return i}))},995:function(e,a,t){"use strict";t.r(a);var i={lessThanXSeconds:{one:"mai pu??in de o secund??",other:"mai pu??in de {{count}} secunde"},xSeconds:{one:"1 secund??",other:"{{count}} secunde"},halfAMinute:"jum??tate de minut",lessThanXMinutes:{one:"mai pu??in de un minut",other:"mai pu??in de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 or??",other:"circa {{count}} ore"},xHours:{one:"1 or??",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXWeeks:{one:"circa o s??pt??m??n??",other:"circa {{count}} s??pt??m??ni"},xWeeks:{one:"1 s??pt??m??n??",other:"{{count}} s??pt??m??ni"},aboutXMonths:{one:"circa 1 lun??",other:"circa {{count}} luni"},xMonths:{one:"1 lun??",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};var n=t(5),r={date:Object(n.a)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:Object(n.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(n.a)({formats:{full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"eeee 'trecut?? la' p",yesterday:"'ieri la' p",today:"'ast??zi la' p",tomorrow:"'m??ine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"};var u=t(3);var m={ordinalNumber:function(e){var a=Number(e);return String(a)},era:Object(u.a)({values:{narrow:["??","D"],abbreviated:["??.d.C.","D.C."],wide:["??nainte de Cristos","Dup?? Cristos"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(u.a)({values:{narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},defaultWidth:"wide"}),day:Object(u.a)({values:{narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","s??"],abbreviated:["dum","lun","mar","mie","joi","vin","s??m"],wide:["duminic??","luni","mar??i","miercuri","joi","vineri","s??mb??t??"]},defaultWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop??ii",noon:"amiaz??",morning:"diminea????",afternoon:"dup??-amiaz??",evening:"sear??",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop??ii",noon:"amiaz??",morning:"diminea????",afternoon:"dup??-amiaz??",evening:"sear??",night:"noapte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiaz??",morning:"diminea????",afternoon:"dup??-amiaz??",evening:"sear??",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop??ii",noon:"amiaz??",morning:"diminea????",afternoon:"dup??-amiaz??",evening:"sear??",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop??ii",noon:"amiaz??",morning:"diminea????",afternoon:"dup??-amiaz??",evening:"sear??",night:"noapte"}},defaultFormattingWidth:"wide"})},d=t(8),s=t(4),l={code:"ro",formatDistance:function(e,a,t){var n;return t=t||{},n="string"==typeof i[e]?i[e]:1===a?i[e].one:i[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"??n "+n:n+" ??n urm??":n},formatLong:r,formatRelative:function(e,a,t,i){return o[e]},localize:m,match:{ordinalNumber:Object(d.a)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(s.a)({matchPatterns:{narrow:/^(??|D)/i,abbreviated:/^(??\.?\s?d\.?\s?C\.?|??\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(??nainte de Cristos|??naintea erei noastre|Dup?? Cristos|Era noastr??)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^??C/i,/^DC/i],wide:[/^(??nainte de Cristos|??naintea erei noastre)/i,/^(Dup?? Cristos|Era noastr??)/i]},defaultParseWidth:"any"}),quarter:Object(s.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(s.a)({matchPatterns:{narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(s.a)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|s??)/i,wide:/^(duminica|luni|mar??i|miercuri|joi|vineri|s??mb??t??)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:Object(s.a)({matchPatterns:{narrow:/^(a|p|mn|a|(diminea??a|dup??-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nop??ii|amiaza|(diminea??a|dup??-amiaza|seara|noaptea))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/diminea??a/i,afternoon:/dup??-amiaza/i,evening:/seara/i,night:/noaptea/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};a.default=l}}))}}}));