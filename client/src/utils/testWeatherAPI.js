// testWeatherAPI.js

const { fetchWeatherData } = require('./weatherAPI');

const testWeatherAPI = async () => {
  try {
    const city = 'St. Johns';
    const weatherData = await fetchWeatherData(city);
    console.log('Weather data for', city, ':', weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

testWeatherAPI();
