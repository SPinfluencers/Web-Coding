// Total bill = 500 rs , fixed charge = 80 rs
// 0-50 = 3rs          ---> 0-50 = 150rs
// 51-150 = 5rs        ---> 51-150 = 100*5 =500+150 =650 rs
// 151-Above = 10 rs   ---> 151-Above = 10rs per unit

var total_bll = 500;
var actual_bill = 500-80;
var unit = 0;

if(actual_bill>650)
{
    unit = unit + 150;
    remaining = actual_bill-650;
    unit = unit + (remaining/10);
}
else if(actual_bill>150)
{
    unit = unit + 50
    remaining = actual_bill-150;
    unit = unit + (remaining/5)
}
else {
    unit = actual_bill/3
}
console.log(unit);
