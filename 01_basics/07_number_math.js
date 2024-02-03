const score = 400

const balance = new Number("100")
console.log(balance); // specially tell us it is number

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // give after decimal values

const othernumber = 123.8966
console.log(othernumber.toPrecision(3));//gives Presize value

const tens = 1000000
console.log(tens.toLocaleString('en-IN'));


// *********************  Maths ************************/

console.log(Math);
console.log(Math.abs(-4));// change -ve to  +ve
console.log(Math.round(24.67));
console.log(Math.ceil(4.2)); // least point in the decimal it's choose greater number
console.log(Math.floor(4.9)); // as same as ceil but it take always smaller value
console.log(Math.min(4,6,9,2,3));
console.log(Math.max(4,6,9,8,2,30));

//************* 
console.log(Math.random()); // always gives us value in between 0 & 1
console.log(Math.random()*10);// values is shift by 1
console.log((Math.random()*10) + 1); // value can be 0 so we used this

const min = 10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(Math.round(Math.random() * (max - min + 1)));

