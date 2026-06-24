//try :- the try statement allows you to define a block of code to be tested for errors while it is being executed.
// catch :- the catch statement allows you to define a block of code to be executed, if an error ocuurs in the try block.
// if some error in code there is multiple line of code and i dought some line of code so i  use (try / catch ) in simple words 
// "mujhe kisi code of line pe dought hai to mai use try mai dal dunga agar vo erroe hua to catch wala statement run ho jaiga agar nhi hua to code normally run hoga"

console.log("hello");
console.log("hello");
console.log("hello");
try {
   console.log(a); 
} catch(error) {
    console.log("caught an error.. a is not defined");
    console.log(error);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
console.log("hello2");

