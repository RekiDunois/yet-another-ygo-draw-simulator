import { useState } from 'react'
import './App.css'
import { Deck } from './components/deck'
import { DeckImporter } from './components/deck-importer'

function App() {
  return (
    <div className="App">
      <Deck
        data={{
          id: 1,
          name: '114514',
          quantity: 40,
          main: [],
          side: [],
          ex: [],
        }}
      />
    </div>
  )
}

export default App
