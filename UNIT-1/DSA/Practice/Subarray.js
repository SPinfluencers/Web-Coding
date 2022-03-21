var arr = [1,2,3,4,5];
var count = 0;
for(var i=0; i<arr.length; i++)
{
    var output = []
    for(var j=i; j<arr.length; j++)
    {
        output.push(arr[j])
        console.log(output)

        if(even(output[0])=="Even" && even(output[output.length-1])=="Even")
        {
            count++
        }
    }
    
}
console.log(count)

function even(i)
{
    if(i%2 == 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}