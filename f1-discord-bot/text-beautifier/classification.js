const table = require("table")


function driverClassificationToStringTable(driversClassificationPositions){

    let taleConfig = {
        border : table.getBorderCharacters("void"),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size;
          }
    }
    let elements = [
        ["Piloto", "Puntos"]
    ]

    driversClassificationPositions.forEach(driverClassificationPosition => {
        elements.push([driverClassificationPosition.name, driverClassificationPosition.points])
    });

    let a = table.table(elements, taleConfig)

    return '`'+a+'`'

}


function teamsClassificationToStringTable(teamsClassificationPositions){

    let taleConfig = {
        border : table.getBorderCharacters("void"),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size;
          }
    }
    let elements = [
        ["Escuderia", "Puntos"]
    ]

    teamsClassificationPositions.forEach(teamClassificationPosition => {
        elements.push([teamClassificationPosition.name, teamClassificationPosition.points])
    });

    let a = table.table(elements, taleConfig)

    return '`'+a+'`'

}

module.exports = {
    driverClassificationToStringTable : driverClassificationToStringTable,
    teamsClassificationToStringTable: teamsClassificationToStringTable
}