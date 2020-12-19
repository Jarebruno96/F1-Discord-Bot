const circuitCmdManager = require('./circuitcmd.js')
const classificationCmdManager = require('./classificationcmd.js')
const pointsCmdManager = require('./pointscmd.js')
const calendarCmdManager = require('./calendarcmd.js')
const teamsCmdManager = require('./teamscmd.js')
const driversCmdManager = require('./drivercmd.js')
const fastlapsCmdManager = require('./fastlapcmd.js')
const raceCmdManager = require('./racecmd.js')

const driversCmd = '/pilotos'
const circuitsCmd = '/circuitos'
const classificationCmd = '/clasificacion'
const pointsCmd = '/puntos'
const calendarCmd = '/calendario'
const teamsCmd = '/equipos'
const fastlapsCmd = '/vueltarapida'
const raceCmd = '/carrera'


function isBotCommand(command){

    let commands = [
        driversCmd,
        circuitsCmd,
        classificationCmd,
        pointsCmd,
        calendarCmd,
        teamsCmd,
        fastlapsCmd,
        raceCmd
    ]

    return commands.includes(command)

}

function execCommand(command, args, discordClient){

    switch (command) {
        case driversCmd:
            console.log(`Executing ${driversCmd} ${args}`)
            driversCmdManager.execDriversCmd(discordClient, args)
        break
        case teamsCmd:
            console.log(`Executing ${teamsCmd} ${args}`)
            teamsCmdManager.execTeamsCmd(discordClient, args)
        break
        case circuitsCmd:
            console.log(`Executing ${circuitsCmd}`)
            circuitCmdManager.execCircuitCmd(discordClient)
            break
        case classificationCmd:
            console.log(`Executing ${classificationCmd}`)
            classificationCmdManager.execClassificationCmd(discordClient, args)
            break
        case pointsCmd:
            console.log(`Executing ${pointsCmd}`)
            pointsCmdManager.execPointsCmd(discordClient, args)
            break
        case calendarCmd:
            console.log(`Executing ${calendarCmd}`)
            calendarCmdManager.execCalendarCmd(discordClient, args)
        break
        case fastlapsCmd:
            console.log(`Executing ${fastlapsCmd}`)
            fastlapsCmdManager.execFastlapsCmd(discordClient, args)
        break
        case raceCmd:
            console.log(`Executing ${raceCmd}`)
            raceCmdManager.execRaceCmd(discordClient, args)
        break
        default:
            console.log(`Unknow command ${cmd}`)
    }
}

module.exports = {
    driversCmd : driversCmd,
    circuitsCmd : circuitsCmd,
    isBotCommand : isBotCommand,
    execCommand : execCommand
}