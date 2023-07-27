// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const add = array => {
    var sum = 0;

    for (var i = 0; i < numbers.length; ++i) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
const numbers = [2, -5, 10, -3, 7];

const res = add(numbers);

console.log(res);