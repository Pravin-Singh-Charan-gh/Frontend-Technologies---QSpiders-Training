// 5 selectors
// createElement
// appendChild
// append  : accepsts many arguments
// prepend
// innerHTML
// textContent
// 

let h1 = document.createElement('h1')
console.log(h1)
h1.innerHTML= 'Hello World'
h1.style.color = 'red'
document.body.appendChild(h1)


let msg = document.createElement('h1')
document.getElementById('parent').appendChild(msg)
msg.innerHTML = 'Hello State'
msg.style.color = 'blue'