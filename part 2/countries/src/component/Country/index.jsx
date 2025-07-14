import WeatherInfor from "./weatherInfo"

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital.join(',')}</p>
            <p>Area {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map((lang, index) =>
                    <li key={index}>{lang}</li>
                )}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            {country.capital.map((c, index) => <WeatherInfor key={index} city={c} />)}
        </div>


    )
}
export default Country