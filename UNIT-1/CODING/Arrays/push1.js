
var superhero = [];

superhero.push("Krishna","Ram","Karna","Arjun","Lakshman");

console.log(superhero[0]);
console.log(superhero[1]);
console.log(superhero[2]);

console.log("------------------------------------")

superhero[2]="Arjun";

console.log(superhero[0]);
console.log(superhero[1]);
console.log(superhero[2]);

console.log("--------------------------------------")

for(var i=0; i<=superhero.length-1; i++)
{
    console.log(superhero[i]);
}
