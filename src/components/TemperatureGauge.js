import React from 'react'; 
import GaugeChart from 'react-gauge-chart'; 

  
function TemperatureGauge({ temperature }) { 

    // Define the temperature scale limits 
    const minTemp = -20; // Minimum temperature in Celsius 

    const maxTemp = 40;  // Maximum temperature in Celsius 

  

    // Normalize the temperature to a value between 0 and 1 for the gauge 
    const gaugeValue = (temperature - minTemp) / (maxTemp - minTemp); 

  
    return ( 

        <GaugeChart  
            id="temperature-gauge" 
            nrOfLevels={30} 
            colors={["#3498db", "#e74c3c"]} // Blue to red gradient 
            arcWidth={0.3} 
            percent={Math.min(Math.max(gaugeValue, 0), 1)} // Ensure the value is clamped between 0 and 1 
            textColor={"#000000"} 
            animate={false} // You can turn off animation if needed 
            formatTextValue={() => `${temperature} °C`} 
        /> 
    ); 
} 

  
export default TemperatureGauge; 