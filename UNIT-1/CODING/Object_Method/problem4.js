
var details = {
    data : [],
    addStudent : function(name1, math1, science1, english1) 
    {
      
        var obj = {}

        obj.name = name1;
        obj.math = math1;
        obj.science = science1;
        obj.english = english1;

         this.data.push(obj)
    }
}

details.addStudent("Shubham",10,30,35);
details.addStudent("rajesh",45,50,60);
details.addStudent("rohit",75,85,66);

console.log(details.data)