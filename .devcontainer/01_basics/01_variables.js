const accountId = 144553 //This can not be changed 
let accountEmail = "princekhurana16@gmail.com" //
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
bacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])