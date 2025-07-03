import Content from "../Content"
import Header from "../Header"
const Course = (props) => {

    console.log('course', props)
    return (
        <div>
            <Header name={props.course.name} />
            <Content parts={props.course.parts} />
        </div>
    )
}
export default Course