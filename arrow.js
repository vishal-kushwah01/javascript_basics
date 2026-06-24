const sum = (a, b) => {
  return a + b;
};
console.log(sum(3, 7));

// single arrgument

const num = (n) => {
  return n;
};
console.log(num(9));

// without arrgument
const print = () => {
  console.log("hello");
};
print();

// Implicit return
// only change use () not {}
const mul = (a, b) => a * b;
console.log(mul(9, 6));

//this with arrow function

const student = {
  name: "vishal",
  marks: 95,
  prop: this, //global scope
  getname: function() {
    //console.log(this);
    return this.name;
  },
  getmarks : ()=> {
    return this.marks;  // parent scope -> window
  }
};
console.log(student.getname());
console.log(student.getmarks());

// practice question 

let sqr = (n) => {
 return n*n;
}
console.log(sqr(5));

//
// function interval () {
//     setTimeout(() =>{
//     for(i = 1 ; i>= 5 ; i++){
//         console.log("hello world");
//     }
// },2000)
// }
// console.log(interval());

let id = setInterval(() => {
    console.log("hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
},12000);