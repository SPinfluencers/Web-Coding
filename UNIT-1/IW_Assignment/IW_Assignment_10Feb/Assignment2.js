// STRING LOWER TO UPPER CASE
// Given a string in lower case convert it to upper case

var name = "sagar";

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var bag = "";

for(var i=0; i<name.length; i++)
{
    var char=name[i]
    
        for(var j=0; j<lower.length; j++)
        {
            if(char==lower[j])
            {
                bag = bag + upper[j]
            }
        }
    
}
console.log(bag);