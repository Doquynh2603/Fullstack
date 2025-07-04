import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const addNew = (event) => {
    event.preventDefault()
    const index = persons.length
    console.log('danh sách danh bạ trước thêm', persons);

    const newPersons = { name: newName, number: newPhone, id: index + 1 }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }
    console.log('tên người mới được thêm vào', newName)
    const newList = [...persons, newPersons]
    setPersons(newList)
    setNewName('')
    setNewPhone('')
    console.log('danh sách người trong danh bạ', newList);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <h3>add a new</h3>
      <form onSubmit={addNew}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map((person, index) => <p key={index}>{person.name} {person.number}</p>
          )
        }
      </div>

    </div>
  )
}

export default App