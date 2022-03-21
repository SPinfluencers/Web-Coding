
var num = 22;
var temp = 0;

for(var i=2; i<=num-1; i++)
{
    if(num%i==0)
    {
        temp = temp+1;
        break;
    }
}

if(temp < 0)
{
    console.log("Not Prime");
}
else
{
    console.log("Prime");
}