import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const addNew = (event) => {
    event.preventDefault()
    const newPersons = { name: newName }
    console.log('tên người mới được thêm vào', newName)
    const newList = [...persons, newPersons]
    setPersons(newList)
    setNewName('')
    console.log('danh sách người trong danh bạ', newList);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNew}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map((person, index) => <p key={index}>{person.name}</p>
          )
        }
      </div>

    </div>
  )
}

export default App