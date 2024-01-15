const accountId =144553
let accountEmail = "asalwaywsnew@gmail.com" 

var accountPassword = "1234" //Use in old JS code

accountCity = "Amravati" //Use very very less

let accountState;

//accountId = 2 // Not Allowed
accountEmail = "utk@hc.com"
accountPassword = "2312"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
