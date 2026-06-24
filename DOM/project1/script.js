let para = document.createElement('p')

para.innerText = "Hey I'm red"

para.style.color = "red"

let body = document.querySelector('body')

body.appendChild(para)

let h3 = document.createElement('h3')

h3.innerText = "I'm Blue h3!"

h3.style.color = "blue"

body.appendChild(h3);

let div = document.createElement('div')

body.appendChild(div)
​
let h1 = document.createElement('h1')

h1.innerText = "I'm in a div"

div.appendChild(h1)
​
let newpara = document.createElement('p')

newpara.innerText = "Hi! i am a new paragraph"

div.appendChild(newpara)


