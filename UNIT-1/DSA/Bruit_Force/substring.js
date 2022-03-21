// Substring Problem 
// Find a substring which start and end with same char


var str = "abcab";
var count =0;
for(var i=0; i<str.length; i++)
{
    
    var bag = "";
    for(var j=0; j<=i; j++)
    {
        bag = bag + str[j]

        if(bag[0]==bag[bag.length-1])
        {
            count++
        }
    }
    
    
    
}
console.log(count)