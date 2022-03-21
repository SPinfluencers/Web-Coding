function substring(string)
{
  var bag1 = ""
  var count = 0;
  var  output = [];
  var bag3 = ""
  
  for(var i=0; i<=string.length-1; i++)
  {
      var bag = "";
      for(var j=i; j<=string.length-1; j++)
      {
        bag = bag + string[j]
        output.push(bag)
      }
  }
  for(var k=0; k<=output.length-1; k++)
  {
    if(output[k]=="racecar")
    {
      bag3 = bag3 + output[k]
    }
    else {
      bag3 = bag3 + ""
    }
  }
  return bag3
}

var statement = "thisisracecarisgood";

console.log(substring(statement))