

// SUBJECT MARKS HIGHEST & LEAST
// Create an object with the following functionality 
// a) Ability to add student details and 3 subject marks 
// b) Methods to find the student with the least and highest total

var details = {

     data : [],

    add_student : function(name,subject1,subject2,subject3) {

        var obj = {}

        obj.name = name;
        obj.english = subject1;
        obj.marathi = subject2;
        obj.hindi = subject3;

        this.data.push(obj)
    },

    low_score : function()
        {
            for(var i=0; i<this.data.length; i++)
            {
                var current = this.data[i]
                var total = currentStudent.math +  currentStudent.science + currenttStudent.english

                if(lowTotal > total)
                {
                    lowTotal = total;
                    lowStudent = currentStudent;
                }
            }
            console.log(lowStudent)
        }
}




details.add_student("sagar",50,60,70)
details.add_student("sam",60,70,80)
details.add_student("rahul",70,80,90)

console.log(details.data)

// [
//     { name: 'sagar', english: 50, marathi: 60, hindi: 70 },
//     { name: 'sam', english: 60, marathi: 70, hindi: 80 },
//     { name: 'rahul', english: 70, marathi: 80, hindi: 90 }
// ]

details.low_score()

