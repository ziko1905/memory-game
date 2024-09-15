import { useState } from 'react'
import './App.css'
import './fetchImages.js'
import { CardGrid } from './components/CardGrid'
import { GameScore } from './components/GameScore'

export function App() {
  console.log("App opened")
  return (
    <div className="game-div">
      <GameScore />
      <CardGrid />
    </div>
  )
}
