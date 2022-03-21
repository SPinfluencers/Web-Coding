// You are given a string, whose length is stored in a variable with the nameN
// The string is stored in a variable with the namestr
// It is given that the length of the string is always divisible by 3
// You have to create a new modified string, such that individual parts of the original string of length 3, are reversed

// For example, consider the given string is str = abcdefghi, and N = 9. In this case, there are 3 parts of the string with length 3
// The first part is abc, the second part is def, and the third part is ghi. Now, you have to reverse all the three parts, and combine them in the same order as before
// Therefore, the first part after reversing is cba, second part after reversing is fed, and the third part after reversing is ihg
// Combining the three parts, the new modified string becomes cbafedihg, which is the required answer


var  str = "abcdefghi";

function reverse(str)
{
    var rev_bag = "";
    for(var i=str.length-1; i>=0; i--)
    {
        rev_bag = rev_bag + str[i]
    }
    return rev_bag
}

var output = [];
for(var i=0; i<str.length; i= i+3)
{
    output.push(str[i]+str[i+1]+str[i+2])
}

var bag = "";
for(var j=0; j<output.length; j++)
{
    // console.log(output[j])
    bag = bag + reverse(output[j])
}
console.log(bag)
