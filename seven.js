// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const readline = require('readline');

const readData = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readData.question('Enter a Roman numeral: ', (romanNumeral) => {

    const romanToInt = romanValue => {
        romanValue = romanValue.toUpperCase();

        const romanNumerals = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        };
        // check if its any value is available to convert or not
        if (!romanValue || romanValue.trim() === '') {
            throw new Error('Invalid input: Empty Roman numeral.');
        }

        let result = 0;
        // calculating roman to integer using loop
        for (let i = 0; i < romanValue.length; i++) {
            const currentNumeral = romanValue[i];
            const currentValue = romanNumerals[currentNumeral];
            const nextNumeral = romanValue[i + 1];
            const nextValue = romanNumerals[nextNumeral];

            // error for invalid roman numerical value input
            if (!currentValue) {
                throw new Error(`Invalid input: Character "${currentNumeral}" is not a valid Roman numeral.`);
            }

            if (nextValue > currentValue) {
                if (![1, 10, 100].includes(currentValue)) {
                    throw new Error(`Invalid input: Invalid sequence "${currentNumeral}${nextNumeral}".`);
                }
                result += (nextValue - currentValue);
                i++; // Skip the next numeral since it's already accounted for
            } else {
                result += currentValue;
            }
        }

        return result;
    };

    const result = romanToInt(romanNumeral);

    console.log(`The corresponding integer value is: ${result}`);
    readData.close();
});