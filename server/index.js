const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const UserRoutes = require('./routes/api/userItem')
const LocationListRoutes = require('./routes/api/locationList')
const LocationItemRoutes = require('./routes/api/locationItem')
const path = require('path')
require('dotenv').config();

app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

    app.use('/api/userItem', UserRoutes)
    app.use('/api/locationList', LocationListRoutes)
    app.use('/api/locationItem', LocationItemRoutes)
 
app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))