// PRINT CALENDAR
// Print the Calendar date in the below format
// 1-1
// 2-1
// 3-1
// .
// .
// .
// 31-1

var day = 31 ;
var month = 1 ;

if(month == 2) 
{
    days = 28;
}
else if((month==4)||(month==6)||(month==9)||(month==11))
{
   days = 30;
}
else
{
    days = 31;
}

switch(month) {
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("february");
        break;
        
    case 3 :
        console.log("March");
        break; 
    case 4 :
        console.log("April");
        break;
    case 5 :
        console.log("May");
        break; 
    case 6 :
        console.log("Jun");
        break;
    case 7 :
        console.log("Jully");
        break;
    case 8 :
        console.log("August");
        break;
    case 9 :
        console.log("September");
        break;
    case 10 :
        console.log("Octomber");
        break;
    case 11 :
        console.log("November");
        break;
    case 12 :
        console.log("December");
        break;  
}

for(var day=1; day<=days; day++)
{
    console.log(day,month);
}