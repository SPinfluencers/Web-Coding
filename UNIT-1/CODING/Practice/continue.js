var name = "saGaR";

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var bag = "";
for(var i=0; i<name.length; i++)
{
    
    for(var j=0; j<lower.length; j++)
    {
        if(name[i] == lower[j])
        {
            bag = bag + name[i]
            break;
        }
        
    }
    
}
console.log(bag);