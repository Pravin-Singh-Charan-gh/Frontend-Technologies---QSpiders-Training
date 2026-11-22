

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

printUser('Om')
.then(()=>printUser("Dhanush"))
.then(()=>printUser("Mammoty"))
.then(()=>printUser())
.then(()=>printUser('Vijay'))
.catch(()=>{
    console.log('Invalid arguments')
})


// promise chaining