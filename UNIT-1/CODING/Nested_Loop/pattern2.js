// *****
// *
// ***
// *
// *****


for(var i=1; i<=5; i++)
{
    var bag = "";
    for(var j=1; j<=5; j++)
    {
        if((i==1) || (i==5))
        {
            bag = bag + "*";
        }
            else if(i==2 || i==4)
            {
                if(j==1)
                {
                    bag = bag + "*"
                }
            else 
                {
                    bag = bag + "";
                }
            }
        else if(i==3)
        {
            if(j==1 || j==2 || j==3)
            {
                bag = bag + "*"
            }
        }
    }
    console.log(bag)
    
}
