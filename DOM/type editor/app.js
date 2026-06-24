let p = document.querySelector('p');
let inp = document.querySelector('#text');
inp.addEventListener('input' , function(){
   p.innerText = this.value;
})