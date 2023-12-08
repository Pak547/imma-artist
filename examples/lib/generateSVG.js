const colorChoice = require('./colors.js');

function generateSVG(text, color, shape, shapeColor) {
  let base = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

  if (shape === 'circle') {
    base += `<circle cx="150" cy="100" r="50" fill="${colorChoice(shapeColor)}" />`;
  } else if (shape === 'triangle') {
    base += `<polygon points="150,50 100,150 200,150" fill="${colorChoice(shapeColor)}" />`;
  } else if (shape === 'square') {
    base += `<rect x="100" y="50" width="100" height="100" fill="${colorChoice(shapeColor)}" />`;
  } 

  base += `<text x="132" y="120" fill="${colorChoice(color)}">${text}</text></svg>`;

  return base;
}
module.exports = generateSVG;
