import { useState } from "react"
import "../styles/GameScore.css"

export function GameScore({currScore}) {
    const [maxScore, setMaxScore] = useState(0)
    if (currScore > maxScore) setMaxScore(currScore)

    return (
        <div className="game-score-div">
            <h1>Sport Meme Memory Game</h1>
            <h3>Best Score: {maxScore}</h3>
            <h3>Current Score: {currScore}</h3>
        </div>
    )
}