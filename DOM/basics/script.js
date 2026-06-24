// manuplate by id
document.getElementById("description");
// const para = document.getElementById("description");


//getelementbyclassname 

// difference innertext , textcontent , innerHTML

//innertext :- shows the visible text contained in a node.

// textcontent :- shows all the full text.

// innerHTML :- shows the full markup.

//query selector
console.dir(document.querySelector("h1")); // by tag name
console.dir(document.querySelector("#description")); // by id
console.dir(document.querySelector(".boxLink")); //by class



//query selectorall
console.dir(document.querySelectorAll('li')); //select all the li


//htmlcollection to array conversion
 document.getElementsByClassName("boxLink");

const listitem = document.getElementsByClassName("boxLink");
Array.from(listitem) // converted to array
const convertedarray = Array.from(listitem); 
convertedarray.forEach((li)=>{
    li.style.color = "#23423"
    
})

//manipulatin Attributes
