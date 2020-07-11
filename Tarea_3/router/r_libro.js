'use strict'

var express = require('express');

var libroController = require('../controllers/LibroControllers');

var api = express.Router();

api.post('/libro', libroController.guardar);

api.put('/modificarlibro/:id', libroController.editarlibro);

api.delete('/eliminarlibro/:id', libroController.eliminar);

api.get('/mostrarlibro', libroController.mostrarlibro);


  module.exports = api;