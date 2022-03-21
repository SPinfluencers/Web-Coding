// SUM OF ODD
// Given an array of numbers find the sum of odd elements 
// Sample Input - [1, 2, 3, 4] 
// Sample Output - 4


var arr = [1, 2, 3, 4];

var out = arr.filter(function(element) {
    return element%2==1
}).reduce(function(sum,element) {
    return sum+element
},0)

console.log(out)