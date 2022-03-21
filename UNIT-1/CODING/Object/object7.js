
var str = "abcd"

var lower = "abcdefghijklmnopqrstuvwxyz";

var obj = {}

for(var i=0; i<=lower.length-1; i++)
{
   obj[lower[i]] = i
}

for(var j=0; j<=str.length-1; j++)
{
    sum = sum + obj[str[i]]
}

