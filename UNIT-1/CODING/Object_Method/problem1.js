
var rectangle = {
    length : 30,
    breadth : 40,

    area : function() {
             var x = this.length*this.breadth
              console.log(x)
    },

    perimeter : function() {
        var y = 2*(this.length*this.breadth)
        console.log(y)
    }
}

rectangle.area()
rectangle.perimeter()