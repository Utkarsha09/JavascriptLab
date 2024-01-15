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


 // ************** Operation *****************

let value =9
let negValue = -value
console.log(negValue);

console.log(2+3);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/4);
console.log(2%3);

let str1 ="Hello"
let str2 = "Utkarsha"

let str3 = str1+str2
console.log(str3);

console.log("1"+ 2);
console.log(1+ "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true); // 1
console.log(+""); // 0 not neccecary 

let num1, num2, num3 

num1 = num2 = num3 = 2+2

console.log(num1);
console.log(num2);
console.log(num3);

let gamecounter = 100
++gamecounter;
console.log(gamecounter);
