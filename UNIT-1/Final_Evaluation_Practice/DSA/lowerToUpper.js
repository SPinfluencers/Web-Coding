

function lowerToUpper(char)
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(var i=0; i<upper.length; i++)
    {
        if(char == lower[i]) {
           char = upper[i]
        }
    }
    return char
}


var str = "sagar";

var bag = "";
for(var i=0; i<str.length; i++)
{
   bag = bag + lowerToUpper(str[i])
}


var arr = ["sa","ga","r"];

var new_arr =  [];

for(var j=0; j<arr.length; j++)
{
    var value = arr[j];
    var bag  = "";
    for(var k=0; k<value.length; k++)
    {
        bag = bag + lowerToUpper(value[k])
    }

    new_arr.push(bag)
}

console.log(new_arr);