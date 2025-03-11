const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/gravityFactors.js');
const alienFactors = require('./utils/alienFactors.js');

function getUserFactors() {
    console.log("What would you like to compare to another planet? (e.g., 'Jump height', 'weight', 'amount of pushups')");
    let factorType = prompt(">> ").trim().toLowerCase();

    console.log("Enter the unit you want to measure as a number choice ('enter 1 for cm', 'enter 2 for kg', 'enter 3 for in', 'enter 4 for lbs')");
    let factorUnit = prompt(">> ").trim();

    let factorValue;
    while (true) {
        console.log("Enter the earth value of your measurement: ");
        factorValue = parseFloat(prompt(">> ").trim());
        if (!isNaN(factorValue)) {
            break;
        } else {
            console.error("Invalid input for factor value. Please enter a numeric value.");
        }
    }


    console.log("Enter the group of planets you want to compare your ratio with ('enter 1 for solar system', 'enter 2 for alien planets')");
    let factorChoice = prompt(">> ").trim().toLowerCase();

    let factorPlanets;
    switch (factorChoice) {
        case '1':
            factorPlanets = gravityFactors;
            break;
        case '2':
            factorPlanets = alienFactors;
            break;
        default:
            console.error("Invalid choice. Defaulting to solar system.");
            factorPlanets = gravityFactors;
    }

    // Call the showUserFactors function with the user type and value inputs and the gravity factors
    // showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
    // return the factors instead of passing them
    return { factorType, factorUnit, factorValue, factorPlanets };
}

module.exports = getUserFactors;
