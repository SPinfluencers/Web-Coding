

function dsa(check)
{
    var count = 0;
    for(var i=0; i<check.length; i++)
    {
        bag = "";
        for(var j=0; j<=i; j++)
        {
            bag = bag + check[j]
        }
        if(bag[0]==bag[bag.length-1])
        {
            count++
        }

    }
    return bag
}

var name = "abcab";

console.log(dsa(name))