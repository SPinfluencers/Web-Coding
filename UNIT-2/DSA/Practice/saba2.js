
var arr = [
    ["s","a","f","e","r",],
    ["a","m","j","a","d",],
    ["b","a","b","o","l",],
    ["a","a","r","o","n",],
    ["s","o","n","g","s",],
    
]

var N = arr.length;
var name = "saba"
var count = 0;

for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(i >= 3 && j < N-3)
        {
            sum = arr[i][j]+arr[i-1][j+1]+arr[i-2][j+2]+arr[i-3][j+3]
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