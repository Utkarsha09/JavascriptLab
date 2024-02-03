/* 
 ** Stack **
 In all primitive type of datatype 
 Gives us copy data which define

 ** Heap **
 In all Non-primitive type of datatype
  Gives us the reference(original) of data which define
*/

let myname = "utkarsha"

let anothername = myname
anothername = "shirbhate"

console.log(myname);
console.log(anothername);

// Non-Primitive
let user = {
    email: "user@google.com",
    upi: "useer@ybi"
}

let user2 = user
user2.email= "user2@google.com"

console.log(user.email);
console.log(user2.email);