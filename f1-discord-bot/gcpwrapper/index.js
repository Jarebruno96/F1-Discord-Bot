const path = require('path')
const fs = require('fs')
const storage = require('./storage/storage.js')

const cwd = path.join(__dirname, '.')
const cloudStorageOptions = loadCloudStorageOptions()

function loadCloudStorageOptions(){

    let gcpOptionsFile = path.join(cwd, 'config.json')
    let rawData = fs.readFileSync(gcpOptionsFile)
    return JSON.parse(rawData)['CloudStorage']
}

function getIntroFileName(raceName){
    return 'Intro-australia.mp3'
}

function buildIntroGCPStorageURI(fileName){
    return path.join(cloudStorageOptions['IntrosFolderName'],fileName)
}

function getProfilePhotoFileName(driverName){
    return driverName.toLowerCase() + "_profile.png"
}

function buildProfileDriverPhotoGCPStorageURI(fileName){
    return path.join(cloudStorageOptions['ImagesFolderName'], cloudStorageOptions['DriversFolderName'], cloudStorageOptions['ProfileFolderName'], fileName)
}


function downloadIntro(fileName){

    let cloudStorageClient = storage.initStorageClient(cloudStorageOptions)
    let introObjectURI = buildIntroGCPStorageURI(fileName)
    return storage.downloadFileFromBucket(cloudStorageClient, cloudStorageOptions['BucketName'], fileName, introObjectURI)
}

function downloadProfileDriverPhoto(fileName){

    let cloudStorageClient = storage.initStorageClient(cloudStorageOptions)
    let profilePhotoObjectURI = buildProfileDriverPhotoGCPStorageURI(fileName)
    return storage.downloadFileFromBucket(cloudStorageClient, cloudStorageOptions['BucketName'], fileName, profilePhotoObjectURI)
}


module.exports = {
    downloadIntro: downloadIntro,
    getIntroFileName: getIntroFileName,
    getProfilePhotoFileName: getProfilePhotoFileName,
    downloadProfileDriverPhoto: downloadProfileDriverPhoto
}
