
let amar = {
    name: "amar",
    occupation: "singer",
    live: "Goa",

    friends: function(skill) {
        console.log(`${this.name} is ${skill}`)
    }
};

let akbar = {
    name: "akbar",
    occupation: "chef",
    live: "Mumbai",
};

let anthony = {
    name: "anthony",
    occupation: "magisian",
    live: "Kashmir",
}

let x = amar.friends.call(akbar, "cooking")


