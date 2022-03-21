// Lower TO Upper

function lowerToupper(name)
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var bag = "";
    for(var i=0; i<name.length; i++)
    {
        for(var j=0; j<lower.length; j++)
        {
            if(name[i]==lower[j])
            {
                bag = bag + upper[j];
                break;
            }
        }
    }
    return bag 
}


var name = "sagar";
var name2 = "pawar"

console.log(lowerToupper(name2))