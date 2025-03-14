import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import ErrorMessage from "../components/ErrorMessage";
import { fetchWeather } from "../api/weatherApi";

const DEFAULT_CITY = "New York"; // Default city

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        handleSearch(DEFAULT_CITY);
    }, []);

    const handleSearch = async (city) => {
        if (!city.trim()) {
            setError("Please enter a city name."); // Show error for empty input
            setWeatherData(null);
            return;
        }

        try {
            setError(""); // Reset error message
            const data = await fetchWeather(city);
            setWeatherData(data);
        } catch (err) {
            setError("City not found. Please enter a valid city name.");
            setWeatherData(null); // Hide weather card if error occurs
        }
    };

    return (
        <div className="home">
            <div className="card">
                <h1>Weather Dashboard</h1>
                <SearchBar onSearch={handleSearch} />
                <ErrorMessage message={error} />
                {weatherData && <WeatherDisplay weatherData={weatherData} />}
            </div>
        </div>
    );
};

export default Home;
