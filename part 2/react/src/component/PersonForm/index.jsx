const PersonForm = ({ newName, newNumber, handleName, handleNumber, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleName} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumber} />
            </div>
            <button type="submit">add</button>
        </form>
    )
}
export default PersonForm