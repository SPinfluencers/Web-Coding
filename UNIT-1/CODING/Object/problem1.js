var details = {
    name : "Kaleen Bhaiya",
    age : 50,
    gender : "Male",
    city : "Mirzapur",
    hobby : "Guns",
    subject : ["English","Marathi","Hindi"],
    marks : [12,1,65]
};


for(var key in details)
{
  if(details[key]===50)
  {
      console.log(key)
  }
}