const express = require('express')
const server = express()
const port = 3030

server.get('/', function(req,res){
    res.json({
        mensaje: 'Hola Mundo'
    })
})

server.listen(port, function(){
    console.log(`Server is listening at port ${port}`)
})