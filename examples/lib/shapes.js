class Shape {
  constructor(circle, triangle, square) {
    this.circle = circle;
    this.triangle = triangle;
    this.square = square;
}

//   shapeType(input) {
//     if (input === "Circle") {
//       return `circle cx="150" cy="100" r="80"`;
//     } else if (input === "Triangle") {
//       return `polygon points="150, 18 244, 182 56, 182"`;
//     } else if (input === "Square") {
//       return `rect x="90" y="40" width="120" height="120"`;
//     } else {
//       console.log("nothing??");
//       return "";
//     }
//   }
}
function Circle(cx, cy, r) {
  this.cx = cx;
  this.cy = cy;
  this.r = r;
    this.getShape = function (){
        return `circle cx="150" cy="100" r="80"`;
    }
}
const newCircle = new Circle('150','100','80')

function Triangle(point) {
    this.point = point;
    this.getShape = function (){
        return `polygon points="150, 18 244, 182 56, 182"`
    }
  }
  const newTriangle = new Triangle("150, 18 244, 182 56, 182")

  function Square(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
    this.getShape = function (){
        return `x="90" y="40" width="120" height="120"`
    }
  }
  const newSquare = new Square("90","40","120","120")
  
module.exports = Shape;
