// convert char upper to lower && lower to upper

var name = "SaGaR";

var lower = "abcdefghijklmnopqrstuvwxyz ";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
var bag = "";

for(var i=0; i<name.length; i++)
{
    var char = name[i];
    for(var j=0; j<lower.length; j++)
    {
        if(char==lower[j])
            {
                bag = bag + upper[j];
            }
            else if(char == upper[j])
            {
                bag = bag + lower[j];
            }
    }
}
console.log(bag);
