
var str = "aba";

var lower = "abcdefghijklmnopqrstuvwxyz";

var obj = {};

for(var i=0; i<lower.length; i++)
{
    obj[lower[i]] = i+1
}

var sum = 0;
for(var j=0; j<str.length; j++)
{
    sum = sum + obj[str[j]]
}
console.log(sum)