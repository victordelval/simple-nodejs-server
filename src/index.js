import http from 'http'
import fs from 'fs'


const server = http.createServer((request, response) => {
    let file = `./countries.json`

    response.writeHead(200, { 'Content-Type': 'application/json'})

    fs.readFile(file, (err, content) => {
        if (err) {
            return console.log(err)
        }
        response.write(JSON.stringify(JSON.parse(content)))
        response.end()
    })
})

server.listen(9000, 'localhost', err => {
    if (err) {
        console.log('Error: ', err)
    }
    console.log('Server abierto en http://localhost:9000')
})