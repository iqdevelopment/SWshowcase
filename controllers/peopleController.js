const axios = require('axios')
const fs = require('fs')
const { getImageUtil } = require('./../utils/getImage')
/**
 * handles the uploading of files and making them into usersession, and database
 */
module.exports.renderPeopleList = async (req, res, next) => {
    const initial = await axios.get('https://swapi.dev/api/people/')
    const people = initial.data.results
    people.forEach((element) => {
        const personId = element.url.replace('https://swapi.dev/api/people/','').replace('/','')
        element.image = getImageUtil(personId)
    });
    res.render('people/list', { people })
}


module.exports.renderPerson = async (req, res, next) => {
    const {id } = req.params
    const {data : personData} = await axios.get(`https://swapi.dev/api/people/${id}`)
    personData.image = getImageUtil(id)
    const HWdata = await axios.get(personData.homeworld)
    const homeWorld = HWdata.data.name

    var ships = []

    for (let index = 0; index < personData.starships.length; index++) {
        const element = personData.starships[index];
        const ship = await axios.get(element)
        ships.push(ship.data.name)
    }

    personData.ships = [...ships]
    personData.homeworld = homeWorld
    
    res.render('people/person',{personData})
}
