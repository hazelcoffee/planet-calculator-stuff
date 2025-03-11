function showUserFactors(factorType, factorUnit, factorValue, factorObject) {
    // Initialize an object to hold the results
    const userFactors = {};

    // Iterate over each item in the factorObject
    for (let planet in factorObject) {
        // Calculate the factor multiplied by the input value and round it to two decimals
        userFactors[planet] = parseFloat((factorValue * factorObject[planet]).toFixed(2));
    }

    // Determine the measurement unit based on factor type
    let measurement;
    switch (factorUnit) {
        case '1':
            measurement = 'cm';
            break;
        case '2':
            measurement = 'kg';
            break;
        case '3':
            measurement = 'in';
            break;
        case '4':
            measurement = 'lbs';
            break;
        default:
            measurement = factorUnit;
            break;
    }

    // Iterate over the results and log each one
    for (let planet in userFactors) {
        console.log(`Your ${factorType} on ${planet} is ${userFactors[planet]} ${measurement}`);
    }
    return '';
}

module.exports = showUserFactors;
