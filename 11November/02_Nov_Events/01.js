let img = document.createElement('img')
console.log(img)
document.body.appendChild(img)

img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4JXV0SH2MDomppLlOc1l4Z7KYofEz-KabZxwJB7E3Q&s=10')
img.src = 'https://im.rediff.com/cricket/2023/jan/17kohli1.jpg?w=450&h=450'
// latest will take place

img.setAttribute('alt','image')
img.style.height = '100px'

img.removeAttribute('src')
// both will be removed 
console.log(img.hasAttribute('alt'))  //true
console.log(img.hasAttribute('src'))  //false