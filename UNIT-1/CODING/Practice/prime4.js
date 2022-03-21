
isprime(21);

function  isprime(num)
{
    for(var i=2; i<num; i++)
    {
        if(num%i===0)
        {
            console.log(num, "- Is not prime no");
            return false;
        }
        console.log(num, "- Is prime no");
        return true;
    }
}