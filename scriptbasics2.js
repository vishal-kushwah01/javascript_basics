// operators in js
// arithmetic (+, - , / , % , **)
let a = 20;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//comperison (> , >= , < , <= , == , != , === )

//conditional statement (if else , if else if , switch)

// if
let age = 15;
if (age > 18) {
  console.log("you can vote");
  console.log("you can drive");
} else {
  console.log("you can't vote");
}

//practice
// else if
let color = "red";
if (color == "red") {
  console.log("stop");
} else if (color == "yellow") {
  console.log("ready");
} else if (color == "green") {
  console.log("go");
}

//practice

let size = "M";
if (size == "XL") {
  console.log("your popcorn bucket price is '250rs'");
} else if (size == "L") {
  console.log("your popcorn bucket price is '200rs'");
} else if (size == "M") {
  console.log("your popcorn bucket price is '100rs'");
} else if (size == "S") {
  console.log("your popcorn bucket price is '50rs'");
} else {
  console.log("not available");
}

//nested if else

let marks = 40;
if (marks >= 33) {
  console.log("pass");
  if (marks >= 80) {
    console.log("grade : A+");
  } else {
    console.log("grade : A");
  }
} else {
  console.log("better luck next time");
}

//logical operator (AND :- both conditions are true) (OR :- one condition is true it gave true) (NOT :- it gave opposite)

// and && opr

let markss = 50;
if (markss > 33 && markss == 50) {
  console.log("you are pass and your 'grade is A'");
} else {
  console.log("you are fail");
}

// and || opr

if (markss == 50 || markss > 50) {
  console.log("pass");
}

//  not ! opr

let num = 30;
if (!(num > 33)) {
  console.log("number");
}

//practice questions

let str = "apple";
if (str[0] === "a" && str.length > 3) {
  console.log("good string");
} else {
  console.log("not good");
}


//switch case


let months = "fifth";
switch (months) {
  case "first":
    console.log("january");
    break;
  case "second":
    console.log("february");
    break;
  case "third":
    console.log("march");
    break;
  case "forth":
    console.log("April");
    break;
  case "fifth":
    console.log("may");
    break;
  case "sixth":
    console.log("june");
    break;
  case "seventh":
    console.log("july");
    break;
  case "eighth":
    console.log("august");
    break;
  case "ninth":
    console.log("september");
    break;

  default:
    console.log("not valid");
    break;
}
