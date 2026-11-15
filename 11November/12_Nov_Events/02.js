let form = document.getElementById('form')
form.addEventListener('submit',(event)=>{
    console.log(event)
    event.preventDefault()

    console.log(document.getElementById('user').value)
})
console.log('Form Submitted')