
// Create a function to check if a number is Prime or Not

function checkPrime(num)
{
        var count = 0;
        for(var i=1; i<=num; i++)
        {
            if(num%i == 0)
            {
                count++
            }
        }
        
        if(count == 2)
        {
           return "Prime"
        }
        else 
        {
            return "Not Prime"
        }
}

// console.log(checkPrime(11))

// Use the above function to print the Primes from 2 to a given limit

 for(var i=1; i<=20; i++)
 {
   if(checkPrime(i) == "Prime")
   {
    //    console.log(i)
   }
 }

//  Use the same function to print Non-Primes from 2 to a given limit

for(var j=1; j<=20; j++)
{
  if(checkPrime(j) == "Not Prime")
  {
      console.log(j)
  }
}