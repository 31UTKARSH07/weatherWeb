# Dynamic Weather App

A simple and dynamic weather app that provides real-time weather data based on the user's city or geolocation. The app features a dynamic background that changes according to the weather conditions and updates the UI accordingly.

## Features

- **Search Weather by City**: Enter the name of any city to get real-time weather data (e.g., temperature, condition, wind speed, and UV index).
- **Geolocation Support**: Automatically fetches the weather data for the user's current location.
- **Dynamic Background**: The background image changes based on the weather condition (e.g., clear sky, rainy, cloudy).
- **Current Weather Display**: Displays the current temperature, weather condition, feels like temperature, wind speed, and UV index.

## How to Use

1. **Search for a City**:
   - Type the name of any city in the input field and hit "Get Weather."
   - The app will display the weather for that city and update the background image based on the weather conditions.

2. **Use Geolocation**:
   - Alternatively, click the "Use My Location" button to fetch the weather based on your current location.

## Technologies Used

- **HTML**: Provides the basic structure of the app.
- **CSS**: Used for styling the layout and creating a dynamic background.
- **JavaScript**: Handles API calls to fetch weather data and dynamically updates the weather information and background.

## How It Works

1. **WeatherAPI**: 
   - The app uses the [WeatherAPI](https://www.weatherapi.com/) to fetch current weather data.
   - You need to sign up for a free API key and replace the placeholder in the JavaScript file.

2. **Dynamic Background**:
   - Based on the fetched weather condition (e.g., "Clear", "Rainy", etc.), the background image changes using CSS and JavaScript.

3. **Weather Data**:
   - Once the weather is fetched, the app displays:
     - Temperature
     - Weather Condition (e.g., clear, cloudy, rainy)
     - Feels Like Temperature
     - Wind Speed
     - UV Index

## How to Get Started

1. **Obtain API Key**:
   - Sign up at [WeatherAPI](https://www.weatherapi.com/) to get a free API key.
   - Replace `YOUR_API_KEY` in the `script.js` file with your API key.

2. **Use the App**:
   - Open `index.html` in your browser.
   - Search for a city or click on the "Use My Location" button to get weather data.
