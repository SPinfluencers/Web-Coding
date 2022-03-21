// Given x =20

// Step 1 : Find Square of x
// Step 2 : Multiply the above result with 10
// Step 3 : print the step2 output

// Write three function
// 1. square of a number

function square(p)
{
  var square = p*p;
  return square;
}

// 2. Multiplication with 10

function multiply10(x)
{
  var mul = x+10
  return mul;
}


// 3. printVariable 

function printVariable(x)
{
  console.log(x)
}


var p = 20;
var p2 = square(p);
var p3 = multiply10(p2)
printVariable(p3)