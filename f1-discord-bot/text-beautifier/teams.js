const table = require('table')


function teamsToStringTable(teamsInfo){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
          }
    }

    let elements = [
        ['Escuderia', 'Color']
    ]

    teamsInfo.forEach(teamInfo => {
        elements.push([teamInfo.name, teamInfo.color])
    })

    return '`' + table.table(elements, taleConfig) + '`'

}


function teamsDriversToStringTable(teams){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
            }
    }

    let elements = [
        ['Escuderia', 'Pilotos']
    ]

    teams.forEach(team => {
        
        let first = true

        team.drivers.forEach(driver => {

            if (first){
                elements.push([team.name, driver.name])
                first = false
            }else{
                elements.push(['', driver.name])
            }
        })
    })

    return '`' + table.table(elements, taleConfig) + '`'
}


function teamsInfoToStringTable(teams){

    let taleConfig = {
        border : table.getBorderCharacters('void'),
        drawHorizontalLine: (index, size) => {
            return index === 0 || index === 1 || index === size
            }
    }

    let elements = [
        ['Escuderia', 'Color', 'Pilotos']
    ]
    
    teams.forEach(team => {
        
        let first = true

        team.drivers.forEach(driver => {

            if (first){
                elements.push([team.name, team.color, driver.name])
                first = false
            }else{
                elements.push(['','', driver.name])
            }
        })
    })

    return '`' + table.table(elements, taleConfig) + '`'
}

module.exports = {
    teamsToStringTable : teamsToStringTable,
    teamsDriversToStringTable: teamsDriversToStringTable,
    teamsInfoToStringTable: teamsInfoToStringTable
}