
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]
var N = matrix.length;

for(var i=N-1; i>=0; i--)
{
    for(var j=0; j<N; j++)
    {
        console.log(matrix[i][j])
    }
}