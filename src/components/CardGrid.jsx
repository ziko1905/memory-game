import { useState, useEffect } from "react";
import { getCards, shuffle } from "../fetchImages";
import placeHolderImg from "../assets/placeholder-image.png"
import "../styles/CardGrid.css"

export function CardGrid({callBack}) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getCards().then(response => {
            setCards(shuffle(response))
        })
    }, [])

    return (
        <div className="card-grid">
            {cards.map(card => {
                return <Card callBack={() => {
                    setCards(shuffle(cards))
                    callBack(card.id)
                }} key={card.id} url={card.url} alt={card.alt}/>
                }
            )}
        </div>
    )
}

function Card({url, alt, callBack}) {
    const [imgSrc, setImgSrc] = useState(placeHolderImg)

    useEffect(() => {
        url.then(resolve => {
                if (resolve.meta.status === 200) setImgSrc(resolve.data.images.fixed_width.url)
            })
    }, [url])

    return (<button onClick={callBack} className="card">
            <img src={imgSrc} alt={alt}/>
        </button>
    )
}