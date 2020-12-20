const gridStartOption = 'parrilla'
const resultOption = 'resultado'
const fastLapOption = 'vueltarapida'
const apiManager = require('./../api-manager')
const textBeautifier = require('./../text-beautifier')


function execRaceCmd(discordClient, options){

    if (options.length == 1){

        console.log(`Getting info from ${options[0]} race`)

        apiManager.getRace(options[0]).then(
            race => {
                
                console.log(`Sucess getting info from ${options[0]} race`)
                let raceTable = textBeautifier.raceToStringTable(race)

                console.log(`Sending info from ${options[0]} race`)
                discordClient.sendMessage(discordClient.channelID, raceTable)
            }
        )
        return
    } 

    if (options.length == 2 && resultOption == options[1]){
        
        console.log(`Getting result from ${options[0]} race`)

        apiManager.getRaceResult(options[0]).then(
            raceResult => {

                console.log(`Sucess getting result from ${options[0]} race`)
                let raceResultTable = textBeautifier.raceResultToStringTable(raceResult)

                console.log(`Sending result from ${options[0]} race`)
                discordClient.sendMessage(discordClient.channelID, raceResultTable)
            }
        )
        return
    }

    if (options.length == 2 && gridStartOption == options[1]){
        
        console.log(`Getting grid from ${options[0]} race`)

        apiManager.getRaceGrid(options[0]).then(
            raceGrid => {
                
                console.log(`Sucess getting grid from ${options[0]} race`)
                let raceGridTable = textBeautifier.raceGridToStringTable(raceGrid)

                console.log(`Sending grid from ${options[0]} race`)
                discordClient.sendMessage(discordClient.channelID, raceGridTable)
            }
        )
        return
    }

    if (options.length == 2 && fastLapOption == options[1]){
        
        console.log(`Getting fast lap from ${options[0]} race`)

        apiManager.getRaceFastlapDriver(options[0]).then(
            raceFastLapDriver => {
                
                console.log(`Sucess getting fast lap from ${options[0]} race`)
                let raceFastLapDriverTable = textBeautifier.raceFastLapToStringTable(raceFastLapDriver)

                console.log(`Sending ast lap from ${options[0]} race`)
                discordClient.sendMessage(discordClient.channelID, raceFastLapDriverTable)
            }
        )
        return
    }
}

module.exports = {
    execRaceCmd: execRaceCmd
}