var num = [10,20,50,80,27,96];
var pad = num[0];
for(var i=0; i<num.length; i++)
{
    if(pad<num[i])
    {
        pad = num[i];
    }
}
console.log(pad);