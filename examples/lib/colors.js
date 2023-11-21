const colorChoice = (color) => {
    if (color === 'red' || color === '#FF0000') {
        return 'red'
    }
    else if (color === 'yellow' || color === '#FFFF00') {
        return 'yellow'
    }
    else if (color === 'blue' || color === '#0000FF') {
        return 'blue'
    }
}

module.exports = colorChoice