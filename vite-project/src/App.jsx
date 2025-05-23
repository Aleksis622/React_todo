import { useState } from 'react'
import './App.css'
import ToDo from './ToDo'

function App() {
  

  return (
    <>
      <h1>Todo</h1>
      <ToDo
  task="Iemācīties React"
  completed={false}
/>
      <ToDo
  task="Iemācīties React"
  completed={true}
/>
<ToDo
  task="Nopirkt pienu"
  completed={false}
/>
    </>
  )
}

export default App

