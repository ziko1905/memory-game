import { useState, useEffect } from "react";
import { getCards } from "../fetchImages";


export function CardGrid() {
    const [selected, setSelected] = useState(new Set())

    return (
        <CardGridLoader />
    )
}

function CardGridLoader () {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getCards().then(response => {
            setCards(response)
        })
    }, [])
    return (
        <div className="cardGrid">
            {cards.map(card => {
                return <Card key={card.id}/>
                }
            )}
        </div>
    )
}

function Card() {
    return (<div className="card">
            <img src="url" alt=""/>
        </div>
    )
}