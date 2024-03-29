const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/dfe9d1473d03f999fee120b646259174/' + latitude + ',' + longitude + '?units=si&lang=az';

    request({ url, json: true}, (err, { body }) => { 
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + ' There is a ' + body.currently.precipProbability  + "% chance of rain")
        }
    })
}

module.exports = forecast;