
// Given a string print, the number of times each character appears

var str = "SAGAR";

var object = {};

for(var i=0; i<str.length; i++)
{
    var char = str[i];

    if(object[char] === undefined)
    {
        object[char] = 1;
    }
    else
    {
        object[char]++
    }
}

if(object == 1)
{
    console.log(object[i])
}

console.log(object)

