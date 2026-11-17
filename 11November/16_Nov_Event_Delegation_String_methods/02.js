let content = "Qspiders"
console.log(content)

// it returns the character based on particular index
console.log(content.charAt(2))   //p

// it return sthe length of entire string 
console.log(content.length)   // 8

console.log(content.includes('r'))   //true
console.log(content.includes('R'))   // false

console.log(content.startsWith('Q'))  //true
console.log(content.startsWith('q'))  //false

console.log(content.toUpperCase())   // changes for this statement only
console.log(content.toLowerCase())   // changes for this statement only

let faral = "   Gulab Jamun   "
console.log(faral)
console.log(faral.trim())
console.log(faral.trimStart())
console.log(faral.trimEnd())

let req = 'I am Sorry \n'
console.log(req.repeat(10))

let tt = 'chandu ke chacha ne chandu ki chachi ko chatni chatai'
console.log(tt.replace('chandu','dora'))
console.log(tt.replaceAll('chandu','dora'))