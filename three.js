//  Write a JavaScript program to find the most frequent element in an array and return it.

const frequent = (array, n) => {

    let start = 0;
    let mostFrequent;

    for (let i = 0; i < n; i++) {
        
        let mostCounted = 0;
        
        for (let a = 0; a < n; a++) {
            if (array[i] == array[a])
                mostCounted++;
        }

        // checking most frequent data by comparing countdown

        if (mostCounted > start) {
            start = mostCounted;
            mostFrequent = array[i];
        }
    }

    return mostFrequent;
}

// input data
const data = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const n = data.length;

const result = frequent(data, n);

console.log(res);