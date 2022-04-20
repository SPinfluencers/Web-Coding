
var stack = []
var que = []
var front = 0

function myFunction(arr) {

    if(arr[0] === 1) {
        que.push(arr[1])
    }
    if(arr[0] === 2) {
        stack.push(arr[1])
    }
    if(arr[0] === 3) {
        // console.log(que[0])
        if(que.length !== 0) {
            console.log(que[front])
        }
        else {
            console.log(-1)
        }
    }
    if(arr[0] === 4) {
        // console.log(stack[stack.length - 1])
        if(stack.length !== 0) {
            console.log(stack[stack.length - 1])
        }
        else {
            console.log(-1)
        }
    }
    if(arr[0] === 5) {
        stack.push(que[front])
        front++
    }
}



function runProgram(input){
    
    var input = input.trim().split("\n")
    var T = +input[0]
    var line = 1
    for(var i = 0; i < T; i++) {
        var arr = input[line].trim().split(" ").map(Number)
        line++
        myFunction(arr)
    }
    
}


 

if (process.env.USERNAME === "Admin") {
  runProgram(`7
  1 4
  2 3
  1 2
  3
  4
  5
  4`);
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