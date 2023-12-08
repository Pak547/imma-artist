const { Circle, Square, Triangle } = require('./shapes');

test('Circle has correct cx,xy,r', () => {
    const shape = new Circle(50);
    expect(shape.render()).toEqual('circle cx="150" cy="100" r="80"');
  });

test('Square has correct x,y,width,height', () => {
    const shape = new Square(80);
    expect(shape.render()).toEqual('x="90" y="40" width="120" height="120"');
});

test('Triangle has correct points', () => {
    const shape = new Triangle(100);
    expect(shape.render()).toEqual('polygon points="150, 18 244, 182 56, 182"');
});

