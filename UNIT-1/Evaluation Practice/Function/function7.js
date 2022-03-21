
// Write code to calculate the average of an array

function sum(arr)
{
   var sum = 0;
   for(var i=0; i<=arr.length-1; i++)
   {
     sum = sum + arr[i]
   }
   return sum 
}

function findAverage(arr)
{
  if(arr.length == 0)
  {
      return 0
  }
  else
  {
      var average = sum(arr)/arr.length
      return average
  }
}

var arr = []

console.log(findAverage(arr))