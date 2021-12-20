// Is Unique

// Create a function that determines whether all characters 
// in a string are unique or not. Make it case-sensitive, 
// meaning a string with both 'a' and 'A' could pass the test.

function isUnique(str) {
   
    let arr= str.split("");
    for(let i=0; i<arr.length; i+=1){
        for(let j=i+1; j<arr.length; j+=1){
            if (arr[i]===arr[j]){
                return false;
            }
        }

    }
    return true;
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('89%df#$^a&x')); // -> true
console.log(isUnique('abcAdef')); // -> true
console.log(isUnique('abcaef')); // -> false