
import { createAreaOfInterest } from "../../../js/card.js"
import { uuid4 } from "../../../js/uuid4.js" // Unique IDs
import { fields, fieldsDesert, point_info, BUS_stops_Popup, EMH_Popup, polyline_info,
    polygon_info, popupTemplate_info, addFeaturesData, updateFeaturesData,
     deleteFeaturesData, point_stylings,
   highlightoptions, busRoute, addressPoints, superMarkets } from "../../../js/basis.js" // Importing our fields schema


require(["esri/Map",  
  "esri/views/SceneView", 
  "esri/layers/GraphicsLayer", 
  "esri/Graphic",
  "esri/layers/FeatureLayer",
  "esri/layers/SceneLayer", // We use this for large amount of data in a scene
  // Layerslists
  "esri/widgets/LayerList",
], 
  function(Map, 
    SceneView, 
    GraphicsLayer, 
    Graphic,
    FeatureLayer,
    SceneLayer,
    LayerList,
  ) {
    
    var map = new Map({
      basemap: "topo"
    });

    var view = new SceneView({
      container: "viewDiv",
      map: map,

      camera: {
        // autocasts as new Camera()
        position: {
          // autocasts as new Point()
          //around huntsville
          x: -79.09393876055206, //-0.17746710975334712,
          y: 43.07435126241263, //51.44543992422466,
          z: 1266.7049653716385
        },
        heading: 0.34445102566290225,
        tilt: 72.95536300536367
      }
    });

    /*********************
     * Add graphics layer
     *********************/

    var pointsGraphicsLayer = new GraphicsLayer({
      title:"Grocery Shop Locations"
    });

    var lineGraphicsLayer = new GraphicsLayer();
    lineGraphicsLayer.listMode = "hide"

    var foodDesertZone = new GraphicsLayer({
      title : "Food Desert Zone"
    }); // A Polygon For the Desert ZOne
    foodDesertZone.listMode = "hide"
    
    map.add(foodDesertZone)
    map.add(pointsGraphicsLayer);
    map.add(lineGraphicsLayer);
    


    ///////////////////////////////////////////////////////////////////////////////////////////
    // LOADING DATA FROM LOCAL STORAGE
    // Creating our Card
    function areasOfInterest(data, cluster=null, cardType, coordinates=null){ // set it automatically to food deserts
        let cardPanel = document.getElementById(cardType) // We have the card containers
        let newCard = createAreaOfInterest(data, cluster)
        newCard.onclick = function(){
            view.center = coordinates
            view.zoom = 16
            lineGraphicsLayer.removeAll() // We clear the layer and add other graphics
            addLineGraphic(coordinates)
        }
        cardPanel.append(newCard)
    }

    function loadDataFromStorage(){ // Note this is for one area
        let clustersInfo = localStorage.getItem("Food Desert Area 1"); // remember to convert format
        clustersInfo = JSON.parse(clustersInfo)
        
        for (let i = 0; i < clustersInfo["values"].length; i++){ // Generating the cards for clusters

            let clusterName = `Cluster Location - ${parseInt(clustersInfo["values"][i]) + 1}`
            // let clusterCenterPoint = turf.toWgs84(clustersInfo["centres"][i]) // change to WGS84
            const coordinates = clustersInfo["centers_fixed"][i]
            // clustersInfo["centers_fixed"].push(coordinates)
            
            addPointGraphic(coordinates, i+1) // Adding grocery store
            areasOfInterest(clusterName, "clustered", "clusterLocations", coordinates)
        }

        
        if (localStorage.getItem("Zone")){
          let zoneData = localStorage.getItem("Zone")
          zoneData = JSON.parse(zoneData)
          addPolygonGraphic(zoneData)//Adding the Zone Information
        }
        
        

        return clustersInfo
        // localStorage.removeItem("lastname");
    }
    loadDataFromStorage()

//////////////////////////////////////////////////////////////////////////////////////////


    /*************************
     * Add a 3D point graphic
     *************************/

    function addPointGraphic(coordinates, index){
        var point = {
                type: "point", // autocasts as new Point()
                x: coordinates[0],
                y: coordinates[1],
                z:0   
        }

        let markerSymbol ={
            type: "picture-marker",  // autocasts as new SimpleMarkerSymbol()
            // color: "#0E91E3",
            url: "../map_images/grocery_store.png",
            width: "100px",
            height: "100px"
        }
        let pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol,
            popupTemplate: { 
              title: `Proposed Grocery Shop Location - ${index}`   
            }
          });
      
        pointsGraphicsLayer.add(pointGraphic);
    }

    function addLineGraphic(coordinates){
        let polyline = {
            type: "polyline", // autocasts as new Polyline()
            paths: [[coordinates[0], coordinates[1], 0], [coordinates[0], coordinates[1], 300]]
          };
      
          let lineSymbol = {
            type: "simple-line", // autocasts as SimpleLineSymbol()
            color: "red",
            width: 4
          };
      
          let polylineGraphic = new Graphic({
            geometry: polyline,
            symbol: lineSymbol

          });
      
          lineGraphicsLayer.add(polylineGraphic);
    }

    function addPolygonGraphic(zoneData){

      zoneData.geometry.type = "polygon"
      
      zoneData.symbol = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: [192,192,192, 0.7],
        outline: {
          // autocasts as new SimpleLineSymbol()
          color: "red",
          style:"dash",
          width: 3
        }
      };

      zoneData.popupTemplate = { 
        title: "{Name}",
        outFields:["*"],
        content: [{
              type: "fields",
              fieldInfos: [{
                    fieldName: "Description", // The field for access the date from attributes
                    label: "Description"
                  },
              ]
        }]
      }
      var polygonGraphic = new Graphic(zoneData);
      
      foodDesertZone.add(polygonGraphic)
      
    }
   

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //Filter Feature Layer
      //https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-support-FeatureFilter.html

      // Adding the Layers List
      var layerList = new LayerList({
        view: view,
        container: document.getElementById("toggle_layers"), // Edit widget is defined in the index.html
      }); 

  ///////////////////////////////////////////////////////////////////////////

  /********************
       * Loading Predefined ArcGIS Online Layers
       * 
       * The function loadOnlineFeatLayers adds the ArcGIS online Feature layers
       * Load in predefined layers
       ********************/
      let onlineFeatureLayers = {}
      function loadOnlineFeatLayers(){
            // Huntsville Boundary item 1
            let onlineLayers = [			

			// "https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/NiagaraDSA_2016/FeatureServer",
			// "https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/Niagara_neighbourhoods_shp/FeatureServer",
			"https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/Niagara_supermarkets_shp/FeatureServer",
			"https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/Niagara_publictransportroutes_shp/FeatureServer",
			"https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/Niagara_municipalboundaries_shp/FeatureServer",
			"https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/Niagara_addresspoints_shp/FeatureServer",
      "https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/Niagara_buildingfootprints_shp/FeatureServer"
		]
            let onlineFeatureNames = ["Super Markets", "Bus routes", "Boundary", "Building Address-points", "Building Footprints"]
            for (let i = 0; i < onlineLayers.length; i++){
                  let newfeatureLayer;
                  let symbol;
                  let popupTemplate;

                  if (onlineFeatureNames[i] == "Super Markets"){
                    symbol = {
                          type:"simple",
                          symbol: point_stylings["grocery_store"],
                    }
                    popupTemplate = superMarkets
              }
              else if (onlineFeatureNames[i] == "Boundary"){
                    symbol = {type:"simple", symbol:polygon_info["symbol"]}
                    symbol.symbol.color = [74, 69, 0, 0.5]
              }
              else if (onlineFeatureNames[i] == "Building Address-points"){
                    popupTemplate = addressPoints
                    // symbol = { // Very slow in webscene
                    //       type:"simple",
                    //       symbol: point_stylings["address_pin"],
                    // }
              }
              else if (onlineFeatureNames[i] == "Bus routes"){
                    symbol = {type:"simple", symbol:polyline_info["symbol"]}
                    symbol.symbol.color = "#A10A8A"
                    symbol.symbol.width = 4
                    popupTemplate = busRoute
              }
              else{
                symbol = {type:"simple", symbol:polygon_info["symbol"]}
                symbol.symbol.color = [247, 132, 72, 0.9]
            }

                  let elevationInfo = {
                    mode: "relative-to-ground",
                    offset: 0,
                    featureExpressionInfo: {
                      expression: 1 //"Geometry($feature).z + 1000" //add elevation
                    },
                    unit: "meters"
                  }

                  if (symbol){
                        newfeatureLayer = new FeatureLayer({
                              url: onlineLayers[i],
                              title: onlineFeatureNames[i],
                              renderer:symbol, // https://developers.arcgis.com/javascript/latest/style-a-feature-layer/
                              visible: false,
                              elevationInfo:elevationInfo,
                              popupTemplate: popupTemplate,
                        });
                  }
                  else{
                        newfeatureLayer = new FeatureLayer({
                              url: onlineLayers[i],
                              visible: false,
                              title: onlineFeatureNames[i],
                              elevationInfo:elevationInfo,
                              popupTemplate: popupTemplate,
                        });
                  }
                  
                  onlineFeatureLayers[onlineFeatureNames[i]] = newfeatureLayer
                  map.add(newfeatureLayer)
                  // Test it out
                  // if (i == onlineLayers.length - 1){
                  //       createFeatureTable(newfeatureLayer)
                  // }
            }    
      }
      loadOnlineFeatLayers() // Features from ArcGiS Online

  
  });