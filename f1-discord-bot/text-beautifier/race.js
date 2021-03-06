const table = require('table')


function raceToStringTable(race){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
          }
    }

    let elements = [
        ['Piloto', 'Posicion llegada', 'Posicion salida', 'Vuelta Rápida']
    ]

    let driverStartsPositions = {}
    Object.keys(race.grid.grid).forEach(
        position => {
            driverStartsPositions[race.grid.grid[position].name] = position
        }
    )

    Object.keys(race.result.result).forEach(
        position => {
            let driverName = race.result.result[position].name
            let isFastLapDriver = race.raceFastDriver.name == driverName? 'Sí' : 'No'
            elements.push([driverName, position, driverStartsPositions[driverName], isFastLapDriver])
        }
    )

    return '`'+table.table(elements, taleConfig)+'`'
}


function raceResultToStringTable(raceResult){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
          }
    }
    
    let elements = [
        ['Piloto', 'Posición llegada']
    ]

    Object.keys(raceResult.result).forEach(
        position => {
            let driverName = raceResult.result[position].name
            elements.push([driverName, position])
        }
    )

    return '`'+table.table(elements, taleConfig)+'`'
}


function raceGridToStringTable(raceGrid){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
          }
    }

    let elements = [
        ['Piloto', 'Posicion salida']
    ]

    Object.keys(raceGrid.grid).forEach(
        position => {
            let driverName = raceGrid.grid[position].name
            elements.push([driverName, position])
        }
    )

    return '`'+table.table(elements, taleConfig)+'`'
}


function raceFastLapToStringTable(raceFastLapDriver){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
          }
    }

    let elements = [
        ['Piloto'], [raceFastLapDriver.name]
    ]

    return '`'+table.table(elements, taleConfig)+'`'
}

module.exports = {
    raceToStringTable: raceToStringTable,
    raceResultToStringTable: raceResultToStringTable,
    raceGridToStringTable: raceGridToStringTable,
    raceFastLapToStringTable: raceFastLapToStringTable
}