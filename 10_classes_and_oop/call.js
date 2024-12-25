function SetUsername(username){
    //Complex db calls 
    this.username =  username

}

function CreateUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new CreateUser("chai", "chai@gamil.com", "123")
console.log(chai);
