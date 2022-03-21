// Check the statement is palindrome or not If palindrome print "Yes" or "No";

var statement = "amkm";
var reverse_statement = "";
var flag = false;

for(var i=statement.length-1; i>=0; i--)
{
    reverse_statement=reverse_statement+statement[i];
    {
        if(statement[i]==reverse_statement[i])
        {
            flag = true;
            
        }
    }
}



if(flag==true)
{
    console.log("Yes");
}
else {
    console.log("No");
}

