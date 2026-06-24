let arr = [1,2,3,4,5,6,7,8]
console.log(arr);


//array methods
// 1. push() :- Appends new elements to the end of an array, and returns the new length of the array.

arr.push(9);
console.log(arr);

//2. pop() :- Removes the last element from an array and returns it.
arr.pop()
console.log(arr);

//3. unshift() :- Inserts new elements at the start of an array, and returns the new length of the array.
arr.unshift(0);
console.log(arr);

//4. shift() :- Removes the first element from an array and returns it.

arr.shift()
console.log(arr);

//5 . includes :- Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(arr.includes(8));

//6. indexof() :- Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

console.log(arr.indexOf(1));

//7. slice :- Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array
const newarr = [7,6,5,4,3,2,1]
console.log(newarr.slice(1,4));

//8. splice :- Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(newarr.splice(0,3));
console.log(newarr);

// concat :- Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const marvels = ["thor" , "ironman" , "spiderman"];
const dc = ["superman" , "flash" , "batman"];
const allheroes = marvels.concat(dc)
console.log(allheroes);

//spread 

const new_heroes = [...marvels , ...dc]
console.log(new_heroes);

//isArray
console.log(Array.isArray("aditya"));

//from :- An iterable object to convert to an array.
console.log(Array.from("ramanand"));


//of :- Returns a new array from a set of elements.
let sc1 = 200;
let sc2 = 500;
let sc3 = 900;

console.log(Array.of(sc1 , sc2 , sc3));
