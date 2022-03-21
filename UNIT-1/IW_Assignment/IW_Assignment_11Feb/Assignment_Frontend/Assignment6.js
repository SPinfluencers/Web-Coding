
// SWAP CASE
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST

function swap(string) {

    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var bag = "";

    for (var i = 0; i < string.length; i++) {
        var char = string[i]
        for (var j = 0; j < lower.length; j++) {
            if (char == lower[j]) {
                bag = bag + upper[j]
            }
            else if (char == upper[j]) {
                bag = bag + lower[j]
            }
        }
    }
    return bag;



}
var input = "Test";

console.log(swap(input))
