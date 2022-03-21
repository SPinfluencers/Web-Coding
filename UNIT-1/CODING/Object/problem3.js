
var array = ["K","S","B","R","P","K","B"];
var present = false;
var unique = [];
for(var i=0; i<array.length; i++)
{
   for(var j=0; j<unique.length; j++)
   {
       if(array[i] == unique[j])
       {
          present = true;
          break;
       }
   }
   if(present == true)
    {
        unique.push(array[i]);
    }
    else
    {
        present = false
    }
}
console.log(unique)