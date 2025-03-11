const showUserFactors = require('./showUserFactors.js');
const getUserFactors = require('./getUserFactors.js');
const prompt = require('prompt-sync')();
function repeatPlease(func) {

    console.log("Measure again? (y or n)");
    let input = prompt(">>").trim().toLowerCase();
    if (input === 'y') {
        func();
    }
}
function main() {
    const { factorType, factorUnit, factorValue, factorPlanets } = getUserFactors();
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
    repeatPlease(main);

}
global.main = main;