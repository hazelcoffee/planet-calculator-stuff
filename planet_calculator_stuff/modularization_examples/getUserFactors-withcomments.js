// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();

// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./gravityFactors.js');

// Define a function to show user factors based on input type and value
function showUserFactors(factorType, factorValue, factorObj) {
    // Initialize an object to hold the results
    let userResults = {};
    // Declare a variable to hold the unit of measurement
    let measurement;
    // Iterate over each item in the gravityFactors object
    for (let item in factorObj) {
        // Calculate the factor multiplied by the input value and round it to two decimals
        userResults[item] = parseFloat((factorValue * factorObj[item]).toFixed(2));
    }
    // Switch case to determine the measurement unit based on factor type
    switch (factorType) {
        case "weight":
            measurement = "kg";
            break;
        case "jump":
            measurement = "cm";
            break;
        default:
            measurement = "units";
    }
    // Iterate over the results and log each one
    for (let item in userResults) {
        console.log(`Your ${factorType} on ${item} is ${userResults[item]}${measurement}`);
    }
}

// Define a function to get user inputs for factor type and value
function getUserFactors() {
    // Prompt the user to enter the type of factor they want to calculate
    console.log("Enter factor you want to calculate ('weight', 'jump')");
    const factor = prompt(">>");
    // Prompt the user to enter the numerical value of the factor
    console.log("Enter value of factor as a number");
    const value = prompt(">>");
    // Call the showUserFactors function with the user inputs and the gravity factors
    showUserFactors(factor, value, gravityFactors);
};

// Expose the gravityFactors and getUserFactors globally
global.gravityFactors = gravityFactors;
global.getUserFactors = getUserFactors;
