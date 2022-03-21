// start from last half of array [even array or Odd arry]

var names = ["A","B","C","D","E","F","G","H","I","J"];

var start = names.length/2

if(names.length%2==0)
{
    start = names.length/2;
}
else
{
    start = (names.length-1)/2;
}


for(var i=start; i<=names.length-1; i++)
{
    console.log(names[i]);
}