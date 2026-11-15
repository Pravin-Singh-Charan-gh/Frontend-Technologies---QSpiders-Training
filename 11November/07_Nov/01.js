window.addEventListener("scroll",()=>{
    console.log(window.screenY)
    console.log(window.scrollY)

    let text = document.getElementById("text")
    text.innerHTML =window.scrollY
    let img = document.getElementById("img")
    if(window.scrollY>=700){
        img.src = ""
    }
    if(window.scrollY>=500 && window.scrollY<700){
        img.src = "https://ecards.joliecarte.com/166968/diwali-messages-and-images.jpg"
    }
    
})