# Environmental Racism: Examining the Disproportional Impact of Industry on Drinking Water on Reserves in Ontario

# About Us
Matthew Devine and Rachel Thevenard met as part of Group 8 for a class project, which became the inspiration for their ECCE team name, Team Gr8. Matthew and Rachel are two University of Waterloo graduates pursuing Diplomas of Excellence in GIS. They are both non-Indigenous, which is important to acknowledge in the context of their project. This project examines a serious and long-standing human rights tragedy: the disproportionate impact of industry on the lives of Indigenous peoples living on reserve in Canada, specifically drinking water quality.

# Mission Statement
The Web App, built with Esri's ArcGIS Experience Builder, intends to highlight the environmental racism experienced by Indigenous communities living on reserves in the territory now known as Ontario.  “Environmental racism” is a term coined by Benjamin Chavis, a Black civil rights leader from the US.  He defined environmental racism as:

> Racial discrimination in environmental policy-making, the enforcement of regulations and laws, the deliberate 
> targeting of communities of colour for toxic waste facilities, the official sanctioning of the life-threatening 
> presence of poisons and pollutants in [racialized] communities, and the history of excluding people of colour 
> from leadership of the ecology movements.

We hope that this app can serve as a starting point for further learning about this issue, and that it motivates individuals to hold their elected representatives to account. 

# How the app works
The app uses a scrolling format to display multiple web maps, multimedia, and information. It includes bookmarks to zoom to particular map extents and learn more about the nature of the information displayed. The maps include pop-ups, which highlight the important attributes or history of a feature. Some maps include a legend directly on or near the map, to aid with the viewing experience. Certain blocks of text have hyperlinks to display additional external content. 

# Getting Started
Installing ArcGIS Experience Builder and Loading the Application

1. Installing ArcGIS Experience Builder

	Follow the instructions at [this link](https://developers.arcgis.com/experience-builder/guide/install-guide/).
	
	What you will need (The downloads are available at the above link): 
	- An install of Node.js
	- A download of the Experience Builder client and server.
	- An ArcGIS Developers Account


2. Donwload the Zipped Application

	- Open terminal or command prompt and navigate to the drive location of the experience builder folder "server" that you downloaded. Run the following command: 

	    npm start
      
	- In an Internet window, enter the localhost server and create a sample experience (just any blank template will do!).
	- Navigate to the drive location of the experience builder folder "server" that you downloaded.
	- In the server folder navigate to the following directory: 
	
		src\public\apps
		
	- Put the extracted application folder in this location
	- Delete all files except the resources folder and the config.json file. 
	- Ensure that the resources folder and the config.json file are in a folder of their own.
	- From the folder of the sample experience you created, copy the info.json file and paste it into the new applcation folder.
	- Open the info.json file, and change the id to the name of the folder containing the resources folder and config.json. 
	- rerun the npm start command in the server folder in terminal or command prompt, and the application should be available. 


