const express = require('express')
require('dotenv').config
const app = express()
const cors = require('cors')

console.log(`********************${process.env.SITE_MODE}************************`)
console.log(`********************${process.env.APPNAME}************************`)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.disable('etag')
const oneHour = 3600000
app.use('/public', express.static(__dirname + '/public', { maxAge: oneHour }))

const router = require('./routes/index')
const memberRouter = require('./routes/member')

app.use(router)
app.use('/members', memberRouter)

const application = {
  path: '/api',
  handler: app
}

module.exports = application