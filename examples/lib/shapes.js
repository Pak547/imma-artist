const shapeType = (input) => {
    if(input === 'Circle'){
        return 'circle'
    }
    else if (input === 'Triangle'){
        return 'triangle'
    } else if (input === 'Square'){
        return 'square'
    }else {
        console.log("nothing??")
        return '';
    }
}

module.exports = shapeType;