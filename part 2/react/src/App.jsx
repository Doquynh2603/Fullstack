import { useEffect, useState } from 'react'
import Filter from './component/Filter'
import Persons from './component/Persons'
import PersonForm from './component/PersonForm'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      console.log("dữ liệu lấy từ server", response.data)
      setPersons(response.data)
    })
  }, [])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const addNew = (event) => {
    event.preventDefault()
    console.log('danh sách danh bạ trước thêm', persons);

    const newPersons = { name: newName, number: newPhone }
    axios.post('http://localhost:3001/persons', newPersons).then(response => {
      const data = response.data
      console.log("dữ liệu server trả về", data);
      if (persons.some(person => person.name === data)) {
        alert(`${data} is already added to phonebook`)
        setNewName('')
        return
      }
      const newList = [...persons, data]
      console.log("danh bạ sau khi thêm mới", newList);

      setPersons(newList)
      setNewName('')
      setNewPhone('')
    })

  }
  const [filter, setFilter] = useState('')
  const subFilter = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={(e) => setFilter(e.target.value)} />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        handleName={(e) => setNewName(e.target.value)}
        handlePhone={(e) => setNewPhone(e.target.value)}
        handleSubmit={addNew}
      />
      <h2>Numbers</h2>
      <Persons persons={subFilter} />
    </div>
  )
}

export default App