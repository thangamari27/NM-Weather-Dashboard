import { FaTemperatureHigh, FaTint, FaMapMarkerAlt, FaWind } from "react-icons/fa";


const WeatherDisplay = ({ weatherData, error }) => {
    return (
        <div className="weather-card sunny-bg">
            {error ? (
                <ErrorMessage message={error} />
            ) : weatherData ? (
                <>
                    <h2><FaMapMarkerAlt /> {weatherData.name}, {weatherData.sys.country}</h2>
                    <img 
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} 
                        alt="Weather Icon"
                    />
                    <p className="temperature"><FaTemperatureHigh /> {weatherData.main.temp}°C</p>
                    <p className="humidity"><FaTint /> {weatherData.main.humidity}%</p>
                    <p className="description">{weatherData.weather[0].description}</p>
                </>
            ) : (
                <>
                    <h2><FaWind /> Weather Dashboard</h2>
                    <p>Enter a city name to get real-time weather updates.</p>
                </>
            )}
        </div>
    );
};

export default WeatherDisplay;
