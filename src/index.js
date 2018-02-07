import http from 'http'
import fs from 'fs'


const server = http.createServer((req, res) => {

    // Header setup (content is json, and cors is allowed)
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })

    // read file async
    let file = `./countries.json`
    fs.readFile(file, (err, content) => {
        if (err) {
            return console.log(err)
        }
        res.write(JSON.stringify(JSON.parse(content)))
        res.end()
    })
})

server.listen(9000, 'localhost', err => {
    if (err) {
        console.log('Error: ', err)
    }
    console.log('Server abierto en http://localhost:9000')
})