const fs = require("fs")

const circuitsManager = require("./circuits.js")
const classificationManager = require("./classification.js")
const pointsManager = require("./points.js")
const calendarManager = require("./calendar.js")
const teamsManager = require("./teams.js")
const driversManager = require("./drivers.js")
const fastlapManager = require("./fastlaps.js")
const raceManager = require("./race.js")

const options = loadApiServerInfo()

function loadApiServerInfo(){
    
    let serverInfoFile = "./api-manager/apiserver-config.json"
    let rawData = fs.readFileSync(serverInfoFile);
    return  JSON.parse(rawData);
}

function getCircuitsInfo(){
    return circuitsManager.getCircuitsInfo(options)
}

function getDriversClassification(){
    return classificationManager.getDriversClassification(options)
}

function getTeamsClassification(){
    return classificationManager.getTeamsClassification(options)
}

function getPoints(){
    return pointsManager.getPoints(options)
}

function getCalendar(){
    return calendarManager.getCalendar(options)
}

function getTeams(){
    return teamsManager.getTeams(options)
}

function getTeamsInfo(){
    return teamsManager.getTeamsInfo(options)
}

function getTeamsDrivers(){
    return teamsManager.getTeamsDrivers(options)
}

function getDrivers(){
    return driversManager.getDrivers(options)
}

function getDriversFastlaps(){
    return fastlapManager.getDriversFastlaps(options)
}

function getTeamsFastlaps(){
    return fastlapManager.getTeamsFastlaps(options)
}

function getRace(){
    return raceManager.getRace(options)
}

function getRaceGrid(){
    return raceManager.getRaceGrid(options)
}

function getRaceResult(){
    return raceManager.getRaceResult(options)
}

function getRaceFastlapDriver(){
    return raceManager.getRaceFastlapDriver(options)
}

module.exports = {
    getCircuitsInfo : getCircuitsInfo,
    getDriversClassification: getDriversClassification,
    getTeamsClassification: getTeamsClassification,
    getPoints: getPoints,
    getCalendar: getCalendar,
    getTeams: getTeams,
    getTeamsInfo: getTeamsInfo,
    getTeamsDrivers: getTeamsDrivers,
    getDrivers: getDrivers,
    getDriversFastlaps: getDriversFastlaps,
    getTeamsFastlaps: getTeamsFastlaps,
    getRace: getRace,
    getRaceGrid: getRaceGrid,
    getRaceResult: getRaceResult,
    getRaceFastlapDriver: getRaceFastlapDriver
}