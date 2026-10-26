obj = {
    add : {
        city : 'Pune',
        state : 'MH'
    }
}
console.log('state' in obj.add)
delete obj.add.state
console.log(obj)