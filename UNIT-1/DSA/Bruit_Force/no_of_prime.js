
// prime no from 1 To 20


for(var j=1; j<=20; j++)
{
    
    var count = 0;
    for(var i=1; i<=j; i++)
    {
        if(j%i == 0)
        {
            count++
        }
    }
    
    if(count == 2)
    {
        console.log(j,"Prime")
    }
    else 
    {
        console.log(j,"Not Prime")
    }
}1