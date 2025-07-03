import Part from "./part"
const Content = (props) => {
    console.log('đây là props của Content', props)
    const parts = props.parts
    console.log('đây là props của Content1', parts)
    return (
        props.parts.map(part =>
            <Part key={part.id} part={part} />
        )
    )
}
export default Content