
var arr = [3,5,3,3,8,5,6];

var sum = 0;
for(var i=0; i<arr.length; i++)
{
    var count = 0;
    
    for(var j=0; j<arr.length; j++)
    {
        if(arr[i] == arr[j])
        {
            count++
        }
    }
    if(count == 1)
    {
        sum = sum + arr[i]
    }
    
}

console.log(sum)