import { useState } from 'react'
import Counter from './Counter'

function App() {
  const [numbers, setNumbers] = useState([0, 0, 0])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Front-end challenge randomiser!</h1>
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
