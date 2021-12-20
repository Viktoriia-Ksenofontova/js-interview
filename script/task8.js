// Single Mutation

// There are 3 types of possible string mutations: character insertion, 
// character deletion, or character substitution. 
// Write a function that accepts 2 strings and returns true 
// if the strings are the same except for 0 or 1 mutations. Return false otherwise.

// Inputs: String, String
// Output: Boolean

function singleMutation(str1, str2) {
    let arr1=str1.split("");
    let arr2=str2.split("");
    let countOfMutation=0;

    if ((arr1.length - arr2.length)>1){
        return false;
    } else if (arr1.length>=arr2.length){

        arr1.forEach((el,i)=>{
            if (el!==arr2[i] && el!==arr2[i-1] && el!==arr2[i+1]){
                countOfMutation+=1;
            }
        });

        
    } else if(arr2.length>arr1.length){
        arr2.forEach((el,i)=>{
            if (el!==arr1[i] && el!==arr1[i-1] && el!==arr1[i+1]){
             countOfMutation+=1;
         }
     })
    }

    if (countOfMutation>1){
        return false;
    } else { 
        return true;
    }
}

console.log(singleMutation('abcd', 'aXcde'));
// -> false

console.log(singleMutation('abcd', 'abc'));
// -> true