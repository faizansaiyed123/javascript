const accountId = 12345
let accountEmail = "faizan@email.com"
var accountPassword = "Faizan"


// accountId = 2 // not allowed to change because const

accountEmail = "saiyed@gmail.com"
accountPassword = "222222"

console.table([accountEmail ,accountPassword])

/*
Prefer not to use var because of issue block scope and functional scope
*/