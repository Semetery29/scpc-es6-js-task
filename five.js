// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const readline = require('readline');

// readline is a module which is used for getting input on terminal while writing JavaScript code on Node.JS Environment. By default Node.JS Package Manager don't come with any built-in-function that can take input from the user.

const readData = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// all user input

readData.question('Enter operator ( +, -, * or / ): ', (operator) => {
    readData.question('Enter your first number: ', (num1) => {
        readData.question('Enter your second number: ', (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let res;

            if (operator === '+') {
                res = num1 + num2;
            }
            else if (operator === '-') {
                res = num1 - num2;
            }
            else if (operator === '*') {
                res = num1 * num2;
            }
            else if (operator === '/') {
                if (num2 === 0) {
                    console.log('Error: Cannot divide by zero.');
                    res = NaN;
                }
                else {
                    res = num1 / num2;
                }
            }
            else {
                console.log('Error: Invalid operator.');
                res = NaN;
            }

            const result = res; // `${num1} ${operator} ${num2}` = res;

            console.log(result);

            readData.close();
        });
    });
});
