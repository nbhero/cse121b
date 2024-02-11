/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")
const templeList = []

/* async displayTemples Function */
const getTemples = async () => {
    try {
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
      if (!response.ok) {
        throw new Error('Failed to fetch temple data');
      }
      const templeList = await response.json();
      // Assuming you have a global array variable called templeList declared in Step 3
      // Assign the fetched data to templeList
      templeList = templeList.temples;
      
      // Call the displayTemples function with the templeList
      displayTemples(templeList);
    } catch (error) {
      console.error('Error fetching temple data:', error);
    }
};
const displayTemples = (temples) => {
    // Assuming you have a global variable called templesElement where you want to display temples
    const templesElement = document.getElementById('temples');
  
    // Clear existing content
    templesElement.innerHTML = '';
  
    // Process each temple
    temples.forEach(templeList => {
      // Create article element
      const articleElement = document.createElement('article');
  
      // Create h3 element
      const h3Element = document.createElement('h3');
      h3Element.textContent = templeList.templeName;
  
      // Create img element
      const imgElement = document.createElement('img');
      imgElement.src = templeList.imageUrl;
      imgElement.alt = templeList.location;
  
      // Append h3 and img to article
      articleElement.appendChild(h3Element);
      articleElement.appendChild(imgElement);
  
      // Append article to templesElement
      templesElement.appendChild(articleElement);
    });
  };
  
  // Call the function to fetch and display temple data

/* async getTemples Function using fetch()*/

getTemples();  

/* reset Function */


/* filterTemples Function */




/* Event Listener */
