// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided. 

// describe("functionName", () => {
//   it("describes what my test and function does", () => {
//     expect(functionName("pass any params needed")).toEqual("Expect output")
//   })
// })

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("divisbleByThree", () => {
//   it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
//     const num1 = 15
//     // Expected output: "15 is divisible by three"
//     const num2 = 0
//     // Expected output: "0 is divisible by three"
//     const num3 = -7
//     // Expected output: "-7 is not divisible by three"
//     expect(divisbleByThree(num1)).toEqual("15 is divisible by three")
//     expect(divisbleByThree(num2)).toEqual("0 is divisible by three")
//     expect(divisbleByThree(num3)).toEqual("-7 is not divisible by three")
//   })
// })

// ReferenceError: divisbleByThree is not defined



// b) Create the function that makes the test pass.

//Puesdo code:
// declare a function named divisbleByThree
// set parameter as number 
// use conditional statments to decide with the number is divisible by 3
    // if number % 3 === 0 return with string interpolation " number is divisble by 3"
    // else if number % 3 !== 0 return with string interpolation " number is not divisble by 3"

    const divisbleByThree = (number) => {
        if (number % 3 === 0) {
            return `${number} is divisible by three`
        } else {
            return `${number} is not divisible by three`
        } 
    }

    // Test Suites: 1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided. 


describe("capsFirst", () => {
  it("takes in an array of words and returns an array with all the words capitalized.", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNounsOutput1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
   const randomNounsOutput2 = ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"] 
    expect(capsFirst(randomNouns1)).toEqual(randomNounsOutput1)
    expect(capsFirst(randomNouns2)).toEqual(randomNounsOutput2)
    
  })
})

//  ReferenceError: capsFirst is not defined

// b) Create the function that makes the test pass.

//Psuedo code:
    // declare a function named capsFirst
    // set parameter nounsArray
    // use. map to iterate through each value
    // use .charAt() to access the first character of each value, 
    // use .toUpperCase to make the first letter in each value capitalized 
    // use .substring return the remaining characters within each value of the array
   

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
function capsFirst (nounsArray) {
    return nounsArray.map( noun => {
      return noun.charAt(0).toUpperCase() + noun.substring(1)
    })
  }
  

//   Test Suites: 1 passed, 1 total
  
  
  

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowelSearch", () => {
  it("takes in a string and logs the index of the first vowel", () => {
    expect(vowelSearch(vowelTester1)).toEqual(1)
    expect(vowelSearch(vowelTester2)).toEqual(0)
    expect(vowelSearch(vowelTester3)).toEqual(2)
  })
})

// ReferenceError: vowelSearch is not defined
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
 
//Psuedo Code
    // declare a function named vowelSearch
    // use a for loop to iterate through each character in the string
    // use conditional statments and .charAt to compare each letter of the word to vowels. 
        //if the letter is "e" - return the index of "e"
        //else if the letter is "a" - return the index of "a"
        //else if the letter is "i" - return the index of "i"
        //else if the letter is "o" - return the index of "o"
        //else if the letter is "u" - return the index of "u"


const vowelSearch =  (string) => {
    for (let i=0 ; i < string.length ; i++) {
        if (string.charAt(i) === "e"){
            return string.indexOf("e")
    } else if (string.charAt(i) === "a") { 
            return string.indexOf("a")
        } else if (string.charAt(i) === "i") {
            return string.indexOf("i")
        } else if (string.charAt(i) === "o"){
            return string.indexOf("o")
        } else if (string.charAt(i) === "u"){
            return string.indexOf("u")
        }
    }
}

// console.log(vowelSearch(vowelTester1))
// console.log(vowelSearch(vowelTester2))
// console.log(vowelSearch(vowelTester3))

