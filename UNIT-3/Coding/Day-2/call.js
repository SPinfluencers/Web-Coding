
let kitchen = {
    name: "kitchen",
    purpose: "cook",

    cookFood: function(order) {
        console.log('serving {order} in ${this.name}');
    },
};

let bed_room = {
    name: "bed_room",
    purpose: "sleep",
};

let leaving_room = {
    name: "leaving_room",
    purpose: "watching tv",
};

kitchen.cookFood.call(bed_room, "samosa")