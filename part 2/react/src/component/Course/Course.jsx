import Content from "../Content"
import Header from "../Header"
import Total from "../Total"
const Course = (props) => {
    const total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
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