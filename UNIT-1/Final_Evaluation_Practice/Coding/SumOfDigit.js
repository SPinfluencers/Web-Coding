var A = [12, 25, 56 ,85]

var sum = 0;

   for(var i=0;i<A.length;i++)
   {
       var rem =A[i];

       while(rem > 0)
       {

           sum = sum + rem%10;
          
          rem = Math.floor(rem/10) ;

          
       }
   }
   console.log(sum);


  // var sum = 0;
  //  for(var i=0; i<A.length; i++)
  //  {
  //      var rem = A[i];

  //      while (rem > 0)
  //      {

  //       sum = sum + rem%10;

  //       rem = Math.floor( rem/10)

  //      }
  //  }

  // console.log(sum)

  var A = [12, 25, 56 ,85]

   
var sum = 0;
  for(var i=0; i<A.length; i++)
  {
    var rem = A[i]
    while(rem > 0)
    {
        sum =  sum + rem%10
     
        rem = Math.floor(rem/10)

    }
  }

  console.log(sum)