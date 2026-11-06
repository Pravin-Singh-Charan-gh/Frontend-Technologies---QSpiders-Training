let inp = document.getElementById('input')
inp.addEventListener('keypress',()=>{
    inp.style.backgroundColor = 'blue'
    inp.style.color = 'white'
})
inp.addEventListener('keyup',()=>{
    inp.style.backgroundColor = 'red'
    inp.style.color = 'green'
})

let btn = document.getElementById('btn')
btn.addEventListener('click',(ev)=>{
    console.log(ev)
})