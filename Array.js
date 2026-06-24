console.log(".........Arrays...........");

const myarr = [0, 1, 2, 3, 4, 5];
console.log(myarr);
console.log(typeof myarr);

//Array methods

const marvelsheroes = ["thor", "ironman ", "spiderman", "loki"];
const dcheroes = ["batman", "flesh", "superman", "Aquamen", "wonder women"];
const allheroes = marvelsheroes.concat(dcheroes);
console.log(allheroes);

//push :- Appends new elements to the end of an array, and returns the new length of the array.

const arr1 = [1, 2, 3, 4, 5, 6];
arr1.push(7);
console.log(arr1);

//pop :- Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
arr1.pop();
console.log(arr1);

// unshift():- Inserts new elements at the start of an array, and returns the new length of the array.
let cars = ["bmw", "Lexus", "Bentley", "Audi", "Rolls-Royce"];
cars.unshift("Porsche");
console.log(cars);

//shift() :- Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

cars.shift();
console.log(cars);

let months = ["january", "july", "march", "august"];
months.shift();
months.unshift("june");
console.log(months);

//indexof() :- Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(months.indexOf("july"));

console.log(months.indexOf("feb"));

//includes() :- Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(cars.includes("bmw"));

// slice() :-  Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
console.log(cars.slice(1));

//splice() :- Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(cars.splice(2, 4, "maruti", "toyota"));
console.log(cars);

//sort() :- Sorts an array in place. This method mutates the array and returns a reference to the same array.

let days = [" monday ", "friday", "tuesday", "thrusday"];
console.log(days.sort());

//practice

let start = ["january", "july", "march", "august"];
start.splice(0, 2, "july", "june");
console.log(start);

// return the index of "javascript " from the given array , if it was reversed

let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse());
console.log(lang.indexOf("javascript"));

// array references
// 1. every array stored in deferent addresses
// 2. if you compare [1] == [1] it return false its is not compare values it compare addresses
// 3. if you assign one array copy to another you also copy the address of the array
// example

let arr = ["a", "b", "c"];
let copyarr = arr;
console.log(arr == copyarr); //true because adresses of the array are same
// you change in arr it auto. changed in copyarr
// ex
arr.push("d");
console.log(arr);
console.log(copyarr);

// tic-tac-toe

const game = [
  ["x", null, "o"],
  [null, "x", null],
  ["o", null, "x"],
];
console.log(game);
console.log((game[0][1] = "o"));
console.log(game);

// Write a JavaScript program to get the first nelements of anarray.
let newar = [2, 3, 4, 5, 6, 7];
newar.pop();
console.log(newar);

//
// WriteaJavaScriptprogramtogetthelastnelementsofanarray;
newar.shift();
console.log(newar);

// WriteaJavaScriptprogramtocheckwhetherastringisblankornot
let str = ""
if (str == "") {
    console.log("string is empty");
}
else{
    console.log("not empty");
}

