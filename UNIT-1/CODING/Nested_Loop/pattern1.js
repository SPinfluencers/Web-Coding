for(var i=1; i<=5; i++)
{
    var bag = "";
    for(var j=1; j<=5; j++)
    {
        bag = bag + j + " ";
    }
    console.log(bag)
}

console.log("--------------------------------------------")

var count = 1
for(var i=1; i<=5; i++)
{
    var bag = "";
    for(var j=1; j<=5; j++)
    {
        bag = bag + count +  " ";
        count++
    }
    console.log(bag)
}