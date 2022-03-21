
// Write a custom function that has the same behavior of inbuilt Array Join Function


function join(array)
{
    var bag = "";
    for(var i=0; i<=array.length-1; i++)
    {
        bag = bag + array[i]
    }
    return bag
}

var name = ["S","A","G","A","R"];

console.log(join(name))

console.log(name.join(""))