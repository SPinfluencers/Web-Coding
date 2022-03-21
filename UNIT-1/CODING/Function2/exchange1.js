
function exchange(name)
{
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    
    var bag = "";
    for(var i=0; i<=name.length-1; i++)
    {
        
        for(var j=0; j<=lower.length-1; j++)
        {
            
                if(name[i] == upper[j])
                {
                    bag = bag + lower[j]
                }
                if(name[i] == lower[j])
                {
                    bag = bag + upper[j]
                }
            
        }
        
    }

    return bag
}

var name = "Test";

console.log(exchange(name))