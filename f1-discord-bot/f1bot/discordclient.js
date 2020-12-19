
const discord = require('discord.js')
const botCmds = require('./botcmds.js')

const delimiter = ' '

class DiscordClient extends discord.Client{

    constructor(options){

        super()
        this.token = options['token']
        this.botPresence = options['defaultPresence']
        this.channelID = options['channelID']
        this.messages = options['messages']
    }

    login(){

        console.log('Initializing bot')

        super.login(this.token)
        this.on('ready', this.initBot)
    }

    initBot(){

        console.log(`Logged in as ${this.user.tag}!`)

        this.sendMessage(this.channelID, this.messages['welcome'])
        this.setBotPresence(this.botPresence)
        this.on('message', message => {
            this.listenToMessages(message)
        })
    }

    logout(){

        console.log('Closing bot')

        return this.sendMessage(this.channelID, this.messages['bye1'])
    }

    setBotPresence(presence){

        console.log(`Setting bot presenece to: ${JSON.stringify(presence)}`)

        return this.user.setPresence(presence)
    }

    sendMessage(channelID, message){

        console.log(`Bot sending message to ${channelID}. Content: ${message}`)

        let channel = this.channels.cache.get(channelID)
        return channel.send(message)
    }

    listenToMessages(message){
        
        console.log(`Message received at channel ${message.channel.name} from ${message.author.username} with content ${message.content}`)

        let args = message.content.split(delimiter)
        let command = args.shift()

        if (botCmds.isBotCommand(command)){
            console.log(`${message.channel.name} is executing ${command}`)
            botCmds.execCommand(command, args, this)
        }
    }
}

module.exports = {
    DiscordClient : DiscordClient
}