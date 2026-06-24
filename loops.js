// for (let i = 1; i <= 5; i++) {
    
//     console.log(i);
// }

// print all odd no. 1 to 15
// for(let i = 1 ; i <=15 ; i = i+2){
//     console.log(i);
// }

//backwards
// for(i = 20 ; i>= 1 ; i= i-2){
//     console.log(i);
// }

//print all even no. (2 to 100)
// for(i =1 ; i<= 100 ; i++){
//     if(i %2 == 0){
//         console.log(i);
//     }
// }

// for(i = 5 ; i<=50 ; i++){
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }


//nesting loops

// for( i =1 ; i<= 3 ; i++){
//     console.log(`outer loop ${i} `);
//     for(j = 1 ; j<= 3 ; j++){
//         console.log(j);
//     }
// }



//while loop

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// const fav = "3idots";
// let guess = prompt("guess my fav movie");
// while ((guess != fav) && (guess != "quit") ) {
//     guess =  prompt("wrong guess please try again");
// }
// if(guess == fav){
//     console.log("congratulations");
// }
// else{
//     console.log("wrong");
// }

//loops in arrays 

// let fruits = ["mango" , "banana" , "apple" , "orange" , "litche"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i , fruits[i]);
    
// }

// //reverse
// console.log("reverse");
// for(let i = fruits.length-1 ; i>=0 ; i--){
//     console.log(i , fruits[i]);
// }

//nested arrays with nested loops

// let heroes = [
//   ["ironman", "thor", "captain America", "spiderman"],
//   ["batman", "wonder women", "flesh", "superman"],
// ];

// for (let i = 0; i < heroes.length; i++) {
//     console.log(i , heroes[i]);
//    for (let j = 0; j < heroes[i].length; j++) {
//     console.log(`j = ${j}` , heroes[i][j]);
    
//    }
    
// }
//for of loop

let fruits = ["mango", "banana", "apple", "orange", "litche"];
for (const fruit of fruits) {
    console.log(fruit);
}