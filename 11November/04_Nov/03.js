let addpic = document.getElementById('add')
let replace_pic = document.getElementById('replace')
let style = document.getElementById('style')
let rep_style = document.getElementById('rep-style')

let pic = document.getElementById('pic')

addpic.addEventListener('click',()=>{
    pic.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8TFJ7iUwyhF0_LOmPpst5aFLBQUYvRcuREn63JTVvg&s=10'
})
replace_pic.addEventListener('dblclick',()=>{
    pic.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSho9OgUxDjjbbHD-NsMtvoNfNLOAZMZAcuolkhb6x83mHLsc1Q9V3NmAg&s=10'
})
style.addEventListener('mouseover',()=>{
    pic.classList.add('style')
})
rep_style.addEventListener('click',()=>{
    pic.classList.remove('style')
    pic.classList.add('new-style') 
})