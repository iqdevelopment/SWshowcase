
const port = 3000
const path = require('path')
//framework
const express = require('express')

//to use ejs templates
const ejsMate = require('ejs-mate')

//routes
const baseRoutes = require('./routes/base')
const vehicleRoutes = require('./routes/vehicles')
const peopleRoutes = require('./routes/people')

//session control
const session = require('express-session');
//flashing messages


const app = express()

//to accept api calls
app.use(express.urlencoded({ extended: true }))
//method overide 



app.use('/', baseRoutes)
app.use('/vehicles', vehicleRoutes)
app.use('/people', peopleRoutes)

//serving files
app.use(express.static('public'))

//views
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.render('homepage')
})

/**
 * 404 route
 */

app.all('*',(req,res) =>{
    console.log('404')
    res.render('general/404')

})

/**
 * error handler
 */
/* app.use((err,req,res,next) =>{
    const {statusCode = 500, message = 'Something went wrong'} = err
    res.status(statusCode).render('general/error',{err})

})
 */


app.listen(port, () => {
    console.log(`starting app ${port}`)
})