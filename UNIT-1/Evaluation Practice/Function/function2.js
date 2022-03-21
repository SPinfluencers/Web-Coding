
// Write a function to check if the char is a small case or not


function check(char)
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var flag = false
    
    for(var i=0; i<=lower.length-1; i++)
    {
        if(char == lower[i])
        {
           flag = true;
           break
        }
    }
    
    if(flag == true)
    {
        return "lower"
    }
    else
    {
        return "Upper"
    }
}

console.log(check("K"))

