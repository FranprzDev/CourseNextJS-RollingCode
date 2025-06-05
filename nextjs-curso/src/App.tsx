import { useState, type JSX } from 'react'

import './App.css'

// Enunciado para alumnos: -- Consigna --
// Crear un estado llamado nombres de tipo string[].
// Mostrar cada nombre en una lista usando .map().
// Agregar un input para escribir un nombre y un botón para agregarlo.
// Al hacer clic en el botón, el nombre debe agregarse al array nombres.


function App(): JSX.Element {
  const [nombre, setNombre] = useState<string>('')
  const [nombres, setNombres] = useState<string[]>([])

  const agregarNombre = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (nombre.trim() === '') return
    setNombres([...nombres, nombre])
    setNombre('')
  }

  return (
    <>
    <form onSubmit={agregarNombre}>
      <input type="text" placeholder="Nombre"
      accept='text'
      required
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      />
      <button type='submit'>Agregar</button>
    </form>
      <ul>
      {
        nombres.map((nombre: string, index: number) => ( 
          <li key={index}>{nombre}</li>
        ))
      }
      </ul>
    </>
  )
}

export default App
