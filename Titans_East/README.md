# inEQUALITY: Reduce Income Inequalities
## Mission Statement 

Indicated by the UN, Sustainable Development Goals Target 10.1 is to “progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average by 2030” [1], in another word, to reduce income inequality and share prosperity. However, Canadians are facing challenges since the outbreak of COVID-19. Uneven recovery is amplifying economic disparities that existed pre-pandemic and widening the income gap, as working-class Canadians going deeper into debt while some remaining at the top prosper. Therefore, reducing income inequality is one of the top priorities for Canada in 2021.

Community and social services that support people to recover from hardship are essential at this moment. However, within Toronto - the largest and most populated city of Canada, some offices or programs are closed or impacted, and visits to residential programs are restricted to help protect residents and staff from the pandemic [2]. In order to help adjust strategies and allocate resource effectively, we would like to build an app reflecting which communities may have more people dealing with job losses, debt, eviction and food insecurity, and helping people to locate the nearest available programs and services.


## App Description

With the help of **inEQUALITY** app, we strive to provide the highest quality of care and support to individuals who are experiencing financial hardships based on the personal type of need. Through utilizing various functions of our app, you will be able to identify the deprivation level of neighbourhoods, gain ample demographic information and support on the different types of help and services locations that are provided by the City of Toronto. Adult educational programs, affordable housing, food banks, shelters, financial services, and employment resources are examples of quality spatial information provided by our app which can help you through the rough patches of your life to achieve a better future.


## App Features

### Help Near Me

Users can click the "Help Near Me" icon to find services within a predefined distance of your chosen location. Users can click on "Find my location" icon to allow the application to automatically find the current location, or entre your address manually. If you value your privacy and do not prefer to reveal your location, postal codes can also be utilized in this tool. Click on "Set location" to manually select a location on the map. After chosing the address, users can view the available help services within a customized distance and get directions.

### Filter Services
The "Filter Services" tool allows users to locate service types based on their needs and limits the visibility of features that are not needed/selected. Select a service type in this tool, and only the service locations that meet this criteria will be visible on the map. Make sure the Programs and Services layer is on.

### Toronto Neighbourhoods Deprivation Survey
A voluntary Toronto Neighbourhood Deprivation Survey (TNDS) is available in the About widget. Within the survey, users are able to type in their postal code and help to pin their locations on the TNDS Results layer. The survey results will show up on the map after survey submissions and can be used as additinal data for neighbourhoos deprivation analysis. The answers to questions related to TNDI are required, while selections of programs and services by users are optional. The results will reflect the most recent needs from each neighbourhood spacially.

### Legend
The "Legend" icon allow users to differentiate the types of service locations and the values of TNDI on the map.

### List
Users can view the list of operational layers and toggle them on and off by using the "Layer List" tool .

## Calculations 
### Toronto Neighbourhood Deprivation Index (TNDI)
The TNDI is calculated based on 9 variables that associates with three dimension of deprivation: residential instability, Financial difficulties, and situational vulnerability. Our TNDI is inspired by Canadian Index of Multiple Deprivation (CIMD)[3].

**Residential instability:** Residential instability relates to both housing and familial characteristics, such as the proportion of persons living alone and the proportion of housing that are rented instead of owned.

`Renter = Rented Dwellings / Total Households ` 

`Alone = Household Size - 1 Person / Total Households`
 
**Financial Difficulties:** Financial Difficulties takes in the considerations of working status and income. We used the proportion of the unemployed population (aged 15+) and the proportion of the low-income population. 

`Unemployed = Unemployed, aged 15+ / Total Labour Force, aged 15+ `

`LowIncome = [(Household income $0 - $19999) + (Household income $20000 - $39999)] / Total Households`

**Situational vulnerability:** Situational vulnerability refers to social-demographic and ethnic factors. Here we included the proportion of the population identidying as Aboriginal, the proportion of visible minority, the proportion of the recent immigrants, the proportion of the population aged 65 and older, and the proportion of population aged 25-64 without a certificate, diploma, or degree. 

`Aboriginal = Aboriginal Identities / Total population`

`VisMinority = Total visible minority / Total population`

`RecentImm = Total recent immigrant / Total population `

`Senior Population = Total population aged 65+ / Total population `

`NoCertificate = Total population of people aged between 25-64 with no certificate, diploma or degree / Total population, aged 24-64`


**Standardized Data in Rates per 1000 People**: The calculated proportion of each indicator were converted to rate per 100 people to provide direct comparison.


` The Rate of each Indicator * 1000 `


**TNDI**: Each indicator is equally weighted.

` TNDI = (Renter + Alone + Unemployed + LowIncome + Aboriginal + VisMinority + RecentImm + SeniorPop + NoCertificate)/ Totol Number of Indicators `


## Data Sources

### Geospatial data

Toronto Open Data:
- Neighbourhood Boundaries: https://open.toronto.ca/dataset/neighbourhoods/
- Life Skills Training: https://open.toronto.ca/dataset/wellbeing-youth-life-skills-training/
- Financial Services: https://open.toronto.ca/dataset/wellbeing-youth-financial-services/
- Employment Resources: https://open.toronto.ca/dataset/wellbeing-youth-employment-resources/
- Educational Support: https://open.toronto.ca/dataset/wellbeing-youth-educational-support/
- Alternative Adult Education: https://open.toronto.ca/dataset/wellbeing-youth-alternative-adult-education/
- Adult Education Upgrading: https://open.toronto.ca/dataset/wellbeing-youth-adult-education-upgrading/
- Affordable Housing: https://open.toronto.ca/dataset/wellbeing-youth-affordable-housing-access/
- Supportive Housing: https://open.toronto.ca/dataset/supportive-housing-locations-city-operated/
- Homeless Shelter Locations: https://open.toronto.ca/dataset/hostel-services-homeless-shelter-locations/
- Housing Eviction Help: https://open.toronto.ca/dataset/wellbeing-youth-housing-eviction-help/


ArcGIS Online Enrich:
- 2020 Total Population
- 2020 Tenure: Total Households
- 2020 Tenure: Rented
- 2020 Household Size - Total Households
- 2020 Household Size - 1 Person
- 2020 Labour Force Household Population 15 Years or Over
- 2020 Labour Force - Unemployed
- 2020 Total Population 65-69 Years
- 2020 Total Population 70-74 Years
- 2020 Total Population 75-79 Years
- 2020 Total Population 80-84 Years
- 2020 Total Population 85 or Older
- 2020 Visible Minority Total Population
- 2020 Total Recent Immigration
- 2020 Aboriginal Identity
- 2020 Education Household Population 25 to 64 Years
- 2020 25-64 Edu No Certificate, Diploma or Degree
- 2020 Household Income - Total Households (Current Year $)
- 2020 Household Income $0 - $19999 (Current Year $)
- 2020 Household Income $20000 - $39999 (Current Year $)
- Food Bank locations_Mhayes by mhayes_esri

## Team
### Tianqi Qu, (qut8@mcmaster.ca)
Tianqi is a second-year undergraduate student at McMaster University studying Earth and Environmental Sciences and GIS. Currently working as a junior environmental scientist at CEPro Energy and Environmental Services Inc. with sound experience of field work and project management.

### Farbod Tabaei, (hosseinf@mcmaster.ca)
Farbod is a fourth-year undergraduate student of Environmental studies at McMaster University while pursuing a degree in GIS. He is also interested in sustainable practices and looks forward to specializing in climate change studies with a focus on sustainability and impact adaptations.

### Venora(Yuran) Jin, (jiny53@mcmaster.ca)
Venora is a fourth-year undergraduate student studies in the department of Biology and Geographic Information System. She is also interested in ecology and hoping to contribute to habitat conservation in the future. 

## References
[1] UN Department of Economic and Social Affairs. Goals 10 - Reduce inequality within and among countries. https://sdgs.un.org/goals/goal10

[2] Ontario Ministry of Children, Community and Social Services. Programs and services. https://www.mcss.gov.on.ca/en/mcss/programs/

[3] Statistics Canada. The Canadian Index of Multiple Deprivation. https://www150.statcan.gc.ca/n1/pub/45-20-0001/452000012019002-eng.htm?fbclid=IwAR2jOfrn2xIB2hzUTmFmvhum85wTq7a2qoITpCoZiQxMAkU4PerjH3WkIgU
