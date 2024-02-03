//Date is One of the Objects in Js

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(typeof myDate);

let myCreateDate = new Date(2023, 0 ,23)
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date(2023, 0, 23, 5, 4)
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date("2024-01-14")
console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date("01-14-2023")
console.log(myCreateDate3.toLocaleString())

let mytimeStamp = Date.now()
console.log(mytimeStamp);
console.log(myCreateDate3.getTime());
console.log(Math.round(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})

console.log();