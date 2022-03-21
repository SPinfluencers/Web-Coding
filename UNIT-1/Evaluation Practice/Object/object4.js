
var str = "masaischool";

var output = {};

for(var i=0; i<str.length; i++)
{
   var char = str[i]

   if(output[char] == undefined)
   {
       output[char] = 1
   }
   else
   {
       output[char]++
   }
}

console.log(output)