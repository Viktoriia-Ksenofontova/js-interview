// Highest Frequency

// Write a function that takes an array of strings and returns the most commonly occurring string in that array.

// If there are multiple strings with the same high frequency, 
// return the one that finishes its occurrences first, while going left to right through the array.

function highestFrequency(strings) {
    let maxCount=0;
    let newStr="";
    let obj={};

    strings.forEach(string=>{
        if (obj[string]){
        obj[string]=obj[string]+1;
            if (maxCount < (obj[string]+1)){
                 maxCount=obj[string]+1;
                 newStr=string;
            }
        }
        else{ obj[string]=1
            if(newStr===""){
                newStr=string;
                maxCount=1;
            }
        }
        
    });
    
    return newStr;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e']));
// -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc']));
// -> abc
console.log(highestFrequency(['abc', 'def']));
// -> abc
