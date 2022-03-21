// SMALL CASE CHECK
// Write a function to check if the char is a small case or not

function checkSmallCase(char)
{
  var lower = "abcdefghijklmnopqrstuvwxyz";

  for(var i =0; i<lower.length; i++)
  {
    if(char == lower[i])
    {
      return true;
    }
  }

  return false;
}



var x = checkSmallCase("A");
if(x==true)
{
  console.log("Small case");
}
else
{
  console.log("Upper case");
}

