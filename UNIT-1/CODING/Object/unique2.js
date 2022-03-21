
var arr = ["A","B","C","B","E","F"];

var output = [];
var present = false;

for(var i=0; i<arr.length; i++)
{
   for(var j=0; j<output.length; j++)
   {
       if(arr[i] == output[j]) {

           present = true;
           break;
       }
   }

   if(present == false)
   {
       output.push(arr[i])
   }
   else {
       present = false
   }
}

console.log(output)