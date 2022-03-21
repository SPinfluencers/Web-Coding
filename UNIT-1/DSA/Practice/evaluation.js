
var str = "abcdefghi";
var bag = "";
var x = str.length/3

for(var i=0; i<x; i++)
{
   bag = bag + str[i];
}
// console.log(bag)

var bag1 = "";
for(var i=3; i<x+x; i++)
{
   bag1 = bag1 + str[i];
}
// console.log(bag1)

var bag2 = "";
for(var i=6; i<x+x+x; i++)
{
   bag2 = bag2 + str[i];
}
// console.log(bag2)

var reverse_bag = "";
for(var j=bag.length-1; j>=0; j--)
{
    reverse_bag = reverse_bag + bag[j];
}
var reverse_bag1 = "";
for(var j=bag1.length-1; j>=0; j--)
{
    reverse_bag1 = reverse_bag1 + bag1[j];
}
var reverse_bag2 = "";
for(var j=bag2.length-1; j>=0; j--)
{
    reverse_bag2 = reverse_bag2 + bag2[j];
}

console.log(reverse_bag+reverse_bag1+reverse_bag2)


