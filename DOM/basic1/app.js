let add = document.querySelector('#add');
let remove = document.querySelector('#remove');
let head = document.querySelector('h2');
let img = document.querySelector('#img')


add.addEventListener('click' , function(){
    head.innerText = "friends😍";
    head.style.color = "green"
   

})
remove.addEventListener('click' , function(){
    head.innerText = "Add friend";
    head.style.color = "pink";
    
})