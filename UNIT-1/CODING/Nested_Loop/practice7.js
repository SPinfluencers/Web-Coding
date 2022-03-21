
for(var father=1; father<=5; father++) 
{
    for(son=1; son<=5; son++) 
    {
        if(son>father) {
            break;
        }
        console.log(father,son);
    }
}

console.log("-------------------------------------------------")


for(var father=1; father<=5; father++) 
{
    for(son=1; son<=5; son++) 
    {
        if(son>father) {
            continue;
        }
        console.log(father,son);
    }
}