let audi = document.querySelector('#audi')
let text = document.querySelector('#text')
let cartoon = document.querySelector('#cartoon')

audi.addEventListener('play',()=>{
    text.textContent = 'Audio is Playing'
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    cartoon.src = 'https://media.tenor.com/WgyQ9aUq0nQAAAAi/happy-prom.gif'
})

audi.addEventListener('pause',()=>{
    text.textContent = 'Audio is paused'
    cartoon.src = ''
})