const request = require("./request.js")
const apiResources = require("./api-resources.js")
const calendar = require('./../model/calendar.js')

function getCalendar(serverOptions){

    console.log(`Getting calendar from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.calendar}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.calendar,
        agent: false,
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {
        request.makeAsyncRequest(requestOptions).then(
            response => {
                calendarInfo = calendar.Calendar.fromJSON(response)
                resolve(calendarInfo)
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 
     
}

module.exports = {
    getCalendar : getCalendar
}
