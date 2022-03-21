
function checkPalindrome(name)
{
    var bag = ""
    {
       for(var i=name.length-1; i>=0; i--)
       {
          bag = bag + name[i]
       }
       if(bag==name) {
           return true
       }
       else {
           return false
       }
    }
}

var name = "sagarnamanpawar";

// console.log(checkPalindrome(name))

var output = ""
for(var i=0; i<=name.length-1; i++)
{
    for(var j=i; j<=name.length-1; j++)
    {
       var bag1 = ""
       for(var k=i; k<=j; k++)
       {
           bag1 = bag1 + name[k]
       }
    //   console.log(bag1)
       var result = checkPalindrome(bag1)
       if(result==true)
       {
          output = bag1 
          if(output.length>1) {
            //   console.log(output)
          }
       }
    }
}
