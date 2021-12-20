// Remove Dupes

// Write a function that takes in a string and returns a new string. 
// The new string should be the same as the original with every duplicate character removed.

function removeDupes(str) {
    let newStr="";
    let mySet= new Set(str);
    mySet.forEach(el=> newStr=newStr+el);
    return newStr;
}

console.log(removeDupes('abcd')); 
// -> 'abcd'
console.log(removeDupes('aabbccdd'));
// -> 'abcd'
console.log(removeDupes('abcddbca'));
//  -> 'abcd'
console.log(removeDupes('abababcdcdcd'));
//  -> 'abcd'