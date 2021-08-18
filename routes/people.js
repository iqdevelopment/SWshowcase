const express = require('express')
const router = express.Router({ mergeParams: true })
const { renderPeopleList, renderPerson } = require('../controllers/peopleController')



router.route('/')
    .get(renderPeopleList)


router.route('/:id')
    .get(renderPerson)

module.exports = router