let parent = document.getElementById("parent")
let child = document.getElementById("child")
let grandChild = document.getElementById("grandChild")


// Bubbling Phase : child to parent
// parent.addEventListener('click',()=>{
//     console.log("Parent clicked")
//     parent.style.backgroundColor = "red"
// })
// child.addEventListener('click',()=>{
//     console.log("Child clicked")
//     child.style.backgroundColor = "green"
// })
// grandChild.addEventListener('click',()=>{
//     console.log("grandChild clicked")
//     grandChild.style.backgroundColor = "yellow"
// })

//=======================================================

// Capturing Phase : parent to child 
document.body.addEventListener('click',()=>{
    console.log('body is clicked')
},true)
parent.addEventListener('click',()=>{
    console.log("Parent clicked")
    parent.style.backgroundColor = "orange"
})
child.addEventListener('click',()=>{
    console.log("Child clicked")
    child.style.backgroundColor = "green"
},true)
grandChild.addEventListener('click',()=>{
    console.log("grandChild clicked")
    grandChild.style.backgroundColor = "yellow"
},true)



// ==============================================
// Stop event propagation 

// parent.addEventListener('click',(ev)=>{
//     console.log("Parent clicked")
//     parent.style.backgroundColor = "red"
//     ev.stopPropagation()
// })

// child.addEventListener('click',(ev)=>{
//     console.log("Child clicked")
//     child.style.backgroundColor = "green"
//     ev.stopPropagation()
// })

// grandChild.addEventListener('click',(ev)=>{
//     console.log("grandChild clicked")
//     grandChild.style.backgroundColor = "yellow"
//     ev.stopPropagation()
// })


//========================
// parent.addEventListener('click',(ev)=>{
//     console.log("Parent clicked")
//     parent.style.backgroundColor = "orange"
//     ev.stopPropagation()
// },true)
// child.addEventListener('click',(ev)=>{
//     console.log("Child clicked")
//     child.style.backgroundColor = "green"
//     ev.stopPropagation()
// },true)
// grandChild.addEventListener('click',(ev)=>{
//     console.log("grandChild clicked")
//     grandChild.style.backgroundColor = "yellow"
//     ev.stopPropagation()
// },true)