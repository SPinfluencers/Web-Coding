
var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [8, 9, 10, 11],
    [11, 12, 13, 14],
    [15, 16, 17, 18],
]

var N = 5;
var M = 4;
var bag = "";
for(var i=0; i<M; i++)
{
    if(i%2 == 0) 
    {
        for(var j=N-1; j>=0; j--)
        {
            {
                // console.log(arr[j][i])
                bag = bag + arr[j][i] + " ";
            }
        }
    }
    else
    {
        for(var j=0; j<N; j++)
        {
            {
                // console.log(arr[j][i])
                bag = bag + arr[j][i] + " ";
            }
        }
    }
}
console.log(bag)