const name = "Utkarsha"
const repoCount = 50
console.log(name + repoCount + "value"); // don't used 

console.log(`Hello my namr is ${name} and my repo count is ${repoCount}`);

 //Another way to diclear string
const gameName = new String('UtkashaSS')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));// display charater in string in which index no.
console.log(gameName.indexOf('t'));// display charater in string which present in given index no.

//Substring
 const newString = gameName.substring(0,4)
 console.log(newString);
 
//slice
const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

//trim
const str1 = "  utkarsha   "
console.log(str1);
console. log(str1.trim());

//replace
const url = "https://utkarsha.com/utkarsha%09shirbhate"
console.log(url.replace('%09', '-'));
console.log(url.includes('utkarsha'));// check the string present or not 

//split
const gName = "I am a future Engineer" 
console.log(gName.split(" "));




