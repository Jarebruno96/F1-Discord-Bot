const apiManager = require('./../api-manager')
const textBeautifier = require('./../text-beautifier')


function execCalendarCmd(discordClient){

    console.log(`Getting calendar info`)

    apiManager.getCalendar().then(
        calendar => {
            
            console.log(`Success getting calendar: ${calendar}`)
            let calendarTable = textBeautifier.calendarToStringTable(calendar)
            
            console.log(`Sending calendar to discord channel ${calendarTable}`)
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