const locationInput = document.getElementById('locationInput');
const submitButton = document.getElementById('submitButton');

const cityNameDisplay = document.getElementById('cityName');
const descriptionDisplay = document.getElementById('weatherDescription');
const currentTempDisplay = document.getElementById('tempDisplay');
const highDisplay = document.getElementById('maxTempDisplay');
const lowDisplay = document.getElementById('minTempDisplay');

//converting Kelvin to F
function convertTemp(temp) {
 let newTemp = ((((temp - 273.15) * 1.8) + 32).toFixed(0));
 return newTemp;
}

submitButton.addEventListener('click', () => {
  chooseCity();
});

function chooseCity() {
    let city = locationInput.value; 
   // console.log(city);

//write the functions that hit the API
// add in try to catch errors and display error message when invalid city is entered

async function getWeather() { 
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=d6c8b5a48846624c112af61e9513bf90', {mode: 'cors'});
    const weatherData = await response.json();

    const currentTemp = weatherData.main.temp; 
    currentTempDisplay.innerText = 'Current Temp :' + convertTemp(currentTemp);
    
    const cityName = weatherData.name;
    cityNameDisplay.innerHTML = 'City: ' + cityName;

    const weatherDescription = weatherData.weather[0].description;
    descriptionDisplay.innerHTML = weatherDescription;

    const highTemp = weatherData.main.temp_max; 
    highDisplay.innerHTML = 'High: ' + convertTemp(highTemp);

    const lowTemp = weatherData.main.temp_min; 
    lowDisplay.innerHTML = 'Low: ' + convertTemp(lowTemp);

    }
    getWeather();
//writhe the functions that PROCESS the JSON data and return an object with the data we need

}


//response.main.temp gives temp (in Kelvin)
//response.name for name 
//response.weather[0].descriptionfor "overcast" etc
//response.main.temp_max
//response.main.temp_min

//set up a form that lets users put in their location and fetch weather (console.log)
//maybe 'http...' + 'cityinput' + key...'
