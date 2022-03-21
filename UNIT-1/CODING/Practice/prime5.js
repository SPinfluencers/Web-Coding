
var count = 0;

for(var j=2; j<=100; j++)
{
    for(var i=1; i<=j; i++)
    {
        if(j%i==0)
        count++
    }
    
    if(count==2)
    console.log(j)
    count=0;
}
