
var str = "abcdghjdyedgbi";
var bag = "";

for(var i=0; i<str.length-1; i++)
{
    if(i%2==1)
    {
        bag = bag + str[i];
    }
}
var reverse_bag = "";
for(j=bag.length-1; j>=0; j--)

    {
        reverse_bag = reverse_bag + bag[j]
    }

if(bag==reverse_bag)
{
    console.log("palindrome")
}
else 
{
    console.log("Not")
}