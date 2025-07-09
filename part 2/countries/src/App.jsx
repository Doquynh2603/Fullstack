import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Country from './component/Country'
function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState([]) // lưu tên của các quốc gia được hiển thị chi tiết
  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])
  const subFilter = filter.trim() ? countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase())) : []

  const handleShow = (name) => {
    if (showCountries.includes(name)) {
      setShowCountries(showCountries.filter(c => c !== name)) // ẩn thông tin của các quốc gia
    }
    else {
      setShowCountries([...showCountries, name])
    }
  }
  let content
  if (filter.trim() && subFilter.length > 10) {
    content = <p>Too many matches, specify another filter</p>
  } else if (filter.trim() && subFilter.length === 1) {
    console.log(Object.values(subFilter[0].languages))
    content = <Country country={subFilter[0]} />
  } else {
    content = subFilter.map((c, index) =>
      <div key={index}>
        <p>
          {c.name.common}{'  '}
          <button onClick={() => { handleShow(c.name.common) }}>{showCountries.includes(c.name.common) ? 'Hide' : 'Show'}</button>
        </p>
        {showCountries.includes(c.name.common) && <Country country={c} />}
      </div>
    )
  }
  return (
    <div>
      <div>
        find countries <input value={filter} onChange={(e) => {
          setFilter(e.target.value)
          setShowCountries([])
        }} />
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
