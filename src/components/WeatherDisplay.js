import React from 'react'; 
//import '../styles/WeatherDisplay.css'; 
import TemperatureGauge from './TemperatureGauge'; // Import your gauge component 

  
function WeatherDisplay({ data }) { 
    let temperature; 
    let weatherCondition; 
    let locationName; 

  

    // Check if data is from forecast 
    if (data && data.list) { 

        temperature = data.list[0].main.temp; 
        weatherCondition = data.list[0].weather[0].description; 
        locationName = data.city.name; 

    } else if (data && data.main) { // Data is from current weather 

        temperature = data.main.temp; 
        weatherCondition = data.weather[0].description; 
        locationName = data.name; 
    } 

  
    return ( 
        <div> 
            {data ? ( 
                <div> 
                    <h2>Weather in {locationName}</h2> 
                    <p>Temperature: {temperature} °C</p> 
                    <p>Weather: {weatherCondition}</p> 
                    <TemperatureGauge temperature={temperature} /> {/* Display the gauge chart */} 
                </div> 
            ) : ( 
                <p>No weather data available. Please search for a city.</p> 
            )} 
        </div> 
    ); 
} 

  
export default WeatherDisplay; 