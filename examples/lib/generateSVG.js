const colorChoice = require("./colors")
const shapeType = require("./shapes")
const inquirer = require("inquirer")

function generateSVG(response) {
    return `<svg version="1.1"

    width="300" height="200"

 <rect width="100%" height="100%" fill="${colorChoice(response.color)}" />

 <${shapeType(response.shape)} cx="150" cy="100" r="80" fill="${colorChoice(response.shape-color)}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${response.text}</text>

</svg>`
}

module.exports = generateSVG