// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}

// sayMyName()

// function addTwoNumber(number1, number2) {
//    console.log(number1 + number2)
// }


function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}



const result = addTwoNumber(3, 4)

// console.log("Result: ", result);

function logInUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("Prince"))

// console.log(logInUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2, 200, 400, 500, 2000))

const user = {
    username: "prince",
    price: '199'
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); 
}

// handleObject(user)

handleObject({
    username: "sam",
    price: "399"
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600]));