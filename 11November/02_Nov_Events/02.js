function task(){
    alert('Submitted Succesfully')   

} 
// task()
  
let btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    alert('I am clicked')
    console.log('Thanks')
})
  
btn.addEventListener('dblclick',()=>{
    alert('2 clicks')
})