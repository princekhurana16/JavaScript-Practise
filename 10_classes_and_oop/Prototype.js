// let myName = "Prince      "
// let myChannel = "chai    "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let herPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.hiesh = function(){
    console.log("Hitesh is present in all objects");
    
}

Array.prototype.heyHiesh = function(){
    console.log("Hitesh says Hello");
}

// herPower.hiesh();
myHeros.hiesh();
myHeros.heyHiesh();
// herPower.heyHiesh();

// inheritance 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}


const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


Teacher.__proto__ = User



// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Chaiaurcode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lentgh is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()