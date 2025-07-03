import Content from "../Content"
import Header from "../Header"
import Total from "../Total"
const Course = (props) => {
    const parts = props.course.parts
    console.log(parts)
    const total = parts.reduce(
        (s, p) => s + p.exercises,
        0,
    )
    console.log(total)
    console.log('course', props)
    return (
        <div>
            <Header name={props.course.name} />
            <Content parts={props.course.parts} />
            <Total total={total} />
        </div>
    )
}
export default Course