
function reverseString(str)
{
    var rev_bag = "";
   for(var i=str.length-1; i>=0; i--)
   {
      rev_bag = rev_bag + str[i]
   }
   return rev_bag
}

var str = "abcdefghi";

var output = [];

for(var i=0; i<str.length; i=i+3)
{
   output.push(str[i] + str[i+1] + str[i+2])
}

var bag = ""
for(var j=0; j<output.length; j++)
{
    bag = bag + reverseString(output[j])
}
console.log(bag)