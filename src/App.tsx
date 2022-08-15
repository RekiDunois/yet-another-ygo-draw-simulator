import { useState } from 'react'
import './App.css'
import { Deck } from './components/deck'

function App() {
  return (
    <div className="App">
      <Deck
        data={{
          id: 1,
          name: '114514',
          quantity: 40,
          main: [
            { id: 1, name: '老老', quantity: 2 },
            { id: 2, name: '瑞瑞', quantity: 2 },
          ],
          side: [],
          ex: [],
        }}
      ></Deck>
    </div>
  )
}

export default App
