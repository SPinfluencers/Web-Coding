
var str = "thisisracecarisgood";

function checkPalindrome(name)
{
    reverse_name = "";
    for(var i=name.length-1; i>=0; i--)
    {
        reverse_name = reverse_name + name[i]
    }
    if(name==reverse_name)
    {
        return true
    }
    else
    {
        return false
    }
}

var pad_max = -Infinity

for(var i=0; i<=str.length-1; i++)
{
    subString = "";
    for(var j=i; j<=str.length-1; j++)
    {
        subString = subString + str[j];
    //    console.log(subString)
        var result = checkPalindrome(subString)
        
            if(result == true)
            {
               if(pad_max < subString.length)
               {
                  pad_max = subString.length;
               }
            }
        
    }
}

// console.log(pad_max)