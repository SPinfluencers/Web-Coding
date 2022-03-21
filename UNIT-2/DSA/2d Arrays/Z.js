
var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

var N = 4;
var bag = "";
for(k=0; k<=N-2; k++)
{
    // console.log(arr[0][k])
    bag = bag + arr[0][k] + " ";
}

for(var i=0; i<N; i++)
{
    for(var j=N-1; j>=0; j--)
    {
        if(i+j == 3)
        {
            // console.log(arr[i][j])
            bag = bag + arr[i][j] + " ";
        }
    }
}

for(var m=1; m<=N-1; m++)
{
    // console.log(arr[N-2][m])
    bag = bag + arr[N-1][m] + " ";
}

console.log(bag)
