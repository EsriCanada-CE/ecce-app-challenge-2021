ECCE App Challenge 2021
Team London Conformal Conic
---
# Targets for Reducing Inequality in Canada

## An ArcGIS Online Web App

### App Information
	This app follows the targets and indicators of the United Nations Sustainable Development Goals (SDG’s) [Goal 10](https://sdgs.un.org/goals/goal10) – reducing income inequality, to examine patterns of income inequality in Canada. Specifically, this app shows census subdivisions in Canada that have grown less than the national average in median income from 2001-2016, prior to the adoption of the Sustainable Development Goals. This app is presented in the style of a dashboard, where the web map featured on the right displays census subdivisions, bordered by supplementary features and information like infographics and charts that users can view and interact with to learn about economic growth and income inequality in Canada.

### Data Description
	Per Sustainable Development Goals [Goal 10.1](https://sdgs.un.org/goals/goal10), to grow the income of the lower 40 per cent of the population at a rate greater than the national average, this app shows the lowest four decile census subdivisions by 2001 median income in Canada, and whether or not each one has grown more than the national average median income growth by 2016. Each census subdivision feature contains the attributes:
1. Census subdivision name
1. Province
1. 2001 median income
1. 2016 median income
1. Net median income change 2001 – 2016
1. Whether or not 2001 median income was in the lower four deciles (TRUE/FALSE)
1. Whether or not the net median income change is less than the national average (TRUE/FALSE/NA)

	Using 2001 and 2016 census median income data, 2001 median income deciles and average median income growth for all census subdivisions was calculated. Census subdivision features that are in the lower 4 deciles of 2001 median income where the net median income change 2001-2016 is greater than the average net median income change of all census subdivisions can be interpreted as reducing income inequality in Canada. Conversely, where if a lower 4th decile census subdivision’s net median income change is less than the national average, this could be a sign of exacerbated income inequality.
            
### App Interface
 
#### Web map tools:
	* The default map zoom and home extent buttons allow the user to navigate the web map
	* About (information) - provides infographic detailing the UN 17 Sustainable Development Goals Goal 10 - Reduce Inequality, around which this app was designed
	* Search – allows the user to search map features (census subdivisions) by name. Map view is automatically centred on the map feature searched, and it’s attributes displayed
	* Swipe - allows the user to view and compare how median income has changed from 2001 and 2016 by census subdivision

#### Dashboard widgets
	* On startup – a welcome splash message, providing background and instructing users to zoom and select to view and interact with map features
	* About – displays background app information, detailing the United Nations 17 Sustainable Development Goals, and specifically goal 10, relevant to this web app
	* Infographic 1 – Infographic giving the proportions of lower income census subdivisions growing less vs more than the national average in terms of median income. This provides the user with an at-a-glance national summary of the map features by count. This feature can also double as a legend, reflecting the symbology and categories of the primary map features
	* Infographic 2 – displays the average median income growth from 2001-2016 of all census subdivisions. This can be useful as a reference when viewing individual census subdivisions’ median income
	* Bar chart - displays the average median income change from 2001-2016 by province.
	* Layers - allows the user to view 2001 and 2016 median income census subdivisions layers
