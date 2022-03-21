// Category of String

var str = "efgi";

var lower = "abcdefghijklmnopqrstuvwxyz";

var obj = {};

for(var i=0; i<lower.length; i++)
{
   obj[lower[i]] = i+1
}

var bag = "";
for(var j=0; j<str.length; j++)
{
    // console.log(obj[str[j]])
    bag = bag + obj[str[j]]
}
console.log(bag)