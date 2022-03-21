


function swap(name)
{
    var lower = "abcdefghijklmnOpqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var bag = "";
    for(var i=0; i<=name.length-1; i++)
    {
        
       for(var j=0; j<=lower.length-1; j++)
       {
          if(name[i] == upper[j])
          {
              bag = bag + lower[j]
          }
          else if(name[i] == lower[j])
          {
              bag = bag + upper[j]
          }
       }
    }
    return bag
}

var name = "Test";

console.log(swap(name))