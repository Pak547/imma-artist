class Shape {
  constructor(type) {
    this.type = type;
  }
  getShape() {
    switch (this.type) {
      case 'circle':
        return this.getCircle(this.cx, this.cy, this.r);
      case 'triangle':
        return this.getTriangle(this.point);
      case 'square':
        return this.getSquare(this.x, this.y, this.width, this.height);
      default:
        throw new Error('Invalid shape type');
    }
  }
  getCircle(cx, cy, r) {
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    return `circle cx="150" cy="100" r="80"`;
  }

  getTriangle(point) {
    this.point = point;
    return `polygon points="150, 18 244, 182 56, 182"`
  }
  getSquare(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
    return `x="90" y="40" width="120" height="120"`
  }
}
class Circle {
  constructor(cx, cy, r) {
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    return `circle cx="150" cy="100" r="80"`;
  }
}

class Triangle {
  constructor(point) {
    this.point = point;
    return `polygon points="150, 18 244, 182 56, 182"`
  }
}

class Square {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return `x="90" y="40" width="120" height="120"`

  }
}

module.exports = Shape;
module.exports = Triangle;
module.exports = Square;
module.exports = Circle;