// Functions: In simple functions is the package of 2 or more lines.
// Function definition
function sayMyName(){
    console.log("U");
    console.log("T");
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
}

// To execute the function
sayMyName()

// When we difine the function at that time num1 and num2 called as a parameters
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// And when we call the function at that time (3, 8) called arguments
addTwoNumbers(3,8)

// When we want to return or stord the function value in a new varible then 
function addNew2Numbers(num1,num2) {
    // let result = num1 + num2
    // return result 
    
    return num1 + num2 // another way
}

const result = addNew2Numbers(8,5)

console.log("Result is::",result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Utkarsha"));
// console.log(loginUserMessage());//when we not passes argument is called undefined

//Using If Else
function loginUserMessage(username){
    if(username === undefined){ // another way to check !username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Utkarsha"));
// console.log(loginUserMessage());

// If we don't know the number of parameters in the function

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(26,57,34,56));

// when we wnt to pass Objects in functions
const user={
    username:"Utkarsha",
    price: 299
}
function handleObjects(anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
handleObjects(user)
handleObjects({
    username:"ms. shirbhate",
    price:399
})

//when we want to return array's 2 elements
const myNewArray = [200,300,400,1000]

function returnSecondElements(getArray) {
    return getArray[1]
}

console.log(returnSecondElements(myNewArray));
console.log(returnSecondElements([300,800,600,900]));