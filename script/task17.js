// Fibonacci

// Write a function that will take a positive integer n 
// and return an array of length n containing the Fibonacci sequence.

// Input: Integer > 0
// Output: Array of Numbers


function fibonacci(n) {
    const result=[];
    let i=0;
    while (i<n) {
        if (i<2){
            result.push(1)
        } else {result.push(result[i-1]+result[i-2])}
        i+=1;
    }
    return result;
}

console.log(fibonacci(20));