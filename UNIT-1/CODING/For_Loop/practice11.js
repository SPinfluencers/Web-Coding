
// Check no is prime or not

var num = 10;
var count=0;

for(var i=1; i<=num; i++)
{
    if(num%i == 0)
    {
        count++;
        
    }
}
if(count==2)
{
    console.log("prime")
}
else{
    console.log("not prime")
}


// If we have two no 11 , 17 Check if both are prime or not 
var num = 10;
var num1 = 12;
var count = 0;
var count1 = 0;

for(var i=1; i<=num; i++) {
    if(num%i==0) {
        count++
    }
}
for(var j=1; j<=num1; j++) {
    if(num%j==0) {
        count1++
    }
}

if((count==2)&&(count1==2)) {
    console.log("prime");
}
else {
    console.log("Not Prime");
}
