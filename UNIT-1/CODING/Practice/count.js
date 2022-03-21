
function char(spell)
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var bag = "";
    for(var i=0; i<lower.length; i++)
    {
        if(spell==lower[i])
        {
            bag = bag + upper[i]
        }
    }
    return bag
}

var word = "masai";
var bag = "";
for(var i=0; i<=word.length; i++)
{
    bag = bag + char(word[i])
}


var input = ["MA", "SA", "I", "SCH", "OOL"];
var output =[];
for(var j=0; j<=input.length; j++)
{
    var bag1 = "";
    var value = input[j];

    for(var k=0; k<=value; k++)
    {
        bag1 = bag1 + char(value[k])
    }
    output.push(bag1)
}
console.log(output)