const fs = require("fs")

const circuitsManager = require("./circuits.js")

const options = loadApiServerInfo()

function loadApiServerInfo(){
    
    let serverInfoFile = "./api-manager/apiserver-config.json"
    let rawData = fs.readFileSync(serverInfoFile);
    return  JSON.parse(rawData);
}

function getCircuitsInfo(){
    return circuitsManager.getCircuitsInfo(options)
}


module.exports = {
    getCircuitsInfo : getCircuitsInfo
}