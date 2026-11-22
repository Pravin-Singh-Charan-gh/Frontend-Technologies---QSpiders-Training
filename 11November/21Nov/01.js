let eps = "https://jsonplaceholder.typicode.com/users"
// console.log(eps)

// function fetchData(){
//     let data = fetch(eps)
//     console.log(data)
//     data.then(()=>{
//         console.log('Data is coming')
//     })
//     data.catch(()=>{
//         console.log('Error')
//     })
// }
// fetchData()

// async function getData(){
//     let data = await fetch(eps)
//     console.log(data)
//     let result = await data.json()
//     console.log("EMPS")
//     console.log(result)
// }
// getData()

//==========================================================
// let products = "https://dummyjson.com/products"
// async function printProducts(){
//     let data = await fetch(products)
//     console.log("PRODUCTS")
//     console.log(data.json())
// }
// printProducts()
// ================================================

let cars = "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json"
async function printCars(){
    let data = await fetch(cars)
    console.log(data)
    let result = await data.json()
    console.log(result)
}
printCars()