
// You are given a strings, you have to find the count of all such substrings which start and ends with the same character.

var str = "abcab";
var count = 0
for(var i=0; i<str.length; i++)
{
    var bag = "";
    for(var j=i; j<str.length; j++)
    {
        bag = bag + str[j]
       
        if(bag[0] == bag[bag.length-1])
        {
            count++
        }
    }
}
console.log(count)