/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Bruno Rafael",
    photo: "./images/me2.jpg",
    fav_foods: ["Lasagna", "Pizza", "Tacos"],
    hobbies: ["Play soccer", "Play videogames","Watch movies", "Study"],
    placesLived: []
}
/* Populate Profile Object with placesLive objects */
document.querySelector("#places-lived").textContent = myProfile.placesLived.push(
    {
        place:"Ceara, Brazil",
        length: "20 years"
    },
    {
        place:"Japan",
        length: "2 years"
    },
    {
        place:"Sao Paulo, Brazil",
        length:"3 years"
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
let img = document.getElementById("photo");
img.src = myProfile.photo
img.alt = myProfile.name

/* Favorite Foods List*/
function appendFavoriteFoods(){
    const ulElement = document.getElementById('favorite-foods');

    myProfile.fav_foods.forEach(food => {
        const liElement = document.createElement('li');
        liElement.textContent = food;

        ulElement.appendChild(liElement);
    })
}
appendFavoriteFoods();

/* Hobbies List */
function appendHobbies() {
    const ulElement = document.getElementById('hobbies');

    myProfile.hobbies.forEach(hobby => {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;

        ulElement.appendChild(liElement);
    })
}
appendHobbies()
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    // Create <dt> element for place
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    // Create <dd> element for length
    let dd = document.createElement("dd");
    dd.textContent = place.length;

    // Append <dt> and <dd> elements to the <dl> element with ID "places-lived"
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
