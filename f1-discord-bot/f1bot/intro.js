const sendDriverImageSecondsDelay  = 7
const sendDriverImageMillisecondsDelay  = sendDriverImageSecondsDelay * 1000

const gcpWrapper = require('../gcpwrapper')
const path = require('path')
const downloadsFolder = path.join(__dirname, '../downloads')
const apiManager = require('../api-manager')

function execIntroCmd(discordClient, member, options){

    if (options.length == 1){

        let introFileName = gcpWrapper.getIntroFileName(options[0])
        console.log("El fichero de intro es: "+ introFileName)

        gcpWrapper.downloadIntro(introFileName).then( 
            _ => {

                console.log("El fichero se ha descargado OK")
                if(!member.voice.channel){
                    discordClient.sendMessage(discordClient.channelID, "Conectate a un canal de voz, si no no me podrás oir")
                    return
                }
        
                startRaceIntro(discordClient, member, introFileName)
            }

        ).catch(
            error =>{
                console.log("El fichero de intro se ha descargado KO. ", + error)
            }
        )

    }else{
        discordClient.sendMessage(discordClient.channelID, "Especifica la carrera que quieres introducir")
    }

}

function startRaceIntro(discordClient, member, introFile){

    member.voice.channel.join().then(

        connection => { 
    
            console.log("Joined voice channel!")
            console.log("la intro está en: "+ path.join(downloadsFolder, introFile))
            const dispatcher = connection.play(path.join(downloadsFolder, introFile))
    
            dispatcher.on('start', () => {
                dispatcher.setVolume(0.90)
                console.log("Playing")
            }) 
    
            dispatcher.on('error', (err) => console.log(err))
    
            dispatcher.on('finish', end => {
                console.log("Intro Finished")
                member.voice.channel.leave()
            })
        }
    )

    apiManager.getDrivers().then(
        drivers => {
            console.log(drivers)

            drivers.forEach(
                (driver, index) => {
                    index++
                    setTimeout(sendDriverPhoto.bind(this, driver, discordClient),index*sendDriverImageMillisecondsDelay)
            })
            
        } 
    ).catch(
        error => {
            console.log(`Error: Can not get drivers info ${error}`)
        }
    )

}

var sendDriverPhoto = function(driver, discordClient){

    console.log("Sending image from "+driver.name)

    let profileDriverPhotoFileName = gcpWrapper.getProfilePhotoFileName(driver.name)
    gcpWrapper.downloadProfileDriverPhoto(profileDriverPhotoFileName).then(
        _ => {
            console.log(`Profile photo of ${driver.name} downloaded`)
            discordClient.sendFiles(discordClient.channelID, driver.name, [path.join(downloadsFolder, profileDriverPhotoFileName)])
        }
    ).catch(
        error => {
            console.log(`Can not download profile photo of ${driver.name}. Error: ${error}`)

        }
    )
}


module.exports = {
    execIntroCmd: execIntroCmd
}