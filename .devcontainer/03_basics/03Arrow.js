const user = {
    username: "Prince",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website `);
         console.log(this);
        
    }
}

 // user.welcomeMessage()
 // user.username = 'sam'
 // user.welcomeMessage()

// console.log(this);


// function chai() {
//    let username = "prince"
//    console.log(this.username);
// }

// chai()

// const chai = function () {

//  let username = "hitesh"
 //  console.log(this.username)
// }



const chai = () => {
    let username = "prince"
    console.log(this.username)
}

// chai()

// Basic Arrow Function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implecet return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({username: "prince"}) 

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 4]
// myArray.forEach()