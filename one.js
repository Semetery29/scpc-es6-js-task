// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverse = input => {
    // declaring a variable with empty string.
    let data = "";
    // condition to check data type to move to the loop that make the function work.
    if (typeof input != "string") {
        return "Input is not a 'String'. Please enter an string. Or try to put the data inside of a quotation mark.";
    }
    else {
        // loop to reverse data
        for (let i = input.length - 1; i >= 0; i--) {
            data += input[i]
        }
    }

    return data;
}

const info = "Hello World";

const user = reverse(info);

console.log(user);