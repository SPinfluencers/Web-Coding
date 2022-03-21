// ODD NUMBER
// Write a function isOdd which returns a boolean value based the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd(number)
{
   if(number%2==1) {
       return true;
   }
   return false;
}


var x = isOdd(11);

     if(x==true) {
    console.log("Odd");
}
else {
    console.log("Even");
}



for(var j=0; j<=20; j++)
{
    var z = isOdd(j)
    if(z==true)
    {
        console.log(j);
    }
}



