// Sorted Search

// Write a function that accepts a sorted array of integers and a number. 
// Return the index of that number if present. The function should return -1 for target values not in the array.

// Input: Array of Integers, Integer
// Output: An integer from -1 onwards.

function search(numbers, target) {
    let result = numbers.indexOf(target);
    return result;
}

console.log(search([1, 3, 6, 13, 17], 13)); 
// -> 3
console.log(search([1, 3, 6, 13, 17], 12)); 
// -> -1