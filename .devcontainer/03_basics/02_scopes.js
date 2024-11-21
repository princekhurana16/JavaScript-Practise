// let a = 10
// const b = 20
// var c = 30

// var c = 300

let a = 200
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a)
}

//for (let i = 0; i < array.length; i++) {
//    const element = array[i]
// }

// console.log(a);
// console.log(b);
// console.log(c);



// Nested Scope

function one() {
    const username = "prince"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()


if (true) {
    const username = "prince"
    if (username  === "prince"){
        const website = " youtube"
       // console.log(username + website);   
    }
    // console.log(website);
    
}

// console.log(username);




// +++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++

console.log(addone(5)) // will execute without any error 
function addone(num){
    return num + 1
}


addTwo(5) //will throw error 
const addTwo = function(num) {
    return num + 2
}

