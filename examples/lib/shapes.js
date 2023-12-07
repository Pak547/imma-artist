class Shape {
  constructor() {
    this.response = "";
  }
}

class Circle extends Shape{
  render() {
    return `circle cx="150" cy="100" r="80"`;
  }
}

class Triangle extends Shape{
  render() {
    return `polygon points="150, 18 244, 182 56, 182"`
  }
}

class Square extends Shape{
  render() {
    return `x="90" y="40" width="120" height="120"`
  }
}

module.exports = {Shape, Square, Triangle, Circle}