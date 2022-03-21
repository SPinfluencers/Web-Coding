

for(var i=1; i<=5; i++)
{
    var bag = "";
   for(var j=1; j<=5; j++)
   {
      if(i==1 || i==5)
      {
          bag = bag + "*" + " ";
      }
      else
      {
          if(i==3)
          {
              bag = bag + "*"
          }
          else
          {
              if(j==1)
              {
                  bag = bag + "*"
              }
              else
              {
                  bag = bag + ""
              }
          }
      }
   } 
   console.log(bag)  
}
