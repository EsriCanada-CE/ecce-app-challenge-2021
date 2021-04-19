# kNOwH2O: Tracking Water Quality Advisories and Improvements in Canadian Indigenous Communities #

## Highlighting the Problem ##

Clean water for drinking and sanitation are recognized by the United Nations (UN) as a universal human right[1,2]. A significant proportion of the global population, however, still lacks access to safe water resources. In Canada, the First Nations population has been subject to long-standing discrimination and mistreatment by the Federal Government and non-indigenous Canadians and continues to experience inequalities in their daily lives. Many Indigenous communities in Canada have been under Boil Water Advisories (BWA's) or Boil Water Orders (BWO's) for several years or even decades because of underfunded infrastructure projects, the implementation of water treatment systems that lack resiliency, and limited continual monitoring[3]. While other Canadians, including ourselves, get to enjoy clean water straight from the tap, several Indigenous communities in the country rely on bottled water to satisfy their needs. Frustration from being under a water advisory for long periods of time can, however, result in some Indigenous peoples consuming the poor-quality water and facing detrimental health effects[4]. Lack of access to clean water resources for all Indigenous peoples in Canada represents a systemic inequality that demands greater action from non-Indigenous Canadians and Provincial and Federal Governments to finally put an end to the problem. Ending all water quality advisories within the Indigenous communities of Canada represents a path towards improving equality within Canada and reconciliation between our Indigenous and non-Indigenous population. 

## Mission Statement ##

In Canada, Indigenous communities disproportionately experience limited access to clean water in comparison to Canadians living outside of Indigenous territories. In fact, boil water advisories occur 2.5 times more frequently in First Nations communities than other communities[3]. Recently, Canada's Auditor General Karen Hogan reported that the Federal Government will not reach its goal of ending water quality advisories for Indigenous peoples by March 2021. To align with the theme of this year's ESRI Canada Centres of Excellence (ECCE) App Challenge – the UN's Sustainable Development Goal (SDG) 10: Reducing Inequality – we created kNOwH2O to 1. Clearly communicate the problem Indigenous peoples in Canada are facing, 2. Create more discussion and focused action around the problem, and 3. Contribute to ending water quality advisories on Indigenous lands in Canada. 

https://globalnews.ca/video/7663473/auditor-general-karen-hogan-says-isc-needs-to-find-long-term-solutions-to-the-water-crisis-not-temporary-ones

For more information and resources, please see our ArcGIS Storymap. 

## Data Sources Used in App Development ##

We used open data from the Government of Canada that documents the locations of all Indigenous band offices and current and resolved drinking water advisories in First Nations communities in Canada. Both datasets are geospatial and can be easily loaded into ArcGIS Pro or ArcGIS Online as point locations within Indigenous territories. Each drinking water advisory point has several attributes, however, we elected to display the Advisory Status of each point with ArcGIS symbology to communicate to the users of our application which communities are currently under water quality advisories and which have had advisories revoked. The drinking water advisories data set is continually being updated by the Government of Canada which allowed us to configure our application to use new data as it becomes available. This offers the benefit of users, whether Indigenous Canadians, non-Indigenous Canadians, or government officials, being able to track progress on the problem and see in-real-time the water quality advisory statuses across all Indigenous communities in Canada.

Drinking Water Advisories in First Nations Communities: https://open.canada.ca/data/en/dataset/5f73fff7-2011-48b9-af52-ffb31e68539c

First Nations Locations: https://open.canada.ca/data/en/dataset/b6567c5c-8339-4055-99fa-63f92114d9e4#wb-auto-6

## App Functionality and Capabilities ##

kNOwH2O is an ESRI Dashboard application that displays the point locations of all Indigenous communities in Canada, and those where BWA's, BWO's, Do Not Consume (DNC) orders, and revoked water quality advisories exist. Importantly, revoked advisories would have previously been either a BWA, BWO, or DNC before progress was made on improving the status of the water quality. Users can interact with the map and adjust the map extent; the ESRI topographic base map, also, allows users to see the boundaries of Indigenous territories in Canada as the scale is enlarged. By geospatially demonstrating the number of water quality advisories that are active in Indigenous communities across Canada, users can better understand the inequality that is present within our country. 

Within the Dashboard application interface, instead of simply counting the number of a certain colour of point, users can see a count of each Advisory Status that is currently active. This information is communicated in two different formats: 1. By binning the data into categories with unique symbols, and 2. In a bar chart. Similarly, the water quality advisories are broken down by province in a widget within the application, allowing the user to see the same data but in a more granular format. By visualizing the data in different formats, users can note progress or regression in terms of reaching the goal of ending all water quality advisories on First Nations lands in Canada. 

kNOwH2O, also, filters the Advisory Status by date and community – users, with these two widgets, can see communities where advisories have been in place the longest. Concerningly, some Indigenous communities have had water quality advisories in place that span a full generation of their people[4]. Communities can be selected individually from within these widgets which will highlight them on the interactive Web map. Similarly, users can also query the dataset by community with a drop-down search function that has been embedded at the top of the application user interface. Finally, under details, users can find the email information of Government of Canada officials to express their concern regarding the speed with which this problem is being addressed at the federal level. 

## References ##
1. UN. (2010). The human right to water and sanitation. https://www.un.org/en/ga/search/view_doc.asp?symbol=A/RES/64/292
2. UN. (2016). The human rights to safe drinking water and sanitation. https://www.un.org/en/ga/search/view_doc.asp?symbol=A/RES/70/169
3. Baijius, W., & Patrick, R. J. (2019). “We don’t drink the water here”: the reproduction of undrinkable water for First Nations in Canada. *Water*, 11(5), 1079. 
4. Human Rights Watch. (2016). Make it Safe: Canada's Obligation to End the First Nations Water Crisis. https://www.hrw.org/report/2016/06/07/make-it-safe/canadas-obligation-end-first-nations-water-crisis