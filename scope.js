// function scope :- variable defined inside a function are not accessible outside the function

function calsum( a , b){
    let sum = a + b;  // not acess outside the function
    console.log(sum);
}
calsum(3 , 7)
 // console.log(sum); // not acessible

 // globel scope :- you can acess the globel scope anywhere

let sum = 70;
function newsum(a , b){
    console.log(sum);
}
console.log(sum);



//block scope :- varibale declared inside a {} block cannot be accessed from outside the block.

{
    let a = 25;
    const b = 20;
}
// console.log(a);  // not acess bcz it is outside the block
// console.log(b); // not acess bcz it is outside the block


//lexical scope :-  a  varibale defined outside a function can be accessible inside another function defined after the varible declaration ("the opposoten is NOT true")
function outer(){
    let a = 4;
    let b = 7;
    function inner(){
          console.log(a + b);
        
    }
    // console.log(a); // not access
    inner()
}
outer()