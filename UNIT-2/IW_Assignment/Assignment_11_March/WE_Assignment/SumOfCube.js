
// SUM OF CUBES
// Given an array of numbers find the sum of cubes if the number is divisible by 3 
// Sample Input - [1, 2, 3, 4, 5, 6] 
// Sample Output - 243 (27+216)

var arr = [1, 2, 3, 4, 5, 6] ;

var out = arr.filter(function (element) {
    return element%3==0
}).reduce(function (sum,element) {
    return sum+element**3
},0)

console.log(out)