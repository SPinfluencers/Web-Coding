
// var symbol = "!@#$%^&*";

// var obj = {};

// for(var i=0; i<symbol.length; i++)
// {
//    obj[symbol[i]] = i+20
// }

// for(var key in obj)
// {
//    console.log(key + "-" +obj[key])
// }

// var str = "abcd";

// var obj = {};

// var lower = "abcdefghijklmnopqrstuvwxyz";

// for(var i=0; i<lower.length; i++)
// {
//     obj[lower[i]]  = i+1
// }

// var sum = 0;
// for(var j=0; j<str.length; j++)
// {
//     sum = sum + obj[str[j]]
// }
// console.log(sum)


// Find Unique

// var arr = ["K","S","B","R","P","K","B"];

// var output = [];

// var present = false;

// for(var i=0; i<arr.length; i++)
// {
//     for(var j=0; j<output.length; j++)
//     {
//         if(arr[i] == output[j]) {
//             present = true;
//         }
//     }

//     if(present == false)
//     {
//         output.push(arr[i])
//     }
//     else {
//         present = false
//     }
// }

// console.log(output)

// Given a string print, the number of times each character appears

// var name = "sagar";

// var obj = {};

// for(var i=0; i<name.length; i++)
// {
//     if(obj[name[i]] == undefined )
//     {
//         obj[name[i]] = 1
//     }
//     else
//     {
//         obj[name[i]]++
//     }
// }
// console.log(obj)