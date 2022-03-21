
function maximum(arr)
{
    var pad = arr[0];

    for(var i=0; i<arr.length; i++)
    {
      if(pad<arr[i])
      {
          pad = arr[i]
      }
    }
    return pad
}

numbers = [25,30,5,45,82,12,7];

console.log(maximum(numbers));