let WeiDate = require('./index')
let now = new WeiDate()
console.log(now)

now.init(undefined,"all")
let a =now.timer
now.init(undefined,"month")
let b =now.timer
console.log(a,b,now.timer)
// console.log(weiDate)