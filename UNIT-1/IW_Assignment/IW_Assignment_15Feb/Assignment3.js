// Write a custom function that has the same behavior of inbuilt Array Slice Function


function slice(array,num)
{
    var output = []
    var bag = ""
    for(var i=num; i<=array.length-1; i++)
    {
        output.push(array[i])
    }
    return output
}

var arr = [1,2,3,4,5,6,7,8,9]
var num = 4;

console.log(slice(arr,num))

console.log(arr.slice(4))