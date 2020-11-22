const driversCmd = "/pilotos"
const circuitsCmd = "/circuitos"

function isBotCommand(command){

    let commands = [
        driversCmd,
        circuitsCmd
    ]

    return commands.includes(command)

}

function execCommand(command, args){

    switch (command) {
        case botCmds.driversCmd:
            console.log(`Executing ${botCmds.driversCmd} ${arguments}`)
        break;
        case botCmds.circuitsCmd:
            console.log(`Executing ${botCmds.circuitsCmd}`)

            apiManager.getCircuitsInfo().then(
                circuitsInfo => {
                    console.log(circuitsInfo)
                } 
            ).catch(
                error => {
                    console.log(`Error: Can not get circuits info ${error}`)
                }
            )
            break;
        default:
            console.log(`Unknow command ${cmd}`)
            break;
    }
}

module.exports = {
    driversCmd : driversCmd,
    circuitsCmd : circuitsCmd,
    isBotCommand : isBotCommand,
    execCommand : execCommand
}