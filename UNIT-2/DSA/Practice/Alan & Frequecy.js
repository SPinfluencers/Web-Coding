
var lower = "abcdefghijklmnopqrstuvwxyz" ;

var str = "sagar";

var obj = {};

for(var i=0; i<lower.length; i++)
{
    if(obj[lower[i]] === undefined) 
    {
        obj[lower[i]] = 0
    }
    else
    {
        obj[lower[i]]++
    }
}
// console.log(obj)

for(var j=0; j<str.length; j++)
{
    if(obj[str[j]] == undefined)
    {
        obj[str[j]] = 1
    }
    else
    {
        obj[str[j]]++
    }
}
// console.log(obj)
var count = 0;
for(var key in obj)
{
    if(obj[key] > count)
    {
        console.log(key + "-" + obj[key])
    }
}
