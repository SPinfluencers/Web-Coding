
function minimum(arr)
{
    var pad = arr[0];

    for(var i=0; i<arr.length; i++)
    {
       if(pad>arr[i])
       {
           pad = arr[i];
       }
    }
    return pad
}

var numbers = [5,9,3,7,2,6,4];
var numbers1 = [12,55,-92,4,20,6,5,35]

console.log(minimum(numbers))
console.log(minimum(numbers1))