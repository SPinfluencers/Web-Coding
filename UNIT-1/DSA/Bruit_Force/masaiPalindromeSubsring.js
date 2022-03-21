
// Masai Palindromic Substring

var name = "thisracecarisgood";

function checkPalindrome(char)
{
    revrse_char = "";
   for(var i=char.length-1; i>=0; i--)
   {
     revrse_char = revrse_char + char[i]
   }

   if(char==revrse_char)
    {
        return true
    }
    else 
    {
        return false
    }
}

var max_pad = -Infinity;

for(var i=0; i<=name.length-1; i++)
{
    var bag = "";
    for(var j=i; j<=name.length-1; j++)
    {
        bag = bag + name[j]

        var result = checkPalindrome(bag)

        if(result === true)
        {
            if(max_pad < bag.length)
            {
                max_pad = bag.length
            }
        }
    }

    


}

console.log(max_pad)
