import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Country from './component/Country'
function App() {
  const [countries, setCounties] = useState([])
  const [filter, setFilter] = useState('')
  const [showCountries, setShowCountries] = useState([])
  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => setCounties(res.data))
  }, [])

  const subFilter = filter.trim() ? countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase())) : []

  const handleShow = (name) => {
    if (showCountries.includes(name)) {
      setShowCountries(showCountries.filter(c => c !== name))
    }
    else {
      setShowCountries([...showCountries, name])
    }
  }
  let content

  if (filter.trim() && subFilter.length > 10) {
    content = <p>Too many matches, specify another filter</p>
  } else if (subFilter.length === 1) {
    content = <Country country={subFilter[0]} />
  } else {
    content = subFilter.map((country, index) =>
      <div key={index}>
        <p>
          {country.name.common} {'  '}
          <button onClick={() => { handleShow(country.name.common) }}>{showCountries.includes(country.name.common) ? 'Hide' : 'Show'}</button>
        </p>
        {showCountries.includes(country.name.common) && <Country country={country} />}
      </div>


    )
  }

  return (
    <div>
      find countries <input value={filter} onChange={(e) => {
        setFilter(e.target.value)
        setShowCountries([])
      }} />
      <div>
        {
          content
        }
      </div>
    </div>
  )
}

export default App
