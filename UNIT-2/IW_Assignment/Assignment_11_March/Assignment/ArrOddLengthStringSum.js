
// ARRAY ODD LENGTH STRINGS SUM
// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8

var str = ["A", "Good", "Problem"];

var out = str.map(function (element) {
    return element.length
}).filter(function(element) {
    return element%2 == 1
}).reduce(function (sum,element) {
    return sum + element
},0)

console.log(out)