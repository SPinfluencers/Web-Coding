// Convert The character

var char = "Masai";
var bag = "";
for(var i=0; i<char.length; i++)
{
    if(i==2)
    {
        bag = bag + "S";
    }
    else
    {
        bag = bag + char[i]
    }
}
console.log(bag)