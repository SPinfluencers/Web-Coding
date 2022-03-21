
// Problem-1: Circle Object

// Create an object with a key called radius
// The object must have 2 methods,
// circumference: It will return the circumference of circle, and
// area: It will return the area of circle
// Hint : 

// Area of circle = pi * r * r 
// Circumference = 2 * pi * r

// Where r is the radius
//       pi is 3.14


var radius = {
     
    r : 10,
    pi : 3.14,

     area : function() {
            console.log(this.pi * this.r * this.r )
     },

     circumference : function() {
            console.log(2 * this.pi * this.r)
     }
}

radius.area()
radius.circumference()