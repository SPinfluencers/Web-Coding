function NextGreaterElement(n,arr) {

    var stack = [];
    var result = [];

    for(var i = n-1; i >= 0; i--) {

        while(stack.length !== 0 && stack[stack.length-1] <= arr[i]) {
            stack.pop()
        }

        if(stack.length !== 0) {
            result[i] = stack[stack.length - 1]
        }
        else {
            result[i]  = -1
        }
        stack.push(arr[i])
    }

    console.log(result.join(" "))





}



function runProgram(input){
    var input = input.trim().split("\n")
    var T = +input[0]
    var line = 1
    for(var i = 0; i < T; i++) {
        var n = +input[line]
        line++
        var arr = input[line].trim().split(" ").map(Number)
        line++
        NextGreaterElement(n,arr)
    }
    
}


 

if (process.env.USERNAME === "Admin") {
  runProgram(`1
  4
  1 3 2 4`);
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