
var input = [

    ["A","B","C"],
    ["D","E","F"],
    ["G","H","I"],

]

var rightDiagonal = []
var leftDiagonal = []

for(var i=0; i<=input.length-1; i++)
{
    for(var j=0; j<=input[0].length-1; j++)
    {
       if(i == j)
       {
          rightDiagonal.push(input[i][j])
       }
       if(i+j == (input[0].length)-1)
       {
         leftDiagonal.push(input[i][j])
       } 
    }
    
}
console.log(rightDiagonal)
console.log(leftDiagonal)