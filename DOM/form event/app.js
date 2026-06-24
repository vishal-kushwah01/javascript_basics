let form = document.querySelector('form');

// form.addEventListener('submit' , function(event){
//     event.preventDefault();


//    let user = document.querySelector("#username");
//    console.log(`username is :- ${user.value}`);

//    let password = document.querySelector("#password");
//    console.log(`user password is :- ${password.value}`);

//    let email = document.querySelector("#email");
//    console.log(`user email is :- ${email.value}`);
// })

// If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

// most use way 

form.addEventListener('submit' , function(e){
    e.preventDefault();

    let user = this.elements[0];
    let password = this.elements[1];
    let email = this.elements[2];


    console.log(`username is :- ${user.value}`);
    console.log(`user password is :- ${password.value}`);
    console.log(`user email is :- ${email.value}`);


})