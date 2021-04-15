/*
Date Created: January 29, 2021
Date Last Edited: January 29, 2021
*/

// This file will contain the the dictionary values for schema
// The Popup template
// The Point, Polygon, Polyline creation standards from the database
// 

// import { uuid4 } from "./uuid4.js" // Unique IDs


// The VGI Schema for our feature layer
//Accessor#set 'float' is not a valid value for this property, only the following values are valid: 
//'blob', 'date', 'double', 'geometry', 'global-id', 
//'guid', 'integer', 'long', 'oid', 'raster', 'single', 
// 'small-integer', 'string', 'xml'
//https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html
const fields = [
    {
      name: "ObjectID",
      alias: "ObjectID",
      type: "oid",
    },
    {
      name: "Name",
      alias: "Name",
      type: "string"
    },
    {
      name: "Type",
      alias: "Type",
      type: "string"
    },
    {
      name: "Date_added",
      alias: "Date",
      type: "date"
    },
    {
      name: "uuid",
      alias: "uuid",
      type: "string",
      // editable: false
    },
    {
      name: "Description",
      alias: "Description",
      type: "string"
    },
    {
      name: "Q1",
      alias: "What to sell (eg. fresh fruits)?",
      type: "string"
    },
    {
      name: "Q2",
      alias: "Your hourly earnings",
      type: "integer"
    },
    {
      name: "Q3",
      alias: "When do you usually buy groceries?",
      type: "string"
    },
    {
      name: "Q4",
      alias: "How much are you willing to spend?",
      type: "double"
    },
    {
      name: "Q5",
      alias: "What is your usual commute time for groceries?",
      type: "string"
    },
    {
      name: "Q6",
      alias: "What is your means of commute (bus, subway, train, car, etc..)",
      type: "string"
    }
  ]

  const fieldsDesert = [
    {
      name: "ObjectID",
      alias: "ObjectID",
      type: "oid",
    },
    {
      name: "Name",
      alias: "Name",
      type: "string"
    },
    {
      name: "Date_added",
      alias: "Date",
      type: "date"
    },
    {
      name: "uuid",
      alias: "uuid",
      type: "string",
      // editable: false
    },
    {
      name: "Description",
      alias: "Description",
      type: "string"
    },
  ]
 //////////////////////////////////////////////////////////////////////////////////////////////

// VGI POPUP INFO STYLING
// Maybe add type later
// Note "{ field_name }" field name is from the schema

let popupTemplate_info = {
    // id: "{ObjectID}",
    title: "{Name}",
    outFields:["*"],
    // content: "{Description}",
    content: [{
        // It is also possible to set the fieldInfos outside of the content
        // directly in the popupTemplate. If no fieldInfos is specifically set
        // in the content, it defaults to whatever may be set within the popupTemplate.
        type: "fields",
        fieldInfos: [{
          fieldName: "Description", // The field for access the date from attributes
          label: "Description"
        },{
          fieldName: "Date_added",
          label: "Data_added",
        },
        {
          fieldName: "ObjectID",
          label: "ID",
        },
        {
          fieldName: "uuid",
          label: "UniqueIdentifier",
        },
        {
          fieldName: "Q1",
          label: "What to sell (eg. fresh fruits)?",
        },
        {
          fieldName: "Q2",
          label: "Your hourly earnings",
        },
        {
          fieldName: "Q3",
          label: "When do you usually buy groceries?",
        },
        {
          fieldName: "Q4",
          label: "How much are you willing to spend?",
        },
        {
          fieldName: "Q5",
          label: "What is your usual commute time for groceries?",
        },
        {
          fieldName: "Q6",
          label: "What is your means of commute (bus, subway, train, car, etc..)",
        },
        ]
      }]
 }

 // Bus Stops POPUP


let BUS_stops_Popup = { // The template for Near Bustop to the users location
  title: "{Stop_Name}",
  outFields:["*"],
  content: [{
        type: "fields",
        fieldInfos: [{
              fieldName: "Stop_Num", 
              label: "Stop Number"
            }
        ]
  }]
}

 // Emergency Management Historical Events POPUP

let EMH_Popup = { 
  title: "{EVENT_TYPE}",
  outFields:["*"],
  content: [{
        type: "fields",
        fieldInfos: [{
              fieldName: "DISTRICT_N", // The field for access the date from attributes
              label: "District Number"
            },
            {
              fieldName: "EVENT_YEAR", // The field for access the date from attributes
              label: "Event year"
            },
            {
              fieldName: "EVENT_NUMB", // The field for access the date from attributes
              label: "Event count"
            },
            {
              fieldName: "EVACUATION", // The field for access the date from attributes
              label: "Evacuated ?"
            },
            {
              fieldName: "EVENT_DESC", // The field for access the date from attributes
              label: "Description"
            },
        ]
  }]
}

// Super Markerts Popup

let superMarkets = { 
  title: "{FacilityNa}",
  outFields:["*"],
  content: [{
        type: "fields",
        fieldInfos: [{
              fieldName: "Full_Addre", // The field for access the date from attributes
              label: "Address"
            },
            {
              fieldName: "Municipali", // The field for access the date from attributes
              label: "Municipality"
            },
        ]
  }]
}

let busRoute = { 
  title: "{Route_Name}",
  outFields:["*"],
  content: [{
        type: "fields",
        fieldInfos: [{
              fieldName: "Agency", // The field for access the date from attributes
              label: "Governing Body"
            },
        ]
  }]
}

// Address

let addressPoints = { 
  title: "Address",
  outFields:["*"],
  content: [{
        type: "fields",
        fieldInfos: [{
              fieldName: "Full_Stree", // The field for access the date from attributes
              label: "Street Number"
            },
            {
              fieldName: "StreetName", // The field for access the date from attributes
              label: "Street Name"
            },
            {
              fieldName: "StreetType", // The field for access the date from attributes
              label: "Type"
            },
            {
              fieldName: "StreetDir", // The field for access the date from attributes
              label: "Direction of Travel"
            },
            {
              fieldName: "Municipali", // The field for access the date from attributes
              label: "Municipality"
            },
        ]
  }]
}
 //////////////////////////////////////////////////////////////////////////////////////////////
 // FOR ALL THE GEOMETRY BELOW THE INFORMATION IS A SAMPLE DATASET
 // THIS WOULD BE HOW THE DATASET WOULD BE LOADED FROM THE FIREBASE DATABASE 
 // WITH THAT UNIQUE ID


// The Point geometry standards
// THE INFORMATION FOR CREATING POINTS
let point_info =  {
    geometry: {
            type: "point",
            spatialReference:{
              latestWkid: 3857,
              wkid: 102100
            },
            x: -8818308.957272682,
            y: 5672759.466050722
    },
    attributes: {
            ObjectID: 1,//uuid4(),
            uuid: "something", //uuid4(),
            Type: "point",
            Name: "TestPoint",
            Description: "Random Point",
            Data_added: Date.now()
    },
    symbol:{
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html
        type: "simple-marker", // The Simple-Marker Type of Styling
        color: "blue",  // Orange --> Make this random 
        // size: "100px", 
        // style: "x",
        outline: {
            color: [255, 255, 255], // White
            width: 1
        }
    },
    popupTemplate:popupTemplate_info
}

// const webStyleSymbol = new WebStyleSymbol({
//   name: "bus-station",
//   styleName: "Esri2DPointSymbolsStyle"
// });


//https://developers.arcgis.com/javascript/latest/esri-web-style-symbols-2d/

// ArcGIS Javascript API Point styling
let point_stylings = {
  locator:{ // Current Locations
    type: "picture-marker",  // autocasts as new SimpleMarkerSymbol()
    color: "#0E91E3",
    url: "/images/locator_1.gif",
    width: "100px",
    height: "100px"
  },
  bus_stops:{ // bustops
    type:"web-style", 
    styleName: "Esri2DPointSymbolsStyle",
    name: "bus-station"
  },
  grocery_store:{ // bustops
    type:"web-style", 
    name: "grocery-store",
    styleName: "Esri2DPointSymbolsStyle"
  },
  address_pin:{
    type:"web-style", 
    name: "push-pin-1",
    styleName: "Esri2DPointSymbolsStyle"
  },
  tear_pin1:{ //vgi
    type:"web-style",
    styleName: "Esri2DPointSymbolsStyle",
    name: "tear-pin-1"
  },
  tear_pin2:{ //vgi
    type:"web-style",
    styleName: "Esri2DPointSymbolsStyle",
    name: "tear-pin-2"
  },
  flag:{ // Use these for historing events
    type:"web-style",
    styleName: "Esri2DPointSymbolsStyle",
    name: "flag"
  }
}


// Line geometry standard
// Create a line geometry

let polyline_info = {
    geometry: {
        type: "polyline",
        paths: [
            [-118.821527826096, 34.0139576938577], //Longitude, latitude
            [-118.814893761649, 34.0080602407843], //Longitude, latitude
            [-118.808878330345, 34.0016642996246]  //Longitude, latitude
        ]
    },
    attributes: {
        ObjectID: 1,
        Type: "line",
        uuid:"value2",
        Name: "TestLine",
        Description: "Random Line",
        Data_added: Date.now()
    },
    symbol:{
        type: "simple-line",
        color: "#D11349",
        width: 5
    },
    popupTemplate:popupTemplate_info
}


// Polygom geometry standard
// Create the polygon geometry

let polygon_info = {
    geometry: {
        type: "polygon",
        rings: [
            [-118.818984489994, 34.0137559967283], //Longitude, latitude
            [-118.806796597377, 34.0215816298725], //Longitude, latitude
            [-118.791432890735, 34.0163883241613], //Longitude, latitude
            [-118.79596686535, 34.008564864635],   //Longitude, latitude
            [-118.808558110679, 34.0035027131376]  //Longitude, latitude
        ]
    },
    symbol:{
        type: "simple-fill",
        color: [238, 238, 238, 0.5],  
        outline: { // autocasted to a simple line
          // https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleLineSymbol.html
            style: "dash",
            color: "black",//[255, 255, 255],
            width: 1
        }
    },
    attributes: {
        ObjectID: 130,
        Type: "line",
        uuid:"value3",
        Name: "TestPolygon",
        Description: "Random Polygon",
        Data_added: Date.now()
    },
    popupTemplate:popupTemplate_info
};


//https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#applyEdits
// Gooing to use it on .applyEdits
let addFeaturesData = {
  addFeatures: []
}

let updateFeaturesData = {
  updateFeatures: []
}

let deleteFeaturesData = {
  deleteFeatures: []
}

let highlightoptions = {
  color:"#FF0326", //Red
  halocolor: "#65E6DB", //light blue
  haloOpacity:1,
  fillOpacity:0.20
}


      
export { fields, fieldsDesert, BUS_stops_Popup, EMH_Popup ,point_info, 
  polyline_info, polygon_info, popupTemplate_info, addFeaturesData, 
  updateFeaturesData, deleteFeaturesData, point_stylings,
  highlightoptions, busRoute, addressPoints, superMarkets,
} // Making the fields variable accessible to other files
