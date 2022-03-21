// You are given a number, stored in a variable with the name num. Find out the average of sum of all 
// prime numbers in the range of [2,num], including the value stored in num


function checkPrime (num)
{
    var count = 0;
    for(var i=0; i<=num; i++)
    {
        if(num%i == 0)
        {
            count++
        }
    
        
    }
    if(count == 2) {
        return true
    }
    else {
        return false
    }
}


var num = 13;

var count = 0;
var sum = 0
for(var j=1; j<=num; j++)
{
    if( checkPrime (j) == false ) {

       count++
       sum = sum + j

    }
}
console.log(Math.floor(sum/count))
