


function palindrome(num)
{
    var rev_num = "";

    for(var i=num.length-1; i>=0; i--)
    {
        rev_num = rev_num + num[i]
    }
    
    if(num == rev_num)
    {
        return true
    }
    return false
}

var num = "22022022";

console.log(palindrome(num))


