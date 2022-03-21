
var input = ["M","A","S","A","I"];

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var bag = []
for(var i=0; i<=input.length-1; i++)
{
    for(var j=0; j<=upper.length-1; j++)
    {
        if(input[i]==upper[j])
        {
           bag = bag + lower[j];
        }
    }
}
console.log(bag)