// This file will be used for spatial analysis in both Leaflet and Esr Applications


////////////////////////////////////////////////////////////////
//NEAREST POINT
//https://turfjs.org/docs/#nearestPoint
// The function calcNearestPoint consumes a point (refPoint) and a featureCollection of points (pointfeatureCollection)
// and returns the nearest point in the featureCollection to the ref point
// 
export function calcNearestPoint(refPoint, pointfeatureCollection){
    return turf.nearestPoint(refPoint, pointfeatureCollection)
}
////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////
//ClusterKmeans
// Takes a set of points and partition them into clusters using the k-mean. It uses the k-means algorithm as outliers points that lie alone in low-density regions (whose nearest neighbors are too far away)
// https://turfjs.org/docs/#clustersKmeans
export function calcClustersKmeans(pointfeatureCollection, numClusers=4){
    var options = {
        numberOfClusters:numClusers
    }
    return turf.clustersKmeans(pointfeatureCollection, options)
}
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
//ClustersDbscan
// https://turfjs.org/docs/#clustersKmeans

// Notes the arguments are
// points (pointsfeatureCollection)
// maxDistance to form clusters (units is in kilometers)
// options to edit the units
//{units:"kilometers", mutate:false, minPoints:5}
// where mutate is if we mutate the resulting geojson and minPoints is number
// of points required to form our cluser

export function calcClustersDbScan(pointfeatureCollection, maxDistance=1, options=null){
    if (options){
        return turf.clustersDbscan(pointfeatureCollection, maxDistance, options);
    }else{
        return turf.clustersDbscan(pointfeatureCollection, maxDistance);
    }
    
}

////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
// getCluster
// https://turfjs.org/docs/#getCluster
export function getClusters(cluster_num, clusteredData){
    return turf.getCluster(clusteredData)
}

// ALL the clusters in a dataset
// Calculate the total number of clusters, and the values
// https://turfjs.org/docs/#clusterReduce
//cluster for kmeans
//dbscan for DBSCAN
export function clusterInformation(clusteredFeatureCollection, clusterType){ //
    let clusterInfo = {
        total:0,
        values: [],
        centres:[],
        cluster:[],
    }
    let data;

    data = turf.clusterReduce(clusteredFeatureCollection, clusterType, function(previousValue, cluster, clusterValue){
        clusterInfo.total++
        clusterInfo.values.push(clusterValue)
        clusterInfo.cluster.push(cluster) 
        clusterInfo.centres.push(calcCenterFeatures(cluster))
        return clusterInfo
    }, clusterInfo)

    return data
}

// var total = turf.clusterReduce(clustered, 'cluster', function (previousValue) {
//     return previousValue++;
// }, 0);

// // Create an Array of all the values retrieved from the 'cluster' property
// var values = turf.clusterReduce(clustered, 'cluster', function (previousValue, cluster, clusterValue) {
//     return previousValue.concat(clusterValue);
// }, []);
////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Points Within Polygon
// https://turfjs.org/docs/#pointsWithinPolygon

export function pointsWithinPolygon(points, polygonFeatureCollection){
    
    points = pointsToFeatureCollection(points) //Points to FeatureCollection 

   
    let servicePoints = {}
    let servicePointsInfo = {}
    turf.featureEach(polygonFeatureCollection, function (currentFeature, featureIndex){
        servicePoints[currentFeature.properties.Name] = turf.pointsWithinPolygon(points, currentFeature)
    })
    // Here we get the attribute information

    for (let name in servicePoints){
        let information = []
        turf.featureEach(servicePoints[name], function(currentFeature, featureIndex){
            let featureName = `<b>Name:</b><p>${currentFeature.properties.Name}</p>`
            let featureId = `<b>ID:</b><p>${currentFeature.properties.uuid}</p>`
            let featureDescription = `<b>Description:</b><p>${currentFeature.properties.Description}</p>`
            let featureDate = `<b>Date added:</b><p>${currentFeature.properties.Date_added}</p>`
            information.push(featureName + featureId + featureDescription + featureDate)
        })
        servicePointsInfo[name] = information
    }
    return servicePointsInfo // this is the data
}

////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
// Points to FeatureCollection
export function pointsToFeatureCollection(points){

    for(let i = 0; i < points.length; i++){
        let point_geom
        if (points[i].type = "Feature"){ // For Leaflet Data (Needs a fix for types with Features)
            if (points[i].geometry["x"]){
                //long, lat
                point_geom = [points[i].geometry["x"], points[i].geometry["y"]]
            }
            else{
                point_geom = [points[i].geometry.coordinates[0], points[i].geometry.coordinates[1]]
            }
        }
        else{ // For Esri Data
            point_geom = [points[i].geometry["x"], points[i].geometry["y"]]
        }
    
        points[i] = turf.point(point_geom, points[i].attributes)
        if (points[i].geometry.coordinates[0] > 180){
            points[i] = turf.toWgs84(points[i])
        }
    }
    points = turf.featureCollection(points)
    return points
}

////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
// Center
// Returns the absolute center of a Feature or Feature Collection
// Can take feature or Feature collections
// returns a Point

export function calcCenterFeatures(featureCollection){

    // let featureCollection = pointsToFeatureCollection(features)

    if (featureCollection){
        return turf.center(featureCollection)
    }
}

////////////////////////////////////////////////////////////////