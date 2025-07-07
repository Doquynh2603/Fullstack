import { useEffect, useState } from 'react'
import Filter from './component/Filter'
import Persons from './component/Persons'
import PersonForm from './component/PersonForm'
import PhoneBook from './services/be'
const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    PhoneBook.getAll().then(person => {
      console.log("dữ liệu lấy từ server", person);
      setPersons(person)
    })
  }, [])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const addNew = (event) => {
    event.preventDefault()
    console.log('danh sách danh bạ trước thêm', persons);

    const newPersons = { name: newName, number: newPhone }
    PhoneBook.addPhone(newPersons).then(person => {
      console.log("dữ liệu server trả về", person);
      const newList = [...persons, person]
      setPersons(newList)
      setNewName('')
      setNewPhone('')
    })

  }
  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    window.confirm(`Delete ${person.name}?`)
    PhoneBook.deletePhone(person.id).then(deletePhone => {
      console.log("dữ liệu cần xóa trên server", deletePhone);
      setPersons(persons.filter(person => person.id !== id))
      console.log("Xóa dữ liệu thành công");
    })
      .catch(e => {
        alert("Error ", e.message)
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
      <Persons persons={subFilter} handleDelete={handleDelete} />
    </div>
  )
}

export default App