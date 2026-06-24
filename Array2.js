// forEach
let arr = [1, 2, 3, 4, 5];
// let print = function(el){
//     console.log(el);

// }
arr.forEach(function (el) {
  console.log(el);
});
// arr.forEach(print)

let obj = [
  {
    name: "aditya",
    marks: 90,
  },
  {
    name: "aditi",
    marks: 86,
  },
  {
    name: "naina",
    marks: 94,
  },
];
obj.forEach((student) => {
  console.log(student);
});

//map
let num = [1, 2, 3, 4];
let double = num.map((el) => {
  return el * 2;
});
console.log(double);

let gpa = obj.map((ele) => {
  return ele.marks / 10;
});
console.log(gpa);

//filter :- the filter() method is a powerful,
//built-in array method used to create a new array containing only the elements from the original array that pass a specific condition.

const students = [
  {
    name: "om",
    score: 75,
  },
  {
    name: "raman",
    score: 43,
  },
  {
    name: "anand",
    score: 95,
  },
  {
    name: "sahil",
    score: 45,
  },
  {
    name: "roohi",
    score: 29,
  },
  {
    name: "sagun",
    score: 89,
  },
];

const passstudent = students.filter((student) => {
  return student.score > 50;
});
console.log(passstudent);

//even
let numbs = [1, 2, 3, 4, 5, 8, 10, 73, 78, 45, 42, 58, 100];
let even = numbs.filter((no) => {
  return no % 2 == 0;
});
console.log(even);

//every
//the every() method is used to check if all elements in an array pass a specific test. It returns a boolean value: true if every element satisfies the condition, and false if even one element fails.

const numbers = [10, 20, 30];
const isAllPositive = numbers.every((num) => num > 0);
console.log(isAllPositive);

// const numbers = [10, 20, 30];
// const isAllPositive = numbers.every(num => num > 0);
// Result: true

//reduce :- reduces the array to a single value

let arry = [2, 3, 4, 5, 6, 7, 8];
let finalvalue = arry.reduce((res, el) => {
  return res + el;
});
console.log(`your final value is :- ${finalvalue}`);

//find max using reduce
let newarr = [2, 3, 4, 5, 6, 7, 8, 9, 6, 3, 7];
let findmax = newarr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(findmax);

//practice
//check if all no. in array are multiple of 10 or not

let mul = [20, 50, 60, 110, 34, 26, 90];
let result = mul.every((num) => {
  return num % 10 == 0;
});
console.log(result);

//create a function to find the min number in an array
let anotherarry = [20, 50, 60, 110, 34, 26, 90, 10, 29, 14, 6];
let findmin = anotherarry.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});
console.log(findmin);

//spread :- Unpacks an array/object into individual parts.

//Copying an Array: Creates a shallow copy so you don't mutate the original

const original = [1, 2, 3];
const copy = [...original];
console.log(copy);

//Combining Arrays: Merge multiple arrays into one.

const parts = ["shoulders", "knees"];
const body = ["head", ...parts, "toes"];
console.log(body);

//Passing Arguments: Pass array elements as individual arguments to a function.

const nums = [5, 10, 15];
console.log(Math.max(...nums));

let str = "apnacollege";
console.log(...str);

//with object

const newobj = {
  name: "ramanand",
  email: "ramanand@gmail.com",
  password: "ram23",
  workplace: "Noida",
};
let datacopy = { ...newobj, id: 2108337 };
console.log(datacopy);

//rest :- it collects multiple elements and "packs" them into a single array.

//With Destructuring (Arrays)
const colors = ["red", "green", "blue", "yellow"];
const [first, second, ...others] = colors;

console.log(first);
console.log(others);

//
let superheroes = ["IronMan", "Captain America", "Thor", "Black Panther"];
let [genius, captain] = superheroes;
console.log(`Genius is :- ${genius} and the captain is :- ${captain}`);

//With Destructuring (Objects)

const user = {
  name: "Alice",
  age: 25,
  city: "NY",
  job: "Dev",
};
const { name, ...details } = user;

console.log(name);
console.log(details);
