//Replace https package for http if hostname requires it
const https = require('https')

async function makeAsyncRequest(requestOptions){

    return await new Promise((resolve, reject) => {
        const req = https.request(requestOptions, (res) => {
            
            let response = ''
            res.setEncoding('utf8')

            res.on('data', (chunk) => {
                response += chunk
            })

            res.on('end', () => {
                resolve(JSON.parse(response))
            })

        })

        req.on('error', error => {
            reject(error)
        })

        req.end()
    })
}


function buildPathWithParameters(basePath, parameters = {}){
    
    let urlParameters = ''
    let first = true

    for(let key in parameters){

        if(first){
            first = false
            urlParameters += ('?'+key+'='+parameters[key])
            continue
        }
        
        urlParameters += (key+'='+parameters[key])
    }

    return basePath + urlParameters
}

module.exports = {
    makeAsyncRequest : makeAsyncRequest,
    buildPathWithParameters: buildPathWithParameters
}
