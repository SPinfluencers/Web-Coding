// REPLACE SPACE
// Write a function to replace spaces in a given string with -


function replace(name)
{
    var bag = "";
    for(var i=0; i<name.length; i++)
    {
        if(name[i]==" ")
        {
            bag = bag + "-";
        }
        else {
            bag = bag + name[i]
        }
    }
    return bag
}


var type = "sagar rajendra pawar";
var type1 = "Masai School"

console.log(replace(type1));