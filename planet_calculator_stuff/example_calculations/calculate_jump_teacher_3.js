///// Now we will create a READLINE interface to get the users input for jump height
// require the readline module
// const readline = require('readline');
// require prompt-sync
const prompt = require('prompt-sync')();
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
// 1.
function getUserJumpHeight() {
    // 2.
    // const rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout,
    // });
    console.log("Enter your jump height on earth in cm:");
    const input = prompt("Your input>>");
    // 3. create the question with an argument of question string, then arrow function that takes the response as input
    console.log('User input received:', input);
    console.log('Here is your jump height on various planets');
    console.log(calculateJumpOnPlanets(input));
    // rl.question("Enter your jump height on earth in cm: ", (input) => {
    // 5. test the returned input with a console log
    // console.log(input);
    // 4. close the readline when you're done
    // rl.close();
    // });
}
// export the function to the global context
global.calculateJumpOnPlanets = calculateJumpOnPlanets;
// export the function to the global context
global.getUserJumpHeight = getUserJumpHeight;