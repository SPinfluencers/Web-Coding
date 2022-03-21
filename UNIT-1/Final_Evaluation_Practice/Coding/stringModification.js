
var str = "sagarpawar";

var bag1 = "";
for(var i=0; i<str.length/2; i++)
{
    bag1 = bag1 + str[i]
}


var bag2 = "";
for(var j=str.length/2; j<str.length; j++)
{
    bag2 = bag2 + str[j]
}


console.log(bag2+bag1)

// for(var i=str.length-1; i>=0; i--)
// {
//     console.log(str[i])
// }