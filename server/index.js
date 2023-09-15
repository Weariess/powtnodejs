const express = require('express')
const app = express()


const cors = require('cors')
app.use(cors())

const port = 3002

app.get('/', function(req, res){
    res.send("ok")
    console.log('done')
})
//http://localhost:3002/
app.listen(port)