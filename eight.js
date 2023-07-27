//  Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmall = array => {

    let smallest = array[0];
    let secondSmallest = array[1];

    for (let i = 0; i < array.length; i++) {

        if (array[i] < smallest) {
            secondSmallest = smallest; // Move the previous smallest to second smallest
            smallest = array[i]; // Update smallest with the new smallest
        }
        else if (array[i] < secondSmallest && array[i] !== smallest) {
            secondSmallest = array[i]; // Update second smallest
        }
    }

    return secondSmallest;
}

const array = [1,2,3,4,5,6,7];

const result = secondSmall(array);

console.log("Second Smallest Element:", result);