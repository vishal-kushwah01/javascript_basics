let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');




/// stop event bubbling use stoppropogation method
//When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.



div.addEventListener('click' , function(e){
    e.stopPropagation();
    console.log("div was clicked");
})

ul.addEventListener("click", function (e) {
    e.stopPropagation();
  console.log("ul was clicked");
});

for(li of li){
    li.addEventListener("click", function (e) {
        e.stopPropagation();
      console.log("li was clicked");
    });
}
