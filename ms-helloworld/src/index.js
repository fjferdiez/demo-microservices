const express = require('express')
const server = express()
const port = 3030

server.get('/', function(req, res){
    res.json({
        message: 'Hello World!'
    })
})

server.listen(port, function(){
    console.log(`Application is running on port ${port}`)
})