
console.log('.............date-time.............');

let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toJSON());

//create a date 
// 0-jan , 1-feb , 2-march and so on...
let createadate = new Date(2026 , 0 , 13);
console.log(createadate.toLocaleDateString());

//create a date in another way

let newdate = new Date("01-13-2026")
console.log(newdate.toLocaleDateString());

//............time................

let timestamp = Date.now();
console.log(timestamp);
console.log(createadate.getTime());

//interview question
console.log(Math.floor(Date.now()/1000));

// acess specific

console.log(newdate.getDay());
console.log(newdate.getMonth() + 1);  //+1 because month start from 0 we can't confuse user for that so add 1

//imp.method

newdate.toLocaleString('defalt',{
    weekday : 'short'
})