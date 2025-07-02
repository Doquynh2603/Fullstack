import { useState } from 'react'
const Statistics = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100
  console.log('total', total)
  console.log('average', average)
  console.log('positive', positive)
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => { setGood(good + 1) }}>good</button>
      <button onClick={() => { setNeutral(neutral + 1) }}>neutral</button>
      <button onClick={() => { setBad(bad + 1) }}>bad</button>
      <h1>statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="total" value={total} />
          <Statistics text="average" value={average} />
          <Statistics text="positive" value={positive} />
        </div>)
      }

    </div>
  )
}

export default App