var stack = []
function stackSp(arr) {
    
    if(arr[0] === 1) {
        if(stack.length !== 0) {
            console.log(stack[stack.length-1])
            stack.pop()
        }
        else {
            console.log("No Food")
        }
    }
    else if(arr[0] === 2) {
        stack.push(arr[1])
    }
}



function runProgram(input){
    
   var input = input.trim().split("\n")
   var T = +input[0]
   var line = 1
   for(let i = 0; i < T; i++) {
       let arr = input[line].trim().split(" ").map(Number)
       line++
       stackSp(arr)
   }
}


 

if (process.env.USERNAME === "Admin") {
  runProgram(`6
  2 5
  2 7
  1
  2 9
  1
  1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}