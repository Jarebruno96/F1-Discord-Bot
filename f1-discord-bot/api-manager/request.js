const http = require('http')

async function makeAsyncRequest(requestOptions){

    return await new Promise((resolve, reject) => {

        const req = http.request(requestOptions, (res) => {
            
            let response = '' 
            res.setEncoding('utf8');

            res.on('data', (chunk) => {
                response += chunk
            })

            res.on('end', () => {
                resolve(JSON.parse(response));
            })

        })

        req.on('error', error => {
            reject(error)
        })

        req.end()

    })
}

function buildPathWithParameters(basePath, parameters = {}){
    
    let urlParamerts = ""
    let first = true

    for(let key in parameters){
        if(first){
            first = false
            urlParamerts += ("?"+key+"="+parameters[key])
            continue
        }
        
        urlParamerts += (key+"="+parameters[key])
        
    }

    return basePath + urlParamerts
}

module.exports = {
    makeAsyncRequest : makeAsyncRequest,
    buildPathWithParameters: buildPathWithParameters
}
