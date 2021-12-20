// Rotate Matrix

// A matrix in JavaScript can be represented as an array of arrays. 
// For example, here is a 3 x 3 matrix:

// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]
// Write a function that takes a matrix as input and returns a new matrix. 
// This new matrix should represent the original matrix rotated 90 degrees clockwise. 
// The original matrix should be unchanged. This function should work for both square and rectangular matrixes.

function rotateClockwise(matrix) {
     let newMatrix=matrix[0].map(() => []);
     let newCountOfColumns=matrix.length;
     let newCountOfLines=matrix[0].length;

     for (let i=0; i<newCountOfLines; i+=1){
           
          for(let j=0; j<newCountOfColumns; j+=1){
               newMatrix[i][j] = matrix[matrix.length-1-j][i];
          }
     }
     
return newMatrix;
}

console.log(rotateClockwise([[1, 2, 3],[4, 5, 6]]));
// ->   [[4, 1],
//      [5, 2],
//      [6, 3]]