
function checkPrime(no)
{
    var count = 0;
   for(var i=1; i<=no; i++)
   {
       if(no%i == 0)
       {
           count++
       }
   }
   if(count == 2)
   {
       return "prime"
   }
   return "No prime"
}

// console.log(checkPrime(17))


for(var i=1; i<=20; i++)
{
    if(checkPrime(i) == "prime")
    {
        console.log(i)
    }
}