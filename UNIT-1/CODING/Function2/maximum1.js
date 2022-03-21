
// Maximum in Array


var arr = [1, 2, 30, 4, 5];

var max = -Infinity
var index = null;

for(var i=0; i<arr.length; i++)
{
    if(max < arr[i])
    {
        max = arr[i]
        
        if(max == arr[i])
        {
            index = i
        }
    }
}
console.log(index)