const rolesManager = require('./role.js')
const circuitCmdManager = require('./circuitcmd.js')
const classificationCmdManager = require('./classificationcmd.js')
const pointsCmdManager = require('./pointscmd.js')
const calendarCmdManager = require('./calendarcmd.js')
const teamsCmdManager = require('./teamscmd.js')
const driversCmdManager = require('./drivercmd.js')
const fastlapsCmdManager = require('./fastlapcmd.js')
const raceCmdManager = require('./racecmd.js')
const introCmdManager = require('./intro.js')

const driversCmd = '/pilotos'
const circuitsCmd = '/circuitos'
const classificationCmd = '/clasificacion'
const pointsCmd = '/puntos'
const calendarCmd = '/calendario'
const teamsCmd = '/equipos'
const fastlapsCmd = '/vueltarapida'
const raceCmd = '/carrera'
const introCmd = '/intro'

function isBotCommand(command){

    let commands = [
        driversCmd,
        circuitsCmd,
        classificationCmd,
        pointsCmd,
        calendarCmd,
        teamsCmd,
        fastlapsCmd,
        raceCmd,
        introCmd
    ]

    return commands.includes(command)

}

function isAllowedToExec(command, member){

    let permissions = {}
    permissions[introCmd] = [rolesManager.caster]

    console.log(permissions)
    console.log(command)

    for(let memberRole of member.roles.cache){
        
        let role = memberRole[1]
        if (permissions[command].includes(role.name)){
            return true
        }
    }

    return false
}

function execCommand(command, args, member, discordClient){

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
        case introCmd:
            if(!isAllowedToExec(command, member)){
                console.log(`${member.user.username} tried to exec ${introCmd} at it is not allowed`)
                discordClient.sendMessage(discordClient.channelID, 'Solo los comentaristas pueden hacer la intro')
                
            }else{
                console.log(`${member.user.username} executing ${introCmd}`)
                introCmdManager.execIntroCmd(discordClient, member, args)
            }
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