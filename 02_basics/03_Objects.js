// Singleton : it alwaya made by Constructor or literals

// Object literals

const mysym = Symbol("key1") 

const Jsuser = {
    name: "Utkarsha",
    age : 20,
    [mysym]: "mykey1",
    email: "utkarsha@google.com",
    location: "Amravati",
    isLoggedInd: false,
    lastloginDays: ["Monday", "Saturday"]

}
//Way to Access Value
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[mysym]);//Always used to access Symbol this Syntax


//To Change Values
Jsuser.email = "utkarsha@hvpm.com"
// Object.freeze(Jsuser)
Object.email = "utkarsha@microsoft.com" // Value not Propoget because it freeze in above one
console.log(Jsuser);

//Functions
Jsuser.greeting = function(){
    console.log("Hello JS Users"); // object interpritation
}
Jsuser.greeting2 = function(){
    console.log(`Hello JS Users, ${this.name}`); // object interpritation
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

