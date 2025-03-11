const prompt = require('prompt-sync')();
const gravityFactors = require('./gravityFactors.js');

function showUserFactors(factorType, factorValue, factorObj) {
    let userResults = {};
    let measurement;
    for (let item in factorObj) {
        userResults[item] = parseFloat((factorValue * factorObj[item]).toFixed(2));
    }
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
    for (let item in userResults) {
        console.log(`Your ${factorType} on ${item} is ${userResults[item]}${measurement}`);

    }
}
function getUserFactors() {
    console.log("Enter factor you want to calculate ('weight', 'jump')");
    const factor = prompt(">>");
    // console.log("you typed", factor);
    console.log("Enter value of factor as a number");
    const value = prompt(">>");
    showUserFactors(factor, value, gravityFactors);
};
global.gravityFactors = gravityFactors;
global.getUserFactors = getUserFactors;

// getUserFactors("weight", 100, gravityFactors);