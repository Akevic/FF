const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')

mongoose.connect(keys.mongoDbURI, {useNewUrlParser: true})

const app = express()

require('./routes/authRoutes.js')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT)
