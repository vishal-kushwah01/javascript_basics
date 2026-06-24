//singleton

//object litrels

const jsusers = {
  name: "aditya",
  class: "12th",
  age: 16,
};
//access object

console.log(jsusers);
console.log(jsusers["class"]);

//use symbol

const mysym = Symbol("key1");

const user = {
  name: "anirudra",
  age: 19,
  [mysym]: "mykey",
};
console.log(user[mysym]);

user.email = "anirudra@gmail.com";
console.log(user);

//nested objects

const obj = {
  
  user: {
    details: {
      userfullname: {
        firstname: "Aditya",
        lastname: "Thakur",
      },
      Address: {
        state: "UP",
        dist: "BSR",
        Region: "NCR",
      },
      info : {
        id : 2314,
        department : "CS",
      },

    },
  },
};
console.log(obj.user.details["userfullname"]);

//assign :- In JavaScript, the Object.assign() static method is used to copy all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
console.log(Object.assign(target, source1, source2) );

//spread
const result = {...target , ...source1 , ...source2}
console.log(result);

//array of obj

const users = [
  {
    id: 1,
    email: "hitesh@gmail.com",
  },
  {
    id: 2,
    email: "aditya@gmail.com",
  },
  {
    id: 3,
    email: "ram@gmail.com",
  },
  {
    id: 4,
    email: "ramesh@gmail.com",
  },
];
console.log(users[0]);

//keys , values

console.log(Object.keys(user));
console.log(Object.values(user));

//hasownproperty :-Determines whether an object has a property with the specified name.

console.log(user.hasOwnProperty("name"));