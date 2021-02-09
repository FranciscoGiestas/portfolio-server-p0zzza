const axios = require('axios') // <----

var cacheData = null; // Data guardada no coraçaum
var lastApiCall = 0; // Nunca foi já foste
var fetchInterval = 5; // In seconds augusto 

exports.getData = async() => {
    if(cacheData == null || (Date.now() - lastApiCall)/1000 > fetchInterval) {
        console.log("No weather data, fetching Dark Sky API for data...");
        await apiCall()
        .then( data => {
            cacheData = data;
            lastApiCall = Date.now();
        });
    }
    return cacheData;
};

// Makes an API call to Dark Sky to fetch for weather data
const apiCall = async() => { // Thats how you do an API call augustorockz, é verdade meu amigo
    data = {};
    await axios.get('https://api.darksky.net/forecast/59e3827b350a1716b612128d17e03cc7/38.739507,-9.165477?exclude=daily,hourly,minutely,flags&units=si')
    .then(response => {
        data = response.data;
    })
    return data;
};