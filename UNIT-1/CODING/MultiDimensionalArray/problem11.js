
// REVERSE

var items = [

    ["A","B","C","X"],
    ["D","E","F","Y"],
    ["G","H","I","Z"],

]

var output = [];

for(i=0; i<=items.length-1; i++)
{
    for(var j=items[0].length-1; j>=0; j--)
    {
       output.push(items[i][j])
    }
}

console.log(output)