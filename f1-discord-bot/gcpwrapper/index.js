const path = require('path')
const fs = require('fs')
const storage = require('./storage/storage.js')

const cwd = path.join(__dirname, '.')
const cloudStorageOptions = loadCloudStorageOptions()
const downloadsFolder = "downloads"

function loadCloudStorageOptions(){

    let gcpOptionsFile = path.join(cwd, 'config.json')
    let rawData = fs.readFileSync(gcpOptionsFile)
    return JSON.parse(rawData)['CloudStorage']
}

function getIntroFileName(raceName){
    return 'Intro-' + raceName.toLowerCase() +'.mp3'
}

function buildIntroGCPStorageURI(fileName){
    return path.join(cloudStorageOptions['IntrosFolderName'],fileName)
}

function getProfilePhotoFileName(driverName){
    return driverName.toLowerCase() + "_profile.jpg"
}

function buildProfileDriverPhotoGCPStorageURI(fileName){
    return path.join(cloudStorageOptions['ImagesFolderName'], cloudStorageOptions['DriversFolderName'], cloudStorageOptions['ProfileFolderName'], fileName)
}


function downloadIntro(fileName){

    let cloudStorageClient = storage.initStorageClient(cloudStorageOptions)
    let introObjectURI = buildIntroGCPStorageURI(fileName)
    return storage.downloadFileFromBucket(cloudStorageClient, cloudStorageOptions['BucketName'], path.join(downloadsFolder,fileName), introObjectURI)
}

function downloadProfileDriverPhoto(fileName){

    let cloudStorageClient = storage.initStorageClient(cloudStorageOptions)
    let profilePhotoObjectURI = buildProfileDriverPhotoGCPStorageURI(fileName)
    return storage.downloadFileFromBucket(cloudStorageClient, cloudStorageOptions['BucketName'], path.join(downloadsFolder,fileName), profilePhotoObjectURI)
}


module.exports = {
    downloadIntro: downloadIntro,
    getIntroFileName: getIntroFileName,
    getProfilePhotoFileName: getProfilePhotoFileName,
    downloadProfileDriverPhoto: downloadProfileDriverPhoto
}
