import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Country from './component/Country'
function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])
  const subFilter = filter.trim() ? countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase())) : []
  let content
  if (filter.trim() && subFilter.length > 10) {
    content = <p>Too many matches, specify another filter</p>
  } else if (filter.trim() && subFilter.length === 1) {
    console.log(Object.values(subFilter[0].languages))
    content = <Country country={subFilter[0]} />
  } else {
    content = subFilter.map((c, index) => <p key={index}>{c.name.common}</p>)
  }
  return (
    <div>
      <div>
        find countries <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div>
        {
          content
        }
      </div>
    </div>
  )
}

export default App
