//A callback used to initialize the promise. 
// This callback is passed two arguments: 
// a resolve callback used to resolve the promise with a value or the result of another promise, 
// and a reject callback used to reject the promise with a provided reason or error.

//  {#d21,12}. //basic promise creation and consumption
const promiseOne = new Promise((resolve , reject)=>{
    //do an async tasks
    setTimeout(()=>{
        //console.log("async task is complete");
        resolve()
    },1000)
})

promiseOne.then(()=>{
    //console.log("Promise consumed");
    
})


//  {#7f1,10}   // also use promises without variable assignment
new Promise((resolve , reject)=>{
    setTimeout(()=>{
        //console.log("async task two is completed");
        resolve();
        
    },2000)
}).then(()=>{
    //console.log("Promise two is consumed");
    
})



//  {#5e9,17}. //example of promise with data consumption from database
//data consumption from database

const promiseThree = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve({
            username : "Vishal",
            company : "Infosys",
            role : "Junior Developer",
            email : "vishal@ex.com"
        })
    },1000)
})

promiseThree.then((user)=>{
    //console.log(user);
    
})


//  {#c0b,34}
//promise chaining

const promiseFour = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = false;
        if (!error) {
            resolve({
                username : "vishal",
                password : 76543
            })
        } else{
            reject('ERROR : Something went wrong Try Again!');
        }
    },1000)
})

promiseFour
.then((user)=>{
    //console.log(user);
    return user.username;
    
})
.then((username)=>{
    //console.log(username);
    
})
.catch((error)=>{
    //console.log(error);
    
})
.finally(()=>{
    //console.log("The promise is either resolved or rejected!");
    
})


//  {#e89,43}.  //callback hell example 
function getDataFromDatabase(data , success , failure){

    let internetSpeed = Math.floor(Math.random() * 10)+1;

    if (internetSpeed > 4) {
        success();
        
    } else{
       failure();
        
    }
    
}

getDataFromDatabase(
    "Apna College", 
    ()=>{
        //console.log(" success : Login Successful");

    getDataFromDatabase(
        "My batch", 
        ()=>{
            //console.log(" success : Data fetched successfully");
        getDataFromDatabase(
            "Course MERN", 
            ()=>{
                //console.log("success : Access to All videos");
            
        }, 
        ()=>{
            //console.log(" failure : Because of Bad Internet speed it is not possible to access videos");
            
        })
        
    }, 
    ()=>{
        //console.log(" failure : Because of Bad Internet speed it is not possible to fetch data");
        
    });
}, 
() =>{
     //console.log(" failure : Because of Bad Internet speed it is not possible to login");
})


//  {#6b2,43}.  //promises 

function saveToDatabase(data){   
    return new Promise((resolve , reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;

        if (internetSpeed > 5) {
            resolve();
        }else{
            reject();
        }

    })
}

saveToDatabase("my data")
.then(()=>{
    //console.log("Success: data Saved");
    
    
})
.catch(()=>{
    //console.log("Error: data wasn't saved");
    
})

//promise chaining example
saveToDatabase("my data")
.then(()=>{
    console.log("Success: data Saved");
    return saveToDatabase("my data2");
})
.then(()=>{
    console.log("Success: data2 Saved");
    return saveToDatabase("my data3");
})
.then(()=>{
    console.log("Success: data3 Saved");
    
})
.catch(()=>{
    console.log("Error: data wasn't saved");
    
})


