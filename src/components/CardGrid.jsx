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
                return <Card key={card.id} url={card.url}/>
                }
            )}
        </div>
    )
}

function Card({url}) {
    const [imgSrc, setImgSrc] = useState("defualt")

    console.log(url, "init url")
    useEffect(() => {
        url.then(resolve => {
            setImgSrc(resolve.meta.msg)
            console.log(resolve.meta.msg)
            }
            )
    }, [url])

    return (<div className="card">
            <img src={imgSrc} alt=""/>
        </div>
    )
}