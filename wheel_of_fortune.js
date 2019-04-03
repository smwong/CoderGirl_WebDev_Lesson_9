// Ask player if they would like to guess a letter or guess the solution
console.log("Would you like to guess a letter or guess the solution?");

// Variables
var word = 'CAT';
var isGuessingLetter = true;
var letter = 'F';

// Guessing letter
if (isGuessingLetter === true && letter === 'C') {
  console.log("C--");
} else if (isGuessingLetter === true && letter === 'A') {
  console.log("-A-");
} else if (isGuessingLetter === true && letter === 'T') {
  console.log("--T");
} else if (isGuessingLetter === true && letter != 'C' && letter != 'A' && letter != 'T') {
  console.log("Sorry, no " + letter + "!")
}

// Guessing solution
if (isGuessingLetter === false && word === 'CAT') {
    console.log("Congratulations! You won Wheel Of Fortune!");
  } else if (isGuessingLetter === false && word != 'CAT') {
    console.log("Nope, keep trying!");
  }
