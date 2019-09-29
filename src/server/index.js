var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi")
const dotenv = require('dotenv')
const bodyParser = require("body-parser")

dotenv.config()

projectData = {}

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.ID,
    application_key: process.env.KEY
})

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

app.get('/data', function(req, res) {
    // make sure we get the data
    res.setTimeout(2000, function() {
        res.send(projectData)
    })
})

app.post('/all', function (req, res) {
    textapi.classify({
        url: req.body.url
    }, function (error, response) {
        if (error === null) {
            response['categories'].forEach(function (c) {
                projectData = c;
            });
        }
    });
})