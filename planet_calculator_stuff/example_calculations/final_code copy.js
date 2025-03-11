// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// import earthGravity Factors
const earthGravityFactors = require('./utils/earthGravityFactors.js');
// import alienGravityFactors
const alienGravityFactors = require('./utils/alienGravityFactors.js');
// Function showUserFactors should have factorType (weight, jump, or pushups)
// factorSystem (metric or imperial)
// factorValue (amount the user inputs for the type
// factorPlanets (choice of solarSystem object to test)
function showUserFactors(factorType, factorSystem, factorValue, factorPlanets) {
    const userResults = {};
    for (let planet in factorPlanets) {
        userResults[planet] = parseFloat((factorValue * factorPlanets[planet]).toFixed(2));
    }
    let measurement;
    if (factorType === "weight" && factorSystem === "metric") {
        measurement = "kg";
    } else if (factorType === "jump" && factorSystem === "metric") {
        measurement = "cm";
    }
    else if (factorType === "weight" && factorSystem === "imperial") {
        measurement = "lbs";
    } else if (factorType === "jump" && factorSystem === "imperial") {
        measurement = "in";
    }
    switch (factorUnit) {
        case '1':
            measurement = 'cm';
            break;
        case '2':
            measurement = 'kg';
            break;
        case '3':
            measurement = 'in';
            break;
        case '4':
            measurement = 'lbs';
            break;
        default:
            measurement = factorUnit;
            break;
    }
    for (let planet in userFactors) {
        console.log(`Your ${factorType} on ${planet} is ${userFactors[planet]}${measurement}`);
    }
}
function getUserFactors() {
    console.log("What would you like to compare to another planet? (ex: 'Jump height', 'weight', 'amount of pushups'");
    const factorType = prompt(">>");
    console.log("Enter what unit you want to measure as a number choice (' enter 1 for cm', 'enter 2 for kg', 'enter 3 for in', 'enter 4 for lbs')");
    const factorUnit = prompt(">>");
    console.log("Enter the earth value of your measurement: ");
    const factorValue = prompt(">>");
    console.log("Enter the group of planets you want to compare your ratio: ('1: solar system', '2: alien planets')");
    const factorChoice = prompt(">>");
    let factorPlanets;
    switch (factorChoice) {
        case '1':
            factorPlanets = gravityFactors;
            break;
        case '2':
            factorPlanets = alienFactors;
            break;
        default:
            factorPlanets = gravityFactors;
    }
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
}
global.getUserFactors = getUserFactors;