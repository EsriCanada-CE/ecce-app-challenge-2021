# Welcome Home
## Mission Statement
There are many ways to reduce inequality. While there has been some positive change, studies show that inequality is growing for 70% of the global population (United Nations, 2020). This can make social and economic development difficult. Since the beginning of the pandemic, it has become obvious that Covid-19 is hitting vulnerable populations the hardest as well increasing discrimination for those same populations (United Nations, 2020). Target 10.7 of the UN’s Sustainable Development Goals is to “facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies” (United Nations, 2020). This is because migration has been shown to contribute positively to development outcomes and some studies suggest that migration could be one of the best ways to significantly reduce global income inequality (Iqbal, 2015). Migrants and their families can benefit from many aspects of movement such as increased income, skills, and capacities (Crawley, 2018).

Overall migration has been shown to have a positive effect on the receiving country (Devarajan, 2013). Trends suggest that most economies will see an increase since migrants typically perform jobs that permit the economy to be more productive such as childcare and household services (Crawley, 2018). Migration has always been a highly debated political topic as it is a highly visible reflection of global inequalities (Crawley, 2018). An additional issue is that not everyone has the same access to the benefits of migration, and when individuals do migrate, they often find unequal access to rights and social resources in their new countries (Crawley, 2018). This is why we created Welcome Home. This app consolidates and provides search capabilities for several different services that a newcomer to Canada might need, such as refugee services, community centres and green spaces. The app allows users to search for services through several methods and provides information about the variety of services available to them. We wanted to create an app that would help people who are new to Canada in order to reduce the stress inherent in migration and to help welcome them to their new home.

## About

Welcome Home is an app that consolidates and provides search capabilities for any service that a newcomer to Toronto might need in an easy-to-use format. When you first open the app, it opens to a default extent of Toronto, Ontario, Canada. In this initial extent there are three layers available, refugee housing, newcomer settlement services and the boundaries of Toronto neighbourhoods. Any point in these layers can be clicked and a pop-up will appear with detailed information about the location and services available to help users learn more about what is available to them. 

There are additional layers available such as community centres, parks, libraries and places of worship all of which also have pop-ups available to provide more information. As well a layer entitled Neighbourhood Rankings is available which shows a suitability analysis. This shows users which neighbourhoods contain the highest number of services as well as the lowest crime rates to help guide them when searching for new accommodations. There is also a link along the top bar which opens a survey which can be used to provide suggestions for services you would like to see included on the app. 

Some of the ways this app is helpful to users beyond providing information is the widgets and pre-set queries we have available. These can be found in the top left corner of the app. The direction widget provides directions by car or by foot to help guide users to their destinations, while the share widget allows users to share this app with others. The filter widget contains several pre-set common searches which allows users to find the information that could be useful, for example there is a language filter for refugee housing and settlement services. The query widget provides a keyword search to allow users to search for services not covered by the filter widget.

## User’s Guide to Welcome Home

### Exploring the map
Click and hold anywhere on the map to pan around. The plus/minus sign on the bottom left can be used to zoom in or out on the map as well. The house symbol on the bottom left brings the map back to the default extent and the circular symbol next to it will zoom in on your location.

### Inital view
When you first open the app, it opens to a default extent of Toronto, Ontario, Canada. In this initial extent there are three layers available. These layers are a light grey line depicting the neighbourhoods within Toronto, a blue information symbol which shows newcomer settlement services and a blue house symbol which shows refugee housing. 

Along the right hand side of the top bar there are three options, a legend which shows the layers currently in the map extent, a layer list in the center, through which additional layers can be added or removed and the information button on the far right. 

On the top bar to the right of the title ‘Welcome Home’, there is an embedded link entitled ‘Toronto Newcomers Survey’. Clicking on this link will open a new browser window which contains a survey. This survey can be used to provide suggestions for services you would like to see included on the map.

### Additional layers
There are five additional layers in the layer list that can be added. Layers can be turned on or off by clicking or unclicking the check mark next to the layer in the layer list. Places of worship, community centers and libraries in Toronto show the locations of those three places. Additionally, the Neighbourhood Rankings shows the rank of each neighbourhood based on crime rates, and the proximity of each neighbourhood to the different options available in the map. The Parks in Toronto layer shows all the green spaces in Toronto however the map must be zoomed in for this layer to appear. You can click on any symbol or neighbourhood and a pop-up will appear with additional information about the services offered at that location.  

### Widgets
There are also several widgets some of which contain pre-set questions that can be used to aid in locating the services you wish to use. These can be found on the top left of the app. 

At the top there is the direction widget. This widget allows you to search for directions anywhere on the map. Click on it to open and enter two addresses or click on your location on the map before hitting get directions. Click the add button to add more stops. There are different options for the mode of transportation, as well as the option to save/share or print the directions. Press clear to delete the directions. 

Below that widget is the filter widget. This widget contains several pre-set questions that can help you find services you need. For the community centres and newcomer settlement services, you can enter your preferred language and the locations that offer service in that language will be highlighted on the map. You can also search through the places of worship layer based on the specified religion to find locations. There are three queries that can be turned on or off to show locations that fit that selection as well. These are refugee housing for women and children, wheelchair accessible community centers and children’s programs. 

The next widget below that is the share option. This widget allows you to share the link to this app to other people or to a website. 

Below that, is the near me widget. This widget allows you to search for different services within a specified distance from your current location. Simply type in your location or set a location by clicking on the map and all services within the specified distance will be selected and appear on the map. In the widget, these services will be grouped by layer and more information can be found about them by clicking on the list in the widget. Once you have selected an option in the list, a blue box will appear on the map around that option. The widget at the bottom of the stack is the query tool. This allows you to select a different layer to search and enter a search word. The widget will cultivate a list of all the locations which include that keyword.

## Calculations
### Neighbourhood Rankings in Toronto

Neighbourhood rankings were made specifically with the newcomer to Toronto in mind. The neighbourhood rankings are based on 7 different categories:
- Number of libraries
- Number of newcomer settlements
- Number of refugee housing
- Homicides in 2019
- Robberies in 2019
- Assaults in 2019
- Break & enters in 2019

Suitability rankings were calculated using the 'Calculate Field' geoprocessing tool in ArcGIS Pro. First each category needed to be assigned a rank (from 1-5) for each neighbourhood.

The range of values that were assigned to each rank were determined by using the Natural Breaks(Jenks) method with 3-5 classes (depending on the category).

Sample python code is below for the method used to calculate the field:

`def AddLabel(NewcomerSettlement):`

    if (NewcomerSettlement <= 0):
        return 1
    elif (NewcomerSettlement > 0.1 and NewcomerSettlement <=1.9):
        return 2
    elif(NewcomerSettlement > 1.9 and NewcomerSettlement <= 2.9):
        return 3
    elif(NewcomerSettlement > 2.9 and NewcomerSettlement <= 3.9):
        return 4
    elif(NewcomerSettlement > 3.9):
        return 5
With 1 being the least desrible and 5 being most desriable.

After the 7 categories were calculated and given values 1-5 for each neighbourhood a new field "sum" was created. All the categories were then added together for each neighbourhood and calculated on the field "sum" 

Expression used:

`!Lib! + !Refu! + !Newcom! + !BE! + !Hom! + !Rob! + !Assult!`

Once again the range of values that were assigned to each rank were determined by using the Natural Breaks(Jenks) method with 5 classes.
The higher the value the more desribale the neighboourhood. 

A new field was created- "Market" this field contains the text values from 'very poor' to 'very good'. 
The range of values determined from above would be used in the calculate field tool to convert the range of values to a unique text field.

Expression used:

`def AddLabel(Market):`

    if (Market <= 17):
        return 'Very Poor'
    elif(Market > 17 and Market <= 20):
        return 'Poor'
    elif(Market == 21):
        return 'Medium'
    elif(Market >=22 and Market <=23):
        return 'Good'
    elif(Market > 23):
        return 'Very Good'
		
Finally, the symbology was set to darker areas being more desrible than ligter areas.

## References:

Iqbal, F. (2015, January 28). Migration as a Way to Reduce Global Inequality. Brookings. https://www.brookings.edu/blog/future-development/2015/01/28/migration-as-a-way-to-reduce-global-inequality/

Devarajan, S. (2013, December 12). Migration as Structural Transformation. World Bank Blogs. https://blogs.worldbank.org/peoplemove/migration-structural-transformation

Crawley, H. (2018, October 30). Why Understanding the relationship between migration and inequality may be the key to Africa’s development. OECD Development Matters. https://oecd-development-matters.org/2018/10/30/why-understanding-the-relationship-between-migration-and-inequality-may-be-the-key-to-africas-development/

United Nations. (2020, May). Reduced Inequalities. United Nations Sustainable Development Goals. https://www.un.org/sustainabledevelopment/inequality/

## Data Sources:

Parks, Forestry and Recreation. (2012). Parks and Recreation Facilities. [Data File]. Toronto Open Data. Retrieved from https://open.toronto.ca/dataset/parks-and-recreation-facilities/

Social Development, Finance and Administration. (2020). Places of Worship. [Data File]. Toronto Open Data. Retrieved from https://open.toronto.ca/dataset/places-of-worship/

Social Development, Finance and Administration. (2020). Wellbeing Youth - Newcomer Settlement Services. [Data File]. Toronto Open Data. Retrieved from https://open.toronto.ca/dataset/wellbeing-youth-newcomer-settlement-services/

Social Development, Finance and Administration. (2020). Wellbeing Youth - Refugee Housing. [Data File]. Toronto Open Data. Retrieved from https://open.toronto.ca/dataset/wellbeing-youth-refugee-housing/

Social Development, Finance and Administration. (2021). Neighbourhoods. [Shapefile]. Toronto Open Data. Retrieved from https://open.toronto.ca/dataset/neighbourhoods/

Toronto Public Library. (2019). Toronto Public Library Branch Locations. [Data File]. Toronto Open Data. Retrieved from https://open.toronto.ca/dataset/toronto-public-library-branch-locations/

