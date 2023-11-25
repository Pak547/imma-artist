const colorChoice = require("./colors");
const shapeType = require("./shapes");

function generateSVG(response) {
  console.log("this is resp", response);
  return `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">
<${shapeType(response.shape)} fill="${colorChoice(response.color)}" />
<text x="150" y="155" font-size="60" text-anchor="middle" fill="${colorChoice(response.shapeColor)}">${response.text}</text>
</svg>`;
}

module.exports = generateSVG;
