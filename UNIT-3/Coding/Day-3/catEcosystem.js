
// Cat ecosystem

const cat = {
    leg: 4,
    tail: true,
    furs: true,
    claws: "sharp",
};


// Object.create()

const lion = Object.create(cat);

const liger = Object.create(lion);

console.log(lion)