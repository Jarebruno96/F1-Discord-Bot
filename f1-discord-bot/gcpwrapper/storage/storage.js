const {Storage} = require('@google-cloud/storage')
const path = require('path')
const cwd = path.join(__dirname, '.')

function initStorageClient(userOptions){

    let cloudOptions = {
      keyFilename: path.join(cwd, userOptions['GCPAccountKey'])
    }

    return new Storage(cloudOptions)
}


async function downloadFileFromBucket(storageClient, bucketName, fileName, introObjectURI){

    const options = {
      destination: fileName
    }

    console.log(`Downloading ${introObjectURI} to ${fileName}.`)
    await storageClient.bucket(bucketName).file(introObjectURI).download(options)
    console.log(`${introObjectURI} downloaded to ${fileName}.`)

}

module.exports = {
    downloadFileFromBucket: downloadFileFromBucket,
    initStorageClient: initStorageClient
}