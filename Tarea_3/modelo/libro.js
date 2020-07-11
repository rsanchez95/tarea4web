'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LibroSchema = Schema(
    {
      Nombre:String,
      Autor:String,
      AñoPublicado:{type:Number},
      Idioma:String//enum
    })

module.exports = mongoose.model('Libro',LibroSchema)    