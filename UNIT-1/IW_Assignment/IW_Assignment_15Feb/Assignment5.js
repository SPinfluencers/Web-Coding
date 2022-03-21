
// Write a custom function that has the same behavior of inbuilt Array Includes Function


function includes(num,x)
{
    pad = arr[0]
    for(var i=0; i<=num.length-1; i++)
    {
        if(arr[i]==x)
        {
            pad = arr[i]
        }
    }
    if(pad==x)
    {
        return true
    }
    return false
}

var arr = [1,2,3,4,5]
var a = 2

console.log(includes(arr,a))

console.log(arr.includes(a));

