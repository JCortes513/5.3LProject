import React, { useState } from 'react'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import SearchBar from './components/SearchBar'; 
import WeatherDisplay from './components/WeatherDisplay'; 
import TemperatureGauge from './components/TemperatureGauge'; 
import './App.css'; 

  
function App() { 

    const [weatherData, setWeatherData] = useState(null); 

    return ( 
        <div className="App"> 
            <Header /> 
            <SearchBar onWeatherFetch={setWeatherData} /> 
            {weatherData && weatherData.main && 
                <WeatherDisplay data={weatherData} /> 
            } 
            {weatherData && weatherData.list && 
                <TemperatureGauge data={weatherData.list} /> 
            } 
            <Footer /> 
        </div> 
    ); 
} 

export default App; 