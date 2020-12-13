const apiManager = require("./../api-manager")
const textBeautifier = require("./../text-beautifier")


function execCalendarCmd(discordClient){

    apiManager.getCalendar().then(
        calendar => {
            console.log(calendar)
            let calendarTable = textBeautifier.calendarToStringTable(calendar)
            console.log(calendarTable)
            discordClient.sendMessage(discordClient.channelID, calendarTable)
        } 
    ).catch(
        error => {
            console.log(`Error: Can not get calendar info ${error}`)
        }
    )
}

module.exports = {
    execCalendarCmd: execCalendarCmd
}