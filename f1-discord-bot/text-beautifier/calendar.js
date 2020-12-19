const table = require('table')


function calendarToStringTable(calendarInfo){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
        }
    }
    let elements = [
        ['Dia', 'Circuito']
    ]

    calendarInfo.events.forEach(event => {
        elements.push([event.day, event.circuit])
    })

    return '`' + table.table(elements, taleConfig) + '`'
}

module.exports = {
    calendarToStringTable : calendarToStringTable
}