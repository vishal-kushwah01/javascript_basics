const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click' , (event)=>{
        if(event.target.id === 'grey'){
            body.style.backgroundColor = "grey";
        } else if(event.target.id === 'white'){
            body.style.backgroundColor = "white";
        } else if(event.target.id === 'blue'){
            body.style.backgroundColor = "blue";
        } else if(event.target.id === 'yellow'){
            body.style.backgroundColor = "yellow";
        } else{
            body.style.backgroundColor = " #222222";
        }
        
    })

})

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
    body.style.backgroundColor = '#222222';
});

