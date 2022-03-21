
// Remove unique attom

var char = ["S","A","G","A","R","P","G"];

var output = [];

var present = false;

for(var i=0; i<=char.length-1; i++)
{
    for(var j=0; j<=output.length-1; j++)
    {
        if(char[i] == output[j]) 
        {
            present = true;
            break;
        }
    }

    if(present == false)
    {
        output.push(char[i])
    }
    else 
    {
        present = false
    } 
}



console.log(output)