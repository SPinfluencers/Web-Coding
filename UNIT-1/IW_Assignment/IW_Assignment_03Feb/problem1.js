
// AGE CLASSIFICATION
// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in 
// between 20 and 29 (both included) print Twenties.

var yearOfBirth = 2005;

var yearOfBirth = 2022 - yearOfBirth;

if((yearOfBirth >= 13) && (yearOfBirth <= 19))
{
    console.log("Teenage");
}
else if((yearOfBirth >= 20) && (yearOfBirth <= 29))
{
    console.log("Twenties");
}