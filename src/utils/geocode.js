const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoici1maXJkb3ZzaSIsImEiOiJjandvcjNnOWcxcW5uNDVuczQwY2JyY2M4In0.1X1-sokRDc0wSGT1AfZsbw';

    request({ url, json: true}, (err, { body }) => {
        if (err) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;