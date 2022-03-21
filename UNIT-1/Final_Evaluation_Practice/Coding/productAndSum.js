// You are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to find the sum of product of elements present in array and the position at which they are present in the array.

// For example, if the size of array isN=5and the array isarr=[2,5,4,6,8].Therefore the required output is

var arr = [2,5,4,6,8];

var product = 0

for(var i=0; i<arr.length; i++)
{
    product = product + (arr[i] * (i+1))
}

console.log(product)