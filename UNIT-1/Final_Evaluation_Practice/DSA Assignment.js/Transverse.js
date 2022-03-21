
var matrix = [

    [1, 8, 9],
    [2, 7, 10],
    [3, 6, 11],
    [4, 5, 12],
    [5, 15, 17],

];

var row = 5;
var col = 3;

// for(var i=0; i<col; i++)
// {
//     for(var j=row-1; j>=0; j--)
//     {
//         console.log(matrix[j][i])
//     }
// }


// for(var i=0; i<col; i++)
// {
//     for(var j=0; j<row; j++)
//     {
//         console.log(matrix[j][i])
//     }
// }

var bag = ""
for(var i=0; i<row; i++)
{
    if(i%2 == 0)
    {
        for(var j=col-1; j>=0; j--)
        {
            // console.log(matrix[i][j])
            bag = bag + matrix[i][j] + " "
        }
    }
    else
    {
        for(var j=0; j<col; j++)
        {
            // console.log(matrix[i][j])
            bag = bag + matrix[i][j] + " "
        }
    }
}
console.log(bag)



