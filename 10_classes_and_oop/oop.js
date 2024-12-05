const user = {
    username: "Prince",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this);



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome: ${this.username}`);
    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("Chaiaurcode", 11, true)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);

// Empty object is created
// Constructor function is called bacause of new keyword
// all the arguments are injected to this keyword
// Here you get all the things in function

