const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=37aa34d8e6828a56b609e431a7e751b8&units=metric'
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback('Unable to find location')
        } else {
            callback(undefined, 'Description: ' + body.weather[0].description + '. It is currently ' + body.main.temp + ' degrees out. There is ' + body.clouds.all + ' clouds.')
        }
    })
}

module.exports = forecast