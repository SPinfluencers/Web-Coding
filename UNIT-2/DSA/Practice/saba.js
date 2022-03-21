
var arr = [
    ["A","B","S","S","E"],
    ["S","G","S","R","R"],
    ["S","S","R","N","P"],
    ["R","S","R","T","N"],
    ["P","K","S","P","P"],
]

var name = "SRP";
var N = arr.length;
var count = 0;

for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(j < N-2) {
            sum = arr[i][j]+arr[i][j+1]+arr[i][j+2]
            {
                 if(sum == name) {
                     count++
                 }
            }
        }
    }
}
// console.log(count)

for(var j=0; j<N; j++)
{
    for(var i=0; i<N; i++)
    {
        if(i < N-2) 
        {
            sum = arr[i][j]+arr[i+1][j]+arr[i+2][j] 
            {
                if(sum == name) {
                    count++
                }
            }
            
        }
    }
    
}
// console.log(count)

for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(j < N-2 && i < N-2)
        {
            sum = arr[i][j]+arr[i+1][j+1]+arr[i+2][j+2] 
            {
                if(sum == name) 
                {
                    count++
                }
            }
        }
    }
}
// console.log(count)

for(var i=0; i<N; i++)
{
    for(var j=N-1; j>=0; j--) 
    {
        if(i >= 2 && j > N-2)
        {
            sum = arr[i][j]+arr[i-1][j+1]+arr[i-2][j+2] 
            {
                if(sum == name) {
                    count++
                }
            }
        }
    }
}
console.log(count)