
function swap(x) {
    if(x == 1) {
        return 0
    }
    else if(x == 0) {
        return 1
    }
}


function myFunction(n,m,matrix) {
  
   for(var i=0; i<n; i++) {
    var bag = ""
       for(var j=0; j<m; j++) {
        //    console.log(matrix[i][j])
        if(matrix[i][j] == 0 || matrix[i][j] == 1) {
            var s = swap(matrix[i][j])
            bag = bag + s + " "
        }
       }
       console.log(bag)
   }
   
  



}





function runProgram(input){
    
   var input = input.trim().split("\n")
   var [n,m] = input[0].trim().split(" ").map(Number)
   var line = 1
   var matrix = []
   for(var i=0; i<n; i++) {
       var arr = input[line].trim().split(" ").map(Number)
       matrix.push(arr)
       line++
   }
   myFunction(n,m,matrix)
    
}


 

if (process.env.USERNAME === "Admin") {
  runProgram(`3 2
  1 0
  0 1
  1 1`);
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