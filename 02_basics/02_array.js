// Merge Two or Mutiple Array in One Array

const marvel_heros = ["Thor", "Ironman","Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) // insert the Arry under Array
// console.log(marvel_heros);

// const newarr = marvel_heros.concat(dc_heros)// new array we return
// console.log(newarr);

const allnew_heros = [...marvel_heros,...dc_heros]
console.log(allnew_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Utkarsha"));// check Array or Not
console.log(Array.from("Utkarsha")); // Convert into Array
console.log(Array.from({name: "Utkrasha"}));//will provids empty Array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// create Array using multiple Variables