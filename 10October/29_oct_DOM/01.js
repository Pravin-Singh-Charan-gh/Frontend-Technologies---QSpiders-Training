// changing styling of html elements

let para = document.getElementById('para')
para.style.color = 'red'
para.style.backgroundColor='yellow'

let heading = document.getElementsByClassName('heading')
console.log(heading)
// we cannot iterate over html collection
// heading.forEach(element => {
//     element.style.color='red'
// });

// need to style each element separately
heading[0].style.color = 'blue'
heading[1].style.color = 'blue'
heading[2].style.color = 'blue'
heading[3].style.color = 'blue'
heading[4].style.color = 'blue'


// using array of nodelist
let heads = document.querySelectorAll('.heading')
heads.forEach((ele)=>ele.style.color = 'green')