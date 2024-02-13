// Import Axios for making HTTP requests
const axios = require("axios");

// Set up API Key and base URL
const API_KEY = "553f31f414e447fca364833948dd15fc"; // Replace with your actual API key
const BASE_URL = "https://api.weatherbit.io/v2.0"; // Base URL for the Weatherbit API

// Create an Axios instance with the base URL
const weatherAPI = axios.create({
  baseURL: BASE_URL,
});

// Function to fetch weather data for a specific city
const fetchWeatherData = async (city) => {
  try {
    // Make a GET request to the Weatherbit API's /current endpoint
    const response = await weatherAPI.get("/current", {
      // Pass parameters including API key and city name
      params: {
        key: API_KEY,
        city: city,
      },
    });

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors if the API request fails
    console.error("Error fetching weather data", error);
    throw error;
  }
};

// Export the fetchWeatherData function to make it accessible to other modules
module.exports = { fetchWeatherData };
