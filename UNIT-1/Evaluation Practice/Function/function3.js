
// Write a function to replace spaces in a given string with -

function replace(name)
{
    var bag = "";
    for(var i=0; i<=name.length-1; i++)
    {
        if(name[i] == " ")
        {
            bag = bag + "-"
        }
        else
        {
            bag = bag + name[i]
        }
    }
    return bag
}

var name = "sagar rajendra pawar";

console.log(replace(name))