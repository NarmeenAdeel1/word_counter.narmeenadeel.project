#!/usr/bin/env node

// this line called a shebang, it tells the operating system to run it with node.js

// declare a constatnt "answer" and assign it to the result of inquirer.prompt function

import inquirer from "inquirer"

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word: "
    }
])

const words = answers.sentence.trim().split(" ")

//print the array of words of the console
console.log(words)


//print the word count of the sentence of the console
console.log(`your sentence word count is ${words.length}
`);





