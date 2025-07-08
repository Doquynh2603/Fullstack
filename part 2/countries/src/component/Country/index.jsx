const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital.join(', ')}</p>
            <p>Area {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map((language, index) =>
                    <li key={index}>{language}</li>
                )}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
    )
}
export default Country