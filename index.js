// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./examples/lib/generateSVG');
const colorChoice = require('./examples/lib/colors');
const shapeType = require('./examples/lib/shapes');
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
                "Circle", "Triangle", "Square"
            ]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color or hexadecimal should this shape be?"
        },
    ])
    // write file with response
    // might need to ad toLowerCase() method
    .then((response) => {
        fs.writeFileSync("logo.svg", generateSVG(response))
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

module.exports = inquirer