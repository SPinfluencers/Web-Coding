
// MATRIX DIAGONALS

// Given a square matrix print both the diagonals

var matrix = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

];

var leftDiagonal = [];
var rightDiagonal = [];

for(var i=0; i<=matrix.length-1; i++)
{
    var bag = "";
    for(var j=0; j<=matrix.length-1; j++)
    {
       if(i == j)
       {
          leftDiagonal.push(matrix[i][j]);
       }
       if(i+j == (matrix.length)-1)
       {
         rightDiagonal.push(matrix[i][j]);
       }
    }
}
console.log(leftDiagonal)
console.log(rightDiagonal)
