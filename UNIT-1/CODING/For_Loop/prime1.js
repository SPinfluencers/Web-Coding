
    for(var j=1; j<=100; j++)
    {
       
        
        var count = 0;
        for(var i=1; i<=j; i++)
        {
            if(j%i==0)
            {
                count++
            }
        }
        if(count==2)
        {
            console.log(j,"Prime")
        }
        // else
        // {
        //     console.log(j,"Not Prime");
        // }



    }





    