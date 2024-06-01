
# WeatherApp

Welcome to the WeatherApp project! This application provides real-time weather information and forecasts for various cities around the world. It features a user-friendly interface with search functionality and detailed weather data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/HakYam/weatherApp.git
   cd weatherApp
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   VITE_WEATHER_API_KEY=<Your OpenWeather API Key>
   VITE_RAPIDAPI_KEY=<Your RapidAPI Key>
   ```

4. Run the application:
   ```sh
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

Once the application is running, you can:
- Search for a city using the search bar.
- View current weather conditions for the selected city.
- View a 7-day weather forecast for the selected city.

## Features

- **City Search**: Search for cities and view their weather conditions.
- **Current Weather**: View the current weather conditions including temperature, humidity, and wind speed.
- **Weather Forecast**: View a 7-day weather forecast with detailed information.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Project Structure

```
weatherApp/
│
├── public/
│   ├── icons/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── current-weather/
│   │   │   ├── current-weather.css
│   │   │   └── current-weather.jsx
│   │   ├── forecast/
│   │   │   ├── forecast.css
│   │   │   └── forecast.jsx
│   │   ├── search/
│   │   │   └── search.jsx
│   │   └── ...
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── api.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── ...
```

## API Endpoints

### Weather API (OpenWeather)
- **GET /weather**: Fetch current weather data for a city.
- **GET /forecast**: Fetch 7-day weather forecast for a city.

### GeoDB API (RapidAPI)
- **GET /cities**: Search for cities by name and get geographical data.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Special thanks to the [OpenWeather](https://openweathermap.org/) team for their weather API.
- Thanks to the [RapidAPI](https://rapidapi.com/) team for their GeoDB API.
