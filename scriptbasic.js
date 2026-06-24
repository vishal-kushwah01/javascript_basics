// varibales :- A variable is simple the name of a storage location

let a = 20;
let b = 30;
console.log(a + b);

// datatypes :-
// 1. primitive
// .numbers
// .boolean
// .string
// .undefined
// .null
// .bigint
// .symbols

//                                                              numbers in js
let x = 30;
console.log(typeof x);

// operations using numbers

let p = 550;
let q = 660;
console.log(p + q);
console.log(p - q);


//                                                                       NaN 
// the NaN global is a value representing Not-a-Number

console.log(NaN + 1);




// Operations precendence   () ,{ ** }, { * , / ,% } , {+ , -}    'solve the oprations left to right'


// keywords let , const , var
// syntax of declaring the variables

let Aa = 10
let Bb = 30
let final = Aa + Bb
console.log(final);


// const :- values of constant can't be changed with re-assignment & they can't be re-declared

const year = 2026
console.log(year);


// operators 
// 1. assignmenet operator 
let age = 40
age += 1
console.log(age);

// unary operator
let yearr = 2000
yearr++
console.log(yearr);

yearr--
console.log(yearr);

// preincrement :- change , then use 
let Age = 10
let NewAge = ++Age

// postincrement :- use, then change

let num = 20
let newnum = num++

// predecrement :- change , then use
// postdecrement :- use , then change

// boolean :- true / false


// null & undefined
// undefined :- a veribale that has not been assigned a value is of type undefined
// null :- the null value represent the intentional absence of any object value  (to be explicitly assigned)

// practice questions

// 1. declare your name as a string and print its lenght in js
let Myname = "vishal"

console.log(Myname.length);

// 2. declare your name as a string and print its first char 

let newname = "thakurji"
console.log(newname[0]);

// 3. declare your name as a string and print its last char 
let lastname = "rajput"
console.log(lastname[5]);

// 4. what is the lenght of empty string & a string with single space
let str = ""
console.log(str.length);
let newstr = " "
console.log(newstr.length);


// template litrels :- they are used to add embedded expressions in a string ${}

let pencilprice = 10;
let erassorprice = 5;
let output = (`the total price is : ${pencilprice + erassorprice} rupees`)
console.log(output);

