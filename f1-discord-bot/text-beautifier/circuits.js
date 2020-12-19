const table = require('table')


function circuitsToStringTable(circuitsInfo){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
          }
    }
    let elements = [
        ['Circuito', 'Pais', 'Distancia', 'Curvas']
    ]

    circuitsInfo.forEach(circuitInfo => {
        elements.push([circuitInfo.name, circuitInfo.country, circuitInfo.distance + ' m', circuitInfo.turns])
    })

    return '`' + table.table(elements, taleConfig) + '`'
}

module.exports = {
    circuitsToStringTable : circuitsToStringTable
}