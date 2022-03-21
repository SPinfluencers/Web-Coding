// PRINT PRIMES
// Print Prime Numbers from 1 to given limit

var limit = 20;

for(var num=1; num<=limit; num++)
{
    var count = 0;
    for(var i=1; i<=num; i++)
    {
        if(num%i==0)
        {
            count++
        }
    }
    if(count==2)
    {
        console.log(num);
    }
}
