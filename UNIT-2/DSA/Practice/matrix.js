var matrix = [
    ["s","a","f","e","r",],
    ["a","m","j","a","d",],
    ["b","a","b","o","l",],
    ["a","a","r","o","n",],
    ["s","o","n","g","s",],
]

var N = matrix.length;
var count = 0;

for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(j < N-3) 
        {
            sum = matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]+matrix[i][j+3]
            {
                if(sum == "saba")
                {
                    count++
                }
            }
        }
    }
}
console.log(count)

for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(j < N-3) 
        {
            sum = matrix[j][i]+matrix[j+1][i]+matrix[j+2][i]+matrix[j+3][i] 
            {
                if(sum == "saba") 
                {
                    count++
                }
            }
        }
    }
}
console.log(count)

for(var i=0; i<N; i++)
{
    for(var j=0; j<N; j++)
    {
        if(i < N-3 && j < N-3)
        {
            sum = matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2] + matrix[i+3][j+3]
            {
                if(sum == "saba")
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
    for(var j=0; j<N; j++)
    {
        if(i >= 3  && j < 2)
        {
            sum = matrix[i][j]+matrix[i-1][j+1]+matrix[i-2][j+2]+matrix[i-3][j+3]
            {
                if(sum == "saba")
                {
                    count++
                }
            }
        }
    }
}
console.log(count)

