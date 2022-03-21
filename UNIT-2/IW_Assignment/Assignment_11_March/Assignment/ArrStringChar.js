// ARRAY STRING FIRST CHARACTER
// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]


var arr = ["Masai", "School"];

var out = arr.map(function(element) {
    return element[0]
})

console.log(out)