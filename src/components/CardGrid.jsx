import { useState, useEffect } from "react";
import { getCards, shuffle } from "../fetchImages";
import placeHolderImg from "../assets/placeholder-image.png"
import "../styles/CardGrid.css"

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
            console.log(shuffle(response))
            setCards(shuffle(response))
        })
    }, [])

    return (
        <div className="card-grid">
            {cards.map(card => {
                return <Card key={card.id} url={card.url} alt={card.alt}/>
                }
            )}
        </div>
    )
}

function Card({url, alt}) {
    const [imgSrc, setImgSrc] = useState(placeHolderImg)

    useEffect(() => {
        url.then(resolve => {
                if (resolve.meta.status === 200) setImgSrc(resolve.data.images.fixed_width.url)
            })
    }, [url])

    return (<button className="card">
            <img src={imgSrc} alt={alt}/>
        </button>
    )
}