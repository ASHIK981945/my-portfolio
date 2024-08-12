import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'


function App() {
 

  return  (
    <main className='p-4'>
      <Navbar/>
      <Hero/>
      
    </main>
  )
}

export default App
