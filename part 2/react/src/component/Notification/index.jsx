const Notification = ({ message, error }) => {

    const messageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if (message === null && error === null) return null
    else if (message !== null && error === null) {
        return (
            <div style={messageStyle}>
                {message}
            </div>
        )
    }
    return (
        <div style={errorStyle}>
            {error}
        </div>
    )
}
export default Notification