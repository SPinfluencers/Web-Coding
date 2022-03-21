
// Create a rectangle object with length and width properties

var rectangle = {

    length : 40,
    width : 30,

    area : function() {
        console.log(this.length * this.width)
    },

    perimeter : function() {
        console.log(2*(this.length * this.width))
    }

};


rectangle.area()

rectangle.perimeter()