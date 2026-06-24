let button = document.createElement('button');
let body = document.querySelector('body');
button.innerText = "click me!"
body.appendChild(button);

button.addEventListener('click' , function(){
    button.style.backgroundColor = "green";
    console.log("clicked!");
})


let input = document.querySelector('input');
let h2 = document.querySelector('h2');
input.addEventListener('input' , function(e){
    let value = e.target.value;
    let filteredvalue = value.replace(/[^a-zA-Z\s]/g, "");
    e.target.value = filteredvalue;
    h2.innerText = e.target.value;
})