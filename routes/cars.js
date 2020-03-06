var express = require('express')
var cars = require('../data/cars')
var carRouter = express.Router()
var carController = require('../controllers/cars')

carRouter.get('/', carController.cars)

carRouter.get('/:id', carController.car)

carRouter.post('/new')

module.exports = carRouter