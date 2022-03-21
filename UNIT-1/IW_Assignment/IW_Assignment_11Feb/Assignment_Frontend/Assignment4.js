// ARRAY AVERAGE
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

var array1 = [10,20,30,40,50];

function sum(array)
{
    var count = 0;
    var sum = 0;
    for(var i=0; i<array.length; i++)
    {
        sum = sum + array[i];
    }
    return sum;   
}



function count(array2)
{
    var count = 0;
    for(var i=0; i<array1.length; i++)
    {
        count++
    }
    return count
}


var average = (sum(array1)/count(array1))
console.log(average);