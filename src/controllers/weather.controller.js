const axios = require('axios')

var lastDarkSkyApiCallTime;
var lastDarkSkyApiCallData;

// Retrieve all Tutorials from the database.
exports.getWeatherData = (req, res) => {
    var api_call_needed = false;
    
    if(lastDarkSkyApiCallData == null) {
        api_call_needed = true;
        console.log("Data inexistente, atualizando.");
    }
    else {
        if((Date.now() - lastDarkSkyApiCallTime) / 1000 > 300) {
            api_call_needed = true;
            console.log("Data muito antiga, atualizando.");
        }
    }
        
    if(api_call_needed){
        apicall()
        .then(data => {
            lastDarkSkyApiCallData = data;
            lastDarkSkyApiCallTime = Date.now();

            return res.status(200).json(lastDarkSkyApiCallData);
        });
    }
    else {
        console.log("Data recente reaproveitada.");
        return res.status(200).json(lastDarkSkyApiCallData);
    }
};

function apicall () {
    return axios.get('https://api.darksky.net/forecast/59e3827b350a1716b612128d17e03cc7/38.739507,-9.165477?exclude=daily,hourly,minutely,flags&units=si')
    .then(response => {
        this.response = response.data
        return response.data;
    })
}