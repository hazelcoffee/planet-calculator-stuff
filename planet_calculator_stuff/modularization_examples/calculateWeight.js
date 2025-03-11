const gravityFactors = require('./gravityFactors.js');

function calculateWeight(earthWeight, gravityFactors) {
    let weights = {};
    for (let planet in gravityFactors) {
        weights[planet] = parseFloat((earthWeight * gravityFactors[planet]).toFixed(2));
    }
    return weights;
}

module.exports = calculateWeight;