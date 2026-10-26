// filter()

let names = ['vaishnavi','Dhanashri','heer','kranti','tejaswi','vaishnavi']

function lastI(ele){
    return ele.endsWith('i')
}
let Inames = names.filter(lastI)
console.log(Inames)  //(5) ['vaishnavi', 'Dhanashri', 'kranti', 'tejaswi', 'vaishnavi']

let Vnames = Inames.filter((ele)=>{
    return ele.includes('v')
})
console.log(Vnames) //(2) ['vaishnavi', 'vaishnavi']

let kNames = Inames.filter((ele)=>ele.startsWith('k'))
console.log(kNames)


