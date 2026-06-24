let btn = document.querySelector('button');
console.dir(btn);
btn.onclick = function(){
    console.log("button was clicked!");
}

let btns = document.querySelectorAll('button')
for (btn of btns) {
    // btn.onclick = sayhello;
    // btn.onmouseenter = function () {
    //     console.log("you entered a button ");
    // }
    btn.addEventListener("click" , function(){
        console.log("say hello");
    })
     btn.addEventListener("click", function () {
       console.log("apna college");
     });
}

function sayhello(){
    alert("hello everyone");
}


let p = document.querySelector("p");
p.addEventListener("click", function () {
  console.log("para was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
  console.log("mouse enter");
});

let h1 = document.querySelector('h1');
let h4 = document.querySelector("h4");
let h3 = document.querySelector("h3");

function onclick(){
  console.dir(this.innerText);
  this.style.backgroundColor = "blue";
   
}

h1.addEventListener("click" , onclick);
h4.addEventListener("click", onclick);
h3.addEventListener("click", onclick);


