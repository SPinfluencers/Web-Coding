

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

var row = 3;
var col = 3;

var sum = 0;
for(var i=0; i<row; i++)
{
    if(i%2 == 0)
    {
        for(var j=0; j<col; j++)
        {
            // console.log(arr[i][j])
            sum = sum + arr[i][j]
        }
    }
    
}
console.log(sum)