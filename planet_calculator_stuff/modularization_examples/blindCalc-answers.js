// require gravityFactors from "./gravityFactors.js"
const gravityFactors = require('./gravityFactors.js');

// create a function called calculateWeightOnPlanets
// pass an argument of earthWeight

function calculateWeightOnPlanets(earthWeight) {
    // inside the function initialize an empty object
    // the object is called planetWeights
    let planetWeights = {};
    // iterate over gravityFactors
    for (let planet in gravityFactors) {
        // assign a key, value pair to planetWeights for each iteration
        // the value of each key should be earthWeight times the value of the current
        // iteration of gravityFactors
        // Make sure the values are floats to two decimals
        planetWeights[planet] = parseFloat((earthWeight * gravityFactors[planet]).toFixed(2));
    }
    // return the planetWeights object from the function
    return planetWeights;
}

// console log the planetWeights assume the function
// is passed in an earthWeight of 100(kg)
console.log(calculateWeightOnPlanets(100));
// make a comment at the bottom of the script
// telling a user how to run the script from node

// run the script with `node calculateWeight.js`

