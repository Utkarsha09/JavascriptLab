let score = "33abc"

// Both are same
console.log(typeof score);
console.log(typeof(score)); // In functions

// Conversion string to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN:- Can't convert properly


// "33 :- 33
//"33abc" :- NaN
// true :- 1, False :- 0


let isloggedIn = 1

let booleanisloggedIn = Boolean(isloggedIn)

console.log(isloggedIn);
console.log(booleanisloggedIn);

// 1 :- true , 0 :- false
// "" :- false
// "Utkarsha" :- true

let someNumber = 66

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);
