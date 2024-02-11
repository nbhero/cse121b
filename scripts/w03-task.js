/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2
};

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
    return add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers (){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
    return subtract(number1, number2);
}
document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);
/* Arrow Function - Multiply Numbers */
function multiply (number1, number2){
    return number1 * number2;
};

const multiplyNumbers = () => {
    let multiplyNumber1 = document.querySelector('#factor1').value;
    let multiplyNumber2 = document.querySelector('#factor2').value;
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
    return multiply(multiplyNumber1, multiplyNumber2);
};
document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function division (dividend, divisor) {
    return dividend / divisor;
};
const quotient = () => {
    let number1 = document.querySelector('#dividend').value;
    let number2 = document.querySelector('#divisor').value;
    document.querySelector('#quotient').value = division(number1, number2);
    return division(number1, number2);
}
document.querySelector('#divideNumbers').addEventListener("click", quotient);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", getTotalDue);

function getTotalDue() {
    // Get subtotal value entered by the user
    const subtotalInput = document.querySelector("#subtotal").value;
    const subtotal = parseFloat(subtotalInput);

    // Check if the membership checkbox is checked
    const membershipCheckbox = document.querySelector("#member");
    const isMembershipChecked = membershipCheckbox.checked;

    // Apply discount if membership is checked
    let total = "";
    if (isMembershipChecked) {
        total = subtotal * 0.8; // 20% discount
    } else {
        total = subtotal;
    }
    const totalSpan = document.getElementById("total");
    totalSpan.textContent = `$${total.toFixed(2)}`;
};
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
const arrayElement = document.querySelector('#array');
arrayElement.textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
const oddsElement = document.getElementById('odds');
oddsElement.textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
const evensElement = document.getElementById('evens');
evensElement.textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sumElement = document.getElementById('sumOfArray');
sumElement.textContent = sum;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
const multipliedElement = document.getElementById('multiplied');
multipliedElement.textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const value = numbersArray.map(number => number * 2);
const sumOfMultiplied = value.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.textContent = sumOfMultiplied;
