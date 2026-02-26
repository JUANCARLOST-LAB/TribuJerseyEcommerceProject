import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer.jsx'

function App() {

  const mensajeBienvenida = "Bienvenidos a Tribu Jersey!";

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={mensajeBienvenida}/>
    </>
  )
}

export default App
