let form = document.querySelector("#form")
let user = document.getElementById("user")

form.addEventListener("input",(event)=>{
    event.preventDefault()
    console.log(document.getElementById("user").value)
})

user.addEventListener("focus",()=>{
    user.style.backgroundColor = "palegreen"
    document.getElementById('text').innerHTML = "Please enter valid username"
})
user.addEventListener("blur",()=>{
    user.style.backgroundColor = "white"
    document.getElementById("text").innerHTML = ""
})