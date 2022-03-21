
function isOdd(number)
{
    if(number%2==1) 
    {
        return true;
    }
        
    return false;
}

var x = isOdd(11);

if(x==true) 
{
    console.log("Odd");
}
else {
    console.log("Even");
}

for(var i=0; i<=30; i++)
{
    var z = isOdd(i);
    {
        if(z==true)
        {
            console.log(i);
        }
    }
}