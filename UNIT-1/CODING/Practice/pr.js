
// product

var arr = [2,5,3,5,4]
var product = 1;
for(var i=0; i<arr.length; i++)
{
    product = product * arr[i]
}
// console.log(product)


// substring

var str = "abcba";
var count = 0;
for(var i=0; i<str.length; i++)
{
    var bag = "";
    for(var j=i; j<str.length; j++)
    {
        bag = bag + str[j]
        
        if(bag[i] == bag[bag.length-1])
        {
            count++
        }
    }
}
console.log(count)