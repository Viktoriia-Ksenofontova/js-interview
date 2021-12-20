// Array Subset

// Write a function that accepts two parameters, both arrays. 
// The arrays can have both strings and numbers. 
// Return true if the second array is a subset of the first.

// In other words, determine if every item in the 2nd array is also present somewhere in the 1st array.

function arraySubset(arr, sub) {
    let newArr=[...arr];
    for (let i=0; i<sub.length; i+=1){
       let ind=newArr.findIndex(()=>sub[i]);
        if (ind===-1){
            return false;
        }
        else{
            newArr.splice(ind, 1);
        }
    }
    return true;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); 
// -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); 
// -> true
console.log(arraySubset([1, 2], [1, 2, 3])); 
// -> false
console.log(arraySubset([1, 2, 3], [1, 2, 2, 3])); 
// -> false