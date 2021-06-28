const locationInput = document.getElementById('locationInput')


//write the functions that hit the API
//function chooseLocation(city) { 
 //   let city = locationInput.value; 

//}

async function getWeather() { 
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Detroit&APPID=d6c8b5a48846624c112af61e9513bf90', {mode: 'cors'});
    const weatherData = await response.json();
        console.log(weatherData.name);
    }
    getWeather();

//writhe the functions that PROCESS the JSON data and return an object with the data we need

//response.main.temp gives temp (in Kelvin)
//response.name for name 
//response.weather[0].descriptionfor "overcast" etc
//response.main.temp_max
//response.main.temp_min

//set up a form that lets users put in their location and fetch weather (console.log)
//maybe 'http...' + 'cityinput' + key...'
