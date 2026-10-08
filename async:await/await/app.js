let h1 = document.querySelector('h1');

function changeColor(color , delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve();           
        },delay)
    })
};

let newColor = async () => {
    await changeColor("red" , 1000);
    await changeColor("green" , 1000);
    await changeColor("purple" , 1000);
    await changeColor("yellow" , 1000);
}