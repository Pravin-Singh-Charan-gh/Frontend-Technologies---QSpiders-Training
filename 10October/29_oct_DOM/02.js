// createElement() : it is dom method which is used to insert or add HTML element dynamically to the browser

let h1 = document.createElement('h1')
console.log(h1)

h1.innerHTML = 'Virat Kohli'
document.body.appendChild(h1)
h1.style.color = 'orange'
h1.style.backgroundColor = 'black'

let img = document.createElement('img')