const fs = require('fs')
const discordClient = require('./discordclient.js')

class F1Bot{

    constructor(){

        let botOptionsFile = './f1bot/f1bot-config.json'
        let rawData = fs.readFileSync(botOptionsFile)
        this.options = JSON.parse(rawData)

        this.client = new discordClient.DiscordClient(this.options)

    }

    init(){
        this.client.login()
    }

    close(){
        this.client.logout().then(
            () => this.client.destroy()
        )
    }
}

module.exports = {
    F1Bot : F1Bot
}