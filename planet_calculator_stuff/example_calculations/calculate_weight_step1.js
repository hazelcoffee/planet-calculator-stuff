const gravityFactors = {
    "Mercury": 0.378, // gravitational factor of Mercury
    "Venus": 0.907, // gravitational factor of Venus
    "Mars": 0.377, // gravitational factor of Mars
    "Jupiter": 2.364, // gravitational factor of Jupiter
    "Saturn": 0.916, // gravitational factor of Saturn
    "Uranus": 0.889, // gravitational factor of Uranus
    "Neptune": 1.125 // gravitational factor of Neptune
}
// create a function that takes your Earth weight
function calculateWeightOnPlanets(weightOnEarth) {
    let weights = {};
    for (let planet in gravityFactors) {
        weights[planet] = parseFloat((weightOnEarth * gravityFactors[planet]).toFixed(2));
    }
    return weights;
}
// set a dummy weight in Kg.
let weightOnEarth = 100;
console.log(calculateWeightOnPlanets(weightOnEarth));