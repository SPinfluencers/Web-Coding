
// ***
// ++++++
// ***
// ++++++
// ***


for(var i=1; i<=6; i++)
{
    var bag = "";
    if(i%2==1)
    {
        for(var j=1; j<=3; j++)
        {
            bag = bag + "*";
        }
    }
    if(i%2==0)
    {
        for(var k=0; k<=3; k++)
        {
            bag = bag + "+";
        }
    }
    console.log(bag)
}


