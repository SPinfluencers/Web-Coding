

var movies = ["Bahubali","Pushpa","Wanted","Don","Dangal"];

for(var i=0; i<=movies.length-1; i++)
{
    if(i==2 || i==3)
    {
        continue;
    }
    console.log(movies[i]);
}