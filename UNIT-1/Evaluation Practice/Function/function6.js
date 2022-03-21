// Write a functionisOddwhich returns a boolean value based the number is odd or not

function isOdd(num)
{
   if(num%2 == 1)
   {
       return true
   }
   return false
}

// console.log(isOdd(5))


for(var i=1; i<=20; i++)
{
    if(isOdd(i) == true)
    {
        console.log(i)
    }
}

