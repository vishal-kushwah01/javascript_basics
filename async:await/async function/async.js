// async function
//An async function is a function declared with the async keyword, and the await keyword is permitted within them. 
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
async function demo() {
    throw 'Error'
    return 'hello';

}

demo()
.then((data)=>{
    console.log("Promise resolved" , data);
    
})
.catch((err)=>{
    console.error("Promise was rejected!" , err);
    
})

//async using arrow function

let arrowDemo = async ()=>{
    return 'Arrow function';
}

arrowDemo()
.then(()=>{
    console.log("resolved");
    
})



//await

function newNum(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        },1000)       
        
    })  
}

//The await keyword can only be used inside an async function. 
// It makes JavaScript wait until that promise settles and returns its result.
let demoFcn = async ()=>{
    await newNum();
    await newNum();
    await newNum();
    await newNum();
    await newNum();
    newNum();

}