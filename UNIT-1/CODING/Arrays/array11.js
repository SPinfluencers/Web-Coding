// Maximum no to find

var num = [20,50,60,25,82,100,22,50];

var pad = num[0];

for(var i=0; i<num.length; i++)
{
    if(pad<num[i]) 
    {
        pad = num[i];
    }
}

console.log(pad);