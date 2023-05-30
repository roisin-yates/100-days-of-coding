import { useState } from 'react'
import Counter from './Counter'
import Style from './Style'
import Subject from './Subject'
import Wildcard from './Wildcard'

function App() {
  const [numbers, setNumbers] = useState([1, 1, 1])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Front-end challenge randomiser!</h1>
        <div className="my-44 flex">
          <p className="mx-6">Your project:</p>
          <Subject
            numbers={numbers}
            setLoading={setLoading}
            setError={setError}
          />
          <p className="mx-6">In the style of:</p>
          <Style
            numbers={numbers}
            setLoading={setLoading}
            setError={setError}
          />
          <p className="mx-6">Any extra criteria?</p>
          <Wildcard
            numbers={numbers}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
        <Counter
          setNumbers={setNumbers}
          setLoading={setLoading}
          setError={setError}
        />
      </div>
    </>
  )
}

export default App
