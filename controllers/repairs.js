var repairs = require('../data/repairs')

function repairsController(req, res) {
      res.json(repairs)
  }
  
  function repairController(req, res) {
      var RepairId = req.params.id
      var repair = repairs[RepairId]
      res.json(repair)
  }
  
  exports.repairs = repairsController
  exports.repair = repairController