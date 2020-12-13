const gridStartOption = "parrilla"
const resultOption = "resultado"
const fastLapOption = "vueltarapida"
const apiManager = require("./../api-manager")
const textBeautifier = require("./../text-beautifier")

function execRaceCmd(discordClient, options){

    if (options.length == 1){
        console.log(`Obteniendo carrera ${options[0]}`)

        apiManager.getRace().then(
            race => {
                console.log(race)
                let raceTable = textBeautifier.raceToStringTable(race)
                discordClient.sendMessage(discordClient.channelID, raceTable)
            }
        )
        return
    } 

    if (options.length == 2 && resultOption == options[1]){
        console.log(`Obteniendo carrera resultados de ${options[0]}`)
        apiManager.getRaceResult().then(
            raceResult => {
                console.log(raceResult)
                let raceResultTable = textBeautifier.raceResultToStringTable(raceResult)
                discordClient.sendMessage(discordClient.channelID, raceResultTable)
            }
        )
        return
    }

    if (options.length == 2 && gridStartOption == options[1]){
        console.log(`Obteniendo carrera salida de ${options[0]}`)
        apiManager.getRaceGrid().then(
            raceGrid => {
                console.log(raceGrid)
                let raceGridTable = textBeautifier.raceGridToStringTable(raceGrid)
                discordClient.sendMessage(discordClient.channelID, raceGridTable)
            }
        )
        return
    }

    if (options.length == 2 && fastLapOption == options[1]){
        console.log(`Obteniendo carrera vuelta rapida ${options[0]}`)
        apiManager.getRaceFastlapDriver().then(
            raceFastLapDriver => {
                console.log(raceFastLapDriver)
                let raceFastLapDriverTable = textBeautifier.raceFastLapToStringTable(raceFastLapDriver)
                discordClient.sendMessage(discordClient.channelID, raceFastLapDriverTable)
            }
        )
        return
    }

}

module.exports = {
    execRaceCmd: execRaceCmd
}