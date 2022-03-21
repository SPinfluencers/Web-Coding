
function excange(arr)
{
    var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z","z"]
    var output = []
    
    for(var i=0; i<arr.length; i++)
    {
        var pad = "";
        for(var j=0; j<lower.length; j++)
        {
           if(arr[i]==lower[j])
           {
              pad = pad + upper[j]
           }
           else if(arr[i]==upper[j])
           {
               pad = pad + lower[j]
           }
        }
        output.push(pad)
    }
    
    return output
}

var name1 = ["S","a","G","a","R"];
var name2 = ["p","a","w","a","R"];

console.log(excange(name1))
console.log(excange(name2))

