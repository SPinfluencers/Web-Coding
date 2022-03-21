function reverse(arr)
{
    var bag = ""
    for(var i=arr.length-1; i>=0; i--)
    {
        bag = bag + arr[i]
    }
    return bag
}

console.log(reverse("sagar"))

var str = "abcdefghi";

var output = [];
for(var i=0; i<str.length; i=i+3)
{
    // console.log(str[i]+str[i+1]+str[i+2])
    output.push(str[i]+str[i+1]+str[i+2])
}
// console.log(output)

var bag = "";
for(var i=0; i<output.length; i++)
{
    bag = bag + reverse(output[i])
}
console.log(bag)
