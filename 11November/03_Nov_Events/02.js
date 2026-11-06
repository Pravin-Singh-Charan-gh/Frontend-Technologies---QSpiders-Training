let add = document.getElementById('add')


let img = document.createElement('img')
add.addEventListener('click',()=>{
    img.src = 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8PZHiAJpn9c/v1/-1x-1.webp'
    img.style.height = '200px'
    document.body.appendChild(img)
})

let remove = document.getElementById('remove')
remove.addEventListener('dblclick',()=>{
    img.remove()
})

let replace = document.getElementById('replace')
replace.addEventListener('click',()=>{
    img.src = 'https://cdn-cw-english.cwg.tw/article/202306/article-647f98eb31e74.jpg'
})