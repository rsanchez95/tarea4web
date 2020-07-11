'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var cors = require('cors')
app.use(cors())
app.options('*', cors())

var personal = require('./router/persona');
var libro = require('./router/r_libro');


const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//app.use('/api', personal);
app.use('/api', libro);


mongoose.connect('mongodb+srv://robert:marcopolo123@cluster0-rsedz.mongodb.net/tallerweb?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("error en la conceccion")
    }
    app.listen(5000, () => {
         console.log("Esta corriendo en puerto 5000")
    })
})