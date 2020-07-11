'use strict'

var express = require('express');
const Mongoose = require('mongoose');

var personaController = require('../controllers/ControllersPersona');

var api = express.Router();

api.post('/persona', personaController.guardar);
//api.get('/persona', personaController.buscar);

  module.exports = api;