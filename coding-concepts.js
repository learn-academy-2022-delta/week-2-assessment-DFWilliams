// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
// console.log(cohort.split(""))

// a) Your answer: ['D', 'e', 'l', 't', 'a', '2', '0', '2', '2']
// b) Verify and explain: [ 'D', 'e', 'l', 't', 'a', ' ', '2', '0','2', '2'], This was the output because .split converts strings into arrays. the .split method also took the argument (""), which separated each character in the string into its own value in the array. 


// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student!'
// b) Verify and explain: Undefined, this is the output because the function needs to show 'return' on line 20 in order to give the output. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ], this is the output because .map is used to make a new array that is the same length as the original. In this case the function wants the to return a new array with each value multiplied by 2


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11,13,15]
// b) Verify and explain: [ 11, 13, 15 ], this is the output becuase filter is used on arrays to return new array with only the values we ask for. In is case the function wants to return a new array that only has values that have a remainder that is not equal to zero AKA odd numbers. 


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: 'JavaScript' 
// b) Verify and explain: JavaScript , this was the output because console.log is calling for the value in the zero index of the key named frameworks that is within the object named myCodingSkills.



// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: [student: George, cohort: Bravo, year: 2022]
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 }, this was the output because the new instance made the name parameter in the constructor method was now assigned to George I made the mistake of putting the class in [] instead of {}. 
