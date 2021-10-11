//to use environmental variable, to hide API key from client side
const dotenv = require('dotenv');
dotenv.config();

//server settings
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.get('/', function (req, res) {
    res.sendFile('dist/index.html', { root: __dirname + '/..' })
})

//post message, sends user input to API, and returns API response
app.post('/apiURL', async (req, res) => {
    try {
        const apiKey = process.env.API_KEY
        const url = req.body.url
        console.log('url from server', url)
        const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`)
        res.send(await response.json())
        console.log('API response', response.json())
        //error handling
    }
    catch (error) {
        console.log('API fetch error: ', error)
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})
