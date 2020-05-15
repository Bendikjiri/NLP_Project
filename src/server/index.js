var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi")
const bodyParser = require("body-parser")

projectData = {}

// set aylien API credentias
var textapi = new aylien({
    application_id: 'c4c4a08c',
    application_key: '4c3f8da1960f2875c9704145c2e791a4'
})

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 8080!')
})

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

app.post('/all', function (req, res) {
    textapi.sentiment({
        url: req.body.url
    }, function (error, response) {
        if (error === null) {
            res.send(response);
        }
    });
})