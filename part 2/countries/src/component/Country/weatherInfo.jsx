import { useEffect, useState } from "react"
import axios from "axios"
const WeatherInfo = ({ city }) => {
    const api_key = import.meta.env.VITE_SOME_KEY
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        if (!city) return
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                units: 'metric',
                appid: api_key
            }
        }).then(res => {
            console.log(res.data);
            return setWeather(res.data)
        })
            .catch(e => console.error("Error: ", e.message))

    }, [city, api_key])
    if (!weather) return <p>Loading weather data...</p>
    return (
        <div>
            <h4>Weather in {city}</h4>
            <p>Temperature {weather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img>
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default WeatherInfo