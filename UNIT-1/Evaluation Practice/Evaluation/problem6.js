
var radius = {
    r : 3,
    pi : 3.14,

    area : function () {
        console.log(this.pi * this.r * this.r)
    },

    circumference : function () {
        console.log(2 * this.pi * this.r)
    }
}

radius.area()
radius.circumference()