
// ARRAY STRING PATTERN
// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]


var arr = ["assignment", "problem", "media", "upload"];

var out = arr.filter(function (element) {
    
    return ((element[0]=="a") || (element[element.length-1]=="a"))
})

console.log(out)

