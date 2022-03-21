
// LOWER TO UPPER CASE
// Given a character in lower case print the upper case character

var char = "q";

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

for(var i=0; i<=upper.length-1; i++)
{
    if(char==lower[i])
    {
        console.log(upper[i]);
        break;
    }
    
}