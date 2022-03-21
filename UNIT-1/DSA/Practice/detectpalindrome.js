

function checkPalindrome(string)
{
    var reverse_string = "";
    for(var i=string.length-1; i>=0; i--)
    {
        reverse_string = reverse_string + string[i];
    }
    if(string==reverse_string)
    {
        return "palindrome"
    }
    else {
        return "Not Palindrome"
    }
}


var name = "racecar";

console.log(checkPalindrome(name))


