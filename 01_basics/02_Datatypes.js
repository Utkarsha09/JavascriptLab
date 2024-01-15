
"use strict" // treat all JS code as newer version

//  alert("Hello") // We are Using nodejs, not browser

console.log(3 +3);

let name= "Utkarsha"
let age = 21
let IsloggedIn = true

const score = 100
const scoreValue = 100.3

const IsloggedIn1 = false
const outsideTemp = null

let userEmail;

// ** Premitive DataType **
// number :- 2 to power 53
// bigint :- To Long number
// String :- we can use ""/ ''
// Boolean :- True/False
// null :- it is one of the satandalone value * it is Object *
// undefined :- No value is given * one of the Data Types *
// Symbol :- Indentify to unquie components

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 34556667211113399000n // bigint type

// ** Object 

console.log(typeof null); // Oject
console.log(typeof undefine); // undefine

// Non-Primitive

// Array, Objects, Functions

const heros = ["shaktiman","spiderman","ironman"] // Array

let myObj = {
    name: "Utkarsha",
    age: 22
} // Oject

const myfunction=function(){
    console.log("Hello World!!");
}// Function

console.log(typeof myfunction);

