function printUser(name, nextName){
    setTimeout(()=>{
        console.log('hello '+name)
        if (nextName){
            nextName()
        }
    },1000)
}
printUser("Dhanashree",()=>{
    printUser('Pooja',()=>{
        printUser("Sarika",()=>{
            printUser("Falguni",()=>{
                printUser("Dipali",()=>{
                    printUser("Karishma")
                })
            })
        })
    })
})