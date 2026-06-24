let btn = document.querySelector('.btn');

btn.addEventListener('click' , function(){
    let h2 = document.querySelector('h2');
    let randomcolor = getRandomColor();
    h2.innerText = randomcolor;
    let div = document.querySelector('.main')
    div.style.backgroundColor = randomcolor;
   
    
    
})

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
