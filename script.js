console.log("hello world");
console.log(2 + 3);
let a = 3;
let b = 6;
let sum = a + b;
console.log(sum);
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(arr[2]);
arr.push(7);
console.log(arr);
arr.pop(1);
console.log(arr);
const arr2 = [7, 8, 9];
const newarr = arr.concat(arr2);
console.log(newarr);
arr.includes(6);

//template litrels

let x = 10;
let y = 50;
console.log(`the total price is : ${a + b}`);

// create a traffic light system that shows what to do based on color

let color = "";
if (color === "red") {
  console.log("stop");
} else if (color === "yellow") {
  console.log("slow down");
} else if (color === "green") {
  console.log("go");
} else {
  console.log("you are under arust");
}

// create a marksheet

let marks = 77;

if (marks >= 90) {
  console.log("your grade is: 'A+'");
} else if (marks >= 80 && marks < 90) {
  console.log("your grade is: 'A'");
} else if (marks >= 65 && marks < 80) {
  console.log("your grade is: 'B+'");
} else if (marks >= 50 && marks < 65) {
  console.log("your grade is: 'B'");
} else if (marks >= 40 && marks < 50) {
  console.log("your grade is: 'C+'");
} else if (marks >= 33 && marks < 40) {
  console.log("your grade is: 'D'");
} else {
  console.log("fail");
}

// create a system to calculate popcorn prices based on the sixe customer asked for

let size = "XL";



if (size === "XL") {
  console.log("the price of popcorn is : 'RS.250'");
} else if (size === "L") {
  console.log("the price of popcorn is : 'RS.200'");
} else if (size === "M") {
  console.log("the price of popcorn is : 'RS.100'");
} else if (size === "S") {
  console.log("the price of popcorn is : 'RS.50'");
} else {
  console.log("not avilable");
}



let day = 1
switch (day) {
  case 1:
    console.log("monday");
    break;
    case 2:
    console.log("tuesday");
    break;
    case 3:
    console.log("wednesday");
    break;
    case 4:
    console.log("thrusday");
    break;
    case 5:
    console.log("friday");
    break;
    case 6:
    console.log("saturday");
    break;
    case 7:
    console.log("sunday");
    break;

  default:
    console.log("not a valid value");
    break;
}