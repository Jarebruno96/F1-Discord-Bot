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

module.exports = {
    makeAsyncRequest : makeAsyncRequest
}
