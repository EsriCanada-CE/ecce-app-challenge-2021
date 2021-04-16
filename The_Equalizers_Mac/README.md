# **I-Cubed (Income Inequality Index)**

![I-Cubed Logo](images/I3_1.png)

Created by: *The Equalizers*

## Our Mission: 
Income inequality is a serious issue around the world, and Canada is not immune to it.
One of the first steps to dealing with a problem is visualizing the effects of that problem. I-Cubed is a way of exploring a small portion of this issue in Hamilton.

### Are areas with substantial income inequality getting easy access to the services they need?

This is something our group *The Equalizers* hopes to tackle with 'I-Cubed'. Every Canadian deserves easy access to the necessities for a healthy, happy, and fulfilling life. However, low income areas, or areas of cities with high income inequality, seem to be left out from the provision of essential services that ensure **everyone** can see their needs met. 
* **This means everyone should be able to *easily* access services for finding employment, to improve their financial situation, or get into a job they would prefer.**
* **This means everyone should be able to *easily* get to the necessary healthcare provider for their health needs -- regardless of what those needs are.**
* **This means everyone should be able to *easily* attend an educational institution, that will provide them the necessary tools for employment, or to fulfill their individual, intellectual curiosity.**

### What even *is* easy access to these services?
To us, easy access means you don't *need* a car to get to it. You should be able to easily walk, bike, or take public transportation to where you need to go. To us, this is the best way to deal with systemic inequalities involving access to services like education, employment assistance, and healthcare. **Identify areas that are unequal, look at the access to essential services in these neighbourhoods, and address access issues when they present themselves.**

### How I-Cubed addresses this process:
I-Cubed is a tool for members of the public or policy-makers to explore residential inequities throughout the city of Hamilton. DAs have been classified by their level of income inequality (using the well-established *[Gini Coefficient](https://www.investopedia.com/terms/g/gini-index.asp)*). This map of income inequality serves as a backbone for the other features of the App. I-Cubed displays various important services within the city that are crucial for lessening inequality: including access to emergency healthcare services, educational institutions to provide tools and skills for employment, and employment service resources that help individuals explore and obtain employment. **More importantly, I-Cubed displays how many of these services are available within the extent of the city of Hamilton being viewed on the User Interface**. If you zoom in or move around, the numbers will change.

The app includes several powerful and important widgets that help with the data exploration, and could serve as a guide for members of the public or policy-makers to lobby for additional service allocation in underserviced neighbourhoods. 

#### Change visible map layers:
* Various Census Dissemination Area layers, including income, population and income inequality data are available. 
* Additionally, you can check out layers detailing healthcare, education and employment centres in Hamilton. 
* Simply check the box beside the layer you want to display, or uncheck it to hide it.
* [Click for more info on this widget](https://doc.arcgis.com/en/web-appbuilder/create-apps/widget-layer-list.htm)

#### Learn more about the symbology of each layer:
* Is red high or low? Is blue good or bad? Check out the legend tab to get more context in how the data has been characterized or displayed on the map. 
* The legend will change or update depending on which layers you have displayed on the map.
* [Click for more info on this widget](https://doc.arcgis.com/en/web-appbuilder/create-apps/widget-legend.htm)

#### What services are near me?
* When you open this widget, click your mouse somewhere on the map to see what services are available within a certain distance (in km) from that spot. 
* Use the sliding-scale bar to adjust the search radius around your chosen location. The number of services available likely will change too. 
* [Click for more info on this widget](https://doc.arcgis.com/en/web-appbuilder/create-apps/widget-near-me.htm) 

#### Compare the data available:
* Do neighbourhoods that are highly unequal have a high median income? How many people live in the DAs with the highest median income? The Compare Widget allows you to display two layers, side by side.
* Click and drag the bar in the middle back and forth to compare the same spots on the map, with different data showing!
* [Click for more info on this widget](https://doc.arcgis.com/en/web-appbuilder/create-apps/widget-swipe.htm)

#### Share what you saw and learned:
* This widget gives you the ability to share the link to I-Cubed, or share it on social media.
* Google+, Facebook, Twitter and Email are all available.
* [Click for more info on this widget](https://doc.arcgis.com/en/web-appbuilder/create-apps/widget-share.htm)

### How was the inequality calculated?
Each Census DA's profile included counts of individuals (aged 15+) within that DA that were categorized by after-tax income brackets. These brackets ranged from <$5,000 CAD to >$150,000 CAD.
The *median* value of each of these brackets was used and assumed to be the income earned by each individual within that bracket. Let's show a simple scenario: 

Income: | $10 | $20 | $40
--------|-----|-----|-----
**Pop** | 10  | 5   | 5

**Neighbourhood's Total Income:** (10 x 10) + (5 x 20) + (5 x 40) = $400
**Neighbourhood's Total Population:** 10 + 5 + 5 = 20

Income Level | Fraction of Total Income
-------------|-------------------------
**$10** | 100/400 = 0.25
**$20** | 100/400 = 0.25
**$40** | 200/400 = 0.50

Income Level | Fraction of Total Population
-------------|-----------------------------
**$10** | 10/20 = 0.50
**$20** | 5/20 = 0.25
**$40** | 5/20 = 0.25

Income Level | Who is Richer?
-------------|---------------
**$10** | 1 - 0.50 = 0.50
**$20** | 1 - (0.50 + 0.25) = 0.25
**$40** | 1 - (0.50 + 0.25 + 0.25) = 0

**The Score for each bracket is calculated as: Income Proportion x (Population Proportion + 2 x Proportion who are more rich)**

Income Level | Score
-------------|-----------------
**$10** | 0.375
**$20** | 0.1875
**$40** | 0.125

**Total Score =** 0.6875

***Gini: 1 - 0.6875 = 0.3125***

[View another example, and from where this example was derived](https://www.educba.com/gini-coefficient-formula/)

### Where did the data come from?

#### Literature:
* Farris, F. A. (2010). The gini index and measures of inequality. American Mathematical Monthly, 117(10), 851–864. (https://doi.org/10.4169/000298910X523344)
* United Nations. (2015, October 21). Inequality Measurement. Development Issues, 2. (http://www.un.org/en/development/desa/policy/wess/wess_dev_issues/dsp_policy_02.pdf)

#### Map Data:
* [City of Hamilton Open Data Portal](https://open.hamilton.ca/)
	* Building Outlines
	* Educational Institutions
	* *Note: Employment Centres were manually digitized from Google Maps Results*

* [Scholars Geoportal](http://geo2.scholarsportal.info/)
	* Healthcare Facilities
	* *Note: This data is trimmmed data from original public Government of Ontario Data*

* [Statistics Canada](https://www.statcan.gc.ca/eng/start)
	* Dissemination Areas (Boundaries)
	* DA Income Data (2016)

* [ArcGIS Hub](https://hub.arcgis.com/datasets/esrica-tsg::canadian-population-dwelling-counts-by-dissemination-area-2016?geometry=-71.330%2C38.718%2C-122.307%2C83.584)
	* DA Population and Dwelling Data (2016)

#### Images & Media:

##### Story Map:
* The cover video: https://www.youtube.com/watch?v=5HZ1HdLZzEs
* The first video: https://www.youtube.com/watch?v=5HZ1HdLZzEs
* The second video: https://www.youtube.com/watch?v=BwSB__Ugo1s
* The section cover image: https://c1.wallpaperflare.com/preview/994/714/445/equal-lgbt-equality-pride.jpg

* The first image: https://wallpapercave.com/wp/wp7728108.jpg
* The second image: https://s3.ap-southeast-2.amazonaws.com/cdn.styleicons.com.au/wp-content/uploads/2020/04/28145730/iStock-1140300365-1536x1039.jpg
* The third image: https://wallpapercave.com/wp/wp2968502.jpg
* The fourth image: https://wallpaperboat.com/wp-content/uploads/2020/02/education-03.jpg

##### Demo Video:
* Gini Coefficient Video: https://www.youtube.com/watch?v=BwSB__Ugo1s&ab_channel=SingaporeDepartmentofStatistics
* Canada Inequality Graph Video: https://www.youtube.com/watch?v=zBkBiv5ZD7s&ab_channel=BroadbentInstitute

* First Image: https://www.axios.com/income-inequality-united-states-record-c78b1ff4-4b71-4a88-a890-db20ff8222f3.html
* Second Image: https://karmaimpact.com/have-have-nots-news-group-examines-wealth-inequality-ahead-of-2020-elections/
* Third Image: https://www.politico.com/interactives/2020/what-works-five-experiments-income-inequality/
* Hospital Image: https://www.nbcnews.com/news/us-news/kids-are-falling-why-fewer-children-have-health-insurance-now-n943561
* Group Standing Together Image: https://media.istockphoto.com/vectors/group-of-diverse-happy-people-standing-together-rear-view-vector-id1144149601?k=6&m=1144149601&s=170667a&w=0&h=AZ0eZue8JG60qPi8davDxOcfq4UBKT8pG-_Zx-CZm-8=
* Business Meeting Image: https://i1.wp.com/www.additudemag.com/wp-content/uploads/2017/02/Adult_Career_Lean-Incredible_Article_12330_Cartoon-businesspeople_ts-628995432.jpg
* Medical Staff Image: https://i.pinimg.com/originals/7c/07/54/7c075451aa96f9c01ee1b9118203df1d.jpg
* People and Chalkboard Image: https://img.freepik.com/free-vector/collection-teacher-people_23-2148534611.jpg?size=626&ext=jpg

### Meet the Team:

#### JunLi Hu
Currently, I am completing my last year of Honours Earth & Environmental Science Co-op Program with GIS specialization. I have a strong interest in GIS, Urban Planning, Hydrogeology and Environmental Assessment. I am planning to pursue the GIS Professional (GISP) certification. 
I have a good knowledge of Raster and Vector GIS, Advances in Geospatial Techniques, GIS Programming, Remote Sensing and Statistical Analysis. My independent study project used ArcGIS CityEngine for geodesign on McMaster Campus. 
Besides, I have gained extensive experience in GIS mapping and geoprocessing through the academic and co-op work terms.

#### Andrew Koberstadt
I am a 5th year undergraduate student in the Honours Environmental Science Co-op program while also pursuing a certificate in GIS. 
I have a huge interest in GIS and its applications in environmental modelling and sustainable future developments. The App Challenges provides an opportunity to challenge myself and apply all the skills I’ve learned throughout the years. 
I am also looking for a way to distinguish myself from others and the App Challenge is the perfect way to do that! Additionally, I enjoy playing sports and spending time outside.

#### Daniel Van Veghel
I am a 4th year Bachelor of Arts & Science student at McMaster and have significant interests in Urban Planning, as well as Travel Behaviour and Transportation Geography. 
My undergraduate thesis has been exploring downtown revitalization in my hometown to combat urban sprawl development on the city’s periphery. 
I am nearing completion of my GIS Certificate through the School of Earth, Environment and Society at Mac and am excited to use all of the skills learned in courses from desktop and online applications of ArcGIS, in my first App Challenge experience!

*This App was constructed for the 2021 ESRI ECCE App Challenge*
