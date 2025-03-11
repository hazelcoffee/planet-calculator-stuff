// require the readline module
const readline = require('readline');
// require the gravity factors
const gravityFactors = require('./gravityFactors.js');

// create the function to calculate jump heights on other planets
function calculateJumpOnPlanets(earthJumpHeight) {
    let jumpHeights = {};

    for (let planet in gravityFactors) {
        // add toFixed(2) and parseFloat to get back the appropriate number
        jumpHeights[planet] = parseFloat((earthJumpHeight * gravityFactors[planet]).toFixed(2));
    }

    return jumpHeights;
}


// export the function to the global context
global.calculateJumpOnPlanets = calculateJumpOnPlanets;