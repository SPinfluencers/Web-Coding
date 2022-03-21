
var arr = [
    [1, 2, 3, 4],
    [5, 6, 1, 0],
    [0, 4, 1, 9],
    [2, 6, 5, 0],
]

var N = arr.length
var k = 7;
var count = 0;
for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(j < N-2) 
        {
            sum = arr[i][j]+arr[i][j+1]+arr[i][j+2]
            {
                if(sum == k)
                {
                    count++
                }
            }
        }
        if(i < N-2)
        {
            sum = arr[j][i] + arr[j][i+1] + arr[j][i+2]
            {
                if(sum == k)
                {
                    count++
                }
            }
        }
        if(i < N-2 && j < N-2)
        {
            sum = arr[i][j]+arr[i+1][j+1]+arr[i+2][j+2]
            {
                if(sum == k)
                {
                    count++
                }
            }
        }

        if(i>=2 && j < N-2) 
        {
            sum = arr[i][j]+arr[i-1][j+1]+arr[i-2][j+2]
            {
                if(sum == k)
                {
                    count++
                }
            }
        }
    }
}
console.log(count)