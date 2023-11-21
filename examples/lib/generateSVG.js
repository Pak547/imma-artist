const { text } = require("stream/consumers")
const colorChoice = require("./colors")
const shapeType = require("./shapes")

function generateSVG() {
    return `<svg version="1.1"

    width="300" height="200"

 <rect width="100%" height="100%" fill="${colorChoice([color])}" />

 <${shapeType(shape)} cx="150" cy="100" r="80" fill="${colorChoice([shape - color])}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${[text]}</text>

</svg>`
}

module.exports = generateSVG