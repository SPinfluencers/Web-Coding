
var arr = [
    ["a","b","s","d","p"],
    ["f","g","h","r","j"],
    ["k","l","s","n","p"],
    ["p","q","r","r","t"],
    ["u","v","w","x","p"],
]

var N= 5;
var name = "srp"
var count = 0;

for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(j < N-2 && i < N-2)
        {
            sum = arr[i][j]+arr[i+1][j+1]+arr[i+2][j+2];
            {
                if(sum == name)
                {
                    count++
                }
            }
        }
    }
    
}
console.log(count)

for(var i=2; i<N; i++)
{
    for(var j=0; j<N-2; j++)
    {
        if( j < N-2)
        {
            sum = arr[i][j]+arr[i-1][j+1]+arr[i-2][j+2];
            {
                if(sum == name) {
                    count++
                }
                console.log(sum)
            }
        }
       
    }
}
console.log(count)