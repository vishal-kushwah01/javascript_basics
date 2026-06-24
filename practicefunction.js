// function declaration

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

//function Expression

const add = function (a, b) {
  return a + b;
};

console.log(add(5, 10));

function loginUserMessage(username) {
  return `${username} just logged in`;
}
console.log(loginUserMessage("hitesh"));

// shoping carts

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500));

//practice questions

//1. Write a JavaScript function that returns array elements larger than a numbe
let arr = [2,3,4,5,6,7,8,9,12,1,4,56]
let num = 4;
function getElements(arr , num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
getElements(arr , num)

//2. count the number of volumes in a string
let str = "apnacollege";
function countvowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      count == "a" ||
      count == "e" ||
      count == "i" ||
      count == "o" ||
      count == "u"
    ) {
      count++;
    }
    
  }
  return count;
}
console.log(countvowels());
