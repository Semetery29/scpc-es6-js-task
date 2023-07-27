// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const readline = require('readline');

const readData = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// User can decide the length of their desired password
readData.question('Enter a number for numaric length of your password of your desire : ', (userInput) => {

    const genPassword = (length) => {

        const upChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowChars = 'abcdefghijklmnopqrstuvwxyz';
        const nums = '0123456789';
        const special = '!@#$%^&*()-=_+[]{}|;:,.<>?';

        const totalChar = upChars + lowChars + nums + special;

        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * totalChar.length);
            password += totalChar.charAt(randomIndex);
        }

        return password;
    }

    let passLength = userInput;
    const output = genPassword(passLength);

    console.log(`Generated Password: ${output}`);

    readData.close();

});