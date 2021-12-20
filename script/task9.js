// All Anagrams

// Write a function that takes in an array of strings. 
// Return true if all strings are anagrams of one another and false if even a single string is not an anagram of the others.

// Input: Array of Strings
// Output: Boolean

function allAnagrams(strings) {
   let newStrings=strings.map(string=>string.split("").sort().join(""));

    for(let i=1; i<newStrings.length; i+=1){
       if(newStrings[0]!==newStrings[i]){
           return false;
       }
    }
    return true;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])); 
// true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])); 
// false