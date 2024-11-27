const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach( function (item) {
//    console.log(item);
//})

//coding.forEach( (item) => {
//    console.log(item);
//} )

//function printME(item) {
 //   console.log(item);    
//}

// coding.forEach(printME)

coding.forEach ( (item, index, arr)=> {
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "PY"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

