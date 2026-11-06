let h1 = document.createElement('h1')
h1.classList.add('diwali-style','text')
h1.innerHTML= 'Happy Diwali!'
document.body.appendChild(h1)
h1.classList.remove('diwali-style')

let head = document.getElementById('head')
console.log(head)
console.log(head.classList)
console.log(head.classList.contains('content'))
head.classList.remove('content')
console.log(head.classList.contains('content'))