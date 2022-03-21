
var str1 = "abc";
var str2 = "cba"

var new_str = str1 + str2

function checkPalindrome(str)
{
    var rev_str = "";
    for(var i=str.length-1; i>=0; i--)
    {
        rev_str = rev_str + str[i]
    }
    if(str == rev_str) {
        return "yes"
    }
    else {
        return "no"
    }
}

console.log(checkPalindrome(new_str))