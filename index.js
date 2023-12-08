const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./examples/lib/generateSVG');
const { log } = require('console');

const validThreeChar = (userInput) => {
    if (userInput.length > 3 || userInput.length <= 0) {
        return 'Invalid input! you can only enter up to three characters';
    } else {
        return true;
    }
}

inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "Input text up to three characters",
            validate: validThreeChar
        },
        {
            type: "input",
            name: "color",
            message: "Enter a color or hexadecimal number"
        },
        {
            type: "list",
            name: "shape",
            message: "Which shape?",
            choices: [
                "circle", "triangle", "square"
            ]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color or hexadecimal should this shape be?"
        },
    ])

    .then(({text, color, shape, shapeColor}) => {
        console.log(text,color,shape, shapeColor);
        fs.writeFileSync("logo.svg", generateSVG(text, color, shape, shapeColor))
        console.log("Generated logo.svg!")
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error.isTtyError)
            console.log("environment isn't suitable try again")
            // Prompt couldn't be rendered in the current environment
        } else {
            console.log(error)
            console.log("Oops that wasn't supposed to happen");
            // Something else went wrong
        }
    });

    

module.exports = inquirer;