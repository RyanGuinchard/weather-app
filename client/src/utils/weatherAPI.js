import axios from "axios";

// Set up API Key and base URL
export const API_KEY = "553f31f414e447fca364833948dd15fc";
export const BASE_URL = "https://api.weatherbit.io/v2.0"; // Base URL for the Weatherbit API

// Create an Axios instance with the base URL
const weatherAPI = axios.create({
  baseURL: BASE_URL,
});

// Function to fetch weather data for a specific city
export const fetchWeatherData = async (city) => {
  try {
    // Make a GET request to the Weatherbit API's /current endpoint
    const response = await weatherAPI.get("/current", {
      // Pass parameters including API key and city name
      params: {
        key: API_KEY,
        city: city,
      },
    });
    // Log api response data
    console.log('API response data', response.data);
    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors if the API request fails
    console.error("Error fetching weather data", error);
    throw error;
  }
};
