
// Here we create a card to show the different areas of interests

export function createAreaOfInterest(data=null, cluster=null){

    let featureName;
    let src;

    if (data["Name"]){
        featureName = data["Name"]
        src = "../../js/images/desert_sample.JPG"
    }
    else if(cluster){
        featureName = data // Already given name
        src = "../../js/images/grocery_location_sample.JPG"
    }
    else{
        featureName = "Sample Text"
        src = "../../js/images/locator_1.png"
    }


    // The Card
    let card = document.createElement("div")
    card.classList.add("card")

    // The image for the card
    let img = document.createElement("img")
    img.src = src
    img.style.width = "100%"

    // The container for text
    let container = document.createElement("div")
    container.classList.add("card-text")
    
    // The title 
    let title = document.createElement("h4")
    title.innerHTML = featureName

    container.appendChild(title)
    card.append(img, container)

    return card
}