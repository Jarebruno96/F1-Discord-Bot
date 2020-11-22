'use strics';

const discord = require('discord.js');
const circuits = require('../api-manager/circuits');
//const circuitsApiManager = require('../api-manager/circuits');
const apiManager = require('./../api-manager')
const botCmds = require('./botcmds.js')

const delimiter = " "

class DiscordClient extends discord.Client{

    constructor(options){

        super()
        this.token = options['token']
        this.botPresence = options['defaultPresence']
        this.channelID = options['channelID']
        this.messages = options['messages']
    }

    login(){

        super.login(this.token);
        console.log("Initializing bot");
        this.on('ready', this.initBot);
    }

    initBot(){

        console.log(`Logged in as ${this.user.tag}!`);
        this.sendMessage(this.channelID, this.messages["welcome"] )
        this.setBotPresence(this.botPresence)
        this.on('message', message => {
            this.listenToMessages(message)
        })
    }

    logout(){

        console.log("Closing bot");
        return this.sendMessage(this.channelID, this.messages["bye1"])
    }

    setBotPresence(presence){

        return this.user.setPresence(presence);
    }

    sendMessage(channelID, message){
        
        let channel = this.channels.cache.get(channelID);
        return channel.send(message)
    }

    listenToMessages(message){
        
        console.log(`Message received from ${message.author.username} at channel ${message.channel.name} with content ${message.content}`)

        let args = message.content.split(delimiter)
        let command = args.shift()

        if (botCmds.isBotCommand(command)){
            botCmds.execCommand(command, args)
        }
    }
}

module.exports = {
    DiscordClient : DiscordClient
}