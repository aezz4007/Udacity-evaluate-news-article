const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

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


console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html', { root: __dirname + '/..' })
})

// app.get('/apiURL', function (req, res) {
//     res.send(res.json())
// })

app.post('/apiURL', async (req, res) => {
    try {
        const apiKey = process.env.API_KEY
        const url = req.body.url
        console.log('url from server', url)
        const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`)
        res.send(await response.json())
        console.log('API response', response.json())
    }
    catch (error) {
        console.log('API fetch error: ', error)
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})
