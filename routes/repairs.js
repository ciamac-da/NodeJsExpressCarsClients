var express = require('express')
var repairs = require('../data/repairs')
var repairRouter = express.Router()

var repairController = require ('../controllers/repairs')


repairRouter.get('/', repairController.repairs)

repairRouter.get('/:repairID', repairRouter.repair)

repairRouter.post('/next')

module.exports = repairRouter
