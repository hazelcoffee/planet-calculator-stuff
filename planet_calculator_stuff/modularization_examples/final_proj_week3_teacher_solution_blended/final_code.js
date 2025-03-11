//// This code doesn't work because the variables are block scoped to the while loops,
//// so the variables should be declared at the top of the function


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
    for (let planet in userResults) {
        console.log(`Your ${factorType} on ${planet} is ${userResults[planet]}${measurement}`);
    }
}
function getUserFactors() {
    while (true) {
        const validTypes = ["jump", "weight", "pushups"];
        let isMatch = false;
        console.log("What would you like to compare to other planets? (enter 'jump' OR 'weight' OR 'pushups')");
        const factorType = prompt(">>").trim().toLowerCase();
        for (let i = 0; i < validTypes.length - 1; i++) {
            if (factorType === validTypes[i]) {
                isMatch = true;
                break;
            }
        }
        if (isMatch) {
            break;
        } else {
            console.error(`You entered ${factorType}. Please enter the prompt correctly`);
        }
    }
    while (true) {
        console.log("What measurement system do you want to use? (enter '1' for metric, enter '2' for imperial(American)");
        let factorSystem = prompt(">>").trim().toLowerCase();
        if (factorSystem === '1' || factorSystem === '2') {
            switch (factorSystem) {
                case "1":
                    factorSystem = "metric";
                    break;
                case "2":
                    factorSystem = "imperial";
                    break;
            }
            break;
        } else {
            console.error(`You entered ${factorSystem}. Please enter your response based on the prompt`);
        }
    }
    while (true) {
        console.log(`Enter the earth value of your ${factorType}:`);
        const factorValue = parseFloat(prompt(">>").trim().toLowerCase().toFixed(2));
        console.log(!isNaN(factorValue));
        if (isNaN(factorValue) || (factorValue > 1000 || factorValue < 0)) {
            console.error("Please enter a valid number");
        } else {
            break;
        }
    }
    while (true) {

        console.log("Which group of planets do you want to compare your value: (enter '1': Earth solar system', enter '2': alien solar system')");
        const factorChoice = prompt(">>").toLowerCase().trim();
        if (factorChoice === '1' || factorChoice === '2') {

            let factorPlanets;
            switch (factorChoice) {
                case '1':
                    factorPlanets = earthGravityFactors;
                    break;
                case '2':
                    factorPlanets = alienGravityFactors;
                    break;
                default:
                    factorPlanets = earthGravityFactors;
            }
            break;
        } else {
            console.error("please enter a number choice for your planet system");
        }
    }
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
}
global.getUserFactors = getUserFactors;