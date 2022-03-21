

var items = [
    ["A","B","C"],
    ["D","E","F"],
    ["G","H","I"],
]

for(var i=0; i<=items[0].length-1; i++)
{
    var bag = "";
    for(var j=0; j<=items.length-1; j++)
    {
        bag = bag + items[j][i] + " " ;
    }
    console.log(bag)
}