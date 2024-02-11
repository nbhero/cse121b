const templesElement = document.getElementById("temples");
let templeList = [];

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let a_element = document.createElement("article");

        let h3_element = document.createElement("h3");
        h3_element.textContent = temple.templeName;

        let img_element = document.createElement("img");
        img_element.src = temple.imageUrl;
        img_element.alt = temple.location;

        templesElement.appendChild(a_element);
        a_element.appendChild(h3_element)
        a_element.appendChild(img_element);
    });
}

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    try {
        if (response.ok) {
            const templeList = await response.json();
            displayTemples(templeList);
        }
    } catch (error) {
        console.error('Error fetching temple data:', error);
      }      
};
getTemples()
console.log(templeList);

const reset = () => {
    
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

const filterTemples = (temples) => {
    reset()
    let filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated < new Date(1950, 0, 1))));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.error("No matching case found!")
            break;
    }
}
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});