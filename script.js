const locationInput = document.getElementById('locationInput');
const submitButton = document.getElementById('submitButton');

const cityNameDisplay = document.getElementById('cityName');
const descriptionDisplay = document.getElementById('weatherDescription');
const currentTempDisplay = document.getElementById('tempDisplay');
const highDisplay = document.getElementById('maxTempDisplay');
const lowDisplay = document.getElementById('minTempDisplay');
const errorDisplay = document.getElementById('errorDisplay');
//converting Kelvin to F
function convertTemp(temp) {
 let newTemp = ((((temp - 273.15) * 1.8) + 32).toFixed(0));
 return newTemp;
}

submitButton.addEventListener('click', () => {
  getWeather();
});

//write the functions that hit the API
// add in try to catch errors and display error message when invalid city is entered

async function getWeather() { 
    let city = locationInput.value;

    try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=d6c8b5a48846624c112af61e9513bf90', {mode: 'cors'});
    const weatherData = await response.json();
    
    const currentTemp = weatherData.main.temp; 
    currentTempDisplay.innerHTML = 'Current Temp :' + convertTemp(currentTemp) + '&deg;F';
    
    const cityName = weatherData.name;
    cityNameDisplay.innerHTML = 'City: ' + cityName;

    const weatherDescription = weatherData.weather[0].description;
    descriptionDisplay.innerHTML = weatherDescription;

    const highTemp = weatherData.main.temp_max; 
    highDisplay.innerHTML = 'High: ' + convertTemp(highTemp) + '&deg;F';

    const lowTemp = weatherData.main.temp_min; 
    lowDisplay.innerHTML = 'Low: ' + convertTemp(lowTemp)  + '&deg;F';
    } catch(err) {
        console.log(err);
        errorDisplay.innerHTML = 'Sorry, City Not Found. Go Ahead, Try Again!';
    }
    }


//writhe the functions that PROCESS the JSON data and return an object with the data we need

