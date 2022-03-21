

function sagar(array) {

    var bag = "";

    for (var i = 0; i < array.length; i++) {

        bag = bag + array[i] + " ";
    }
    return bag;
}

var myArr = [1, 2, 3, 4, 5];

var str = sagar(myArr);

console.log(str);