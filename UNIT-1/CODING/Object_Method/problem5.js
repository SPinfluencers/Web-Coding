
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
    },

    lowScore : function() 
    {
        var lowScore = null;
        var lowTotal = Infinity;

        for(vri=0; i<this.data.length; i++)
        {
            var currentStudent = this.data[i];

            var total = currentStudent.maths + currentStudent.science + currentStudent.english

            if(lowTotal > total) 
            {
                lowTotal = total;
                lowTotal = currentStudent
            }
        }

    }
}

details.addStudent("Shubham",10,30,35);
details.addStudent("rajesh",45,50,60);
details.addStudent("rohit",75,85,66);

console.log(details.data)