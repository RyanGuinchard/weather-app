import React from 'react';

const WeatherDisplay = ({ data }) => {
    console.log('WeatherDisplay data:', data);

    if (!data || !data.data || data.data.length === 0) {
        console.log('No weather data available');
        return null;
    }

    const weatherData = data.data[0];
    
    // Destructure data from object
    const { city_name, temp, weather } = weatherData;

    console.log('City Name:', city_name);
    console.log('Temperature:', temp);
    console.log('Weather Description:', weather.description);

    return (
        <div className="weather-display">
            <div>
                <h2>{city_name}</h2>
                <p>Temperature: {temp}°C</p>
                <p>Description: {weather.description}</p>
            </div>
        </div>
    );
};

export default WeatherDisplay;
