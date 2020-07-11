'use strict'

var Libro = require('../modelo/libro');

function guardar(req, res) {

    let libro = new Libro
    libro.Nombre = req.body.Nombre
    libro.Autor = req.body.Autor 
    libro.AñoPublicado = req.body.AñoPublicado 
    libro.Idioma = req.body.Idioma 
 
    libro.save((err, librostore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ libro: librostore })

    })
}

function editarlibro(req,res){
    let libroid = req.params.id
    let update = req.body
    Libro.findByIdAndUpdate(libroid, update, (err,libroActualizado)=>{
        if(err) return res.status(500).send({message: "Error"})
        res.status(200).send({libro: libroActualizado})
    })
}

function eliminar(req,res){
    let libroid = req.params.id
    Libro.findById(libroid, (err,libro)=>{
        if(err) return res.status(500).send({message: "Error"})
        libro.remove(err =>{
        if(!libro) return res.status(404).send({message: "no existe"})
        res.status(200).send({message: "eliminado"})
    })
})
}


function mostrarlibro(req, res){
    Libro.find({}, (err, libro)=>{
        if (!libro) return res.status(400).send({message: "no hay nada registrado"})
        res.status(200).send({libro})
    }
    )}

module.exports = {
    guardar,
    editarlibro,
    eliminar,
    mostrarlibro
};