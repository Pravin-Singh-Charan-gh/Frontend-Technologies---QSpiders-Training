// Promises

let prom = new Promise((resolve,reject)=>{
    let acceptProposal = true 
    if(acceptProposal){
        resolve("YESSSSSSSSSSSSSSSSSS!")
    }
    else{
        reject("Better luck next time")
    }
})

console.log(prom)
prom.then(()=>{
    console.log("Finally")
})
prom.catch(()=>{
    console.log('Kashhhhh!')
})
prom.finally(()=>{
    console.log("Khairrrr!")
})