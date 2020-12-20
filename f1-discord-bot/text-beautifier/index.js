const circuitBeautifier = require('./circuits.js')
const classificationBeautifier = require('./classification.js')
const pointsBeautifier = require('./points.js')
const calendarBeautifier = require('./calendar.js')
const teamsBeautifier = require('./teams.js')
const driversBeautifier = require('./drivers.js')
const fastLapsBeautifier = require('./fastlaps.js')
const raceBeautifier = require('./race.js')

module.exports = {
    circuitsToStringTable : circuitBeautifier.circuitsToStringTable,
    driversClassificationToTable : classificationBeautifier.driverClassificationToStringTable,
    teamsClassificationToStringTable: classificationBeautifier.teamsClassificationToStringTable,
    pointsToStringTable: pointsBeautifier.pointsToStringTable,
    calendarToStringTable: calendarBeautifier.calendarToStringTable,
    teamsToStringTable: teamsBeautifier.teamsToStringTable,
    teamsDriversToStringTable: teamsBeautifier.teamsDriversToStringTable,
    teamsInfoToStringTable: teamsBeautifier.teamsInfoToStringTable,
    driversToStringTable: driversBeautifier.driversToStringTable,
    driverFastLapsToStringTable: fastLapsBeautifier.driverFastLapsToStringTable,
    teamFastLapsToStringTable: fastLapsBeautifier.teamFastLapsToStringTable,
    raceToStringTable: raceBeautifier.raceToStringTable,
    raceResultToStringTable: raceBeautifier.raceResultToStringTable,
    raceGridToStringTable: raceBeautifier.raceGridToStringTable,
    raceFastLapToStringTable: raceBeautifier.raceFastLapToStringTable
}