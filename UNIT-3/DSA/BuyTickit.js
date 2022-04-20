// There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

// There are N operations that can be performed on this line. The operations are of following type:

// E x : Integer x enters the queue (For such operation, print the new length of the queue.)

// D: The integer at front buys ticket and leaves the queue (For such operations, print the element 
//     that left the queue and the new size of the queue separated by space. If there is no element 
//     in the queue then print -1 in place of deleted element.)
    // 5
    // E 2
    // D
    // D
    // E 3
    // D

var que = []
var front = 0

function myFunction(arr) {
   
    if(arr[0] === "E") {
        que.push(arr[1])
        console.log(que.length)
    }
    if(arr[0] === "D") {
        if(que.length !== 0) {
            console.log(que[front] + " " + (que.length-1)) 
            que.shift()
        }
        else {
            console.log("-1" + " " + que.length)
        }
    }




}



function runProgram(input){
    var input = input.trim().split("\n")
    var T = +input[0]
    var line = 1
    for(var i = 0; i < T; i++) {
        var arr = input[line].trim().split(" ")
        line++
        myFunction(arr)
    }
    
}


 

if (process.env.USERNAME === "Admin") {
  runProgram(`5
  E 2
  D
  D
  E 3
  D`);
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