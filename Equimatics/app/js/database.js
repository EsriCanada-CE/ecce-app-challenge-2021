// Date written: January 25, 2021
// Last update: February 5, 2021
// File Purpose: Set up Firebase Database connection

// This file serves as the general firebase database connection

// Note we could have built this use Javascript class
//https://www.c-sharpcorner.com/article/object-oriented-programming-javascript-es6

// https://firebase.google.com/docs/database/web/read-and-write

/*
The purpose of the function addfeatureID is to add a newly added feature
to the database.

addfeatureID: Str Str Str -> None
*/

function addfeatureID(user_type, feature_id, type=null){
    type = type + "_ids"
    let db_location_feature = user_type + "/" + type
    let featureRef = firebase.database().ref(db_location_feature)
    let featureInfo = featureRef.push(feature_id);
    // console.log("addFeatureID")

}

//Saving Data from Features into firebase
export function addFeature(user_type, feature, type=null){
    // Make sure modifications to this to separate the point, polygon and lines 
    // Features 
    let db_location_feature = user_type + "/" + type
    let featureRef = firebase.database().ref(db_location_feature)
    let featureInfo = featureRef.push();
    featureInfo.set(feature);

    // As we add a feature we add its contents
    addfeatureID(user_type, feature.attributes["ObjectID"], type)
    // console.log("addFeatures")
}

export function loadfeatureIDs(user_type){
    let featureIDs = {"point_ids":null, "polygon_ids":null, "line_ids":null}

    for (let feature_type in featureIDs){
        let db_location_feature = user_type + "/" + feature_type
        let ref = firebase.database().ref(db_location_feature); 
        // We Initialize a Promise here                          
        featureIDs[feature_type] = ref.once("value").then(function(data){
            // let output = JSON.stringify(data.val(), null, 2);
            // trial.innerHTML = output
            return data.val()
        });
    }
    // console.log("loadFeaturesIds")

    return featureIDs
}

// The Purpose
// The function loadFeatures loads data from the firebase database
// An object with all the feature information 
export function loadFeatures(user_type){
    // let feature_types = ["point", "polygon", "line"]
    var features = {"point":null, "polygon":null, "line":null}
    // let features = {} 

    // for (let feature_type in features){
    //     let db_location_feature = user_type + "/" + feature_type
    //     let ref = firebase.database().ref(db_location_feature);                           
    //     features[feature_type] = ref.on("value", function(data){
    //         let output = JSON.stringify(data.val(), null, 2);
    //         // trial.innerHTML = output
    //         return data.val()
    //     });
    // }
    for (let feature_type in features){

        let db_location_feature = user_type + "/" + feature_type

        let ref = firebase.database().ref(db_location_feature);                           
        features[feature_type] = ref.once("value").then(function(data){
            // let output = JSON.stringify(data.val(), null, 2);
            // trial.innerHTML = output
            return data.val()
        });
    }
    // console.log("loadFeatures")

    return features
}

export function updateFeature(user_type, feature, feature_type, objectKey){
    let db_location_feature = user_type + "/" + feature_type
    let ref = firebase.database().ref(db_location_feature)
    // console.log("updateFeature")
    // console.log(feature)


    ref.child(objectKey).update(feature) // Update child
}

// Note 
export function deleteDbFeature(user_type, feature_type, objectKey){
    let db_location_feature = user_type + "/" + feature_type
    let ref = firebase.database().ref(db_location_feature)
    ref.child(objectKey).remove(); // remove specific key

    // console.log("deleteFeatures")

}
