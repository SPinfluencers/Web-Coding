function isPrime(num)
{
    var count = 0;
    for(i=1; i<=num; i++)
    {
        if(num%i == 0)
        {
            count++
        }
    }

    if(count==2)
    {
        return true
    }
    else
    {
        return false
    }
}


var num = [1, 2, 3 ,5, 7, 12]

var final_sum = 0;

for(var i=0; i<=num.length-1; i++)
{
    for(var j=i+1; j<num.length-1; j++)
    {
        if(isPrime(j-i) == true)
        {
            // var diff = Math.abs(num[i]-num[j])
            // {
            //     final_sum = final_sum + diff;
            // }
            console.log(j.i)
        }
    }
}

// console.log(final_sum)