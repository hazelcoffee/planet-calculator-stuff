// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./utils/earthGravityFactors.js');

// Define a function to show user factors based on input type and value
function showUserFactors(type, value) {

    // Initialize an object to hold the results
    let results = {};
    // Declare a variable to hold the unit of measurement
    let measurement;
    // iterate gravity Factors and assign to results
    for (let planet in gravityFactors) {

        // Calculate the factor multiplied by the input value and round it to two decimals
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }

    // Switch case to determine the measurement unit based on factor type
    switch (type) {
        case "jump":
            measurement = "cm";
            break;
        // other cases
        case "weight":
            measurement = "kg";
            break;
        default:
            measurement = "units";
    }

    // Iterate over the results and log each one
    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planet]} ${measurement}`);
    }

}
function getUserInput() {
    console.log("Enter your measurement type ('jump' or 'weight')");
    const type = prompt(">> ");
    console.log("enter the value (as a number)");
    const value = prompt(">> ");
    // prompt them for the type
    // store their input in a variable
    // prompt them for the value
    // store their input in a variable
    showUserFactors(type, value);
    // call the showUserFunction and
    // pass the input variables as parameters
}
getUserInput();
// expose the getUserInput functionh globally
global.getUserInput = getUserInput;
global.showUserFactors = showUserFactors;
// Define a function to get user inputs for factor type and value
// Prompt the user to enter the type of factor they want to calculate
// Prompt the user to enter the numerical value of the factor
// Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
