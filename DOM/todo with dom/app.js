let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let li = document.querySelector('li');

btn.addEventListener('click' , function(){
    let item = document.createElement('li');
    item.innerText = input.value;
    let delbtn = document.createElement('button');
    delbtn.innerText = "Delete"
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value = ""
    
})

ul.addEventListener('click' , function(e){
   if (e.target.nodeName == "BUTTON") {
        let item = e.target.parentElement;
        item.remove();
   } 
    
})

// let delbtns = document.querySelectorAll('.delete');
// for (delbtn of delbtns) {
//     delbtn.addEventListener('click' , function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }

