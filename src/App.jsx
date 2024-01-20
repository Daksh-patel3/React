import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

 const addedValue=()=>{
   console.log("added value ",count)
   count=count+1
   setCount(count)
 }

 const removedValue=()=>{
   console.log("remove value ",count)
   count=count-1
   setCount(count)
 }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>counter value : {count}</h2>
    <button onClick={(addedValue)}>Add Vlue</button>
    <br />
    <button onClick={(removedValue)}>Remove Value</button>
    </>
       
  )

  }
export default App
