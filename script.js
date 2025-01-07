const apiKey = '32c5c961bdf84f95bfb90104250701'; // Replace with your WeatherAPI key
const apiUrl = 'https://api.weatherapi.com/v1/current.json';

// Get weather for the entered city
document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    alert('Please enter a city name!');
    return;
  }
  fetchWeather(city);
});

// Automatically get weather for the user's location
window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByLocation(latitude, longitude);
    });
  }
};

async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

async function fetchWeatherByLocation(lat, lon) {
  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${lat},${lon}`);
    if (!response.ok) {
      throw new Error('Unable to fetch location weather');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  const cityName = document.getElementById('cityName');
  const weatherIcon = document.getElementById('weatherIcon');
  const temperature = document.getElementById('temperature');
  const condition = document.getElementById('condition');
  const feelsLike = document.getElementById('feelsLike');
  const windSpeed = document.getElementById('windSpeed');
  const uvIndex = document.getElementById('uvIndex');

  cityName.textContent = `${data.location.name}, ${data.location.country}`;
  weatherIcon.src = `https:${data.current.condition.icon}`;
  temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
  condition.textContent = `Condition: ${data.current.condition.text}`;
  feelsLike.textContent = `Feels Like: ${data.current.feelslike_c}°C`;
  windSpeed.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
  uvIndex.textContent = `UV Index: ${data.current.uv} (${getUVLevel(data.current.uv)})`;

  updateBackground(data.current.condition.text);

  weatherDisplay.style.display = 'block';
}

function getUVLevel(uv) {
  if (uv <= 2) return 'Low';
  if (uv <= 5) return 'Moderate';
  if (uv <= 7) return 'High';
  if (uv <= 10) return 'Very High';
  return 'Extreme';
}

function updateBackground(condition) {
  const body = document.body;
  if (condition.includes('Sunny') || condition.includes('Clear')) {
    body.style.background = 'linear-gradient(to right, #f6d365, #fda085)';
  } else if (condition.includes('Rain') || condition.includes('Drizzle')) {
    body.style.background = 'linear-gradient(to right, #4facfe, #00f2fe)';
  } else if (condition.includes('Snow')) {
    body.style.background = 'linear-gradient(to right, #d7d2cc, #304352)';
  } else {
    body.style.background = 'linear-gradient(to right, #cfd9df, #e2ebf0)';
  }
}
