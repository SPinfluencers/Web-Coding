
var name = "sagar";
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var bag = "";

for(var i=0; i<name.length; i++)
{
    for(var j=0; j<=lower.length-1; j++)
    {
        if(name[i] == lower[j])
        {
            bag = bag + upper[j]
        }
    }
}
console.log(bag)