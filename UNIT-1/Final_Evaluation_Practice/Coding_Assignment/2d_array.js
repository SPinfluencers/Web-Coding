
arr = [
    [1,2],
    [3,4],
    [5,6]
] 
var row = 2;
var col = 3

// for(var i=0; i<3; i++)
// {
//     var bag = "";
//     for(var j=0; j<2; j++)
//     {
//         bag = bag + arr[i][j] + " "
//     }
//     // console.log(arr[i])
//     console.log(bag)
// }


// for(var i=0; i<3; i++)
// {
//     var sum = 0; 
//     var bag = "";
//     for(var j=0; j<2; j++)
//     {
//         // bag = bag + arr[i][j] + " "
//         sum = sum + arr[i][j]
//     }
//     // console.log(arr[i])
//     console.log(sum)
// }

// sum of Indexes

// for(var i=0; i<col; i++)
// {
//     var bag = "";
//     for(var j=0; j<row; j++)
//     {
//         bag = bag + (i+j) + " ";
//     }
//     console.log(bag)
// }


//  Even Sum in Rows

// arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// var row = 3;
// var col = 3;


// for(var i=0; i<row; i++)
// {
//     var sum = 0;
//     for(var j=0; j<col; j++)
//     {
//         if(arr[i][j]%2 == 0)
//         {
//             sum =  sum + arr[i][j]
//         }
//     }
//     console.log(sum)
// }

// Vowel in row

// var arr = [
//     ["a","b"],
//     ["c","d"],
//     ["e","f"],
// ]

// var row = 3;
// var col = 2;



// for(var i=0; i<row; i++)
// {
//     var flag = false;
//     for(var j=0; j<col; j++)
//     {
//         if(arr[i][j] == "a"|| arr[i][j] == "e"|| arr[i][j] == "i"|| arr[i][j] == "o"|| arr[i][j] == "u")
//         {
//             flag = true
//             break;
//         }
        
//     }
//     if(flag == true) {
//         console.log("yes")
//     }
//     else {
//         console.log("no")
//     }
// }

// var arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];


// for(var i=0; i<arr.length; i++)
// {
//     var bag = "";
//     var sum = 0;
//     for(var j=0; j<arr.length; j++)
//     {
//         // console.log(arr[i][j])
//         // bag = bag + arr[j][i]
//         if(arr[j][i]%2 == 0)
//         {
//             sum = sum + arr[j][i]
//         }
//     }
//     // console.log(bag)
//     console.log(sum)
// }