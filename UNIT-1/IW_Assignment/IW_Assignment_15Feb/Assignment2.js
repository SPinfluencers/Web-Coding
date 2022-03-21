// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function


function lastIndexOf(arr,num)
{
    var index = -1;

    for(var i=arr.length-1; i>=0; i--)
    {
        if(arr[i] == num) 
        {
            index = i;
            break;
        }
    }
   return index
}

var arr = [25,46,12,7,30,45]
var num = 15

console.log(lastIndexOf(arr,num))

// console.log(arr.lastIndexOf(num))