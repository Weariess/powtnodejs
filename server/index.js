const express = require('express')
const app = express()
const mysql = require('mysql')


const cors = require('cors')
app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "szkola"
})

const port = 3000
//http://localhost:3000/

app.get('/', function(req, res){
    res.send("ok")
    console.log('done')
})

app.get('/imie', function(req,res){
    res.send({"imie":"Wiktoria","nazwisko":"Duciak"})
})

app.get('/sum/:l1/:l2', function(req,res){
    const l1 = parseInt(req.params.l1)
    const l2 = parseInt(req.params.l2)
    
    
    const cyferki = l1 + l2
    
    
    res.send(cyferki.toString())
})

app.get('/sql', function(req,res){
    const sql = "SELECT * FROM klasa"
    con.query(sql,function(err,result,fields){
        if(err) console.log(err)
        console.log(fields)
        res.send(result)
    })
})

app.listen(port)