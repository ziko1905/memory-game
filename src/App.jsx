import { useState } from 'react'
import './App.css'
import './fetchImages.js'
import { CardGrid } from './components/CardGrid.jsx'

export function App() {
  console.log("App opened")
  return (
    <>
      <CardGrid />
    </>
  )
}
