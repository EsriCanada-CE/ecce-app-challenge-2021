// Data Written: January 25, 2021
// Last Updated: February 14, 2021
// This file will contain Javascript Code
// The Code will focus anything map related to the ArcGIS API for JAVASCRIPT
// This file will focus on the residences

import { fields, fieldsDesert, point_info, BUS_stops_Popup, EMH_Popup, polyline_info,
       polygon_info, popupTemplate_info, addFeaturesData, updateFeaturesData,
        deleteFeaturesData, point_stylings,
      highlightoptions, busRoute, addressPoints, superMarkets } from "../../../js/basis.js" // Importing our fields schema

      import { deleteFeatureObject, updateExistingFeature,  addNewFeature, listFeatures, listFeatureIDs, } from "../../../js/connection.js" // importing our database tools

import { uuid4 } from "../../../js/uuid4.js" // Unique IDs

import { calcNearestPoint, pointsWithinPolygon, pointsToFeatureCollection, calcCenterFeatures, calcClustersDbScan, calcClustersKmeans, clusterInformation, getClusters } from "../../../js/spatial_analysis.js" // importing our spatial analysis functions

import { configureKey, firebaseConfigKeys } from "../../../js/apikeys.js" // importing our spatial analysis functions

import { createAreaOfInterest } from "../../../js/card.js"


// close to achieve cdn node
// require("")
// require('dotenv').config()

require([
    /* REQUIRE HOLDS ALL THE MODULES/LIBRARIES WE WILL BE USING */
    "esri/config", // To config api key to 
    "esri/Map",
    "esri/views/MapView",

    // Basemaps
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",

    // Geolocation widgets
    "esri/widgets/Track", // Use this for our location
    "esri/widgets/Locate", 

    // Geocode widget
    "esri/widgets/Search",

    // Popup Templates
    "esri/PopupTemplate",

    // Add Map graphics
    // Graphics Layers are displayed on top of other layers
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",

    // Widget for sketching
    "esri/widgets/Sketch",

    // Editor
    "esri/widgets/Editor",

    // Layerslists
    "esri/widgets/LayerList", 

    // Tables
    "esri/widgets/FeatureTable",
    // Table Lists
    "esri/widgets/TableList",

    // RouteTasks
    "esri/tasks/RouteTask",

    // RouteParameters
    "esri/tasks/support/RouteParameters",

    // FeatureSet
    "esri/tasks/support/FeatureSet",

    // Service Area
    "esri/tasks/ServiceAreaTask",
    "esri/tasks/support/ServiceAreaParameters",

    // Polygon
    "esri/geometry/Polygon",

    //Point
    "esri/geometry/Point",

  

    //NodeJs
//     "dojo/node!dotenv"

  ], 
  /* NOW THE FUNCTION IS WHERE WE ADD THESE LIBRARIES*/
  /* I believe within in this function we will write all or JS code*/
  function(esriConfig, Map, MapView, BasemapToggle,BasemapGallery, 
      Track, Locate, Search, PopupTemplate, 
      Graphic, GraphicsLayer, FeatureLayer, 
      Sketch, Editor, LayerList, FeatureTable, TableList,
      RouteTask, RouteParameters, FeatureSet,
      ServiceAreaTask, ServiceAreaParams,Polygon,Point) { //dotenv

        /////////////////////////////////////////////////////////////
        // SETTING UP OUR MAP LAYER
        // All basemaps
        // Change out
      
      let firebaseConfiguration = firebaseConfigKeys()

      firebaseConfiguration.then(function(firebaseConfigs){


            // Config Firebase Keys
            const firebaseConfig = {
                  apiKey: firebaseConfigs["apiKey"],
                  authDomain: firebaseConfigs["authDomain"],
                  projectId: "equimatics-esri-app",
                  storageBucket: firebaseConfigs["storageBucket"],
                  messagingSenderId: firebaseConfigs["messagingSenderId"],
                  appId: firebaseConfigs["appId"],
                  measurementId: firebaseConfigs["measurementId"]
            };

      
            firebase.initializeApp(firebaseConfig);

            let apiData = configureKey()
            
            apiData.then(function(apiKey){
                  esriConfig.apiKey = apiKey
            
            
            
            var map = new Map({
                  basemap: "arcgis-imagery",
            });

            var view = new MapView({
                  container: "viewDiv", //We define viewDiv is what holds our div
                  map: map,
                  center: [-79.09393876055206, 43.07435126241263], // Center at Huntsville
                  zoom: 13,
                  highlightOptions:highlightoptions
            });
            //////////////////////////////////////////////////////////////
            
            
            //////////////////////////////////////////////////////////////
            // ADDING ANOTHER BASE MAP THROUGH BASEMAP TOGGLE
            // https://developers.arcgis.com/javascript/latest/change-the-basemap-layer/
            // LIST OF BASEMAPS
            // https://developers.arcgis.com/javascript/3/jsapi/esri.basemaps-amd.html

            let basemapToggle = new BasemapToggle({
                  view:view,
                  nextBasemap: "arcgis-navigation"
            })
            view.ui.add(basemapToggle, "bottom-right") // Adding the basemap toggle bottom rights
            
            //////////////////////////////////////////////////////////////


            //////////////////////////////////////////////////////////////
            //SEARCH WIDGET
            let search = new Search({  
                  view: view
            });
            view.ui.add(search, "top-right"); //Add to the map
            //////////////////////////////////////////////////////////////

            //////////////////////////////////////////////////////////////
            // GETTING OUR CURRENT LOCATION
            // https://developers.arcgis.com/javascript/latest/display-your-location/

            // We will use tack instead
            var track = new Track({
                  view: view,
                  graphic: new Graphic({
                        symbol: {
                              type: "simple-marker",
                              size: "15px",
                              color: "green",
                              outline: {
                              color: "black",
                              width: "1.5px"
                              }
                        }
                  }),
                  useHeadingEnabled: true // So the page rotates in the direction of movement
            });
            view.ui.add(track, "top-right"); // Add the widget to screen
      //////////////////////////////////////////////////////////////

      // Service Areas
      //https://developers.arcgis.com/javascript/latest/find-service-areas/

      // Route and Directions (Maybe for rescue of people)
      //https://developers.arcgis.com/javascript/latest/find-a-route-and-directions/
            
      
            //////////////////////////////////////////////////////////////
            
            // The FOOD DESERT POLYGONS

            // AREA 1
            const rings = [
                  [  // first ring
                  [-79.09393876055206,43.07435126241263],
                  [-79.07934754351105,43.07435126241263],
                  [-79.09393876055206,43.08394308803527],
                  [-79.09393876055206,43.07435126241263]  // same as first vertex
                  ]
            ]
            
            let foodDesert_1 = new Polygon({
                  rings: rings,
                  spatialReference: { wkid: 4326 }
            });

            let foodDesert_1_graphic = new Graphic({
                  geometry: foodDesert_1,
                  symbol: polygon_info.symbol,
            })
            foodDesert_1_graphic.attributes = {
                  uuid: uuid4(),
                  ObjectID: uuid4(),
                  Date: Date.now(),
                  Description: "Food Desert Area",
                  Name: "Desert Location - 1"
            }
            // view.graphics.add(foodDesert_1_graphic) // Figure out how to get the point above the layer

            // .layer.source.items[0].attributes
            ///////////////////////////////////////////////////////////////////
            // Feature Layer
          
            

            // LET CURRENT VGI SESSION POINTS
            let feature_pointsVGI = new FeatureLayer({
                  source: [], // Collection of Graphics
                  fields: fields,
                  title: "Resident Data - Points",
                  objectIdField: "ObjectID",
                  geometryType: "point",
                  renderer: {type:"simple", symbol:point_stylings["tear_pin1"]},
                  spatialReference: { wkid: 4326 },
                  popupTemplate:popupTemplate_info
            });
            feature_pointsVGI.id = "VGI_ID"


            // ADDING FEATURES TO THE POINTS FEATURE LAYER FROM DATABASE
            let feature_layer_points = new FeatureLayer({
                  source: [], // Collection of Graphics
                  fields: fields,
                  title: "Resident Data from Database - Points",
                  objectIdField: "ObjectID",
                  geometryType: "point",
                  renderer: {type:"simple", symbol:point_stylings["tear_pin2"]},
                  spatialReference: { wkid: 4326 },
                  popupTemplate:popupTemplate_info
            });
            // feature_layer_points.refreshInterval = 1; //Set the interval to 1 minute
            feature_layer_points.id = "feature_points"
            // feature_layer_points.editingEnabled = false
            feature_layer_points.listMode = "hide"
            

            // ADDING FEATURES TO THE POLYGON FEATURE LAYER
            // FOOD DESERT AREAS

            let feature_layer_polygons = new FeatureLayer({
                  source: [foodDesert_1_graphic], // Collection of Graphics
                  title: "Food Desert Locations",
                  fields: fieldsDesert,
                  objectIdField: "ObjectID",
                  geometryType: "polygon",
                  renderer: {type:"simple", symbol:polygon_info["symbol"]},
                  spatialReference: { wkid: 4326 },
                  // popupTemplate:popupTemplate_info
            });
            feature_layer_polygons.id = "feature_polygons"
            feature_layer_polygons.editingEnabled = false // Do not allow it to be edited
            feature_layer_polygons.listMode = "hide" // Do not display in layer list

            map.add(feature_layer_polygons); // We Want to render the Food Desert Areas first before our user added data
            map.add(feature_layer_points);
            map.add(feature_pointsVGI);


            // Need to get rid of the add attribute for the graphics in the editor widget


            

            /////////////////////////////////////////////////////////////////
            // Probably best draw and edit feature layer
            // https://community.esri.com/t5/arcgis-api-for-javascript/can-i-draw-simple-geometries-and-save-them-as-features-on-my/td-p/120037
            
            
            
            /////////////////////////////////////////////////////////////////
            // EDIT FEATURE DATA
      //https://developers.arcgis.com/javascript/latest/edit-feature-data/

            
      //Editor widget

      //     let editConfigPoliceLayer = {
      //       layer: feature_layer_points,
      //       // Set it so that only one field displays within the form
      //       fieldConfig: [{
      //         name: "Name",
      //         label: "Name"
      //       }]
      //     };
            const turnOffPointDb = {
                  view: view,
                  layer: feature_layer_points, // pass in the feature layer
                  enabled: false, // default is true, set to false to disable editing functionality
                  addEnabled: false, // default is true, set to false to disable the ability to add a new feature
                  updateEnabled: false, // default is true, set to false to disable the ability to edit an existing feature
                  deleteEnabled: false // default is true, set to false to disable the ability to delete features
            }

            const feature_pointsVGI_restrictions = {
                  view: view,
                  layer: feature_pointsVGI,
                  enabled: true, // default is true, set to false to disable editing functionality
                  addEnabled: true, // default is true, set to false to disable the ability to add a new feature
                  updateEnabled: true, // default is true, set to false to disable the ability to edit an existing feature
                  deleteEnabled: true
            }

      //      https://developers.arcgis.com/javascript/latest/sample-code/widgets-editor-configurable/
      // https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-CreateWorkflowData.html
      // Might have to create my own form
      // We have the createworkflow and updateworkflow

            let editor = new Editor({
                  view: view,
                  allowedWorkflows: ["update"], // ["create","update"],
                  container: document.getElementById("editWidget"), // Edit widget is defined in the index.html
                  //layerInfos: if we do not want people to edit these layers specifically
                  layerInfos: [turnOffPointDb, feature_pointsVGI_restrictions]
            });
      

            /////////////////////////////////////////////////////////////////

            // THIS PORTION DEALS WITH SENDING DATA OVER

            // Here we are getting the event widget and we want to target
            // The Update button (Update)
            // The Delete Button (Delete)
            // Add features button (Add)

            // This is the feature which the user clicks
            // We are going to use the attribute from it to target the other layers

            // When A user clicks on an item we check if the layer is the development area
            //https://developers.arcgis.com/javascript/latest/sample-code/view-hittest/
      
            view.when(function(){
                  view.on("double-click", function(event){
                        let clicked_point = new Point({
                              x:event.mapPoint.x,
                              y:event.mapPoint.y,
                              spatialReference: { wkid: 4326 }
                        })
                        view.hitTest(event).then(function(response){
                              if (response.results[0].graphic.layer.id == "feature_polygons"){
                                    const containPoly = new Polygon({
                                          rings: response.results[0].graphic.geometry.rings,
                                          spatialReference: { wkid: 4326 }
                              })
                              if (containPoly.contains(clicked_point)){
                                    addVGIPoint(event.mapPoint)
                              }
                              }    
                        });
                  });
            });     
            

            // We use this to correct any added feature
            // To check for the type of feature
            function checkFeatureType(feature_info){
                  if (feature_info.geometry.rings){
                        feature_info.attributes["Type"] = "polygon"
                        feature_info.geometry["type"] = "polygon"
                  }
                  else if(feature_info.geometry.paths){
                        feature_info.attributes["Type"] = "line"
                        feature_info.geometry["type"] = "polyline"
                  }
                  else{
                        feature_info.attributes["Type"] = "point"
                        feature_info.geometry["type"] = "point"
                  }    
                  feature_info.popupTemplate = popupTemplate_info
                  return feature_info

            }

            function addVGIPoint(feature_info){

                  let unique_id = uuid4()
                  let attributes = {
                        ObjectID : unique_id,
                        uuid: unique_id,
                        Type : "point",
                        Date_added : Date.now(),
                  }
                  feature_info.attributes = attributes
                  


                  // Note need to make sure we update feature layer too
                  // Here we add it to the DB
                  let featureJSON = feature_info.toJSON()
                  featureJSON.attributes = attributes
                  featureJSON.geometry = {
                        type:"point",
                        x:featureJSON.x,
                        y:featureJSON.y,
                        spatialReference: featureJSON.spatialReference
                  }

                  addClientFeatureLayer('point', featureJSON) 

                  delete featureJSON.popupTemplate
                  // Adding to DB
                  addNewFeature("residence", featureJSON, featureJSON.attributes["Type"])
            }
            
            function addClientFeatureLayer(type, featureJson, db=null){
                  let edits = addFeaturesData
                  let featureGraphic;

                  switch(type){
                        case "point":
                              featureGraphic = new Graphic(featureJson)
                              edits.addFeatures.push(featureGraphic)

                              if (db){
                                    feature_layer_points.applyEdits(edits) 
                              }
                              else{
                                    feature_pointsVGI.applyEdits(edits) // changed from feature_layer_points
                                    return featureGraphic
                              }
                  }
            }

            //////////////////////////////////////////////////////////////////////////////
            // Deleting features to the client side feature layers
            // DELETING FROM ON THE MAP

            function deleteQueryVGIPoints(id=null){ // Going to use this for clearing layers
                  //https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryFeatures
                  //https://developers.arcgis.com/javascript/latest/sample-code/highlight-features-by-geometry/
                  // query all features from the layer and only return
                  // attributes specified in outFields.
                  let query;
                  if (id){ // CLear out the VGI Points
                        query = { // autocasts as Query
                              where: `uuid='${id}'`, // "Name='My feature 3'", select all features
                              returnGeometry: true,
                              // outFields: ["State_Name", "City_Name", "pop2010"]
                        };
                        feature_pointsVGI.queryFeatures(query).then(function(results){
                              let features = results.features
                              deleteClientFeatureLayer(feature_pointsVGI.geometryType, features)
                        });
                  }
                  else {
                        query = { // autocasts as Query
                              where: "1=1", // "Get all features
                              returnGeometry: true,
                              // outFields: ["State_Name", "City_Name", "pop2010"]
                        };
                        feature_pointsVGI.queryFeatures(query).then(function(results){
                              let features = results.features
                              deleteClientFeatureLayer(feature_pointsVGI.geometryType, features)
                        });
                  }
                  
            }


            ///////////////////////////////////////////////////////////////////////////////////////////
            function deleteClientFeatureLayer(type, features){
                  // Note the FeaturesData are JSON values
                  // addFeaturesData, updateFeaturesData, deleteFeaturesData
                  let edits = deleteFeaturesData 
                  // let featureGraphic;

                  switch(type){
                        case "point":
                              // featureJson.symbol = point_info.symbol
                              // featureGraphic = new Graphic(featureJson) 

                              // edits.deleteFeatures.push(featureGraphic)
                              // edits.deleteFeatures.push(features)
                              edits.deleteFeatures = features
                              
                              feature_pointsVGI.applyEdits(edits)
                              break
                  }
            }

            //////////////////////////////////////////////////////////////////////////////
            /* Preloaded features from Database */ 
            // Note listFeatures is a JavaScript promise object of all the Features in the database
            // Thus we have to call a user type on it and the type of feature we want
            
            function loadDBFeatures(){
                  let listOfDBfeatures;
                  let featureTypes = ["point"] //["point", "line", "polygon"]

                  for (let i = 0; i < featureTypes.length; i++){
                        listOfDBfeatures = listFeatures("residence", featureTypes[i])
                        listOfDBfeatures.then(function(featureListJson){
                              // Note we can also just pass in the array but we will have to do fixes
                              for (let k = 0; k < featureListJson.length; k++){
                                    let layerJson = featureListJson[k]
                                    addClientFeatureLayer(featureTypes[i], layerJson, "db")
                              }
                              
                        })
                  }     
            }

            
            // Here we target the widget storing the add, update and delete feature
            // Now the work flow needs to be modified with the uuid as a comparison
            let esri_widget = document.getElementById("editWidget")
            
            // Developed this to work with the Editor Widget

            esri_widget.onclick = function(event){

                  let current_widget_item = event.target
                  let info_update;
                  let feature_info;
                  let feature_id;

                  switch(current_widget_item.innerHTML){
                        case "Update":
                              info_update = "update"
                              feature_info = editor.activeWorkflow.data.edits.feature.toJSON()

                              feature_id = feature_info.attributes["uuid"] 
                              // Note that in the db both Object ID and UUID have the same values

                              feature_info = checkFeatureType(feature_info)                        
                              
                              // Updating DB
                              updateExistingFeature("residence", feature_id, feature_info, feature_info.geometry["type"])
                              break

                        case "Delete": // Note there is an issue when we add a new feature the other features get compounded one more
                              info_update = "delete"
                              feature_info = editor.activeWorkflow.data.edits.feature.toJSON()

                              feature_info = checkFeatureType(feature_info) // Protective measure for features

                              // Dealing with the duplicate only touch db if their is a uuid

                              if (feature_info.attributes){
                                    feature_id = feature_info.attributes["uuid"] // Use the uuid instead
                              }
                              if (feature_id){ 

                                    // Deleting from Map
                                    deleteQueryVGIPoints(feature_id)
                                    
                                    // Delete from DB
                                    deleteFeatureObject("residence", feature_info.attributes["Type"] + "_ids", feature_id)
                              } 
                              break
                  }
            }

            // Implement Table List feature
            function createFeatureTable(feature_layer){
                  //https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html
                  // https://developers.arcgis.com/javascript/latest/sample-code/widgets-tablelist/
                  // https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=widgets-tablelist
                  // third example is real good
                  let featureTable = new FeatureTable({
                        view:view,
                        layer:feature_layer,
                        container: document.getElementById("tableInfo")
                  })
            }

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
                  busRoute, addressPoints, superMarkets

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
                              symbol = {
                                    type:"simple",
                                    symbol: point_stylings["address_pin"],
                              }
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
                        if (symbol){
                              newfeatureLayer = new FeatureLayer({
                                    url: onlineLayers[i],
                                    renderer:symbol, // https://developers.arcgis.com/javascript/latest/style-a-feature-layer/
                                    visible: false,
                                    popupTemplate: popupTemplate,
                              });
                        }
                        else{
                              newfeatureLayer = new FeatureLayer({
                                    url: onlineLayers[i],
                                    visible: false,
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
            // loadDBFeatures() // Feature Layers from the DB do it after the user has entered their points
            
            
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // Loading External ArcGIS Layers
            
            let search_btn = document.getElementById("search_btn_url")
            search_btn.onclick = function(){
                  
                  let url = document.getElementById("url_info")
                  // Need to check for mapservice stuff
                  // Sample Url
                  //https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/Emergency_Management_Historical_Events/FeatureServer
                  if (url.value && url.value.includes("https://services1.arcgis.com/") && url.value.includes("FeatureServer")){
                        var newfeatureLayer = new FeatureLayer({
                              url: url.value
                        });
                        map.add(newfeatureLayer)
                        alert("Layer was successfully added")
                  }  else{
                        alert("Layer with url:" + url.value + " does not exists!")
                  }
                  url.value = ""
            }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //Filter Feature Layer
            //https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-support-FeatureFilter.html

            // Adding the Layers List
            var layerList = new LayerList({
                  view: view,
                  container: document.getElementById("toggle_layers"), // Edit widget is defined in the index.html
            });
            

                  

            ///////////////////////////////////////////////////////////////////////////
            // Calculating the Clusters in the Data

            function calculateClusters(clusterType){

                  // Here We are going to add in points from the VGI
                  let vgiFeaturesPromise = listFeatures("residence", "point") // Here we gather the points data

                  vgiFeaturesPromise.then(function(featuresList){
                        let clusters;
                        let clustersInfo;
                        let dataPoints = pointsToFeatureCollection(featuresList)
                        switch (clusterType){
                              case "kmeans":
                                    clusters = calcClustersKmeans(dataPoints)
                                    clustersInfo = clusterInformation(clusters, 'cluster')
                                    clustersInfo["centers_fixed"] = []
                                    for (let i = 0; i < clustersInfo["values"].length; i++){ // Generating the cards for clusters
                                          let clusterName = `Cluster Location - ${clustersInfo["values"][i]}`
                                          let clusterCenterPoint = turf.toWgs84(clustersInfo["centres"][i]) // change to WGS84
                                          const coordinates = clusterCenterPoint.geometry.coordinates
                                          clustersInfo["centers_fixed"].push(coordinates)
                                          // areasOfInterest(clusterName, "clustered", "clusterLocations", coordinates) // Not needed anymore
                                    }

                                    break
                              case "dbscan":
                                    clusters = calcClustersDbScan(dataPoints)
                                    clustersInfo = clusterInformation(clusters, 'dbscan')
                                    break
                        }
                  
                        // Store in Local Storage
                        localStorage.setItem("Food Desert Area 1", JSON.stringify(clustersInfo));
                        location.href = "./clusters.html" // Redirect to clusters.html

                        // let data = pointsWithinPolygon(featuresList, serviceFeatureCollection)

                  })
            }

            
            
            
      ///////////////////////////////////////////////////////////////////////////////////////////////
            // Here we build a query to get all the Desert Zones
            function desertZonesQuery(){
                  const query = {
                        where:"1=1",
                        returnGeometry:true
                  }
                  return feature_layer_polygons.queryFeatures(query).then(function(results){
                        let features = results.features
                        return features
                  });
            }

            let selectedZone; // We are going to use this to identify the selected zone

            function areasOfInterest(data, cluster=null, cardType, coordinates=null, zone=null){ // set it automatically to food deserts
                  let cardPanel = document.getElementById(cardType) // We have the card containers
                  
                  let newCard = createAreaOfInterest(data, cluster)

                  newCard.onclick = function(){
                        if (cardType == "desertLocations"){ // I just one to zoom to the layer in this map
                              view.center = coordinates
                              view.zoom = 16
                              selectedZone = zone
                              selectedZone.symbol = {type:"simple", symbol:polygon_info["symbol"]}
                              // Store in Local Storage
                              localStorage.setItem("Zone", JSON.stringify(selectedZone));
                        }
                        // else{ // Note for now keep as is but this must be passed to sceneview
                        //       view.center = coordinates
                        //       view.zoom = 16
                        // }
                  }
                  cardPanel.append(newCard)
            }

            
            function desertZonesLoad(){
                  let desertZones = desertZonesQuery()
                  desertZones.then(function(data){
                        for (let i = 0; i<data.length;i++){
                              let id = data[i].attributes.uuid
                              let dataJson = data[i].toJSON()
                              let centroid_x = data[i].geometry.centroid.x
                              let centroid_y = data[i].geometry.centroid.y
                              areasOfInterest(dataJson.attributes, null, "desertLocations", [centroid_x,centroid_y], dataJson) // Here we are going to also pass some information
                        }
                  })
            }

            desertZonesLoad() // Load our desert Zones
      ///////////////////////////////////////////////////////////////////////////////////////////////
      // ADDING THE VISUAL EFFECTS TO OUR LAYER

            view.ui.add("info", "top-right");

            view.when().then(function() {
                  return feature_layer_polygons.when();
            }).then(function(layer) {
                  const renderer = layer.renderer.clone();
                  renderer.symbol.width = 4;
                  // renderer.symbol.color = [128, 128, 128, 0.8]; // This is grey
                  layer.renderer = renderer;

                  // Set up an event handler for pointer-down (mobile)
                  // and pointer-move events (mouse)
                  // and retrieve the screen x, y coordinates

                  return view.whenLayerView(layer);
            })
            .then(function(layerView) {
                  // view.on("click", eventHandler)
                  view.on("pointer-move", eventHandler);
                  view.on("pointer-down", eventHandler);

                  // We call the event handler function
                  function eventHandler(event) {
                  // only include graphics from hurricanesLayer in the hitTest
                  const opts = {
                  include: feature_layer_polygons
                  }
                  // the hitTest() checks to see if any graphics from the hurricanesLayer
                  // intersect the x, y coordinates of the pointer
                  view.hitTest(event, opts).then(getGraphics);
                  }

                  let highlight, currentYear, currentName;

                  function getGraphics(response) {
                  // the topmost graphic from the hurricanesLayer
                  // and display select attribute values from the
                  // graphic to the user
                  if (response.results.length) {
                        
                        // const graphic = response.results[0].graphic;
                        let orig_id = response.results[0].graphic.attributes.ObjectID

                        const featureItems = response.results[0].graphic.layer.source.items 
                        // Here we have that weird issue where the other metadata is not returned for client side stuff
                        // Thus we have to dig further into the layer for the data as only ObjectID is returned

                        let graphic;
                        for (let i = 0; i < featureItems.length; i++){
                              if(featureItems[i].attributes.ObjectID == orig_id){
                                    graphic = response.results[0].graphic.layer.source.items[0];
                                    break
                              }
                              // else{
                              //       graphic = response.results[0].graphic.layer.source.items[0]; // we default with first area
                              // }
                        }
                        
                        const attributes = graphic.attributes;
                        const description = attributes.Description;
                        const name = attributes.Name;
                        const id = attributes.uuid;
                        

                        if (
                              highlight //&&
                              // (currentName !== name || currentYear !== year)
                        ) {
                              highlight.remove();
                              highlight = null;
                              return;
                        }

                  document.getElementById("info").style.visibility = "visible";
                  document.getElementById("name").innerHTML = name;
                  document.getElementById("description").innerHTML =
                        "Description: " + description;

                  // highlight all features belonging to the same hurricane as the feature
                  // returned from the hitTest
                  
                  const query = { // autocasts as Query
                        where: "1=1", // Here I just query all the features since id's are only available
                        };
                  layerView.queryObjectIds(query).then(function(ids) {
                              if (highlight) {
                              highlight.remove()
                              }
                              highlight = layerView.highlight(ids);
                  });
                  } 
                  else {
                  // remove the highlight if no features are
                  // returned from the hitTest
                  if (highlight){
                        highlight.remove();
                        highlight = null;
                  }
                  document.getElementById("info").style.visibility = "hidden";
                  }
                  }
            });




      //////////////////////////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////
            // Here we go can use it to load in GeoJSON files
            // Reimplement function
            function getGeoJsonFromFile(file=null){
                  file = "../../../data/Huntsville_Transit.geojson"

                  let featureCollection = fetch (file).then(x => x.text()).then(function(data){
                        data = JSON.parse(data) // parse the data to make it JavaScript object
                        // var center = turf.center(data);
                     
                        return data
                   })
                  return featureCollection
            }
            ///////////////////////////////////////////////////////////////////////////


            let endVGIBtn = document.getElementById("endVGI")
            endVGIBtn.onclick = function(){
                  endVGIBtn.style.display = "none"

                  loadDBFeatures() // Feature Layers from the DB after we add a new point

                  // deleteQueryVGIPoints() // Clean out the DB Loaded points


                  // Buttons to calculate clustering 

                  // let vgiCloseWidget = document.getElementById("endVGI")
                  let calcClustersKmeansBtn = document.getElementById("kmeans") 
                  calcClustersKmeansBtn.style.display = "block"
                  calcClustersKmeansBtn.style.left = "12.5%"

                  feature_pointsVGI.editingEnabled = false // Here we disable editing
                  // Need to also make sure we grab from the DB too

                  calcClustersKmeansBtn.onclick = function(){
                        calculateClusters("kmeans")
                  }
                  // let calcClustersDbScanBtn = document.getElementById("dbscan")
                  // calcClustersDbScanBtn.onclick = function(){
                  //       calculateClusters("dbscan")
                  // }
            }




            }) // Closing the require model
            })// Close out API KEY
})// Close out Firebase COnfig


// ///////////////////////////////////////////////////////////////////////////
//       // We use this function to create the new point graphic to the layer
//       function addPointGraphic(type, point, serviceArea=null) {
//             let graphic;
            
//             if (serviceArea){ // If we are dealing with a service area point
//                   view.graphics.removeAll();
//                   graphic = new Graphic({
//                         geometry:point,
//                         symbol:point_stylings["locator"]
//                   })
//             }else{
//                   graphic = new Graphic({
//                         symbol: point_stylings["locator"],
//                         geometry: {
//                             x: point[0],
//                             y: point[1],
//                             type:"point"
//                       } // Add popuptemplate
//                     });
                      
//             }
//             view.graphics.add(graphic);
//             return graphic
//       }
//       ////////////////////////////////////////////////////////////////////////


//       ///////////////////////////////////////////////////////////////////////////
//       function showPosition(position) {
//             // ROUTING DIRECTIONS RELATED
//             // Add a DOM Node to display the text routing directions
//             // const directionsWidget = document.createElement("div");
//             // directionsWidget.id = "directions";
      
//             let startCoords, endCoords;
            
//             let curr_position = [position.coords.longitude, position.coords.latitude]
            
//             let featureCollects = getGeoJsonFromFile() // Note this is a promise object
//             "<br>Longitude: " + curr_position[0])
            
//             // featureCollects.then(function(featureCollection){
//             //       let endPoint = calcNearestPoint(startCoords, featureCollection) // Find the Nearest Bus Locations
//             //       endCoords = turf.getCoords(endPoint) // Getting the Coords to bus location
//             // })
// }

//       // Here make geolocation functions to be used in the application for the analysis

//       let calcRouteBtn = document.getElementById("calc_route")

//       calcRouteBtn.onclick = function() {
//             if (navigator.geolocation) {
//                   navigator.geolocation.getCurrentPosition(showPosition);
//             } else {
//                   alert("Geolocation is not supported by this browser.")
//             }
//       }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
