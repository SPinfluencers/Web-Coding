
function isPrime(num)
{
    var count = 0;
    for(var i=0; i<=num; i++)
    {
        if(num%i==0)
        {
            count++
        }
    }
    
    if(count==2) {
        return "prime";
    }
    else {
        return "Not Prime";
    }
}

// prime from 1 to 20; 

for(var j=1; j<=20; j++)
{
    var count = 0;
    for(var i=0; i<=j; i++)
    {
        if(j%i==0)
        {
            count++
        }
    }
    if(count==2)
    {
        console.log(j,"-isPrime")
    }
    else {
        console.log(j,"-Not Prime")
    }
}
 