
var str = "1001";

var count = 0;
for(var i=0; i<str.length; i++)
{
    var bag = "";

    for(var j=i; j<str.length; j++)
    {
       bag = bag + str[i]
       
      if(bag[0] == "1" && bag[bag.length-1] == "1")
      {
          count++
      }
    }  
    
}
console.log(count)