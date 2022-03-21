// masai school = masai-school

function change(char)
{
   var bag = "";
   for(var i=0; i<=char.length-1; i++)
   {
       if(char[i]==" ")
       {
           bag = bag + "-" 
       }
       else {
           bag = bag + char[i];
       }
   }
   return bag
}


var word = "masai school";
var name = "G S highschool";

console.log(change(name));
