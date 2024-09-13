import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navega from './components/navega.jsx'
import './App.css'
import Medio from './components/Medio.jsx'
import Boton from './components/Botones.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navega/>
        <Medio/>
        <Boton/>
      </div>
     
    </>
  )
}

export default App
