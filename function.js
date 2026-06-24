function hello() {
  console.log("hello world");
}
hello();

function name() {
  console.log("Apna college");
}
name();

function printnum() {
  for (i = 0; i <= 5; i++) {
    console.log(i);
  }
}
printnum();

function isAdult() {
  let age = 15;
  if (age >= 18) {
    console.log("you are Adult");
  } else if (age > 14 || age == 17) {
    console.log("you are a Tenager");
  } else {
    console.log("you are a Child");
  }
}
isAdult();

// create a function to print a note

function note() {
  console.log(".everyone is distracted in life");
  console.log(".you have golden chance to Achive something");
  console.log(
    ".motivation is temprary you work consistent daily you change your life in 6 months"
  );
}
note();

//

function dicegame() {
  let generatenum = Math.floor(Math.random() * 6 + 1);
  console.log(generatenum);
}
dicegame();
dicegame();
dicegame();
dicegame();

// functions with Arguments
function printname(name) {
  console.log(name);
}
printname("ram");

function printinfo(name, age) {
  console.log(`${name}'s  age is ${age}`);
}
printinfo("surya", 19);

function sum(a, b) {
  console.log(a + b);
}
sum(20, 40);

function calcavg(a, b, c) {
  avg = (a + b + c) / 3;
  console.log(avg);
}
calcavg(3, 3, 9);
calcavg(2, 6, 8);

// print table 

function table(n){
    for(i = n ; i <= n*10 ; i+=n){
        console.log(i);
    }
}
table(2);
table(23);


// using return 

function multi(a , b ){
    return a * b;
    console.log("hello"); // after return nothing can execute
}
console.log(multi(2,5));

// return the sum of numbers

function sumnum(n){
    let sum = 0;
    for(let i = 1 ; i<=n ; i++){
        sum += i;
    }
    return sum;

}
console.log(sumnum(5));

// 

let str = ["hello" , " my " , "self" , "ramanand"]

//function expression

let numsum = function(a ,b ){
  return a + b;
}
numsum(3 , 5)

// higher order functions :- takes one or more function as arguments . ruturn a function

function multipleGreet(func , count){
  for(i = 0 ; i <= count ; i++){
    func()
  }
}

let greet = function(){
  console.log("hello");
}

multipleGreet(greet , 4)

// return a function 




function oddeven(request){
      if(request == "odd"){
        let odd = function (n) {
          console.log(!(n % 2 == 0));
        };
        return odd ;
      } else if(request == "even"){
        let even = function () {
          console.log(n % 2 == 0);
        };
        return even;
      } else {
        console.log("wrong request");
      }
}
let request = "odd";
// let request = "even"
let func = oddeven(request);
func(5)
