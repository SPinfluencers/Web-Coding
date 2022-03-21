// Count Digits Ended
// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the count of 0's ,1's and 2's

// For example, consider the array as arr = [0 1 0 2 1 2 0 1 2 0], and the value stored in n = 10

// Then, the required output will be4 3 3, as no. of 0's are 4, no. of 1's are 3, and no. of 2's are 3.

var arr = [0, 1, 0, 2, 1, 2, 0, 1, 2, 0];

var count1 = 0;
var count2 = 0;
var count3 = 0;

for(var i=0; i<arr.length; i++)
{
    if(arr[i] == 0)
    {
        count1++
    }
    else if(arr[i] == 1)
    {
        count2++
    }
    else if(arr[i] == 2)
    {
        count2++
    }
}
console.log(count1+count2+count3)