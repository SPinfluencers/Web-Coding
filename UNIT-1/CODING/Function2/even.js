// even no print

function even(print)
{  
    var bag = " ";
    for(var i=1; i<=print; i++)
    {
        if(i%2 == 0)
        {
            bag = bag + i + " ";
        }
    }
    return bag
}

var num = 20
console.log(even(num))