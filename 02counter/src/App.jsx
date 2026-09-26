import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
   // console.log("clicked", counter);
    counter = counter + 1 
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter- 1)
  }


  return (
    <>
    <h1>Hellow World </h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add Value{counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
