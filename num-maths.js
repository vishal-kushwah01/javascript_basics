const score = 400;
console.log(score);

//explicit define

const balance = new Number(200);
console.log(balance);

//methods of numbers

//1. to string :- Specifies a radix for converting numeric values to strings. This value is only used for numbers. Returns a string representation of an object.
// also use methods of strings

console.log(balance.toString().replace("200", "300"));

//2. tofixed :-Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. Returns a string representing a number in fixed-point notation.

console.log(balance.toFixed(3));

//3.  toPrecision :- Number of significant digits. Must be in the range 1 - 21, inclusive.
// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const othernum = 24.567;
console.log(othernum.toPrecision(2));

// 4. toLocaleString :- Converts a number to a string by using the current or specified locale.

const numeric = 17500000;
console.log(numeric.toLocaleString("en-IN"));

//********************************************************* Maths *********************************************************** */
// random :- Returns a pseudorandom number between 0 and 1.
// it is basical used to build a game or some other webpages

console.log(Math.random());
console.log(Math.floor(Math.random() * 6 + 1));

// important formula

// const min = 10;
// const max = 30;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));


const num1 = 1;
const num2 = 100;
console.log(Math.floor(Math.random() * (num2 - num1 + 1) + num1));

//guessing game

let max = prompt("enetr the maximum no ")
const random = Math.floor(Math.random()*max)+1;
let guess =prompt("guess the number");
while(true){
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("conrats! you guess the right number" , random);
        break;
    }
    else if(guess > random){
        guess = prompt("hint : your guess was too large . try again")
    }
    else{
        guess = prompt("hint : your guess was too small . please try again");
    }
}