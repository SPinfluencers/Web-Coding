
function callBhaiya(position)

{
    if(position<0 || position>3) 
    {
        return null;
    }
    return arr[position]
}

var arr = ["kaleen Bhaiya","Munna Bhaiya","Bablu Bhaya","guddu Bhaiya"]

var x = -1;

console.log(callBhaiya(x))

if(callBhaiya(-1)==null)
{
    console.log("Invalid")
}
