const express = require('express')
const router = express.Router()
const {renderVehicleList,renderVehicle } = require('./../controllers/vehicleController')

router.route('/')
    .get(renderVehicleList)


router.route('/:id')
    .get(renderVehicle)

module.exports = router

module.exports = router