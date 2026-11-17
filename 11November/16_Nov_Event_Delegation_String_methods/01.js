let parent = document.getElementById('parent')
let content = document.getElementById('content')

parent.addEventListener('click',(ev)=>{
    console.log(ev)
    console.log(ev.target)

    content.innerHTML = ev.target.textContent
})