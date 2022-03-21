
var items = [
    ["A","B","C"],
    ["D","E","F"],
    ["G","H","I"],
]


for(var i=0; i<=items.length-1; i++)
{
    var bag = "";
    for(var j=0; j<=items[0].length-1; j++)
    {
        bag = bag + items[i][j] + " "
    }
    console.log(bag)
}

