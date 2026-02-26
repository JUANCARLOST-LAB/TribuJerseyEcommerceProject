import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  )
}

export default App
