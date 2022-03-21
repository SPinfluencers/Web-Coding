
var name = "sagar";

var obj = {};

for(var i=0; i<name.length; i++)
{
    if(obj[name[i]] === undefined)
    {
        obj[name[i]] = 1
    }
    else {
        obj[name[i]]++
    }
}
console.log(obj)