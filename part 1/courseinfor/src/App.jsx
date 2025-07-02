import { useState } from 'react'
const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}
const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="total" value={props.total} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
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
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />

    </div>
  )
}

export default App