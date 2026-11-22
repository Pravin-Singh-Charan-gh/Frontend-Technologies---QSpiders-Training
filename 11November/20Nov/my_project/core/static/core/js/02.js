// Async and await 

// Asycn : should be written before function delaration
// await : await should be written befotr statement delacaration which returns promises

function printUser(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Hello ' + name)
            if(name){
                resolve('Successful')
            }
            else{
                reject('Failed')
            }
        },1000)
    })
}

async function getAllUsers(){
   await printUser('Om')
   await printUser('Dhanush')
   await printUser('Mammoty')
   await printUser('Sai')
   setTimeout(async()=>{
    await printUser('Vijay')
   },5000)

   await printUser('Salman')
   await printUser('Rahul')
}

getAllUsers()