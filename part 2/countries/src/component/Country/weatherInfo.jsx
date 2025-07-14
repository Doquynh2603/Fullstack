import axios from "axios"
import { useEffect, useState } from "react"

const WeatherInfor = ({ city }) => {
    const [weather, setWeather] = useState(null)
    const api_key = import.meta.env.VITE_SOME_KEY
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: api_key
            }
        })
            .then((res) => setWeather(res.data))
    }, [city, api_key])

    if (!weather) return <p>Loading weather ....</p>
    return (
        <div>
            <h2>Weathers in {city}</h2>
            <p>Temperature {weather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )
}
export default WeatherInfor