class Shape {
  constructor(circle, triangle, square) {
    this.circle = circle;
    this.triangle = triangle;
    this.square = square;
}

  shapeType(input) {
    if (input === "Circle") {
      return `circle cx="150" cy="100" r="80"`;
    } else if (input === "Triangle") {
      return `polygon points="150, 18 244, 182 56, 182"`;
    } else if (input === "Square") {
      return `rect x="90" y="40" width="120" height="120"`;
    } else {
      console.log("nothing??");
      return "";
    }
  }
}
function Circle(cx, cy, r) {
    Shape.call(this, cx, cy, r);
    this.circle = this.circle;
        return `circle cx="150" cy="100" r="80"`;
}
const newCircle = new Circle('150','100','80')

function Triangle(point) {
    Shape.call(this, point);
    this.triangle = triangle;
    return `polygon points="150, 18 244, 182 56, 182"`
  }
  const newTriangle = new Triangle("150, 18 244, 182 56, 182")

  function Square(x, y, width, height) {
    Shape.call(this, x, y, width, height);
    this.square = square;
    return `x="90" y="40" width="120" height="120"`
  }
  const newSquare = new Square("90","40","120","120")
  
  Dog.prototype.bark = function () {
    console.log('Woof!');
  };
  
  Dog.prototype.bark = function () {
    console.log('Woof!');
  };



module.exports = Shape;
