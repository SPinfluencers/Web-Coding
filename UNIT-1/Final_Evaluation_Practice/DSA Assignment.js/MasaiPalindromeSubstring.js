
// Masai Palindromic Substring Ended

// Description

// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.

function checkPalindrome(str)
{
    var rev_str = "";
    for(var i=str.length-1; i>=0; i--)
    {
        rev_str = rev_str + str[i];
    }

    if(str == rev_str) {
        return true
    }
    else {
        return false
    }
}

var str = "thisracecarisgood";

var max = -Infinity;

for(var i=0; i<str.length; i++)
{
    var bag = "";
    for(var j=i; j<str.length; j++)
    {
        bag = bag + str[j]
        // console.log(bag)
        var result = checkPalindrome(bag)

        if(result == true) {

            if(max < bag.length)
            {
                max = bag.length
            }
        }
    }
}
console.log(max)