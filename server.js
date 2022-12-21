const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const peopleController = require('./controllers/people-controller')
console.log(peopleController)

require('dotenv').config()
require('./config/db.connection')

const PORT = process.env.PORT || 13000

app.use(express.json())
app.use(cors()) // allows for cross origin request - open channel 
app.use(morgan('dev'))



// router middleware
app.use('/people', peopleController)

app.get('/', (re,res)=>res.redirect('./people'))

app.listen(PORT, ()=>console.log(`listening on ${PORT}`))