import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const parts = course.parts
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <div>
      <Header course={course.name} />
      <Content part={parts} />
      <Total exercises={total} />
    </div>
  )
}

export default App