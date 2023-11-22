class Shapes {
    constructor(circle, triangle, square) {
    Shapes.call(this, circle, triangle, square);
    }
  
    shapeType(input) {
        let input = toLowerCase(trim(input))
        if(input === 'circle'){
            return 'circle'
        }
        else if (input === 'triangle'){
            return 'triangle'
        } else if (input === 'square'){
            return 'square'
        }else {
            console.log("nothing??")
            return '';
        }
    }
  }


module.exports = shapeType;