// Array
// Array function can not be assess using arbitory strign as index
const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]);

// const myArr2 = new Array(1,2,5,3)
// console.log(myArr2[2]);

//  // Array Methods

// //  myArr.push(6)

// //  myArr.pop() // remove last variable from the array 

//  myArr.unshift(9) // add variable at first position in the array 

//  myArr.shift() // remove first variable from the array

//  console.log(myArr.includes(9));
 
//  console.log(myArr.indexOf(3));

//  const newArr = myArr.join() // Convert the array into String
//  console.log(myArr);
//  console.log(newArr);
//  console.log(typeof newArr);

 // Slice, Splice
console.log("Original Array");
 console.log("A ",myArr); 

 console.log("After Slice Array");//It's not remove the from original array
 const myn1 = myArr.slice(1,3)
 console.log(myn1);
 console.log("B",myArr);
 
 
 console.log("After Splice Array"); // remove the variable from orinal Array
 const myn2 = myArr.splice(1,3)
 console.log(myn2);
 console.log("C", myArr);

