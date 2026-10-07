let h1 = document.querySelector('h1');
let body = document.querySelector('body');

body.style.backgroundColor = "black";

//change color in every 1sec
//  {#e78,14}
 //basic  of setTimeout

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);

// setTimeout(() => {
//   h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "white";
// }, 3000);


//  {#9d1,17}. //callback hell
//using callback hell nested callbacks

// function changeColor(color , delay , nextchangeColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         nextchangeColor();
//     } , delay);
// }

// //  {#0eb,7}
// changeColor("red" , 1000 , ()=>{
//     changeColor("orange" , 1000 , ()=>{
//         changeColor("yellow" , 1000 , ()=>{
//             changeColor("purple" , 1000);
//         })
//     })
// })


//change color using promises

function changeColor(color , delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve();
        },delay)
    })
}

changeColor("red" , 1000)
.then(()=>{
    console.log("red color was changed");
    return changeColor("orange" , 1000);
    
})
.then(()=>{
    console.log("orange color was changed");
    return changeColor("yellow" , 1000);
})
.then(()=>{
    console.log("yellow color was changed");
    return changeColor("purple" , 1000);
    
})
.then(()=>{
    console.log("purple color was changed");
    
})