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
        weights[planet] = (weightOnEarth * gravityFactors[planet]);
    }
    return weights;
}
// ask the user their weight
let weightOnEarth = parseFloat(prompt("Enter your weight on Earth (in Kg)."));
// validate the input // check for edge cases or false entries
if (isNaN(weightOnEarth)) {
    console.error("Invalid weight. Please enter a positive number.");
} else {
    let weights = calculateWeightOnPlanets(weightOnEarth);
    for (let planet in weights) {
        console.log(`Your weight on ${planet} is ${weights[planet].toFixed(2)} kg`);
    }
}