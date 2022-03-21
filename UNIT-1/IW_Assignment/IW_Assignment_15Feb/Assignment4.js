
// Write a custom function that has the same behavior of inbuilt String Substring Function

function substring(string,str,end)
{
  var bag = ""
  for(var i=str; i<end; i++) 
  {
     bag = bag + string[i]
  }
  return bag
}

var statement = "thisisracecarisgood";

console.log(substring(statement,6,13))

console.log(statement.substring(6,13))