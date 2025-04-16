import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>

        <h1>Counter: {count}</h1>

        <button onClick={increment} style={{ padding: '10px', backgroundColor: 'skyblue', borderRadius: '10px'}}>Increment</button>

        <button onClick={reset} style={{ marginLeft: '10px', padding: '10px', backgroundColor: 'lightgreen', borderRadius: '10px'}}>Reset</button>

        <button onClick={decrement} disabled={count === 0} style={{ marginLeft: '10px', padding: '10px', backgroundColor: 'lightcoral', borderRadius: '10px'}}> Decrement </button>
        
        {count === 0 && <p style={{ color: 'red' }}>You have reached the limit</p>}
      </div>
      <p className="text">
        This is a simple counter app built with React. You can increment, decrement, and reset the counter value.
      </p>
    </>
  )
}

export default App
