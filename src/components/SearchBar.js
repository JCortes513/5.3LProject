import React, { useState } from 'react'; 

  
function SearchBar({ onWeatherFetch }) { 

  const [city, setCity] = useState(''); 

  const handleInputChange = (e) => { 
    setCity(e.target.value); 
  }; 

  
  const getCurrentWeather = () => { 
    if (!city) { 
      alert('Please enter a city name'); 
      return; 
    } 

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // Use environment variable for API key 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

  
    fetch(url) 
      .then(response => { 
        if (!response.ok) { 
          throw new Error('Network response was not ok'); 
        } 
        return response.json(); 
      }) 
      .then(data => { 
        onWeatherFetch(data); 
      }) 
      .catch(error => { 
        console.error('Failed to fetch current weather data:', error); 
        alert('Failed to fetch current weather data'); 
      }); 
  }; 

  
  const getForecast = () => { 
    if (!city) { 
      alert('Please enter a city name'); 
      return; 
    } 

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; 
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`; 
  
    fetch(url) 
      .then(response => { 
        if (!response.ok) { 
          throw new Error('Network response was not ok'); 
        } 
        return response.json(); 
      }) 
      .then(data => { 
        onWeatherFetch(data); // Handle the forecast data 
      }) 

      .catch(error => { 
        console.error('Failed to fetch forecast data:', error); 
        alert('Failed to fetch forecast data'); 
      }); 
  }; 

  
  return ( 
    <div> 
      <input type="text" value={city} onChange={handleInputChange} placeholder="Enter a city" /> 
      <button onClick={getCurrentWeather}>Get Current Weather</button> 
      <button onClick={getForecast}>Get Forecast</button> 
      <button onClick={() => onWeatherFetch(null)}>Clear</button> 
    </div> 
  ); 
} 

  
export default SearchBar; 