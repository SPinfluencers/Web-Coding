

function upperTolower(word)
{
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var bag = "";

    for(var i=0; i<upper.length; i++)
    {
        if(word == upper[i])
        {
            bag = bag + lower[i]
        }  
    }

    return bag
}

var arr = ["masai","school"];

var output = [];

for(var i=0; i<arr.length; i++)
{
    var bag1 = "";
    var value = arr[i]

    for(var j=0; j<value.length; j++)
    {
        bag1 = bag1 + upperTolower(value[j])
    }
    output.push(bag1)
}

console.log(output)
