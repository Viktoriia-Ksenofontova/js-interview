// Rotate Square Matrix in Place

// Write a function that takes a square matrix as input. 
// A square matrix has the same number of rows and columns, e.g. 3 x 3, 4 x 4, 5 x 5. 
// It should return the same matrix rotated 90 degrees clockwise. 
// The rotation should happen in place, meaning you may not create any extra matrixes or arrays in your function.

function rotateClockwise(mat) {
    
    for (let i=0; i<Math.floor(mat.length/2); i+=1){
         const lastIndex = mat.length - 1 - i;
    
        for(let j = i + 1; j < mat.length - i; j+=1) {
            const reverseIterator = lastIndex - j + i;

            let el1 = mat[j][lastIndex];
            mat[j][lastIndex] = mat[i][j];

            let el2 = mat[lastIndex][reverseIterator];
            mat[lastIndex][reverseIterator] = el1;

            el1 = mat[reverseIterator][i];
            mat[reverseIterator][i] = el2;

            mat[i][j] = el1;
        }       
    }
    return mat;
}

console.log(rotateClockwise([[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]));

    // ->  [[7, 4, 1],
    //      [8, 5, 2],
    //      [9, 6, 3]]