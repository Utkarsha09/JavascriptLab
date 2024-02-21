// const tinderUser = new Object() // singleton object
const tinderUser2 = {} // Non-singleton object

tinderUser2.id = "123utk"
tinderUser2.name = "Abhi"
tinderUser2.isLoggedIn = false

console.log(tinderUser2);
console.log(Object.keys(tinderUser2)); // display all keys in object in the form of array
console.log(Object.values(tinderUser2));// display all values in object in form of array
console.log(Object.entries(tinderUser2));// covert object'skeys and values in the form of array
// to check wethere object has declared propertis or not
console.log(tinderUser2.hasOwnProperty('isLoggedIn'));//display in boolean

// how to decleared object under objects

const regularUser = {
    email : "utkarsha@gmail.com",
    fullname: {
        userfullname : {
            firstname : "Utkarsha",
            lastname : "Shirbhate"
        }
    }
}

console.log(regularUser);

//How to access object under object
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obje3 = Object.assign(obj1,obj2)// all object merge in obje1
// const obje3 = Object.assign({},obj1,obj2) // if there is more number of objects
// merge object by using spred operator(...)
const obje3 = {...obj1, ...obj2}
console.log(obje3);


const course ={
    coursename: "JavaScript Lab",
    price: "1000",
    couseInstructor : "Utkarsha"
}
// Any Value can Destructure
const {couseInstructor: instructor} = course
// console.log(couseInstructor);
console.log(instructor);

