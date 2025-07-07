const PersonForm = ({ newName, newPhone, handleName, handlePhone, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleName} />
            </div>
            <div>
                number: <input value={newPhone} onChange={handlePhone} />
            </div>
            <button type="submit">add</button>
        </form>
    )
}
export default PersonForm