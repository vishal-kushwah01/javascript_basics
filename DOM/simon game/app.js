let gameseq = [];
let userseq = [];   

let btns = ["yellow", "red", "purple", "green"]; 

let started = false;    
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function() {
    if(started === false) {
        started = true;
    }

    levelup();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 100);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 100);
}
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`; 

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length === gameseq.length) {
            setTimeout(function() {
                userseq = [];
                levelup();
            }, 1000);
        }
    }else{
        h2.innerHTML = `<span style="color: red;">Game Over!</span> your score was ${level} <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this; 
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    gameseq = [];
    userseq = [];
    level = 0;
    started = false;
}