const axios = require('axios')
const fs = require('fs')
const { getImageUtil } = require('./../utils/getImage')


/**
 * renders list of vehicles
 */
module.exports.renderVehicleList = async (req, res, next) => {


    res.render('vehicles/list')
}


module.exports.renderVehicle = async (req, res, next) => {
    try {
        const { id } = req.params
        const { data: vehicleData } = await axios.get(`https://swapi.dev/api/vehicles/${id}`)


        res.render('vehicles/vehicle', { vehicleData })
    } catch (error) {
        res.render('general/404')
    }

}
