// Deep Equals

// Write a function that will take in two items of any type. The function should perform a deep equality check.

// Inputs: Any, Any
// Output: Boolean


function deepEquals(a, b) {
    if (typeof(a)!==typeof(b)){
        return false;
    } else if (typeof(a)===typeof(b) && typeof(a)==='object'){
                if (Array.isArray(a)){
                    if (a.length!==b.length){
                        return false;
                    }
                    for (let i=0; i<a.length; i+=1){
                        if (a[i]!==b[i]){
                            return false;
                        }
                    }
                    return true;
                } else if(JSON.stringify(a)!==JSON.stringify(b)){
                    return false;
                } 
        return true;   
    } else return Object.is(a,b);
}


console.log(deepEquals({ a: 123, b: ['abc', { a: null, b: [undefined, [NaN]] }] }, 
{ a: 123, b: ['abc', { a: null, b: [undefined, [NaN]] }] }));

// => true

// variant 2

function deepEquals2(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    } else if (typeof(a)!==typeof(b)){
        return false;
    } else if(typeof a !== 'object' || a === null || b === null) {
        return a === b;
    } else if (typeof(a)==='object' ){
            if(Object.keys(a).length !== Object.keys(b).length){
                return false;
            } 
            for(const key in a) {
                if (!deepEquals(a[key], b[key])){
                    return false;
                }
            }  
    } 
    return true;
}