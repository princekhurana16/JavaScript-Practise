// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3450632546554648948949n


// Reference ( Non Primitive )

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Prince",
    age: 24,
}

const myFucntion = function(){
    console.log("Hello World")
}


console.log(typeof bigNumber);



console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitve)

let myYotubename = "princekhuranadotcom"

let anothername = myYotubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYotubename);


let userOne = {
    email: "princekhurana16@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitest@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);


