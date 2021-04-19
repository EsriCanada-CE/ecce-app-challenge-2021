# App: INcreaseEquality
Main app: https://experience.arcgis.com/experience/31ff11c11bbf4d1fb959b46884889f9a

Making-of app: https://experience.arcgis.com/experience/adf4eed8b9284d16aba3483f33880016

# Mission statement
Inequality has been on the rise all around the world for decades. In 2015, the United Nations announced 17 goals for sustainable development, among which Goal 10 aimed to reduce inequality within and among countries [1]. Generally, inequality exists among income, health, education, regions, well-being, and more. 

In Canada, over 80% of the population lives in urban areas, including Toronto, Montreal, Vancouver, and Calgary. The high degree of urbanization triggers rising inequality in our cities. Over the last two decades, the provinces of Alberta, British Columbia, Ontario, and Quebec, have been showing a high Gini index, which stands for a high level of inequality [2]. Specifically, reported by the Chartered Professional Accountants of Canada in 2017, Toronto, Montreal, Vancouver, Calgary, and Ottawa-Gatineau, were listed as the top four Census Metropolitan Areas with a high Gini index over the years [3]. 

Our app, INcreaseEquality, focuses on mapping the inequality in the city of Calgary. With the app, users can explore the distribution of gender, age groups, income levels, and immigration types within the city, and compare them with distances to public facilities such as schools, libraries, art, playground equipment, and recreation facilities. The data was put into a Discrete Global Grid System (DGGS), which makes the data ready for analysis at different resolution levels. Based on the mapped patterns observed and the statistical analysis, decisions related to urban design can be made to help INcreasing the Equality in the city of Calgary and aim for a better future.

To learn about how this project was developed, and the technologies used, please visit our [making-of web application](https://experience.arcgis.com/experience/adf4eed8b9284d16aba3483f33880016). 

# Data sources
## Data over the country
*From Canada's Open Government Portal under the Open Government Licence - Canada*
 * Gini coefficients of the market, total and after-tax income  https://open.canada.ca/data/en/dataset/6756ff60-5b5f-4ac7-8317-3097582167d2
 * Distribution of after-tax income, individuals    https://open.canada.ca/data/en/dataset/b189e8a3-2f25-4ce4-bae2-1b2bb125a20d

## Data in Calgary
*From the City of Calgary’s Open Data Portal under the Open Government Licence - city of Calgary*
 * Census by ward 2016    https://data.calgary.ca/Demographics/Census-By-Ward-2016/4c8i-ruhm
 * 2016 census of Canada, household income  https://data.calgary.ca/Demographics/2016-Census-of-Canada-Household-Income/wj3a-wgmh
 * 2016 census of Canada, immigrant admission    https://data.calgary.ca/Demographics/2016-Census-of-Canada-Immigrant-Admission-Category/frfp-tka5
 * 2016 census of Canada, country of birth of immigrants    https://data.calgary.ca/Demographics/2016-Census-of-Canada-Country-of-birth-of-immigran/sebe-fds7
 * 2016 census of Canada, citizenship    https://data.calgary.ca/Demographics/2016-Census-of-Canada-Citizenship/hj7c-iwum
 * Calgary public library locations and hours    https://data.calgary.ca/Recreation-and-Culture/Calgary-Public-Library-Locations-and-Hours/m9y7-ui7j
 * School locations    https://data.calgary.ca/Services-and-Amenities/School-Locations/fd9t-tdn2
 * Public art    https://data.calgary.ca/Recreation-and-Culture/Public-Art/2kp2-hsy7
 * Playground equipment    https://data.calgary.ca/Recreation-and-Culture/Playground-Equipment/bdu9-amk8
 * Recreation facilities    https://data.calgary.ca/Recreation-and-Culture/Recreation-Facilities/hxfu-6d96

# Technologies
 * Open-sourced platform Jupyter Notebooks using the Python programming language. Binder was used to present and distribute the python code in an interactive manner.
 * Geospatial Python packages: Geopandas, Fiona and Shapely.
 * H3-py library: a python binding for the H3 DGGS library.
 * Esri technologies -- ArcGIS Python API, ArcGIS Online, Dashboard, Web App Builder, and Experience Builder.
    
# Adoption of Discrete Global Grid Systems
When working with lots of different types of data coming from different sources, a common standardized framework is needed to organize and integrate the data into a spatial platform. A Discrete Global Grid System (DGGS) is a proper candidate for this task, being an informational referencing system. A DGGS uses a hierarchical tessellation of uniform cells, to partition and address the entire Earth’s surface. These systems have demonstrated their power in data integration, multi-scale analysis, consistent observations, accurate analysis, and parallel computation [4,5]. Over the years, a variety of state-of-the-art DGGS implementations have been proposed, such as H3, DGGRID, OpenEAGGR and PYXIS [6-9]. To develop our app, the open-sourced DGGS library H3 was used.

# Data processing with H3 library
Please find the Jupyter Notebooks in the [notebook folder](https://github.com/Erin-1919/ECCE-App-Challenge-2021-UCalgary/tree/main/notebooks) of this repository. The folder includes an environment file for creating a conda environment to run the jupyter notebook. You may run the following command:

`conda env create -f environment.yml`

Other ways to interact with the Jupyter Python code:
* Visit our [making-of web application](https://experience.arcgis.com/experience/adf4eed8b9284d16aba3483f33880016) to see a representation of the jupyter notebook. 
* Visit [Binder](https://mybinder.org/v2/gh/mpadillaruiz/jupyterTest/HEAD) for a complete jupyter working environment where you will be able to interact with the code.

# App description and features
## Motivation
The first part of our app presents our motivation, including the quote of the 10th goal announced by the United Nations; a set of interactive maps of the Gini index over the country in years 2000, 2005, and 2010, and the app purpose: mapping the current inequality in Calgary to increase awareness and plan for ways to INcrease the Equality in the city.

## App body
Following an overview of Calgary’s demographic information, our app has three main functionalities:

### A Glance at Calgary
This feature allows users to visualize the household income distribution among the city, at different DGGS resolutions. Users can zoom in and out over the interactive web map to have an overall understanding of the city income pattern. Besides, users can turn on and off five layers of public facilities to explore their locations. Note that these layers only show up above resolution level 8. Economic information of the city of Calgary can be viewed on the left panel. 

### Wards in Calgary
This feature allows users to query basic information for each of the 14 wards in Calgary. The reported information includes the portion of gender, age, income level, and inmigration types; the number of public schools, public libraries, public art, playground equipment, and recreation facilities; and the countries of top birth of immigrants. Users can click on the ward(s) on the left panel, and the interactive map will automatically zoom to the ward(s) geographic extent. The pie charts of demographic information, and the number of public facilities will update accordingly. Users are also allowed to zoom in and out over the web map to query the area of interest. 

### Equality or Inequality?
This feature allows users to compare the average household income against the distances to public facilities. The summary widget provides information on average distances to five types of public facilities. Users can choose among the wards to understand the information for each of them. The swipe widget offers the opportunity to compare the average household income to the distances to each of the five types of public facilities. Users are suggested to open up the layer legend to get a better idea of the color representations. The chart widget allows users to plot the distances to the five types of public facilities against the average income, citizen count, and immigrant count, within a tunable area of interest. 

## Graphical facts
In the end, we present the regression lines with the confidence interval fitted to the relationships among average income and distances to five types of public facilities, count of citizens, count of ownership, and count of immigrants. The process was done in the R environment. Results showed that the increasing average income corresponded to less distance to public facilities, a growing number of citizens and ownership, and a decreasing number of immigrants.

# References
1. UN. "Reduce inequality within and among countries." https://sdgs.un.org/goals/goal10 (accessed 28 March, 2021).
2. Wikipedia. “Gini coefficient.” https://en.wikipedia.org/wiki/Gini_coefficient (accessed 30 March, 2021).
3. F. Fong, "Income inequality in Canada: The urban gap," 2017. [Online]. Available: https://www.cpacanada.ca/-/media/site/operational/sc-strategic-communications/docs/g10363-sc_income-inequality-in-canada---the-urban-gap_final_eng.pdf
4. OGC. "Topic 21: discrete global grid system abstract specification." http://www.opengis.net/doc/AS/dggs/1.0 (accessed 15 November, 2019).
5. T. Alderson, M. Purss, X. Du, A. Mahdavi-Amiri, and F. Samavati, "Digital earth platforms," in Manual of digital earth, H. Guo, M. Goodchild, and A. Annoni Eds. Singapore: Springer, 2020, ch. 2, pp. 25-54.
6. Uber. "H3: a hexagonal hierarchical geospatial indexing system." https://github.com/uber/h3 (accessed 25 November, 2019).
7. K. Sahr. "DGGRID version 7.05." https://github.com/sahrk/DGGRID (accessed 12 March, 2020).
8. OpenEAGGR. "Open Equal Area Global GRid." Riskaware Ltd. https://github.com/riskaware-ltd/open-eaggr (accessed 26 November, 2019).
9. GGS. "Global Grid Systems." https://www.globalgridsystems.com (accessed 20 November, 2019).
 
