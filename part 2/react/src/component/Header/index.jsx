const Header = (props) => {
    console.log('dây là props của Header', props)
    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    )
}
export default Header