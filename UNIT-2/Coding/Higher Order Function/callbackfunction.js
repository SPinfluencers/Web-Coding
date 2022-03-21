
// Gloally Define

function name(no,str) {
    console.log("Web 17",no,str)
}

var number = 600
var n = "sagar"

name(number,n)


// __________________________________________________


function hay() {

}

console.log(hay)

// _____________________________________________________


function summer (num1,num2,resultDisplay) {
    var result = num1 + num2
    resultDisplay(result)
}

function resultDisplay(result) {
    console.log("Sume is" + "-" + result)
}

summer(2,3,resultDisplay)