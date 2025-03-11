const getUserFactors = require('./getUserFactors');
const showUserFactors = require('./showUserFactors');

function main() {
    const factors = getUserFactors();
    console.log(factors);
    const factorType = factors.factorType;
    const factorUnit = factors.factorUnit;
    const factorValue = factors.factorValue;
    const factorPlanets = factors.factorPlanets;
    // const { factorType, factorUnit, factorValue, factorPlanets } = factors;
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
    // you can return a string to turn off the undefined in the console
    return 'end main';
}
global.main = main;