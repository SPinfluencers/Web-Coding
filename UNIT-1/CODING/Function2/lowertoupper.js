
function lowerToUpper(name) 
{
    var lower = "abcdefghijklmnopqrstuvwxyz ";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    var bag = "";
    for(var i=0; i<name.length; i++) {
       
       for(var j=0; j<lower.length; j++) {
          if(name[i]==lower[j]) {

              bag = bag + upper[j];
              break;
          }
          
       }
       
    }
    return bag
}

var name = "aaji";
var name1 = "sagar rajendra pawar"

console.log(lowerToUpper(name));