// CHECK USERNAME & PASSWORD
// Given stored username and password and input username and password, Print if the user can login or not.

var input_username = "sagar123";
var input_password = 865735;

var stored_username = "sagar123";
var stored_password = 865735;

if(input_username==stored_username)
{
   if(input_password==stored_password)
   {
       console.log("Log in Successful");
   }
   else
   {
       console.log("Invalide Login")
   }
}
else
{
    console.log("Error");
}