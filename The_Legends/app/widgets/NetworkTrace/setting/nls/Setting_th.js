// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"dijit/_editor/nls/commands":{bold:"\u0e15\u0e31\u0e27\u0e2b\u0e19\u0e32",copy:"\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01",cut:"\u0e15\u0e31\u0e14","delete":"\u0e25\u0e1a",indent:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e01\u0e32\u0e23\u0e40\u0e22\u0e37\u0e49\u0e2d\u0e07",insertHorizontalRule:"\u0e44\u0e21\u0e49\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14\u0e41\u0e19\u0e27\u0e19\u0e2d\u0e19",insertOrderedList:"\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e40\u0e25\u0e02",insertUnorderedList:"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e22\u0e48\u0e2d\u0e22",
italic:"\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e35\u0e22\u0e07",justifyCenter:"\u0e08\u0e31\u0e14\u0e41\u0e19\u0e27\u0e01\u0e36\u0e48\u0e07\u0e01\u0e25\u0e32\u0e07",justifyFull:"\u0e0a\u0e34\u0e14\u0e02\u0e2d\u0e1a",justifyLeft:"\u0e08\u0e31\u0e14\u0e0a\u0e34\u0e14\u0e0b\u0e49\u0e32\u0e22",justifyRight:"\u0e08\u0e31\u0e14\u0e0a\u0e34\u0e14\u0e02\u0e27\u0e32",outdent:"\u0e25\u0e14\u0e01\u0e32\u0e23\u0e40\u0e22\u0e37\u0e49\u0e2d\u0e07",paste:"\u0e27\u0e32\u0e07",redo:"\u0e17\u0e33\u0e0b\u0e49\u0e33",removeFormat:"\u0e25\u0e1a\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e2d\u0e2d\u0e01",
selectAll:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",strikethrough:"\u0e02\u0e35\u0e14\u0e17\u0e31\u0e1a",subscript:"\u0e15\u0e31\u0e27\u0e2b\u0e49\u0e2d\u0e22",superscript:"\u0e15\u0e31\u0e27\u0e22\u0e01",underline:"\u0e02\u0e35\u0e14\u0e40\u0e2a\u0e49\u0e19\u0e43\u0e15\u0e49",undo:"\u0e40\u0e25\u0e34\u0e01\u0e17\u0e33",unlink:"\u0e25\u0e1a\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e2d\u0e2d\u0e01",createLink:"\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e25\u0e34\u0e07\u0e01\u0e4c",toggleDir:"\u0e2a\u0e25\u0e31\u0e1a\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07",
insertImage:"\u0e41\u0e17\u0e23\u0e01\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e",insertTable:"\u0e41\u0e17\u0e23\u0e01/\u0e41\u0e01\u0e49\u0e44\u0e02\u0e15\u0e32\u0e23\u0e32\u0e07",toggleTableBorder:"\u0e2a\u0e25\u0e31\u0e1a\u0e40\u0e2a\u0e49\u0e19\u0e02\u0e2d\u0e1a\u0e15\u0e32\u0e23\u0e32\u0e07",deleteTable:"\u0e25\u0e1a\u0e15\u0e32\u0e23\u0e32\u0e07",tableProp:"\u0e04\u0e38\u0e13\u0e2a\u0e21\u0e1a\u0e31\u0e15\u0e34\u0e15\u0e32\u0e23\u0e32\u0e07",htmlToggle:"\u0e0b\u0e2d\u0e23\u0e4c\u0e2a HTML",foreColor:"\u0e2a\u0e35\u0e1e\u0e37\u0e49\u0e19\u0e2b\u0e19\u0e49\u0e32",
hiliteColor:"\u0e2a\u0e35\u0e1e\u0e37\u0e49\u0e19\u0e2b\u0e25\u0e31\u0e07",plainFormatBlock:"\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32",formatBlock:"\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32",fontSize:"\u0e02\u0e19\u0e32\u0e14\u0e1f\u0e2d\u0e19\u0e15\u0e4c",fontName:"\u0e0a\u0e37\u0e48\u0e2d\u0e1f\u0e2d\u0e19\u0e15\u0e4c",tabIndent:"\u0e40\u0e22\u0e37\u0e49\u0e2d\u0e07\u0e41\u0e17\u0e47\u0e1a",fullScreen:"\u0e2a\u0e25\u0e31\u0e1a\u0e08\u0e2d\u0e20\u0e32\u0e1e\u0e41\u0e1a\u0e1a\u0e40\u0e15\u0e47\u0e21",
viewSource:"\u0e14\u0e39\u0e0b\u0e2d\u0e23\u0e4c\u0e2a HTML",print:"\u0e1e\u0e34\u0e21\u0e1e\u0e4c",newPage:"\u0e2b\u0e19\u0e49\u0e32\u0e43\u0e2b\u0e21\u0e48",systemShortcut:'\u0e41\u0e2d\u0e47\u0e01\u0e0a\u0e31\u0e19 "${0}" \u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e40\u0e1a\u0e23\u0e32\u0e27\u0e4c\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e41\u0e1b\u0e49\u0e19\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e25\u0e31\u0e14 \u0e43\u0e0a\u0e49 ${1}',
ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"\u0e02\u0e19\u0e32\u0e14",fontName:"\u0e1f\u0e2d\u0e19\u0e15\u0e4c",formatBlock:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a",serif:"serif","sans-serif":"sans-serif",monospace:"monospace",cursive:"cursive",fantasy:"fantasy",noFormat:"\u0e44\u0e21\u0e48\u0e21\u0e35",p:"\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32",h1:"\u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e31\u0e27",h2:"\u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e31\u0e27\u0e22\u0e48\u0e2d\u0e22",
h3:"\u0e2a\u0e48\u0e27\u0e19\u0e22\u0e48\u0e2d\u0e22\u0e02\u0e2d\u0e07\u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e31\u0e27\u0e22\u0e48\u0e2d\u0e22",pre:"\u0e01\u0e32\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32",1:"xx-small",2:"x-small",3:"small",4:"medium",5:"large",6:"x-large",7:"xx-large",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"\u0e41\u0e2a\u0e14\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",_localized:{}},
"dojox/editor/plugins/nls/FindReplace":{findLabel:"\u0e04\u0e49\u0e19\u0e2b\u0e32:",findTooltip:"\u0e1b\u0e49\u0e2d\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e32",replaceLabel:"\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e14\u0e49\u0e27\u0e22:",replaceTooltip:"\u0e1b\u0e49\u0e2d\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e14\u0e49\u0e27\u0e22",findReplace:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e41\u0e25\u0e30\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48",
matchCase:"\u0e15\u0e23\u0e07\u0e15\u0e32\u0e21\u0e15\u0e31\u0e27\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e43\u0e2b\u0e0d\u0e48\u0e40\u0e25\u0e47\u0e01",matchCaseTooltip:"\u0e15\u0e23\u0e07\u0e15\u0e32\u0e21\u0e15\u0e31\u0e27\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e43\u0e2b\u0e0d\u0e48\u0e40\u0e25\u0e47\u0e01",backwards:"\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a",backwardsTooltip:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e31\u0e1a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e32\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",
replaceAllButton:"\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",replaceAllButtonTooltip:"\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",findButton:"\u0e04\u0e49\u0e19\u0e2b\u0e32",findButtonTooltip:"\u0e2b\u0e32\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",replaceButton:"\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48",replaceButtonTooltip:"\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",
replaceDialogText:"\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48 ${0} \u0e17\u0e35\u0e48\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19",eofDialogText:"\u0e01\u0e32\u0e23\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14 ${0}",eofDialogTextFind:"\u0e2b\u0e32\u0e1e\u0e1a",eofDialogTextReplace:"\u0e16\u0e39\u0e01\u0e41\u0e17\u0e19\u0e17\u0e35\u0e48",_localized:{}},"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"\u0e27\u0e32\u0e07\u0e08\u0e32\u0e01 Word",instructions:"\u0e27\u0e32\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e08\u0e32\u0e01 Word \u0e25\u0e07\u0e43\u0e19\u0e01\u0e25\u0e48\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e02\u0e49\u0e32\u0e07\u0e25\u0e48\u0e32\u0e07 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e04\u0e38\u0e13\u0e1e\u0e2d\u0e43\u0e08\u0e01\u0e31\u0e1a\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e17\u0e35\u0e48\u0e41\u0e17\u0e23\u0e01\u0e41\u0e25\u0e49\u0e27\u0e43\u0e2b\u0e49\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 \u0e27\u0e32\u0e07 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e07\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e43\u0e2b\u0e49\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 \u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",
_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"\u0e41\u0e17\u0e23\u0e01\u0e08\u0e38\u0e14\u0e22\u0e36\u0e14",title:"\u0e04\u0e38\u0e13\u0e2a\u0e21\u0e1a\u0e31\u0e15\u0e34\u0e08\u0e38\u0e14\u0e22\u0e36\u0e14",anchor:"\u0e0a\u0e37\u0e48\u0e2d:",text:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22:",set:"\u0e40\u0e0b\u0e47\u0e15",cancel:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e04\u0e33\u0e1e\u0e39\u0e14",
_localized:{}},"widgets/NetworkTrace/setting/nls/strings":{taskUrl:"\u0e07\u0e32\u0e19 URL",setTask:"\u0e15\u0e31\u0e49\u0e07",setTaskPopupTitle:"\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e07\u0e32\u0e19",validate:"\u0e15\u0e31\u0e49\u0e07",inValidGPService:"\u0e42\u0e1b\u0e23\u0e14\u0e1b\u0e49\u0e2d\u0e19\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e32\u0e07\u0e20\u0e39\u0e21\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49",
noOutputParameterWithGeometryType:"\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e32\u0e07\u0e20\u0e39\u0e21\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c \u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17\u0e17\u0e35\u0e48\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e23\u0e39\u0e1b\u0e17\u0e23\u0e07\u0e40\u0e23\u0e02\u0e32\u0e04\u0e13\u0e34\u0e15\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14 \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e32\u0e07\u0e20\u0e39\u0e21\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e2d\u0e37\u0e48\u0e19",
invalidOutputGeometry:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e23\u0e39\u0e1b\u0e17\u0e23\u0e07\u0e40\u0e23\u0e02\u0e32\u0e04\u0e13\u0e34\u0e15\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17\u0e02\u0e2d\u0e07\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e32\u0e07\u0e20\u0e39\u0e21\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e25\u0e37\u0e2d\u0e01 \u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e07\u0e32\u0e19\u0e23\u0e48\u0e27\u0e21\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04\u0e44\u0e14\u0e49 \u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a\u0e1c\u0e25\u0e02\u0e2d\u0e07\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e32\u0e07\u0e20\u0e39\u0e21\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e44\u0e14\u0e49",
GPFeatureRecordSetLayerERR:"\u0e42\u0e1b\u0e23\u0e14\u0e1b\u0e49\u0e2d\u0e19\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e32\u0e07\u0e20\u0e39\u0e21\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 'GPFeatureRecordSetLayer' \u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19",invalidInputParameters:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17\u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e27\u0e48\u0e32 1 \u0e2b\u0e23\u0e37\u0e2d\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 3 \u0e42\u0e1b\u0e23\u0e14\u0e1b\u0e49\u0e2d\u0e19\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e32\u0e07\u0e20\u0e39\u0e21\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49",
projectSetting:{title:"\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04",note:"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e15\u0e38: \u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32\u0e41\u0e25\u0e49\u0e27 \u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e08\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04\u0e44\u0e27\u0e49\u0e43\u0e19\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e27\u0e47\u0e1a\u0e41\u0e21\u0e1b\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23 \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e44\u0e1f\u0e14\u0e31\u0e1a\u0e41\u0e25\u0e30\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17\u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c \u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e08\u0e31\u0e14\u0e40\u0e01\u0e47\u0e1a\u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17\u0e2d\u0e37\u0e48\u0e19 \u0e46 \u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21 \u201c\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17\u201d \u0e43\u0e19\u0e41\u0e17\u0e47\u0e1a \u201c\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17/\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17\u201d",
projectPolygonLayer:"\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e42\u0e1e\u0e25\u0e35\u0e01\u0e2d\u0e19\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04",outputParameterName:"\u0e0a\u0e37\u0e48\u0e2d\u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17",projectPointLayer:"\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e38\u0e14\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04",selectLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01",
polygonLayerHelp:"\x3cp\x3e\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e41\u0e2a\u0e14\u0e07\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e42\u0e1e\u0e25\u0e35\u0e01\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e15\u0e23\u0e07\u0e15\u0e32\u0e21\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e19\u0e35\u0e49:\x3cbr/\x3e\x3cul\x3e\x3cli\x3e\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e19\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02\u0e17\u0e35\u0e48\u0e0a\u0e37\u0e48\u0e2d Create, Delete \u0e41\u0e25\u0e30 Update\x3c/li\x3e\x3cli\x3e\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35 2 \u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e23\u0e07\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\u0e0a\u0e37\u0e48\u0e2d (\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 String)\x3c/li\x3e\x3cli\x3eglobalid (\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 GlobalID)\x3c/li\x3e\x3c/ul\x3e\x3c/ul\x3e\x3cp/\x3e",
outputParameterHelp:"\x3cp\x3e\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e42\u0e1e\u0e25\u0e35\u0e01\u0e2d\u0e19\u0e08\u0e32\u0e01 URL \u0e07\u0e32\u0e19\u0e08\u0e30\u0e1b\u0e23\u0e32\u0e01\u0e0f\u0e02\u0e36\u0e49\u0e19\x3cp/\x3e",pointLayerHelp:"\x3cp\x3e\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e41\u0e2a\u0e14\u0e07\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e38\u0e14\u0e17\u0e35\u0e48\u0e15\u0e23\u0e07\u0e15\u0e32\u0e21\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e19\u0e35\u0e49: \x3cbr/\x3e\x3cul\x3e\x3cli\x3e\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e19\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02\u0e17\u0e35\u0e48\u0e0a\u0e37\u0e48\u0e2d Create, Delete \u0e41\u0e25\u0e30 Update\x3c/li\x3e\x3cli\x3e\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35 2 \u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e23\u0e07\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14:\x3c/li\x3e\x3cul\x3e\x3cli\x3einputtype (\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 String)\x3c/li\x3e\x3cli\x3eprojectid (\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 GUID)\x3c/li\x3e\x3c/ul\x3e\x3c/ul\x3e\x3cp/\x3e"},
inputOutputTab:{flag:"\u0e18\u0e07",barrier:"\u0e2d\u0e38\u0e1b\u0e2a\u0e23\u0e23\u0e04",skip:"\u0e02\u0e49\u0e32\u0e21\u0e44\u0e1b",title:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e33\u0e40\u0e02\u0e49\u0e32",inputTooltip:"\u0e04\u0e33\u0e41\u0e19\u0e30\u0e19\u0e33\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d",typeText:"\u0e0a\u0e19\u0e34\u0e14",symbol:"\u0e2a\u0e31\u0e0d\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c",summaryEditorText:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e23\u0e38\u0e1b",
summaryTextTitle:"\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e17\u0e35\u0e48\u0e08\u0e30\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e41\u0e17\u0e47\u0e1a\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17"},summaryTab:{title:"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",summaryFieldsetText:"\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e2a\u0e23\u0e38\u0e1b",inputOutput:"\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17 / \u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17",
field:"\u0e1f\u0e34\u0e25\u0e14\u0e4c",operator:"\u0e1c\u0e39\u0e49\u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e01\u0e32\u0e23",inputOperatorCountOption:"\u0e19\u0e31\u0e1a",outputOperatorCountOption:"\u0e19\u0e31\u0e1a",outputOperatorSkipCountOption:"\u0e02\u0e49\u0e32\u0e21\u0e01\u0e32\u0e23\u0e19\u0e31\u0e1a",fieldOperatorSumOption:"\u0e23\u0e27\u0e21",fieldOperatorMinOption:"\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14",fieldOperatorMaxOption:"\u0e21\u0e32\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
fieldOperatorMeanOption:"\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22",expressionAddButtonText:"\u0e40\u0e1e\u0e34\u0e48\u0e21",expressionVerifyButtonText:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",summaryEditorText:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e23\u0e38\u0e1b",zoomText:"\u0e0b\u0e39\u0e21\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34\u0e2b\u0e25\u0e31\u0e07\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21",summarSettingTooltipText:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e08\u0e33\u0e19\u0e27\u0e19\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17/\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17",
symbol:"\u0e2a\u0e31\u0e0d\u0e25\u0e31\u0e01\u0e29\u0e13\u0e4c",outputParametersText:"\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17\u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c",skipText:"\u0e02\u0e49\u0e32\u0e21\u0e44\u0e14\u0e49",visibilityText:"\u0e21\u0e2d\u0e07\u0e40\u0e2b\u0e47\u0e19",exportToCsvText:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1f\u0e25\u0e4c CSV",settitngstext:"\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32",saveToLayerText:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",
inputLabel:"\u0e1b\u0e49\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d",inputTooltip:"\u0e04\u0e33\u0e41\u0e19\u0e30\u0e19\u0e33\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d",outputDisplay:"\u0e41\u0e2a\u0e14\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",addFieldTitle:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1f\u0e34\u0e25\u0e14\u0e4c",setScale:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e40\u0e01\u0e25",enterDisplayText:"\u0e1b\u0e49\u0e2d\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e17\u0e35\u0e48\u0e41\u0e2a\u0e14\u0e07",
saveToLayerHelp:"\x3cp\x3e\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e41\u0e2a\u0e14\u0e07\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e15\u0e23\u0e07\u0e15\u0e32\u0e21\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e19\u0e35\u0e49:\x3cbr/\x3e\x3cul\x3e\x3cli\x3e\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e19\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02\u0e17\u0e35\u0e48\u0e0a\u0e37\u0e48\u0e2d \u201cCreate\u201d, \u201cDelete\u201d \u0e41\u0e25\u0e30 \u201cUpdate\u201d\x3c/li\x3e\x3cli\x3e\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e19\u0e35\u0e49:\x3c/li\x3e\x3cul\x3e\x3cli\x3eparametername (\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1f\u0e34\u0e25\u0e14\u0e4c String)\x3c/li\x3e\x3cli\x3eprojectid (\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1f\u0e34\u0e25\u0e14\u0e4c Guid)\x3c/li\x3e\x3c/ul\x3e\x3c/ul\x3e\x3cp/\x3e",
exportToCsvDisplayText:"CSV",summaryTextTitle:"\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e23\u0e38\u0e1b\u0e17\u0e35\u0e48\u0e08\u0e30\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e1a\u0e19\u0e41\u0e17\u0e47\u0e1a\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17",addSummaryItemsTitle:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e38\u0e1b"},validationErrorMessage:{webMapError:"\u0e44\u0e21\u0e48\u0e21\u0e35\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e41\u0e21\u0e1b \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e40\u0e27\u0e47\u0e1a\u0e41\u0e21\u0e1b\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",
inputTypeFlagGreaterThanError:"\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e35\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e18\u0e07\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e44\u0e14\u0e49",inputTypeFlagLessThanError:"\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e18\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",
inputTypeBarrierErr:"\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e35\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2d\u0e38\u0e1b\u0e2a\u0e23\u0e23\u0e04\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e44\u0e14\u0e49",inputTypeSkipErr:"\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e35\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e17\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e49\u0e32\u0e21\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e44\u0e14\u0e49",
displayTextForButtonError:"\u0e15\u0e49\u0e2d\u0e07\u0e44\u0e21\u0e48\u0e40\u0e27\u0e49\u0e19\u0e27\u0e48\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e17\u0e35\u0e48\u0e41\u0e2a\u0e14\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1b\u0e38\u0e48\u0e21 '\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e0a\u0e49'",UnableToLoadGeoprocessError:"\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e42\u0e2b\u0e25\u0e14\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e34\u0e2a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e17\u0e32\u0e07\u0e20\u0e39\u0e21\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e44\u0e14\u0e49",
invalidSummaryExpression:"\u0e19\u0e34\u0e1e\u0e08\u0e19\u0e4c\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",validSummaryExpression:"\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 !",invalidProjectSettings:"\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e04\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\x3cbr/\x3e \u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e19 '${projectSetting}'"},
hintText:{labelTextHint:"\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a: \u0e23\u0e30\u0e1a\u0e38\u0e1b\u0e49\u0e32\u0e22\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e41\u0e1c\u0e07\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e02\u0e2d\u0e07\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17\u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c",displayTextHint:"\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a: \u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49\u0e08\u0e30\u0e1b\u0e23\u0e32\u0e01\u0e0f\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e41\u0e1c\u0e07\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17\u0e1e\u0e32\u0e23\u0e32\u0e21\u0e34\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e19\u0e35\u0e49",
inputTextHint:"\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a: \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e19\u0e34\u0e1e\u0e08\u0e19\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e27\u0e49\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07 \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e1b\u0e38\u0e48\u0e21 \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e38\u0e1b",expressionHint:"\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a: \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 \u0e41\u0e25\u0e49\u0e27\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e19\u0e34\u0e1e\u0e08\u0e19\u0e4c"},
_localized:{}}});