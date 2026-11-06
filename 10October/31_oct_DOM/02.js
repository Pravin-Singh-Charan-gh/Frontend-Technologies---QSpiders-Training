let msg1 = document.createElement('h1')
document.body.appendChild(msg1)
msg1.innerHTML = '<p>innerHTML</p>'

let msg2 = document.createElement('h1')
document.body.appendChild(msg2)
msg2.textContent = '<p>textContent</p>'


let ol = document.querySelector('#parent')

// appendChild accept only 1 argument
let li1 = document.createElement('li')
li1.textContent = 'bike'
ol.appendChild(li1)

// append() accepts many arguments
let li2 = document.createElement('li')
li2.textContent = 'Car'
ol.append(li2,'Welcome')

// prepend() adds the element at the start
let li3 = document.createElement('li')
li3.textContent = 'Truck'
ol.prepend(li3)