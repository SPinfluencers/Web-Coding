// Count such pairs Ended
// Description

// You are given an array A of N integers along with a target integer K.

// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target value K.

var arr = [3, 0, 6, 2, 7];

var k = 9;

var count = 0;
for(var i=0; i<arr.length; i++)
{
    for(var j=i+1; j<arr.length; j++)
    {
        if(arr[i]+arr[j] == k)
        {
            count++
        }
    }
}
console.log(count)
