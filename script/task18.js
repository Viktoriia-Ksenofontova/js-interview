// Write a function that adds 2 numbers. 
// It should work as follows:

// add(3, 4); // -> 7
// add(10, 12); // -> 22
// However, it should also work as follows:
// add(3)(4); // -> 7
// add(10)(12); // -> 22

function add(num1, num2) {
    if(num2===undefined){
         return function newAddFunction(newNum2) {
             if(newNum2===undefined){
                 return newAddFunction;
             }
            return num1 + newNum2;
         }
    }
    
    return num1+num2;
}

console.log(add(7)()(10));