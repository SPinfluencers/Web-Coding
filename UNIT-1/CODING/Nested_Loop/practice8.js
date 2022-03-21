

for(var i=1; i<=5; i++)
{
    var bag1 = "";
    
    for(var j=1; j<=i; j++)
    {
        bag1 = bag1 + j+ " ";
        
    }
    console.log(bag1);
    
    var bag2 = "";
    for(var j2=1; j2<=i; j2++)
    {
        bag2=bag2+"*"+" ";
    }
    console.log(bag2);
}