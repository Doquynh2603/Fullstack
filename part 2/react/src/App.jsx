import { useEffect, useState } from 'react'
import Filter from './component/Filter/index'
import PersonForm from './component/PersonForm/index'
import Persons from './component/Persons/index'
import PhoneNumber from './services/be'
import Notification from './component/Notification'
const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [notice, setNotice] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    PhoneNumber.getAll().then(res => {
      console.log("dữ liệu lấy từ server", res);
      setPersons(res)
    })
  }, [])

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    console.log("tên người bị xóa ", person.name);

    if (window.confirm(`Delete ${person.name}?`)) {
      PhoneNumber.deletePhone(id)
        .then(res => {
          console.log("PhoneNumber bị xóa khỏi database", res);
          const personsDelete = persons.filter(p => p.id !== res.id)
          setPersons(personsDelete)
        })
        .catch(err => {
          alert("Error: " + err.message)
        })
    }
  }

  const subFilter = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNewAdd = (e) => {
    e.preventDefault()
    console.log("danh sách danh bạ trước khi thêm", persons);
    const newPhones = { name: newName, number: newPhone }
    const person = persons.find(p => p.name === newName)
    PhoneNumber.addPhone(person, newPhones).then(res => {
      if (!person) {
        const newPhones = { name: newName, number: newPhone, id: res.id }
        const newList = [...persons, newPhones]
        console.log("Phone mới được thêm", res);
        console.log("Danh sách danh bạ sau khi thêm", newList);
        setPersons(newList)
        setNotice(
          `Added ${newName}`
        )
        setTimeout(() => {
          setNotice(null)
        }, 5000)
      } else {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          const newList = persons.map(p => p.id === res.id ? res : p)
          console.log("Phone mới được sửa", res)
          console.log("Danh sách danh bạ sau khi sửa số điện thoại có tên trùng", newList)
          setPersons(newList)
          setNotice(
            `Updated numberphone of ${newName}`
          )
          setTimeout(() => {
            setNotice(null)
          }, 5000)
        }
      }
    })
      .catch(() => {
        setError(
          `Information of ${newPhone} has already been removed from server`
        )
        setTimeout(() => {
          setError(null)
        }, 5000)
      })
    setNewName('')
    setNewPhone('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notice} error={error} />
      <Filter filter={filter} handleFilter={(e) => setFilter(e.target.value)} />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newPhone}
        handleName={(e) => setNewName(e.target.value)}
        handleNumber={(e) => setNewPhone(e.target.value)}
        handleSubmit={handleNewAdd}
      />
      <h3>Numbers</h3>
      <Persons persons={subFilter} handleDelete={handleDelete} />
    </div>
  )
}

export default App