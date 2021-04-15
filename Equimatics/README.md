# EsriAppChallenge-2021
- The ESRI App Challenge Waterloo Team 2 -  2021
- The group members are: Raghav Sethi and Giovanni Harvey 

## The Company - Equimatics
- Is a company based in the clouds.
- We work on building Web based GIS Applications solutions for communities by identifying Food deserts in their region.
- We then allow the government and residence to use our application to derive locations in which new grocery store locations should be built through VGI, PGIS and CLustering Algorithms.
- The motto : `Food Equality is a right. We help governments and residents identify their needs and develop a solution.`

### Application
- `Equimatics Website` (Link to site)[https://equimatics-esri-app.web.app/]
- `Food Desert Solver` (Link to site)[https://equimatics-esri-app.web.app/government/esri/index.html]
- Version (1.0)
    - Files Last edited: February 19, 2021
    - Intended use on a Laptop or Desktop (Not fully optimized for mobile devices)
    - Technologies used
        1. Google Firebase (Database and Hosting)
        2. ArcGIS Api For JavaScript 
        3. Turf JS Api (For Advanced Spatial Analysis)
        4. Html, CSS, Javascript Libraries

#### Food Desert Solver (Application Usage)
- The purpose of this application was to allow `Municipalities` to solve their Food Desert Problem by enlisting `residences` to derive potential grocery shop locations through clustering algorithms.
#### Steps 
- This was done by allowing them to have a tool that incorporates `Volunteered Geographic Information and Participatory GIS processes`:
    1. The `resident` must choose `Food Desert Location` which is at the bottom of the application page
    2. The `residences` can add points to a selected `Food Desert Zone` on the map layer by double clicking within the zone (incorporating VGI and PGIS process).
    3. The user is able to add metadata to this point by clicking the `Edit feature` button in the widget on left of the screen.
    4. The user can then choose a point/feature to edit the meta data information for. `Note the geometry and data is stored in Google's Firebase Database so that it can be easily accessed for further analysis`
    5. If the user is finished adding their potential location for a `grocery shop`, they can click the `End VGI Session` button.
    6. Now the user will be able to see all the other users of the application who added data to the `Food Desert Zone` but they are not able to edit this data.
    7. Now the governing body (Municipality for e.g.) can then click the `Calculate K-means Cluster` button to identify clusters in the data and derive central points from these clusters.
    8. The user will be then carried to a 3D map layer (Scene View Layer) in which they can then choose a `Proposed Grocery shop location` of choice in the web application.

### Bugs
#### VGI Bugs
- Currently there is a bug with the Editor tool in the VGI application
- As it sometimes duplicated features that is added to the layer
- For example: if the user add multiple points and then edits it sometimes multiple `untitled features` will show up in the `Editor Widget`
- The user can chose any of these `untitle features` to edit the meta data or delete.
