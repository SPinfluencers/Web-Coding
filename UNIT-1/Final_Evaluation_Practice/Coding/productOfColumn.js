
// product of column

var arr = [
    [1,2,1],
    [3,4,7],
    [5,6,2],
]

var row = 3;
var col = 3;

for(var i=0; i<row; i++)
{
    var sum = 1;
    for(var j=0; j<col;  j++)
    {
        // console.log(arr[i][j])
        sum = sum * arr[j][i]
        
    }
    console.log(sum)
}