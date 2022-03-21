
// MATRIX SNAKE

// Given a matrix print it in the form of a snake

var matrix = [

    ["A","B","C"],
    ["D","E","F"],
    ["G","H","I"],
    ["J","K","L"],
]

var output = [];

 for(var i=0; i<=matrix.length-1; i++)
 {
     var snake = "";

     if(i%2 == 0)
     {
        for(var j=matrix[0].length-1; j>=0; j--)
        {
            snake = snake + matrix[i][j] + " ";
        }
     }

     else 
     {
        for(var j=0; j<=matrix[0].length-1; j++)
        {
            snake = snake + matrix[i][j] + " ";
        }
     }

     console.log(snake)
}

