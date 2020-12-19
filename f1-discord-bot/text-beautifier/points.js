const table = require('table')


function pointsToStringTable(points){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
          }
    }
    let elements = [
        ['Posición', 'Puntos']
    ]

    Object.keys(points).forEach(
        key =>{
            elements.push([key, points[key]])
        }
    )

    return '`'+ table.table(elements, taleConfig) +'`'
}

module.exports = {
    pointsToStringTable : pointsToStringTable
}