// PRIMES & NON-PRIMES

// Create a function to check if a number is Prime or Not

function checkPrime(num)
{
    var count = 0;
    for(var i=1; i<=num; i++)
    {
        if(num%i==0)
        {
            count++
        }
    }
    
    if(count==2) {
        return true
    }
    else {
        return false
    }
}
// var x = 20; 
// console.log(checkPrime(x));

// Use the above function to print the Primes from 2 to a given limit

for(var j=2; j<=50; j++)
{
   var x = checkPrime(j)

   if(x==true)
   {
       console.log(j, "Prime")
   }
   else if(x==false){
       console.log(j,"Not Prime")
   }
}
