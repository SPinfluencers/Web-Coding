// check all charecter start from "a"

var names = ["sagar","chetan","rahul","sam","vijay","jay"];

var count = 0;

for(var i=0; i<names.length; i++)
{
   var x = names[i];

   for(var j=0; j<x.length; j++)
   {
       if(x[j]=="a")
       {
           count++
           break;
       }
   }
}
console.log(count);