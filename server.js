// server.js
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

require('dotenv').config()

app.use(cors())

app.get('/api/getWeather', (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city || ''}&appid=${process.env.WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => res.json(data))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

