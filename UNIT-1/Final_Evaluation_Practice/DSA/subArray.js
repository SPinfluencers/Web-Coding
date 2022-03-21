// Sub array quest II Ended
// Description

// Given an array A with N positive integers. Count the number of subarrays that start and end with an even number.

function Even(num)
{
    if(num%2 == 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}

var A = [ 1, 2, 3, 4, 5];

var count = 0;
for(var i=0; i<A.length; i++)
{
    var output = [];

    for(var j=i; j<A.length; j++)
    {
        output.push(A[j])

        // console.log(output)

        if(Even(output[0]) == "Even" && Even(output[output.length-1]) == "Even")
        {
            count++
        }

    }
    
}
console.log(count)