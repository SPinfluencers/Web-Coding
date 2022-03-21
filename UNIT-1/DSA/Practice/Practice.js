
for(var i=1; i<=6; i++)
{
    var bag = ""
    for(var j=0; j<=6; j++)
    {
        if(i%2==0)
        {
            bag = bag + "*"
        }
        else {
            if(j==1 || j==2 || j==3)
            {
                bag = bag + "="
            }
            else {
                bag = bag + ""
            }
        }
    }
    console.log(bag)
    
}