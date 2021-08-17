const express = require('express')
const router = express.Router({ mergeParams: true })









router.route('/')
    .get((req,res,next) => {
        res.render('people/list')
    })
 
module.exports = router