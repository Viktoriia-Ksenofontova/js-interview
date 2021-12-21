// Flatten Array

// Write a function that will take an array of deeply nested arrays 
// and extract every item, flattening the array. 
// It should return a new array that contains the items of each internal array, preserving order.

function flatten(nestedArray) {
    let result=[];
    function pushElement(el){
        if(!Array.isArray(el)){
            result.push(el);
        } 
        else{
            for (let j=0; j<el.length; j+=1){
                pushElement(el[j])
            }
        }
    }
    
        for (let i=0; i<nestedArray.length; i+=1){
            pushElement(nestedArray[i]);
        }
        
    return result;
}

console.log(flatten([ [ [ [1], 2], 3], [4], [], [[5]]]));
// -> [1, 2, 3, 4, 5]

console.log(flatten(['abc', ['def', ['ghi', ['jkl']]]]));
// -> ['abc', 'def', 'ghi', 'jkl']

// Array.prototype.flat
console.log([ [ [ [1], 2], 3], [4], [], [[5]]].flat(Infinity));