const table = require('table')


function driverFastLapsToStringTable(driversFastLaps){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
          }
    }
    let elements = [
        ['Piloto', 'Circuito']
    ]

    driversFastLaps.forEach(fastLap => {
        elements.push([fastLap.driver.name, fastLap.circuit.name])
    })

    return '`'+table.table(elements, taleConfig)+'`'
}


function teamFastLapsToStringTable(teamsFastLaps){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
          }
    }
    let elements = [
        ['Escudería', 'Circuito']
    ]

    teamsFastLaps.forEach(fastLap => {
        elements.push([fastLap.team.name, fastLap.circuit.name])
    })

    return '`'+table.table(elements, taleConfig)+'`'
}

module.exports = {
    driverFastLapsToStringTable : driverFastLapsToStringTable,
    teamFastLapsToStringTable: teamFastLapsToStringTable
}