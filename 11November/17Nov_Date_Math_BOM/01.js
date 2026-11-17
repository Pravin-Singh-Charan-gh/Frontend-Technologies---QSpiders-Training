let date = new Date()
console.log(date)   // Tue Nov 17 2026 09:11:27 GMT+0530 (India Standard Time)

// Time : 9:09 AM
console.log(date.getDate())     // 17
console.log(date.getDay())   // 2 // tuesday indexing  starts from 0(Sunday)
console.log(date.getFullYear())  //2026
console.log(date.getHours())  //9 
console.log(date.getMilliseconds())   // 960 -> 1-1000
console.log(date.getMinutes())   // 9
console.log(date.getMonth())  // 10 -> November (0-> January)
console.log(date.getSeconds())  //41

