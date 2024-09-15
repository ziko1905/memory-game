import { useState } from 'react'
import './App.css'
import './fetchImages.js'
import { CardGrid } from './components/CardGrid'
import { GameScore } from './components/GameScore'

export function App() {
  const [currCount, setCurrCount] = useState(0)
  const [selected, setSelected] = useState(new Set())

  function handleReset() {
    setCurrCount(0)
    setSelected(new Set())
  }

  function handleGuess(guess) {
    if (!selected.has(guess)) {
      const newCount = currCount + 1
      const newSet = new Set(selected)

      newSet.add(guess)
      setCurrCount(newCount)
      setSelected(newSet)

      if (newCount > maxCount) setMaxCount(newCount)
    } else handleReset()
  }

  return (
    <div className="game-div">
      <GameScore currScore={currCount}/>
      <CardGrid callBack={handleGuess}/>
    </div>
  )
}
