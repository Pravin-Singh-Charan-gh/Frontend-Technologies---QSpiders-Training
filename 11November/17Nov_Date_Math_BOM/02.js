let btn = document.getElementById('btn')
let age = document.getElementById('age')

btn.addEventListener('click',()=>{
    let birthYear = prompt("Enter your birth year!")
    age.innerText = `Your age : ${new Date().getFullYear() - birthYear}`
})