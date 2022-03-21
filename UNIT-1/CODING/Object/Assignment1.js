
var num = 5                                                                                                                                                    ;

var lower = "abcdefghijklmnopqrstuvwxyz";

var object = {};

for(var i=0; i<=num; i++)
{
   object[lower[i]] = i+1
}

for(var key in object)
{
    console.log(key+"-",object[key])
}