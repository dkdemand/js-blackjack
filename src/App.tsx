import React from 'react'
import GameTable from './components/game-table'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        S6 BlackJack
      </header>
      <GameTable
        playerCards={[['a', 's']]}
        dealerCards={[[3, 'c']]}
        playerChips={1000}
        dealerChips={10000}
      />
    </div>
  )
}

export default App