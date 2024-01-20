/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Bruno Rafael Torres Candido';
let currentYear = 2024;
let profilePicture = '../images/me2.jpg';
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElemenet = document.getElementById('food');
const yearElement = document.querySelector('#year'); // Note the # in the selector string to indicate the id attribute value. 🪲This syntax detail is often missed.
let imageElement = document.querySelector('img');
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Picture of ${fullName}`);
/* Step 5 - Array */
let favoriteFood = ['Lasagna','Pizza','Cake']
foodElemenet.innerHTML = favoriteFood;
let favFood = ['Pasta','Rice and Beans'];
foodElemenet.innerHTML += `<br>${favFood}`;
foodElemenet.innerHTML += `<br>${favoriteFood.shift()},<br>${favFood}`;
foodElemenet.innerHTML += `<br>${favoriteFood.pop()},<br>${favFood}`;

