
// RECTANGLE OBJECT

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

var rectangle = {

    length : 40,
    breadth : 50,

    area : function() {
        console.log(this.length * this.breadth)
    },

    perimeter : function() {
        console.log(2 * (this.length * this.breadth))
    }

}

rectangle.area()

rectangle.perimeter()
