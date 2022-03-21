
// Minimum in array

var arr = [12,17,15,29,21,22,48,2,32];

var pad = arr[0];

for(var i=0; i<arr.length; i++)
{
    if(pad>arr[i])
    {
        pad = arr[i]
    }
}
console.log(pad);