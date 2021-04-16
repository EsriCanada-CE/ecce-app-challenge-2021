// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"dijit/_editor/nls/commands":{bold:"\u7c97\u9ad4",copy:"\u8907\u88fd",cut:"\u526a\u4e0b","delete":"\u522a\u9664",indent:"\u7e2e\u6392",insertHorizontalRule:"\u6c34\u5e73\u5c3a\u898f",insertOrderedList:"\u7de8\u865f\u6e05\u55ae",insertUnorderedList:"\u9805\u76ee\u7b26\u865f\u6e05\u55ae",italic:"\u659c\u9ad4",justifyCenter:"\u7f6e\u4e2d\u5c0d\u9f4a",justifyFull:"\u5c0d\u9f4a",justifyLeft:"\u9760\u5de6\u5c0d\u9f4a",justifyRight:"\u9760\u53f3\u5c0d\u9f4a",outdent:"\u51f8\u6392",paste:"\u8cbc\u4e0a",
redo:"\u91cd\u505a",removeFormat:"\u79fb\u9664\u683c\u5f0f",selectAll:"\u5168\u9078",strikethrough:"\u522a\u9664\u7dda",subscript:"\u4e0b\u6a19",superscript:"\u4e0a\u6a19",underline:"\u5e95\u7dda",undo:"\u5fa9\u539f",unlink:"\u79fb\u9664\u93c8\u7d50",createLink:"\u5efa\u7acb\u93c8\u7d50",toggleDir:"\u5207\u63db\u65b9\u5411",insertImage:"\u63d2\u5165\u5f71\u50cf",insertTable:"\u63d2\u5165/\u7de8\u8f2f\u8868\u683c",toggleTableBorder:"\u5207\u63db\u8868\u683c\u908a\u6846",deleteTable:"\u522a\u9664\u8868\u683c",
tableProp:"\u8868\u683c\u5167\u5bb9",htmlToggle:"HTML \u539f\u59cb\u6a94",foreColor:"\u524d\u666f\u984f\u8272",hiliteColor:"\u80cc\u666f\u984f\u8272",plainFormatBlock:"\u6bb5\u843d\u6a23\u5f0f",formatBlock:"\u6bb5\u843d\u6a23\u5f0f",fontSize:"\u5b57\u578b\u5927\u5c0f",fontName:"\u5b57\u578b\u540d\u7a31",tabIndent:"\u6a19\u7c64\u7e2e\u6392",fullScreen:"\u5207\u63db\u5168\u87a2\u5e55",viewSource:"\u6aa2\u8996 HTML \u539f\u59cb\u6a94",print:"\u5217\u5370",newPage:"\u65b0\u9801\u9762",systemShortcut:'"${0}" \u52d5\u4f5c\u5728\u60a8\u7684\u700f\u89bd\u5668\u4e2d\uff0c\u53ea\u80fd\u4f7f\u7528\u9375\u76e4\u5feb\u901f\u9375\u3002\u8acb\u4f7f\u7528 ${1}\u3002',
ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"\u5927\u5c0f",fontName:"\u5b57\u578b",formatBlock:"\u683c\u5f0f",serif:"\u65b0\u7d30\u660e\u9ad4","sans-serif":"\u65b0\u7d30\u660e\u9ad4",monospace:"\u7b49\u5bec",cursive:"Cursive",fantasy:"Fantasy",noFormat:"\u7121",p:"\u6bb5\u843d",h1:"\u6a19\u984c",h2:"\u5b50\u6a19\u984c",h3:"\u6b21\u5b50\u6a19\u984c",pre:"\u9810\u5148\u683c\u5f0f\u5316",1:"\u6700\u5c0f",2:"\u8f03\u5c0f",3:"\u5c0f",4:"\u4e2d",5:"\u5927",
6:"\u8f03\u5927",7:"\u6700\u5927",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"\u9810\u89bd",_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"\u5c0b\u627e\uff1a",findTooltip:"\u8f38\u5165\u8981\u5c0b\u627e\u7684\u6587\u5b57",replaceLabel:"\u53d6\u4ee3\u70ba\uff1a",replaceTooltip:"\u8f38\u5165\u8981\u53d6\u4ee3\u7684\u6587\u5b57",findReplace:"\u5c0b\u627e/\u53d6\u4ee3",matchCase:"\u5927\u5c0f\u5beb\u76f8\u7b26",matchCaseTooltip:"\u5927\u5c0f\u5beb\u76f8\u7b26",backwards:"\u5411\u5f8c",
backwardsTooltip:"\u5f80\u56de\u641c\u5c0b\u6587\u5b57",replaceAllButton:"\u5168\u90e8\u53d6\u4ee3",replaceAllButtonTooltip:"\u53d6\u4ee3\u6240\u6709\u6587\u5b57",findButton:"\u5c0b\u627e",findButtonTooltip:"\u5c0b\u627e\u6587\u5b57",replaceButton:"\u53d6\u4ee3",replaceButtonTooltip:"\u53d6\u4ee3\u6587\u5b57",replaceDialogText:"\u53d6\u4ee3\u4e86 ${0} \u9805\u3002",eofDialogText:"\u524d\u6b21\u51fa\u73fe ${0}",eofDialogTextFind:"\u627e\u5230",eofDialogTextReplace:"\u5df2\u53d6\u4ee3",_localized:{}},
"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"\u5f9e Word \u8cbc\u4e0a",instructions:"\u5c07 Word \u4e2d\u7684\u5167\u5bb9\u8cbc\u5165\u4e0b\u65b9\u7684\u6587\u5b57\u6846\u3002\u5728\u6eff\u610f\u8981\u63d2\u5165\u7684\u5167\u5bb9\u4e4b\u5f8c\uff0c\u8acb\u6309\u8cbc\u4e0a\u6309\u9215\u3002\u82e5\u8981\u4e2d\u65b7\u63d2\u5165\u6587\u5b57\uff0c\u8acb\u6309\u53d6\u6d88\u6309\u9215\u3002",_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"\u63d2\u5165\u9328\u9ede",title:"\u9328\u9ede\u5167\u5bb9",
anchor:"\u540d\u7a31\uff1a",text:"\u8aaa\u660e\uff1a",set:"\u8a2d\u5b9a",cancel:"\u53d6\u6d88",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u5340\u584a\u5f15\u6587",_localized:{}},"widgets/DataAggregation/setting/nls/strings":{locatorUrl:"\u5b9a\u4f4d\u5668 URL",set:"\u8a2d\u5b9a",locatorName:"\u5b9a\u4f4d\u5668\u540d\u7a31",locatorExample:"\u7bc4\u4f8b",countryCode:"\u570b\u78bc\u6216\u5730\u5340\u4ee3\u78bc",eg:"\u4f8b\u5982 ",countryCodeHint:"\u7559\u7a7a\u6b64\u503c\u6703\u641c\u5c0b\u6240\u6709\u570b\u5bb6\u548c\u5730\u5340",
minCandidateScore:"\u6700\u4f4e\u5019\u9078\u5206\u6578",minCandidateScoreHint:"\u7559\u7a7a\u6b64\u503c\u5c07\u4f7f\u7528\u6700\u4f4e\u5019\u9078\u5206\u6578 90",enableSingleField:"\u55ae\u4e00\u6b04\u4f4d\u9078\u9805",singleFieldHint:"\u5730\u5740\u8cc7\u6599\u5c07\u4f4d\u65bc\u55ae\u4e00\u6b04\u4f4d",enableMultiField:"\u591a\u500b\u6b04\u4f4d\u9078\u9805",multiFieldHint:"\u5730\u5740\u8cc7\u6599\u5c07\u4f4d\u65bc\u591a\u500b\u6b04\u4f4d",enableXYField:"X/Y \u6b04\u4f4d\u9078\u9805",xyFieldHint:"\u8cc7\u6599\u5c07\u5305\u542b X/Y \u5ea7\u6a19\u503c",
instructionGeocode:"\u65b0\u589e\u548c\u914d\u7f6e\u5b9a\u4f4d\u5668\u670d\u52d9\u3002",invalidUrlTip:"URL ${URL} \u7121\u6548\u6216\u4e0d\u53ef\u5b58\u53d6\u3002",geocodeTabLabel:"\u4f4d\u7f6e\u8a2d\u5b9a",lookupList:"\u8981\u8fa8\u8b58\u7684\u6b04\u4f4d\u540d\u7a31",isRecognized:"\u6703\u81ea\u52d5\u91dd\u5c0d\u6b64\u6b04\u4f4d\u8fa8\u8b58\u4e0b\u8868\u4e2d\u7684\u6b04\u4f4d\u540d\u7a31",needsEditablePointLayers:"Web \u5730\u5716\u81f3\u5c11\u5fc5\u9808\u5305\u542b\u4e00\u500b\u53ef\u7de8\u8f2f\u9ede\u5716\u5c64\u3002",
editpageAlias:"\u5225\u540d",configureFields:"\u914d\u7f6e\u5716\u5c64\u6b04\u4f4d",configureSingleFields:"\u914d\u7f6e\u55ae\u4e00\u5730\u5740\u6b04\u4f4d",configureMultiFields:"\u914d\u7f6e\u591a\u500b\u5730\u5740\u6b04\u4f4d",configureXYFields:"\u914d\u7f6e X/Y \u6b04\u4f4d",noFields:"\u4f7f\u7528\u7de8\u8f2f\u52d5\u4f5c\u4f86\u5b9a\u7fa9\u8981\u986f\u793a\u7684\u4e00\u6216\u591a\u500b\u6b04\u4f4d",display:"\u986f\u793a",duplicate:"\u5c0b\u627e\u91cd\u8907\u9805",duplicateTip:"\u5728\u6b64\u6b04\u4f4d\u4e2d\u641c\u5c0b\u4f86\u6e90\u6a94\u8207\u76ee\u6a19\u5716\u5c64\u4e4b\u9593\u7684\u76f8\u540c\u503c\u3002/n\u5982\u679c\u627e\u5230\u76f8\u540c\u7684\u7b26\u5408\u9805\uff0c\u5247\u4e0d\u6703\u5f9e\u6a94\u6848\u4e2d\u5c0b\u627e\u8a18\u9304\uff0c\u4e26\u6703\u5c07\u5176\u6a19\u8a18\u70ba\u91cd\u8907\u9805\u3002",
noSelectField:"\u8acb\u5148\u9078\u64c7\u5716\u5fb5\u5716\u5c64\u9078\u9805",newNamePlaceholder:"",xyFieldsLabelX:"X (\u7d93\u5ea6)",xyFieldsLabelY:"Y (\u7def\u5ea6)",xyFieldsX:"X",xyFieldsY:"Y",easting:"\u6771\u79fb",northing:"\u5317\u79fb",lon:"LON",lat:"LAT",layerOptionHint:"\u9078\u64c7\u8981\u5c07\u8cc7\u6599\u63d0\u4ea4\u5230\u7684\u5716\u5c64\u3002",layerFieldTitle:"\u76ee\u6a19\u5716\u5c64",tempSymbolHint:"\u9078\u64c7\u5c07\u7528\u4f86\u986f\u793a\u5716\u5fb5\u7684\u7b26\u865f\u3002",tempSymbolTitle:"\u986f\u793a\u7b26\u865f",
maxRecords:"\u8a18\u9304\u6578\u4e0a\u9650",maxRecordsHint:"\u8981\u5c0b\u627e\u7684\u8a18\u9304\u6578\u4e0a\u9650",searchRadius:"\u641c\u5c0b\u534a\u5f91",searchRadiusHint:"\u8981\u5f9e\u5716\u5c64\u641c\u5c0b\u91cd\u8907\u5716\u5fb5\u7684\u8ddd\u96e2",requiresInteger:"\u8f38\u5165\u6578\u503c\u3002",requiresInteger0100:"\u8f38\u5165\u4ecb\u65bc 0 \u5230 100 \u7684\u6578\u503c",requiresLocator:"\u81f3\u5c11\u65b0\u589e\u4e00\u500b\u6709\u6548\u5b9a\u4f4d\u5668\u3002",layerFields:"\u5716\u5c64\u8a2d\u5b9a",
layerFieldsHint:"\u5f9e\u5c07\u5c0d\u61c9\u5230\u4f86\u6e90\u6b04\u4f4d\u7684\u76ee\u6a19\u5716\u5c64\u4e2d\u6307\u5b9a\u6b04\u4f4d\u3002",locatorError:"\u5b9a\u4f4d\u5668\u7121\u6548\u6216\u7121\u6cd5\u5b58\u53d6\u3002",optionNotMatch:"\u8de8\u5b9a\u4f4d\u5668\u7684\u6b04\u4f4d\u9078\u9805\u4e0d\u4e00\u81f4\u3002 \u5bb9\u932f\u79fb\u8f49\u53ef\u80fd\u7121\u6cd5\u4f9d\u9810\u671f\u904b\u4f5c\u3002",targetLayerTabTitle:"\u76ee\u6a19\u5716\u5c64",locationSettingsTabTitle:"\u4f4d\u7f6e\u8a2d\u5b9a",
generalSettingsTabTitle:"\u4e00\u822c\u8a2d\u5b9a",addTargetLayersLabel:"\u65b0\u589e\u76ee\u6a19\u5716\u5c64",introductoryText:"\u5efa\u7acb widget \u7684\u6307\u793a\u5167\u5bb9",defaultStartPageInstructions:"\u6b64 widget \u5c07\u5354\u52a9\u8655\u7406\u6a94\u6848\u7684\u8cc7\u6599\uff0c\u4e26\u5c07\u8a72\u8cc7\u6599\u63d0\u4ea4\u5230\u5730\u5716\u7684\u9078\u5b9a\u5716\u5c64\u3002\x3cbr/\x3e \x3cbr/\x3e \u5fc5\u9808\u4ee5\u9017\u865f\u3001tab\u3001\u5206\u865f\u6216\u5782\u76f4\u8ef8\u9694\u6a94\u6848\u4e2d\u7684\u503c\u3002",
noTargetLayerConfiguredErrorMsg:"\u672a\u914d\u7f6e\u76ee\u6a19\u5716\u5c64",noFieldsForTargetLayer:"\u672a\u91dd\u5c0d\u76ee\u6a19\u5716\u5c64\u5b9a\u7fa9\u5716\u5c64\u8a2d\u5b9a",locationSettingsNotConfigured:"\u672a\u9069\u7576\u914d\u7f6e\u4f4d\u7f6e\u8a2d\u5b9a",_localized:{}}});