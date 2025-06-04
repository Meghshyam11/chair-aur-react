import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)
  // let counter =15;

  const addValue = ()=>{
   
    // counter++
    setCounter(counter+1)
    // console.log("clicked",counter);
  }
  const removeValue =()=>{
    setCounter(counter-1)
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2> counter value:{counter}</h2>

    <button
    onClick ={addValue}
    >add value {counter}</button>
    <br/>
    <button
    onClick ={removeValue}
    >subtract value {counter}</button>
    <p>footer:{counter}</p>
     
    </>
  )
}

export default App
