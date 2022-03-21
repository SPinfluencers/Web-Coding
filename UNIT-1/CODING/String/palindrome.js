// Check palindrome for given statement coming on even position if palindrome print "Yes" else "No";

var name = "abcdca";
var bag = "";
reverse_bag = "";
var flag = false ;
for(var i=0; i<name.length; i++)
{
    if(i%2==0)
    {
        bag = bag + name[i];
    }
}
for(var j=bag.length-1; j>=0; j--)
    {
        reverse_bag = reverse_bag + bag[j];

        if(bag == reverse_bag)
        {
            flag = true;
        }
    }
    if(flag==true)
    {
        console.log("yes")
    }
    else {
        console.log("no")
    }


