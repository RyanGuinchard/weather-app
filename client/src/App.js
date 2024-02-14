import React, { useState } from 'react';
import { fetchWeatherData } from './utils/weatherAPI';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';
import { BASE_URL, API_KEY } from './utils/weatherAPI'; // Import BASE_URL and API_KEY constants

function App() {

  // State variables for weather data, loading, and error
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle city search
  const handleSearch = async (city) => {
    // Reset error state
    setError(null);

    // If city is empty, return
    if (!city) return;
    console.log('Searching for city', city);

    // set loading state
    setIsLoading(true);
    
    try {
      const apiUrl = `${BASE_URL}/current?key=${API_KEY}&city=${city}`;
      console.log('API request URL:', apiUrl);

      const data = await fetchWeatherData(city);
      // Log found data
      console.log("Found weather data", data);
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  }


  return (
    <>
    <h1>Weather App</h1>
    <SearchForm onSearch={handleSearch}/>
    <WeatherDisplay data={weatherData}/>
    </>
  )
};

export default App;

