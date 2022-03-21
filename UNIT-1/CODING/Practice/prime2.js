
var num = 16;
 
var prime = true ;

for(var i=2; i<=num-1; i++)
{
    if(num%i==0)
    {
        prime = false;
        break;
    }
}
console.log(prime)