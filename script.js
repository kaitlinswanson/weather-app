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
//add capitalization to the first letter of the string for weather description. 
function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

submitButton.addEventListener('click', () => {
  getWeather();
});

// gather info from api. using async await
async function getWeather() { 
    let city = locationInput.value;
//try and catch for any city entry that is not valid.
    try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=d6c8b5a48846624c112af61e9513bf90', {mode: 'cors'});
    const weatherData = await response.json();
    
    const currentTemp = weatherData.main.temp; 
    currentTempDisplay.innerHTML = 'Current Temp :' + convertTemp(currentTemp) + '&deg;F';
    
    const cityName = weatherData.name;
    cityNameDisplay.innerHTML = 'City: ' + cityName;

    const weatherDescription = weatherData.weather[0].description;
    descriptionDisplay.innerHTML = capitalizeFirst(weatherDescription);

    const highTemp = weatherData.main.temp_max; 
    highDisplay.innerHTML = 'High: ' + convertTemp(highTemp) + '&deg;F';

    const lowTemp = weatherData.main.temp_min; 
    lowDisplay.innerHTML = 'Low: ' + convertTemp(lowTemp)  + '&deg;F';
    //display an error message
    } catch(err) {
        console.log(err);
        errorDisplay.innerHTML = 'Sorry, City Not Found. Go Ahead, Try Again!';
    }
    }

